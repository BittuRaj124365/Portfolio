import React, { useState, useEffect } from "react";
import style from "./Heading.module.css";
import { GiBookAura } from "react-icons/gi";
const Heading = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showNav, setShowNav] = useState(true); //controls visibility
  const [lastScrollY, setLastScrollY] = useState(0);
  // Detect window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsOpen(false); // reset toggle on desktop
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down
        setShowNav(false);
      } else {
        // scrolling up
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <div
      className={`${style.navbarWrapper} ${showNav ? style.show : style.hide}`}
    >
      <div className="flex flex-row justify-between items-center p-2 text-lg relative text-rgb(19, 222, 222) text-white ">
        {/* Logo */}
        <div className={style.icon}>
          {/* <GiBookAura /> */}
          <a href="home">
            <GiBookAura />
          </a>
        </div>

        {/* Toggle button - only visible on small screens */}
        {isMobile && (
          <button className={style.menuBtn} onClick={() => setIsOpen(!isOpen)}>
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
            <button className={style.closeBtn} onClick={() => setIsOpen(false)}>
              ×
            </button>
          )}

          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Heading;
