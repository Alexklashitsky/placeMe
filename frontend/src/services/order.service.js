import { storageService } from '../services/async-storage.service';

const STORAGE_KEY = 'order';

export const orderService = {
  save,
};

function save(order) {
  console.log('order:', order);

  return storageService.post(STORAGE_KEY, order);
}
