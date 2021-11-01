import React from "react";

const createALineup = () => {
 return (
  <section
   id='createALineup'
   className='bg-dark pt-20 sm:pt-40 pb-10 sm:pb-20 px-5 sm:px-10 over-tokens '
  >
   {/* right pipe */}
   <div className='hidden xl:block absolute bottom-0 right-0 h-full w-20 bg-medium border-t-8 border-t-primary rounded-br-2xl'></div>
   <div className='hidden xl:block absolute top-0 bottom-10 right-8 w-3  bg-light pipe-shine '></div>

   {/* Robard */}
   <div className='absolute bottom-20 right-5 xl:right-40 w-28 h-16 rounded-t-xl bg-medium '></div>
   <div className='absolute bottom-32 right-5 xl:right-40 w-28 h-4 rounded-full bg-black border-4 border-primary pipe-primary-shadow'></div>

   <img
    className='absolute bottom-32 pb-1 right-9 xl:right-44 w-20'
    src='/robard-head-left-3D.png'
    alt=''
   />

   {/* Bottom pipe */}
   <div className='absolute bottom-0 left-0 right-0 xl:right-20  h-20 bg-medium rounded-tl-2xl'></div>
   <div className='absolute bottom-8 left-8 right-0 xl:right-20  h-3 bg-light pipe-shine'></div>
   <div className='hidden xl:block absolute bottom-8 right-8 w-12 h-3 bg-light pipe-shine'></div>
   <div className='hidden xl:block absolute bottom-0 left-8 h-10 w-3 bg-light pipe-shine'></div>

   {/* Content */}
   <div className='flex flex-col md:flex-row items-center justify-center space-x-0 sm:space-x-8 lg:space-x-16  space-y-10 md:space-y-0 container max-w-6xl mx-auto pb-40'>
    <div className='w-full md:w-1/2 lg:w-2/3'>
     <h2 className='text-4xl lg:text-5xl glory text-light glory pb-5'>
      3. Create a Lineup
     </h2>
     <img
      width='800'
      class='border-8 border-light medium-shadow-big rounded-md '
      src='/Lineup.png'
      alt=''
     />
    </div>
    <div className='w-full md:w-1/2 lg:w-1/3'>
     <div className='flex  items-center justify-center pb-10'>
      <img
       className='z-20 appleBlock mt-40 w-24 lg:w-40'
       src='/apple3D.png'
       alt=''
      />
      <img
       className='z-30 nikeBlock w-24 lg:w-44 -m-20 lg:-m-14'
       src='/nike3D.png'
       alt=''
      />
      <img
       className='z-10 pepsiBlock w-24 mt-60  lg:w-36'
       src='/pepsi3D.png'
       alt=''
      />
     </div>
     <div className='relative text-center'>
        <img className='' src='/CloudRight.png' alt='' />
        <div className='text-dark text-over-image w-4/5 text-3xl leading-8 leading-7 md:text-2xl md:leading-8'>
        <p className='pb-3'>
       Allocate $100,000* to your favorite stocks and/or cryptos!
      </p>
      <p className='text-xs'>
       *Simulated Tournament Cash
      </p>
        </div>
     </div>               
    </div>
   </div>
  </section>
 );
};

export default createALineup;
