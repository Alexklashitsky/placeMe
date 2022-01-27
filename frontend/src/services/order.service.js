import { storageService } from '../services/async-storage.service';
import axios from 'axios';
import { httpService } from './http.service';

const STORAGE_KEY = 'order';

export const orderService = {
  save,
  _setOrder,
  getEmptyOrder,
  getOrder,
  query,
};

// async function save(order) {
//   _setOrder(order);
//   return await storageService.post(STORAGE_KEY, order);
// }

async function query(filterBy) {
  try {
    const order = await axios.get('http://localhost:3030/api/order/', {
      params: { filterBy: JSON.stringify(filterBy) },
    });
    return order.data;
  } catch (err) {
    console.log('Cannot get orders', err);
  }
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

//save
async function save(orderToSave) {
  console.log('orderToSave:', orderToSave);

  if (orderToSave._id) {
    try {
      const order = await httpService.put(`order/${orderToSave._id}`, orderToSave);

      return order.data;
    } catch (err) {
      console.log('Cannot save toy', err);
    }
  } else {
    try {
      const order = await httpService.post('order/', orderToSave);
      console.log('orderToSave:', orderToSave);
      return order.data;
    } catch (err) {
      console.log('Cannot save toy', err);
    }
  }
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
