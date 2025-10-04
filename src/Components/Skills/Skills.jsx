import React from "react";
import styles from "./Skills.module.css";
const Skills = () => {
  return (
    <section className={styles.skills}>
      <h2 className={styles.title}>Technical Skills, i've been working with..</h2>
      <ul className={styles.list}>
        <li>
          <strong>Frontend Development:</strong> React.js, HTML5, CSS3,
          JavaScript (ES6+), Tailwind CSS, EJS
        </li>
        <li>
          <strong>Backend Development:</strong> Node.js, Express.js
        </li>
        <li>
          <strong>Database:</strong> MongoDB, Supabase, SQL(MySQL)
        </li>
        <li>
          <strong>Programming Languages:</strong> C++, Java, Python
        </li>
        <li>
          <strong>Data Structures:</strong> Implemented in C++ and Java
        </li>
        <li>
          <strong>Version Control & Tools:</strong> Git, GitHub
        </li>
      </ul>
    </section>
  );
};

export default Skills;
