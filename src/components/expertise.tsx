import { Code2, Database, BrainCircuit, Layers3, Orbit } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const expertise = [
  { title: "Languages", icon: Code2, applied: ["Python", "MATLAB", "SQL", "JavaScript", "TypeScript"], toolkit: ["R", "Java", "C", "PL/SQL"], exploring: [] },
  { title: "Data Engineering", icon: Database, applied: ["Data Processing", "Medallion Pipelines", "SSIS", "SQL Server"], toolkit: ["Spark", "Databricks", "Kafka", "Airflow", "Power BI", "NoSQL"], exploring: [] },
  { title: "Artificial Intelligence", icon: BrainCircuit, applied: ["Machine Learning", "Computer Vision", "TensorFlow", "YOLO", "Multimodal LLMs"], toolkit: ["PyTorch", "Scikit-learn", "RAG", "LangChain"], exploring: [] },
  { title: "Backend & Applications", icon: Layers3, applied: ["FastAPI", "React", "Next.js", "PostgreSQL", "Streamlit", "Plotly", "Docker"], toolkit: ["Flask", "Git", "Linux"], exploring: [] },
  { title: "Engineering Interests", icon: Orbit, applied: [], toolkit: [], exploring: ["System Design", "Cloud Computing", "Distributed Systems", "MLOps"] },
];

export function Expertise() {
  return <section id="expertise" className="section expertise-section container" aria-labelledby="expertise-heading"><Reveal><SectionHeading number="04" label="TECHNICAL EXPERTISE" aside={<p>The tools change.<br />The engineering mindset stays.</p>}><span id="expertise-heading">A connected <em>toolkit.</em></span></SectionHeading><div className="skill-legend"><span><i className="applied-key"/>Applied in projects</span><span><i className="toolkit-key"/>Broader toolkit</span><span><i className="interest-key"/>Exploring / interests</span></div></Reveal><div className="expertise-table">{expertise.map((category, i) => <Reveal key={category.title}><div className="expertise-row"><div className="expertise-label"><span className="expertise-number">0{i + 1}</span><category.icon size={21} strokeWidth={1.3} aria-hidden="true"/><h3>{category.title}</h3></div><div className="skill-chips">{category.applied.map(skill => <span className="skill applied" key={skill}>{skill}<span className="sr-only"> — applied in projects</span></span>)}{category.toolkit.map(skill => <span className="skill toolkit" key={skill}>{skill}<span className="sr-only"> — broader toolkit</span></span>)}{category.exploring.map(skill => <span className="skill exploring" key={skill}>{skill}<span className="sr-only"> — engineering interest</span></span>)}</div></div></Reveal>)}</div><p className="expertise-note">A foundation built through projects, with room to keep learning.</p></section>;
}
