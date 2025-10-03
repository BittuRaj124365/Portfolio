import React from "react";
import style from "./Introduction.module.css";
import styles from './IntroImage.module.css'
const Introduction = () => {
  return (
    <div className="flex justify-around">
      <div className={style.intro}>
        <p>Hii, My name is </p>
        <h1 style={{color:"rgb(17, 20, 20)"}}>Bittu Raj</h1>
        <h3>
          a student pursuing Computer Science at <br /><b>University of Delhi.</b>
          {" "}With a strong interest in{" "}
          <b>Web Development <br /> and Coding</b>, I enjoy  building creative and
          functional digital projects.
          <br />
          My goal is to keep learning and grow into a skilled developer who can
          contribute to impactful solutions.
        </h3>
      </div>
    </div>
  );
};

export default Introduction;
