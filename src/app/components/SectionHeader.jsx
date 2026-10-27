// En-tête de section façon "cartouche" de plan technique :
//   02 ── STACK
//   Le grand titre
export default function SectionHeader({ number, label, title, subtitle }) {
  return (
    <div className="section-header" data-aos="fade-up">
      <p className="section-label">
        <span className="section-number">{number}</span>
        <span className="section-rule" aria-hidden="true" />
        <span>{label}</span>
      </p>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
