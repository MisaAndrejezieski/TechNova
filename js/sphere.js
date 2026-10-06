/* ============================================================
   Canvas — esfera pulsante com ondas sonoras
   Estética: cyberpunk pastel
============================================================ */
(() => {
  "use strict";

  const canvas = document.getElementById("c");
  if (!canvas) return;

  const ctx = canvas.getContext("2d", { alpha: true });

  let W = 0, H = 0, DPR = 1, FOCAL = 700;

  function resize() {
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = canvas.clientWidth;
    H = canvas.clientHeight;
    canvas.width  = Math.floor(W * DPR);
    canvas.height = Math.floor(H * DPR);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    FOCAL = Math.min(W, H) * 0.95;
  }
  window.addEventListener("resize", resize);
  resize();

  const clamp = (v, lo, hi) => v < lo ? lo : v > hi ? hi : v;
  const lerp  = (a, b, t)  => a + (b - a) * t;

  // ---------- Geometria ----------
  const N = 1500;
  function makeSphere(n, r) {
    const pts = [];
    for (let i = 0; i < n; i++) {
      const k = i + 0.5;
      const phi   = Math.acos(1 - 2 * k / n);
      const theta = Math.PI * (1 + Math.sqrt(5)) * k;
      const ux = Math.sin(phi) * Math.cos(theta);
      const uy = Math.cos(phi);
      const uz = Math.sin(phi) * Math.sin(theta);
      pts.push([ux * r, uy * r, uz * r]);
    }
    return pts;
  }
  const SPHERE = makeSphere(N, 1.35);

  // ---------- Paleta pastel cyberpunk ----------
  const PALETTE = [
    [255, 179, 217],  // rosa pastel
    [213, 179, 255],  // lilás
    [168, 216, 255],  // azul pastel
    [184, 255, 224],  // menta
    [255, 213, 184],  // pêssego
    [255, 243, 184],  // amarelo pastel
  ];

  const state = {
    yaw: 0.4, yawTarget: 0.4,
    pitch: 0.15, pitchTarget: 0.15,
    camZ: 4.6,
    t: 0,
    colorMix: [255, 179, 217],
    colorIdx: 0,
    colorTimer: 0,
    pulse: 0,
    pulsePhase: 0,
  };

  const WAVES = [];
  const WAVE_INTERVAL = 0.9;
  let waveTimer = 0;

  function spawnWave() {
    WAVES.push({
      r: 1.35,
      life: 1.0,
      speed: 0.95,
      color: [...state.colorMix],
    });
  }

  let dragging = false;
  let lastX = 0, lastY = 0;
  let lastInteraction = performance.now();

  canvas.addEventListener("pointerdown", (e) => {
    dragging = true;
    lastX = e.clientX; lastY = e.clientY;
    canvas.setPointerCapture(e.pointerId);
    lastInteraction = performance.now();
  });
  canvas.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    lastX = e.clientX; lastY = e.clientY;
    state.yawTarget   += dx * 0.006;
    state.pitchTarget -= dy * 0.006;
    state.pitchTarget  = clamp(state.pitchTarget, -1.2, 1.2);
    lastInteraction = performance.now();
  });
  canvas.addEventListener("pointerup", (e) => {
    dragging = false;
    try { canvas.releasePointerCapture(e.pointerId); } catch (_) {}
  });

  let t0 = performance.now();

  function frame(now) {
    const dt = Math.min((now - t0) / 1000, 0.05);
    t0 = now;
    state.t += dt;

    // troca de cor suave a cada 7s
    state.colorTimer += dt;
    if (state.colorTimer > 7) {
      state.colorTimer = 0;
      state.colorIdx = (state.colorIdx + 1) % PALETTE.length;
    }
    const target = PALETTE[state.colorIdx];
    state.colorMix[0] = lerp(state.colorMix[0], target[0], 0.03);
    state.colorMix[1] = lerp(state.colorMix[1], target[1], 0.03);
    state.colorMix[2] = lerp(state.colorMix[2], target[2], 0.03);

    // pulso
    state.pulsePhase += dt;
    const pulseFreq = 1 / WAVE_INTERVAL;
    state.pulse = Math.sin(state.pulsePhase * Math.PI * 2 * pulseFreq) * 0.5 + 0.5;
    const pulseSharp = Math.pow(state.pulse, 3);

    // ondas
    waveTimer += dt;
    if (waveTimer >= WAVE_INTERVAL) {
      waveTimer -= WAVE_INTERVAL;
      spawnWave();
    }
    for (let i = WAVES.length - 1; i >= 0; i--) {
      const w = WAVES[i];
      w.r += w.speed * dt;
      w.life -= dt * 0.5;
      if (w.life <= 0) WAVES.splice(i, 1);
    }

    // câmera
    const k = 1 - Math.pow(0.001, dt);
    state.yaw   = lerp(state.yaw,   state.yawTarget,   k * 0.55);
    state.pitch = lerp(state.pitch, state.pitchTarget, k * 0.55);

    const idle = (now - lastInteraction) > 3000;
    if (idle && !dragging) state.yawTarget += dt * 0.08;

    const cy = Math.cos(state.yaw),   sy = Math.sin(state.yaw);
    const cp = Math.cos(state.pitch), sp = Math.sin(state.pitch);

    ctx.clearRect(0, 0, W, H);

    const cx = W * 0.5;
    const cyS = H * 0.5;
    const hc = state.colorMix;

    // ---- ondas (wireframe esférico) ----
    for (let i = 0; i < WAVES.length; i++) {
      const w = WAVES[i];
      const lifeAlpha = w.life * w.life;
      if (lifeAlpha <= 0.01) continue;
      const col = w.color;
      const baseAlpha = lifeAlpha * 0.55;

      const RINGS = 3;
      for (let ring = 0; ring < RINGS; ring++) {
        const tiltAngle = (ring / RINGS) * Math.PI;
        const STEPS = 44;
        ctx.beginPath();
        let first = true;
        for (let s = 0; s <= STEPS; s++) {
          const a = (s / STEPS) * Math.PI * 2;
          const rx = Math.cos(a) * w.r;
          const ry = Math.sin(a) * w.r;
          const rz = 0;
          const ry2 = ry * Math.cos(tiltAngle) - rz * Math.sin(tiltAngle);
          const rz2 = ry * Math.sin(tiltAngle) + rz * Math.cos(tiltAngle);
          const rx2 = rx;
          const x1 =  rx2 * cy - rz2 * sy;
          const z1 =  rx2 * sy + rz2 * cy;
          const y1 =  ry2;
          const y2 =  y1 * cp - z1 * sp;
          const z2 =  y1 * sp + z1 * cp;
          const x2 =  x1;
          const zc = z2 + state.camZ;
          if (zc <= 0.2) { first = true; continue; }
          const kk = FOCAL / zc;
          const px = cx + x2 * kk;
          const py = cyS - y2 * kk;
          if (first) { ctx.moveTo(px, py); first = false; }
          else       { ctx.lineTo(px, py); }
        }
        const ringAlpha = baseAlpha * (0.6 + 0.4 * Math.sin(ring));
        ctx.strokeStyle = `rgba(${col[0]|0}, ${col[1]|0}, ${col[2]|0}, ${ringAlpha.toFixed(3)})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
    }

    // ---- halo ----
    const haloR = Math.min(W, H) * (0.32 + pulseSharp * 0.06);
    const haloA = 0.08 + pulseSharp * 0.12;
    const grad = ctx.createRadialGradient(cx, cyS, 0, cx, cyS, haloR);
    grad.addColorStop(0, `rgba(${hc[0]|0}, ${hc[1]|0}, ${hc[2]|0}, ${haloA.toFixed(3)})`);
    grad.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // ---- esfera ----
    const sphereScale = 1 + pulseSharp * 0.09;
    const buf = [];
    for (let i = 0; i < N; i++) {
      const p = SPHERE[i];
      let x = p[0] * sphereScale;
      let y = p[1] * sphereScale;
      let z = p[2] * sphereScale;

      const x1 =  x * cy - z * sy;
      const z1 =  x * sy + z * cy;
      const y1 =  y;
      const y2 =  y1 * cp - z1 * sp;
      const z2 =  y1 * sp + z1 * cp;
      const x2 =  x1;
      const zc = z2 + state.camZ;
      if (zc <= 0.2) continue;

      const kk  = FOCAL / zc;
      const sx  = cx + x2 * kk;
      const sy2 = cyS - y2 * kk;
      const d01 = clamp((zc - (state.camZ - 1.5)) / 3, 0, 1);

      const alpha = 0.20 + (1 - d01) * 0.80;
      const rad   = 0.8 + (1 - d01) * 2.2 + pulseSharp * 0.5;
      const whiteMix = (1 - d01) * 0.35 + pulseSharp * 0.30;

      const R  = hc[0] + (255 - hc[0]) * whiteMix;
      const G  = hc[1] + (255 - hc[1]) * whiteMix;
      const Bc = hc[2] + (255 - hc[2]) * whiteMix;

      buf.push([sx, sy2, rad, alpha, zc, R, G, Bc]);
    }
    buf.sort((p, q) => q[4] - p[4]);

    for (let i = 0; i < buf.length; i++) {
      const [sx, sy2, r, alpha, zc, R, G, B] = buf[i];
      ctx.fillStyle = `rgba(${R|0}, ${G|0}, ${B|0}, ${alpha.toFixed(3)})`;
      ctx.beginPath();
      ctx.arc(sx, sy2, r, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();