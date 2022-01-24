import React from 'react';

export const ReviewSummary = ({ stay }) => {
  if (!stay) return <h1>Loading...</h1>;

  return (
    <div>
      <section className='review-summary'>
        <span className='fas fa-star-review-summary'></span>
        <span>{stay.reviews[0].rate}</span>
        <span>·</span>
        <span> {stay.reviews.length} reviews</span>
      </section>

      <div className='overall'>
        <div className='rate'>
          <p>Cleanliness</p>
          <div className='rate-number'>
            <div class='container'>
              <div class='skills cleanliness'> </div>
            </div>
            <p>4.5</p>
          </div>
        </div>

        <div className='rate'>
          <p>Communication</p>
          <div className='rate-number'>
            <div class='container'>
              <div class='skills communication'></div>
            </div>
            <p>4</p>
          </div>
        </div>

        <div className='rate'>
          <p>Check-in</p>
          <div className='rate-number'>
            <div class='container'>
              <div class='skills check-in'></div>
            </div>
            <p>5</p>
          </div>
        </div>
        <div className='rate'>
          <p>Accuracy</p>
          <div className='rate-number'>
            <div class='container'>
              <div class='skills accuracy'></div>
            </div>
            <p>5</p>
          </div>
        </div>
        <div className='rate'>
          <p>Location</p>
          <div className='rate-number'>
            <div class='container'>
              <div class='skills location'></div>
            </div>
            <p>5</p>
          </div>
        </div>
        <div className='rate'>
          <p>Value</p>
          <div className='rate-number'>
            <div class='container'>
              <div class='skills value'></div>
            </div>
            <p>5</p>
          </div>
        </div>
      </div>
    </div>
  );
};