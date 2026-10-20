import { ArrowDownRight, ArrowUpRight, Download } from "lucide-react";
import { ResourceLink } from "./resource-link";
import { PipelineLab } from "./pipeline-lab";
import { Reveal } from "./reveal";

export function Hero() {
  return <section id="top" className="studio-hero container" aria-labelledby="hero-heading">
    <div className="studio-topline"><span className="eyebrow">OMAR AIT BOUHMAD / PORTFOLIO 2026–27</span><a href="#contact" className="availability"><span /> OPEN TO PFE · 2027 <ArrowUpRight size={13} /></a></div>
    <div className="studio-hero-grid">
      <Reveal className="studio-intro"><p className="studio-kicker">DATA & AI ENGINEERING STUDENT</p><h1 id="hero-heading">From raw data<br />to <span>real-world</span><br /><em>intelligence.</em></h1><p className="studio-description">I’m Omar. I build the connections between data, machine learning, and the applications that make them useful.</p><div className="hero-actions"><a href="#work" className="button button-primary">Explore my projects <ArrowDownRight size={20} /></a><ResourceLink resource="resume" className="resume-link"><Download size={17}/><span>My résumé<small>French · PFE 2027</small></span></ResourceLink></div></Reveal>
      <Reveal delay={.12} className="studio-lab-wrap"><PipelineLab /></Reveal>
    </div>
    <div className="studio-hero-footer"><p><span>BASED IN MOROCCO</span>Engineering student, ENSA Agadir</p><div className="discipline-line"><span>Data engineering</span><i>↗</i><span>Machine learning</span><i>↗</i><span>Useful software</span></div><a href="#work" aria-label="Scroll to projects"><ArrowDownRight size={24}/></a></div>
  </section>;
}
