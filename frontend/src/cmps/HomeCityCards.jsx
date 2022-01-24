import React from 'react'

export function HomeCityCard({ src, title, description, price }) {
  return (
    <div className='inspiration-card'>
            <div className='inspiration-card-img'>
            <img src={src} alt="" />
            </div>
            <div className="card__info">
                <h2>{title}</h2>
                {/* <h2>{price}</h2>
                <h4>{description}</h4> */}
            </div>
        </div>
  )
}

export default HomeCityCard

