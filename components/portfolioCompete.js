import React from "react";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";

const portfolioCompete = () => {
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
     <div className='absolute z-50 bottom-0 left-0 xl:left-20 right-0 h-20 xl:border-l-8 border-primary bg-medium xl:rounded-tr-2xl'>
      <div className='absolute z-50 bottom-8 right-0 xl:right-10 -left-2 h-3 bg-light pipe-shine'></div>
      <div className='hidden xl:block absolute bottom-0 right-8 h-10 w-3 bg-light pipe-shine'></div>
     </div>

     {/* page content */}
     <div className='flex flex-col lg:flex-row-reverse items-center lg:items-end justify-center space-y-10 lg:space-y-0   max-w-6xl mx-auto pb-12 xl:pl-20'>
      <div className='z-40 w-full lg:w-2/3 lg:ml-16'>
       <div className='flex items-center justify-between mb-1 pb-5'>
        <h2 className='text-4xl lg:text-5xl glory text-light glory '>
         4. Compete Against Others
        </h2>

        <div className='block lg:hidden generic-number -ml-5 -mt-5 z-0'>
         <Image
          width={90}
          height={90}
          quality='100'
          className='  '
          src='/area-chart.png'
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
         src='/portfolioCompete.webp'
         alt=''
        />
       </div>
      </div>

      <div className='w-full lg:w-1/3 flex-col items-center justify-center '>
       <div className='hidden lg:flex  items-center justify-center '>
        <div className=' generic-number '>
         <Image width={220} height={220} src='/area-chart.png' alt='' />
        </div>
       </div>

       <div className='text-sm bg-light game-visual light-shadow-medium lg:mt-5 p-5 rounded-xl w-full'>
        <p class='pb-4 text-dark text-xl'>
         Watch as you portfolio goes head to head against other's in the
         tournament!
        </p>
        <div className='flex flex-col justify-center items-start  bg-secondary rounded-xl p-4 '>
         <ScrollAnimation
          animateOnce
          animateIn='animate__fadeInUp'
          duration={0.5}
          delay={0}
          className='w-full'
         >
          <table class='table-auto bg-primary  w-full'>
           <thead className=''>
            <tr className='  rounded-lg'>
             <th className=' text-left p-2'>#</th>
             <th className=' text-left p-2'>Player</th>
             <th className=' text-left p-2'>Score</th>
            </tr>
           </thead>
           <tbody className='bg-white '>
            <tr>
             <td className='p-2'>1</td>
             <td className='p-2'>You</td>
             <td className='p-2'>$145,973</td>
            </tr>
            <tr className='bg-light'>
             <td className='p-2'>2</td>
             <td className='p-2'>Ella</td>
             <td className='p-2'>$136,273</td>
            </tr>
            <tr>
             <td className='p-2'>3</td>
             <td className='p-2'>Cam</td>
             <td className='p-2'>$123,845</td>
            </tr>
           </tbody>
          </table>
         </ScrollAnimation>
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

export default portfolioCompete;
