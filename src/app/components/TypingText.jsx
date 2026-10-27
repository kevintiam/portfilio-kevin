"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "Développeur Full-Stack",
  "React · Next.js · Node.js",
  "Applications web & IA",
  "Bilingue français / anglais",
];

export default function TypingText() {
  const [text, setText] = useState("");

  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer;

    function tick() {
      const currentPhrase = PHRASES[phraseIndex];
      if (isDeleting) {
        charIndex = charIndex - 1;
      } else {
        charIndex = charIndex + 1;
      }
      setText(currentPhrase.slice(0, charIndex));

      let delay = isDeleting ? 40 : 85;

      if (!isDeleting && charIndex === currentPhrase.length) {
        delay = 1800; // pause quand la phrase est complète
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % PHRASES.length;
        delay = 350;
      }

      timer = setTimeout(tick, delay);
    }

    timer = setTimeout(tick, 1400); // démarre après l'animation du nom
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <span>{text}</span>
      <span className="typing-cursor" aria-hidden="true">▍</span>
    </>
  );
}
