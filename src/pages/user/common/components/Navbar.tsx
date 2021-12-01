import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex justify-evenly'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/register'>Register</NavLink>
    </div>
  );
}

export default Navbar;
