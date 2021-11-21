import React from "react";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";

const winCryptocurrency = () => {
 return (
  <section id='pickAGame' className='bg-dark over-tokens'>
   <div className=' background-ocean over-tokens'>
    <div className='background-dark pt-12 sm:pt-20 pb-10 sm:pb-20 px-5  over-tokens'>
     {/* right pipe */}
     <div className='hidden xl:block absolute bottom-0 right-0 h-full w-20 bg-medium xl:rounded-br-2xl border-t-8 border-t-primary'>
      <div className='hidden xl:block absolute top-0 bottom-8 right-8 w-3  bg-light pipe-shine '></div>
      <div className='hidden xl:block absolute bottom-8 right-8 h-3 w-10 bg-light pipe-shine'></div>
     </div>

     {/* Bottom pipe */}
     <div className='absolute bottom-0 z-50 left-0 right-0 xl:right-20 xl:border-r-8 border-primary  h-20 bg-medium'>
      <div className='absolute w-full bottom-8 z-50 left-0 right-0 xl:right-12 h-3 bg-light pipe-shine'></div>
     </div>

     {/* page content */}
     <div className='flex flex-col lg:flex-row items-center lg:items-end justify-center space-y-10 lg:space-y-0  space-x-0  lg:space-x-16  max-w-6xl mx-auto pb-12 xl:pr-20'>
      <div className='z-40 w-full lg:w-2/3'>
       <div className='flex items-center justify-between mb-1 pb-5'>
        <h2 className='text-4xl lg:text-5xl glory text-light glory '>
         5. Win Cryptocurrency!
        </h2>

        <div className='flex lg:hidden  items-center justify-center '>
         <div className='vapur-token-1 -mr-4   w-12 z-10'>
          <Image
           width={35}
           height={50}
           quality='100'
           src='/MoneyBag.png'
           alt=''
          />
         </div>

         <div className='vapur-token-2  -mb-10  w-16 z-20'>
          <Image
           width={55}
           height={70}
           quality='100'
           className='  '
           src='/MoneyBag.png'
           alt=''
          />
         </div>

         <div className='vapur-token-3  -ml-5 -mt-5  w-8 z-0'>
          <Image
           width={30}
           height={40}
           quality='100'
           className='  '
           src='/MoneyBag.png'
           alt=''
          />
         </div>
        </div>
       </div>

       <div className='medium-shadow-medium rounded-xl game-visual'>
        <Image
         width='1000'
         height='550'
         quality='100'
         priority
         layout='responsive'
         class='rounded-xl'
         src='/WinCrypto.webp'
         alt=''
        />
       </div>
      </div>

      <div className='w-full lg:w-1/3 flex-col items-center justify-center '>
       <div className='hidden lg:flex  items-center justify-center '>
        <div className=' -mr-10 vapur-token-1 z-10'>
         <Image width={120} height={160} src='/MoneyBag.png' alt='' />
        </div>

        <div className=' -mb-20 vapur-token-2 z-30'>
         <Image width={150} height={200} src='/MoneyBag.png' alt='' />
        </div>

        <div className=' -mt-20 -ml-16 vapur-token-3  z-0'>
         <Image width={90} height={120} src='/MoneyBag.png' alt='' />
        </div>
       </div>

       <div className='text-sm bg-light game-visual light-shadow-medium lg:mt-20 p-5 rounded-xl w-full'>
        <p class='pb-4 text-dark text-xl'>
         If you win the tournament, you win the pot of cryptocurrency!
        </p>
        <div className='flex flex-col justify-center items-start text-center space-y-2 background-primary-secondary-horizontal rounded-xl p-2'>
         <ScrollAnimation
          animateOnce
          animateIn='animate__fadeInUp'
          duration={0.5}
          delay={0}
          className='w-full'
         >
          <p className='bg-light rounded-lg p-2'>
           This is what it's all about! Win over $100,000 of crypto in a single
           game!*{" "}
          </p>
         </ScrollAnimation>
         <ScrollAnimation
          animateOnce
          animateIn='animate__fadeInUp'
          duration={0.5}
          delay={1000}
          className='w-full'
         >
          <p className='bg-light rounded-lg p-2'>
           Players will be able to cash out their winnings in bitcoin, ethereum,
           bnb, or any other major cryptocurrency!
          </p>
         </ScrollAnimation>
        </div>
       </div>
      </div>
     </div>

     {/* Robard */}
     <div className='absolute z-50 bottom-20 right-5 xl:right-40 w-28 h-12 bg-medium '></div>
     <div className='absolute bottom-32 right-5 xl:right-40 w-28 h-4 rounded-full bg-black border-4 border-primary pipe-primary-shadow'></div>
     <div className='z-50  robard-bridge-right h-2 border-t-4 border-black absolute bottom-32 bg-primary '></div>

     <div className='flex flex-row justify-end xl:mr-32'>
      <ScrollAnimation
       animateIn='animate__slideInUp'
       animateOut='animate__slideOutDown'
       duration={1}
      >
       <img
        className='mb-24 sm:mb-12 sm:pb-2 z-40 relative mr-4 xl:mr-7 w-20'
        src='/robard-head-left-3D.webp'
        alt=''
       />
      </ScrollAnimation>
     </div>
    </div>
   </div>
  </section>
 );
};

export default winCryptocurrency;
