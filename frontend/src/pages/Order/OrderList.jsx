import React from 'react';
import { OrderPreview } from './OrderPreview';

export function OrderList({ orders }) {
  return (
    <div>
      <div className='order-info'>
        <div>Guest name</div>
        <div>Check In</div>
        <div>Check Out</div>
        <div>Status</div>
        <div>Price</div>
        <div>Actions</div>
      </div>
      <div className='order'>
        {orders.map((order) => (
          <OrderPreview key={order._id} order={order} />
        ))}
      </div>
    </div>
  );
}
