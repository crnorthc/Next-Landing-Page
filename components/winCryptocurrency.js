import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const winCryptocurrency = () => {
 return (
  <section
   id='winCryptocurrency'
   className='bg-dark pt-12 xs:pt-20 sm:pt-10 pb-10 sm:pb-20 px-5 sm:px-10 over-tokens '
  >
   {/* right pipe */}
   <div className='hidden xl:block absolute bottom-0 right-0 h-full w-20 bg-medium xl:rounded-br-2xl border-t-8 border-t-primary'>
   <div className='hidden xl:block absolute top-0 bottom-8 right-8 w-3  bg-light pipe-shine '></div>
   <div className='hidden xl:block absolute bottom-8 right-8 h-3 w-10 bg-light pipe-shine'></div>
   </div>

   {/* Robard */}
   <div className='absolute z-50 bottom-20 right-5 xl:right-40 w-28 h-12 z-50 bg-medium '></div>
   <div className='absolute bottom-32 right-5 xl:right-40 w-28 h-4 rounded-full bg-black border-4 border-primary pipe-primary-shadow'></div>

   {/* Bottom pipe */}
   <div className='absolute bottom-0 z-50 left-0 right-0 xl:right-20 xl:border-r-8 border-primary  h-20 bg-medium'>
   <div className='absolute w-full bottom-8 z-50 left-0 right-0 xl:right-12  h-3 bg-light pipe-shine'></div>
   </div>   
   

   <div className='flex flex-col md:flex-row items-center justify-center space-x-0 sm:space-x-8 lg:space-x-16  space-y-10 md:space-y-0 container max-w-6xl mx-auto pb-28 sm:32 md:pb-0'>
    <div className='w-full md:w-3/5 lg:w-2/3'>
     <h2 className='text-3xl xs:text-4xl lg:text-5xl glory text-light glory pb-5'>
      5. Win Cryptocurrency!!!
     </h2>
     <img
      width='800'
      class='border-4 border-primary medium-shadow-big rounded-md '
      src='/WinCrypto.webp'
      alt=''
     />
    </div>
    <div className='w-full w-1/3'>
     <div className='hidden md:flex items-start justify-center pb-8'>
      <img
       className='z-20 pepsiBlock mt-8 w-16 lg:w-24'
       src='/MoneyBag.png'
       alt=''
      />
      <img
       className='z-30 nikeBlock w-24 lg:w-32'
       src='/MoneyBag.png'
       alt=''
      />
      <img
       className='z-10 appleBlock w-20 mt-8 lg:w-28'
       src='/MoneyBag.png'
       alt=''
      />
     </div>
    </div>
   </div>
   <div className='absolute w-5/6 xs:w-2/3 sm:w-2/5 pl-12 md:w-1/4 lg:w-1/4 bottom-56 right-28 md:right-28 md:bottom-56 xl:right-60'>
    <img className='' src='/Win.webp' alt='' />
   </div>
   <div className='flex flex-row justify-end'>
    <ScrollAnimation
     animateIn='animate__fadeInUp'
     animateOut='animate__fadeOutDown'
     duration={0.5}
    >
     <img
      className='relative z-40 mb-24 sm:mb-14 xl:mr-32 mr-4 md:-mr-2 w-20'
      src='/robard-head-left-3D.webp'
      alt=''
     />
    </ScrollAnimation>
   </div>
  </section>
 );
};

export default winCryptocurrency;
