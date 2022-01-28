import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateOrderStatus } from '../../store/order.action';

export function OrderPreview({ order }) {
  const [option, setOption] = useState();
  const [input, setInput] = useState('');

  console.log(input);
  const dispatch = useDispatch();

  function handleSelectChange(event) {
    setOption(event.target.value);
    const orderToUpdate = {
      ...order,
      status: event.target.value,
    };

    dispatch(updateOrderStatus(orderToUpdate));
  }

  const orders = useSelector((state) => state?.ordersModule?.orders);
  return (
    <div className='order-card'>
      <div>{order.buyer.fullname}</div>
      <div>{order.startDate}</div>
      <div>{order.endDate}</div>
      <div> {order.status} </div>
      <div>{order.totalPrice} </div>

      <select value={option} onChange={handleSelectChange} className='selector'>
        <option value='pending'>Pending</option>
        <option value='cancel'>Cancel</option>
        <option value='approve'>Approve</option>
      </select>
    </div>
  );
}
