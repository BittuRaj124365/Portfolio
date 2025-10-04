import React from "react";
import { GoLinkExternal } from "react-icons/go";
import { RxGithubLogo } from "react-icons/rx";
import styles from "./ProjectStructure.module.css";
const ProjectStructure = ({
  image,
  title,
  description,
  techStack,
  githubLink,
  liveLink,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <ul className={styles.techList}>
          {techStack.map((tech, index) => (
            <li key={index} className={styles.techItem}>
              {tech}
            </li>
          ))}
        </ul>

        <div className={styles.links}>
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <RxGithubLogo className={styles.icon} />
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <GoLinkExternal className={styles.icon} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectStructure;
