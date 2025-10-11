import React from "react";
import styles from "./Contact.module.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
const Contact = () => {
  return (
    <section
      className={`min-h-screen flex flex-col justify-center items-center text-white px-6 py-12 ${styles.contactSection}`}
      id="contact"
    >
      <h3 className="text-#ccdcf6 md:text-2xl mb-8 ">
        Get in Touch
      </h3>

      {/* Links */}
      <div className="flex flex-wrap justify-center gap-8 mb-10">
        <a href="https://github.com/BittuRaj124365" className={styles.icon}>
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/bittu-raj-1421a8294"
          className={styles.icon}
        >
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/rajb2_" className={styles.icon}>
          <FaInstagram />
        </a>
        <a href="https://x.com/b2paradox_?s=21" className={styles.icon}>
          <FaTwitter />
        </a>
        <a href="mailto:bitturaj124365@gmail.com" className={styles.icon}>
          <FaEnvelope />
        </a>
      </div>

      {/* Resume Button */}
      <a
        href="https://drive.google.com/file/d/1x5tD_54gSW_Cg8reDgWYgWCh7ZrBRFcX/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.resumeBtn}
      >
        My Resume
      </a>
      <p className="text-sm mt-10 text-gray-300 tracking-wide text-center">
        © {new Date().getFullYear()} Bittu Raj — All Rights Reserved.
      </p>
    </section>
  );
};

export default Contact;
