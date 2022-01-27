import React from 'react';
import { OrderPreview } from './OrderPreview';

export function OrderList({ orders }) {
  return (
    <div>
      <section>
        {orders.map((order) => (
          <OrderPreview key={order._id} order={order} />
        ))}
      </section>
    </div>
  );
}
