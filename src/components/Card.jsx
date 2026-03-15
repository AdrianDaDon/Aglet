import React, { useRef, useState } from "react";

export default function Card({
  thumbnail,
  videoUrl,
  title,
  subtitle,
  id,
  setHoveredID,
  setIsHovered,
  isHovered,
  hoveredCardID,
}) {
  const videoRef = useRef(null);
  const [hasBeenHovered, setHasBeenHovered] = useState(false);

  const handleMouseEnter = () => {
    // setting all states once the card is hovered on 
    setIsHovered(true);
    setHoveredID(id);
    setHasBeenHovered(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = (e) => {
    // Only clear hover when actually leaving the card (not moving to a child)
    const related = e.relatedTarget;
    if (related && e.currentTarget.contains(related)) return; //
    videoRef.current?.pause();
    setHoveredID(null);
    setIsHovered(false);
  };

  return (
    <div
      className={`card${hasBeenHovered ? " card--video-stayed" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-image-container">
        <img className="card-image" src={`${thumbnail}`} alt="" />
        <video
          ref={videoRef}
          className="card-video"
          src={`${videoUrl}`}
          loop
          muted
          playsInline
        />
        <div
          className={`card-overlay ${isHovered && hoveredCardID !== id ? "card-overlay--visible" : ""}`}
        />
      </div>
      <h2 className="card-title">{title}</h2>
      <h3 className="card-subtitle">{subtitle}</h3>
    </div>
  );
}
