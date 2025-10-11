import React from "react";
import styles from "./Experience.module.css";
// import hackathonImage from "../src/assets/hackathonImg.jpeg";
const Experience = () => {
  return (
    <>
      <h3 id="experience"
      className={styles.heading}>Some Major Experiences</h3>
      <div className={styles.Experience}>
        <div className={styles.ExperienceBox}>
          <img
            src="/src/assets/hackathonImg.jpeg"
            alt="Jaipur Hackathon"
            className={styles.ExperienceImage}
          />
          <p className={styles.Description}>
            Participated in the Hackathon at Jaipur UEM, where innovation and
            creativity came alive. Collaborated with talented peers to solve
            challenging real-world problems. Enhanced my skills in coding,
            problem-solving, and teamwork throughout the event. Grateful for the
            experience, exposure, and the opportunity to push my limits.
          </p>
        </div>
        <div className={styles.ExperienceBox}>
          <img
            src="/src/assets/certificate.png"
            alt="Jaipur Hackathon"
            className={styles.ExperienceImage}
          />
          <p className={styles.Description}>
            This journey has deepened my understanding of AI, especially in the
            realms of Computer Ethics, Artificial Intelligence (AI), and
            Generative AI. It has helped me explore how technology can be both
            powerful and responsible. Excited to apply these learnings to
            innovate and create ethical AI solutions that can transform our
            world!
          </p>
        </div>
        <div className={styles.ExperienceBox}>
          <img
            src="/src/assets/certificate2.png"
            alt="Accenture-Data analytic and visualisation"
            className={styles.ExperienceImage}
          />
          <p className={styles.Description}>
            Completed Accenture North America’s Data Analytics and Visualization virtual experience on Forage. Gained practical experience in cleaning, modeling, and analyzing multiple datasets to uncover key business insights. Strengthened my data storytelling and visualization skills while delivering this session.
          </p>
        </div>
      </div>
    </>
  );
};
export default Experience;
