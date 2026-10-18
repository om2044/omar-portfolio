export function SectionHeading({ number, label, children, aside }: { number: string; label: string; children: React.ReactNode; aside?: React.ReactNode }) {
  return <div className="section-heading"><div><p className="section-index"><span>{number}</span> / {label}</p><h2>{children}</h2></div>{aside && <div className="section-aside">{aside}</div>}</div>;
}
