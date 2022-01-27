import React, { useState } from 'react';

export function OrderPreview({ order }) {
  const [option, setOption] = useState('pending');

  function handleSelectChange(event) {
    setOption(event.target.value);
  }

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
