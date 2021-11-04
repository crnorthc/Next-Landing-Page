import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const gameOverview = () => {
 return (
  <section
   id='gameOverview'
   className='bg-secondary pt-0 sm:pt-40 pb-10 sm:pb-20 px-5 sm:px-10 over-tokens '
  >
   {/* <h2 className='text-light text-5xl sm:text-6xl pt-3 pb-10 text-center glory'>
    Game Overview
   </h2> */}

   {/* Bottom pipe */}
   <div className='absolute z-50 bottom-0 left-0 right-0  h-20 bg-medium xl:rounded-tr-2xl'>
          <div className='absolute z-50 bottom-8 left-0 right-0 my-3 my-96 xl:right-10 h-3 bg-light pipe-fix pipe-shine'></div>
   <div className='hidden xl:block absolute bottom-0 right-8 w-3 h-8 bg-light pipe-shine'></div>
   </div>

   {/* Robard */}
   <div className='absolute z-50 bottom-20 right-5 xl:right-40 w-28 h-12 bg-medium '></div>
   <div className='absolute bottom-32 right-5 xl:right-40 w-28 h-4 rounded-full bg-black border-4 border-primary pipe-primary-shadow'></div>
   <img
    className='absolute bottom-32 pb-1 right-9 xl:right-44 w-20'
    src='/robard-head-left-3D.png'
    alt=''
   />

   <div className='flex flex-col md:flex-row justify-center md:space-x-16 space-y-10 md:space-y-0 container max-w-6xl mx-auto pb-12'>
    <div class='block '>
     <h2 className='block md:hidden text-4xl lg:text-5xl glory text-dark glory pb-5'>
      Fantasy Football of the Stock and Crypto Markets...
     </h2>
     <div className='flex flex-col items-center justify-center bg-medium medium-shadow-xl rounded-xl px-5 py-10 '>
      <h3 className=' pb-10 text-4xl lg:text-5xl glory text-light white-text-shadow'>
       Your Lineup
      </h3>
      <div className='flex flex-col items-center justify-center space-y-5 poppins font-bold w-full'>
       <div className='flex items-center justify-between rounded-xl w-full md:w-72 lg:w-96 p-2 lineup-1 green-shadow-big'>
        <img className=' w-24 p-4' src='/bitcoin.svg' alt='' />

        <div className='flex flex-1 items-center justify-between px-2 text-white poppins'>
         <div className=''>
          <p className=''>Bitcoin</p>
          <p className=''>BTC</p>
         </div>

         <div className='text-green flex flex-col items-end'>
          <p className=''>$55,254</p>
          <p className=''>+$540</p>
         </div>
        </div>
       </div>
       <div className='flex items-center justify-between rounded-xl w-full md:w-72 lg:w-96 p-2 lineup-2 green-shadow-big'>
        <img className=' w-24 p-4' src='/doge.svg' alt='' />

        <div className='flex flex-1 items-center justify-between px-2 text-white font-bold poppins'>
         <div className=''>
          <p className=''>Dogecoin</p>
          <p className=''>DOGE</p>
         </div>

         <div className='text-green '>
          <p className=''>$0.27</p>
          <p className=''>+0.03</p>
         </div>
        </div>
       </div>
       <div className='flex items-center justify-between rounded-xl w-full md:w-72 lg:w-96 p-2 lineup-3  red-shadow-big'>
        <img className=' w-10 mx-6 my-2' src='/ether.svg' alt='' />

        <div className='flex flex-1 items-center justify-between px-2 text-white poppins'>
         <div className=''>
          <p className=''>Ether</p>
          <p className=''>ETH</p>
         </div>

         <div className='text-green flex flex-col items-end'>
          <p className=''>$4,585</p>
          <p className=''>+$60</p>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
    <div className='flex flex-col items-center justify-between xs:pb-10'>
     <h2 className='hidden md:block text-4xl lg:text-5xl glory text-dark glory pb-5'>
      Fantasy Football of the Stock and Crypto Markets...
     </h2>
     <div className='bg-light rounded-3xl p-3 text-lg leading-7 md:text-2xl md:leading-8 lg:text-3xl lg:leading-9 '>
      <p className='  pb-6'>
       On Vapur instead of your lineup consisting of football players, it
       consist of stocks and/or cryptos that you think will preform well in a
       tournament.
      </p>
      <p className=''>
       Wager cryptocurrency on each tournament you enter, for a chance to win
       the entire pot!
      </p>
     </div>
    </div>
   </div>   
       <div className='flex flex-row justify-end xl:mr-32'>
       <ScrollAnimation animateIn='animate__fadeInUp' animateOut='animate__fadeOutDown' duration={.5}>
       <img
            className='mb-24 sm:mb-12 z-40 relative mr-4 sm:mr-0 xl:mr-2 w-20'
            src='/robard-head-left-3D.webp'
            alt=''
            />
            </ScrollAnimation>
       </div>   
  </section>
 );
};

export default gameOverview;
