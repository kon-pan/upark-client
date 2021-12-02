import React, { useContext } from 'react';
import Navbar from '../../common/components/Navbar';
import Sidebarv2 from '../../common/components/Sidebarv2';
import { SidebarContext } from '../../common/context/SidebarContext';

function Home() {
  const { close } = useContext(SidebarContext);

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
