import SectionHeader from "../components/SectionHeader";
import Icon from "../components/Icon";
import { skillCategories } from "../data/portfolio";

// Présentation façon "nomenclature" : chaque techno a une référence (A-01, B-03...)
export default function Skills() {
  return (
    <section id="skill" className="section section-alt">
      <div className="section-inner">
        <SectionHeader
          number="02"
          label="Stack"
          title="Nomenclature technique."
          subtitle="Les outils avec lesquels je construis, du frontend à la base de données."
        />

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div
              className="skill-block"
              key={category.code}
              data-aos="fade-up"
              data-aos-delay={`${(categoryIndex + 1) * 100}`}
            >
              <div className="skill-block-head">
                <span className="skill-block-code">{category.code}</span>
                <h3>{category.title}</h3>
                <span className="skill-block-count">{category.skills.length} réf.</span>
              </div>

              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skill.name} className="skill-row" style={{ "--row": skillIndex }}>
                    <span className="skill-ref">
                      {category.code}-{String(skillIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="skill-icon">
                      <Icon name={skill.icon} />
                    </span>
                    <span className="skill-name">{skill.name}</span>
                    {skill.note && <span className="skill-note">{skill.note}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
