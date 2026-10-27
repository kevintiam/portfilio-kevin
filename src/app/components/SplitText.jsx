// Découpe un texte en lettres pour les faire apparaître une par une.
// Chaque lettre reçoit un délai (--i) utilisé par le CSS (.split-letter).
export default function SplitText({ text, startDelay = 0 }) {
  const letters = [];
  for (let index = 0; index < text.length; index++) {
    const character = text[index];
    letters.push(
      <span
        key={index}
        className="split-letter"
        style={{ "--i": index, "--start": `${startDelay}ms` }}
        aria-hidden="true"
      >
        {character === " " ? " " : character}
      </span>
    );
  }

  return (
    <span className="split-text" aria-label={text}>
      {letters}
    </span>
  );
}
