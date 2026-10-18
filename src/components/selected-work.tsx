import { ArrowUpRight, Plus } from "lucide-react";
import { projects, type Project } from "@/lib/projects";
import { EcoVisual, ProjectGlyph } from "./project-visual";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

function CaseStudy({ project }: { project: Project }) {
  return (
    <div className="case-study" id={`${project.id}-details`}>
      <div className="case-context"><span className="eyebrow">PROJECT NOTES / {project.number}</span><p>{project.context}</p></div>
      {project.images?.map(image => (
        <figure className="case-image" key={image.src}>
          <a href={image.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size image: ${image.alt}`}>
            <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" />
          </a>
          <figcaption><span>{image.caption}</span><a href={image.src} target="_blank" rel="noopener noreferrer">View full size <ArrowUpRight size={14} aria-hidden="true" /></a></figcaption>
        </figure>
      ))}
      <div className="case-grid">
        <div><h4>The question</h4><p>{project.problem}</p><h4>Engineering focus</h4><p>{project.focus}</p></div>
        <div><h4>My contribution</h4><ul>{project.contributions.map(contribution => <li key={contribution}>{contribution}</li>)}</ul></div>
      </div>
      <div className="case-stack"><span className="eyebrow">BUILT WITH</span><div className="tags">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div></div>
      {(project.demo || project.deploymentSource || project.repository) && <div className="case-links">
        {project.demo && <a className="case-source" href={project.demo} target="_blank" rel="noopener noreferrer">Open live demo <ArrowUpRight size={16} aria-hidden="true" /></a>}
        {project.deploymentSource && <a className="case-source" href={project.deploymentSource} target="_blank" rel="noopener noreferrer">View deployment source <ArrowUpRight size={16} aria-hidden="true" /></a>}
        {project.repository && <a className="case-source" href={project.repository} target="_blank" rel="noopener noreferrer">View GitHub repository <ArrowUpRight size={16} aria-hidden="true" /></a>}
      </div>}
    </div>
  );
}

export function SelectedWork() {
  const featured = projects[0];
  return <section id="work" className="section work-section container" aria-labelledby="work-heading">
    <Reveal><SectionHeading number="02" label="SELECTED WORK" aside={<><span className="work-count">{String(projects.length).padStart(2, "0")}</span><span>projects.<br />one curious mind.</span></>}><span id="work-heading">Ideas, made <em>intelligent.</em></span></SectionHeading></Reveal>
    <Reveal><details className="featured-project project-details" name="project-case-study"><summary aria-controls="ecodrive-details"><div className="featured-copy"><span className="project-category">01 / FEATURED PROJECT</span><h3>ECODRIVE<span>-AI</span></h3><p>{featured.summary}</p><div className="tags"><span>Python</span><span>MATLAB / Simulink</span><span>Machine Learning</span></div><span className="project-open"><span className="closed-label">Explore case study</span><span className="open-label">Close case study</span><Plus size={18} aria-hidden="true" /></span></div><EcoVisual /></summary><CaseStudy project={featured} /></details></Reveal>
    <div className="project-list">{projects.slice(1).map((project, i) => <Reveal key={project.id} delay={i * .04}><details className="project-row project-details" name="project-case-study" open={project.id === "tomato"}><summary aria-controls={`${project.id}-details`}><span className="project-number">{project.number}</span>{project.images?.[0] ? <div className="project-glyph project-thumbnail" aria-hidden="true"><img src={project.images[0].src} alt="" width={project.images[0].width} height={project.images[0].height} loading="lazy" decoding="async" /></div> : <ProjectGlyph type={project.id} />}<div className="project-row-copy"><span className="project-category">{project.category}</span><h3>{project.title}</h3><p>{project.summary}</p></div><span className="project-toggle"><Plus size={21} aria-hidden="true"/><span className="sr-only">Expand case study</span></span></summary><CaseStudy project={project} /></details></Reveal>)}</div>
    <p className="work-footnote">Different questions. A shared pursuit of useful intelligence.</p>
  </section>;
}
