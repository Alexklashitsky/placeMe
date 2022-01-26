import React from 'react';
import { utilService } from '../services/util.service';

export const StayDetailsHeader = ({ stay }) => {
  let averageRate = utilService.getReviews(stay);
  return (
    <div>
      <div className='stay-header'>
        <h1 className='stay-name'>{stay.name}</h1>
        <section className='stay-details-header'>
          <section className='stay-info'>
            <span className='fas fa-star'></span>
            <p className='stay-rate'>{averageRate.toFixed(2)}</p>
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
    </div>
  );
};
