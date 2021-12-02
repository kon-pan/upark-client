import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../common/components/Navbar';
import Sidebar from '../../common/components/Sidebar';
import Sidebarv2 from '../../common/components/Sidebarv2';
import { AuthContext } from '../../common/context/AuthContext';
import { SidebarContext } from '../../common/context/SidebarContext';

function Home() {
  // const [openSidebar, setOpenSidebar] = useState<boolean>();
  const user = useContext(AuthContext);
  const { close } = useContext(SidebarContext);

  // console.log(user);

  // const getOpen = (value: any) => {
  //   setOpenSidebar(value);
  // };

  // useEffect(() => {
  //   let handler = (e: any) => {
  //     if (!ref?.current.contains(e.target)) {
  //       close(true);

  //       document.addEventListener('mousedown', handler);
  //     }
  //   };
  //   return () => {
  //     document.removeEventListener('mousedown', handler);
  //   };
  // }, [close]);

  return (
    <div className='lg:flex lg:flex-col'>
      {/* <Navbar getOpen={getOpen} /> */}
      <Navbar />
      <div className='relative min-h-screen md:flex'>
        {/* <Sidebar show={openSidebar} /> */}
        <Sidebarv2 />

        {/* Page main content */}
        <div
          className='flex flex-col items-center flex-1 pt-20 text-2xl font-bold'
          onClick={() => close(true)}
        >
          <div>content goes here</div>
          <div>content goes here</div>
          <div>content goes here</div>
          <div>content goes here</div>
          <div>content goes here</div>
          <div>content goes here</div>
          <div>content goes here</div>
          <div>content goes here</div>
          <div>content goes here</div>
          <div>content goes here</div>
          <div>content goes here</div>
          <div>content goes here</div>
          <div>content goes here</div>
          <div>content goes here</div>
          <div>content goes here</div>
          <div>content goes here</div>
          <div>content goes here</div>
          <div>content goes here</div>
          <div>content goes here</div>
          <div>content goes here</div>
          <div>content goes here</div>
          <div>content goes here</div>
          <div>content goes here</div>
          <div>content goes here</div>
          <div>content goes here</div>
          <div>content goes here</div>
          <div>content goes here</div>
          <div>content goes here</div>
          <div>content goes here</div>
          <div>content goes here</div>
          <div>content goes here</div>
          <div>content goes here</div>
          <div>content goes here</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
