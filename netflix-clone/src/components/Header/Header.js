import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className='showcase'>
      <div className='showcase-top'>
            <img src='https://i.ibb.co/r5krrdz/logo.png' alt='logo' />
            <Link to="/" className='btn btn-rounded btn-header'>
              Sign in
            </Link>      
      </div>
      <div className='showcase-content'>
        <h1>Unlimited Movies, TV Showes and More</h1>
        <p>Watch Anywhere, Cancel Anytime</p>
        <Link to="/netflix-show" className='btn btn-xl btn-header'>
          Watch Free for 30 Days
          <i className='fas fa-chevron-right btn-icon'></i>
        </Link>

      </div>
    </header>
  )
}

export default Header
