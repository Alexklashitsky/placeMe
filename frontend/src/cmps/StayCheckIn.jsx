import React from 'react';

export const StayCheckIn = () => {
  const onSay = () => {
    console.log('hello:');
  };
  return (
    <section className='button-main'>
      <section class='order-container'>
        <div class='order-form-header'>
          <p>
            <span class='cost'>$500</span> / night
          </p>
          <p>
            5 <span class='reviews'>(5 reviews)</span>
          </p>
        </div>
        <div class='order-data'>
          <div class='date-picker'>
            <div class='date-input'>
              <label>check in</label>
              <input placeholder='Tue Sep 07 2021'></input>
            </div>
            <div class='date-input'>
              <label>check out</label>
              <input placeholder='Tue Sep 07 2021'></input>
            </div>
          </div>
          <div class='guest-input'>
            <label>guests</label>
            <input placeholder='2'></input>
          </div>
        </div>
        <div class='btn-container'>
          <div class='content'>
            <button onClick={onSay} class='action-btn'>
              <span>Reserve</span>
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};
