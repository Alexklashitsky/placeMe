const initialState = {
  orders: [],
  order: {
    totalPrice: 0,
    startDate: '',
    endDate: '',
    guests: {
      adults: 0,
      kids: 0,
      infants: 0,
      Pets: 0,
    },
    stay: {
      _id: '',
      name: '',
      price: 0,
    },
    status: 'pending',
  },
};

export function orderReducer(state = initialState, action = {}) {
  //was action={}
  switch (action.type) {
    case 'UPDATE_ORDER':
      return { ...state, order: action.order };
    case 'ADD_ORDER':
      return { ...state, order: [...state.orders, action.order] };

    default:
  }

  return state;
}
