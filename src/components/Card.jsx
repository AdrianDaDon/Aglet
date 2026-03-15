import React, { useRef, useState } from 'react'

export default function Card({thumbnail, videoUrl, title, subtitle, id, setHoveredID, setIsHovered, isHovered}) {

  const videoRef = useRef(null)
  const [hasBeenHovered, setHasBeenHovered] = useState(false) 

  const handleMouseEnter = () => {
    setIsHovered(true)
    setHoveredID(id)
    setHasBeenHovered(true)
    videoRef.current?.play()

    console.log(id);
  }

  const handleMouseLeave = () => {
    videoRef.current?.pause()
    setHoveredID(null);
    setIsHovered(false)
  }

  return (
    <div
      className={`card${hasBeenHovered ? ' card--video-stayed' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`card-image-container ${isHovered ? 'card-overlay' : ''}`}>
        <img className="card-image" src={`${thumbnail}`} alt="" />
        <video
          ref={videoRef}
          className="card-video"
          src={`${videoUrl}`}
          loop
          muted
          playsInline
        />
      </div>
      <h2 className="card-title">{title}</h2>
      <h3 className="card-subtitle">{subtitle}</h3>
    </div>
  )
}
