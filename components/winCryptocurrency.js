import React from "react";

const winCryptocurrency = () => {
 return (
  <section
   id='winCryptocurrency'
   className='bg-dark pt-20 sm:pt-40 pb-10 sm:pb-20 px-5 sm:px-10 over-tokens '
  >
   {/* right pipe */}
   <div className='hidden xl:block absolute bottom-0 right-0 h-full w-20 bg-medium xl:rounded-br-2xl border-t-8 border-t-primary'></div>
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
   <div className='absolute bottom-0 left-0 right-0 xl:right-20  h-20 bg-medium '></div>
   <div className='absolute bottom-8 left-0 right-0 xl:right-10  h-3 bg-light pipe-shine'></div>

   <div className='flex flex-col md:flex-row items-center justify-center space-x-0 sm:space-x-8 lg:space-x-16  space-y-10 md:space-y-0 container max-w-6xl mx-auto pb-40'>
    <div className='w-full md:w-1/2 lg:w-2/3'>
     <h2 className='text-4xl lg:text-5xl glory text-light glory pb-5'>
      5. Win Cryptocurrency!!!
     </h2>
     <img
      width='800'
      class='border-8 border-light light-shadow-big rounded-md '
      src='/WinCrypto.png'
      alt=''
     />
    </div>
    <div className='w-full md:w-1/2 lg:w-1/3'>
     <div className='flex  items-center justify-center pb-10'>
      <img
       className='z-20 pepsiBlock mt-40 w-20 lg:w-36'
       src='/MoneyBag.png'
       alt=''
      />
      <img
       className='z-30 nikeBlock w-24 lg:w-44 -m-20 lg:-m-14'
       src='/MoneyBag.png'
       alt=''
      />
      <img
       className='z-10 appleBlock w-24 mt-60  lg:w-40'
       src='/MoneyBag.png'
       alt=''
      />
     </div>
     <div className='relative text-center'>
      <img className='' src='/CloudRight.png' alt='' />
      <div className='text-dark text-over-image w-4/5 text-3xl leading-8 leading-7 md:text-2xl md:leading-8'>
       <p className='  pb-6'>
        If you make the cut, you take your share of the tournament's pot!
       </p>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default winCryptocurrency;
