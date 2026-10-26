import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { WatchFaceRenderer, WatchFaceState, WatchZoneId } from '../watch/WatchFaceRenderer';

export interface HazardEntity {
  id: number;
  mesh: THREE.Group;
  velocity: THREE.Vector3;
  type: 'thermal' | 'emp' | 'toxic';
  hp: number;
}

export interface EnergyNodeEntity {
  id: number;
  mesh: THREE.Mesh;
  pullingToWatch: boolean;
}

export interface SceneCallbacks {
  onWatchZoneTrigger: (zone: NonNullable<WatchZoneId>) => void;
  onHazardDestroyed: (byEmp: boolean) => void;
  onHazardImpact: (type: 'thermal' | 'emp' | 'toxic') => void;
  onEnergyCollected: (amount: number) => void;
  onHoverChange: (zone: WatchZoneId, entityType: 'hazard' | 'energy' | null) => void;
}

export class ResWatchScene {
  private container: HTMLElement;
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private watchFaceRenderer: WatchFaceRenderer;
  private screenTexture: THREE.CanvasTexture;

  private watchRoot: THREE.Group;
  private watchModelGroup: THREE.Group;
  private screenPlaneGroup: THREE.Group;
  private hologramGroup: THREE.Group;
  private empShockwaveMesh: THREE.Mesh;
  private safeDomeMesh: THREE.Mesh;
  private portalGroup: THREE.Group;
  private mrHandReticle: THREE.Group;

  private envParticles: THREE.Points;
  private envGrid: THREE.GridHelper;
  private ambientLight: THREE.AmbientLight;
  private keyLight: THREE.DirectionalLight;
  private rimLight: THREE.PointLight;
  private screenGlowLight: THREE.PointLight;

  private zoneHitMeshes: Map<NonNullable<WatchZoneId>, THREE.Mesh> = new Map();
  private hazards: HazardEntity[] = [];
  private energyNodes: EnergyNodeEntity[] = [];
  private explosions: { mesh: THREE.Points; age: number }[] = [];
  private nextEntityId: number = 1;

  private raycaster = new THREE.Raycaster();
  private pointer = new THREE.Vector2();
  private isDragging = false;
  private dragStart = { x: 0, y: 0 };
  // Slight 3/4 angle matching the attached watch image, with the screen facing the camera!
  private targetRotY = -0.28;
  private targetRotX = 0.06;
  private currentRotY = -0.28;
  private currentRotX = 0.06;
  private wristMode = false;

  private empWaveActive = false;
  private empWaveRadius = 0.1;

  private callbacks: SceneCallbacks;
  private stlLoaded = false;

  // Screen center & outward normal in base.stl coordinates:
  // In base.stl: X is right, Z is up [0..1.90], and -Y is forward (watch face is at Y = -0.7109).
  // Rotating around X by -Math.PI/2 maps (x, y, z) -> (x, +z, -y), so the watch screen faces +Z (toward the camera)!
  private readonly STL_ROT_X = -Math.PI / 2;
  private readonly STL_CENTER = new THREE.Vector3(0.0, -0.7109, 1.0684);
  private readonly STL_NORMAL = new THREE.Vector3(0.0, -0.980427, 0.196882).normalize();
  private readonly STL_OFFSET = new THREE.Vector3(0.0, 0.05, -1.02);

