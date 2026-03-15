import React from 'react'

export default function Card({thumbnail, videoUrl, title, subtitle}) {
  return (
    <div className="card">
      <div className="card-image-container">
        <img className="card-image" src={`${thumbnail}`} alt="" />
      </div>
      <h2 className="card-title">{title}</h2>
      <h3 className="card-subtitle">{subtitle}</h3>
        
    </div>
  )
}
