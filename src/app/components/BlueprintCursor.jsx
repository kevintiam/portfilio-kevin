"use client";

import { useEffect, useRef } from "react";

// Réticule de visée qui suit la souris, avec les coordonnées X / Y,
// comme sur un logiciel de dessin technique. Caché sur mobile (CSS).
export default function BlueprintCursor() {
  const cursorRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const label = labelRef.current;
    if (!cursor || !label) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let frameId;

    function onMouseMove(event) {
      targetX = event.clientX;
      targetY = event.clientY;
      cursor.classList.add("is-visible");

      // Agrandit le réticule au survol d'un lien ou d'un bouton
      const isOnLink = event.target.closest("a, button, input, textarea") !== null;
      cursor.classList.toggle("is-hovering", isOnLink);
    }

    function onMouseLeave() {
      cursor.classList.remove("is-visible");
    }

    // Petit effet de "retard" fluide : on se rapproche de la souris de 20 % à chaque image
    function animate() {
      currentX = currentX + (targetX - currentX) * 0.2;
      currentY = currentY + (targetY - currentY) * 0.2;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      label.textContent = `X ${String(Math.round(targetX)).padStart(4, "0")}  Y ${String(Math.round(targetY)).padStart(4, "0")}`;
      frameId = requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    frameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div ref={cursorRef} className="bp-cursor" aria-hidden="true">
      <span className="bp-cursor-ring" />
      <span className="bp-cursor-label" ref={labelRef} />
    </div>
  );
}
