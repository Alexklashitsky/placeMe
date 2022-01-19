import React from 'react'
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function AppHeader() {
  return (
    <header className='header'>
      <Link to='/' className=" gradient-text clean-link">
        <h1>PlaceMe</h1>
      </Link>

      <div className='header__center'>
        <input type="text" />
        <SearchIcon />
      </div>

      <div className='header__right'>
        <p>explore</p>
        <p>Become a host</p>
        <MenuIcon />
        <AccountCircleIcon />
      </div>
    </header>
  )
}
