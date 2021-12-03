import { FormEvent, useState } from 'react';
import googleIcon from '../../common/img/google.svg';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginFormHandler = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={(e) => loginFormHandler(e)}
      className='w-10/12 p-8 text-center bg-white shadow md:w-8/12 md:max-w-sm'
    >
      <div className='pb-4 mb-8 -ml-8 -mr-8 font-semibold border-b border-gray-200'>
        Συνδεθείτε στο λογαριασμό σας.
      </div>

      <div className='relative mb-2 text-gray-700'>
        <input
          className='w-full h-10 pl-3 pr-3 text-sm font-semibold placeholder-gray-500 bg-gray-100 border border-gray-100 rounded focus:ring-0 focus:border-gray-200 focus:outline-none focus:bg-white'
          type='text'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Διεύθυνση ηλ. ταχυδρομείου'
        />
      </div>

      <div className='relative mb-2 text-gray-700'>
        <input
          className='w-full h-10 pl-3 pr-3 text-sm font-semibold placeholder-gray-500 bg-gray-100 border border-gray-100 rounded focus:ring-0 focus:border-gray-200 focus:outline-none focus:bg-white'
          type='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Κωδικός ασφαλείας'
        />
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

      <hr className='my-3' />

      <button className='flex items-center justify-center w-full px-3 py-2 space-x-2 text-sm text-white bg-red-600 rounded shadow-md hover:bg-red-700 focus:bg-red-500'>
        <img src={googleIcon} alt='' srcSet='' />
        <div>
          Συνδεθείτε μέσω <span className='font-semibold'>Google</span>
        </div>
      </button>
    </form>
  );
}

export default LoginForm;
