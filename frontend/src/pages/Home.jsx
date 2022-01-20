import React from 'react'
import { Hero } from '../cmps/HomeHero.jsx'
import  InspirationCards from '../cmps/InspirationCards'

export function Home() {
  return (
    <section className="entire-layout">
      <Hero/>
      <div className="inspiration-container center-layout">   
      <InspirationCards/>
      </div>
    </section>
  )
}
// src\assets\imgs\mike-aunzo-Bl-IWjL4s1I-unsplash.jpg