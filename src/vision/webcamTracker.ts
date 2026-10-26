export interface HumanMotionData {
  cameraActive: boolean;
  motionIntensity: number; // 0 to 100
  handX: number; // -1 to 1 (mirrored screen space)
  handY: number; // -1 to 1 (screen space)
  handDetected: boolean;
  calmStreakSeconds: number;
}

export class WebcamTracker {
  private video: HTMLVideoElement | null = null;
  private workCanvas: HTMLCanvasElement;
  private workCtx: CanvasRenderingContext2D;
  private prevFrame: Uint8ClampedArray | null = null;
  private stream: MediaStream | null = null;

  public isRunning: boolean = false;
  public errorMsg: string | null = null;

  private smoothHandX: number = 0;
  private smoothHandY: number = 0;
  private smoothMotion: number = 0;
  private calmSeconds: number = 0;
  private lastProcessTime: number = performance.now();

  constructor() {
    this.workCanvas = document.createElement('canvas');
    this.workCanvas.width = 128;
    this.workCanvas.height = 96;
    const ctx = this.workCanvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) throw new Error('2D context unavailable');
    this.workCtx = ctx;
  }

  public async start(videoElement: HTMLVideoElement): Promise<boolean> {
    this.errorMsg = null;
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        this.errorMsg = 'Tu navegador no expone acceso directo a cámara en este contexto; usando Simulador MR Táctico.';
        return false;
      }
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: 'user' },
        audio: false,
      });
      this.video = videoElement;
      this.video.srcObject = this.stream;
      await this.video.play();
      this.isRunning = true;
      this.prevFrame = null;
      this.lastProcessTime = performance.now();
      return true;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      this.errorMsg = `Cámara no disponible (${msg}). Modo Simulador Humano MR activo.`;
      this.isRunning = false;
      return false;
    }
  }

  public stop() {
    if (this.stream) {
      this.stream.getTracks().forEach((t) => t.stop());
      this.stream = null;
    }
    if (this.video) {
      this.video.srcObject = null;
    }
    this.isRunning = false;
    this.prevFrame = null;
  }

  public analyzeFrame(hudOverlayCanvas?: HTMLCanvasElement | null): HumanMotionData {
    const now = performance.now();
    const dt = Math.min(0.2, (now - this.lastProcessTime) / 1000);
    this.lastProcessTime = now;

    if (!this.isRunning || !this.video || this.video.readyState < 2) {
      return {
        cameraActive: false,
        motionIntensity: 0,
        handX: 0,
        handY: 0,
        handDetected: false,
        calmStreakSeconds: 0,
      };
    }

    const w = this.workCanvas.width;
    const h = this.workCanvas.height;

    // Draw mirrored webcam frame
    this.workCtx.save();
    this.workCtx.scale(-1, 1);
    this.workCtx.drawImage(this.video, -w, 0, w, h);
    this.workCtx.restore();

    const frame = this.workCtx.getImageData(0, 0, w, h);
    const data = frame.data;

    let sumWeights = 0;
    let weightedX = 0;
    let weightedY = 0;
    let changedPixels = 0;

    let overlayCtx: CanvasRenderingContext2D | null = null;
    if (hudOverlayCanvas) {
      overlayCtx = hudOverlayCanvas.getContext('2d');
      if (overlayCtx) {
        overlayCtx.clearRect(0, 0, hudOverlayCanvas.width, hudOverlayCanvas.height);
        overlayCtx.drawImage(this.workCanvas, 0, 0, hudOverlayCanvas.width, hudOverlayCanvas.height);
      }
    }

    if (this.prevFrame) {
      for (let y = 0; y < h; y += 2) {
        for (let x = 0; x < w; x += 2) {
          const i = (y * w + x) * 4;
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          const pr = this.prevFrame[i];
          const pg = this.prevFrame[i + 1];
          const pb = this.prevFrame[i + 2];

          const diff = Math.abs(r - pr) + Math.abs(g - pg) + Math.abs(b - pb);

          if (diff > 55) {
            changedPixels++;
            // Boost weight if warm/skin-like or bright foreground
            const isSkinTone = r > 75 && g > 45 && b > 30 && r > g && r > b;
            const weight = isSkinTone ? diff * 2.2 : diff;
            sumWeights += weight;
            weightedX += x * weight;
            weightedY += y * weight;

            if (overlayCtx && diff > 95) {
              overlayCtx.fillStyle = isSkinTone ? 'rgba(86, 185, 235, 0.7)' : 'rgba(16, 185, 129, 0.45)';
              const sx = (x / w) * hudOverlayCanvas!.width;
              const sy = (y / h) * hudOverlayCanvas!.height;
              overlayCtx.fillRect(sx, sy, 3, 3);
            }
          }
        }
      }
    }

    this.prevFrame = new Uint8ClampedArray(data);

    const totalSampled = (w * h) / 4;
    const rawIntensity = Math.min(100, (changedPixels / (totalSampled * 0.18)) * 100);
    this.smoothMotion = this.smoothMotion * 0.72 + rawIntensity * 0.28;

    const handDetected = sumWeights > 2800;
    if (handDetected) {
      const cx = weightedX / sumWeights;
      const cy = weightedY / sumWeights;
      const normX = (cx / w) * 2 - 1;
      const normY = -((cy / h) * 2 - 1);
      this.smoothHandX = this.smoothHandX * 0.65 + normX * 0.35;
      this.smoothHandY = this.smoothHandY * 0.65 + normY * 0.35;

      if (overlayCtx && hudOverlayCanvas) {
        const tx = ((this.smoothHandX + 1) * 0.5) * hudOverlayCanvas.width;
        const ty = ((1 - this.smoothHandY) * 0.5) * hudOverlayCanvas.height;
        overlayCtx.strokeStyle = '#56b9eb';
        overlayCtx.lineWidth = 2;
        overlayCtx.beginPath();
        overlayCtx.arc(tx, ty, 12, 0, Math.PI * 2);
        overlayCtx.stroke();
      }
    }

    if (this.smoothMotion < 14) {
      this.calmSeconds = Math.min(20, this.calmSeconds + dt);
    } else {
      this.calmSeconds = Math.max(0, this.calmSeconds - dt * 1.5);
    }

    return {
      cameraActive: true,
      motionIntensity: Math.round(this.smoothMotion),
      handX: this.smoothHandX,
      handY: this.smoothHandY,
      handDetected,
      calmStreakSeconds: this.calmSeconds,
    };
  }
}
