import React from "react";

const pickAGame = () => {
 return (
  <section
   id='pickAGame'
   className='bg-dark pt-20 sm:pt-40 pb-10 sm:pb-20 px-5 sm:px-10 over-tokens '
  >
   {/* top pipe */}
   <div className='absolute top-0 right-0 xl:right-20 w-screen h-20 bg-medium xl:border-r-8 xl:border-primary'></div>
   <div className='absolute top-8 right-0 xl:right-20 w-screen h-3 bg-light pipe-shine'></div>

   {/* right pipe */}
   <div className='hidden xl:block absolute top-0 right-0 h-20 w-20 bg-secondary '></div>
   <div className='hidden xl:block absolute bottom-0 right-0 h-full w-20 bg-medium rounded-r-2xl'></div>
   <div className='hidden xl:block absolute top-8 bottom-8 right-8 w-3  bg-light pipe-shine '></div>
   <div
    className='hidden xl:block absolute top-8 right-10 w-10 h-3 bg-light pipe-shine
'
   ></div>

   {/* Robard */}
   <div className='absolute bottom-20 right-5 xl:right-40 w-28 h-16 rounded-t-xl bg-medium '></div>
   <div className='absolute bottom-32 right-5 xl:right-40 w-28 h-4 rounded-full bg-black border-4 border-primary pipe-primary-shadow'></div>

   <img
    className='absolute bottom-32 pb-1 right-9 xl:right-44 w-20'
    src='/robard-head-left-3D.png'
    alt=''
   />

   {/* Bottom pipe */}
   <div className='absolute bottom-0 left-0 right-0 xl:right-20  h-20 bg-medium xl:border-r-8 xl:border-primary rounded-tl-2xl'></div>
   <div className='absolute bottom-8 left-8 right-0 xl:right-20  h-3 bg-light pipe-shine'></div>
   <div className='hidden xl:block absolute bottom-8 right-10 w-10 h-3 bg-light pipe-shine'></div>
   <div className='hidden xl:block absolute bottom-0 left-10 h-10 w-3 bg-light pipe-shine'></div>

   {/* page content */}
   <div className='flex flex-col md:flex-row items-center justify-center space-x-0 sm:space-x-8 lg:space-x-16  space-y-10 md:space-y-0 container max-w-6xl mx-auto pb-40 sm:pb-0'>
    <div className='w-full md:w-1/2 lg:w-2/3'>
     <h2 className='text-4xl lg:text-5xl glory text-light glory pb-5'>
      1. Pick a Tournament
     </h2>
     <img
      width='800'
      class='border-4 border-light medium-shadow-big rounded-md '
      src='/newGames.png'
      alt=''
     />
    </div>
    <div className='flex sm:hidden flex-col items-center w-full justify-between'>
        <div className='flex flex-row justify-between pb-4'>
            <img        
            src='/LeagueTag.png'
            className='tag-sm'
            alt=''
            />
            <img        
            src='/DurationTag.png'
            className='tag-sm'
            alt=''
            />            
        </div>
        <img        
            src='/WinCryptoTag.png'
            className='tag-sm'
            alt=''
            />
    </div>   
    <div className='w-full md:w-1/2 lg:w-1/3'>
     <div className='sm:flex hidden items-center justify-center pb-10'>
      <img
       class='-mr-10 darkVapurToken w-28 lg:w-40'
       width='150'
       src='/DarkLogo3D.png'
       alt=''
      />
      <img
       className='whiteVapurToken w-36 lg:w-52'
       src='/LightLogo3D.png'
       alt=''
      />
     </div>
     <div className='relative text-center'>
        <img className='' src='/CloudRight.png' alt='' />
        <div className='text-dark text-over-image w-4/5 text-3xl leading-8 leading-7 md:text-2xl md:leading-8'>
            <p className=''>
                There is a tournament for everyone!
            </p>
        </div>
     </div>     
    </div>    
   </div>
   <div className='w-full flex xl:justify-center xl:-ml-32 justify-start'>
    <div className='flex flex-row justify-between hidden max-w-4xl sm:flex py-10 w-3/4'>
            <img        
            src='/LeagueTag.png'
            className='tag'
            alt=''
            />
            <img        
            src='/DurationTag.png'
            className='tag'
            alt=''
            />
            <img        
            src='/WinCryptoTag.png'
            className='tag'
            alt=''
            />
        </div>
     </div>
  </section>
 );
};

export default pickAGame;
