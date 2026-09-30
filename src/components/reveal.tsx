"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimationControls, useReducedMotion } from "motion/react";

export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const reduced = useReducedMotion();
  useEffect(() => {
    const element = ref.current;
    if (!element || reduced || element.getBoundingClientRect().top < window.innerHeight) return;
    controls.set({ opacity: 0, y: 22 });
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        void controls.start({ opacity: 1, y: 0, transition: { delay, duration: 0.65 } });
        observer.disconnect();
      }
    }, { threshold: 0.08 });
    observer.observe(element);
    return () => { observer.disconnect(); controls.set({ opacity: 1, y: 0 }); };
  }, [controls, reduced, delay]);
  return <motion.div ref={ref} initial={false} animate={controls} className={className}>{children}</motion.div>;
}
