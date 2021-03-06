import React, { useState, useEffect } from 'react';

export const CheckIn = ({ stay }) => {
  const [isButtonShown, setIsButtonShown] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;

    if (position > 1600) {
      setIsButtonShown(true);
    } else {
      setIsButtonShown(false);
    }
  };

  return (
    <section className='sticky-header'>
      <section className='container'>
        <section className='list'>
          <a href='#jump-to-photos'>Photos</a>
          <a href='#jump-to-amenities'>Amenities</a>
          <a href='#jump-to-reviews'>Reviews</a>
          <a href='#jump-to-location'>Location</a>
        </section>

        {isButtonShown && (
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
        )}
      </section>
    </section>
  );
};
