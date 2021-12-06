import './Home.css';
import 'leaflet/dist/leaflet.css';
import Map from './Map';
import { FormEvent, useCallback, useState } from 'react';
import axios from 'axios';

function Home() {
  const [address, setAddress] = useState('');
  const [position, setPosition] = useState<[number, number]>([0, 0]);
  const [searchPosition, setSearchPosition] = useState<[number, number]>([
    0, 0,
  ]);

  const getAddress = useCallback((value) => {
    setAddress(value);
  }, []);

  const getPosition = useCallback((value) => {
    setPosition(value);
  }, []);

  const searchAddressHandler = async (e: FormEvent) => {
    e.preventDefault();

    const response = await axios.get(
      `https://api.tomtom.com/search/2/geocode/${address}.json?limit=1&countrySet=GR&lat=${position[0]}&lon=${position[1]}&language=el-GR&key=${process.env.REACT_APP_TOMTOM_KEY}`
    );

    console.log(response);

    setAddress(
      response.data.results.length === 0
        ? ''
        : response.data.results[0].address.freeformAddress
    );

    const responsePosition: {
      lat: number;
      lon: number;
    } =
      response.data.results.length === 0
        ? { lat: 0, lon: 0 }
        : response.data.results[0].position;

    setSearchPosition([responsePosition.lat, responsePosition.lon]);
  };

  return (
    <>
      {/* Input field */}
      <form
        onSubmit={(e) => searchAddressHandler(e)}
        className='relative text-gray-700 border-b border-gray-400'
      >
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className='w-full h-10 pl-8 pr-8 text-sm font-semibold placeholder-gray-500 bg-gray-100 border border-gray-100 rounded focus:ring-0 focus:border-gray-200 focus:outline-none focus:bg-white'
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
        <button
          type='submit'
          className='absolute inset-y-0 right-0 flex items-center px-3 bg-yellow-500'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-5 h-5 text-black'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </form>
      <div className='z-0 flex-1 w-full h-screen'>
        <Map
          getAddress={getAddress}
          getPosition={getPosition}
          searchPosition={searchPosition}
        />
      </div>
      <button disabled={false}>Συνέχεια</button>
    </>
  );
}

export default Home;
