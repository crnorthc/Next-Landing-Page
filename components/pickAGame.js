import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const pickAGame = () => {
 return (
  <section
   id='pickAGame'
   className='bg-dark pt-12 xs:pt-20 pb-10 sm:pb-20 px-5 sm:px-10 over-tokens '
  >
   {/* right pipe */}

   <div className='hidden xl:block absolute bottom-0 right-0 h-full w-20 bg-medium border-t-8 border-primary '></div>
   <div className='hidden xl:block absolute top-0 bottom-10 right-8 w-3  bg-light pipe-shine '></div>

   {/* Robard */}
   <div className='absolute z-50 bottom-20 right-5 xl:right-40 w-28 h-12 bg-medium '></div>
   <div className='absolute bottom-32 right-5 xl:right-40 w-28 h-4 rounded-full bg-black border-4 border-primary pipe-primary-shadow'></div>

   {/* Bottom pipe */}
   <div className='absolute z-50 bottom-0 left-0 right-0 xl:right-20  h-20 bg-medium xl:border-r-8 xl:border-primary'></div>
   <div className='absolute z-50 bottom-8 left-8 right-0 xl:right-20  h-3 bg-light pipe-shine'></div>
   <div className='hidden xl:block absolute bottom-8 right-10 w-10 h-3 bg-light pipe-shine'></div>
   <div className='hidden xl:block absolute bottom-0 left-10 h-10 w-3 bg-light pipe-shine'></div>

   {/* page content */}
   <div className='flex flex-col md:flex-row items-between md:items-start justify-between space-x-0 sm:space-x-8 lg:space-x-16 lg:-mb-20 space-y-10 md:space-y-0 container max-w-6xl mx-auto sm:pb-0'>
    <div className='w-full md:w-2/3 lg:w-2/3'>
     <h2 className='text-4xl lg:text-5xl glory text-light glory pb-5'>
      1. Pick a Tournament
     </h2>
     <div className='flex flex-col'>
      <img
       width='800'
       class='border-4 border-primary medium-shadow-big rounded-md '
       src='/newGames.webp'
       alt=''
      />
      <div className='w-full flex xl:justify-center justify-start'>
       <div className='hidden sm:flex md:hidden lg:flex flex-row justify-between max-w-4xl pt-10'>
        <img src='/LeagueTag.webp' className='tag' alt='' />
        <img src='/DurationTag.webp' className='tag' alt='' />
        <img src='/WinCryptoTag.webp' className='tag' alt='' />
       </div>
      </div>
     </div>
    </div>
    <div className='flex sm:hidden flex-col pb-20 items-center w-full justify-between'>
     <div className='flex flex-row justify-between pb-4'>
      <img src='/LeagueTag.webp' className='tag-sm' alt='' />
      <img src='/DurationTag.webp' className='tag-sm' alt='' />
     </div>
     <img src='/WinCryptoTag.webp' className='tag-sm' alt='' />
    </div>
    <div className='md:w-1/3 lg:w-2/5'>
     <div className='md:flex flex-row hidden items-start justify-center pt-20 l:pt-32'>
      <img
       class='-mr-10 darkVapurToken w-28 lg:w-40'
       width='150'
       src='/DarkLogo3D.webp'
       alt=''
      />
      <img
       className='whiteVapurToken w-36 lg:w-52'
       src='/LightLogo3D.webp'
       alt=''
      />
     </div>
    </div>
   </div>
   <div className='absolute hidden md:block w-1/3 md:w-1/4 lg:w-1/4 xl:1/5 bottom-64 right-32 md:right-28 md:bottom-56 xl:right-60'>
    <img className='' src='/PickAGame.webp' alt='' />
   </div>
   <div className='flex flex-row hidden md:flex lg:hidden justify-start sm:justify-between lg:justify-end items-end'>
    <div className='flex py-5 flex-row items-center w-1/2 max-w-lg justify-between'>
     <img src='/LeagueTag.webp' className='tag-sm' alt='' />
     <img src='/DurationTag.webp' className='tag-sm mx-2' alt='' />
     <img src='/WinCryptoTag.webp' className='tag-sm' alt='' />
    </div>
    <div className='mb-44 md:hidden sm:ml-44 md:ml-0 lg:mt-8'>
     <img className='' src='/PickAGame.webp' alt='' />
    </div>
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
   <div className='absolute block md:hidden w-2/3 sm:w-2/5 pl-12 md:w-1/4 lg:w-1/4 xl:w-1/5 bottom-56 right-28 md:right-28 md:bottom-56 xl:right-60'>
    <img className='' src='/PickAGame.webp' alt='' />
   </div>
   <div className='flex md:hidden lg:flex flex-row justify-end'>
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

export default pickAGame;
