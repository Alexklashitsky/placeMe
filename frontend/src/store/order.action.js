import { stayService } from '../services/stay.service.js';
import { orderService } from '../services/order.service.js';

export function updateOrder(order) {
  return (dispatch, getState) => {
    const action = { type: 'SET_ORDER', order };
    dispatch(action);
  };
}

export function loadOrders() {
  return (dispatch, getState) => {
    const {
      ordersModule: { filterBy },
    } = getState();
    orderService.query(filterBy).then((orders) => {
      const action = { type: 'SET_ORDERS', orders };
      dispatch(action);
    });
  };
}

export function reserveOrder(order) {
  return async (dispatch, getState) => {
    await orderService.save(order);
    const action = { type: 'SET_ORDER', order: orderService.getEmptyOrder() };
    dispatch(action);
  };
}
