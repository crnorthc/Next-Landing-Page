import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const portfolioCompete = () => {
 return (
  <section
   id='portfolioCompete'
   className='bg-dark pt-20 sm:pt-10 pb-10 sm:pb-20 px-5 sm:px-10 over-tokens '
  >
   {/* left pipe */}
   <div className='hidden xl:block absolute bottom-0 left-0 h-full w-20 bg-medium border-t-8 border-t-primary rounded-bl-2xl'></div>
   <div className='hidden xl:block absolute top-0 bottom-10 left-8 w-3  bg-light pipe-shine '></div>

   {/* Robard */}
   <div className='absolute bottom-20 left-5 xl:left-40 w-28 h-16 rounded-t-xl bg-medium '></div>
   <div className='absolute bottom-32 left-5 xl:left-40 w-28 h-4 rounded-full bg-black border-4 border-primary  pipe-primary-shadow'></div>

   {/* Bottom pipe */}
   <div className='absolute bottom-0 left-0 xl:left-20 right-0 h-20 bg-medium  xl:rounded-tr-2xl'></div>
   <div className='absolute bottom-8 right-0 xl:right-10 left-0 xl:left-10 h-3 bg-light pipe-shine'></div>

   <div className='hidden xl:block absolute bottom-0 right-8 h-8 w-3 bg-light pipe-shine'></div>

   <div className='flex flex-col-reverse md:flex-row items-center justify-center space-x-0 sm:space-x-8 lg:space-x-16 container max-w-6xl mx-auto pb-40 md:pb-0'>
    <div className='w-full md:w-1/2 lg:w-1/3'>
     <div className='flex  items-start justify-center pb-10'>
      <div>
       <img
        className='z-20 appleBlock mt-24 w-20 lg:w-32 light-shadow-small rounded-full'
        src='/Guy2.webp'
        alt=''
       />
      </div>
      <img
       className='z-30 nikeBlock w-20 lg:w-36 -m-20 lg:-m-14 light-shadow-small rounded-full'
       src='/Girl1.webp'
       alt=''
      />
      <img
       className='z-10 rightOrbBlock w-16 mt-20 light-shadow-small lg:w-28 rounded-full'
       src='/Guy3.webp'
       alt=''
      />
     </div>
    </div>
    <div className='pb-10 sm:pb-0 w-full md:w-1/2 lg:w-2/3'>
     <h2 className='text-4xl lg:text-5xl glory text-light glory pb-5'>
      4. Watch Your Lineup Compete
     </h2>
     <img
      width='800'
      class='border-8 border-light medium-shadow-big rounded-md '
      src='/portfolioCompete.webp'
      alt=''
     />
    </div>
   </div>

   <div className='absolute bottom-52 xl:bottom-56 left-8 xl:left-40 w-3/4 sm:w-1/2 md:w-1/3 xl:w-1/4 pl-20'>
    <img className='' src='/PickATier.webp' alt='' />
   </div>
   <ScrollAnimation
    animateIn='animate__fadeInUp'
    animateOut='animate__fadeOutDown'
    duration={0.5}
   >
    <img
     className='pb-28 ml-4 sm:ml-0 xl:ml-32 -mb-4 sm:pb-16 sm:-mb-2 z-50 relative w-20'
     src='/robard-head-left-3D.webp'
     alt=''
    />
   </ScrollAnimation>
  </section>
 );
};

export default portfolioCompete;
