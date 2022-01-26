import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { GuestsFilter } from './GuestsFilter';


export function AppHeader() {
  const [toggleLocation, setToggleLocation] = useState(false);
  const [toggleCal, setToggleCal] = useState(false);
  const [toggleGuests, setToggleGuests] = useState(false);
  const [toggleHamburger, setToggleHamburger] = useState(false);
  const [isWhiteHeader, setIsWhiteHeader] = useState(false);
  const [isDetails, setIsDetails] = useState(false);
  const location = useLocation();

  const onToggleLocation = () => {
    setToggleLocation(!toggleLocation);
  };
  const onToggleCal = () => {
    setToggleCal(!toggleCal);
  };
  const onToggleGuests = () => {
    setToggleGuests(!toggleGuests);
  };
  const onToggleHamburger = () => {
    setToggleHamburger(!toggleHamburger);
  };
  //SCROLL USE EFFECT

  useEffect(() => {
    window.removeEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll);
    if (location.pathname === '/') {
      setIsWhiteHeader(false);
    }
    if (location.pathname.includes('/stay')) {
      setIsDetails(true);
    }
    if (location.pathname.includes('/StaySearch')) {
      setIsDetails(false);
      setIsWhiteHeader(true);

    }
    if (location.pathname.includes('/BecomeHost')) {
      setIsDetails(false);
      setIsWhiteHeader(true);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  const handleScroll = () => {
    if (location.pathname !== '/') return;
    const position = window.pageYOffset;
    if (position > 0) {
      setIsWhiteHeader(true);
    } else setIsWhiteHeader(false);
  };

  const backPage = () => {
    setIsWhiteHeader(false);
    setIsDetails(false);
  };

  return (
    <header
      className={`full header ${isWhiteHeader ? 'white-header' : 'black-header'} ${isDetails ? 'details details-header' : ''} `}>
      <Link to='/' className='header_icon clean-link'>
        <h1 onClick={backPage}>PlaceMe</h1>
      </Link>

      <div className={`header-center-container`}>

        <div className={`header-center hidden-search`}>
          <input type='text' />
          <div className='small-search-button'>
            <SearchIcon />
          </div>
        </div>


        <div className='header-center header-bar hidden-bar '>
          <div className='location-container'>
            <div className='container-border'>
              <ul className='clean-list'>
                <li>Location</li>
                <li>
                  {' '}
                  <input placeholder='where are you going' type='text' />
                </li>
              </ul>
            </div>
          </div>

          <div className='date-container'>
            <div className='container-border'>
              <ul className='clean-list'>
                <li>Check in</li>
                <li>
                  {' '}
                  <input placeholder='add dates' type='text' />
                </li>
              </ul>
            </div>
          </div>

          <div className='date-container'>
            <div className='container-border'>
              <ul className='clean-list'>
                <li>Check out</li>
                <li>
                  {' '}
                  <input placeholder='add dates' type='text' />
                </li>
              </ul>
            </div>
          </div>

          <div className='guests-container' onClick={onToggleGuests}>
            <div className='container-border'>
              <ul className='clean-list' >
                <li>Guests</li>
                <li>
                  {' '}
                  <input placeholder='add guests' type='text' />
                </li>
                {toggleGuests && <GuestsFilter />}
                {/* {toggleGuests && <GuestsFilter order={order} stay={stay} />} */}
              </ul>
              <div className='search-button'>
                <SearchIcon />
              </div>
            </div>
          </div>
        </div>
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
