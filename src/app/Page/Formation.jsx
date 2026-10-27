import SectionHeader from "../components/SectionHeader";
import { journey } from "../data/portfolio";

// La ligne verticale se remplit au fur et à mesure du scroll grâce à la
// variable CSS --progress (calculée dans ScrollEffects via data-progress).
export default function Formation() {
  return (
    <section id="formation" className="section section-alt">
      <div className="section-inner">
        <SectionHeader
          number="04"
          label="Parcours"
          title="Trajectoire."
          subtitle="Formation, enseignement et engagement : ce qui m'a construit."
        />

        <div className="journey" data-progress>
          <span className="journey-line" aria-hidden="true">
            <span className="journey-line-fill" />
          </span>

          <ol className="journey-list">
          {journey.map((step, index) => (
            <li
              className="journey-item"
              key={step.title}
              data-aos="fade-up"
              data-aos-delay={`${(index % 2) * 100 + 100}`}
            >
              <span className="journey-dot" aria-hidden="true" />
              <div className="journey-date">
                <span className="journey-type">{step.type}</span>
                <span>{step.date}</span>
              </div>

              <div className="journey-card">
                {step.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={step.image} alt={step.place} className="journey-image" />
                )}
                <div>
                  <h3>{step.title}</h3>
                  <p className="journey-place">{step.place}</p>
                  <p className="journey-desc">{step.description}</p>
                  {step.tags && (
                    <ul className="sheet-tags">
                      {step.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </li>
          ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
