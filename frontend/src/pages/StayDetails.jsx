import { useEffect, useState } from 'react';
import { StayCheckIn } from '../cmps/StayCheckIn';
import { useParams } from 'react-router-dom';
import { stayService } from '../services/stay.service';

import { CheckIn } from '../cmps/CheckInHeader';

// function getReviews() {
//   const reviews = stay.reviews;
//   const stayAverage =
//     reviews.reduce(function (sum, value) {
//       return sum + value.rate;
//     }, 0) / reviews.length;
//   return stayAverage;
// }

// const gStays = {
//   _id: '10006546',
//   name: 'Le stanze del castello, la romantica',
//   type: 'house',
//   imgUrls: [
//     'https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large',
//     'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
//     'https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//     'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//     'https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
//   ],
//   price: 80.0,
//   summary:
//     'Beautiful 4 bedroom architecturally designed house, with infinity pool and floor to ceiling views in almost every room of the sea and Cap de Creus national park, in beautiful working fishing village in Northern Greece ',
//   bedrooms: 3,
//   beds: 2,
//   baths: 2,
//   capacity: 8,
//   amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed'],
//   host: {
//     _id: '51399391',
//     fullname: 'Davit Pok',
//     imgUrl: 'https://a0.muscache.com/im/users/22498531/profile_pic/1413294529/original.jpg?im_w=240',
//   },
//   loc: {
//     country: 'Portugal',
//     countryCode: 'PT',
//     address: 'Teggiano, Salerno, Italy',
//     lat: -8.61308,
//     lng: 41.1413,
//   },
//   reviews: [
//     {
//       id: 'madeId',
//       txt: 'Very helpful hosts. Cooked traditional...',
//       rate: 4.93,
//       createdAt: new Date(2217123174455).toLocaleString('default', {
//         month: 'long',
//         year: 'numeric',
//       }),
//       by: {
//         _id: 'u102',
//         fullname: 'Miri',
//         imgUrl: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Free-Image.png',
//       },
//     },
//     {
//       id: 'madeId',
//       txt: 'Lorem laboriosam est quaerat asperiores architecto nemo numquam nobis sequi recusandae iste amet facere, esse minima voluptatem nihil. Omnis recusandae at deleniti unde veniam, iure commodi similique sunt perferendis repellendus nisi fugiat facilis voluptas consequatur doloremque.',
//       rate: 4,
//       createdAt: new Date(2114123174455).toLocaleString('default', {
//         month: 'long',
//         year: 'numeric',
//       }),
//       by: {
//         _id: 'u102',
//         fullname: 'Miri',
//         imgUrl: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Free-Image.png',
//       },
//     },
//     {
//       id: 'madeId',
//       txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, rerum reprehenderit. Magni accusamus quos expedita laboriosam est quaerat asperiores architecto nemo numquam nobis sequi recusandae iste amet facere, esse minima voluptatem nihil. Omnis recusandae at deleniti unde veniam, iure commodi similique sunt perferendis repellendus nisi fugiat facilis voluptas consequatur doloremque.',
//       rate: 4,
//       createdAt: new Date(2214124174455).toLocaleString('default', {
//         month: 'long',
//         year: 'numeric',
//       }),
//       by: {
//         _id: 'u102',
//         fullname: 'Miri',
//         imgUrl: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Free-Image.png',
//       },
//     },
//     {
//       id: 'madeId',
//       txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, rerum reprehenderit. Magni accusamus quos expedita laboriosam est quaerat asperiores architecto nemo numquam nobis sequi recusandae iste amet facere, esse minima voluptatem nihil. Omnis recusandae at deleniti unde veniam, iure commodi similique sunt perferendis repellendus nisi fugiat facilis voluptas consequatur doloremque.',
//       rate: 1,
//       createdAt: new Date(2214123174455).toLocaleString('default', {
//         month: 'long',
//         year: 'numeric',
//       }),
//       by: {
//         _id: 'u103',
//         fullname: 'Dudi',
//         imgUrl: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Free-Image.png',
//       },
//     },
//   ],
// };

