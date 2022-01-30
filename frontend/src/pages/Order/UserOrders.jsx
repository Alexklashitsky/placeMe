import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadOrders } from '../../store/order.action';
import { loadStays } from '../../store/stay.action';
import { OrderList } from '../Order/OrderList';
import { stayService } from '../../services/stay.service';

export const UserOrders = () => {
  const user = useSelector((state) => state?.userModule?.user);
  const orders = useSelector((state) => state?.ordersModule?.orders);
  const stays = useSelector((state) => state?.staysModule?.stays);

  console.log('orders:', orders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadOrders({ hostId: user._id }));
    dispatch(loadStays());
  }, []);

  const [stay, setStay] = useState(false);

  if (!orders) return <h1>Loading...</h1>;
  if (!user) return <h1>Please log-in first!</h1>;

  return (
    <div className='main-container'>
      <div className='left-container'>
        <div className='navigation'>
          <div>
            <span className='fas fa-plus-dashboard'></span> Add Stay
          </div>
          <div>
            <span className='fas fa-home-dashboard'></span> My Stays
          </div>
          <div className='fas fa-note-dashboard'> Order</div>
          <div className='fas fa-star-dashboard'> Rates</div>
        </div>
        <section className='terms-of-service'>
          <span className='fas fa-wallet-dashboard'></span>
          <h1>Make all payments through Hosty!</h1>
          <div className='tos-text'>
            Always pay and communicate through Hosty to ensure you're protected under our terms of service, pyaments
            terms of service,cancellation and other safeguards.
          </div>
        </section>
      </div>

      <div className='secondary-container'>
        <div className='right-container'>
          <div className='general-info'>
            <div className='total-rate'>Total rate</div>
            <div className='monthly-earning'>Monthly Earning</div>
            <div className='orders-right-container'>
              Orders:
              <p>{orders.length}</p>
            </div>
            <div className='active-users'>Active Users</div>
          </div>
          <div className='orders'>
            <OrderList orders={orders} />
          </div>
        </div>
      </div>
    </div>
  );
};
