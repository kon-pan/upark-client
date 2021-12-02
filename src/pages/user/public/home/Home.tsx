import React, { useContext } from 'react';
import Navbar from '../../common/components/Navbar';
import Sidebarv2 from '../../common/components/Sidebarv2';
import { SidebarContext } from '../../common/context/SidebarContext';

function Home() {
  const { close } = useContext(SidebarContext);

  return (
    <div className='lg:flex lg:flex-col'>
      {/* <Navbar getOpen={getOpen} /> */}
      <Navbar />
      <div className='relative min-h-screen md:flex'>
        {/* <Sidebar show={openSidebar} /> */}
        <Sidebarv2 />

        {/* Page main content */}
        <div
          className='flex flex-col items-center flex-1 h-screen pt-16 -mt-1 text-2xl font-bold bg-gray-200 bg-opacity-25'
          onClick={() => close(true)}
        >
          {/* Hero section */}
          <div className='flex-col hidden lg:w-8/12 lg:flex'>
            {/* Hero Title */}
            <div className='my-8 text-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              alias harum corporis.s
            </div>
            {/* Hero body */}
            <div className='flex items-center py-4 space-x-6 xl:space-x-12'>
              <div className='flex flex-col items-center w-1/2 space-y-6 text-lg font-light'>
                <div className='text-justify'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Error beatae aspernatur vero molestiae voluptatibus sunt,
                  rerum doloremque. Odit, saepe quae fugiat numquam,
                  exercitationem at inventore ad eaque, quaerat rerum vitae!
                </div>
                <button
                  type='button'
                  className='w-1/2 px-3 py-1.5 rounded text-white focus:bg-blue-500 hover:bg-blue-700 shadow-md text-base font-semibold bg-blue-600'
                >
                  Εγγραφή
                </button>
              </div>
              <div className='flex flex-col items-center w-1/2'>
                <form className='w-full px-5 py-6 bg-white rounded shadow-md'>
                  <div className='mb-4 text-lg'>
                    Συνδεθείτε στο λογαριασμό σας.
                  </div>
                  <div className='relative mb-2 text-gray-700'>
                    <input
                      className='w-full h-10 pl-8 pr-3 text-sm font-semibold placeholder-gray-500 bg-gray-100 border border-gray-100 rounded focus:ring-0 focus:border-gray-200 focus:outline-none focus:bg-white'
                      type='text'
                      placeholder='Διεύθυνση ηλ. ταχυδρομείου'
                    />
                    <div className='absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-5 h-5 text-gray-500'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                  </div>
                  <div className='relative mb-2 text-gray-700'>
                    <input
                      className='w-full h-10 pl-8 pr-3 text-sm font-semibold placeholder-gray-500 bg-gray-100 border border-gray-100 rounded focus:ring-0 focus:border-gray-200 focus:outline-none focus:bg-white'
                      type='password'
                      placeholder='Κωδικός ασφαλείας'
                    />
                    <div className='absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-5 h-5 text-gray-500'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                        />
                      </svg>
                    </div>
                  </div>
                  <button
                    type='submit'
                    className='flex items-center justify-center w-full py-2 space-x-2 text-base font-semibold text-white bg-yellow-600 rounded shadow'
                  >
                    <div>Είσοδος</div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-5 h-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className='w-full'>content goes here</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
