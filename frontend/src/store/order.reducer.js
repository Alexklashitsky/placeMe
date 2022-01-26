import { orderService } from '../services/order.service';

const initialState = {
  order: orderService.getOrder(),
};

export function orderReducer(state = initialState, action = {}) {
  //was action={}
  switch (action.type) {
    case 'SET_ORDER':
      return { ...state, order: action.order };
    default:
  }

  return state;
}
