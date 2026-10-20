"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, Maximize2, X } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectGallery({ images, title }: { images: NonNullable<Project["images"]>; title: string }) {
  const [index, setIndex] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const reduced = useReducedMotion();
  const current = images[index];
  if (!current) return null;
  const step = (direction: number) => setIndex(i => (i + direction + images.length) % images.length);
  return <section className="project-gallery" aria-label={`${title} screenshots`} onKeyDown={event => {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); step(event.key === "ArrowRight" ? 1 : -1); }
  }}>
    <figure className="gallery-figure">
      <button className="gallery-open" onClick={() => dialog.current?.showModal()} aria-label={`Enlarge: ${current.alt}`}>
        <motion.img key={current.src} src={current.src} alt={current.alt} width={current.width} height={current.height} loading="lazy" initial={reduced ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : .25 }} />
        <span className="gallery-enlarge"><Maximize2 size={16} aria-hidden="true" /> Enlarge</span>
      </button>
      <figcaption aria-live="polite">{current.caption}</figcaption>
    </figure>
    {images.length > 1 && <div className="gallery-controls">
      <button onClick={() => step(-1)} aria-label="Previous screenshot"><ArrowLeft size={18} /></button>
      <div className="gallery-thumbnails">{images.map((image, i) => <button key={image.src} onClick={() => setIndex(i)} aria-label={`Show screenshot ${i + 1}: ${image.alt}`} aria-pressed={i === index}><img src={image.src} alt="" width={image.width} height={image.height} loading="lazy" /></button>)}</div>
      <span className="gallery-count">{index + 1} / {images.length}</span>
      <button onClick={() => step(1)} aria-label="Next screenshot"><ArrowRight size={18} /></button>
    </div>}
    <dialog ref={dialog} className="gallery-dialog" aria-label={`${title} enlarged screenshot`} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <div className="gallery-dialog-toolbar"><span>{title} · {index + 1} / {images.length}</span><button autoFocus onClick={() => dialog.current?.close()} aria-label="Close enlarged screenshot"><X /></button></div>
      <img src={current.src} alt={current.alt} width={current.width} height={current.height} />
      <div className="gallery-dialog-toolbar">{images.length > 1 && <button onClick={() => step(-1)} aria-label="Previous screenshot"><ArrowLeft /></button>}<p aria-live="polite">{current.caption}</p>{images.length > 1 && <button onClick={() => step(1)} aria-label="Next screenshot"><ArrowRight /></button>}</div>
    </dialog>
  </section>;
}
