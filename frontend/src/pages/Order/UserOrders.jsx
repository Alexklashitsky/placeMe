import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadOrders } from '../../store/order.action';
import { OrderList } from '../Order/OrderList';

export const UserOrders = () => {
  const user = useSelector((state) => state?.userModule?.user);
  const orders = useSelector((state) => state?.ordersModule?.orders);
  console.log('user:', user);
  console.log('user:', orders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadOrders({ hostId: user._id }));
  }, []);

  if (!orders) return <h1>Loading...</h1>;
  console.log('user:', user);
  return (
    <section>
      <OrderList orders={orders} />
    </section>
  );
};
