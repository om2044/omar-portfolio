"use client";

import { useId, useRef } from "react";
import { X, FileText, Mail, Code2, BriefcaseBusiness } from "lucide-react";
import { site } from "@/lib/site";

type Resource = keyof typeof site.links;
const labels = { resume: "Résumé", email: "Email", github: "GitHub", linkedin: "LinkedIn" };
const icons = { resume: FileText, email: Mail, github: Code2, linkedin: BriefcaseBusiness };

export function ResourceLink({ resource, children, className = "" }: { resource: Resource; children?: React.ReactNode; className?: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const trigger = useRef<HTMLButtonElement>(null);
  const href = site.links[resource];
  const Icon = icons[resource];
  const close = () => { dialog.current?.close(); trigger.current?.focus(); };
  if (href) return <a className={className} href={resource === "email" ? `mailto:${href}` : href} download={resource === "resume" || undefined} target={resource === "github" || resource === "linkedin" ? "_blank" : undefined} rel={resource === "github" || resource === "linkedin" ? "noopener noreferrer" : undefined}>{children ?? labels[resource]}</a>;
  return <>
    <button ref={trigger} className={className} onClick={() => dialog.current?.showModal()} aria-haspopup="dialog">{children ?? labels[resource]}</button>
    <dialog ref={dialog} className="resource-dialog" onClick={(event) => { if (event.target === event.currentTarget) close(); }} aria-labelledby={titleId}>
      <div className="dialog-content">
        <button onClick={close} className="icon-button dialog-close" aria-label="Close dialog"><X size={20} /></button>
        <span className="dialog-icon"><Icon size={26} /></span>
        <p className="eyebrow">A SMALL NOTE</p>
        <h2 id={titleId}>{resource === "resume" ? "Résumé coming soon." : `${labels[resource]} link coming soon.`}</h2>
        <p>{resource === "resume" ? "Omar’s résumé hasn’t been added to this portfolio yet. In the meantime, explore his projects and experience below." : `Omar’s ${labels[resource]} details haven’t been added yet. This is a placeholder, so there’s no external link to open.`}</p>
        <button className="button button-primary" onClick={close}>Back to the portfolio</button>
      </div>
    </dialog>
  </>;
}
