import React, { useState } from "react";
import ProjectStructure3 from "./Project3/ProjectStructure3";
import ProjectImage7 from "../../assets/project1.jpg";
import ProjectImage8 from "../../assets/project2.jpg";
import ProjectImage9 from "../../assets/project2.jpg";
import ProjectImage10 from '../../assets/project3.png'
import ProjectImage11 from '../../assets/project3.png'
import ProjectImage12 from "../../assets/project1.jpg";
import styles from "./Project3/ProjectStructure3.module.css";
const ProjectContainer3 = () => {
  const projects = [
    {
      image: ProjectImage7,
      title: "Project 1",
      description: "Short description of Project 1.",
      techStack: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/username/project1",
      liveLink: "https://project1.live",
    },
    {
      image: ProjectImage8,
      title: "Project 2",
      description: "Short description of Project 2.",
      techStack: ["React", "Tailwind CSS"],
      githubLink: "https://github.com/username/project2",
      liveLink: "https://project2.live",
    },
    {
      image: ProjectImage9,
      title: "Project 3",
      description: "Short description of Project 3.",
      techStack: ["Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/username/project3",
      liveLink: "https://project3.live",
    },
    {
      image: ProjectImage10,
      title: "Project 4",
      description: "Short description of Project 4.",
      techStack: ["React", "Redux"],
      githubLink: "https://github.com/username/project4",
      liveLink: "https://project4.live",
    },
    {
      image: ProjectImage11,
      title: "Project 5",
      description: "Short description of Project 5.",
      techStack: ["JavaScript", "API"],
      githubLink: "https://github.com/username/project5",
      liveLink: "https://project5.live",
    },
    {
      image: ProjectImage12,
      title: "Project 6",
      description: "Short description of Project 6.",
      techStack: ["React", "Node.js"],
      githubLink: "https://github.com/username/project6",
      liveLink: "https://project6.live",
    },
  ];

  const initialVisible = 3; // Show 3 projects initially
  const [visibleCount, setVisibleCount] = useState(initialVisible);

  const handleToggle = () => {
    if (visibleCount === projects.length) {
      setVisibleCount(initialVisible); // Show Less (only first 3)
    } else {
      setVisibleCount(projects.length); // Show More (all)
    }
  };

  return (
    <div>
      {/* Container uses the same class as previous project section */}
      <div className={styles.container}>
        {projects.slice(0, visibleCount).map((proj, index) => (
          <ProjectStructure3
            key={index}
            image={proj.image}
            title={proj.title}
            description={proj.description}
            techStack={proj.techStack}
            githubLink={proj.githubLink}
            liveLink={proj.liveLink}
          />
        ))}
      </div>

      {/* Show More / Show Less Button */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          className={styles.button} // reusing existing button style
          onClick={handleToggle}
        >
          {visibleCount === projects.length ? "Show Less" : "Show More Projects"}
        </button>
      </div>
    </div>
  );
};

export default ProjectContainer3;