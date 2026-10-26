import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  Heart,
  AlertTriangle,
  BatteryCharging,
  Home,
  Camera,
  CameraOff,
  Volume2,
  VolumeX,
  RotateCcw,
  Shield,
  Zap,
  Wind,
  Activity,
  Sparkles,
  Eye,
  Compass,
  Hand,
  CheckCircle2,
} from 'lucide-react';
import { ResWatchScene } from './scene/ResWatchScene';
import { WatchZoneId } from './watch/WatchFaceRenderer';
import { WebcamTracker, HumanMotionData } from './vision/webcamTracker';
import { soundEngine } from './audio/soundEngine';

interface SectorInfo {
  id: number;
  name: string;
  subtitle: string;
  envHazardDesc: string;
  ambientBpmDrift: number; // BPM per second from environment
  batteryDrainRate: number; // % per second
  spawnInterval: number; // seconds
}

const SECTORS: SectorInfo[] = [
  {
    id: 1,
    name: 'Sector 01: Tormenta Ionizante',
    subtitle: 'Anomalías Electromagnéticas de Rango Cercano',
    envHazardDesc: 'Pulsos EMP drenan la batería (73%) y orbitan hacia el humano.',
    ambientBpmDrift: 1.4,
    batteryDrainRate: 0.75,
    spawnInterval: 3.4,
  },
  {
    id: 2,
    name: 'Sector 02: Falla Térmica Volcánica',
    subtitle: 'Estrés Calórico y Taquicardia Reactiva',
    envHazardDesc: 'Olas de calor elevan el pulso cardíaco (86 → 150+ BPM). Usa ❤️ para estabilizar.',
    ambientBpmDrift: 3.1,
    batteryDrainRate: 0.9,
    spawnInterval: 2.8,
  },
  {
    id: 3,
    name: 'Sector 03: Grieta Bio-Cuántica',
    subtitle: 'Enjambre de Anomalías y Arritmia Inducida',
    envHazardDesc: 'Alta densidad de amenazas (⚠️). Combina pulsos EMP y escudo doméstico (🏠).',
    ambientBpmDrift: 2.6,
    batteryDrainRate: 1.15,
    spawnInterval: 2.3,
  },
  {
    id: 4,
    name: 'Sector 04: Portal de Retorno a Casa (🏠)',
    subtitle: 'Secuencia Final de Extracción Biométrica',
    envHazardDesc: 'Mantén signos vitales estables y activa 🏠 para abrir el portal de rescate al 100%.',
    ambientBpmDrift: 3.4,
    batteryDrainRate: 1.25,
    spawnInterval: 2.0,
  },
];

interface TelemetryEvent {
  id: number;
  time: string;
  source: 'HUMANO' | 'ENTORNO' | 'RELOJ';
  text: string;
  tone: 'info' | 'warn' | 'danger' | 'success';
}

