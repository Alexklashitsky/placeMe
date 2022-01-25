import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TestCal } from './test-cal';
import { GuestsFilter } from './GuestsFilter';
import { addOrder } from '../store/order.action';
import { orderService } from '../services/order.service';

export const StayCheckIn = ({ stay }) => {
  // const [Stay, setStay] = useState({});
  const [reserve, setIsReseved] = useState(null);
  const [toggleCal, setToggleCal] = useState(false);
  const [toggleGuests, setToggleGuests] = useState(false);

  const order = useSelector((state) => state.orderModule.order);

  const dispatch = useDispatch();

  const onSubmit = () => {
    orderService.save(reserve).then(dispatch(addOrder(reserve)));
  };

  const onToggleCal = () => {
    setToggleCal(!toggleCal);
  };
  const onToggleGuests = () => {
    setToggleGuests(!toggleGuests);
  };

  useEffect(() => {
    setIsReseved({ ...order, stay: { ...order.stay, _id: stay._id, name: stay.name, price: stay.price } }); //object in object
  }, [order]);

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
              <input onClick={onToggleCal} placeholder={order.startDate}></input>
            </div>
            <div className='date-input'>
              <label>CHECK-OUT</label>
              <input onClick={onToggleCal} placeholder={order.endDate}></input>
            </div>
          </div>

          <div className='guest-input' onClick={onToggleGuests}>
            <p>guests</p>
          </div>
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
            <button onClick={onSubmit} className='action-btn'>
              <span>Reserve</span>
            </button>
          </div>
        </div>
        <span className='charge'>You won't be charged yet</span>
      </section>
      {toggleGuests && <GuestsFilter order={order} stay={stay} />}
      {toggleCal && <TestCal order={order} stay={stay} />}
    </section>
  );
};
