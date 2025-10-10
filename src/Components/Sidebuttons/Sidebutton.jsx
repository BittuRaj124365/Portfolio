import React from "react";
import styles from "./Sidebutton.module.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const Sidebutton = () => {
  return (
    <>
      <div className={styles.sideIcons}>
        <a href="https://github.com/BittuRaj124365" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/bittu-raj-1421a8294" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://x.com/b2paradox_?s=21" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://instagram.com/rajb2_" aria-label="Instagram">
          <FaInstagram />
        </a>
        <div className={styles.line}></div>
      </div>
      <div className={styles.sideName}>
        <p>Bittu Raj</p>
        <div className={styles.line}></div>
      </div>
    </>
  );
};

export default Sidebutton;
