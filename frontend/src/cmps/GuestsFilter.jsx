import { Component, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateOrder } from '../store/order.action';

export const GuestsFilter = ({ order, stay }) => {
  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const dispatch = useDispatch();
  useEffect(() => {
    const orderToUpdate = { ...order, guests };
    dispatch(updateOrder(orderToUpdate));
  }, [guests]);

  const onHandleGuests = (type, diff) => {
    guests[type] = guests[type] + diff;
    setGuests({ ...guests });
  };

  return (
    <section className='guest-menu'>
      <div className='guests-types'>
        <div className='guest-type flex'>
          <div className='gust-info'>
            <h3>Adults</h3>
            <p>Ages 13+</p>
          </div>
          <div className='guest-num flex'>
            <button onClick={() => onHandleGuests('adults', -1)}>-</button>
            {guests.adults}
            <button onClick={() => onHandleGuests('adults', +1)}>+</button>
          </div>
        </div>
      </div>

      <div className='guests-types'>
        <div className='guest-type flex'>
          <div className='gust-info'>
            <h3>Children</h3>
            <p>Ages 2–12</p>
          </div>
          <div className='guest-num flex'>
            <button onClick={() => onHandleGuests('children', -1)}>-</button>
            {guests.children}
            <button onClick={() => onHandleGuests('children', +1)}>+</button>
          </div>
        </div>
      </div>
      <div className='guests-types'>
        <div className='guest-type flex'>
          <div className='gust-info'>
            <h3>Infants</h3>
            <p>Under 2</p>
          </div>
          <div className='guest-num flex'>
            <button onClick={() => onHandleGuests('infants', -1)}>-</button>
            {guests.infants}
            <button onClick={() => onHandleGuests('infants', +1)}>+</button>
          </div>
        </div>
        <div className='guests-types'>
          <div className='guest-type flex'>
            <div className='gust-info'>
              <h3>Pets</h3>
            </div>
            <div className='guest-num flex'>
              <button onClick={() => onHandleGuests('pets', -1)}>-</button>
              {guests.pets}
              <button onClick={() => onHandleGuests('pets', +1)}>+</button>
            </div>
          </div>
        </div>
        <button className='save guest'>save</button>
        <button className='clear '>clear</button>
      </div>
    </section>
  );
};
