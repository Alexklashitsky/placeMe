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
    // console.log('position:', position);
    if (position > 1) {
      setIsHeader(true);
    } else setIsHeader(false);
  }
  return (
    <header className={`header ${isHeader ? 'white-header' : 'black-header'}`}>
      <Link to='/' className="header_icon clean-link">
        <h1>PlaceMe</h1>
      </Link>

      <div className={`header-center-container ${isHeader ? 'small-filter-button' : 'big-filter-bar'}`}>
      {isHeader && <div className='header__center'>

          <input type='text' />
          <SearchIcon />
        </div>}
      {!isHeader && <div className='header__bar'>

          <input type='text' />
          <SearchIcon />
        </div>}
      </div>

      <div className='header__right'>
        <div className="nav-link" ><Link to='/StaySearch' className="clean-link"> Explore</Link></div>
        <div className="nav-link" ><Link to='/' className="clean-link">Become a Host </Link></div>

        <div className='menu-container'>
          <MenuIcon />
          <AccountCircleIcon />
        </div>

      </div>
    </header >
  );
}
