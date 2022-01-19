import { storageService } from '../services/async-storage.service';

const STORAGE_KEY = 'stay';

export const stayService = {
  query,
  // save,
  // getEmptyToy,
  // remove,
  getById,
};

function getById(stayId) {
  return storageService.get(STORAGE_KEY, stayId);
}

function query() {
  return storageService.query(STORAGE_KEY);
}
