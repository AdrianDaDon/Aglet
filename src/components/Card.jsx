import React from 'react'

export default function Card({thumbnail, videoUrl, title, subtitle}) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={`${thumbnail}`} alt="" />
      </div>
      <h1 className="card-title">{title}</h1>
      <h3 className="card-subtitle">{subtitle}</h3>
        
    </div>
  )
}
