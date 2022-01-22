import React, { useState } from 'react';

export const CheckIn = ({ stay }) => {
  console.log('stay:', stay);

  //   <div className='order-form-header'>
  //   <p>
  //     <span className='cost'>${stay.price}</span>
  //     <span className='night'>/ night</span>
  //   </p>
  //   <section className='reserve-reviews'>
  //     <span className='fas fa-star'></span>
  //     <p className='stay-rate'>{stay.reviews[0].rate}</p>
  //     <p className='stay-details-dot'>·</p>
  //     <p className='reviews'>{stay.reviews.length} reviews </p>
  //   </section>
  // </div>

  return (
    <section className='sticky-header'>
      <section className='container'>
        <section className='list'>
          <span>Photos</span>
          <span>Amenities</span>
          <span>Reviews</span>
          <span>Location</span>
        </section>

        <div className='btn'>
          <section className='details'>
            <p className='price'>
              $ {stay.price}
              <span className='night'> / night</span>
            </p>
            <p className='ratings'>
              <span className='fas fa-star-header'></span>
              <span className='rate'>{stay.reviews[0].rate}</span>
              <span className='dot'>·</span>
              <span className='reviews'>{stay.reviews.length} reviews</span>
            </p>
          </section>
          <section className='btn-container'>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='cell'></div>
            <div className='content'>
              <button className='action-btn'>
                <span>Reserve</span>
              </button>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
};
