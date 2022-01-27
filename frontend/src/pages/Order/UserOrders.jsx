import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadOrders } from '../../store/order.action';
import { OrderList } from '../Order/OrderList';

export const UserOrders = () => {
  const user = useSelector((state) => state?.userModule?.user);
  const orders = useSelector((state) => state?.ordersModule?.orders);

  const dispatch = useDispatch();

  console.log('user:', user);
  console.log('orders:', orders);

  useEffect(() => {
    dispatch(loadOrders());
  }, []);

  if (!orders) return <h1>Loading...</h1>;
  return (
    <section>
      <OrderList orders={orders} />
    </section>
  );
};
