import React from "react";

function team() {
 return (
  <section className='bg-dark py-10 sm:py-20 px-5 sm:px-10' id='team'>
   <h2 className='text-light text-5xl sm:text-6xl text-center pb-10 glory'>
    Team
   </h2>
   <div className='flex flex-col items-center justify-center lg:items-start lg:flex-row'>
    <div className='flex-1 p-5 flex flex-col items-center justify-center'>
     <img className='w-2/4 lg:w-1/3 rounded-md' src='profile.png' alt='' />

     <a
      className='
       transition-colors
       text-light 
       duration-100
       hover:text-primary
       
       text-center
       lg:text-left
       pt-5
       block
       glory
       text-3xl
       sm:text-4xl
       
      '
      target='_blank'
      rel='noopener noreferrer'
      href='https://www.linkedin.com/in/caleb-northcott/'
     >
      Caleb Northcott
     </a>
     <p className='text-light text-center lg:text-left text-xl z-10'>
      Co-Founder & Backend Engineer
     </p>
     <p className='text-light pt-5 text-xl sm:text-xl text-center'>
      Graduating from Eckerd College with a Bachelor of Science in Computer
      Science and Economics, Blockchain technology has always been an interest
      of Caleb’s. Since 2017, Caleb has actively traded both cryptocurrencies
      and U.S equities, where the inspiration for Vapur was born.
     </p>
    </div>
    <div className='flex-1 p-5 flex flex-col items-center justify-center'>
     <img className='w-2/4 lg:w-1/3 rounded-md' src='matt.png' alt='' />

     <a
      className='
       transition-colors
       text-light text-center
       lg:text-left
       pt-5
       glory
       text-3xl
       sm:text-4xl
       duration-100
       hover:text-primary
      '
      target='_blank'
      rel='noopener noreferrer'
      href='https://www.linkedin.com/in/matthew-klimek-37629b153/'
     >
      Matthew Klimek
     </a>
     <p className='text-light text-center lg:text-left text-xl z-10'>
      Co-Founder & UI/UX Engineer
     </p>
     <p className='text-light pt-5 text-xl sm:text-xl text-center'>
      Matthew began his official digital exploration back in 2015 when he
      co-authored a book about digital marketing with Jay Berkowitz. In 2020 he
      recieved a bachelor's degree in Computer Science from Eckerd College.
      Today, he owns a profitable delta-8 distribution company.
     </p>
    </div>
   </div>
  </section>
 );
}

export default team;
