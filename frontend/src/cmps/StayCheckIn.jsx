import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TestCal } from './Calendar';
import { GuestsFilter } from './GuestsFilter';
import { reserveOrder, updateOrder } from '../store/order.action';
import { utilService } from '../services/util.service';
import { updateText } from '../store/modal.action';

const today = utilService.getDayInDd();

export const StayCheckIn = ({ stay }) => {
  let averageRate = utilService.getReviews(stay);
  const [firstClick, setToggleFirstClick] = useState(false);
  const [toggleCal, setToggleCal] = useState(false);
  const [toggleGuests, setToggleGuests] = useState(false);
  const [reserved, setReserved] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const order = useSelector((state) => state?.ordersModule?.order);
  const user = useSelector((state) => state?.userModule.user);

  useEffect(() => {
    if (!user) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  }, [user]);

  const dispatch = useDispatch();

  const onSubmit = () => {
    const orderToSend = {
      ...order,
      host: stay.host,
    };

    if (!loggedIn) {
      dispatch(updateText({ txt: 'Login first!', type: 'fail' }));
      return;
    }
    if (!firstClick) {
      dispatch(reserveOrder(orderToSend));
      dispatch(updateText({ txt: 'Order Reserved!', type: 'success' }));
      setReserved(true);
      setToggleFirstClick(true);
    }
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
        <div onClick={onSubmit} className={!reserved ? 'btn-container' : 'btn-container-disabled'}>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
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
            <button className={!reserved ? 'action-btn' : 'action-btn-disabled'}>
              {!reserved ? <span>Reserve</span> : <span>Reserved order!</span>}
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
