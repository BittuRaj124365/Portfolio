import React, { useRef } from "react";
import styles from "./InteractiveStyle.module.css";

const InteractiveImage = ({ src, alt }) => {
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const img = imgRef.current;
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const moveX = ((x - centerX) / centerX) * 10;
    const moveY = ((y - centerY) / centerY) * 10;

    img.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px) rotateX(${
      -moveY / 3
    }deg) rotateY(${moveX / 3}deg)`;
  };

  const handleMouseLeave = () => {
    const img = imgRef.current;
    img.style.transform =
      "scale(1) translate(0px,0px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div className={styles.wrapper}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={styles.image}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default InteractiveImage;
