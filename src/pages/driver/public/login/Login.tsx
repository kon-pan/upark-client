import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import LoginForm from './LoginForm';

function Login() {
  const [searchParams] = useSearchParams();
  const registerSuccess = searchParams.get('registerSuccess');

  const [open, setOpen] = useState(true);

  return (
    <div className='flex flex-col min-h-screen space-y-6 bg-gray-200 bg-opacity-25'>
      {/* Header */}
      <div className='p-4 text-sm border-b border-gray-200 shadow-sm'>
        <Link
          to='/'
          className='flex items-center font-semibold text-blue-600 hover:underline'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-5 h-5'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z'
              clipRule='evenodd'
            />
          </svg>
          <div>Επιστροφή στην αρχική σελίδα</div>
        </Link>
      </div>
      {/* Main */}
      <div className='flex flex-col items-center space-y-6'>
        {/* Logo */}
        <div className='text-3xl font-bold'>
          u<span className='text-yellow-600'>Park</span>
        </div>
        {registerSuccess === 'true' && (
          <div className={open ? 'flex w-10/12 p-4 text-sm text-green-800 bg-green-100 rounded shadow' : 'hidden w-10/12 p-4 text-sm text-green-800 bg-green-100 rounded shadow' }>
          
            <div>Ο λογαριασμός σας δημιουργήθηκε με επιτυχία.</div>
            <svg
              onClick={() => setOpen(false)}
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        )}
        {/* Login form */}
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
