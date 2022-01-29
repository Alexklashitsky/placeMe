import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { GuestsFilter } from './GuestsFilter';
import { HamburgerMenu } from './HamburgerMenu';
import { LoginSignupModal } from './LoginSignupModal';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../assets/imgs/1181191_airbnb_icon.svg';

export function AppHeader() {
  const [toggleLocation, setToggleLocation] = useState(false);
  const [toggleCal, setToggleCal] = useState(false);
  const [toggleGuests, setToggleGuests] = useState(false);
  const [toggleHamburger, setToggleHamburger] = useState(false);
  const [isWhiteHeader, setIsWhiteHeader] = useState(false);
  const [isDetails, setIsDetails] = useState(false);
  const [toggleLoginModal, setToggleLoginModal] = useState(false);
  const [input, setInput] = useState('');
  const [marker, setMarker] = useState(false);
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);

  const user = useSelector((state) => state?.userModule.user);

  // const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  }, [user]);

  const notification = useSelector((state) => state?.ordersModule.notification);

  useEffect(() => {
    console.log('notification:', notification);

    if (!notification) {
      setMarker(false);
    } else {
      setMarker(true);
    }
  }, [notification]);

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

  const onToggleLoginModal = () => {
    // console.log('toggle login modal: ', this.props.toggleLoginModal);
    setToggleLoginModal(!toggleLoginModal);
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
      setIsWhiteHeader(true);
    }
    if (location.pathname.includes('/StaySearch')) {
      setIsDetails(false);
      setIsWhiteHeader(true);
    }
    if (location.pathname.includes('/Trips')) {
      setIsDetails(false);
      setIsWhiteHeader(true);
    }
    if (location.pathname.includes('/Orders')) {
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
  // src\assets\imgs\1181191_airbnb_icon.svg
  return (
    <header
      className={`full header ${isWhiteHeader ? 'white-header' : 'black-header'} ${
        isDetails && 'details details-header'
      } `}>
      <Link to='/' className='header_icon clean-link'>
        <img className='header-logo' src={logo} alt='sfsdfs' />
        <h1 onClick={backPage}>Hosty</h1>
      </Link>

      <div className={`header-center-container`}>
        <div className={`header-center hidden-search`}>
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
              <ul className='clean-list'>
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
          <Link to='/BecomeHost' className='clean-link'>
            Become a Host{' '}
          </Link>
        </div>
        <div>{!user ? <span>None </span> : user.username}</div>
        <div className='menu-container'>
          {notification ? <div className='red-dot'>🔴</div> : <div></div>}

          <div className={!loggedIn ? 'hamburger-container' : 'hamburger-container-red'} onClick={onToggleHamburger}>
            <MenuIcon />
            <AccountCircleIcon />
          </div>
          {toggleHamburger && <div onClick={onToggleHamburger} className='bg'></div>}
          {toggleLoginModal && <div onClick={onToggleLoginModal} className='bg'></div>}

          {toggleHamburger && (
            <HamburgerMenu
              onToggleHamburger={onToggleHamburger}
              setToggleLoginModal={setToggleLoginModal}
              toggleLoginModal={toggleLoginModal}
            />
          )}
          {toggleLoginModal && <LoginSignupModal onToggleLoginModal={onToggleLoginModal} />}
        </div>
      </div>
    </header>
  );
}
