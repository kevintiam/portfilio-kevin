import StatCounter from "../components/StatCounter";
import SectionHeader from "../components/SectionHeader";
import { countSkills} from "@/libs/function";
import { projects } from "../data/portfolio";


export default function About() {
  const stats = [
    { value: projects.length, label: "Projets réalisés" },
    { value: countSkills(), label: "Technologies" },
    { value: 2, label: "Langues" },
  ];

  return (
    <section id="about" className="section">
      <div className="section-inner">
        <SectionHeader number="01" label="Profil" title="Du tableau noir au code." />

        <div className="about-grid">
          <div className="about-photo" data-aos="fade-right">
            <span className="corner corner-tl" />
            <span className="corner corner-tr" />
            <span className="corner corner-bl" />
            <span className="corner corner-br" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/profit.jpg" alt="Kevin Tiam à La Cité" loading="lazy" />
            <span className="about-photo-caption">Ottawa · 2026</span>
          </div>

          <div className="about-text" data-aos="fade-left">
            <p className="about-lead">
              Développeur full-stack au parcours atypique : la physique m&apos; a appris à
              <em> modéliser un problème</em>, la programmation me permet de <em>le résoudre</em>.
            </p>
            <p>
              Après un <strong>baccalauréat en physique mécanique </strong> à l&apos;Université de Douala,
              je me suis réorienté vers le logiciel et j&apos;ai obtenu un{" "}
              <strong>DEC en Programmation informatique à La Cité</strong>, à Ottawa.
            </p>
            <p>
              Aujourd&apos;hui je construis avec <strong>React, Next.js, Node.js et PostgreSQL</strong>,
              comme <strong>SkillMap</strong>, un système d&apos;analyse de CV propulsé par l&apos;IA
              co-développé pour le <strong>Défi Informatique La Cité 2026</strong>. J&apos;enseigne aussi
              les tests logiciels à La Cité et je suis bénévole au département informatique du CESOC.
            </p>

            <div className="about-stats">
              {stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <StatCounter target={stat.value} />
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
