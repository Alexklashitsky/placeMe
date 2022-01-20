import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function AppHeader() {
  return (
    <header className='header'>
      <Link to='/' className="header_icon clean-link">
        <h1>PlaceMe</h1>
      </Link>

      <div className='header__center'>
        <input type='text' />
        <SearchIcon />
      </div>

      <div className='header__right'>
        <div className="nav-link" ><Link to='/StaySearch' className="clean-link"> Explore</Link></div>
        <div className="nav-link" ><Link to='/' className="clean-link">Become a Host </Link></div>
        <MenuIcon />
        <AccountCircleIcon />
      </div>
    </header>
  );
}
