import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const experiences = [
  {
    period: "JULY—AUGUST 2026",
    city: "Casablanca, Morocco",
    company: "Capgemini Engineering",
    role: "AI / Data Engineering Intern",
    description: "Working at the intersection of physical systems and artificial intelligence through ECODRIVE-AI, an eco-driving system aimed at reducing fuel consumption and CO₂ emissions.",
    contributions: [
      ["Vehicle modeling & simulation", "MATLAB / Simulink"],
      ["End-to-end telemetry pipelines", "Collection, processing, feature engineering"],
      ["Consumption & emissions prediction", "Machine learning"],
      ["Real-time recommendation design", "Physics + intelligent models"],
    ],
  },
  {
    period: "JULY—AUGUST 2025",
    city: "Agadir, Morocco",
    company: "NET ALEK Services",
    role: "Handwriting OCR & Multimodal LLMs Intern",
    description: "Exploring handwriting recognition through multimodal fine-tuning, with LLaMA 3.2 Vision and the RIMES dataset. Brought the work into a real-time web prototype.",
    contributions: [
      ["Multimodal model fine-tuning", "LLaMA 3.2 Vision / RIMES"],
      ["Training approach comparison", "LoRA / Unsloth"],
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
