import Icon from "./Icon";
import { socials } from "../data/portfolio";

// variant = "hero" | "contact" | "footer" -> change seulement le style CSS
export default function SocialLinks({ variant = "hero" }) {
  return (
    <div className={`social-icons social-${variant}`}>
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
        >
          <Icon name={social.icon} />
        </a>
      ))}
    </div>
  );
}
