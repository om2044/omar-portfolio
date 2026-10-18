"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";
import { useReducedMotion } from "motion/react";

// An original toroidal point field. These are geometric coordinates, not project data.
export function SignalField() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const holder = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const rotation = useRef({ x: -0.45, y: 0.28 });
  const drag = useRef<{ x: number; y: number } | null>(null);
  const redraw = useRef<() => void>(() => {});
  useEffect(() => {
    const element = canvas.current;
    const parent = holder.current;
    const ctx = element?.getContext("2d", { alpha: true });
    if (!element || !parent || !ctx) return;
    let frame = 0;
    let width = 0;
    let height = 0;
    let visible = true;
    let previous = 0;
    const points: [number, number, number, number][] = [];
    for (let ring = 0; ring < 70; ring++) {
      const u = ring / 70 * Math.PI * 2;
      for (let dot = 0; dot < 74; dot++) {
        const v = dot / 74 * Math.PI * 2;
        const tube = 0.55 + 0.11 * Math.sin(3 * u);
        const r = 1.55 + tube * Math.cos(v);
        points.push([r * Math.cos(u), tube * Math.sin(v), r * Math.sin(u), dot % 7 === 0 ? 1 : 0]);
      }
    }
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const scale = Math.min(width / 5.5, height / 5.4);
      const { x: rx, y: ry } = rotation.current;
      const sx = Math.sin(rx), cx = Math.cos(rx), sy = Math.sin(ry), cy = Math.cos(ry);
      const transformed = points.map(([x, y, z, strong]) => {
        const nx = x * cy - z * sy, nz = x * sy + z * cy;
        const ny = y * cx - nz * sx, depth = y * sx + nz * cx;
        const perspective = 6 / (6 - depth);
        return [width / 2 + nx * scale * perspective, height / 2 + ny * scale * perspective, depth, strong, perspective];
      }).sort((a, b) => a[2] - b[2]);
      for (const [x, y, z, strong, perspective] of transformed) {
        const alpha = 0.18 + ((z + 2.2) / 4.4) * 0.72;
        ctx.fillStyle = `rgba(${strong ? "232,249,181" : "184,222,114"},${Math.min(1, alpha)})`;
        const size = (strong ? 1.25 : 0.85) * perspective;
        ctx.beginPath(); ctx.arc(x, y, size, 0, Math.PI * 2); ctx.fill();
      }
    };
    redraw.current = draw;
    const resize = () => {
      const bounds = parent.getBoundingClientRect();
      width = bounds.width; height = bounds.height;
      const dpr = Math.min(devicePixelRatio || 1, 2);
      element.width = Math.round(width * dpr); element.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); draw();
    };
    const tick = (time: number) => {
      if (!paused && !reduced && visible && !document.hidden && !drag.current) {
        if (time - previous > 30) { rotation.current.y += 0.0028; draw(); previous = time; }
      }
      if (visible && !document.hidden && !paused && !reduced) frame = requestAnimationFrame(tick);
    };
    const syncAnimation = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      if (visible && !document.hidden && !paused && !reduced) frame = requestAnimationFrame(tick);
    };
    const observer = new ResizeObserver(resize); observer.observe(parent);
    const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; syncAnimation(); }); intersection.observe(parent);
    document.addEventListener("visibilitychange", syncAnimation);
    resize();
    syncAnimation();
    return () => { cancelAnimationFrame(frame); observer.disconnect(); intersection.disconnect(); document.removeEventListener("visibilitychange", syncAnimation); };
  }, [paused, reduced]);
  return <div className="signal-field" ref={holder}>
    <div className="field-cross field-cross-one" aria-hidden="true" /><div className="field-cross field-cross-two" aria-hidden="true" />
    <span className="field-label field-label-top">FIG. 01 / LATENT FORM</span>
    <canvas ref={canvas} role="img" aria-label="An original three-dimensional toroidal field of chartreuse points. Drag to rotate; use Rotate view for keyboard control."
      onPointerDown={event => { if (event.pointerType !== "mouse") return; drag.current = { x: event.clientX, y: event.clientY }; event.currentTarget.setPointerCapture(event.pointerId); }}
      onPointerMove={event => { if (!drag.current) return; rotation.current.y += (event.clientX - drag.current.x) * 0.008; rotation.current.x += (event.clientY - drag.current.y) * 0.008; drag.current = { x: event.clientX, y: event.clientY }; redraw.current(); }}
      onPointerUp={() => { drag.current = null; }} onPointerCancel={() => { drag.current = null; }}>A generative geometry sculpture made from interconnected data-like points.</canvas>
    <span className="field-label field-label-bottom">COMPLEXITY, INTO POSSIBILITY.</span>
    <div className="field-controls">
      <button className="icon-button" title="Rotate view" aria-label="Rotate sculpture view" onClick={() => { rotation.current.y += 0.65; redraw.current(); }}><RotateCcw size={14} /></button>
      {!reduced && <button className="icon-button" title={paused ? "Play motion" : "Pause motion"} aria-label={paused ? "Play sculpture animation" : "Pause sculpture animation"} onClick={() => setPaused(!paused)}>{paused ? <Play size={14} /> : <Pause size={14} />}</button>}
    </div>
  </div>;
}
