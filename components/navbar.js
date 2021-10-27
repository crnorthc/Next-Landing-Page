import React from "react";

const navbar = () => {
 return (
  <div className='fixed w-full z-20'>
   <div
    className='
     home-nav
     relative
     p-5
     flex flex-col
     sm:flex-row
     items-center
     justify-between
    '
   >
    <div>
     <img className='w-20 hidden sm:block' src='FinalLogo.svg' alt='' />
     <img className='w-20 sm:hidden' src='FinalLogo.svg' alt='' />
    </div>
    <div className='space-x-1 sm:space-x-4 text-sm pt-2 sm:pt-0 sm:text-xl text-light'>
     <a
      className='transition-colors duration-100 hover:text-primary glory'
      href='#features'
     >
      Features
     </a>
     <a
      className='transition-colors duration-100 hover:text-primary glory'
      href='#roadmap'
     >
      Roadmap
     </a>
     <a
      className='transition-colors duration-100 hover:text-primary glory'
      target='_blank'
      rel='noopener noreferrer'
      href='/WhitePaper.pdf'
     >
      White Paper
     </a>
     <a
      className='transition-colors duration-100 hover:text-primary glory'
      href='#team'
     >
      Team
     </a>
    </div>
   </div>
  </div>
 );
};

export default navbar;