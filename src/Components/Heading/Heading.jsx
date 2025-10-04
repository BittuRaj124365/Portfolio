import React, { useState, useEffect } from "react";
import style from "./Heading.module.css";
import { GiBookAura } from "react-icons/gi";
const Heading = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Detect window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsOpen(false); // reset toggle on desktop
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-row justify-between items-center p-2 text-lg relative text-rgb(19, 222, 222) text-white">
      {/* Logo */}
      <div className={style.icon}>
        <GiBookAura />
      </div>

      {/* Toggle button - only visible on small screens */}
      {isMobile && (
        <button
          className={style.menuBtn}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      )}

      {/* Side nav */}
      <nav
        className={`${style.nav} ${
          isMobile ? (isOpen ? style.show : style.hide) : ""
        }`}
      >
        {/* Close button inside nav */}
        {isMobile && (
          <button
            className={style.closeBtn}
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
        )}

        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Experience</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Heading;
