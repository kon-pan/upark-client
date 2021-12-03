import { Link } from 'react-router-dom';
import LoginFormHero from './LoginFormHero';

function Hero() {
  return (
    <div className='flex-col hidden lg:w-8/12 lg:flex'>
      {/* Hero Title */}
      <div className='my-8 text-center'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam alias
        harum corporis.s
      </div>
      {/* Hero body */}
      <div className='flex items-center justify-center py-4'>
        <div className='flex flex-col items-center w-1/2 max-w-md mr-8 text-lg font-light'>
          <div className='mb-6 text-justify'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
            beatae aspernatur vero molestiae voluptatibus sunt, rerum
            doloremque. Odit, saepe quae fugiat numquam, exercitationem at
            inventore ad eaque, quaerat rerum vitae!
          </div>
          <Link
            to='/register'
            className='w-1/2 px-3 text-center py-1.5 rounded text-white focus:bg-blue-500 hover:bg-blue-700 shadow-md text-base font-semibold bg-blue-600'
          >
            Εγγραφή
          </Link>
        </div>
        <div className='flex flex-col items-center w-1/2'>
          <LoginFormHero />
        </div>
      </div>
    </div>
  );
}

export default Hero;