function getAmenity(amenity) {
  switch (amenity) {
    case 'TV':
      return 'fas fa-tv';
    case 'Wifi':
      return 'fas fa-wifi';
    case 'Kitchen':
      return 'fas fa-kitchen';
    case 'Smoking allowed':
      return 'fas fa-smoking';
    case 'Pets allowed':
      return 'fas fa-pet';
  }
}

// useParams
export function StayDetails(props) {
  const [stay, setStay] = useState(false);
  const [modal, setModal] = useState(false);

  //STAY USE EFFECT
  const { stayId } = useParams();

  useEffect(() => {
    getById(stayId).then((stay) => {
      setStay(stay);
    });
  }, []);

  const getById = (stayId) => {
    return stayService.getById(stayId).then((stay) => {
      return stay;
    });
  };

  // SCROLL USE EFFECT
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    console.log('position:', position);

    if (position > 1600) {
      setModal(true);
    } else {
      setModal(false);
    }
  };

  if (!stay) return <div>loading</div>;

  return (
    <div className='entire-layout stay-details-container'>
      {!modal ? <div></div> : <CheckIn stay={stay} />}
      <div className='center-layout'>
        <div className='stay-header'>
          <h1 className='stay-name'>{stay.name}</h1>
          <section className='stay-details-header'>
            <section className='stay-info'>
              <span className='fas fa-star'></span>
              <p className='stay-rate'>{stay.reviews[0].rate}</p>
              <p className='stay-details-dot'>·</p>
              <p className='reviews'>{stay.reviews.length} reviews </p>
              <p className='stay-details-dot'> · </p>
              <a href='' className='stay-address'>
                {stay.loc.address}
              </a>
            </section>
            <section className='social'>
              <span className='fas fa-share'>
                {'  '}
                <span className='text'> Share</span>{' '}
              </span>
              <span className='far fa-empty-heart'>
                {'  '}
                <span className='text'> Save</span>
              </span>
            </section>
          </section>
        </div>
        <section className='stay-details-images'>
          {stay.imgUrls.map((image) => (
            <div className='image-container'>
              <img src={image} />
            </div>
          ))}
        </section>
        <section className='divider'>
          <section className='left-side'>
            <section className='stay-detail-host-description'>
              <section className='stay-details-hosted'>
                <span className='hosted-by'>
                  An amazing {stay.type} hosted by {stay.host.fullname}.
                </span>
                <section className='stay-details-hosted-info'>
                  <span className='beds'>
                    {stay.capacity} guests <span className='dot'> · </span>
                    {stay.bedrooms} bedroom <span className='dot'> · </span>
                    {stay.beds} beds <span className='dot'> · </span>
                    {stay.baths} baths <span className='dot'> </span>
                  </span>
                </section>
              </section>
              <section>
                <img className='host-img' src={stay.host.imgUrl}></img>
              </section>
            </section>
            <section className='stay-details-description'>{stay.summary}</section>
            <section className='ameneties'>
              <h1 className='title'>What this place offers</h1>
              <section className='stay-details-ameneties'>
                {stay.amenities.map((amenity) => (
                  <div className='amenity'>
                    <span className={`${getAmenity(amenity)}`}></span>
                    <p>{amenity}</p>
                  </div>
                ))}
              </section>
            </section>
            <section className='stay-details-description'>
              {stay.summary +
                ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, rerum reprehenderit. Magni accusamus quos expedita laboriosam est quaerat asperiores architecto nemo numquam nobis sequi recusandae iste amet facere, esse minima voluptatem nihil. Omnis recusandae at deleniti unde veniam, iure commodi similique sunt perferendis repellendus nisi fugiat facilis voluptas consequatur doloremque.'}
            </section>
          </section>
          <section className='right-side'>
            <StayCheckIn stay={stay} />
          </section>
        </section>

        <section className='stay-details-reviews'>
          <ul className='reviews-list-container clean-list'>
            {stay.reviews.map((review) => (
              <li className='review-preview-container'>
                <section>
                  <div className='review-preview-header'>
                    <img className='host-img' src={review.by.imgUrl}></img>
                    <div className='review-preview-text-container'>
                      <li className='fullname'>{review.by.fullname}</li>
                      <li className='date'>{review.createdAt}</li>
                    </div>
                  </div>
                  <span className='txt'>{review.txt}</span>
                </section>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
