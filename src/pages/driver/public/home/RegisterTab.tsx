import axios from 'axios';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IRegisterResponseData } from '../../common/driver.interfaces';

function RegisterTab() {
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
    <form onSubmit={registerFormHandler} className='flex flex-col'>
      <div className='px-3 pb-4 mb-6 -ml-6 -mr-6 text-center border-b border-gray-200'>
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
        className='w-full py-2 font-semibold text-white bg-blue-600 rounded shadow-md sm:mx-auto hover:bg-blue-700 focus:bg-blue-500 md:w-1/2'
      >
        Εγγραφή
      </button>
    </form>
  );
}

export default RegisterTab;
