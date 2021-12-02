import { Menu, Transition } from '@headlessui/react';
import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { SidebarContext } from '../context/SidebarContext';
import { AuthContext } from '../context/AuthContext';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

function Navbar() {
  const { toggle } = useContext(SidebarContext);
  const user = useContext(AuthContext);

  return (
    <div className='fixed inset-x-0 top-0 z-10 flex items-center justify-between pl-4 space-x-4 bg-gray-800 bg-opacity-100 lg:px-3 text-gray-50'>
      <NavLink to='/' className='block py-4 text-xl font-bold'>
        u<span className='text-yellow-500'>Park</span>
      </NavLink>
      {!user && (
        <div className='justify-between hidden w-full text-sm lg:flex'>
          <nav className='flex'>
            <Link
              to='/'
              className='block py-1.5 px-3 transition duration-200 rounded hover:bg-gray-700 hover:text-white'
            >
              Αρχική Σελίδα
            </Link>
            <Link
              to='/'
              className='block py-1.5 px-3 transition duration-200 rounded hover:bg-gray-700 hover:text-white'
            >
              Πληροφορίες
            </Link>
          </nav>

          {/* Actions */}
          <nav className='flex'>
            <Link
              to='/'
              className='block py-1.5 px-3 transition duration-200 rounded font-semibold bg-yellow-600 hover:bg-yellow-700 hover:text-white'
            >
              Είσοδος
            </Link>
            <Link
              to='/'
              className='block py-1.5 px-3 transition duration-200 rounded hover:bg-blue-700 text-white'
            >
              Εγγραφή
            </Link>
          </nav>
        </div>
      )}

      {user && (
        <Menu as='div' className='relative text-left'>
          <div>
            <Menu.Button className='hidden p-2 bg-gray-700 rounded-full lg:block'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items className='absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
              <div className='py-1'>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to=''
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Account settings
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to='/'
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Support
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to='/'
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      License
                    </Link>
                  )}
                </Menu.Item>
                <form method='POST' action='#'>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type='submit'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block w-full text-left px-4 py-2 text-sm'
                        )}
                      >
                        Sign out
                      </button>
                    )}
                  </Menu.Item>
                </form>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      )}

      {/* Sidebar button */}
      <button
        onClick={toggle}
        className='p-4 focus:outline-none focus:bg-gray-700 lg:hidden'
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
