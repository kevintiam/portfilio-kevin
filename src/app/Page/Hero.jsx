import SocialLinks from "../components/SocialLinks";
import TypingText from "../components/TypingText";
import SplitText from "../components/SplitText";
import Icon from "../components/Icon";
import { getAllSkillNames, buildTicks} from "@/libs/function";


export default function Hero() {
  const skillNames = getAllSkillNames();

  return (
    <section id="home" className="hero">
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-text">
          <p className="hero-meta reveal" style={{ "--delay": "0.1s" }}>
            <span>FIG. 00 — PROFIL</span>
            <span className="hero-meta-coords">45.42° N · 75.70° O — OTTAWA</span>
          </p>

          <span className="hero-badge reveal" style={{ "--delay": "0.2s" }}>
            <span className="hero-badge-dot" />
            Disponible immédiatement · Ouvert à la relocalisation au Canada
          </span>

          <h1 className="hero-name">
            <span className="hero-name-line">
              <SplitText text="Kevin" startDelay={300} />
            </span>
            <span className="hero-name-line hero-name-outline">
              <SplitText text="Tiam" startDelay={550} />
            </span>
          </h1>

          {/* Ligne de cote qui se dessine sous le nom */}
          <svg className="hero-dimension" viewBox="0 0 400 24" aria-hidden="true">
            <path d="M2 4 V20 M398 4 V20 M2 12 H398" pathLength="1" />
          </svg>

          <p className="hero-role reveal" style={{ "--delay": "1s" }}>
            <TypingText />
          </p>

          <p className="hero-desc reveal" style={{ "--delay": "1.15s" }}>
            Diplômé en programmation informatique à La Cité, je conçois des applications web
            complètes avec <strong>React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong> et{" "}
            <strong>PostgreSQL</strong>, et j&apos;y intègre l&apos;IA quand elle apporte une vraie valeur.
          </p>

          <div className="hero-cta reveal" style={{ "--delay": "1.3s" }}>
            <a href="#projets" className="btn btn-primary">
              Voir mes projets <Icon name="arrow" />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Me contacter
            </a>
          </div>

          <div className="reveal" style={{ "--delay": "1.45s" }}>
            <SocialLinks variant="hero" />
          </div>
        </div>

        {/* Photo dans un "viseur" technique */}
        <div className="hero-visual reveal" style={{ "--delay": "0.5s" }}>
          <div className="viewfinder">
            <svg className="viewfinder-dial" viewBox="0 0 400 400" aria-hidden="true">
              <circle cx="200" cy="200" r="190" className="dial-circle" />
              {buildTicks()}
            </svg>
            <svg className="viewfinder-cross" viewBox="0 0 400 400" aria-hidden="true">
              <path d="M200 0 V60 M200 340 V400 M0 200 H60 M340 200 H400" />
            </svg>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/Profil.jpg" alt="Kevin Tiam" className="viewfinder-photo" />
            <span className="viewfinder-label viewfinder-label-top">Ø 360 — K.TIAM</span>
            <span className="viewfinder-label viewfinder-label-bottom">FULL-STACK / REV. 2026</span>
          </div>
        </div>
      </div>

      {/* Bandeau défilant des technologies (dupliqué pour une boucle sans coupure) */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div className="marquee-group" key={copy}>
              {skillNames.map((name) => (
                <span key={`${copy}-${name}`} className="marquee-item">
                  {name} <span className="marquee-sep">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
