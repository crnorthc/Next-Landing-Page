import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const chooseATier = () => {
 return (
  <section
   id='chooseATier'
   className='bg-dark pt-10 pb-10 sm:pb-20 px-5 sm:px-10 over-tokens '
  >
   {/* left pipe */}
   <div className='hidden xl:block absolute bottom-0 left-0 h-full w-20 bg-medium border-t-8 border-t-primary rounded-bl-2xl'>
   <div className='hidden xl:block absolute top-0 bottom-10 left-8 w-3  bg-light pipe-shine '></div>
   </div>   

   {/* Robard */}
   <div className='absolute z-50 bottom-20 left-5 xl:left-40 w-28 h-12 bg-medium '></div>
   <div className='absolute bottom-32 left-5 xl:left-40 w-28 h-4 rounded-full bg-black border-4 border-primary pipe-primary-shadow'></div>

   {/* Bottom pipe */}
   <div className='absolute z-50 bottom-0 left-0 xl:left-20 right-0 h-20 bg-medium xl:rounded-tr-2xl'>
   <div className='absolute z-50 bottom-8 right-8 left-0 xl:left-20  h-3 bg-light pipe-shine'></div>   
   <div className='hidden xl:block absolute bottom-0 right-8 h-10 w-3 bg-light pipe-shine'></div>
   <div className='hidden z-50 xl:block absolute bottom-8 w-20 h-3 bg-light pipe-shine'></div>
   </div>

   {/* content */}
   <div className='flex flex-col-reverse md:flex-row items-center justify-center space-x-0 sm:space-x-8 lg:space-x-16 container max-w-6xl mx-auto pb-32 md:pb-16 '>
    <div className='w-full w-1/3'>
     <div className='flex  items-center justify-center xs:pb-10'>
      <img
       className='sexyRobard w-64 hidden md:block lg:w-96'
       src='/FrameWithRobard.webp'
       alt=''
      />
     </div>
    </div>
    <div className='pb-5 sm:pb-0 w-full md:w-2/3'>
     <h2 className='text-4xl pb-8 lg:text-5xl glory text-light glory'>
      2. Place Your Wagers
     </h2>
     <img
      width='800'
      class='border-4 border-primary medium-shadow-big rounded-md '
      src='/chooseATier.webp'
      alt=''
     />
    </div>
   </div>
   <div className='absolute bottom-56 xs:bottom-52 xl:bottom-56 left-8 xl:left-40 w-5/6 xs:w-3/4 sm:w-1/2 md:w-1/3 xl:w-1/4 pl-20'>
    <img className='' src='/PickATier.webp' alt='' />
   </div>
   <ScrollAnimation
    animateIn='animate__fadeInUp'
    animateOut='animate__fadeOutDown'
    duration={0.5}
   >
    <img
     className='pb-28 ml-4 sm:ml-0 xl:ml-32 -mb-4 sm:pb-16 sm:-mb-2 z-40 relative w-20'
     src='/robard-head-left-3D.webp'
     alt=''
    />
   </ScrollAnimation>
  </section>
 );
};

export default chooseATier;
