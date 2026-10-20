"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Database, Workflow, PanelsTopLeft } from "lucide-react";

const stages = [
  { title: "Collect", label: "Find the signal.", detail: "Structure raw records into data you can trust.", tech: "SQL · Python · ETL", project: "Olist / from records to reporting", href: "#project-olist", icon: Database },
  { title: "Learn", label: "Make sense of it.", detail: "Explore patterns, build features, and compare models.", tech: "Python · PyTorch · Computer vision", project: "ECODRIVE / physics meets machine learning", href: "#project-ecodrive", icon: Workflow },
  { title: "Build", label: "Put it to work.", detail: "Connect model predictions to an application people can use.", tech: "FastAPI · React · Docker", project: "TomatoGrade / model to deployed prototype", href: "#project-tomato", icon: PanelsTopLeft },
];
const points = Array.from({ length: 40 }, (_, i) => ({ x: 35 + ((i * 79 + 11) % 340), y: 30 + ((i * 43 + 17) % 170), group: i % 3 }));
const colors = ["#5ee9d0", "#779aff", "#ffa28e"];

export function PipelineLab() {
  const [stage, setStage] = useState(0);
  const reduce = useReducedMotion();
  const current = stages[stage];
  return <div className="pipeline-lab">
    <div className="lab-title"><span><span className="lab-dot" /> THE ENGINEERING PROCESS</span><span>01—03</span></div>
    <div className="lab-tabs" role="tablist" aria-label="Explore the engineering process">
      {stages.map((item, i) => <button key={item.title} id={`stage-${i}`} role="tab" aria-selected={stage === i} aria-controls="pipeline-panel" tabIndex={stage === i ? 0 : -1} onClick={() => setStage(i)} onKeyDown={event => {
        const next = event.key === "ArrowRight" ? (i + 1) % 3 : event.key === "ArrowLeft" ? (i + 2) % 3 : event.key === "Home" ? 0 : event.key === "End" ? 2 : null;
        if (next !== null) { event.preventDefault(); setStage(next); document.getElementById(`stage-${next}`)?.focus(); }
      }}><span>0{i + 1}</span>{item.title}<item.icon size={16} /></button>)}
    </div>
    <div id="pipeline-panel" role="tabpanel" aria-labelledby={`stage-${stage}`} tabIndex={0}>
      <div className="lab-plot" aria-hidden="true">
        <div className="plot-label"><span>{["RAW INPUT / UNSTRUCTURED", "FEATURE SPACE / PATTERNS", "CONNECTED SYSTEM / OUTPUT"][stage]}</span><span>ILLUSTRATION</span></div>
        <svg viewBox="0 0 420 240" fill="none">
          <defs><pattern id="plot-grid" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".8" fill="#54657c" opacity=".4" /></pattern></defs>
          <rect width="420" height="240" fill="url(#plot-grid)" />
          <motion.path d="M 74 120 H 190 M 230 120 H 346" stroke="#5ee9d0" strokeWidth="1.5" strokeDasharray="4 6" animate={{opacity:stage === 2 ? .7 : 0}} transition={{duration:reduce?0:.3}} />
          {[0,1,2].map(group => <motion.rect key={group} x={36+group*136} y={70} width={76} height={100} rx={10} fill="#0d1c2b" stroke={colors[group]} animate={{opacity:stage===2?1:0}} transition={{duration:reduce?0:.35}} />)}
          {points.map((point,i) => <motion.circle key={i} r={stage===2?2.4:3.5} fill={colors[point.group]} initial={false} animate={{
            cx: stage===0 ? point.x : stage===1 ? 74 + point.group*135 + Math.sin(i*2.4)*32 : 49+point.group*136+(Math.floor(i/3)%5)*12,
            cy: stage===0 ? point.y : stage===1 ? 130+Math.cos(i*1.7)*45 : 89+Math.floor(i/15)*25,
            opacity: stage===0 ? .45+(i%4)*.15 : .9,
          }} transition={reduce?{duration:0}:{type:"spring",stiffness:85,damping:18,delay:i*.006}} />)}
          {["DATA","MODEL","APP"].map((label,i)=><motion.text key={label} x={74+i*136} y={195} textAnchor="middle" fill={colors[i]} fontSize="10" fontFamily="monospace" animate={{opacity:stage===2?1:0}} transition={{duration:reduce?0:.3}}>{label}</motion.text>)}
        </svg>
        <div className="plot-legend"><span><i style={{background:colors[0]}}/>Data</span><span><i style={{background:colors[1]}}/>Models</span><span><i style={{background:colors[2]}}/>Applications</span></div>
      </div>
      <div className="lab-story" aria-live="polite"><motion.div key={stage} initial={reduce?false:{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:reduce?0:.25}}><h2>{current.label}</h2><p>{current.detail}</p><span className="lab-tech">{current.tech}</span></motion.div></div>
      <a className="lab-project-link" href={current.href}>{current.project}<ArrowRight size={17}/></a>
    </div>
    <p className="lab-hint">Choose a step to explore how I work.</p>
  </div>;
}
