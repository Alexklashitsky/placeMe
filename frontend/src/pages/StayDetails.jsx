import { stayService } from '../services/stay.service';

import React from 'react';
const gStays = {
  _id: '10006546',
  name: 'Ribeira Charming Duplex',
  type: 'House',
  imgUrls: [
    'https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large',
    'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    'https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
  ],
  price: 80.0,
  summary: 'Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...',
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
    // {
    //   id: 'madeId',
    //   txt: 'Very helpful hosts. Cooked traditional...',
    //   rate: 10,
    //   by: {
    //     _id: 'u102',
    //     fullname: 'user2',
    //     imgUrl: '/img/img2.jpg',
    //   },
    // },
  ],
};

// function getReviews() {
//   const reviews = gStays.reviews;
//   const stayAverage =
//     reviews.reduce(function (sum, value) {
//       return sum + value.rate;
//     }, 0) / reviews.length;
//   return stayAverage;
// }

export class StayDetails extends React.Component {
  state = { stay: null };

  //   componentDidMount() {
  //     const { stayId } = this.props.match.params;

  //     this.getById('10006546').then((stay) => {
  //       this.setState({ stay });
  //     });
  //   }

  //   getById = (stayId) => {
  //     return stayService.getById(stayId).then((stay) => {
  //       return stay;
  //     });
  //   };

  render() {
    const images = gStays.imgUrls;
    return (
      <div className='center-layout'>
        <h1 className='stay-name'>{gStays.name}</h1>
        <section className='stay-details-header'>
          <section className='stay-info'>
            <h4 className='stay-rate'>{gStays.reviews[0].rate}</h4>
            <span className='stay-details-dot'>•</span>
            <h4 className='stay-address'>{gStays.loc.address}</h4>
          </section>
          <section className='social'>
            <h4>Share</h4>
            <h4>Save</h4>
          </section>
        </section>
        <section className='stay-details-images'>
          {images.map((image) => {
            <img src={image}></img>;
          })}
        </section>
      </div>
    );
  }
}
