// Schéma d'architecture dessiné en SVG pour chaque projet vedette.
// Les traits ont la classe "draw" : ils se dessinent quand la carte
// devient visible (voir .aos-animate .draw dans globals.css).
export default function ProjectDiagram({ steps, figureNumber }) {
  const boxWidth = 132;
  const boxHeight = 64;
  const gap = 38;
  const startX = 24;
  const boxY = 118;

  // Calcule la position X de chaque boîte (boucle classique)
  const boxes = [];
  for (let index = 0; index < steps.length; index++) {
    boxes.push({
      label: steps[index],
      x: startX + index * (boxWidth + gap),
    });
  }

  const totalWidth = startX * 2 + steps.length * boxWidth + (steps.length - 1) * gap;
  const lastBoxRight = boxes[boxes.length - 1].x + boxWidth;

  return (
    <svg
      className="project-diagram"
      viewBox={`0 0 ${totalWidth} 300`}
      role="img"
      aria-label={`Schéma : ${steps.join(" vers ")}`}
    >
      {/* Ligne de cote en haut (comme sur un plan) */}
      <g className="diagram-dim">
        <path className="draw" pathLength="1" d={`M${startX} 62 H${lastBoxRight}`} />
        <path className="draw" pathLength="1" d={`M${startX} 52 V72 M${lastBoxRight} 52 V72`} />
        <text x={totalWidth / 2} y="48" textAnchor="middle">
          FIG. {figureNumber} — ARCHITECTURE
        </text>
      </g>

      {/* Boîtes + flèches */}
      {boxes.map((box, index) => (
        <g key={box.label} className="diagram-node" style={{ "--d": `${index * 0.25}s` }}>
          <rect
            className="draw"
            pathLength="1"
            x={box.x}
            y={boxY}
            width={boxWidth}
            height={boxHeight}
            rx="10"
          />
          <text className="node-label" x={box.x + boxWidth / 2} y={boxY + boxHeight / 2 + 5} textAnchor="middle">
            {box.label}
          </text>
          <text className="node-index" x={box.x + 10} y={boxY - 10}>
            {String(index + 1).padStart(2, "0")}
          </text>

          {/* Flèche vers la boîte suivante */}
          {index < boxes.length - 1 && (
            <path
              className="draw diagram-arrow"
              pathLength="1"
              d={`M${box.x + boxWidth + 6} ${boxY + boxHeight / 2} H${box.x + boxWidth + gap - 8} m-7 -6 l7 6 l-7 6`}
            />
          )}
        </g>
      ))}

      {/* Petit cercle de repère + ligne de rappel en bas */}
      <g className="diagram-dim">
        <path className="draw" pathLength="1" d={`M${startX + boxWidth / 2} ${boxY + boxHeight + 8} V250 H${totalWidth - 60}`} />
        <circle className="draw" pathLength="1" cx={totalWidth - 46} cy="250" r="14" />
        <text x={totalWidth - 46} y="254" textAnchor="middle">{figureNumber}</text>
      </g>

      {/* Point lumineux qui parcourt la ligne de rappel du bas */}
      <circle className="diagram-pulse" r="3.5" cx={startX + boxWidth / 2} cy="250">
        <animate
          attributeName="cx"
          values={`${startX + boxWidth / 2};${totalWidth - 60}`}
          dur="2.4s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}
