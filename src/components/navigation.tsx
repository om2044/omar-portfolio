"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const items = [{ href: "#work", label: "Selected work" }, { href: "#about", label: "About" }, { href: "#expertise", label: "Expertise" }];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const button = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);
  const navigateTo = (href: string) => {
    setOpen(false);
    const target = document.getElementById(href.slice(1));
    if (target) {
      target.tabIndex = -1;
      target.focus({ preventScroll: true });
    }
  };
  useEffect(() => {
    const sections = document.querySelectorAll("main > section[id]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(`#${entry.target.id}`); });
    }, { rootMargin: "-15% 0px -60% 0px" });
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    const dismiss = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); button.current?.focus(); } };
    const outside = (event: PointerEvent) => { if (!nav.current?.contains(event.target as Node)) setOpen(false); };
    document.addEventListener("keydown", dismiss);
    document.addEventListener("pointerdown", outside);
    const mq = matchMedia("(min-width: 761px)");
    const resize = () => { if (mq.matches) setOpen(false); };
    mq.addEventListener("change", resize);
    return () => { document.removeEventListener("keydown", dismiss); document.removeEventListener("pointerdown", outside); mq.removeEventListener("change", resize); };
  }, [open]);
  return <header className="site-header"><nav ref={nav} className="nav container" aria-label="Main navigation">
    <a className="brand" href="#top" aria-label="Omar Ait Bouhmad, home" onClick={() => navigateTo("#top")}><span className="brand-mark" aria-hidden="true">o<span>/</span></span><span className="brand-name">OMAR AIT BOUHMAD<span>DATA & AI ENGINEERING</span></span></a>
    <button ref={button} className="icon-button menu-toggle" aria-expanded={open} aria-controls="navigation-links" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <div id="navigation-links" className={`nav-links ${open ? "is-open" : ""}`}>
      {items.map(item => <a key={item.href} href={item.href} aria-current={active === item.href ? "location" : undefined} onClick={() => navigateTo(item.href)}>{item.label}</a>)}
      <a className="nav-contact" href="#contact" onClick={() => navigateTo("#contact")}>Let’s talk <span className="small-plus" aria-hidden="true">+</span></a>
    </div>
  </nav></header>;
}
