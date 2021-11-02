import React from "react";

const chooseATier = () => {
 return (
  <section
   id='chooseATier'
   className='bg-dark pt-20 sm:pt-40 pb-10 sm:pb-20 px-5 sm:px-10 over-tokens '
  >
   {/* left pipe */}
   <div className='hidden xl:block absolute bottom-0 left-0 h-full w-20 bg-medium border-t-8 border-t-primary rounded-bl-2xl'></div>
   <div className='hidden xl:block absolute top-0 bottom-10 left-8 w-3  bg-light pipe-shine '></div>

   {/* Robard */}
   <div className='absolute bottom-20 left-5 xl:left-40 w-28 h-16 rounded-t-xl bg-medium '></div>
   <div className='absolute bottom-32 left-5 xl:left-40 w-28 h-4 rounded-full bg-black border-4 border-primary pipe-primary-shadow'></div>

   <img
    className='absolute bottom-32 pb-1 left-9 xl:left-44 w-20'
    src='/robard-head-left-3D.png'
    alt=''
   />

   {/* Bottom pipe */}
   <div className='absolute bottom-0 left-0 xl:left-20 right-0 h-20 bg-medium  xl:rounded-tr-2xl'></div>
   <div className='absolute bottom-8 right-0 xl:right-10 left-0 xl:left-10  h-3 bg-light pipe-shine'></div>

   <div className='hidden xl:block absolute bottom-0 right-8 h-8 w-3 bg-light pipe-shine'></div>

   {/* content */}
   <div className='flex flex-col-reverse md:flex-row items-center justify-center space-x-0 sm:space-x-8 lg:space-x-16 container max-w-6xl mx-auto pb-60'>
    <div className='w-full md:w-1/2 lg:w-1/3'>
     <div className='flex  items-center justify-center pb-10'>
      <img
       className='sexyRobard w-64 lg:w-96'
       src='/FrameWithRobard.png'
       alt=''
      />
     </div>
     <div className='relative text-center'>
      <img className='' src='/CloudLeft.png' alt='' />
      <div className='text-dark text-over-image w-4/5 text-3xl leading-8 leading-7 md:text-2xl md:leading-8'>
       <p className='pb-3'>
        This is a Tiered Tournament, the tier you select determines your winning
        bonus.
       </p>
      </div>
     </div>
    </div>
    <div className='pb-10 sm:pb-0 w-full md:w-1/2 lg:w-2/3'>
     <h2 className='text-4xl lg:text-5xl glory text-light glory pb-5'>
      2. Place Your Wagers
     </h2>
     <img
      width='800'
      class='border-8 border-light light-shadow-big rounded-md '
      src='/chooseATier.png'
      alt=''
     />
    </div>
   </div>
  </section>
 );
};

export default chooseATier;
