import { Download, MapPin } from "lucide-react";
import { SignalField } from "./signal-field";
import { ResourceLink } from "./resource-link";

export function Hero() {
  return <section id="top" className="hero container" aria-labelledby="hero-heading">
    <div className="hero-topline"><span className="eyebrow">PORTFOLIO / 2026—2027</span><span className="hero-location"><MapPin size={13} aria-hidden="true" /> AGADIR, MOROCCO</span></div>
    <div className="hero-composition">
      <div className="hero-copy"><p className="hero-role"><span className="line-mark" /> DATA & AI ENGINEERING STUDENT</p>
        <h1 id="hero-heading">Omar Ait<br />Bouhmad<span className="name-period">.</span></h1>
        <p className="hero-statement">Engineering intelligence<br /><em>from data.</em></p>
        <p className="hero-description">I connect data, models, and software to build intelligent systems—with curiosity at the core and real-world usefulness in mind.</p>
        <div className="hero-actions"><a href="#work" className="button button-primary">Explore my work <span aria-hidden="true" className="button-plus">+</span></a><ResourceLink resource="resume" className="resume-link"><Download size={16} aria-hidden="true" /><span>Download résumé<small>PDF / French · PFE 2027</small></span></ResourceLink></div>
        <a href="#contact" className="hero-contact-link">Seeking a PFE internship · 2027</a>
      </div>
      <div className="hero-visual"><SignalField /></div>
    </div>
    <div className="hero-footer"><p>Engineering student at <strong>ENSA Agadir</strong></p><span className="hero-disciplines">DATA SCIENCE <span>/</span> BIG DATA <span>/</span> ARTIFICIAL INTELLIGENCE</span><a href="#about" className="scroll-cue"><span className="scroll-line" aria-hidden="true" /> SCROLL TO EXPLORE</a></div>
  </section>;
}
