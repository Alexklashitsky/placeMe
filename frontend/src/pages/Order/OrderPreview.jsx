import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateOrderStatus } from '../../store/order.action';

export function OrderPreview({ order }) {
  const [option, setOption] = useState(order.status);

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
      <div>
        Between : {order.startDate} - {order.endDate}
      </div>
      <div> Total Price : {order.totalPrice} </div>
      <div> Status : {order.status} </div>
      <div> Name : {order.stay.name} </div>
      <select value={option} onChange={handleSelectChange} className='selector'>
        <option value='pending'>Pending</option>
        <option value='cancel'>Cancel</option>
        <option value='approve'>Approve</option>
      </select>
    </div>
  );
}
