import React, { useState } from 'react';

export const StayCheckIn = () => {
  const [Stay, setStay] = useState({})
  const [isOrdered, toggleOrder] = useState(false)
  const [order, setOrder] = useState(
    {
        "totalPrice": 0,
        "startDate": "",
        "endDate": "",
        "guests": {
          "adults": 0,
          "kids": 0
        },
        "stay": {
          "_id": "",
          "name": "",
          "price": 0
        },
        "status": "pending"
    })


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



// order: {
//   "totalPrice": 160,
//   "startDate": "2025/10/15",
//   "endDate": "2025/10/17",
//   "guests": {
//     "adults": 2,
//     "kids": 1
//   },
//   "stay": {
//     "_id": "h102",
//     "name": "House Of Uncle My",
//     "price": 80.00
//   },
//   "status": "pending"
// }