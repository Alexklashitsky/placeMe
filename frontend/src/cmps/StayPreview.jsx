import { Link } from 'react-router-dom'
export function StayPreview({ stay }) {




    return (



        <Link className="clean-link" to={`/stay/${stay._id}`}>
            <article className="stay-preview">
                <img src={stay.imgUrls[0]} alt="" />
                <div className='preview-body flex'  >
                    <h4>  {stay.loc.address}</h4>
                    <h4> {stay.price} per night</h4>
                </div>

            </article>
        </Link>




    )
}