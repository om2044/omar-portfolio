import { Code2, BriefcaseBusiness, Mail, FileText } from "lucide-react";
import { ResourceLink } from "./resource-link";
import { Reveal } from "./reveal";
import { site } from "@/lib/site";

export function Contact() {
  const links = [{ key: "email", label: "Email", icon: Mail }, { key: "github", label: "GitHub", icon: Code2 }, { key: "linkedin", label: "LinkedIn", icon: BriefcaseBusiness }, { key: "resume", label: "Résumé", icon: FileText }] as const;
  return <section id="contact" className="contact-section" aria-labelledby="contact-heading"><div className="container"><Reveal><div className="contact-topline"><p className="section-index"><span>06</span> / WHAT’S NEXT?</p><span className="contact-location">AGADIR, MOROCCO / CONNECTING EVERYWHERE</span></div><div className="contact-main"><h2 id="contact-heading">Good things start<br />with a <em>conversation.</em><span className="contact-asterisk" aria-hidden="true">✳</span></h2><p>Working on something interesting?<br />I’d love to connect with fellow engineers,<br className="desktop-break"/> recruiters, and curious collaborators.</p></div><a className="contact-email" href={`mailto:${site.links.email}`}>{site.links.email}</a><div className="contact-links">{links.map(link => <ResourceLink resource={link.key} className="social-link" key={link.key}><span><link.icon size={18} strokeWidth={1.5} aria-hidden="true"/>{link.label}</span><small>{site.links[link.key] ? (link.key === "resume" ? "PDF / French" : link.key === "email" ? "Say hello" : "View profile") : "Coming soon"}</small></ResourceLink>)}</div><p className="contact-note">Seeking a final-year project internship (PFE) in 2027 — Data Science, Big Data & AI.</p></Reveal></div></section>;
}

export function Footer() {
  return <footer className="site-footer container"><a href="#top" className="footer-name">Omar Ait Bouhmad<span>© 2026</span></a><p>Built with intention. Driven by curiosity.</p><a href="#top" className="back-top">Back to top <span aria-hidden="true">+</span></a></footer>;
}