  constructor(container: HTMLElement, callbacks: SceneCallbacks) {
    this.container = container;
    this.callbacks = callbacks;

    this.scene = new THREE.Scene();

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    this.camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    this.camera.position.set(0, 0.12, 3.15);
    this.camera.lookAt(0, 0.04, 0);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.22;
    container.innerHTML = '';
    container.appendChild(this.renderer.domElement);

    // Watch Face 2D -> 3D CanvasTexture
    this.watchFaceRenderer = new WatchFaceRenderer(1024);
    this.screenTexture = new THREE.CanvasTexture(this.watchFaceRenderer.canvas);
    this.screenTexture.anisotropy = 4;
    this.screenTexture.colorSpace = THREE.SRGBColorSpace;

    // Lighting
    this.ambientLight = new THREE.AmbientLight(0xdbeafe, 1.5);
    this.scene.add(this.ambientLight);

    this.keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
    this.keyLight.position.set(2.8, 4.5, 4.5);
    this.scene.add(this.keyLight);

    this.rimLight = new THREE.PointLight(0x56b9eb, 3.8, 12);
    this.rimLight.position.set(-2.5, 1.8, 2.5);
    this.scene.add(this.rimLight);

    this.screenGlowLight = new THREE.PointLight(0x56b9eb, 2.2, 5.0);
    this.screenGlowLight.position.set(0, 0.2, 1.7);
    this.scene.add(this.screenGlowLight);

    // Environment Grid & Volumetric Particles
    this.envGrid = new THREE.GridHelper(26, 36, 0x38bdf8, 0x1e293b);
    this.envGrid.position.y = -1.55;
    (this.envGrid.material as THREE.Material).transparent = true;
    (this.envGrid.material as THREE.Material).opacity = 0.35;
    this.scene.add(this.envGrid);

    this.envParticles = this.createEnvironmentParticles();
    this.scene.add(this.envParticles);

    // Watch Root Hierarchy
    this.watchRoot = new THREE.Group();
    this.scene.add(this.watchRoot);

    this.watchModelGroup = new THREE.Group();
    this.watchRoot.add(this.watchModelGroup);

    this.screenPlaneGroup = new THREE.Group();
    this.watchRoot.add(this.screenPlaneGroup);

    this.hologramGroup = new THREE.Group();
    this.screenPlaneGroup.add(this.hologramGroup);

    // Build fallback watch immediately & load base.stl
    this.buildProceduralWatchFallback();
    this.setupWatchScreenAndHitZones();
    this.loadAuthenticStlWatch();

    // EMP Shockwave Torus
    const empGeo = new THREE.TorusGeometry(1, 0.035, 16, 64);
    const empMat = new THREE.MeshBasicMaterial({
      color: 0x56b9eb,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
    });
    this.empShockwaveMesh = new THREE.Mesh(empGeo, empMat);
    this.empShockwaveMesh.visible = false;
    this.screenPlaneGroup.add(this.empShockwaveMesh);

    // Safe Dome Shield (Home Icon activation)
    const domeGeo = new THREE.IcosahedronGeometry(1.42, 2);
    const domeMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.0,
      blending: THREE.AdditiveBlending,
    });
    this.safeDomeMesh = new THREE.Mesh(domeGeo, domeMat);
    this.watchRoot.add(this.safeDomeMesh);

    // Extraction Portal Vortex behind watch
    this.portalGroup = this.createExtractionPortal();
    this.portalGroup.visible = false;
    this.scene.add(this.portalGroup);

    // MR Hand Spatial Cursor Reticle
    this.mrHandReticle = this.createMrHandReticle();
    this.mrHandReticle.visible = false;
    this.scene.add(this.mrHandReticle);

    this.bindEvents();
  }

  private createEnvironmentParticles(): THREE.Points {
    const count = 420;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 9;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 1.5;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({
      color: 0x56b9eb,
      size: 0.055,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    return new THREE.Points(geo, mat);
  }

  private createExtractionPortal(): THREE.Group {
    const group = new THREE.Group();
    group.position.set(0, 0.1, -1.6);

    for (let i = 0; i < 3; i++) {
      const ringGeo = new THREE.RingGeometry(1.1 + i * 0.32, 1.16 + i * 0.32, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x38bdf8 : 0x34d399,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.55 - i * 0.12,
        blending: THREE.AdditiveBlending,
      });
      const mesh = new THREE.Mesh(ringGeo, ringMat);
      group.add(mesh);
    }
    return group;
  }

  private createMrHandReticle(): THREE.Group {
    const g = new THREE.Group();
    const ringGeo = new THREE.RingGeometry(0.11, 0.145, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });
    g.add(new THREE.Mesh(ringGeo, ringMat));

    const coreGeo = new THREE.SphereGeometry(0.045, 16, 16);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x6ee7b7 });
    g.add(new THREE.Mesh(coreGeo, coreMat));
    return g;
  }

  private getScreenTransformInRoot() {
    const centerInRoot = this.STL_CENTER.clone()
      .add(this.STL_OFFSET)
      .applyAxisAngle(new THREE.Vector3(1, 0, 0), this.STL_ROT_X);

    const normalInRoot = this.STL_NORMAL.clone()
      .applyAxisAngle(new THREE.Vector3(1, 0, 0), this.STL_ROT_X)
      .normalize();

    return { centerInRoot, normalInRoot };
  }

  private setupWatchScreenAndHitZones() {
    const { centerInRoot, normalInRoot } = this.getScreenTransformInRoot();

    // Place screenPlaneGroup slightly in front of the STL face (+0.018 along outward normal) so it is 100% visible
    this.screenPlaneGroup.position.copy(centerInRoot).addScaledVector(normalInRoot, 0.018);
    const quat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), normalInRoot);
    this.screenPlaneGroup.quaternion.copy(quat);

    // 1. 3D Metallic Slate-Blue Bezel Rim around the screen
    const bezelRimGeo = new THREE.RingGeometry(0.542, 0.596, 64);
    const bezelRimMat = new THREE.MeshStandardMaterial({
      color: 0x263c52,
      roughness: 0.32,
      metalness: 0.55,
      side: THREE.DoubleSide,
    });
    const bezelRimMesh = new THREE.Mesh(bezelRimGeo, bezelRimMat);
    bezelRimMesh.position.z = -0.002;
    this.screenPlaneGroup.add(bezelRimMesh);

    // 2. High-DPI OLED Watch Screen Disc (radius = 0.548 matching watch bezel)
    const screenRadius = 0.548;
    const screenGeo = new THREE.CircleGeometry(screenRadius, 64);
    const screenMat = new THREE.MeshBasicMaterial({
      map: this.screenTexture,
      side: THREE.DoubleSide,
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.z = 0.002;
    this.screenPlaneGroup.add(screenMesh);

    // 3. Outer glowing cyan bezel ring in 3D
    const cyanBezelGeo = new THREE.TorusGeometry(0.576, 0.012, 16, 64);
    const cyanBezelMat = new THREE.MeshBasicMaterial({
      color: 0x56b9eb,
    });
    const cyanBezelMesh = new THREE.Mesh(cyanBezelGeo, cyanBezelMat);
    cyanBezelMesh.position.z = 0.005;
    this.screenPlaneGroup.add(cyanBezelMesh);

    // 4. Holographic projection rings floating above watch face
    const holoRingGeo = new THREE.RingGeometry(0.46, 0.482, 64);
    const holoRingMat = new THREE.MeshBasicMaterial({
      color: 0x56b9eb,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.36,
      blending: THREE.AdditiveBlending,
    });
    const holoRing1 = new THREE.Mesh(holoRingGeo, holoRingMat);
    holoRing1.position.z = 0.055;
    this.hologramGroup.add(holoRing1);

    const holoRing2 = new THREE.Mesh(
      new THREE.RingGeometry(0.54, 0.555, 64),
      new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.22,
        blending: THREE.AdditiveBlending,
      })
    );
    holoRing2.position.z = 0.105;
    this.hologramGroup.add(holoRing2);

    // 5. Four Interactive 3D Hit Zones on the Watch Screen (matching WatchFaceRenderer layout)
    const hitZones: { id: NonNullable<WatchZoneId>; x: number; y: number; r: number }[] = [
      { id: 'battery', x: 0.02, y: 0.31, r: 0.16 }, // Top 73% battery
      { id: 'alert', x: -0.18, y: 0.14, r: 0.14 },  // Upper-left ⚠️ triangle
      { id: 'heart', x: 0.03, y: -0.04, r: 0.21 },  // Center ❤️ 86 BPM
      { id: 'home', x: 0.0, y: -0.33, r: 0.15 },    // Bottom 🏠 Home icon
    ];

    hitZones.forEach((z) => {
      const hitGeo = new THREE.CylinderGeometry(z.r, z.r, 0.08, 24);
      hitGeo.rotateX(Math.PI / 2);
      const hitMat = new THREE.MeshBasicMaterial({
        color: 0x56b9eb,
        transparent: true,
        opacity: 0.0,
        depthWrite: false,
      });
      const hitMesh = new THREE.Mesh(hitGeo, hitMat);
      hitMesh.position.set(z.x, z.y, 0.035);
      hitMesh.userData = { watchZone: z.id };
      this.screenPlaneGroup.add(hitMesh);
      this.zoneHitMeshes.set(z.id, hitMesh);
    });
  }

  private buildProceduralWatchFallback() {
    this.watchModelGroup.clear();
    const { centerInRoot, normalInRoot } = this.getScreenTransformInRoot();

    const caseGroup = new THREE.Group();
    caseGroup.position.copy(centerInRoot);
    caseGroup.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normalInRoot);

    // Slate-blue metallic watch body behind screen
    const bodyGeo = new THREE.CylinderGeometry(0.595, 0.595, 0.28, 64);
    bodyGeo.rotateX(Math.PI / 2);
    bodyGeo.translate(0, 0, -0.15);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x263b50,
      metalness: 0.55,
      roughness: 0.35,
    });
    caseGroup.add(new THREE.Mesh(bodyGeo, bodyMat));

    // Strap loop behind watch face
    const strapGeo = new THREE.TorusGeometry(0.76, 0.18, 24, 64);
    strapGeo.rotateY(Math.PI / 2);
    strapGeo.scale(1.3, 1.05, 0.95);
    const strapMat = new THREE.MeshStandardMaterial({
      color: 0x12161d,
      roughness: 0.75,
      metalness: 0.15,
    });
    const strapMesh = new THREE.Mesh(strapGeo, strapMat);
    strapMesh.position.set(0, -0.04, -0.05);
    this.watchModelGroup.add(strapMesh);
    this.watchModelGroup.add(caseGroup);
  }

  private loadAuthenticStlWatch() {
    const loader = new STLLoader();
    const baseUrl = import.meta.env.BASE_URL || './';
    const candidateUrls = [
      `${baseUrl}assets/watch/base.stl`,
      './public/assets/watch/base.stl',
      '../public/assets/watch/base.stl',
    ];

    const tryLoad = (urlIdx: number) => {
      if (urlIdx >= candidateUrls.length) return;
      loader.load(
        candidateUrls[urlIdx],
        (geometry) => {
          const posAttr = geometry.getAttribute('position');
          const count = posAttr.count;
          const colors = new Float32Array(count * 3);

          const cx = this.STL_CENTER.x;
          const cy = this.STL_CENTER.y;
          const cz = this.STL_CENTER.z;
          const nx = this.STL_NORMAL.x;
          const ny = this.STL_NORMAL.y;
          const nz = this.STL_NORMAL.z;

          const ux = 1.0, uy = 0.0, uz = 0.0;
          const vx = 0.0, vy = nz, vz = -ny;

          const cStrapDark = new THREE.Color(0x11151c);
          const cStrapRib = new THREE.Color(0x1b2230);
          const cCaseSlate = new THREE.Color(0x273c52);
          const cBezelCyan = new THREE.Color(0x58beee);
          const cScreenNavy = new THREE.Color(0x091726);

          for (let i = 0; i < count; i++) {
            let x = posAttr.getX(i);
            let y = posAttr.getY(i);
            let z = posAttr.getZ(i);

            const dx = x - cx;
            const dy = y - cy;
            const dz = z - cz;

            const dn = dx * nx + dy * ny + dz * nz;
            const du = dx * ux + dy * uy + dz * uz;
            const dv = dx * vx + dy * vy + dz * vz;
            const r = Math.sqrt(du * du + dv * dv);

            let col = cStrapDark;
            if (dn >= -0.31 && r <= 0.608) {
              if (dn > -0.045 && r <= 0.542) {
                col = cScreenNavy;
                // Slightly recess inner screen vertices of base.stl so our crisp 1024x1024 OLED disc sits cleanly in front
                if (dn > 0.0) {
                  x -= nx * dn;
                  y -= ny * dn;
                  z -= nz * dn;
                  posAttr.setXYZ(i, x, y, z);
                }
              } else if (dn > -0.05 && ((r > 0.542 && r <= 0.564) || (r > 0.578 && r <= 0.595))) {
                col = cBezelCyan;
              } else {
                col = cCaseSlate;
              }
            } else {
              const ribWave = Math.sin(z * 38.0 + y * 12.0);
              col = ribWave > 0.55 ? cStrapRib : cStrapDark;
            }

            colors[i * 3] = col.r;
            colors[i * 3 + 1] = col.g;
            colors[i * 3 + 2] = col.b;
          }

          posAttr.needsUpdate = true;
          geometry.computeVertexNormals();
          geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

          // Translate and rotate by -Math.PI/2 around X so the watch face points forward (+Z) and upright (+Y)!
          geometry.translate(this.STL_OFFSET.x, this.STL_OFFSET.y, this.STL_OFFSET.z);
          geometry.rotateX(this.STL_ROT_X);

          const mat = new THREE.MeshStandardMaterial({
            vertexColors: true,
            roughness: 0.42,
            metalness: 0.38,
          });

          const mesh = new THREE.Mesh(geometry, mat);
          this.watchModelGroup.clear();
          this.watchModelGroup.add(mesh);
          this.stlLoaded = true;
        },
        undefined,
        () => {
          tryLoad(urlIdx + 1);
        }
      );
    };

    tryLoad(0);
  }

  public setSectorTheme(sectorId: number, mrCameraEnabled: boolean, mrFilter: 'hologram' | 'tactical' | 'virtual') {
    const isTransparent = mrCameraEnabled && mrFilter !== 'virtual';
    if (isTransparent) {
      this.scene.background = null;
      this.renderer.setClearColor(0x000000, 0);
    } else {
      const bgColors: Record<number, number> = {
        1: 0x040d1a,
        2: 0x18080c,
        3: 0x061512,
        4: 0x070b1e,
      };
      this.scene.background = new THREE.Color(bgColors[sectorId] || 0x040d1a);
    }

    const themeColors: Record<number, number> = {
      1: 0x38bdf8, // Ion Storm Cyan
      2: 0xf97316, // Thermal Volcanic Orange
      3: 0x10b981, // Bio-Quantum Emerald
      4: 0x818cf8, // Portal Extraction Indigo/Cyan
    };
    const col = themeColors[sectorId] || 0x38bdf8;
    this.rimLight.color.setHex(col);
    (this.envParticles.material as THREE.PointsMaterial).color.setHex(col);
  }

  public setWristMode(enabled: boolean) {
    this.wristMode = enabled;
    if (enabled) {
      this.targetRotY = 0.18;
      this.targetRotX = 0.16;
    } else {
      this.targetRotY = -0.28;
      this.targetRotX = 0.06;
    }
  }

  public resetView() {
    this.targetRotY = -0.28;
    this.targetRotX = 0.06;
  }

  public triggerEmpShockwave() {
    this.empWaveActive = true;
    this.empWaveRadius = 0.15;
    this.empShockwaveMesh.visible = true;

    const toDestroy = [...this.hazards];
    this.hazards = [];
    toDestroy.forEach((h) => {
      this.spawnExplosion(h.mesh.position, 0x56b9eb);
      this.scene.remove(h.mesh);
      this.callbacks.onHazardDestroyed(true);
    });
  }

  public pullAllEnergyNodes() {
    this.energyNodes.forEach((node) => {
      node.pullingToWatch = true;
    });
    for (let i = 0; i < 2; i++) {
      this.spawnEnergyNode(true);
    }
  }

  public spawnHazard(sectorId: number) {
    if (this.hazards.length >= 6) return;

    const types: ('thermal' | 'emp' | 'toxic')[] =
      sectorId === 2 ? ['thermal', 'thermal', 'emp'] : sectorId === 3 ? ['toxic', 'toxic', 'emp'] : ['emp', 'thermal', 'toxic'];
    const type = types[Math.floor(Math.random() * types.length)];

    const group = new THREE.Group();
    const colorMap = {
      thermal: 0xef4444,
      emp: 0xf59e0b,
      toxic: 0xa855f7,
    };
    const col = colorMap[type];

    const coreGeo = new THREE.OctahedronGeometry(0.19, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: col,
      emissive: col,
      emissiveIntensity: 0.85,
      roughness: 0.2,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    const ringGeo = new THREE.RingGeometry(0.24, 0.28, 24);
    const ringMat = new THREE.MeshBasicMaterial({
      color: col,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.75,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    group.add(ringMesh);

    const angle = Math.random() * Math.PI * 2;
    const radius = 2.35 + Math.random() * 0.5;
    group.position.set(
      Math.cos(angle) * radius,
      (Math.random() - 0.5) * 1.8,
      Math.sin(angle) * 0.65 + 0.3
    );

    const id = this.nextEntityId++;
    group.userData = { hazardId: id };
    coreMesh.userData = { hazardId: id };
    ringMesh.userData = { hazardId: id };

    const dir = new THREE.Vector3(0, 0, 0.5).sub(group.position).normalize();
    const speed = 0.26 + sectorId * 0.045;

    this.scene.add(group);
    this.hazards.push({
      id,
      mesh: group,
      velocity: dir.multiplyScalar(speed),
      type,
      hp: 1,
    });
  }

  public spawnEnergyNode(autoPull: boolean = false) {
    if (this.energyNodes.length >= 6 && !autoPull) return;

    const geo = new THREE.OctahedronGeometry(0.14, 0);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0ea5e9,
      emissiveIntensity: 0.9,
      roughness: 0.1,
      metalness: 0.5,
    });
    const mesh = new THREE.Mesh(geo, mat);

    const angle = Math.random() * Math.PI * 2;
    const r = 1.65 + Math.random() * 0.65;
    mesh.position.set(Math.cos(angle) * r, (Math.random() - 0.5) * 1.5, 0.45 + (Math.random() - 0.5) * 0.5);

    const id = this.nextEntityId++;
    mesh.userData = { energyId: id };
    this.scene.add(mesh);
    this.energyNodes.push({
      id,
      mesh,
      pullingToWatch: autoPull,
    });
  }

  private spawnExplosion(pos: THREE.Vector3, colorHex: number) {
    const count = 28;
    const positions = new Float32Array(count * 3);
    const velocities: THREE.Vector3[] = [];
    for (let i = 0; i < count; i++) {
      positions[i * 3] = pos.x;
      positions[i * 3 + 1] = pos.y;
      positions[i * 3 + 2] = pos.z;
      velocities.push(
        new THREE.Vector3((Math.random() - 0.5) * 2.4, (Math.random() - 0.5) * 2.4, (Math.random() - 0.5) * 2.4)
      );
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.userData = { velocities };
    const mat = new THREE.PointsMaterial({
      color: colorHex,
      size: 0.08,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,
    });
    const points = new THREE.Points(geo, mat);
    this.scene.add(points);
    this.explosions.push({ mesh: points, age: 0 });
  }

  public getActiveHazardCount(): number {
    return this.hazards.length;
  }

  public clearAllEntities() {
    this.hazards.forEach((h) => this.scene.remove(h.mesh));
    this.hazards = [];
    this.energyNodes.forEach((e) => this.scene.remove(e.mesh));
    this.energyNodes = [];
  }

  public updateMrHandInteraction(handX: number, handY: number, active: boolean) {
    this.mrHandReticle.visible = active;
    if (!active) return;

    const worldX = handX * 1.9;
    const worldY = handY * 1.25 + 0.15;
    this.mrHandReticle.position.set(worldX, worldY, 0.95);
    this.mrHandReticle.rotation.z += 0.08;

    for (let i = this.hazards.length - 1; i >= 0; i--) {
      const h = this.hazards[i];
      if (h.mesh.position.distanceTo(this.mrHandReticle.position) < 0.48) {
        this.spawnExplosion(h.mesh.position, 0x38bdf8);
        this.scene.remove(h.mesh);
        this.hazards.splice(i, 1);
        this.callbacks.onHazardDestroyed(false);
      }
    }

    for (let i = this.energyNodes.length - 1; i >= 0; i--) {
      const e = this.energyNodes[i];
      if (e.mesh.position.distanceTo(this.mrHandReticle.position) < 0.48) {
        e.pullingToWatch = true;
      }
    }
  }

  public update(dt: number, faceState: WatchFaceState) {
    const t = faceState.timeSec;

    // 1. Update 2D -> 3D Watch Screen Texture
    this.watchFaceRenderer.render({
      ...faceState,
      activeHazards: this.hazards.length,
    });
    this.screenTexture.needsUpdate = true;

    // 2. Smooth 3D Watch Rotation + Subtle Floating Breath Motion
    this.currentRotY += (this.targetRotY - this.currentRotY) * Math.min(1, dt * 8);
    this.currentRotX += (this.targetRotX - this.currentRotX) * Math.min(1, dt * 8);

    const floatY = Math.sin(t * 1.8) * 0.03;
    const heartShake = faceState.bpm > 140 ? Math.sin(t * 28) * 0.008 : 0;

    this.watchRoot.position.set(
      this.wristMode ? -0.1 : 0,
      floatY + heartShake,
      this.wristMode ? 0.22 : 0
    );
    this.watchRoot.rotation.y = this.currentRotY;
    this.watchRoot.rotation.x = this.currentRotX;
    this.watchRoot.rotation.z = this.wristMode ? -0.18 : 0;

    // 3. Hologram Rings Animation
    this.hologramGroup.children.forEach((c, idx) => {
      c.rotation.z = t * (idx % 2 === 0 ? 0.6 : -0.8);
      const pulseOffset = Math.sin(t * 3 + idx) * 0.012;
      c.position.z = (idx + 1) * 0.05 + pulseOffset;
    });

    // 4. EMP Shockwave Expansion
    if (this.empWaveActive) {
      this.empWaveRadius += dt * 4.2;
      this.empShockwaveMesh.scale.setScalar(this.empWaveRadius);
      const mat = this.empShockwaveMesh.material as THREE.MeshBasicMaterial;
      mat.opacity = Math.max(0, 1 - this.empWaveRadius / 3.2);
      if (this.empWaveRadius >= 3.2) {
        this.empWaveActive = false;
        this.empShockwaveMesh.visible = false;
      }
    }

    // 5. Safe Dome & Extraction Portal
    const domeMat = this.safeDomeMesh.material as THREE.MeshBasicMaterial;
    const targetDomeOpacity = faceState.shieldActive ? 0.28 + Math.sin(t * 5) * 0.08 : 0.0;
    domeMat.opacity += (targetDomeOpacity - domeMat.opacity) * Math.min(1, dt * 6);
    this.safeDomeMesh.rotation.y += dt * 0.45;
    this.safeDomeMesh.rotation.x += dt * 0.2;

    this.portalGroup.visible = faceState.extractionProgress > 15 || faceState.shieldActive;
    if (this.portalGroup.visible) {
      const portalScale = 0.4 + (faceState.extractionProgress / 100) * 0.85;
      this.portalGroup.scale.setScalar(portalScale);
      this.portalGroup.children.forEach((ring, i) => {
        ring.rotation.z = t * (i % 2 === 0 ? 1.2 : -1.5);
      });
    }

    // 6. Update Hazards
    for (let i = this.hazards.length - 1; i >= 0; i--) {
      const h = this.hazards[i];
      h.mesh.position.addScaledVector(h.velocity, dt);
      h.mesh.rotation.x += dt * 2.2;
      h.mesh.rotation.y += dt * 1.8;

      const distToWatch = h.mesh.position.distanceTo(new THREE.Vector3(0, 0, 0.5));
      if (faceState.shieldActive && distToWatch < 1.45) {
        this.spawnExplosion(h.mesh.position, 0x38bdf8);
        this.scene.remove(h.mesh);
        this.hazards.splice(i, 1);
        this.callbacks.onHazardDestroyed(false);
      } else if (distToWatch < 0.65) {
        this.spawnExplosion(h.mesh.position, 0xef4444);
        this.scene.remove(h.mesh);
        this.hazards.splice(i, 1);
        this.callbacks.onHazardImpact(h.type);
      }
    }

    // 7. Update Energy Nodes
    for (let i = this.energyNodes.length - 1; i >= 0; i--) {
      const e = this.energyNodes[i];
      e.mesh.rotation.y += dt * 2.0;
      e.mesh.rotation.x += dt * 1.2;

      if (e.pullingToWatch) {
        const dir = new THREE.Vector3(0, 0.1, 0.68).sub(e.mesh.position);
        const dist = dir.length();
        if (dist < 0.35) {
          this.spawnExplosion(e.mesh.position, 0x34d399);
          this.scene.remove(e.mesh);
          this.energyNodes.splice(i, 1);
          this.callbacks.onEnergyCollected(9);
          continue;
        }
        dir.normalize();
        e.mesh.position.addScaledVector(dir, dt * 4.8);
      } else {
        e.mesh.position.y += Math.sin(t * 2.5 + e.id) * dt * 0.15;
      }
    }

    // 8. Update Particle Explosions
    for (let i = this.explosions.length - 1; i >= 0; i--) {
      const exp = this.explosions[i];
      exp.age += dt;
      const posAttr = exp.mesh.geometry.getAttribute('position') as THREE.BufferAttribute;
      const vels = exp.mesh.geometry.userData.velocities as THREE.Vector3[];
      for (let j = 0; j < vels.length; j++) {
        posAttr.setXYZ(
          j,
          posAttr.getX(j) + vels[j].x * dt,
          posAttr.getY(j) + vels[j].y * dt,
          posAttr.getZ(j) + vels[j].z * dt
        );
      }
      posAttr.needsUpdate = true;
      (exp.mesh.material as THREE.PointsMaterial).opacity = Math.max(0, 1 - exp.age * 1.8);
      if (exp.age > 0.55) {
        this.scene.remove(exp.mesh);
        this.explosions.splice(i, 1);
      }
    }

    // 9. Environment Particles Drift
    this.envParticles.rotation.y = t * 0.04;

    this.renderer.render(this.scene, this.camera);
  }

  private bindEvents() {
    const dom = this.renderer.domElement;

    const updatePointer = (clientX: number, clientY: number) => {
      const rect = dom.getBoundingClientRect();
      this.pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      this.pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    };

    dom.addEventListener('pointerdown', (e) => {
      updatePointer(e.clientX, e.clientY);
      this.raycaster.setFromCamera(this.pointer, this.camera);

      // 1. Check 3D Hazards clicked
      const hazardMeshes = this.hazards.map((h) => h.mesh);
      const hazardHits = this.raycaster.intersectObjects(hazardMeshes, true);
      if (hazardHits.length > 0) {
        let obj: THREE.Object3D | null = hazardHits[0].object;
        while (obj && !obj.userData?.hazardId) obj = obj.parent;
        if (obj?.userData?.hazardId) {
          const idx = this.hazards.findIndex((h) => h.id === obj!.userData.hazardId);
          if (idx !== -1) {
            const h = this.hazards[idx];
            this.spawnExplosion(h.mesh.position, 0x38bdf8);
            this.scene.remove(h.mesh);
            this.hazards.splice(idx, 1);
            this.callbacks.onHazardDestroyed(false);
            return;
          }
        }
      }

      // 2. Check 3D Energy Crystals clicked
      const energyMeshes = this.energyNodes.map((n) => n.mesh);
      const energyHits = this.raycaster.intersectObjects(energyMeshes, false);
      if (energyHits.length > 0) {
        const eid = energyHits[0].object.userData?.energyId;
        const node = this.energyNodes.find((n) => n.id === eid);
        if (node) {
          node.pullingToWatch = true;
          return;
        }
      }

      // 3. Check 3D Watch Screen Zones clicked
      const zoneMeshes = Array.from(this.zoneHitMeshes.values());
      const zoneHits = this.raycaster.intersectObjects(zoneMeshes, false);
      if (zoneHits.length > 0) {
        const zone = zoneHits[0].object.userData?.watchZone as NonNullable<WatchZoneId>;
        if (zone) {
          this.callbacks.onWatchZoneTrigger(zone);
          return;
        }
      }

      // Otherwise start rotating the 3D watch
      this.isDragging = true;
      this.dragStart = { x: e.clientX, y: e.clientY };
    });

    dom.addEventListener('pointermove', (e) => {
      updatePointer(e.clientX, e.clientY);

      if (this.isDragging) {
        const dx = e.clientX - this.dragStart.x;
        const dy = e.clientY - this.dragStart.y;
        this.dragStart = { x: e.clientX, y: e.clientY };
        this.targetRotY = Math.max(-1.45, Math.min(1.45, this.targetRotY + dx * 0.0075));
        this.targetRotX = Math.max(-0.85, Math.min(0.85, this.targetRotX + dy * 0.0075));
        return;
      }

      // Hover raycast
      this.raycaster.setFromCamera(this.pointer, this.camera);

      const zoneMeshes = Array.from(this.zoneHitMeshes.values());
      const zoneHits = this.raycaster.intersectObjects(zoneMeshes, false);
      if (zoneHits.length > 0) {
        const zone = zoneHits[0].object.userData?.watchZone as WatchZoneId;
        dom.style.cursor = 'pointer';
        this.callbacks.onHoverChange(zone, null);
        return;
      }

      const hazardHits = this.raycaster.intersectObjects(
        this.hazards.map((h) => h.mesh),
        true
      );
      if (hazardHits.length > 0) {
        dom.style.cursor = 'crosshair';
        this.callbacks.onHoverChange(null, 'hazard');
        return;
      }

      const energyHits = this.raycaster.intersectObjects(
        this.energyNodes.map((n) => n.mesh),
        false
      );
      if (energyHits.length > 0) {
        dom.style.cursor = 'pointer';
        this.callbacks.onHoverChange(null, 'energy');
        return;
      }

      dom.style.cursor = 'grab';
      this.callbacks.onHoverChange(null, null);
    });

    window.addEventListener('pointerup', () => {
      this.isDragging = false;
    });

    dom.addEventListener(
      'wheel',
      (e) => {
        e.preventDefault();
        this.camera.position.z = Math.max(2.0, Math.min(4.8, this.camera.position.z + e.deltaY * 0.002));
      },
      { passive: false }
    );

    window.addEventListener('resize', () => {
      const w = this.container.clientWidth || window.innerWidth;
      const h = this.container.clientHeight || window.innerHeight;
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(w, h);
    });
  }

  public dispose() {
    this.renderer.dispose();
  }
}
