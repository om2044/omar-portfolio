import { Database, Layers3, ScanLine, Braces } from "lucide-react";

export function EcoVisual() {
  return <div className="eco-visual" aria-label="Conceptual diagram connecting driving data, physical modeling, and machine learning. This graphic does not depict measured results." role="img">
    <div className="visual-topline"><span>ECODRIVE / SYSTEM CONCEPT</span><span className="visual-spark">✳</span></div>
    <svg viewBox="0 0 500 270" className="eco-curves" aria-hidden="true">
      <defs><linearGradient id="curve-gradient" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#596f4e" stopOpacity=".2"/><stop offset=".5" stopColor="#d5f58b"/><stop offset="1" stopColor="#87a76a" stopOpacity=".2"/></linearGradient></defs>
      {Array.from({ length: 24 }, (_, i) => <path key={i} d={`M -10 ${190 + i * 2} C 75 ${210 + i * 2}, 100 ${20 + i * 6}, 200 ${82 + i * 5} S 335 ${225 - i * 6}, 510 ${20 + i * 7}`} stroke="url(#curve-gradient)" fill="none" strokeWidth=".9" opacity={.35 + i / 40} />)}
      <path d="M 250 30 V 248 M 22 140 H 478" stroke="#899d7433" strokeDasharray="3 6"/>
      <circle cx="250" cy="140" r="40" fill="#112219" fillOpacity=".75" stroke="#d5f58b66"/><circle cx="250" cy="140" r="5" fill="#d5f58b"/>
    </svg>
    <div className="eco-model-label"><span>PHYSICS</span><span className="model-center">+</span><span>MACHINE LEARNING</span></div>
    <div className="visual-bottomline"><span>DRIVING DATA</span><div className="diagram-connector" /><span>FUEL ESTIMATION</span></div>
  </div>;
}

export function ProjectGlyph({ type }: { type: string }) {
  if (type === "portfolio") return <div className="project-glyph portfolio-glyph" aria-hidden="true"><Braces size={58} strokeWidth={.8} /></div>;
  if (type === "olist") return <div className="project-glyph warehouse-glyph" aria-hidden="true"><Database size={58} strokeWidth={.8} /></div>;
  if (type === "anomaly") return <div className="project-glyph anomaly-glyph" aria-hidden="true">{Array.from({ length: 36 }, (_, i) => <span key={i} className={i === 15 || i === 20 || i === 21 ? "anomaly-pixel" : ""} style={{ opacity: .35 + ((i * 7) % 11) / 18 }} />)}<ScanLine size={74} strokeWidth={.7} /></div>;
  if (type === "tomato") return <div className="project-glyph stack-glyph" aria-hidden="true"><Layers3 size={64} strokeWidth={.8} /><div><Braces size={16} /><span /><Database size={16} /></div></div>;
  return <div className="project-glyph document-glyph" aria-hidden="true"><span className="ocr-corner"/><span className="ocr-text">Aa</span><span className="ocr-line"/><span className="ocr-line short"/></div>;
}
