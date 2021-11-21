import React from "react";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";

const createALineup = () => {
 return (
  <section id='pickAGame' className='bg-dark over-tokens'>
   <div className=' background-ocean over-tokens'>
    <div className='background-dark pt-12 sm:pt-20 pb-10 sm:pb-20 px-5  over-tokens'>
     {/* right pipe */}
     <div className='hidden xl:block absolute top-0 bottom-0 right-0 w-20 bg-medium border-t-8 border-t-primary rounded-br-2xl'>
      <div className='hidden xl:block absolute top-0 bottom-10 right-8 w-3  bg-light pipe-shine '></div>
     </div>

     {/* Bottom pipe */}
     <div className='absolute z-50 bottom-0 left-0 right-0 xl:right-20 xl:rounded-tl-2xl h-20 xl:border-r-8 border-primary bg-medium'>
      <div className='absolute z-50 bottom-8 w-full left-0 xl:left-8 right-0 xl:right-20 h-3 bg-light pipe-shine'></div>
     </div>
     <div className='hidden xl:block absolute bottom-8 right-8 w-12 h-3 bg-light pipe-shine'></div>
     <div className='hidden xl:block absolute bottom-0 left-8 h-10 w-3 bg-light pipe-shine'></div>

     {/* page content */}
     <div className='flex flex-col lg:flex-row items-center lg:items-end justify-center space-y-10 lg:space-y-0  space-x-0  lg:space-x-16  max-w-6xl mx-auto pb-12 xl:pr-20'>
      <div className='z-40 w-full lg:w-2/3'>
       <div className='flex items-center justify-between mb-1 pb-5'>
        <h2 className='text-4xl lg:text-5xl glory text-light glory '>
         3. Create a Lineup
        </h2>

        <div className='flex lg:hidden  items-center justify-center '>
         <div className='vapur-token-1 -mr-4   w-12 z-10'>
          <Image
           width={50}
           height={50}
           quality='100'
           src='/apple3D.webp'
           alt=''
          />
         </div>

         <div className='vapur-token-2  -mb-10  w-16 z-20'>
          <Image
           width={70}
           height={70}
           quality='100'
           className='  '
           src='/Pepsi3D.webp'
           alt=''
          />
         </div>

         <div className='vapur-token-3  -ml-5 -mb-16  w-8 z-0'>
          <Image
           width={40}
           height={40}
           quality='100'
           className='  '
           src='/Nike3D.webp'
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
         src='/createALineup.webp'
         alt=''
        />
       </div>
      </div>

      <div className='w-full lg:w-1/3 flex-col items-center justify-center '>
       <div className='hidden lg:flex  items-center justify-center '>
        <div className=' -mr-10 vapur-token-1 z-10'>
         <Image width={160} height={160} src='/apple3D.webp' alt='' />
        </div>

        <div className=' -mb-28 vapur-token-2 z-30'>
         <Image width={200} height={200} src='/Pepsi3D.webp' alt='' />
        </div>

        <div className=' -mb-64 -ml-16 vapur-token-3  z-0'>
         <Image width={120} height={120} src='/Nike3D.webp' alt='' />
        </div>
       </div>

       <div className='text-sm bg-light game-visual light-shadow-medium lg:mt-20 p-5 rounded-xl w-full'>
        <p class='pb-4 text-dark text-xl'>
         Choose the stocks and cryptos that you think will preform well!
        </p>
        <div className='flex flex-col justify-center items-start space-y-2 background-primary-secondary-vertical rounded-xl p-2'>
         <ScrollAnimation
          animateOnce
          animateIn='animate__fadeInUp'
          duration={0.5}
          delay={0}
          className='w-full'
         >
          <p className='bg-light rounded-lg p-2'>
           You will have $100,000 of fantasy money for adding stocks and cryptos
           to your lineup. *
          </p>
         </ScrollAnimation>
         <ScrollAnimation
          animateOnce
          animateIn='animate__fadeInUp'
          duration={0.5}
          delay={100}
          className='w-full'
         >
          <p className='bg-light rounded-lg p-2'>
           Your lineup will compete against everyone elses in the tournament for
           the pot of crypto, so make sure you choose stocks and cryptos you
           think will moon!
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

export default createALineup;
