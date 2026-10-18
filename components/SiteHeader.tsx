"use client";

import { useEffect, useRef, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

const nav = [
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "security", label: "Security" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function SiteHeader() {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  // Highlight the section currently in the middle of the viewport.
  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));

    const top = document.getElementById("top");
    const topObserver = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting || entry.intersectionRatio < 0.98);
        if (entry.intersectionRatio > 0.5) setActive(null);
      },
      { threshold: [0, 0.5, 0.98] }
    );
    if (top) topObserver.observe(top);

    return () => {
      observer.disconnect();
      topObserver.disconnect();
    };
  }, []);

  // Close the mobile menu on Escape or when the screen gets wide.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const wide = window.matchMedia("(min-width: 721px)");
    const onWide = () => wide.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    wide.addEventListener("change", onWide);
    return () => {
      window.removeEventListener("keydown", onKey);
      wide.removeEventListener("change", onWide);
    };
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <div className="wrap site-header__inner">
        <a href="#top" className="brand" aria-label={`${profile.name}, back to top`} onClick={() => setOpen(false)}>
          <span className="brand__mark" aria-hidden="true">
            SH
          </span>
          <span className="brand__name">{profile.name}</span>
        </a>

        <nav aria-label="Sections" className="site-nav">
          <ul>
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} aria-current={active === n.id ? "true" : undefined}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ThemeToggle />

        <button
          ref={menuButton}
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="menu-button__icon" aria-hidden="true" />
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" inert={!open}>
        <div className="mobile-menu__inner">
        <nav aria-label="Sections menu">
          <ul>
            {nav.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  aria-current={active === n.id ? "true" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-menu__foot">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.cv} download>
            Download CV
          </a>
        </div>
        </div>
      </div>
    </header>
  );
}
