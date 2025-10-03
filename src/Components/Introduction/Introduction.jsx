import React from "react";
import style from "./Introduction.module.css";
import styles from './IntroImage.module.css'
const Introduction = () => {
  return (
    <div className="flex flex-row justify-around">
      <div className={style.intro}>
        <p>Hii, My name is </p>
        <h1>Bittu Raj</h1>
        <h3>
          a student pursuing Computer Science at <b>University of Delhi.</b>
          <div className="br"></div> With a strong interest in{" "}
          <b>Web Development and Coding</b>,<br /> I enjoy building creative and
          functional digital projects.
          <br />
          My goal is to keep learning and grow into a skilled developer who can
          contribute to impactful solutions.
        </h3>
      </div>
      <div className={styles.introImage}>
        {/* <img src="/src/assets/image.png" alt="img" /> */}
      </div>
    </div>
  );
};

export default Introduction;
