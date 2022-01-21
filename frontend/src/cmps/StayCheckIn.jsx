import React, { useState } from 'react';

export const StayCheckIn = ({stay}) => {
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

  // description: user is pressing the button, activating a function which provide the order info - price, period, guests and name of stay
  // the function should load the stay is received by prop from StayDetails. it should also receive the detials inputed by the guest (1. num of guest; 2. period) 

  const onSay = () => {
    console.log('hello:');
  };
  if (!stay) return;

  console.log('from stay checking2', stay);

  return (
    <section className='button-main sticky'>
      <section className='order-container'>

        <div className='order-form-header'>
          <p>
            <span className='cost'>{stay.price}</span> / night
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
            {/* {isCalndarModal && <Calendar />} */}
          
          </div >

          <div className='guest-input'>

            <di>guests</di>
            <div>{order.guests}</div>

          </div>
          {/* {isGuestsModal && <GuestsFilter />} */}

        </div>

        <div className='btn-container'>

          <div className='content'>
            <button className='action-btn'>
              <span>Reserve</span>
            </button>
          </div>

        </div>

      </section>
    </section >
  );
};
