import './Home.css';
import 'leaflet/dist/leaflet.css';
import Map from './Map';
import { useCallback, useState } from 'react';

function Home() {
  const [address, setAddress] = useState('');

  const getAddress = useCallback((value) => {
    setAddress(value);
  }, []);

  console.log(address);

  return (
    <>
      {/* Input field */}
      <div className='relative text-gray-700'>
        <input
          value={address}
          onChange={() => setAddress(address)}
          className='w-full h-10 pl-8 pr-3 text-sm font-semibold placeholder-gray-500 bg-gray-100 border border-gray-100 rounded focus:ring-0 focus:border-gray-200 focus:outline-none focus:bg-white'
          placeholder='Εισάγετε τη διεύθυνση σας...'
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
              d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
              clipRule='evenodd'
            />
          </svg>
        </div>
      </div>
      <div className='z-0 flex-1 w-full h-screen'>
        <Map getAddress={getAddress} />
      </div>
      <button disabled={false}>Συνέχεια</button>
    </>
  );
}

export default Home;
