import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.png';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <nav className={nav ? 'nav active' : 'nav'}>
      <a href='/' className='logo'>
        <img src={logo} alt='' />
      </a>
      <input type='checkbox' className='menu-btn' id='menu-btn' />
      <label className='menu-icon' htmlFor='menu-btn'>
        <span className='nav-icon'></span>
      </label>
      <ul className='menu'>
        <li>
          <Link to='/' className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/services' className={location.pathname === '/services' ? 'active' : ''}>
            Services
          </Link>
        </li>
        <li>
          <Link to='/screeners' className={location.pathname === '/screeners' ? 'active' : ''}>
            Screeners
          </Link>
        </li>
        <li>
          <Link to='/' className={location.pathname === '/blogs' ? 'active' : ''}>
            Blogs
          </Link>
        </li>
        <li>
          <Link to='/' className={location.pathname === '/login' ? 'active' : ''}>
            Login
          </Link>
        </li>
        <li>
          <Link to='/' className={location.pathname === '/register' ? 'active' : ''}>
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
