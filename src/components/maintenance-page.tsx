import { ArrowUpRight, Mail } from "lucide-react";
import { site } from "@/lib/site";
import styles from "./maintenance-page.module.css";

export function MaintenancePage() {
  return (
    <main className={styles.page} lang="fr" aria-labelledby="maintenance-title">
      <header className={styles.header}>
        <div className={styles.identity}>
          <span className={styles.monogram} aria-hidden="true">o/</span>
          <div><p>{site.name}</p><span>DATA SCIENCE · BIG DATA · IA</span></div>
        </div>
        <span className={styles.location}>Agadir, Maroc</span>
      </header>

      <section className={styles.content}>
        <div className={styles.copy}>
          <p className={styles.status}><span aria-hidden="true" />UNE NOUVELLE VERSION SE PRÉPARE</p>
          <h1 id="maintenance-title" className={styles.title}>Portfolio en cours de <em>mise à jour.</em></h1>
          <p className={styles.description}>Je prépare une nouvelle présentation de mes projets en data et intelligence artificielle. Merci pour votre patience.</p>
          <div className={styles.actions}>
            {site.links.email && <a className={styles.contact} href={`mailto:${site.links.email}`}><Mail size={18} aria-hidden="true" />Me contacter<ArrowUpRight size={18} aria-hidden="true" /></a>}
            {site.links.linkedin && <a className={styles.social} href={site.links.linkedin} target="_blank" rel="noopener noreferrer">Retrouvons-nous sur LinkedIn<ArrowUpRight size={16} aria-hidden="true" /></a>}
          </div>
        </div>
        <div className={styles.art} aria-hidden="true">
          <svg viewBox="0 0 440 440" fill="none">
            <circle cx="220" cy="220" r="188" stroke="currentColor" strokeOpacity=".12" />
            <circle cx="220" cy="220" r="145" stroke="currentColor" strokeOpacity=".18" strokeDasharray="2 9" />
            <circle cx="220" cy="220" r="101" stroke="currentColor" strokeOpacity=".2" />
            <ellipse cx="220" cy="220" rx="188" ry="64" transform="rotate(-35 220 220)" stroke="currentColor" strokeOpacity=".5" />
            <ellipse cx="220" cy="220" rx="188" ry="64" transform="rotate(35 220 220)" stroke="currentColor" strokeOpacity=".25" />
            <path d="M220 12V428M12 220H428" stroke="currentColor" strokeOpacity=".1" strokeDasharray="3 8" />
            <circle cx="220" cy="220" r="8" fill="currentColor" />
            <circle cx="374" cy="112" r="5" fill="currentColor" />
            <circle cx="65" cy="327" r="4" fill="currentColor" fillOpacity=".6" />
          </svg>
          <span>DATA → INTELLIGENCE → IMPACT</span>
        </div>
      </section>

      <footer className={styles.footer}><span>Omar Ait Bouhmad</span><span>Les projets évoluent. La curiosité reste.</span></footer>
    </main>
  );
}
