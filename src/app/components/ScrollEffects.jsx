"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";

export default function ScrollEffects() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  // 1) Barre de progression + bouton "retour en haut"
  // 2) Variable CSS --progress (0 à 1) sur chaque [data-progress]
  //    -> utilisée pour remplir la ligne du parcours au scroll
  useEffect(() => {
    function onScroll() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      setProgress(percent);
      setShowTop(window.scrollY > 600);

      const trackedElements = document.querySelectorAll("[data-progress]");
      for (let index = 0; index < trackedElements.length; index++) {
        const element = trackedElements[index];
        const box = element.getBoundingClientRect();
        const start = window.innerHeight * 0.75; // commence quand le haut atteint 75 % de l'écran
        let value = (start - box.top) / box.height;
        if (value < 0) value = 0;
        if (value > 1) value = 1;
        element.style.setProperty("--progress", value.toFixed(3));
      }
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Apparition des éléments [data-aos] quand ils entrent à l'écran
  useEffect(() => {
    const elements = document.querySelectorAll("[data-aos]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (let index = 0; index < entries.length; index++) {
          const entry = entries[index];
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 }
    );
    for (let index = 0; index < elements.length; index++) {
      observer.observe(elements[index]);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div id="scroll-progress" aria-hidden="true" style={{ width: `${progress}%` }} />
      <button
        id="scroll-top"
        className={showTop ? "visible" : ""}
        aria-label="Retour en haut de la page"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <Icon name="up" />
      </button>
    </>
  );
}
