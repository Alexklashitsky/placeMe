import { orderService } from '../services/order.service';

const initialState = {
  order: orderService.getOrder(),
};

export function ordersReducer(state = initialState, action = {}) {
  //was action={}
  switch (action.type) {
    case 'SET_ORDER':
      return { ...state, order: action.order };
    case 'SET_ORDERS':
      return { ...state, orders: [...action.orders] };
    default:
      break;
  }

  return state;
}
