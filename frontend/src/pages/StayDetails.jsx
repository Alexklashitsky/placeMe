import { useEffect, useState } from 'react';
import { StayCheckIn } from '../cmps/StayCheckIn';
import { useParams } from 'react-router-dom';
import { stayService } from '../services/stay.service';
import { CheckIn } from '../cmps/CheckInHeader';
import { ReviewSummary } from '../cmps/ReviewSummary';
import { MyMap } from '../cmps/Map';
import { StayDetailsPics } from '../cmps/StayDetailsPics';
import { StayReviews } from '../cmps/StayReviews';
import { StayDetailsHeader } from '../cmps/StayDetailsHeader';
import { CircularIndeterminate } from '../cmps/Loader';

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
    case 'Garden view':
      return 'fas fa-tree';
    case 'Private patio':
      return 'fas fa-patio';
    case 'Free parking':
      return 'fas fa-car';
    case 'Outdoor shower':
      return 'fas fa-shower';
  }
}

// useParams
export function StayDetails(props) {
  const [stay, setStay] = useState(false);
  const [modal, setModal] = useState(false);
  const [isLongText, setIsLongText] = useState(false);
  const [currModal, setCurrModal] = useState(false);

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

  if (!stay) return <CircularIndeterminate />;

  return (
    <div className='entire-layout stay-details-container'>
      {!modal ? <div></div> : <CheckIn stay={stay} />}
      <div id='jump-to-photos' className='center-layout'>
        <StayDetailsHeader stay={stay} />
        <StayDetailsPics stay={stay} />
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
            <section id='jump-to-amenities' className='ameneties'>
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
        <div id='jump-to-reviews'>
          <ReviewSummary stay={stay} />
          <StayReviews stay={stay} />
        </div>
        <div id='jump-to-location'>
          <section className='map'>
            <span className='map-title'>Where you'll be</span>
            <span className='map-location'>{stay.loc.address}</span>
            <MyMap stay={stay} />
          </section>
        </div>
      </div>
    </div>
  );
}
