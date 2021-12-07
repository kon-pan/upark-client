import { useContext } from 'react';

import Navbar from '../../common/components/Navbar';
import Sidebar from '../../common/components/Sidebar';
import { AuthContext } from '../../common/context/AuthContext';
import { SidebarContext } from '../../common/context/SidebarContext';
import Hero from './Hero';
import Tabs from './Tabs';
import AuthHome from '../../auth/home/Home';

function Home() {
  const { close } = useContext(SidebarContext);
  const user = useContext(AuthContext);

  return (
    <div className='lg:flex lg:flex-col'>
      <Navbar />
      <div className='relative md:min-h-screen md:flex'>
        <Sidebar />

        {/* Page main content */}
        <div
          className='flex flex-col items-center flex-1 min-h-screen pt-16 -mt-1 text-2xl font-bold bg-gray-200 bg-opacity-25'
          onClick={() => close(true)}
        >
          {!user ? (
            <>
              <div className='w-10/12 my-8 bg-white shadow sm:w-8/12 md:w-6/12 lg:hidden'>
                <Tabs />
              </div>

              {/* <div className='w-10/12 px-8 py-4 mt-8 bg-white shadow sm:w-8/12 md:w-6/12 lg:hidden'>
                <LoginFormSmall />
              </div> */}
              {/* Hidden on small devices */}
              <Hero />
            </>
          ) : (
            <AuthHome />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
