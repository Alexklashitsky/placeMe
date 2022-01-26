import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TestCal } from './Calendar';
import { GuestsFilter } from './GuestsFilter';
import { reserveOrder, updateOrder } from '../store/order.action';
import { orderService } from '../services/order.service';
import { utilService } from '../services/util.service';

let today = utilService.getDayInDd();

export const StayCheckIn = ({ stay }) => {
  let averageRate = utilService.getReviews(stay);
  const [toggleCal, setToggleCal] = useState(false);
  const [toggleGuests, setToggleGuests] = useState(false);

  var loggedInUser = sessionStorage.getItem('loggedinUser');
  console.log('loggedInUser:', loggedInUser._id);

  const order = useSelector((state) => state?.ordersModule?.order);
  const dispatch = useDispatch();

  const onSubmit = () => {
    const orderToSend = {
      ...order,
      hostId: stay.host._id,
      buyer: {
        _id: loggedInUser._id,
        fullname: loggedInUser.fullname,
      },
    };
    console.log('orderToSend:', orderToSend);
    dispatch(reserveOrder(orderToSend));
  };

  const onToggleCal = () => {
    setToggleCal(!toggleCal);
  };
  const onToggleGuests = () => {
    setToggleGuests(!toggleGuests);
  };

  useEffect(() => {
    if (!order) return;
    let totalPrice = !order.totalPrice ? stay.price : order.totalPrice;

    const updatedOrder = {
      ...order,
      stay: { ...order.stay, _id: stay._id, name: stay.name, price: stay.price },
      totalPrice,
    };

    dispatch(updateOrder(updatedOrder));
  }, []);

  if (!order) return <div>loading</div>;

  return (
    <section className='button-main sticky'>
      {toggleCal && <div onClick={onToggleCal} className='screen-details'></div>}
      <section className='order-container'>
        <div className='order-form-header'>
          <p>
            <span className='cost'>${order.totalPrice <= 0 ? stay.price : order.totalPrice}</span>
            <span className='night'>/ night</span>
          </p>
          <section className='reserve-reviews'>
            <span className='fas fa-star'></span>
            <p className='stay-rate'> {averageRate.toFixed(2)} </p>
            <p className='stay-details-dot'> · </p>
            <p className='reviews'>{stay.reviews.length} reviews </p>
          </section>
        </div>

        <div className='order-data'>
          <div className='date-picker'>
            <div className='date-input'>
              <label>CHECK-IN</label>
              <input onClick={onToggleCal} placeholder={!order.startDate ? today : order.startDate}></input>
            </div>
            <div className='date-input'>
              <label>CHECK-OUT</label>
              <input onClick={onToggleCal} placeholder={!order.endDate ? today : order.endDate}></input>
            </div>
          </div>

          <div className='guest-input' onClick={onToggleGuests}>
            <h4>guests</h4>
            <div>
              {toggleGuests && <div onClick={setToggleGuests} className='screen-details'></div>}
              <div className='guests'>
                {!order?.guests?.adults ? <p>guests</p> : <p>{order.guests.adults + order.guests.children} guests</p>}
                {!order?.guests?.infants ? <React.Fragment></React.Fragment> : <p>{order.guests.infants} infants</p>}
              </div>
            </div>
          </div>
        </div>
        <div onClick={onSubmit} className='btn-container'>
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
      {toggleGuests && <GuestsFilter order={order} stay={stay} />}
      {toggleCal && <TestCal order={order} stay={stay} onToggleCal={onToggleCal} />}
    </section>
  );
};
