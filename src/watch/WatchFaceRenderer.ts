export type WatchZoneId = 'battery' | 'alert' | 'heart' | 'home' | null;

export interface WatchFaceState {
  bpm: number; // default 86
  battery: number; // default 73
  activeHazards: number;
  extractionProgress: number; // 0 to 100
  hoveredZone: WatchZoneId;
  activePulseZone: WatchZoneId;
  activePulseTime: number;
  shieldActive: boolean;
  calmModeActive: boolean;
  timeSec: number;
}

export class WatchFaceRenderer {
  public canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private ecgHistory: number[] = new Array(80).fill(0);
  private lastEcgStep: number = 0;

  constructor(size: number = 1024) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = size;
    this.canvas.height = size;
    const ctx = this.canvas.getContext('2d');
    if (!ctx) throw new Error('Failed to create watch face 2D context');
    this.ctx = ctx;
  }

  public render(state: WatchFaceState) {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;
    const cx = w / 2;
    const cy = h / 2;
    const t = state.timeSec;

    ctx.clearRect(0, 0, w, h);

    // 1. Deep navy circular OLED background (#091826)
    const bgGrad = ctx.createRadialGradient(cx, cy, w * 0.05, cx, cy, w * 0.5);
    if (state.bpm > 135) {
      bgGrad.addColorStop(0, '#191324');
      bgGrad.addColorStop(0.75, '#0c1828');
      bgGrad.addColorStop(1, '#2a0f18');
    } else if (state.calmModeActive) {
      bgGrad.addColorStop(0, '#09242c');
      bgGrad.addColorStop(0.8, '#081826');
      bgGrad.addColorStop(1, '#05101a');
    } else {
      bgGrad.addColorStop(0, '#0d2136');
      bgGrad.addColorStop(0.78, '#091726');
      bgGrad.addColorStop(1, '#06101b');
    }
    ctx.fillStyle = bgGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, w * 0.495, 0, Math.PI * 2);
    ctx.fill();

    // 2. Outer & Inner Concentric Cyan Bezel Rings (matching attached image)
    // Outer cyan ring
    ctx.save();
    ctx.strokeStyle = '#55b8ea';
    ctx.lineWidth = 10;
    ctx.shadowColor = '#55b8ea';
    ctx.shadowBlur = 14;
    ctx.beginPath();
    ctx.arc(cx, cy, w * 0.482, 0, Math.PI * 2);
    ctx.stroke();

    // Dark slate gap ring
    ctx.shadowBlur = 0;
    ctx.strokeStyle = '#182b3d';
    ctx.lineWidth = 22;
    ctx.beginPath();
    ctx.arc(cx, cy, w * 0.456, 0, Math.PI * 2);
    ctx.stroke();

    // Inner bright cyan ring
    ctx.strokeStyle = state.bpm > 140 ? '#f87171' : '#65c5f4';
    ctx.lineWidth = 11;
    ctx.shadowColor = state.bpm > 140 ? '#ef4444' : '#55b8ea';
    ctx.shadowBlur = 16;
    ctx.beginPath();
    ctx.arc(cx, cy, w * 0.432, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();

    // Subtle extraction progress arc along inner perimeter when > 0
    if (state.extractionProgress > 0) {
      ctx.save();
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 7;
      ctx.lineCap = 'round';
      const startAngle = -Math.PI / 2;
      const endAngle = startAngle + (Math.min(100, state.extractionProgress) / 100) * Math.PI * 2;
      ctx.beginPath();
      ctx.arc(cx, cy, w * 0.412, startAngle, endAngle);
      ctx.stroke();
      ctx.restore();
    }

    // 3. TOP ZONE: Battery "73% [battery]"
    this.drawZoneHighlight(ctx, cx + 10, h * 0.205, 130, 'battery', state);
    this.drawBatteryWidget(ctx, cx, h * 0.21, Math.round(state.battery), t);

    // 4. UPPER-LEFT ZONE: Warning Triangle "⚠️"
    const warnX = w * 0.34;
    const warnY = h * 0.36;
    this.drawZoneHighlight(ctx, warnX, warnY + 10, 108, 'alert', state);
    this.drawWarningTriangle(ctx, warnX, warnY, state.activeHazards, state.hoveredZone === 'alert', t);

    // 5. CENTER ZONE: Heart Icon "❤️" + Large BPM "86"
    const heartX = w * 0.265;
    const heartY = h * 0.54;
    this.drawZoneHighlight(ctx, w * 0.52, h * 0.53, 185, 'heart', state);

    // Beat scale synced to live BPM
    const beatFreq = state.bpm / 60;
    const beatPhase = (t * beatFreq) % 1;
    const heartScale =
      beatPhase < 0.15
        ? 1 + Math.sin((beatPhase / 0.15) * Math.PI) * 0.18
        : beatPhase < 0.32
        ? 1 + Math.sin(((beatPhase - 0.15) / 0.17) * Math.PI) * 0.09
        : 1.0;

    this.drawHeartIcon(ctx, heartX, heartY, 64 * heartScale, state.bpm, state.calmModeActive);

    // Large BPM Number ("86" in attached image)
    ctx.save();
    ctx.fillStyle = state.bpm > 145 ? '#fecaca' : '#ffffff';
    ctx.font = '700 225px "Inter", system-ui, -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = state.bpm > 145 ? 'rgba(239, 68, 68, 0.55)' : 'rgba(86, 185, 235, 0.32)';
    ctx.shadowBlur = 18;
    const bpmText = String(Math.round(state.bpm));
    ctx.fillText(bpmText, w * 0.61, h * 0.535);
    ctx.restore();

    // Subtle live ECG line under BPM
    this.updateAndDrawEcg(ctx, w * 0.34, h * 0.665, w * 0.36, 28, beatPhase, state.bpm, state.calmModeActive);

    // 6. BOTTOM ZONE: Home Button ("🏠" inside circle)
    const homeX = cx;
    const homeY = h * 0.805;
    this.drawZoneHighlight(ctx, homeX, homeY, 108, 'home', state);
    this.drawHomeIcon(ctx, homeX, homeY, 84, state.hoveredZone === 'home', state.shieldActive, state.extractionProgress, t);
  }

  private drawZoneHighlight(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    radius: number,
    zone: WatchZoneId,
    state: WatchFaceState
  ) {
    const isHovered = state.hoveredZone === zone;
    const isPulsing = state.activePulseZone === zone && state.timeSec - state.activePulseTime < 0.8;

    if (!isHovered && !isPulsing) return;

    ctx.save();
    const alpha = isPulsing ? Math.max(0, 1 - (state.timeSec - state.activePulseTime) / 0.8) : 0.45;
    const grad = ctx.createRadialGradient(x, y, radius * 0.1, x, y, radius);
    grad.addColorStop(0, `rgba(86, 185, 235, ${alpha * 0.45})`);
    grad.addColorStop(0.7, `rgba(86, 185, 235, ${alpha * 0.18})`);
    grad.addColorStop(1, 'rgba(86, 185, 235, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = `rgba(101, 197, 244, ${alpha * 0.9})`;
    ctx.lineWidth = 3.5;
    ctx.setLineDash([10, 8]);
    ctx.beginPath();
    ctx.arc(x, y, radius * 0.85, state.timeSec * 2, state.timeSec * 2 + Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  private drawBatteryWidget(ctx: CanvasRenderingContext2D, cx: number, y: number, batteryPct: number, t: number) {
    ctx.save();
    const isLow = batteryPct < 25;
    const blink = isLow && Math.sin(t * 8) > 0;

    // "73%" text on left
    ctx.fillStyle = blink ? '#f87171' : '#ffffff';
    ctx.font = '600 72px "Inter", system-ui, sans-serif';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${batteryPct}%`, cx + 38, y);

    // Battery body outline on right (matching reference image)
    const bx = cx + 56;
    const by = y - 24;
    const bw = 96;
    const bh = 46;

    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 4.5;
    ctx.beginPath();
    ctx.roundRect(bx, by, bw, bh, 6);
    ctx.stroke();

    // Battery positive terminal nub
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.roundRect(bx + bw + 3, y - 10, 7, 20, 2);
    ctx.fill();

    // Cyan inner fill proportional to batteryPct
    const fillPad = 6;
    const maxFillW = bw - fillPad * 2;
    const fillW = Math.max(4, (Math.max(0, Math.min(100, batteryPct)) / 100) * maxFillW);
    ctx.fillStyle = isLow ? '#ef4444' : '#63c3f3';
    ctx.beginPath();
    ctx.roundRect(bx + fillPad, by + fillPad, fillW, bh - fillPad * 2, 3);
    ctx.fill();
    ctx.restore();
  }

  private drawWarningTriangle(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    activeHazards: number,
    isHovered: boolean,
    t: number
  ) {
    ctx.save();
    const hasAlert = activeHazards > 0;
    const pulse = hasAlert ? 0.5 + 0.5 * Math.sin(t * 7) : 0;

    const size = 76;
    const topY = y - size * 0.85;
    const botY = y + size * 0.65;
    const halfW = size * 0.88;

    if (hasAlert || isHovered) {
      ctx.shadowColor = hasAlert ? '#f59e0b' : '#56b9eb';
      ctx.shadowBlur = hasAlert ? 16 + pulse * 16 : 14;
    }

    ctx.strokeStyle = hasAlert && pulse > 0.55 ? '#fbbf24' : '#ffffff';
    ctx.lineWidth = 10;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    ctx.beginPath();
    ctx.moveTo(x, topY);
    ctx.lineTo(x + halfW, botY);
    ctx.lineTo(x - halfW, botY);
    ctx.closePath();
    ctx.stroke();

    if (hasAlert) {
      ctx.fillStyle = `rgba(245, 158, 11, ${0.15 + pulse * 0.22})`;
      ctx.fill();
    }

    // Exclamation mark "!" inside triangle
    ctx.fillStyle = hasAlert && pulse > 0.55 ? '#fbbf24' : '#ffffff';
    ctx.beginPath();
    ctx.roundRect(x - 5.5, topY + 34, 11, 40, 5.5);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x, botY - 19, 6.5, 0, Math.PI * 2);
    ctx.fill();

    // Small badge if multiple hazards
    if (activeHazards > 0) {
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(x + halfW - 4, topY + 18, 20, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.font = '700 24px "Inter", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(String(activeHazards), x + halfW - 4, topY + 19);
    }

    ctx.restore();
  }

  private drawHeartIcon(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number,
    bpm: number,
    calmMode: boolean
  ) {
    ctx.save();
    ctx.translate(x, y);

    const isCritical = bpm > 140;
    ctx.fillStyle = isCritical ? '#f87171' : calmMode ? '#6ee7b7' : '#ffffff';
    ctx.shadowColor = isCritical ? '#ef4444' : calmMode ? '#10b981' : '#56b9eb';
    ctx.shadowBlur = isCritical ? 24 : 12;

    ctx.beginPath();
    const topCurveHeight = size * 0.32;
    ctx.moveTo(0, topCurveHeight);
    // Left lobe
    ctx.bezierCurveTo(0, 0, -size, 0, -size, topCurveHeight);
    ctx.bezierCurveTo(-size, size * 0.78, 0, size * 1.05, 0, size * 1.38);
    // Right lobe
    ctx.bezierCurveTo(0, size * 1.05, size, size * 0.78, size, topCurveHeight);
    ctx.bezierCurveTo(size, 0, 0, 0, 0, topCurveHeight);
    ctx.closePath();

    // Center the heart vertically around (x, y)
    ctx.translate(0, -size * 0.68);
    ctx.fill();
    ctx.restore();
  }

  private updateAndDrawEcg(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    beatPhase: number,
    bpm: number,
    calmMode: boolean
  ) {
    const now = performance.now();
    if (now - this.lastEcgStep > 28) {
      this.lastEcgStep = now;
      let sample = 0;
      if (beatPhase < 0.08) {
        sample = 0.25;
      } else if (beatPhase < 0.13) {
        sample = -0.35;
      } else if (beatPhase < 0.19) {
        sample = 1.0; // R peak
      } else if (beatPhase < 0.25) {
        sample = -0.5;
      } else if (beatPhase < 0.38) {
        sample = 0.35; // T wave
      } else {
        sample = (Math.random() - 0.5) * 0.06;
      }
      this.ecgHistory.push(sample);
      if (this.ecgHistory.length > 80) this.ecgHistory.shift();
    }

    ctx.save();
    ctx.strokeStyle = bpm > 140 ? 'rgba(248, 113, 113, 0.78)' : calmMode ? 'rgba(52, 211, 153, 0.8)' : 'rgba(86, 185, 235, 0.65)';
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    for (let i = 0; i < this.ecgHistory.length; i++) {
      const px = x + (i / (this.ecgHistory.length - 1)) * width;
      const py = y - this.ecgHistory[i] * height;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();
    ctx.restore();
  }

  private drawHomeIcon(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    radius: number,
    isHovered: boolean,
    shieldActive: boolean,
    extractionProgress: number,
    t: number
  ) {
    ctx.save();

    if (shieldActive || isHovered || extractionProgress >= 100) {
      ctx.shadowColor = '#56b9eb';
      ctx.shadowBlur = 22;
    }

    // Outer white circle (matching reference image)
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 9;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();

    // Dark interior fill
    ctx.fillStyle = shieldActive ? 'rgba(14, 116, 144, 0.38)' : '#091726';
    ctx.fill();

    // Cyan house icon inside circle (matching reference image)
    const hs = radius * 0.58;
    ctx.fillStyle = extractionProgress >= 100 && Math.sin(t * 8) > 0 ? '#34d399' : '#58beee';

    // Roof triangle
    ctx.beginPath();
    ctx.moveTo(x, y - hs * 0.95);
    ctx.lineTo(x + hs * 0.95, y - hs * 0.05);
    ctx.lineTo(x + hs * 0.68, y - hs * 0.05);
    ctx.lineTo(x + hs * 0.68, y + hs * 0.82);
    ctx.lineTo(x + hs * 0.18, y + hs * 0.82);
    ctx.lineTo(x + hs * 0.18, y + hs * 0.18);
    ctx.lineTo(x - hs * 0.18, y + hs * 0.18);
    ctx.lineTo(x - hs * 0.18, y + hs * 0.82);
    ctx.lineTo(x - hs * 0.68, y + hs * 0.82);
    ctx.lineTo(x - hs * 0.68, y - hs * 0.05);
    ctx.lineTo(x - hs * 0.95, y - hs * 0.05);
    ctx.closePath();
    ctx.fill();

    // Chimney on right side of roof (just like the reference image!)
    ctx.beginPath();
    ctx.roundRect(x + hs * 0.35, y - hs * 0.78, hs * 0.22, hs * 0.45, 2);
    ctx.fill();

    // Small window cutout on upper left of house body
    ctx.fillStyle = '#091726';
    ctx.fillRect(x - hs * 0.44, y - hs * 0.05, hs * 0.22, hs * 0.22);

    ctx.restore();
  }
}
