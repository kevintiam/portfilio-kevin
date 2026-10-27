import SectionHeader from "../components/SectionHeader";
import ProjectDiagram from "../components/ProjectDiagram";
import Icon from "../components/Icon";
import { splitProjects,ProjectLinks } from "@/libs/function";


export default function Projects() {
  const { featured, others } = splitProjects();

  return (
    <section id="projets" className="section">
      <div className="section-inner">
        <SectionHeader
          number="03"
          label="Projets"
          title="Planches de réalisation."
          subtitle="Chaque projet est un plan : un problème, une architecture, une solution livrée."
        />

        {/* Planches empilées : chacune reste collée en haut pendant que la suivante glisse dessus */}
        <div className="sheets">
          {featured.map((project, index) => {
            const figureNumber = `P-${String(index + 1).padStart(2, "0")}`;
            return (
              <article
                className="sheet"
                key={project.title}
                style={{ "--index": index }}
                data-aos="fade-up"
              >
                <div className="sheet-head">
                  <span className="sheet-number">{figureNumber}</span>
                  <span className="sheet-category">{project.category}</span>
                  <span className="sheet-context">{project.context}</span>
                </div>

                <div className="sheet-body">
                  <div className="sheet-info">
                    <h3 className="sheet-title">{project.title}</h3>
                    <p className="sheet-desc">{project.description}</p>
                    <ul className="sheet-tags">
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                    <ProjectLinks project={project} />
                  </div>

                  <div className="sheet-visual">
                    <ProjectDiagram steps={project.diagram} figureNumber={figureNumber} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Autres réalisations : liste interactive */}
        <div className="others" data-aos="fade-up">
          <h3 className="others-title">
            <span>Autres réalisations</span>
            <span className="others-count">{String(others.length).padStart(2, "0")}</span>
          </h3>

          <ul className="others-list">
            {others.map((project, index) => {
              const link = project.demo || project.code;
              const content = (
                <>
                  <span className="other-index">{String(featured.length + index + 1).padStart(2, "0")}</span>
                  <span className="other-main">
                    <span className="other-title">{project.title}</span>
                    <span className="other-desc">{project.description}</span>
                  </span>
                  <span className="other-meta">
                    <span className="other-category">{project.category}</span>
                    <span className="other-tags">{project.tags.join(" · ")}</span>
                  </span>
                  <span className="other-arrow">{link ? <Icon name="external" /> : <Icon name="arrow" />}</span>
                </>
              );

              return (
                <li key={project.title} className="other-row">
                  {link ? (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="other-inner">
                      {content}
                    </a>
                  ) : (
                    <div className="other-inner">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
