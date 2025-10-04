import React from "react";
import style from "./About.module.css";
const About = () => {
  return (
    <div className={style.about} >
      <h5>
        <h1 style={{color:"rgb(17, 20, 20)"}}>About me</h1>
        I am a passionate web developer currently pursuing my degree in
        University of Delhi. I enjoy creating interactive and user-friendly web
        applications, exploring new technologies, and solving challenging
        problems through coding. With a strong interest in front-end development
        and design, I strive to build projects that are both functional and
        visually appealing. <br /><br />I am constantly learning and experimenting with new
        frameworks and tools to improve my skills and stay updated in this
        fast-evolving field. Beyond coding, I love watching web series, gaming,
        and connecting with like-minded individuals to share ideas and
        knowledge. <br /><br /> My journey in web development started with curiosity and a
        desire to create, and over time it has grown into a passion for building
        meaningful projects. Through this portfolio, I aim to showcase my
        creativity, dedication, and growth as a developer, and I am always
        excited to take on new challenges that help me learn and contribute more
        to the tech world.
      </h5>
      <div className={style.image}>
        <img src="/src/assets/image.png
        " alt="img" />
      </div>
    </div>
  );
};

export default About;
