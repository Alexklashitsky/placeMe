import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import NotificationIcon from '../assets/imgs/2.svg';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { GuestsFilter } from './GuestsFilter';
import { HamburgerMenu } from './HamburgerMenu';
import { LoginSignupModal } from './LoginSignupModal';
import { setFilterBy } from '../store/stay.action';
import logo from '../assets/imgs/1181191_airbnb_icon.svg';
import { useHistory } from 'react-router-dom';
import {updateText} from '../store/modal.action'

export function _AppHeader() {
  const [toggleLocation, setToggleLocation] = useState(false);
  const [toggleCal, setToggleCal] = useState(false);
  const [toggleGuests, setToggleGuests] = useState(false);
  const [toggleHamburger, setToggleHamburger] = useState(false);
  const [isWhiteHeader, setIsWhiteHeader] = useState(false);
  const [isDetails, setIsDetails] = useState(false);
  const [toggleLoginModal, setToggleLoginModal] = useState(false);
  // const [handleChange, onHandleChange] = useState(false)
  const [filterByText, setFilterByText] = useState(null);
  const filters = useSelector((state) => state.staysModule.filterBy);
  const dispatch = useDispatch();

  const [input, setInput] = useState('');
  const [marker, setMarker] = useState(false);
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isHeaderShown, setIsHeaderShown] = useState(true);

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
  const history = useHistory();

  useEffect(() => {
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

  const onSetFilter = (filterBy) => {
    history.push('/StaySearch');

    const submittedFilter = {
      ...filters,
      name: filterByText,
    };

    dispatch(setFilterBy(submittedFilter));
    //   setFilter(filterBy)
  };
  const onToggleLoginModal = () => {
    setToggleLoginModal(!toggleLoginModal);
  };
  //SCROLL USE EFFECT

  useEffect(() => {
    window.removeEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll);
    setIsHeaderShown(true);
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
      if (window.screen.width <= 500) {
        setIsHeaderShown(false);
      }
    }
    if (window.innerWidth <= 500) setToggleHamburger(true);
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
    restFilters()
    setIsWhiteHeader(false);
    setIsDetails(false);

  };

  const restFilters = () => {
    console.log('rest');
    const reseatedFilter = {
      ...filters, freeCancel: false, additionalFilters: [], minPrice: 0, maxPrice: Infinity,
      city: '', startDate: null, endDate: null, specialStay: "", name: ''
    }
    dispatch(setFilterBy(reseatedFilter));
  }
  // src\assets\imgs\1181191_airbnb_icon.svg
  // console.log('isHeaderShown', isHeaderShown);
  if (!isHeaderShown) return <></>;
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
          <input
            className='test-input'
            type='text'
            value={filterByText}
            onChange={(e) => setFilterByText(e.target.value)}
            placeholder='Start your search'
          />
          <div className='small-search-button' onClick={() => onSetFilter(filterByText)}>
            <SearchIcon onClick={() => onSetFilter({ filterByText })} />
          </div>
        </div>

        <div className='header-center header-bar hidden-bar '>
          <div className='location-container'>
            <div className='container-border'>
              <ul className='clean-list'>
                <li>Location</li>
                <li>
                  {' '}
                  <input
                    placeholder='where are you going'
                    type='text'
                    value={filterByText}
                    onChange={(e) => setFilterByText(e.target.value)}
                  />
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
                {/* {toggleGuests && <GuestsFilter />} */}
                {/* {toggleGuests && <GuestsFilter order={order} stay={stay} />} */}
              </ul>

              <div className='search-button'>
                <SearchIcon onClick={() => onSetFilter({ filterByText })} />
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
        {/* <div>{!user ? <span>None </span> : user.username}</div> */}
        <div className='menu-container'>
          {/* <button  >  click me</button> */}
          <div className='hamburger-container' onClick={onToggleHamburger}>
            {notification && <img className='red-dot' src={NotificationIcon}></img>}

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
                toggleHamburger={toggleHamburger}
              />
            )}
            {toggleLoginModal && <LoginSignupModal onToggleLoginModal={onToggleLoginModal} />}
          </div>
        </div>
      </div>
    </header>
  );
}

function mapStateToProps({ stayModule }) {
  return {
    // stays: stayModule.stay,
    // filterBy: stayModule.filterBy
  };
}

const mapDispatchToProps = {
  setFilterBy,
};

export const AppHeader = connect(mapStateToProps, mapDispatchToProps)(_AppHeader);
