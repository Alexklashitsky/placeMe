import { useEffect, useState } from 'react';
import { StayCheckIn } from '../cmps/StayCheckIn';
import { useParams } from 'react-router-dom';
import { stayService } from '../services/stay.service';
import { ReadMore } from '../cmps/ReadMore';
import { CheckIn } from '../cmps/CheckInHeader';
import { ReviewSummary } from '../cmps/ReviewSummary';
// function getReviews() {
//   const reviews = stay.reviews;
//   const stayAverage =
//     reviews.reduce(function (sum, value) {
//       return sum + value.rate;
//     }, 0) / reviews.length;
//   return stayAverage;
// }

let counter = 0;

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
  const [isLongText, setIsLongText] = useState(false);

  const toggleText = () => {
    setIsLongText(!isLongText);
  };

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

    if (position > 600) {
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
          {stay.imgUrls.map((image, index) => (
            <div key={index} className='image-container'>
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
                {stay.amenities.map((amenity, index) => (
                  <div key={index} className='amenity'>
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
        <ReviewSummary stay={stay} />
        <section className='stay-details-reviews'>
          <ul className='reviews-list-container clean-list'>
            {stay.reviews.map((review, index) => (
              <li key={index} className='review-preview-container'>
                <section>
                  <div className='review-preview-header'>
                    <img className='host-img' src={review.by.imgUrl}></img>
                    <div className='review-preview-text-container'>
                      <li className='fullname'>{review.by.fullname}</li>
                      <li className='date'>{review.createdAt}</li>
                    </div>
                  </div>
                  <span className='txt'>
                    <ReadMore id={review.id} text={review.txt} isLongTxtShown={isLongText} onToggleTxt={toggleText} />
                    {/* {review.txt} */}
                  </span>
                </section>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
