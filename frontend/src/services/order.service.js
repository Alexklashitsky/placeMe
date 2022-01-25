import { storageService } from '../services/async-storage.service';

const STORAGE_KEY = 'order';

export const orderService = {
  save,
  _setOrder,
  getEmptyOrder,
  getOrder,
};

async function save(order) {
  _setOrder(order);
  return await storageService.post(STORAGE_KEY, order);
}

// getOrder - checks if there's an order in session storage - if not returns an empty order.
async function getOrder() {
  let order = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
  if (!order) {
    order = getEmptyOrder();
    _setOrder(order);
  }
  return order;
}

////saveDraftOrder
function _setOrder(order) {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(order));
  return order;
}

// getEmptyOrder - return empty order
function getEmptyOrder() {
  return {
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
  };
}
