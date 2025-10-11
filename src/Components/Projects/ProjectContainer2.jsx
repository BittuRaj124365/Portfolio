import React from "react";
import ProjectStructure from "./Project2/ProjectStructure2";
import styles from "./Project2/ProjectStructure2.module.css";
import porject4 from "../../assets/project4.jpg";
import project5 from "../../assets/project5.png";
import project6 from "../../assets/Project7.png";
const ProjectContainer2 = () => {
  const projects = [
    {
      image: porject4,
      title: "4.Number Guessing",
      description:
        "A beginner-friendly Python project that uses the random module to generate a secret number. The player must guess the correct number with guidance provided after each attempt. Perfect for practicing loops, conditionals, and user input handling in Python.",
      techStack: ["Python"],
      githubLink: "https://github.com/BittuRaj124365/numberGuessingGame.git",
      //   liveLink: "https://bitturaj124365.github.io/farmingAssistanceWebsite/",
    },
    {
      image: project5,
      title: "5.Cafe Management",
      description:
        "A simple Python-based Cafe Management System that allows customers to place multiple orders from a menu, calculates the total bill automatically, and handles unavailable items gracefully.With very friendly user experience",
      techStack: ["Python"],
      githubLink: "https://github.com/BittuRaj124365/cafeManagementSystem.git",
      // liveLink: "#",
    },
    {
      image: project6,
      title: "6.Account Registration",
      description:
        "This project is a simple, console-based User Management System built using Object-Oriented Programming (OOPs) principles in C++. The system provides core functionalities required to manage user accounts within an application.",
      techStack: ["C++"],
      githubLink:
        "https://github.com/BittuRaj124365/accountRegistrationForm.git",
      liveLink: "#",
    },
  ];

  return (
    <div className={styles.container}>
      <h4 className={styles.centered}>Some More Projects</h4>
      {projects.map((proj, index) => (
        <ProjectStructure key={index} {...proj} />
      ))}
    </div>
  );
};

export default ProjectContainer2;
