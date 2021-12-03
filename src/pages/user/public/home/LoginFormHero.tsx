
function LoginFormHero() {
  return (
    <form className='w-full max-w-sm px-5 py-6 bg-white rounded shadow-md'>
      <div className='mb-4 text-lg'>Συνδεθείτε στο λογαριασμό σας.</div>
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
        className='flex items-center justify-center w-full py-2 space-x-2 text-base font-semibold text-white bg-yellow-600 rounded shadow hover:bg-yellow-700 focus:bg-yellow-500'
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
  );
}

export default LoginFormHero;
