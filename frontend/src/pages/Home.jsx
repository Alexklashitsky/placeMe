import React from 'react'
import HeroImage from '../assets/imgs/sam-hull-KCJKsJPe9pQ-unsplash.jpg'

export function Home() {
  return (
    <div className="hero-container entire-layout">
      <div className="center-layout hero-img-container">
        <img className="hero-pic" src={HeroImage} alt="" />
      </div>
    </div>
  )
}
