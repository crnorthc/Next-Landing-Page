import React from "react";

function team() {
 return (
  <section
   className='bg-dark pt-20 sm:pt-40 pb-10 sm:pb-20 px-5 sm:px-10 over-tokens h-screen relative'
   id='team'
  >
   {/* left pipe */}
   <div className='hidden xl:block absolute bottom-0 left-0 h-full w-20 bg-medium border-t-8 border-t-primary rounded-bl-2xl'></div>
   <div className='hidden xl:block absolute top-0 bottom-10 left-8 w-3  bg-light pipe-shine '></div>

   {/* right pipe */}
   <div className='hidden xl:block absolute bottom-0 right-0 h-full w-20 bg-medium border-t-8 border-t-primary rounded-bl-2xl'></div>
   <div className='hidden xl:block absolute top-0 bottom-10 right-8 w-3  bg-light pipe-shine '></div>

   {/* Robard */}
   <div className='absolute bottom-20 left-5 xl:left-40 w-28 h-16 rounded-t-xl bg-medium '></div>
   <div className='absolute bottom-32 left-5 xl:left-40 w-28 h-4 rounded-full bg-black border-4 border-primary  pipe-primary-shadow'></div>

   <img
    className='absolute bottom-32 pb-1 left-9 xl:left-44 w-20'
    src='/robard-head-left-3D.png'
    alt=''
   />

   {/* Bottom pipe1 */}
   <div className='absolute bottom-1/2 left-0 xl:left-1/4 right-0 h-20 bg-medium  rounded-tr-2xl'></div>
   <div className='absolute bottom-1/2 right-8 left-0 xl:left-20  h-3 bg-light pipe-shine'></div>
   <div className='hidden xl:block absolute bottom-1/2 left-10 w-10 h-3 bg-light pipe-shine'></div>
   <div className='hidden xl:block absolute bottom-1/2 right-8 h-10 w-3 bg-light pipe-shine'></div>

   {/* Bottom pipe2 */}
   <div className='absolute bottom-1/4 left-0 xl:left-20 xl:right-1/4 h-20 bg-medium '></div>
   <div className='absolute bottom-1/4 right-8 left-0 xl:left-20  h-3 bg-light pipe-shine'></div>
   <div className='hidden xl:block absolute bottom-1/4 left-10 w-10 h-3 bg-light pipe-shine'></div>
   <div className='hidden xl:block absolute bottom-1/4 right-8 h-10 w-3 bg-light pipe-shine'></div>

   <h2 className='text-light text-5xl sm:text-6xl text-center pb-10 glory'>
    Team
   </h2>
   {/* <div className='flex flex-col items-center justify-center lg:items-start lg:flex-row'>
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
   */}
  </section>
 );
}

export default team;
