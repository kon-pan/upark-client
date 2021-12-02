import React from 'react';
import { Transition } from '@headlessui/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../context/SidebarContext';
import { AuthContext } from '../context/AuthContext';

function Sidebarv2() {
  const { isOpen } = useContext(SidebarContext);
  const user = useContext(AuthContext);

  return (
    <>
      {user ? (
        <div
          className={
            isOpen
              ? 'absolute z-10 lg:z-0 lg:mt-16 inset-y-0 left-0 w-64 px-2 space-y-6 text-blue-100 transition duration-200 ease-in-out transform -translate-x-0 bg-gray-700 sidebar py-7 lg:relative lg:translate-x-0'
              : 'absolute z-10 lg:z-0 lg:mt-14 inset-y-0 left-0 w-64 px-2 space-y-6 text-blue-100 transition duration-200 ease-in-out transform -translate-x-full bg-gray-700 sidebar py-7 lg:relative lg:translate-x-0'
          }
        >
          <Link to='/' className='flex items-center px-4 space-x-2 text-white'>
            <svg
              className='w-8 h-8'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
              />
            </svg>
            <span className='text-2xl font-extrabold'>Auth</span>
          </Link>

          <nav>
            <Link
              to='/'
              className='block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white'
            >
              Home
            </Link>
            <Link
              to='/'
              className='block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white'
            >
              Profile
            </Link>
            <Link
              to='/'
              className='block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white'
            >
              Settings
            </Link>
          </nav>
        </div>
      ) : (
        <Transition
          show={isOpen}
          enter='transition-opacity duration-75'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-150'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          className='absolute inset-y-0 left-0 z-10 w-64 px-2 space-y-6 text-blue-100 bg-blue-800 sidebar py-7 md:relative md:translate-x-0'
        >
          <Link to='/' className='flex items-center px-4 space-x-2 text-white'>
            <svg
              className='w-8 h-8'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
              />
            </svg>
            <span className='text-2xl font-extrabold'>Better Dev</span>
          </Link>

          <nav>
            <Link
              to='/'
              className='block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white'
            >
              Αρχική Σελίδα
            </Link>
            <Link
              to='/'
              className='block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white'
            >
              Πληροφορίες
            </Link>
            <Link
              to='/'
              className='block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white'
            >
              Είσοδος
            </Link>
          </nav>
        </Transition>
      )}
    </>
  );
}

export default Sidebarv2;
