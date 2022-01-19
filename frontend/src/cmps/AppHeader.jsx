import React from 'react';
import { Link } from 'react-router-dom';
// import SearchIcon from '@mui/icons-material/Search';

export function AppHeader() {
  return (
    <header className='header'>
      <Link to='/' className='clean-link'>
        <h1>PlaceMe</h1>
      </Link>

      <div className='header__center'>
        <input type='text' />
        {/* <SearchIcon /> */}
      </div>

      <div className='header__right'>
        <p>explore</p>
        <p>Become a host</p>
        {/* <LanguageIcon /> */}
        {/* <ExpandMoreIcon /> */}
        {/* <Avatar /> */}
      </div>
    </header>
  );
}
