"use client";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 180, damping: 30 });
  const reduced = useReducedMotion();
  return <motion.div className="reading-progress" aria-hidden="true" style={{ scaleX: reduced ? scrollYProgress : smooth }} />;
}
