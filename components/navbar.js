import React, { useEffect } from "react";
import { useState } from "react";

const navbar = () => {
 const [open, setOpen] = useState(false);

 return (
  <div>
   <div className='sm:hidden'>
    <div
     className='
                relative
                p-5
                flex
                flex-col
                '
    >
     <div className='flex flex-row w-full justify-between items-center'>
      <img className='w-20 block' src='FinalLogo.svg' alt='' />
     </div>
    </div>
   </div>
   <div className='fixed w-full z-20'>
    <div className='hidden sm:block'>
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
       <img className='w-20 block' src='FinalLogo.svg' alt='' />
      </div>
      <div className='space-x-4 text-xl text-light'>
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
   </div>
  </div>
 );
};

export default navbar;
