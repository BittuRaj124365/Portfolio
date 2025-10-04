import React from "react";
import ProjectStructure from "./Project/ProjectStructure";
import projectImage1 from "../../assets/project1.jpg";
import projectImage2 from "../../assets/project2.jpg";
import projectImage3 from '../../assets/project3.png'
const ProjectContainer = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px" }}>My Projects</h1>
      <ProjectStructure
        image={projectImage1}
        title={"wanderlust- A Travel Listing Website"}
        description={`All routing operations are performed on localhost during development. Each CRUD functionality — from creating new listings to editing or deleting them — is handled through clean and well-defined routes. The local server ensures smooth execution of backend logic while rendering dynamic views using EJS templates. ${(
          <>
            <br />
          </>
        )}, WanderLust was built with a focus on user experience — displaying travel listings in a polished card format, allowing real-time editing and deletion.`}
        techStack={["Node.js", "Express.js", "Mongodb", "EJS"]}
        githubLink={
          "https://github.com/BittuRaj124365/wanderLust-Travel-Listing-App.git"
        }
        liveLink={"#"}
      />
      <ProjectStructure
        image={projectImage2}
        title={"postify"}
        description={
          "All routing operations are performed on localhost during development. Each CRUD functionality — from creating new blog posts to editing or deleting them — is handled through clean and well-defined routes. The local server ensures smooth execution of backend logic while rendering dynamic views using EJS templates. It's a dynamic platform where users can Create, Read, Update, and Delete blog posts — all powered through RESTful API architecture and structured CRUD operations."
        }
        techStack={["Node.js", "Express.js", "EJS", "UUID", "Middlewares"]}
        githubLink={"https://github.com/BittuRaj124365/postify.git"}
        liveLink={"#"}
      />
      <ProjectStructure
        image={projectImage3}
        title={"Farming Assistance website"}y
        
        description={
          "A web-based Farming Assistance platform built with basic tech stacks that provides farmers with essential crop information, weather updates, and sustainable farming tips. The project includes an integrated chatbot that allows users to ask farming-related queries in real time, making the platform interactive and more helpful. Designed with a simple, responsive, and user-friendly interface to ensure accessibility for all users."
        }
        techStack={["HTML5", "CSS3", "JavaScript(ES6+)"]}
        githubLink={"https://github.com/BittuRaj124365/farmingAssistanceWebsite.git"}
        liveLink={"https://bitturaj124365.github.io/farmingAssistanceWebsite/"}
      />
    </div>
  );
};

export default ProjectContainer;
