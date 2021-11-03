import React from "react";

const footer = () => {
 return (
  <section className='w-full flex over-tokens justify-between px-12 sm:px-0 flex-row sm:flex-col bg-medium py-5 items-center'>
   <img className='w-32 hidden sm:block' src='FinalLogo.svg' alt='' />
   <img className='w-20 sm:hidden' src='FinalLogo.svg' alt='' />
   <div className='sm:hidden'>
      <a
        className='transition-colors text-white text-xl duration-100 hover:text-primary glory'
        target='_blank'
        rel='noopener noreferrer'
        href='/WhitePaper.pdf'
        >
        White Paper
      </a>
   </div>
   <div className='flex hidden sm:flex items-center justify-end pt-5 z-10 space-x-5 sm:space-x-10'>
    <a
     className='
       w-7
       sm:w-10
       h-7
       sm:h-10
       transition
       duration-150
       ease-in-out
       transform
       hover:scale-125
      '
     href='https://t.me/joinchat/haNcc0MiOx4zMDNh'
     target='_blank'
    >
     <img src='001-telegram.svg' alt='' />
    </a>
    <a
     className='
       w-7
       sm:w-10
       h-7
       sm:h-10
       transition
       duration-150
       ease-in-out
       transform
       hover:scale-125
      '
     href='https://www.instagram.com/vapurofficial/'
     target='_blank'
    >
     <img src='002-instagram.svg' alt='' />
    </a>

    <a
     className='
       w-7
       sm:w-10
       h-7
       sm:h-10
       transition
       duration-150
       ease-in-out
       transform
       hover:scale-125
      '
     href='https://twitter.com/VapurOfficial'
     target='_blank'
    >
     <img src='004-twitter.svg' alt='' />
    </a>
    <a
     className='
       w-7
       sm:w-10
       h-7
       sm:h-10
       transition
       duration-150
       ease-in-out
       transform
       hover:scale-125
      '
     href='https://www.linkedin.com/company/vapur'
     target='_blank'
    >
     <img src='005-linkedin.svg' alt='' />
    </a>
   </div>
  </section>
 );
};

export default footer;
