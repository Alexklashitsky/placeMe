import { Link } from 'react-router-dom';
export function StayPreview({ stay }) {
  return (
    <Link className='clean-link' to={`/stay/${stay._id}`}>
      <article className='card'>

        <div className='img-container'>
          <img src={stay.imgUrls[0]} alt='' />
        </div>

        <div className='preview-body flex card-info'>

            <div className='address-container'>
              <h2> {stay.loc.address}</h2>
            </div>

            <div className='info-container text-right'>
              <h4> {stay.price} /night</h4>
            </div>
          <div className='info-container'>
            <h4>25 kilometers away</h4>
          </div>

          <div className='info-container text-right'>
            <h4 >jan 23-30</h4>
          </div>


        </div>

    </article>
    </Link >
  );
}
