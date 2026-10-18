"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const element = ref.current;
    if (!element || reduced || element.getBoundingClientRect().top < window.innerHeight) return;
    setVisible(false);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.08 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [reduced]);
  return <motion.div ref={ref} initial={false} animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 22 }} transition={{ delay, duration: 0.65 }} className={className}>{children}</motion.div>;
}
