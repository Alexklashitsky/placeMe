import { stayService } from '../services/stay.service.js';

export function updateOrder(order) {
  return (dispatch, getState) => {
    const action = { type: 'UPDATE_ORDER', order };
    dispatch(action);
  };
}

export function addOrder(order) {
  return (dispatch, getState) => {
    const action = { type: 'ADD_ORDER', order };
    dispatch(action);
  };
}
