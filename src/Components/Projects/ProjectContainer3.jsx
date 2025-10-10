import React, { useState } from "react";
import ProjectStructure3 from "./Project3/ProjectStructure3";
import ProjectImage7 from "../../assets/project7.png";
// import ProjectImage8 from "../../assets/project8.jpeg";
import ProjectImage9 from "../../assets/project9.png";
import ProjectImage10 from "../../assets/project10.png";
import styles from "./Project3/ProjectStructure3.module.css";
const ProjectContainer3 = () => {
  const projects = [
    {
      image: ProjectImage7,
      title: "7.Account Registration",
      description:
        "This project is a simple, console-based User Management System built using Object-Oriented Programming (OOPs) principles in C++. The system provides core functionalities required to manage user accounts within an application.",
      techStack: ["C++"],
      githubLink:
        "https://github.com/BittuRaj124365/accountRegistrationForm.git",
      // liveLink: "#",
    },
    // {
    //   image: ProjectImage8,
    //   title: "Fresh-Menu web Clone",
    //   description:
    //     "A static clone of the FreshMenu restaurant website built using HTML and CSS. It replicates the layout and design of the original site, focusing on clean structure, modern styling, and responsive design to enhance front-end development skills.",
    //   techStack: ["HTML5", "CSS3"],
    //   githubLink: "https://github.com/BittuRaj124365/freshMenuWebsiteClone.git",
    //   liveLink: "https://bitturaj124365.github.io/freshMenuWebsiteClone/",
    // },
    {
      image: ProjectImage9,
      title: "8.ToDo App",
      description:
        "A simple Python-based console application to manage daily tasks. It allows users to add, update, delete, and view tasks interactively, providing an easy way to stay organized through a command-line interface.",
      techStack: ["Python"],
      githubLink: "https://github.com/BittuRaj124365/ToDoList.git",
      // liveLink: "#",
    },
    {
      image: ProjectImage10,
      title: "9.Random Password",
      description:
        "A simple Python program that generates strong, random passwords using letters, numbers, and symbols. It helps create secure passwords instantly, ensuring better data protection and privacy.",
      techStack: ["Python"],
      githubLink:
        "https://github.com/BittuRaj124365/randomPasswordGenerator.git",
      // liveLink: "#",
    },
    // {
    //   image: ProjectImage11,
    //   title: "Project 5",
    //   description: "Short description of Project 5.",
    //   techStack: ["JavaScript", "API"],
    //   githubLink: "https://github.com/username/project5",
    //   liveLink: "https://project5.live",
    // },
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
