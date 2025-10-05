import { GoLinkExternal } from "react-icons/go";
import { RxGithubLogo } from "react-icons/rx";
import styles from "./ProjectStructure2.module.css";
const ProjectStructure2 = ({
  image,
  title,
  description,
  techStack,
  githubLink,
  liveLink,
}) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />

      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <ul className={styles.techList}>
          {techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>

        <div className={styles.links}>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            <RxGithubLogo /> GitHub
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            <GoLinkExternal /> Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectStructure2;
