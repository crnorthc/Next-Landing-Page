import React, { Component } from "react";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import { Disclosure, Transition } from "@headlessui/react";

const chooseATier = () => {
 return (
  <section id='pickAGame' className='bg-dark over-tokens'>
   <div className=' background-ocean over-tokens'>
    <div className='background-dark pt-12 sm:pt-20 pb-10 sm:pb-20 px-5  over-tokens'>
     {/* left pipe */}
     <div className='hidden xl:block absolute bottom-0 left-0 h-full w-20 bg-medium border-t-8 border-t-primary rounded-bl-2xl'>
      <div className='hidden xl:block absolute top-0 bottom-10 left-8 w-3  bg-light pipe-shine '></div>
      <div className='hidden xl:block absolute bottom-8 left-8 h-4 w-12 z-50 bg-light pipe-shine'></div>
     </div>

     {/* Bottom pipe */}
     <div className='absolute z-40 bottom-0 left-0 xl:left-20 right-0 h-20 bg-medium xl:border-l-8 border-primary xl:rounded-tr-2xl'>
      <div className='absolute z-50 bottom-8 right-0 xl:right-8 -left-2 xl:left-20 h-3 bg-light pipe-shine'></div>
      <div className='hidden xl:block absolute bottom-0 right-8 h-10 w-3 bg-light pipe-shine'></div>
      <div className='hidden xl:block absolute bottom-8 w-20 h-3 bg-light pipe-shine'></div>
     </div>

     {/* page content */}
     <div className='flex flex-col lg:flex-row-reverse items-center lg:items-end justify-center space-y-10 lg:space-y-0   max-w-6xl mx-auto pb-12 xl:pl-20'>
      <div className='z-40 w-full lg:w-2/3 lg:ml-16'>
       <div className='flex items-center justify-between mb-1 pb-5'>
        <h2 className='text-4xl lg:text-5xl glory text-light glory '>
         2. Place a Crypto Bet
        </h2>

        <div className='block lg:hidden generic-number -ml-5 -mt-5 z-0'>
         <Image
          width={80}
          height={80}
          quality='100'
          className='  '
          src='/wallet.png'
          alt=''
         />
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
         src='/chooseATier.webp'
         alt=''
        />
       </div>
      </div>

      <div className='w-full lg:w-1/3 flex-col items-center justify-center '>
       <div className='hidden lg:flex  items-center justify-center '>
        <div className=' generic-number '>
         <Image width={200} height={200} src='/wallet.png' alt='' />
        </div>
       </div>

       <div className='text-sm bg-light game-visual light-shadow-medium lg:mt-5 p-5 rounded-xl w-full'>
        <p class='pb-4 text-dark text-xl'>
         There are 2 types of betting structures a tournament can have...
        </p>
        <div className='flex flex-col justify-center items-start  bg-secondary rounded-xl p-2 '>
         <ScrollAnimation
          animateOnce
          animateIn='animate__fadeInUp'
          duration={0.5}
          delay={100}
          className='w-full'
         >
          <Disclosure>
           {({ open }) => (
            <>
             <Disclosure.Button className='bg-primary rounded-lg py-1 px-2 mb-2 w-full'>
              <div className='flex items-center justify-between'>
               <p>Tiered Tournaments</p>
               <Image
                width={20}
                height={20}
                quality='100'
                src={open ? "/right-arrow.png" : "/down-arrow.png"}
                alt=''
               />
              </div>
             </Disclosure.Button>

             <Transition
              show={open}
              enter='transition duration-500 ease-out'
              enterFrom='transform scale-95 opacity-0'
              enterTo='transform scale-100 opacity-100'
              leave='transition duration-100 ease-out'
              leaveFrom='transform scale-100 opacity-100'
              leaveTo='transform scale-95 opacity-0'
             >
              <Disclosure.Panel
               static
               className='bg-white rounded-md py-1 px-2 mb-4 w-full'
              >
               In Tiered Tournaments the percentage of the fee you use to enter
               a tournament is the same percentage of the pot you are eligble to
               win.
              </Disclosure.Panel>
             </Transition>
            </>
           )}
          </Disclosure>
         </ScrollAnimation>

         <ScrollAnimation
          animateOnce
          animateIn='animate__fadeInUp'
          duration={0.5}
          delay={100}
          className='w-full'
         >
          <Disclosure>
           {({ open }) => (
            <>
             <Disclosure.Button className='bg-primary rounded-lg py-1 px-2 mb-2 w-full'>
              <div className='flex itmes-center justify-between'>
               <p>Multiplier Tournaments</p>
               <Image
                width={20}
                height={20}
                quality='100'
                src={open ? "/right-arrow.png" : "/down-arrow.png"}
                alt=''
               />
              </div>
             </Disclosure.Button>
             <Transition
              show={open}
              enter='transition duration-500 ease-out'
              enterFrom='transform scale-95 opacity-0'
              enterTo='transform scale-100 opacity-100'
              leave='transition duration-100 ease-out'
              leaveFrom='transform scale-100 opacity-100'
              leaveTo='transform scale-95 opacity-0'
             >
              <Disclosure.Panel
               static
               className='bg-white rounded-md py-1 px-2 w-full'
              >
               In Multiplier Tournaments the fee to enter these tournament is
               the same for everyone.
              </Disclosure.Panel>
             </Transition>
            </>
           )}
          </Disclosure>
         </ScrollAnimation>
         {/* <p className='bg-primary rounded-md py-1 px-2 mb-2 w-full'>
          Tiered Tournaments
         </p>
         <p className='bg-white rounded-md py-1 px-2 mb-4 w-full'>
          In Tiered Tournaments the percentage of the fee you use to enter a
          tournament is the same percentage of the pot you are eligble to win.
         </p>
         <p className='bg-primary rounded-md py-1 px-2 mb-2 w-full'>
          Multiplier Tournaments
         </p>
         <p className='bg-white rounded-md py-1 px-2 w-full'>
          In Multiplier Tournaments the fee to enter these tournament is the
          same for everyone.
         </p> */}
        </div>
       </div>
      </div>
     </div>

     {/* Robard */}
     <div className='absolute z-50 bottom-20 left-5 xl:left-40 w-28 h-12 bg-medium '></div>
     <div className='absolute bottom-32 left-5 xl:left-40 w-28 h-4 rounded-full bg-black border-4 border-primary pipe-primary-shadow'></div>
     <div className='z-50  robard-bridge-left h-2 border-t-4 border-black absolute bottom-32 bg-primary '></div>

     <div className='flex flex-row justify-start xl:ml-32'>
      <ScrollAnimation
       animateIn='animate__slideInUp'
       animateOut='animate__slideOutDown'
       duration={1}
      >
       <img
        className='mb-24 sm:mb-12 sm:pb-2 z-40 relative ml-4 xl:ml-7 w-20'
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

export default chooseATier;
