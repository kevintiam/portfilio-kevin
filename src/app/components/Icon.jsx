// Traduit un nom simple ("react", "github"...) en icône react-icons.
// Avantage : plus besoin du CDN Font Awesome, les icônes sont incluses dans le build.
import {
  SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiHtml5, SiTailwindcss,
  SiNodedotjs, SiFastapi, SiDotnet, SiPython, SiSpringboot,
  SiPostgresql, SiPrisma, SiMongodb, SiMysql,
  SiGit, SiDocker, SiLinux, SiWordpress, SiKotlin,
} from "react-icons/si";
import {
  FaGithub, FaLinkedinIn, FaFacebookF, FaInstagram,
  FaArrowRight, FaArrowUpRightFromSquare, FaEnvelope, FaPhone,
  FaLocationDot, FaCopy, FaCheck, FaArrowUp, FaSun, FaMoon,
} from "react-icons/fa6";

const ICONS = {
  // Technologies
  react: SiReact,
  nextjs: SiNextdotjs,
  javascript: SiJavascript,
  typescript: SiTypescript,
  html: SiHtml5,
  tailwind: SiTailwindcss,
  node: SiNodedotjs,
  fastapi: SiFastapi,
  dotnet: SiDotnet,
  python: SiPython,
  spring: SiSpringboot,
  postgres: SiPostgresql,
  prisma: SiPrisma,
  mongodb: SiMongodb,
  mysql: SiMysql,
  git: SiGit,
  docker: SiDocker,
  linux: SiLinux,
  wordpress: SiWordpress,
  kotlin: SiKotlin,
  // Réseaux sociaux
  github: FaGithub,
  linkedin: FaLinkedinIn,
  facebook: FaFacebookF,
  instagram: FaInstagram,
  // Interface
  arrow: FaArrowRight,
  external: FaArrowUpRightFromSquare,
  mail: FaEnvelope,
  phone: FaPhone,
  location: FaLocationDot,
  copy: FaCopy,
  check: FaCheck,
  up: FaArrowUp,
  sun: FaSun,
  moon: FaMoon,
};

export default function Icon({ name, className = "" }) {
  const IconComponent = ICONS[name];
  if (!IconComponent) {
    return null;
  }
  return <IconComponent className={className} aria-hidden="true" />;
}
