import React from "react";
import ProjectStructure from "./Project2/ProjectStructure2";
import styles from "./Project2/ProjectStructure2.module.css";
// import project1 from "../../assets/project1.jpg";
// import project2 from "../../assets/project2.jpg";
// import project3 from "../../assets/project3.png";
import porject4 from "../../assets/project4.jpg";
import project5 from "../../assets/project5.png";
import project6 from "../../assets/amazonClone.jpeg";
const ProjectContainer2 = () => {
  const projects = [
    {
      image: porject4,
      title: "4.Number-Guessing",
      description:
        "A beginner-friendly Python project that uses the random module to generate a secret number. The player must guess the correct number with guidance provided after each attempt. Perfect for practicing loops, conditionals, and user input handling in Python.",
      techStack: ["Python"],
      githubLink: "https://github.com/BittuRaj124365/numberGuessingGame.git",
      //   liveLink: "https://bitturaj124365.github.io/farmingAssistanceWebsite/",
    },
    {
      image: project5,
      title: "5.Cafe-Management",
      description:
        "A simple Python-based Cafe Management System that allows customers to place multiple orders from a menu, calculates the total bill automatically, and handles unavailable items gracefully.With very friendly user experience",
      techStack: ["Python"],
      githubLink: "https://github.com/BittuRaj124365/cafeManagementSystem.git",
      // liveLink: "#",
    },
    {
      image: project6,
      title: "6.Amazon Clone",
      description:
        "A visual replica of the Amazon website, copying the layout, design, and product arrangement for practice and portfolio purposes.This static clone focuses on recreating the UI to demonstrate front-end skills and attention to detail.",
      techStack: ["HTML5", "CSS3"],
      githubLink: "https://github.com/BittuRaj124365/amazonClone.git",
      liveLink: "https://bitturaj124365.github.io/amazonClone/",
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
