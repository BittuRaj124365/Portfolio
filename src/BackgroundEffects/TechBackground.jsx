import React from "react";
import styles from "./TechBackground.module.css";
import { FaGithub, FaReact, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";

const icons = [
  <FaGithub />,
  <FaReact />,
  <FaJs />,
  <FaHtml5 />,
  <FaCss3Alt />
];

const TechBackground = () => {
  return (
    <div className={styles.background}>
      {/* Circles */}
      <div className={`${styles.circle} ${styles.circle1}`}></div>
      <div className={`${styles.circle} ${styles.circle2}`}></div>
      <div className={`${styles.circle} ${styles.circle3}`}></div>
      <div className={`${styles.circle} ${styles.circle4}`}></div>

      {/* Lines */}
      <div className={`${styles.line} ${styles.line1}`}></div>
      <div className={`${styles.line} ${styles.line2}`}></div>
      <div className={`${styles.line} ${styles.line3}`}></div>

      {/* Tech Icons */}
      {icons.map((icon, index) => (
        <div
          key={index}
          className={`${styles.icon} ${styles['icon'+(index+1)]}`}
        >
          {icon}
        </div>
      ))}
    </div>
  );
};

export default TechBackground;
