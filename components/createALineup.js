import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const createALineup = () => {
 return (
  <section
   id='createALineup'
   className='bg-dark pt-20 sm:pt-20 pb-10 sm:pb-20 px-5 sm:px-10 over-tokens '
  >
   {/* right pipe */}
   <div className='hidden xl:block absolute bottom-0 right-0 h-full w-20 bg-medium border-t-8 border-t-primary rounded-br-2xl'></div>
   <div className='hidden xl:block absolute top-0 bottom-10 right-8 w-3  bg-light pipe-shine '></div>

   {/* Robard */}
   <div className='absolute z-50 bottom-20 right-5 xl:right-40 w-28 h-12 bg-medium '></div>
   <div className='absolute bottom-32 right-5 xl:right-40 w-28 h-4 rounded-full bg-black border-4 border-primary pipe-primary-shadow'></div>

   {/* Bottom pipe */}
   <div className='absolute z-50 bottom-0 left-0 right-0 xl:right-20  h-20 bg-medium rounded-tl-2xl'></div>
   <div className='absolute z-50 bottom-8 left-8 right-0 xl:right-20  h-3 bg-light pipe-shine'></div>
   <div className='hidden xl:block absolute bottom-8 right-8 w-12 h-3 bg-light pipe-shine'></div>
   <div className='hidden xl:block absolute bottom-0 left-8 h-10 w-3 bg-light pipe-shine'></div>

   {/* Content */}
   <div className='flex flex-col md:flex-row items-center justify-start lg:justify-center space-x-0 sm:space-x-8 lg:space-x-16  space-y-10 md:space-y-0 container max-w-6xl mx-auto pb-40 sm:pb-20 md:pb-0'>
    <div className='w-full md:w-3/5 lg:w-2/3'>
     <h2 className='text-4xl lg:text-5xl glory text-light glory pb-5'>
      3. Create a Lineup
     </h2>
     <img
      width='800'
      class='border-8 border-light medium-shadow-big rounded-md '
      src='/Lineup.webp'
      alt=''
     />
    </div>
    <div className='w-full md:w-1/2 lg:w-1/3'>
     <div className='hidden md:flex items-start justify-center pb-10'>
      <img
       className='z-20 appleBlock w-24 lg:w-40'
       src='/apple3D.webp'
       alt=''
      />
      <img
       className='z-30 nikeBlock w-24 lg:w-44 -m-10 lg:-m-14'
       src='/nike3D.webp'
       alt=''
      />
      <img
       className='z-10 pepsiBlock w-24 lg:w-36'
       src='/pepsi3D.webp'
       alt=''
      />
     </div>             
    </div>
   </div>
   <div className='absolute w-2/3 sm:w-2/5 pl-12 md:w-1/4 lg:w-1/4 xl:w-1/5 bottom-56 right-28 md:right-28 md:bottom-56 xl:right-60'>
         <img className='' src='/Allocate.png' alt='' />
    </div>  
    <div className='flex flex-row justify-end'>
    <ScrollAnimation animateIn='animate__fadeInUp' animateOut='animate__fadeOutDown' duration={.5}>
         <img className='relative z-40 mb-24 sm:mb-14 xl:mr-32 mr-4 md:-mr-2 w-20' src='/robard-head-left-3D.webp' alt=''/>
   </ScrollAnimation>
    </div>
  </section>
 );
};

export default createALineup;
