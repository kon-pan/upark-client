import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import googleIcon from '../../common/img/google.svg';
import { IRegisterResponseData } from '../../common/driver.interfaces';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [firstNameErr, setFirstNameErr] = useState('');
  const [lastNameErr, setLastNameErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [passwordConfirmErr, setPasswordConfirmErr] = useState('');

  const navigate = useNavigate();

  const registerFormHandler = async (e: FormEvent) => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      email,
      password,
      passwordConfirm,
    };

    console.log(`${process.env.REACT_APP_SERVER_HOSTNAME}/driver/register`);

    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_HOSTNAME}/driver/register`,
      data
    );

    const responseData: IRegisterResponseData = response.data;

    if (responseData.registerSuccess) {
      console.log(
        `responseData.registerSuccess = ${responseData.registerSuccess}`
      );
      navigate('/login?registerSuccess=true', { replace: true });
    } else {
      console.log(
        `responseData.registerSuccess = ${responseData.registerSuccess}`
      );
      setFirstNameErr(responseData.firstNameErr);
      setLastNameErr(responseData.lastNameErr);
      setEmailErr(responseData.emailErr);
      setPasswordErr(responseData.passwordErr);
      setPasswordConfirmErr(responseData.passwordConfirmErr);
    }
  };

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
        {/* Register form */}
        <form
          onSubmit={(e) => registerFormHandler(e)}
          className='flex flex-col w-10/12 px-8 py-4 bg-white rounded shadow sm:w-8/12 lg:max-w-xl'
        >
          <div className='pb-4 mb-8 -ml-8 -mr-8 text-lg font-bold text-center border-b border-gray-200'>
            Δημιουργήστε ένα καινούριο λογαριασμό.
          </div>
          <div className='flex flex-col md:flex-row md:space-x-2'>
            <div className='relative mb-2 text-gray-700 md:w-1/2'>
              <input
                className={
                  firstNameErr
                    ? 'w-full h-10 pl-3 pr-3 text-sm font-semibold placeholder-red-600 bg-red-100 border border-red-600 rounded focus:ring-0 focus:border-gray-200 focus:outline-none focus:bg-white'
                    : 'w-full h-10 pl-3 pr-3 text-sm font-semibold placeholder-gray-500 bg-gray-100 border border-gray-100 rounded focus:ring-0 focus:border-gray-200 focus:outline-none focus:bg-white'
                }
                type='text'
                name='first-name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder='Όνομα'
              />
              {firstNameErr && (
                <div className='mt-0.5 text-xs font-normal text-red-600'>
                  {firstNameErr}
                </div>
              )}
            </div>

            <div className='relative mb-2 text-gray-700 md:w-1/2'>
              <input
                className={
                  lastNameErr
                    ? 'w-full h-10 pl-3 pr-3 text-sm font-semibold placeholder-red-600 bg-red-100 border border-red-600 rounded focus:ring-0 focus:border-gray-200 focus:outline-none focus:bg-white'
                    : 'w-full h-10 pl-3 pr-3 text-sm font-semibold placeholder-gray-500 bg-gray-100 border border-gray-100 rounded focus:ring-0 focus:border-gray-200 focus:outline-none focus:bg-white'
                }
                type='text'
                name='last-name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder='Επίθετο'
              />
              {lastNameErr && (
                <div className='mt-0.5 text-xs font-normal text-red-600'>
                  {lastNameErr}
                </div>
              )}
            </div>
          </div>

          <div className='relative mb-2 text-gray-700'>
            <input
              className={
                emailErr
                  ? 'w-full h-10 pl-3 pr-3 text-sm font-semibold placeholder-red-600 bg-red-100 border border-red-600 rounded focus:ring-0 focus:border-gray-200 focus:outline-none focus:bg-white'
                  : 'w-full h-10 pl-3 pr-3 text-sm font-semibold placeholder-gray-500 bg-gray-100 border border-gray-100 rounded focus:ring-0 focus:border-gray-200 focus:outline-none focus:bg-white'
              }
              type='text'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Διεύθυνση ηλ. ταχυδρομείου'
            />
            {emailErr && (
              <div className='mt-0.5 text-xs font-normal text-red-600'>
                {emailErr}
              </div>
            )}
          </div>

          <div className='relative mb-2 text-gray-700'>
            <input
              className={
                passwordErr
                  ? 'w-full h-10 pl-3 pr-3 text-sm font-semibold placeholder-red-600 bg-red-100 border border-red-600 rounded focus:ring-0 focus:border-gray-200 focus:outline-none focus:bg-white'
                  : 'w-full h-10 pl-3 pr-3 text-sm font-semibold placeholder-gray-500 bg-gray-100 border border-gray-100 rounded focus:ring-0 focus:border-gray-200 focus:outline-none focus:bg-white'
              }
              type='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Κωδικός ασφαλείας'
            />
            {passwordErr && (
              <div className='mt-0.5 text-xs font-normal text-red-600'>
                {passwordErr}
              </div>
            )}
          </div>

          <div className='relative mb-2 text-gray-700'>
            <input
              className={
                passwordConfirmErr
                  ? 'w-full h-10 pl-3 pr-3 text-sm font-semibold placeholder-red-600 bg-red-100 border border-red-600 rounded focus:ring-0 focus:border-gray-200 focus:outline-none focus:bg-white'
                  : 'w-full h-10 pl-3 pr-3 text-sm font-semibold placeholder-gray-500 bg-gray-100 border border-gray-100 rounded focus:ring-0 focus:border-gray-200 focus:outline-none focus:bg-white'
              }
              type='password'
              name='password-confirm'
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              placeholder='Επαλήθευση κωδικoύ ασφαλείας'
            />
            {passwordConfirmErr && (
              <div className='mt-0.5 text-xs font-normal text-red-600'>
                {passwordConfirmErr}
              </div>
            )}
          </div>

          <button
            type='submit'
            className='w-full py-2 mx-auto font-semibold text-white bg-blue-600 rounded shadow-md hover:bg-blue-700 focus:bg-blue-500 md:w-1/2'
          >
            Εγγραφή
          </button>

          <hr className='my-3' />

          <button className='flex items-center px-3 py-2 mx-auto space-x-2 text-sm text-white bg-red-600 rounded shadow-md hover:bg-red-700 focus:bg-red-500'>
            <img src={googleIcon} alt='' srcSet='' />
            <div>
              Συνδεθείτε μέσω <span className='font-semibold'>Google</span>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
