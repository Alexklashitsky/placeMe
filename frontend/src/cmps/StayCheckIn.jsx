import React, { useState } from 'react';

export const StayCheckIn = ({ stay }) => {
  const [isOrdered, toggleOrder] = useState(false);
  const [order, setOrder] = useState({
    totalPrice: 0,
    startDate: '',
    endDate: '',
    guests: {
      adults: 0,
      kids: 0,
    },
    stay: {
      _id: '',
      name: '',
      price: 0,
    },
    status: 'pending',
  });

  console.log('from stay checking', stay);

  return (
    <section className='button-main sticky'>
      <section className='order-container'>
        <div className='order-form-header'>
          <p>
            <span className='cost'>$500</span> / night
          </p>
          <p>
            5 <span className='reviews'>(5 reviews)</span>
          </p>
        </div>
        <div className='order-data'>
          <div className='date-picker'>
            <div className='date-input'>
              <label>check in</label>
              <input placeholder='Tue Sep 07 2021'></input>
            </div>
            <div className='date-input'>
              <label>check out</label>
              <input placeholder='Tue Sep 07 2021'></input>
            </div>
          </div>
          <div className='guest-input'>
            <label>guests</label>
            <input placeholder='2'></input>
          </div>
        </div>
        <div className='btn-container'>
          <div className='content'>
            <button className='action-btn'>
              <span>Reserve</span>
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};
