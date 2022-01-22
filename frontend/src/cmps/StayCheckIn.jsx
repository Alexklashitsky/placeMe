import React, { useState } from 'react';

export const StayCheckIn = ({ stay }) => {
  // const [Stay, setStay] = useState({});
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

  const getCurrDate = () => {
    var date = new Date().toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' });
    return date;
  };

  // description: user is pressing the button, activating a function which provide the order info - price, period, guests and name of stay
  // the function should load the stay is received by prop from StayDetails. it should also receive the detials inputed by the guest (1. num of guest; 2. period)

  return (
    <section className='button-main sticky'>
      <section className='order-container'>
        <div className='order-form-header'>
          <p>
            <span className='cost'>${stay.price}</span>
            <span className='night'>/ night</span>
          </p>
          <section className='reserve-reviews'>
            <span className='fas fa-star'></span>
            <p className='stay-rate'> {stay.reviews[0].rate} </p>
            <p className='stay-details-dot'> · </p>
            <p className='reviews'>{stay.reviews.length} reviews </p>
          </section>
        </div>
        <div className='order-data'>
          <div className='date-picker'>
            <div className='date-input'>
              <label>CHECK-IN</label>
              <input placeholder={getCurrDate()}></input>
            </div>
            <div className='date-input'>
              <label>CHECK-OUT</label>
              <input placeholder={getCurrDate()}></input>
            </div>
            {/* {isCalndarModal && <Calendar />} */}
          </div>

          <div className='guest-input'>
            <div>guests</div>
            {/* <div>{order.guests}</div>
            <div>{order.guests}</div> */}
          </div>
          {/* {isGuestsModal && <GuestsFilter />} */}
        </div>
        <div className='btn-container'>
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
        </div>
        <span className='charge'>You won't be charged yet</span>
      </section>
    </section>
  );
};
