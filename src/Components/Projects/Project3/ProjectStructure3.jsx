import React from "react";
import { GoLinkExternal } from "react-icons/go";
import { RxGithubLogo } from "react-icons/rx";
import styles from "./ProjectStructure3.module.css";

const ProjectStructure3 = ({
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
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              <RxGithubLogo />
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              <GoLinkExternal />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectStructure3;