export function App() {
  const sceneContainerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const motionHudCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const sceneRef = useRef<ResWatchScene | null>(null);
  const trackerRef = useRef<WebcamTracker | null>(null);

  // Core Watch & Human Biometric State (Starts at exact reference image values: 86 BPM, 73% Battery)
  const [bpm, setBpm] = useState<number>(86);
  const [battery, setBattery] = useState<number>(73);
  const [bioStability, setBioStability] = useState<number>(100);
  const [extractionProgress, setExtractionProgress] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [sectorIdx, setSectorIdx] = useState<number>(0);
  const [gameStatus, setGameStatus] = useState<'playing' | 'extracted' | 'critical_reset'>('playing');

  // Interactive Watch Modes & States
  const [hoveredZone, setHoveredZone] = useState<WatchZoneId>(null);
  const [hoveredEntity, setHoveredEntity] = useState<'hazard' | 'energy' | null>(null);
  const [activePulseZone, setActivePulseZone] = useState<WatchZoneId>(null);
  const [activePulseTime, setActivePulseTime] = useState<number>(0);
  const [shieldActive, setShieldActive] = useState<boolean>(false);
  const [calmModeActive, setCalmModeActive] = useState<boolean>(false);
  const [wristMode, setWristMode] = useState<boolean>(false);
  const [showRefModal, setShowRefModal] = useState<boolean>(false);

  // Merged Reality (Camera + Human Motion + Visual Filter)
  const [mrCameraEnabled, setMrCameraEnabled] = useState<boolean>(false);
  const [mrFilter, setMrFilter] = useState<'hologram' | 'tactical' | 'virtual'>('hologram');
  const [motionData, setMotionData] = useState<HumanMotionData>({
    cameraActive: false,
    motionIntensity: 0,
    handX: 0,
    handY: 0,
    handDetected: false,
    calmStreakSeconds: 0,
  });
  const [cameraNotice, setCameraNotice] = useState<string | null>(null);
  const [muted, setMuted] = useState<boolean>(false);

  // Simulated Human Interaction Controls (works with or without webcam)
  const [simKineticActive, setSimKineticActive] = useState<boolean>(false);
  const [simBreathActive, setSimBreathActive] = useState<boolean>(false);

  // Live Telemetry Log
  const [logs, setLogs] = useState<TelemetryEvent[]>([
    {
      id: 1,
      time: '00:00',
      source: 'RELOJ',
      text: 'ResWatch MR inicializado: Pulso base 86 BPM · Batería 73% · Escáner ⚠️ y Baliza 🏠 listos.',
      tone: 'info',
    },
    {
      id: 2,
      time: '00:01',
      source: 'ENTORNO',
      text: 'Sector 01 (Tormenta Ionizante) generado alrededor del reloj. Toca los íconos del reloj en 3D.',
      tone: 'warn',
    },
  ]);

  // Mutable ref mirror for 60fps loop
  const stateRef = useRef({
    bpm: 86,
    battery: 73,
    bioStability: 100,
    extractionProgress: 0,
    sectorIdx: 0,
    hoveredZone: null as WatchZoneId,
    activePulseZone: null as WatchZoneId,
    activePulseTime: 0,
    shieldActive: false,
    calmModeActive: false,
    simKineticActive: false,
    simBreathActive: false,
    mrCameraEnabled: false,
    gameStatus: 'playing' as 'playing' | 'extracted' | 'critical_reset',
    startTime: performance.now(),
    lastSpawnTime: performance.now(),
    lastEnergySpawnTime: performance.now(),
    shieldEndTime: 0,
    calmEndTime: 0,
  });

  const pushLog = useCallback((source: 'HUMANO' | 'ENTORNO' | 'RELOJ', text: string, tone: TelemetryEvent['tone'] = 'info') => {
    const elapsed = Math.floor((performance.now() - stateRef.current.startTime) / 1000);
    const mm = String(Math.floor(elapsed / 60)).padStart(2, '0');
    const ss = String(elapsed % 60).padStart(2, '0');
    setLogs((prev) => [
      { id: Date.now() + Math.random(), time: `${mm}:${ss}`, source, text, tone },
      ...prev.slice(0, 5),
    ]);
  }, []);

  // Trigger one of the 4 interactive zones on the ResWatch face
  const handleWatchZoneTrigger = useCallback(
    (zone: NonNullable<WatchZoneId>) => {
      const nowSec = (performance.now() - stateRef.current.startTime) / 1000;
      stateRef.current.activePulseZone = zone;
      stateRef.current.activePulseTime = nowSec;
      setActivePulseZone(zone);
      setActivePulseTime(nowSec);

      if (zone === 'heart') {
        // ❤️ 86 Zone: Cardio-Vagal Biometric Stabilizer
        soundEngine.playCardioStabilize();
        stateRef.current.calmModeActive = true;
        stateRef.current.calmEndTime = performance.now() + 4500;
        setCalmModeActive(true);

        const nextBpm = Math.max(72, stateRef.current.bpm - (stateRef.current.bpm - 86) * 0.58 - 10);
        const nextBio = Math.min(100, stateRef.current.bioStability + 12);
        stateRef.current.bpm = nextBpm;
        stateRef.current.bioStability = nextBio;
        setBpm(Math.round(nextBpm));
        setBioStability(Math.round(nextBio));
        setScore((s) => s + 35);

        pushLog(
          'RELOJ',
          `❤️ Sincronización Cardio-Vagal activada: Pulso estabilizado hacia ${Math.round(nextBpm)} BPM (+12% bio-estabilidad).`,
          'success'
        );
      } else if (zone === 'alert') {
        // ⚠️ Zone: EMP Hazard Scanner & Neutralizer
        if (stateRef.current.battery < 6) {
          pushLog('RELOJ', '⚠️ Batería insuficiente para pulso EMP. Recarga con 🔋 o movimiento cinético.', 'danger');
          return;
        }
        soundEngine.playEmpScan();
        const activeCount = sceneRef.current?.getActiveHazardCount() || 0;
        sceneRef.current?.triggerEmpShockwave();

        const nextBat = Math.max(0, stateRef.current.battery - 5);
        stateRef.current.battery = nextBat;
        setBattery(Math.round(nextBat));
        setScore((s) => s + 50 + activeCount * 30);

        pushLog(
          'RELOJ',
          `⚠️ Onda de Choque EMP emitida al entorno: ${activeCount > 0 ? `${activeCount} anomalía(s) neutralizada(s)` : 'perímetro despejado'}.`,
          'info'
        );
      } else if (zone === 'battery') {
        // 73% 🔋 Zone: Kinetic & Ambient Energy Harvester
        soundEngine.playKineticCharge();
        sceneRef.current?.pullAllEnergyNodes();

        const nextBat = Math.min(100, stateRef.current.battery + 14);
        stateRef.current.battery = nextBat;
        setBattery(Math.round(nextBat));
        setScore((s) => s + 40);

        pushLog(
          'HUMANO',
          `🔋 Cosecha Cinética/ Ambiental activada: Batería del reloj recargada a ${Math.round(nextBat)}%.`,
          'success'
        );
      } else if (zone === 'home') {
        // 🏠 Zone: Safe Dome Shield & Extraction Beacon
        if (stateRef.current.battery < 8) {
          pushLog('RELOJ', '🏠 Necesitas al menos 8% de batería para desplegar el Domo Seguro.', 'danger');
          return;
        }
        soundEngine.playHomeBeacon();
        stateRef.current.shieldActive = true;
        stateRef.current.shieldEndTime = performance.now() + 6000;
        setShieldActive(true);

        const nextBat = Math.max(0, stateRef.current.battery - 7);
        const boostExtract = stateRef.current.bpm < 130 ? 22 : 12;
        const nextExtract = Math.min(100, stateRef.current.extractionProgress + boostExtract);

        stateRef.current.battery = nextBat;
        stateRef.current.extractionProgress = nextExtract;
        setBattery(Math.round(nextBat));
        setExtractionProgress(Math.round(nextExtract));
        setScore((s) => s + 65);

        if (nextExtract >= 100) {
          if (stateRef.current.sectorIdx < SECTORS.length - 1) {
            const nextSector = stateRef.current.sectorIdx + 1;
            stateRef.current.sectorIdx = nextSector;
            stateRef.current.extractionProgress = 0;
            setSectorIdx(nextSector);
            setExtractionProgress(0);
            sceneRef.current?.clearAllEntities();
            sceneRef.current?.setSectorTheme(SECTORS[nextSector].id, stateRef.current.mrCameraEnabled, mrFilter);
            pushLog(
              'ENTORNO',
              `🏠 Salto Cuántico completado → Entrando a ${SECTORS[nextSector].name}.`,
              'success'
            );
          } else {
            stateRef.current.gameStatus = 'extracted';
            setGameStatus('extracted');
            pushLog(
              'RELOJ',
              '🏠 ¡EXTRACCIÓN COMPLETA! El humano ha regresado a salvo a Casa con signos vitales estabilizados.',
              'success'
            );
          }
        } else {
          pushLog(
            'RELOJ',
            `🏠 Domo de Protección MR desplegado (6s) y Baliza a Casa al ${Math.round(nextExtract)}%.`,
            'info'
          );
        }
      }
    },
    [mrFilter, pushLog]
  );

  // Initialize Three.js Scene & Webcam Tracker
  useEffect(() => {
    if (!sceneContainerRef.current) return;

    trackerRef.current = new WebcamTracker();

    const scene = new ResWatchScene(sceneContainerRef.current, {
      onWatchZoneTrigger: (zone) => {
        handleWatchZoneTrigger(zone);
      },
      onHazardDestroyed: (byEmp) => {
        setScore((s) => s + (byEmp ? 35 : 45));
        if (!byEmp) {
          soundEngine.playKineticCharge();
          pushLog('HUMANO', 'Interacción espacial MR: Anomalía desviada directamente en el entorno 3D.', 'success');
        }
      },
      onHazardImpact: (type) => {
        soundEngine.playHazardHit();
        const bpmSpike = type === 'thermal' ? 18 : type === 'toxic' ? 15 : 11;
        const batDrop = type === 'emp' ? 11 : 6;

        const nextBpm = Math.min(192, stateRef.current.bpm + bpmSpike);
        const nextBat = Math.max(0, stateRef.current.battery - batDrop);
        const nextBio = Math.max(10, stateRef.current.bioStability - 11);

        stateRef.current.bpm = nextBpm;
        stateRef.current.battery = nextBat;
        stateRef.current.bioStability = nextBio;

        setBpm(Math.round(nextBpm));
        setBattery(Math.round(nextBat));
        setBioStability(Math.round(nextBio));

        const label =
          type === 'thermal' ? 'Choque Térmico' : type === 'emp' ? 'Descarga EMP' : 'Espora Bio-Tóxica';
        pushLog(
          'ENTORNO',
          `⚠️ Impacto de ${label}: El pulso del humano sube a ${Math.round(nextBpm)} BPM y la batería baja a ${Math.round(nextBat)}%.`,
          'danger'
        );
      },
      onEnergyCollected: (amount) => {
        soundEngine.playKineticCharge();
        const nextBat = Math.min(100, stateRef.current.battery + amount);
        const nextBpm = Math.max(75, stateRef.current.bpm - 3);
        stateRef.current.battery = nextBat;
        stateRef.current.bpm = nextBpm;
        setBattery(Math.round(nextBat));
        setBpm(Math.round(nextBpm));
        setScore((s) => s + 25);
      },
      onHoverChange: (zone, entityType) => {
        stateRef.current.hoveredZone = zone;
        setHoveredZone(zone);
        setHoveredEntity(entityType);
      },
    });

    sceneRef.current = scene;
    scene.setSectorTheme(SECTORS[0].id, false, 'hologram');

    // Spawn initial interactive entities so the user immediately sees a reactive world
    scene.spawnHazard(1);
    scene.spawnEnergyNode(false);

    let animId = 0;
    let lastTime = performance.now();

    const animate = (now: number) => {
      animId = requestAnimationFrame(animate);
      const dt = Math.min(0.1, (now - lastTime) / 1000);
      lastTime = now;

      const st = stateRef.current;
      const sector = SECTORS[st.sectorIdx] || SECTORS[0];

      // 1. Webcam Optical Motion & Hand Tracking
      if (trackerRef.current && trackerRef.current.isRunning) {
        const mData = trackerRef.current.analyzeFrame(motionHudCanvasRef.current);
        setMotionData(mData);
        scene.updateMrHandInteraction(mData.handX, mData.handY, mData.handDetected);

        // Human physical movement charges kinetic battery & slightly increases heart rate
        if (mData.motionIntensity > 32) {
          const kineticGain = (mData.motionIntensity / 100) * 3.8 * dt;
          st.battery = Math.min(100, st.battery + kineticGain);
          st.bpm = Math.min(175, st.bpm + (mData.motionIntensity / 100) * 2.5 * dt);
        } else if (mData.calmStreakSeconds > 1.8) {
          // Staying calm in front of camera lowers heart rate toward 86 BPM
          st.bpm += (86 - st.bpm) * 0.45 * dt;
        }
      } else {
        scene.updateMrHandInteraction(0, 0, false);
      }

      // 2. Expire timed buffs
      if (st.shieldActive && now > st.shieldEndTime) {
        st.shieldActive = false;
        setShieldActive(false);
      }
      if (st.calmModeActive && now > st.calmEndTime) {
        st.calmModeActive = false;
        setCalmModeActive(false);
      }

      // 3. Simulated Human Controls & Environmental Drift
      if (st.gameStatus === 'playing') {
        // Ambient sector stress on human BPM and watch battery
        const shieldFactor = st.shieldActive ? 0.2 : 1.0;
        st.bpm = Math.min(190, st.bpm + sector.ambientBpmDrift * shieldFactor * dt);
        st.battery = Math.max(0, st.battery - sector.batteryDrainRate * shieldFactor * dt);

        if (st.calmModeActive || st.simBreathActive) {
          st.bpm += (84 - st.bpm) * 1.65 * dt;
          st.bioStability = Math.min(100, st.bioStability + 5.5 * dt);
        }

        if (st.simKineticActive) {
          st.battery = Math.min(100, st.battery + 9.5 * dt);
          st.bpm = Math.min(165, st.bpm + 4.2 * dt);
        }

        // Passive extraction progress when biometrics are stable (BPM < 125 and Battery > 20)
        if (st.bpm <= 125 && st.battery >= 20) {
          st.extractionProgress = Math.min(100, st.extractionProgress + 1.8 * dt);
        }

        // High BPM (>145) slowly erodes bioStability
        if (st.bpm > 145) {
          st.bioStability = Math.max(15, st.bioStability - 3.2 * dt);
        }

        // Emergency Auto-Defibrillation / Stabilization if BioStability hits minimum
        if (st.bioStability <= 16 && st.battery >= 15) {
          st.bioStability = 65;
          st.bpm = 92;
          st.battery = Math.max(5, st.battery - 12);
          soundEngine.playCardioStabilize();
          pushLog(
            'RELOJ',
            '❤️ Auto-Estabilización de Emergencia ejecutada por ResWatch: Pulso restaurado a 92 BPM.',
            'warn'
          );
        }

        // Periodic Hazard & Energy Spawning
        if ((now - st.lastSpawnTime) / 1000 >= sector.spawnInterval) {
          st.lastSpawnTime = now;
          scene.spawnHazard(sector.id);
        }
        if ((now - st.lastEnergySpawnTime) / 1000 >= 4.2) {
          st.lastEnergySpawnTime = now;
          scene.spawnEnergyNode(false);
        }

        setBpm(Math.round(st.bpm));
        setBattery(Math.round(st.battery));
        setBioStability(Math.round(st.bioStability));
        setExtractionProgress(Math.round(st.extractionProgress));
      }

      // 4. Tick Heartbeat Audio synced to live BPM
      soundEngine.tickHeartbeat(st.bpm, now);

      // 5. Render 3D Scene + Watch Face
      scene.update(dt, {
        bpm: st.bpm,
        battery: st.battery,
        activeHazards: scene.getActiveHazardCount(),
        extractionProgress: st.extractionProgress,
        hoveredZone: st.hoveredZone,
        activePulseZone: st.activePulseZone,
        activePulseTime: st.activePulseTime,
        shieldActive: st.shieldActive,
        calmModeActive: st.calmModeActive || st.simBreathActive,
        timeSec: (now - st.startTime) / 1000,
      });
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      trackerRef.current?.stop();
      scene.dispose();
    };
  }, [handleWatchZoneTrigger, pushLog]);

  // Keyboard shortcuts (1: Heart, 2: Alert EMP, 3: Battery, 4: Home)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === '1') handleWatchZoneTrigger('heart');
      else if (e.key === '2') handleWatchZoneTrigger('alert');
      else if (e.key === '3') handleWatchZoneTrigger('battery');
      else if (e.key === '4') handleWatchZoneTrigger('home');
      else if (e.key === ' ') {
        e.preventDefault();
        handleWatchZoneTrigger('alert');
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handleWatchZoneTrigger]);

  // Toggle Live Webcam MR
  const toggleMrCamera = async () => {
    if (!trackerRef.current || !videoRef.current) return;
    if (mrCameraEnabled) {
      trackerRef.current.stop();
      stateRef.current.mrCameraEnabled = false;
      setMrCameraEnabled(false);
      setCameraNotice(null);
      sceneRef.current?.setSectorTheme(SECTORS[sectorIdx].id, false, mrFilter);
      pushLog('HUMANO', 'Cámara MR desactivada. Entorno 3D táctico completo activo.', 'info');
    } else {
      const ok = await trackerRef.current.start(videoRef.current);
      if (ok) {
        stateRef.current.mrCameraEnabled = true;
        setMrCameraEnabled(true);
        setCameraNotice(null);
        sceneRef.current?.setSectorTheme(SECTORS[sectorIdx].id, true, mrFilter);
        pushLog(
          'HUMANO',
          'Cámara MR en Vivo activada: Mueve tu mano frente a la cámara para cargar energía cinética y desviar anomalías 3D.',
          'success'
        );
      } else {
        setCameraNotice(trackerRef.current.errorMsg);
        pushLog(
          'RELOJ',
          trackerRef.current.errorMsg || 'Usando Simulador Humano MR integrado.',
          'warn'
        );
      }
    }
  };

  const changeSector = (idx: number) => {
    stateRef.current.sectorIdx = idx;
    stateRef.current.extractionProgress = 0;
    stateRef.current.gameStatus = 'playing';
    setSectorIdx(idx);
    setExtractionProgress(0);
    setGameStatus('playing');
    sceneRef.current?.clearAllEntities();
    sceneRef.current?.setSectorTheme(SECTORS[idx].id, mrCameraEnabled, mrFilter);
    sceneRef.current?.spawnHazard(SECTORS[idx].id);
    sceneRef.current?.spawnEnergyNode(false);
    pushLog('ENTORNO', `Entorno regenerado: ${SECTORS[idx].name} — ${SECTORS[idx].subtitle}.`, 'info');
  };

  const resetToReferenceBaseline = () => {
    stateRef.current.bpm = 86;
    stateRef.current.battery = 73;
    stateRef.current.bioStability = 100;
    stateRef.current.extractionProgress = 0;
    stateRef.current.gameStatus = 'playing';
    setBpm(86);
    setBattery(73);
    setBioStability(100);
    setExtractionProgress(0);
    setGameStatus('playing');
    sceneRef.current?.clearAllEntities();
    sceneRef.current?.resetView();
    sceneRef.current?.spawnHazard(SECTORS[sectorIdx].id);
    pushLog(
      'RELOJ',
      'Valores restablecidos al estado original del reloj: 86 BPM · 73% Batería · Escáner ⚠️ activo.',
      'info'
    );
  };

  const currentSector = SECTORS[sectorIdx] || SECTORS[0];
  const isHighStress = bpm > 135;

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-slate-950 select-none">
      {/* 1. Live Webcam Feed Background Layer (Merged Reality) */}
      <video
        ref={videoRef}
        playsInline
        muted
        className={`absolute inset-0 w-full h-full object-cover scale-x-[-1] transition-opacity duration-500 ${
          mrCameraEnabled && mrFilter !== 'virtual' ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } ${
          mrFilter === 'tactical'
            ? 'sepia hue-rotate-[130deg] saturate-200 contrast-125 brightness-75'
            : 'brightness-75 contrast-110'
        }`}
      />

      {/* Ambient MR Vignette & Scanline Overlay */}
      <div
        className={`absolute inset-0 pointer-events-none mr-scanlines transition-colors duration-500 ${
          isHighStress
            ? 'shadow-[inset_0_0_110px_rgba(239,68,68,0.42)]'
            : shieldActive
            ? 'shadow-[inset_0_0_110px_rgba(56,189,248,0.35)]'
            : 'shadow-[inset_0_0_90px_rgba(2,6,23,0.75)]'
        }`}
      />

      {/* 2. Full-Screen Interactive 3D Three.js Canvas (Watch + Holograms + Environment) */}
      <div ref={sceneContainerRef} className="absolute inset-0 w-full h-full z-10" />

      {/* 3. TOP HUD BAR: Mission Sector, MR Camera Controls & Score */}
      <header className="relative z-20 flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 pointer-events-none">
        {/* Brand & Authentic Model Badge */}
        <div className="hud-glass rounded-xl px-3.5 py-2 flex items-center gap-3 pointer-events-auto">
          <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-sky-500/20 border border-sky-400/40">
            <Activity className="w-5 h-5 text-sky-400" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm font-bold tracking-wider uppercase text-white">
                ResWatch <span className="text-sky-400">MR</span>
              </h1>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30">
                Merged Reality 3D
              </span>
            </div>
            <p className="text-[11px] text-slate-300">
              Interacción Humano ↔ Reloj ↔ Entorno Generado
            </p>
          </div>
          <button
            onClick={() => setShowRefModal((v) => !v)}
            className="ml-1 px-2.5 py-1 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-[11px] text-sky-300 border border-sky-500/30 flex items-center gap-1 transition"
            title="Comparar con imagen de referencia del reloj"
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Ref. Reloj</span>
          </button>
        </div>

        {/* Center Sector Selector */}
        <div className="hud-glass rounded-xl px-3 py-1.5 flex items-center gap-1.5 pointer-events-auto">
          <Compass className="w-4 h-4 text-sky-400 mr-1 hidden md:inline" />
          {SECTORS.map((sec, i) => (
            <button
              key={sec.id}
              onClick={() => changeSector(i)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition flex items-center gap-1 ${
                sectorIdx === i
                  ? 'bg-sky-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(56,189,248,0.6)]'
                  : 'bg-slate-900/70 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <span>S0{sec.id}</span>
              <span className="hidden lg:inline">
                {sec.id === 1
                  ? 'Ionizante'
                  : sec.id === 2
                  ? 'Térmico'
                  : sec.id === 3
                  ? 'Bio-Cuántico'
                  : 'Portal 🏠'}
              </span>
            </button>
          ))}
        </div>

        {/* Right Controls: Live Webcam MR Toggle, Filter, Wrist View, Audio, Reset */}
        <div className="hud-glass rounded-xl px-3 py-1.5 flex items-center gap-2 pointer-events-auto">
          <button
            onClick={toggleMrCamera}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
              mrCameraEnabled
                ? 'bg-emerald-500 text-slate-950 shadow-[0_0_14px_rgba(16,185,129,0.6)]'
                : 'bg-sky-500/20 hover:bg-sky-500/30 text-sky-200 border border-sky-400/40'
            }`}
          >
            {mrCameraEnabled ? <Camera className="w-4 h-4" /> : <CameraOff className="w-4 h-4" />}
            <span>{mrCameraEnabled ? 'Cámara MR Activa' : 'Activar Cámara MR'}</span>
          </button>

          {mrCameraEnabled && (
            <select
              value={mrFilter}
              onChange={(e) => {
                const val = e.target.value as 'hologram' | 'tactical' | 'virtual';
                setMrFilter(val);
                sceneRef.current?.setSectorTheme(currentSector.id, mrCameraEnabled, val);
              }}
              className="bg-slate-900/90 text-xs text-sky-200 border border-sky-500/30 rounded-lg px-2 py-1 outline-none"
            >
              <option value="hologram">Fusión Real + Hologramas</option>
              <option value="tactical">Visión Táctica Nocturna</option>
              <option value="virtual">Fondo 3D + Tracking Cámara</option>
            </select>
          )}

          <button
            onClick={() => {
              const next = !wristMode;
              setWristMode(next);
              sceneRef.current?.setWristMode(next);
            }}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border transition ${
              wristMode
                ? 'bg-sky-500/30 border-sky-400 text-white'
                : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:bg-slate-800'
            }`}
            title="Alternar vista de muñeca o inspección 360°"
          >
            {wristMode ? 'Vista Muñeca' : 'Vista 360°'}
          </button>

          <button
            onClick={resetToReferenceBaseline}
            className="p-1.5 rounded-lg bg-slate-900/70 hover:bg-slate-800 text-slate-300 border border-slate-700 transition"
            title="Restablecer a 86 BPM y 73% Batería"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              const next = !muted;
              soundEngine.muted = next;
              setMuted(next);
            }}
            className="p-1.5 rounded-lg bg-slate-900/70 hover:bg-slate-800 text-slate-300 border border-slate-700 transition"
            title={muted ? 'Activar sonido biométrico' : 'Silenciar'}
          >
            {muted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-sky-400" />}
          </button>
        </div>
      </header>

      {/* Camera fallback notice toast if user clicked camera in headless/denied browser */}
      {cameraNotice && (
        <div className="relative z-20 mx-auto max-w-xl mt-1 px-4 py-2 rounded-xl hud-glass text-xs text-amber-200 flex items-center justify-between">
          <span>{cameraNotice}</span>
          <button
            onClick={() => setCameraNotice(null)}
            className="ml-3 px-2 py-0.5 rounded bg-slate-800 text-slate-200 hover:bg-slate-700"
          >
            Cerrar
          </button>
        </div>
      )}

      {/* 4. LEFT HUD COLUMN: Human Biometrics & Merged Reality Sensor Controls */}
      <aside className="absolute left-4 top-20 z-20 w-72 space-y-2.5 pointer-events-none hidden md:block">
        {/* Biometric Telemetry Card */}
        <div className={`${isHighStress ? 'hud-glass-danger' : 'hud-glass'} rounded-2xl p-3.5 pointer-events-auto transition-colors`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
              <Heart className={`w-3.5 h-3.5 ${isHighStress ? 'text-rose-400 animate-ping' : 'text-rose-400'}`} />
              Estado Biométrico Humano
            </span>
            <span className="text-[11px] font-mono text-slate-400">PTS: {score}</span>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-2.5">
            <div className="bg-slate-900/75 rounded-xl p-2.5 border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase">Ritmo Cardíaco</div>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className={`text-2xl font-extrabold font-mono ${isHighStress ? 'text-rose-400' : 'text-white'}`}>
                  {bpm}
                </span>
                <span className="text-[11px] text-slate-400">BPM</span>
              </div>
              <div className="text-[10px] mt-0.5 text-sky-300">
                {bpm > 135 ? '⚠️ Taquicardia Térmica' : bpm < 95 ? '✓ Rango Óptimo (Base 86)' : 'Pulso Activo'}
              </div>
            </div>

            <div className="bg-slate-900/75 rounded-xl p-2.5 border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase">Carga ResWatch</div>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className={`text-2xl font-extrabold font-mono ${battery < 25 ? 'text-rose-400' : 'text-sky-400'}`}>
                  {battery}%
                </span>
                <span className="text-[11px] text-slate-400">BAT</span>
              </div>
              <div className="text-[10px] mt-0.5 text-emerald-300">
                {simKineticActive || motionData.motionIntensity > 32 ? '⚡ Cosecha Cinética' : 'Base inicial: 73%'}
              </div>
            </div>
          </div>

          {/* Bio-Stability & Extraction Bars */}
          <div className="space-y-2 text-xs">
            <div>
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-slate-300">Estabilidad Fisiológica</span>
                <span className="font-mono text-emerald-400">{bioStability}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    bioStability > 50 ? 'bg-emerald-400' : 'bg-rose-500'
                  }`}
                  style={{ width: `${bioStability}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-slate-300 flex items-center gap-1">
                  <Home className="w-3 h-3 text-sky-400" /> Enlace Portal a Casa (🏠)
                </span>
                <span className="font-mono text-sky-400">{extractionProgress}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-sky-500 to-emerald-400 transition-all duration-300"
                  style={{ width: `${extractionProgress}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Human Interaction & Webcam Optical Sensor Card */}
        <div className="hud-glass rounded-2xl p-3.5 pointer-events-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
              <Hand className="w-3.5 h-3.5" />
              Sensor de Interacción Humana
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300">
              {mrCameraEnabled ? 'Óptico en Vivo' : 'Simulador + 3D'}
            </span>
          </div>

          {mrCameraEnabled ? (
            <div className="space-y-2 mb-2.5">
              <div className="relative rounded-xl overflow-hidden border border-sky-500/40 bg-slate-950 h-28">
                <canvas ref={motionHudCanvasRef} width={160} height={120} className="w-full h-full object-cover" />
                <div className="absolute bottom-1.5 left-2 right-2 flex justify-between text-[10px] font-mono bg-slate-950/80 px-2 py-0.5 rounded">
                  <span className="text-sky-300">Mov. Cinético: {motionData.motionIntensity}%</span>
                  <span className="text-emerald-300">
                    {motionData.handDetected ? '✋ Mano MR Activa' : 'Calma Vagal'}
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-slate-300 leading-tight">
                Mueve tu mano para desviar anomalías 3D y cargar <b className="text-sky-300">🔋</b>, o quédate quieto para bajar <b className="text-emerald-300">❤️ BPM</b>.
              </p>
            </div>
          ) : (
            <p className="text-[11px] text-slate-300 mb-2.5 leading-relaxed">
              Haz clic directamente sobre los íconos de la pantalla 3D del reloj o usa las acciones fisiológicas del humano:
            </p>
          )}

          {/* Direct Human Physiological Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onMouseDown={() => {
                stateRef.current.simBreathActive = true;
                setSimBreathActive(true);
                soundEngine.playCardioStabilize();
              }}
              onMouseUp={() => {
                stateRef.current.simBreathActive = false;
                setSimBreathActive(false);
              }}
              onMouseLeave={() => {
                stateRef.current.simBreathActive = false;
                setSimBreathActive(false);
              }}
              onClick={() => handleWatchZoneTrigger('heart')}
              className={`p-2 rounded-xl border text-left transition flex flex-col justify-between ${
                simBreathActive || calmModeActive
                  ? 'bg-emerald-500/30 border-emerald-400 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                  : 'bg-slate-900/80 hover:bg-slate-800 border-slate-700/80 text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <Wind className="w-4 h-4 text-emerald-400" />
                <span className="text-[10px] font-mono text-emerald-300">-BPM</span>
              </div>
              <div className="mt-1">
                <div className="text-xs font-semibold">Respirar / Calmar</div>
                <div className="text-[10px] text-slate-400">Estabiliza ❤️ hacia 86</div>
              </div>
            </button>

            <button
              onMouseDown={() => {
                stateRef.current.simKineticActive = true;
                setSimKineticActive(true);
                soundEngine.playKineticCharge();
              }}
              onMouseUp={() => {
                stateRef.current.simKineticActive = false;
                setSimKineticActive(false);
              }}
              onMouseLeave={() => {
                stateRef.current.simKineticActive = false;
                setSimKineticActive(false);
              }}
              onClick={() => handleWatchZoneTrigger('battery')}
              className={`p-2 rounded-xl border text-left transition flex flex-col justify-between ${
                simKineticActive
                  ? 'bg-sky-500/30 border-sky-400 text-white shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                  : 'bg-slate-900/80 hover:bg-slate-800 border-slate-700/80 text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <Zap className="w-4 h-4 text-sky-400" />
                <span className="text-[10px] font-mono text-sky-300">+🔋 BAT</span>
              </div>
              <div className="mt-1">
                <div className="text-xs font-semibold">Agitar / Cinética</div>
                <div className="text-[10px] text-slate-400">Genera carga 🔋 (+BPM)</div>
              </div>
            </button>
          </div>
        </div>
      </aside>

      {/* 5. RIGHT HUD COLUMN: Environment Status & Cause-Effect Telemetry Log */}
      <aside className="absolute right-4 top-20 z-20 w-80 space-y-2.5 pointer-events-none hidden lg:block">
        {/* Generated Environment Card */}
        <div className="hud-glass rounded-2xl p-3.5 pointer-events-auto">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Entorno Generado Activo
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Amenazas: {sceneRef.current?.getActiveHazardCount() || 0}
            </span>
          </div>
          <h2 className="text-sm font-bold text-white">{currentSector.name}</h2>
          <p className="text-[11px] text-sky-300 mb-1.5">{currentSector.subtitle}</p>
          <p className="text-[11px] text-slate-300 leading-relaxed bg-slate-900/75 p-2 rounded-xl border border-slate-800">
            {currentSector.envHazardDesc}
          </p>
        </div>

        {/* Live Cause-and-Effect Telemetry Log */}
        <div className="hud-glass rounded-2xl p-3.5 pointer-events-auto">
          <div className="text-[11px] font-bold uppercase tracking-wider text-sky-400 mb-2">
            Bitácora Reloj ↔ Humano ↔ Entorno
          </div>
          <div className="space-y-1.5 max-h-52 overflow-y-auto pr-1">
            {logs.map((item) => (
              <div
                key={item.id}
                className={`text-[11px] p-2 rounded-xl border leading-snug ${
                  item.tone === 'danger'
                    ? 'bg-rose-950/60 border-rose-500/40 text-rose-200'
                    : item.tone === 'warn'
                    ? 'bg-amber-950/50 border-amber-500/40 text-amber-200'
                    : item.tone === 'success'
                    ? 'bg-emerald-950/50 border-emerald-500/40 text-emerald-200'
                    : 'bg-slate-900/75 border-slate-800 text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] opacity-75 mb-0.5 font-mono">
                  <span className="font-bold">{item.source}</span>
                  <span>{item.time}</span>
                </div>
                <div>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* 6. Floating Contextual Tooltip when hovering 3D Watch Screen Zones or 3D Entities */}
      {(hoveredZone || hoveredEntity) && (
        <div className="fixed bottom-28 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
          <div className="hud-glass px-4 py-2 rounded-full text-xs font-medium text-white flex items-center gap-2 shadow-xl border border-sky-400/50">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
            {hoveredZone === 'heart' && (
              <span>
                <b>❤️ Sensor Cardíaco ({bpm} BPM):</b> Clic para activar Sincronización Cardio-Vagal y estabilizar pulso
              </span>
            )}
            {hoveredZone === 'alert' && (
              <span>
                <b>⚠️ Escáner de Amenazas:</b> Clic para emitir Onda de Choque EMP al entorno 3D
              </span>
            )}
            {hoveredZone === 'battery' && (
              <span>
                <b>🔋 Gestión Energética ({battery}%):</b> Clic para absorber cristales cinéticos del entorno
              </span>
            )}
            {hoveredZone === 'home' && (
              <span>
                <b>🏠 Baliza a Casa ({extractionProgress}%):</b> Clic para desplegar Domo Seguro MR y abrir portal
              </span>
            )}
            {hoveredEntity === 'hazard' && (
              <span className="text-amber-300">
                <b>☄️ Anomalía del Entorno:</b> Haz clic para neutralizar antes de que altere el pulso del humano
              </span>
            )}
            {hoveredEntity === 'energy' && (
              <span className="text-emerald-300">
                <b>💎 Cristal Bio-Cinético:</b> Haz clic para recolectar energía hacia el reloj
              </span>
            )}
          </div>
        </div>
      )}

      {/* 7. BOTTOM INTERACTIVE WATCH COMMAND DOCK (Mirrors the 4 Watch Screen Icons) */}
      <footer className="fixed bottom-4 left-1/2 -translate-x-1/2 z-20 w-[95%] max-w-3xl pointer-events-auto">
        <div className="hud-glass rounded-2xl p-2.5 flex flex-wrap items-center justify-between gap-2">
          {/* Button 1: ❤️ 86 Heart Stabilizer */}
          <button
            onClick={() => handleWatchZoneTrigger('heart')}
            onMouseEnter={() => {
              stateRef.current.hoveredZone = 'heart';
              setHoveredZone('heart');
            }}
            onMouseLeave={() => {
              stateRef.current.hoveredZone = null;
              setHoveredZone(null);
            }}
            className={`flex-1 min-w-[140px] flex items-center gap-2.5 px-3 py-2 rounded-xl border transition ${
              hoveredZone === 'heart' || calmModeActive
                ? 'bg-emerald-500/25 border-emerald-400 text-white shadow-[0_0_16px_rgba(16,185,129,0.35)]'
                : 'bg-slate-900/80 hover:bg-slate-800/90 border-slate-700/80 text-slate-100'
            }`}
          >
            <div className="p-2 rounded-lg bg-rose-500/20 border border-rose-400/40 text-rose-400">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold flex items-center gap-1.5">
                <span>Pulso {bpm} BPM</span>
                <kbd className="text-[10px] px-1 bg-slate-800 rounded text-slate-400">1</kbd>
              </div>
              <div className="text-[10px] text-slate-300">Estabilizar Humano</div>
            </div>
          </button>

          {/* Button 2: ⚠️ Threat EMP Pulse */}
          <button
            onClick={() => handleWatchZoneTrigger('alert')}
            onMouseEnter={() => {
              stateRef.current.hoveredZone = 'alert';
              setHoveredZone('alert');
            }}
            onMouseLeave={() => {
              stateRef.current.hoveredZone = null;
              setHoveredZone(null);
            }}
            className={`flex-1 min-w-[140px] flex items-center gap-2.5 px-3 py-2 rounded-xl border transition ${
              hoveredZone === 'alert'
                ? 'bg-amber-500/25 border-amber-400 text-white shadow-[0_0_16px_rgba(245,158,11,0.35)]'
                : 'bg-slate-900/80 hover:bg-slate-800/90 border-slate-700/80 text-slate-100'
            }`}
          >
            <div className="p-2 rounded-lg bg-amber-500/20 border border-amber-400/40 text-amber-300">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold flex items-center gap-1.5">
                <span>Alerta / EMP</span>
                <kbd className="text-[10px] px-1 bg-slate-800 rounded text-slate-400">2</kbd>
              </div>
              <div className="text-[10px] text-slate-300">Despejar Entorno</div>
            </div>
          </button>

          {/* Button 3: 73% 🔋 Kinetic Harvester */}
          <button
            onClick={() => handleWatchZoneTrigger('battery')}
            onMouseEnter={() => {
              stateRef.current.hoveredZone = 'battery';
              setHoveredZone('battery');
            }}
            onMouseLeave={() => {
              stateRef.current.hoveredZone = null;
              setHoveredZone(null);
            }}
            className={`flex-1 min-w-[140px] flex items-center gap-2.5 px-3 py-2 rounded-xl border transition ${
              hoveredZone === 'battery'
                ? 'bg-sky-500/25 border-sky-400 text-white shadow-[0_0_16px_rgba(56,189,248,0.35)]'
                : 'bg-slate-900/80 hover:bg-slate-800/90 border-slate-700/80 text-slate-100'
            }`}
          >
            <div className="p-2 rounded-lg bg-sky-500/20 border border-sky-400/40 text-sky-300">
              <BatteryCharging className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold flex items-center gap-1.5">
                <span>Batería {battery}%</span>
                <kbd className="text-[10px] px-1 bg-slate-800 rounded text-slate-400">3</kbd>
              </div>
              <div className="text-[10px] text-slate-300">Cosecha Cinética</div>
            </div>
          </button>

          {/* Button 4: 🏠 Home Safe Dome & Extraction */}
          <button
            onClick={() => handleWatchZoneTrigger('home')}
            onMouseEnter={() => {
              stateRef.current.hoveredZone = 'home';
              setHoveredZone('home');
            }}
            onMouseLeave={() => {
              stateRef.current.hoveredZone = null;
              setHoveredZone(null);
            }}
            className={`flex-1 min-w-[140px] flex items-center gap-2.5 px-3 py-2 rounded-xl border transition ${
              hoveredZone === 'home' || shieldActive
                ? 'bg-sky-500/30 border-sky-300 text-white shadow-[0_0_18px_rgba(56,189,248,0.45)]'
                : 'bg-slate-900/80 hover:bg-slate-800/90 border-slate-700/80 text-slate-100'
            }`}
          >
            <div className="p-2 rounded-lg bg-sky-400/20 border border-sky-300/50 text-sky-300">
              {shieldActive ? <Shield className="w-5 h-5" /> : <Home className="w-5 h-5" />}
            </div>
            <div className="text-left">
              <div className="text-xs font-bold flex items-center gap-1.5">
                <span>Casa ({extractionProgress}%)</span>
                <kbd className="text-[10px] px-1 bg-slate-800 rounded text-slate-400">4</kbd>
              </div>
              <div className="text-[10px] text-slate-300">Domo y Portal MR</div>
            </div>
          </button>
        </div>
      </footer>

      {/* 8. Reference Image Comparison Modal */}
      {showRefModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
          <div className="hud-glass rounded-2xl max-w-md w-full p-5 border border-sky-400/40 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Reloj Adjunto de Referencia vs Modelo 3D Interactivo
              </h3>
              <button
                onClick={() => setShowRefModal(false)}
                className="px-2.5 py-1 rounded-lg bg-slate-800 text-xs text-slate-300 hover:bg-slate-700"
              >
                Cerrar
              </button>
            </div>
            <img
              src="/assets/watch-reference.jpg"
              alt="Reloj ResWatch Original"
              className="w-full h-56 object-contain rounded-xl bg-white p-2"
            />
            <p className="text-xs text-slate-300 leading-relaxed">
              El modelo 3D interactivo carga la geometría <code className="text-sky-300">base.stl</code> del repositorio e integra los 4 elementos del reloj original (<b className="text-white">73% 🔋</b>, <b className="text-white">⚠️</b>, <b className="text-white">❤️ 86</b> y <b className="text-white">🏠</b>) como zonas táctiles en 3D que responden al humano y transforman el entorno.
            </p>
          </div>
        </div>
      )}

      {/* 9. Mission Complete / Extraction Victory Overlay */}
      {gameStatus === 'extracted' && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/75 backdrop-blur-md p-4">
          <div className="hud-glass rounded-3xl max-w-lg w-full p-6 text-center border border-emerald-400/50 space-y-4">
            <div className="mx-auto w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-300">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-extrabold text-white">
              ¡Extracción a Casa Completada!
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Has sincronizado los signos vitales del humano con el <b className="text-sky-300">ResWatch MR</b>, neutralizado las anomalías de los 4 sectores y desplegado el portal dimensional <b className="text-emerald-300">🏠 Casa</b>.
            </p>
            <div className="grid grid-cols-3 gap-2 bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
              <div>
                <div className="text-[10px] text-slate-400">PULSO FINAL</div>
                <div className="text-lg font-bold text-emerald-400">{bpm} BPM</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-400">BATERÍA</div>
                <div className="text-lg font-bold text-sky-400">{battery}%</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-400">PUNTUACIÓN</div>
                <div className="text-lg font-bold text-white">{score}</div>
              </div>
            </div>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => changeSector(0)}
                className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition"
              >
                Jugar Nueva Misión MR
              </button>
              <button
                onClick={() => {
                  stateRef.current.gameStatus = 'playing';
                  stateRef.current.extractionProgress = 50;
                  setGameStatus('playing');
                  setExtractionProgress(50);
                }}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition"
              >
                Seguir en Modo Libre
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default App;
