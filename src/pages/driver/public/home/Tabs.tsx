import React, { useState } from 'react';
import LoginTab from './LoginTab';
import RegisterTab from './RegisterTab';
import googleIcon from '../../common/img/google-colored.svg';

function Tabs() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className='flex flex-col text-base'>
      {/* Tab selection */}
      <div className='flex w-full text-center'>
        <div
          className={
            activeTab === 1
              ? 'w-1/2 p-2 border-b-2 border-yellow-600 cursor-pointer'
              : 'w-1/2 p-2 border-b-2 border-gray-200 cursor-pointer'
          }
          onClick={() => setActiveTab(1)}
        >
          Σύνδεση
        </div>
        <div
          className={
            activeTab === 2
              ? 'w-1/2 p-2 border-b-2 border-yellow-600 cursor-pointer'
              : 'w-1/2 p-2 border-b-2 border-gray-200 cursor-pointer'
          }
          onClick={() => setActiveTab(2)}
        >
          Εγγραφή
        </div>
      </div>
      {/* Tab content */}
      <div>
        <div className='px-6 py-4'>
          {activeTab === 1 && <LoginTab />}
          {activeTab === 2 && <RegisterTab />}
        </div>
        <div className='flex items-center justify-center py-4 space-x-4 border-t border-gray-200'>
          {/* <button className='flex items-center px-3 py-2 mx-auto space-x-2 text-sm text-white bg-red-600 rounded shadow-md hover:bg-red-700 focus:bg-red-500'>
            <img src={googleIcon} alt='' srcSet='' />
            <div>
              Συνδεθείτε μέσω <span className='font-semibold'>Google</span>
            </div>
          </button> */}
          <div className='font-normal'>Συνδεθείτε μέσω: </div>
          <button className='flex items-center px-3 py-2 space-x-2 text-sm text-white rounded-full shadow bg-gray-50 hover:bg-gray-100 focus:bg-white'>
            <img src={googleIcon} width='32' height='32' alt='' srcSet='' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
