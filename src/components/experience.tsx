import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const experiences = [
  {
    period: "JULY—AUGUST 2026",
    city: "Casablanca, Morocco",
    company: "Capgemini Engineering",
    role: "AI / Data Engineering Intern",
    description: "Developed ECODRIVE-AI, a pipeline for modeling fuel consumption from real driving data using physical simulation and machine learning.",
    contributions: [
      ["Physical modeling pipeline", "Nine subsystems · MATLAB / Simulink & Python"],
      ["Data preparation & traceability", "Real driving data · SHA-256 hashing"],
      ["Feature engineering", "Exploratory analysis · 30-second sliding windows"],
      ["Fuel-consumption modeling", "Vehicle-level splits · ML / physical-model comparison"],
    ],
  },
  {
    period: "JULY—AUGUST 2025",
    city: "Agadir, Morocco",
    company: "NETALEK Services",
    role: "Handwriting OCR & Multimodal LLMs Intern",
    description: "Worked on handwritten text recognition by fine-tuning LLaMA 3.2 Vision on the RIMES dataset.",
    contributions: [
      ["Multimodal model fine-tuning", "LLaMA 3.2 Vision / RIMES"],
      ["Handwriting recognition", "Document images to text"],
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="experience-section" aria-labelledby="experience-heading">
      <div className="container section">
        <Reveal>
          <SectionHeading number="03" label="EXPERIENCE">
            <span id="experience-heading">Learning in the <em>real world.</em></span>
          </SectionHeading>
        </Reveal>
        {experiences.map(experience => (
          <Reveal className="experience-grid" key={experience.company}>
            <div className="experience-date">
              <span className="eyebrow">{experience.period}</span>
              <p>{experience.city}</p>
              <span className="experience-type">INTERNSHIP</span>
            </div>
            <article className="experience-entry">
              <span className="timeline-node" aria-hidden="true" />
              <h3>{experience.company}</h3>
              <p className="experience-role">{experience.role}</p>
              <p className="experience-intro">{experience.description}</p>
              <div className="experience-contributions">
                {experience.contributions.map(([title, description], i) => (
                  <div key={title}>
                    <span>0{i + 1}</span>
                    <p>{title}<br /><small>{description}</small></p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
