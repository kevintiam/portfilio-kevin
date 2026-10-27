import SocialLinks from "../components/SocialLinks";
import { navLinks } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Cartouche de plan (le petit tableau en bas à droite des plans techniques) */}
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-name">Kevin Tiam</span>
          <p>Développeur full-stack · Ottawa, Canada</p>
        </div>

        <nav className="footer-links" aria-label="Navigation du pied de page">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              <span>{link.number}</span> {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-stamp">
          <dl>
            <div><dt>Projet</dt><dd>Portfolio</dd></div>
            <div><dt>Auteur</dt><dd>K. R. Sop Tiam</dd></div>
            <div><dt>Échelle</dt><dd>1:1</dd></div>
            <div><dt>Révision</dt><dd>{year}</dd></div>
          </dl>
          <SocialLinks variant="footer" />
        </div>
      </div>

      <p className="footer-bottom">© {year} Kevin Tiam — Conçu et développé avec Next.js</p>
    </footer>
  );
}
