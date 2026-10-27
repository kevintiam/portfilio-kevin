import { projects,skillCategories } from "@/app/data/portfolio";
import Icon from "@/app/components/Icon";


// Sépare les projets vedettes des autres (boucle classique)
export const splitProjects = () => {
  const featured = [];
  const others = [];
  for (let index = 0; index < projects.length; index++) {
    if (projects[index].featured) {
      featured.push(projects[index]);
    } else {
      others.push(projects[index]);
    }
  }
  return { featured, others };
}

export const ProjectLinks = ({ project }) => {
  if (!project.demo && !project.code) return null;
  return (
    <div className="sheet-links">
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
          Voir le projet <Icon name="external" />
        </a>
      )}
      {project.code && (
        <a href={project.code} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
          <Icon name="github" /> Code source
        </a>
      )}
    </div>
  );
}

// Liste de toutes les technologies pour le bandeau défilant
export const getAllSkillNames = () => {
  const names = [];
  for (let i = 0; i < skillCategories.length; i++) {
    const skills = skillCategories[i].skills;
    for (let j = 0; j < skills.length; j++) {
      names.push(skills[j].name);
    }
  }
  return names;
};

// Graduations autour de la photo (comme un cadran de mesure)
export const buildTicks = () => {
  const ticks = [];
  for (let degree = 0; degree < 360; degree += 6) {
    const isLong = degree % 30 === 0;
    ticks.push(
      <line
        key={degree}
        x1="200"
        y1={isLong ? 8 : 14}
        x2="200"
        y2="22"
        transform={`rotate(${degree} 200 200)`}
        className={isLong ? "tick tick-long" : "tick"}
      />
    );
  }
  return ticks;
}

// Les chiffres sont calculés à partir des données : ils restent toujours justes
export const countSkills = () => {
  let total = 0;
  for (let i = 0; i < skillCategories.length; i++) {
    total = total + skillCategories[i].skills.length;
  }
  return total;
}