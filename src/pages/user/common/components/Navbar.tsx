import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarContext } from '../context/SidebarContext';

function Navbar() {
  const { toggle } = useContext(SidebarContext);

  return (
    <div className='fixed inset-x-0 top-0 z-10 flex justify-between bg-gray-800 bg-opacity-100 text-gray-50'>
      <NavLink to='/' className='block p-4 text-xl font-bold'>
        u<span className='text-yellow-500'>Park</span>
      </NavLink>

      {/* Sidebar button */}
      <button
        onClick={toggle}
        className='p-4 mobile-menu-button focus:outline-none focus:bg-gray-700 lg:hidden'
      >
        <svg
          className='w-6 h-6'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </button>
    </div>
  );
}

export default Navbar;
