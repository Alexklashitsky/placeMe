import { stayService } from '../services/stay.service.js';
import { orderService } from '../services/order.service.js';

export function updateOrder(order) {
  return (dispatch, getState) => {
    const action = { type: 'SET_ORDER', order };
    dispatch(action);
  };
}

export function updateOrderStatus(orderToUpdate) {
  return async (dispatch) => {
    try {
      console.log('order from action:', orderToUpdate);
      dispatch({ type: 'UPDATE_ORDER', orderToUpdate });
      await orderService.save(orderToUpdate);
    } catch (err) {
      console.log('Cannot update order');
    }
  };
}

export function loadOrders(filterBy) {
  return async (dispatch, getState) => {
    const orders = await orderService.query(filterBy);

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
