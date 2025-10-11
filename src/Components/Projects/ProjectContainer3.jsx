import React, { useState } from "react";
import ProjectStructure3 from "./Project3/ProjectStructure3";
import ProjectImage7 from "../../assets/amazonClone.jpeg";
import ProjectImage8 from "../../assets/project8.jpeg";
import ProjectImage9 from "../../assets/project9.png";
import ProjectImage10 from "../../assets/project10.png";
import ProjectImage11 from "../../assets/project11.jpeg";
import styles from "./Project3/ProjectStructure3.module.css";
const ProjectContainer3 = () => {
  const projects = [
    {
      image: ProjectImage7,
      title: "7.Amazon Clone",
      description:
        "A visual replica of the Amazon website, copying the layout, design, and product arrangement for practice and portfolio purposes.This static clone focuses on recreating the UI to demonstrate front-end skills and attention to detail with best and eco user experience.",
      techStack: ["HTML5", "CSS3"],
      githubLink: "https://github.com/BittuRaj124365/amazonClone.git",
      liveLink: "https://bitturaj124365.github.io/amazonClone/",
    },
    {
      image: ProjectImage8,
      title: "8.Fresh-Menu web Clone",
      description:
        "A static clone of the FreshMenu restaurant website built using HTML and CSS. It replicates the layout and design of the original site, focusing on clean structure, modern styling, and responsive design to enhance front-end development skills.",
      techStack: ["HTML5", "CSS3"],
      githubLink: "https://github.com/BittuRaj124365/freshMenuWebsiteClone.git",
      liveLink: "https://bitturaj124365.github.io/freshMenuWebsiteClone/",
    },
    {
      image: ProjectImage9,
      title: "9.ToDo App",
      description:
        "A simple Python-based console application to manage daily tasks. It allows users to add, update, delete, and view tasks interactively, providing an easy way to stay organized through a command-line interface.",
      techStack: ["Python"],
      githubLink: "https://github.com/BittuRaj124365/ToDoList.git",
      // liveLink: "#",
    },
    {
      image: ProjectImage10,
      title: "10.Random Password",
      description:
        "A simple Python program that generates strong, random passwords using letters, numbers, and symbols. It helps create secure passwords instantly, ensuring better data protection and privacy.",
      techStack: ["Python"],
      githubLink:
        "https://github.com/BittuRaj124365/randomPasswordGenerator.git",
      // liveLink: "#",
    },
    {
      image: ProjectImage11,
      title: "11.Protfolio",
      description: "A modern and responsive personal portfolio that reflects my journey and passion as a web developer. It showcases my projects, technical skills, and creative approach towards building efficient and user-friendly web applications, all within a clean and minimal interface that ensures a smooth experience across every devices and browsers.",
      techStack: ["React","Tailwind","JS(ES6+)","CSS3"],
      githubLink: "https://github.com/BittuRaj124365 Portfolio.git",
      liveLink: "#",
    },
    // {
    //   image: ProjectImage12,
    //   title: "Project 6",
    //   description: "Short description of Project 6.",
    //   techStack: ["React", "Node.js"],
    //   githubLink: "https://github.com/username/project6",
    //   liveLink: "https://project6.live",
    // },
  ];

  const initialVisible = 0; // Show 3 projects initially
  const [visibleCount, setVisibleCount] = useState(initialVisible);

  const handleToggle = () => {
    if (visibleCount === projects.length) {
      setVisibleCount(initialVisible);
    } else {
      setVisibleCount(projects.length);
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
      <div
        style={{ textAlign: "center", marginLeft: "50px", marginTop: "20px" }}
      >
        <button
          className={styles.button} // reusing existing button style
          onClick={handleToggle}
        >
          {visibleCount === projects.length
            ? "Hide Some Projects"
            : "Show More Projects"}
        </button>
      </div>
    </div>
  );
};

export default ProjectContainer3;
