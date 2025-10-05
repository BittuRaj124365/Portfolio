import React from "react";
import ProjectStru from "./Project2/ProjectStru";
import styles from "./Project2/ProjStru.module.css";
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.png";

const ProjectContainer2 = () => {
  const projects = [
    {
      image: project1,
      title: "Farming Assistance Web",
      description:
        "A farming assistance platform built with HTML, CSS, and JavaScript that offers chatbot integration to answer agricultural queries and provide sustainable farming tips.",
      techStack: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/BittuRaj124365/farmingAssistanceWebsite.git",
      liveLink: "https://bitturaj124365.github.io/farmingAssistanceWebsite/",
    },
    {
      image: project2,
      title: "Postify Blog Platform",
      description:
        "A dynamic blog website built using RESTful APIs where users can create, edit, and delete posts seamlessly through a Node.js and EJS setup.",
      techStack: ["Node.js", "Express", "EJS"],
      githubLink: "https://github.com/BittuRaj124365/postify.git",
      liveLink: "#",
    },
    {
      image: project3,
      title: "Wanderlust Travel Listing",
      description:
        "A travel listing web app that allows users to create and manage listings with integrated CRUD functionality and responsive design.",
      techStack: ["Node.js", "Express", "MongoDB", "EJS"],
      githubLink: "https://github.com/BittuRaj124365/wanderLust-Travel-Listing-App.git",
      liveLink: "#",
    },
  ];

  return (
    <div className={styles.container}>
      {projects.map((proj, index) => (
        <ProjectStru key={index} {...proj} />
      ))}
    </div>
  );
};

export default ProjectContainer2;
