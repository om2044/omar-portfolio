"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Plus } from "lucide-react";
import { projects, type Project } from "@/lib/projects";
import { ProjectGlyph } from "./project-visual";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { ProjectGallery } from "./project-gallery";

function CaseStudy({ project }: { project: Project }) {
  return (
    <div className="case-study" id={`${project.id}-details`}>
      <div className="case-context"><span className="eyebrow">PROJECT NOTES / {project.number}</span><p>{project.context}</p></div>
      {project.images?.length ? <ProjectGallery images={project.images} title={project.title} /> : null}
      <div className="case-grid">
        <div><h4>The question</h4><p>{project.problem}</p><h4>Engineering focus</h4><p>{project.focus}</p></div>
        <div><h4>My contribution</h4><ul>{project.contributions.map(contribution => <li key={contribution}>{contribution}</li>)}</ul></div>
      </div>
      <div className="case-stack"><span className="eyebrow">BUILT WITH</span><div className="tags">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div></div>
      {(project.demo || project.deploymentSource || project.repository) && <div className="case-links">
        {project.demo && <a className="case-source" href={project.demo} target="_blank" rel="noopener noreferrer">Open Hugging Face demo <ArrowUpRight size={16} aria-hidden="true" /></a>}
        {project.deploymentSource && <a className="case-source" href={project.deploymentSource} target="_blank" rel="noopener noreferrer">View deployment source <ArrowUpRight size={16} aria-hidden="true" /></a>}
        {project.repository && <a className="case-source" href={project.repository} target="_blank" rel="noopener noreferrer">View GitHub repository <ArrowUpRight size={16} aria-hidden="true" /></a>}
      </div>}
    </div>
  );
}

const filters = ["All projects", "Data & AI", "Computer vision", "Web"] as const;
type Filter = typeof filters[number];
const groups: Record<string, Filter> = { ecodrive: "Data & AI", olist: "Data & AI", documents: "Data & AI", tomato: "Computer vision", anomaly: "Computer vision", portfolio: "Web" };

export function SelectedWork() {
  const [filter, setFilter] = useState<Filter>("All projects");
  const reduce = useReducedMotion();
  const shown = projects.filter(p => filter === "All projects" || groups[p.id] === filter);
  useEffect(() => {
    const navigate = (id = window.location.hash.slice(1)) => {
      if (!projects.some(p => `project-${p.id}` === id)) return;
      setFilter("All projects");
      requestAnimationFrame(() => {
        const card = document.getElementById(id) as HTMLDetailsElement | null;
        if (card) { card.open = true; card.scrollIntoView({ behavior: reduce ? "instant" : "smooth", block: "start" }); }
      });
    };
    navigate();
    const onHashChange = () => navigate();
    const onProjectLink = (event: MouseEvent) => {
      const anchor = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#project-"]');
      if (anchor && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) navigate(anchor.hash.slice(1));
    };
    window.addEventListener("hashchange", onHashChange);
    document.addEventListener("click", onProjectLink);
    return () => { window.removeEventListener("hashchange", onHashChange); document.removeEventListener("click", onProjectLink); };
  }, [reduce]);
  return <section id="work" className="section studio-work container" aria-labelledby="work-heading">
    <Reveal><SectionHeading number="01" label="SELECTED WORK" aside={<p>From a first question<br />to something you can explore.</p>}><span id="work-heading">Built to make<br /><em>a difference.</em></span></SectionHeading></Reveal>
    <div className="work-toolbar"><div className="work-filters" role="group" aria-label="Filter projects">{filters.map(item => <button key={item} aria-pressed={filter===item} onClick={()=>setFilter(item)}>{item}<span>{item==="All projects"?projects.length:projects.filter(p=>groups[p.id]===item).length}</span></button>)}</div><p aria-live="polite">{String(shown.length).padStart(2,"0")} projects</p></div>
    <div className="studio-projects">{projects.map(project => <motion.div className="studio-project-wrap" hidden={filter!=="All projects"&&groups[project.id]!==filter} key={project.id} initial={false}>
      <details id={`project-${project.id}`} className={`studio-project project-details project-${project.id}`} name="project-case-study">
        <summary aria-controls={`${project.id}-details`}>
          <div className="project-cover">{project.images?.[0] ? <img src={project.images[0].src} alt={`${project.title} project preview`} width={project.images[0].width} height={project.images[0].height} loading="lazy" decoding="async"/> : <div className="portfolio-cover"><span>OMAR / DATA & AI</span><strong>Ideas.<br/>Engineered.</strong><ProjectGlyph type={project.id}/><span>NEXT.JS · TYPESCRIPT</span></div>}<span className="project-cover-action"><ArrowUpRight size={22}/></span><span className="project-cover-index">PROJECT / {project.number}</span></div>
          <div className="project-card-copy"><span className="project-category">{project.category}</span><h3>{project.title}</h3><p>{project.summary}</p><div className="project-card-bottom"><span>{project.technologies.slice(0,3).join(" / ")}</span><span className="project-open"><span className="closed-label">Explore</span><span className="open-label">Close</span><Plus size={18}/></span></div></div>
        </summary>
        <CaseStudy project={project}/>
      </details>
    </motion.div>)}</div>
  </section>;
}
