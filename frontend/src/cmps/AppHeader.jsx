import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function AppHeader() {
  const [isHeader, setIsHeader] = useState(false);

  //SCROLL USE EFFECT

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 1) {
      setIsHeader(true);
    } else setIsHeader(false);
  };
  return (
    <header className={`header ${isHeader ? 'white-header' : 'black-header'}`}>
      <Link to='/' className='header_icon clean-link'>
        <h1>PlaceMe</h1>
      </Link>

      <div className={`header-center-container ${isHeader ? 'small-filter-button' : 'big-filter-bar'}`}>
        {isHeader && (
          <div className='header-center'>
            <input type='text' />
            <SearchIcon />
          </div>
        )}
        {!isHeader && (
          <div className='header-center header-bar '>

            <div className='location-container'>
              <div className='container-border'>
                <ul className='clean-list'>
                  <li>Location</li>
                  <li> <input placeholder='where are you going' type='text' /></li>
                </ul>
              </div>
            </div>

            <div className='date-container'>
              <div className='container-border'>
                <ul className='clean-list'>
                  <li>Check in</li>
                  <li> <input placeholder='add dates' type='text' /></li>
                </ul>
              </div>
            </div>

            <div className='date-container'>
              <div className='container-border'>
                <ul className='clean-list'>
                  <li>Check out</li>
                  <li> <input placeholder='add dates' type='text' /></li>
                </ul>
              </div>
            </div>

            <div className='guests-container'>
              <div className='container-border'>
                <ul className='clean-list'>
                  <li>Guests</li>
                  <li> <input placeholder='add guests' type='text' /></li>
                </ul>
                <div className='search-button'>
                  <SearchIcon />
                </div>
              </div>
            </div>



          </div>
        )}
      </div>

      <div className='header__right'>
        <div className='nav-link'>
          <Link to='/StaySearch' className='clean-link'>
            {' '}
            Explore
          </Link>
        </div>
        <div className='nav-link'>
          <Link to='/' className='clean-link'>
            Become a Host{' '}
          </Link>
        </div>

        <div className='menu-container'>
          <MenuIcon />
          <AccountCircleIcon />
        </div>
      </div>
    </header>
  );
}
