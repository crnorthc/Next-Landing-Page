import React from "react";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";

const pickAGame = () => {
 return (
  <section id='pickAGame' className='bg-dark over-tokens'>
   <div className=' background-ocean over-tokens'>
    <div className='background-dark pt-12 sm:pt-20 pb-10 sm:pb-20 px-5  over-tokens'>
     {/* right pipe */}
     <div className='z-10 hidden xl:block absolute bottom-0 right-0 h-full w-20 bg-medium xl:rounded-br-2xl border-t-8 border-primary '>
      <div className='hidden z-10 xl:block absolute top-0 bottom-10 right-8 w-3  bg-light pipe-shine '></div>
      <div className='hidden z-10 xl:block absolute bottom-8 right-8 w-6 h-3 bg-light pipe-shine'></div>
     </div>

     {/* Bottom pipe */}
     <div className='absolute z-10 bottom-0 left-0 right-0 xl:right-20  h-20 bg-medium xl:border-r-8 xl:border-primary xl:rounded-tl-2xl'>
      <div className='absolute z-10 bottom-8 xl:left-8 right-0 xl:right-20 w-full h-3 bg-light pipe-shine'></div>
      <div className='hidden z-10  xl:block absolute bottom-0 left-10 h-10 w-3 bg-light pipe-shine'></div>
     </div>

     {/* page content */}
     <div className='flex flex-col lg:flex-row items-center lg:items-end justify-center space-y-10 lg:space-y-0  space-x-0  lg:space-x-16  max-w-6xl mx-auto pb-12 xl:pr-20'>
      <div className='z-40 w-full lg:w-2/3'>
       <div className='flex items-center justify-between mb-1 pb-5'>
        <h2 className='text-4xl lg:text-5xl glory text-light glory '>
         1. Pick a Tournament
        </h2>

        <div className='flex lg:hidden  items-center justify-center '>
         <div className='vapur-token-1 -mr-4   w-12 z-10'>
          <Image
           width={50}
           height={50}
           quality='100'
           src='/DarkLogo3D.webp'
           alt=''
          />
         </div>

         <div className='vapur-token-2  -mb-10  w-16 z-20'>
          <Image
           width={70}
           height={70}
           quality='100'
           className='  '
           src='/LightLogo3D.webp'
           alt=''
          />
         </div>

         <div className='vapur-token-3  -ml-5 -mt-5  w-8 z-0'>
          <Image
           width={40}
           height={40}
           quality='100'
           className='  '
           src='/vapur-token-3.png'
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
         src='/newGames.webp'
         alt=''
        />
       </div>
      </div>

      <div className='w-full lg:w-1/3 flex-col items-center justify-center '>
       <div className='hidden lg:flex  items-center justify-center '>
        <div className=' -mr-10 vapur-token-1 z-10'>
         <Image width={160} height={160} src='/DarkLogo3D.webp' alt='' />
        </div>

        <div className=' -mb-20 vapur-token-2 z-30'>
         <Image width={200} height={200} src='/LightLogo3D.webp' alt='' />
        </div>

        <div className=' -mt-20 -ml-16 vapur-token-3  z-0'>
         <Image width={120} height={120} src='/vapur-token-3.png' alt='' />
        </div>
       </div>

       <div className='text-sm bg-light game-visual light-shadow-medium lg:mt-20 p-5 rounded-xl w-full'>
        <p class='pb-4 text-dark text-xl'>
         There are many different tournaments to play in!
        </p>
        <div className='flex justify-center items-start text-center space-x-2 bg-secondary rounded-xl p-2'>
         <div className='flex-1 flex flex-col items-center justify-center space-y-1'>
          <p className='bg-primary p-1 rounded-lg w-full'>League</p>
          <ScrollAnimation
           animateOnce
           animateIn='animate__fadeInUp'
           duration={0.5}
           delay={100}
           className='bg-light p-1 rounded-lg w-full'
          >
           <p>Stocks</p>
          </ScrollAnimation>
          <ScrollAnimation
           animateOnce
           animateIn='animate__fadeInUp'
           duration={0.5}
           delay={200}
           className='bg-light p-1 rounded-lg w-full'
          >
           <p>Cryptos</p>
          </ScrollAnimation>
          <ScrollAnimation
           animateOnce
           animateIn='animate__fadeInUp'
           duration={0.5}
           delay={300}
           className='bg-light p-1 rounded-lg w-full'
          >
           <p>Stocks & Cryptos</p>
          </ScrollAnimation>
         </div>
         <div className='flex-1 flex flex-col items-center justify-center space-y-1'>
          <p className='bg-primary p-1 rounded-lg w-full'>Win Splits</p>
          <ScrollAnimation
           animateOnce
           animateIn='animate__fadeInUp'
           duration={0.5}
           delay={100}
           className='bg-light p-1 rounded-lg w-full'
          >
           <p>Top 1</p>
          </ScrollAnimation>
          <ScrollAnimation
           animateOnce
           animateIn='animate__fadeInUp'
           duration={0.5}
           delay={200}
           className='bg-light p-1 rounded-lg w-full'
          >
           <p>Top 3</p>
          </ScrollAnimation>
          <ScrollAnimation
           animateOnce
           animateIn='animate__fadeInUp'
           duration={0.5}
           delay={300}
           className='bg-light p-1 rounded-lg w-full'
          >
           <p>Top 10</p>
          </ScrollAnimation>
          <ScrollAnimation
           animateOnce
           animateIn='animate__fadeInUp'
           duration={0.5}
           delay={400}
           className='bg-light p-1 rounded-lg w-full'
          >
           <p>Top 10%</p>
          </ScrollAnimation>
          <ScrollAnimation
           animateOnce
           animateIn='animate__fadeInUp'
           duration={0.5}
           delay={500}
           className='bg-light p-1 rounded-lg w-full'
          >
           <p>Top 40%</p>
          </ScrollAnimation>
         </div>
         <div className='flex-1 flex flex-col items-center justify-center space-y-1'>
          <p className='bg-primary p-1 rounded-lg w-full'>Durations</p>
          <ScrollAnimation
           animateOnce
           animateIn='animate__fadeInUp'
           duration={0.5}
           delay={100}
           className='bg-light p-1 rounded-lg w-full'
          >
           <p>Hour</p>
          </ScrollAnimation>
          <ScrollAnimation
           animateOnce
           animateIn='animate__fadeInUp'
           duration={0.5}
           delay={200}
           className='bg-light p-1 rounded-lg w-full'
          >
           <p>Day</p>
          </ScrollAnimation>
          <ScrollAnimation
           animateOnce
           animateIn='animate__fadeInUp'
           duration={0.5}
           delay={300}
           className='bg-light p-1 rounded-lg w-full'
          >
           <p>Week</p>
          </ScrollAnimation>
          <ScrollAnimation
           animateOnce
           animateIn='animate__fadeInUp'
           duration={0.5}
           delay={400}
           className='bg-light p-1 rounded-lg w-full'
          >
           <p>Quarter</p>
          </ScrollAnimation>
         </div>
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

export default pickAGame;
