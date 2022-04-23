import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  const userLoggedIn = () => localStorage.getItem('access_token') === null;

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <a className='navbar-brand' href='#main'>
        ISIS3710
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav me-auto'>
          <li className='nav-item active'>
            <Link className='nav-link' to='/gallery'>
              Gallery
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/contact-form'>
              Contact
            </Link>
          </li>
          <li className='nav-item' style={{display: userLoggedIn ? 'block' : 'none'}}>
            <Link className='nav-link' to='/products'>
              Products
            </Link>
          </li>
        </ul>
        <ul className='navbar-nav' style={{display: !userLoggedIn ? 'block' : 'none'}}>
          <li className='nav-item'>
            <Link className='nav-link' to='/login'>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
