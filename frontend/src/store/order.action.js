import { stayService } from '../services/stay.service.js';
import { orderService } from '../services/order.service.js';

export function updateOrder(order) {
  return (dispatch, getState) => {
    const action = { type: 'SET_ORDER', order };
    dispatch(action);
  };
}

export function updateOrderStatus(orderToUpdate) {
  console.log('orderToUpdate:', orderToUpdate);
  return async (dispatch) => {
    try {
      const order = await orderService.save(orderToUpdate);
      dispatch({ type: 'UPDATE_ORDER', order });
    } catch (err) {
      console.log('Cannot update order');
    }
  };
}

export function loadOrders(filterBy) {
  return async (dispatch, getState) => {
    const orders = await orderService.query(filterBy);
    console.log('loadOrders:', orders);

    const action = { type: 'SET_ORDERS', orders };
    dispatch(action);
  };
}

export function reserveOrder(order) {
  return async (dispatch, getState) => {
    await orderService.save(order);
    const action = { type: 'SET_ORDER', order: orderService.getEmptyOrder() };
    dispatch(action);
  };
}
