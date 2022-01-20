import { storageService } from './async-storage.service.js';
import { utilService } from './util.service.js';
import { userService } from './user.service.js';
const STORAGE_KEY = 'stay';
let staysToSave = [];

export const stayService = {
  query,
  getById,

  // remove,
  // getEmptyCar
};

async function query() {
  let stays = await storageService.query(STORAGE_KEY);
  console.log('stays1:', stays);

  if (!stays) {
    stays = await _createDemoData();
    console.log('stays2:', stays);
  }
  return stays;
}

function _createDemoData() {
  const stays = [
    {
      _id: '10006546',
      name: 'Ribeira Charming Duplex',
      type: 'House',
      imgUrls: [
        'https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large',
        'otherImg.jpg',
      ],
      price: 80.0,
      summary:
        'Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...',
      capacity: 8,
      amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed', 'Cooking basics'],
      host: {
        _id: '51399391',
        fullname: 'Davit Pok',
        imgUrl: 'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
      },
      loc: {
        country: 'Portugal',
        countryCode: 'PT',
        address: 'Porto, Portugal',
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: 'madeId',
          txt: 'Very helpful hosts. Cooked traditional...',
          rate: 4,
          by: {
            _id: 'u102',
            fullname: 'user2',
            imgUrl: '/img/img2.jpg',
          },
        },
      ],
      likedByUsers: ['mini-user'],
    },
    {
      _id: '10006546',
      name: 'Ribeira Charming Duplex',
      type: 'House',
      imgUrls: [
        'https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large',
        'otherImg.jpg',
      ],
      price: 80.0,
      summary:
        'Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...',
      capacity: 8,
      amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed', 'Cooking basics'],
      host: {
        _id: '51399391',
        fullname: 'Davit Pok',
        imgUrl: 'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
      },
      loc: {
        country: 'Portugal',
        countryCode: 'PT',
        address: 'Porto, Portugal',
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: 'madeId',
          txt: 'Very helpful hosts. Cooked traditional...',
          rate: 4,
          by: {
            _id: 'u102',
            fullname: 'user2',
            imgUrl: '/img/img2.jpg',
          },
        },
      ],
      likedByUsers: ['mini-user'],
    },
    {
      _id: '10006546',
      name: 'Ribeira Charming Duplex',
      type: 'House',
      imgUrls: [
        'https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large',
        'otherImg.jpg',
      ],
      price: 80.0,
      summary:
        'Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...',
      capacity: 8,
      amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed', 'Cooking basics'],
      host: {
        _id: '51399391',
        fullname: 'Davit Pok',
        imgUrl: 'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
      },
      loc: {
        country: 'Portugal',
        countryCode: 'PT',
        address: 'Porto, Portugal',
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: 'madeId',
          txt: 'Very helpful hosts. Cooked traditional...',
          rate: 4,
          by: {
            _id: 'u102',
            fullname: 'user2',
            imgUrl: '/img/img2.jpg',
          },
        },
      ],
      likedByUsers: ['mini-user'],
    },
    {
      _id: '10006546',
      name: 'Ribeira Charming Duplex',
      type: 'House',
      imgUrls: [
        'https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large',
        'otherImg.jpg',
      ],
      price: 80.0,
      summary:
        'Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...',
      capacity: 8,
      amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed', 'Cooking basics'],
      host: {
        _id: '51399391',
        fullname: 'Davit Pok',
        imgUrl: 'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
      },
      loc: {
        country: 'Portugal',
        countryCode: 'PT',
        address: 'Porto, Portugal',
        lat: -8.61308,
        lng: 41.1413,
      },
      reviews: [
        {
          id: 'madeId',
          txt: 'Very helpful hosts. Cooked traditional...',
          rate: 4,
          by: {
            _id: 'u102',
            fullname: 'user2',
            imgUrl: '/img/img2.jpg',
          },
        },
      ],
      likedByUsers: ['mini-user'],
    },
  ];

  _saveStaysToStorage(stays);

  return Promise.resolve(stays);
}

function getById(stayId) {
  return storageService.get(STORAGE_KEY, stayId);
}

function _saveStaysToStorage(stays) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stays));
}
