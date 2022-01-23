import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function AppHeader() {
  const [isHeader, setIsHeader] = useState(false);
  const [isDetails, setIsDetails] = useState(false);

  //SCROLL USE EFFECT

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      setIsHeader(true);
    }

    if (location.pathname.includes('/stay/')) {
      console.log(':inside details');
      setIsDetails(true);
    }
  }, [location]);

  const handleScroll = () => {
    if (location.pathname !== '/') return;
    const position = window.pageYOffset;
    if (position > 1) {
      setIsHeader(true);
    } else setIsHeader(false);
  };

  return (
    <header
      className={`header ${isHeader ? 'white-header' : 'black-header'} ${isDetails ? 'details details-header' : ''}`}>
      <section className='header-content'>
        <Link to='/' className='header_icon clean-link'>
          <h1>PlaceMe</h1>
        </Link>

        <div className={`header-center-container ${isHeader ? 'small-filter-button' : 'big-filter-bar'} `}>
          {isHeader && (
            <div className='header__center'>
              <input type='text' />
              <SearchIcon />
            </div>
          )}
          {!isHeader && (
            <div className='header__bar'>
              <input type='text' />
              <SearchIcon />
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
      </section>
    </header>
  );
}
