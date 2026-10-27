"use client";

import { useEffect, useState } from "react";
import { navLinks } from "../data/portfolio";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  // En-tête compact après 40px de scroll
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Thème mémorisé dans le navigateur : on applique la classe sur <body>.
  // Le CSS se charge du reste (pas besoin d'état React pour ça).
  useEffect(() => {
    try {
      if (localStorage.getItem("theme") === "paper") {
        document.body.classList.add("theme-paper");
      }
    } catch (error) {
      // stockage indisponible (navigation privée) : on garde le thème "Plan"
    }
  }, []);

  function toggleTheme() {
    const isPaper = document.body.classList.toggle("theme-paper");
    try {
      localStorage.setItem("theme", isPaper ? "paper" : "plan");
    } catch (error) {
      // on ignore
    }
  }

  // Lien actif selon la section visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (let index = 0; index < entries.length; index++) {
          if (entries[index].isIntersecting) {
            setActiveLink(`#${entries[index].target.id}`);
          }
        }
      },
      { rootMargin: "-45% 0px -55% 0px" }
    );
    for (let index = 0; index < navLinks.length; index++) {
      const section = document.querySelector(navLinks[index].href);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  // Bloque le scroll de la page quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header id="header" className={scrolled ? "scrolled" : ""}>
      <nav className="nav">
        <a href="#home" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <span className="nav-logo-mark">KT</span>
          <span className="nav-logo-text">Kevin Tiam</span>
        </a>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link ${activeLink === link.href ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                <span className="nav-link-number">{link.number}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            className="theme-switch"
            onClick={toggleTheme}
            aria-label="Changer de thème (Plan ou Calque)"
          >
            <span className="theme-plan">Plan</span>
            <span className="theme-paper-label">Calque</span>
          </button>
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
