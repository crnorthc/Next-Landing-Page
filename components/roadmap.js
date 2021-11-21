import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const roadmap = () => {
 return (
  <section className='background-ocean' id='roadmap'>
   <div className='background-dark pt-20 sm:pt-40 pb-10 sm:pb-20 px-5 sm:px-10 over-tokens relative'>
    <h2
     className='
     text-light text-5xl
     sm:text-6xl
     text-center
     xs:pt-10
     sm:pt-20
     over-tokens
     glory
    '
    >
     Roadmap
    </h2>
    <div className='wrapper max-w-7xl mx-auto pt-20 pb-10 px-6 sm:px-20 relative'>
     <div
      className='
      roadmapCenter-line
      hidden
      md:block md:left-1/2 
      left-16
      transform
      -translate-x-1/2
      absolute
      w-1
      bg-primary
      top-40
     '
     ></div>
     <div className='roadmapRow mb-10 roadmapRow-1 flex justify-start'>
      <section className='relative bg-medium medium-shadow-medium text-light  rounded-xl pb-10'>
       <div
        className='
        hidden
        md:block
        absolute
        roadmapCenterSticker
        rounded-full
        p-4
        bg-medium
       '
       >
        <img className='w-8 h-8' src='cash-on-delivery.svg' alt='' />
       </div>
       <div className='flex flex-col rounded-t-md justify-start items-center xs:items-start xl:flex-row xl:justify-between  mb-5 bg-secondary px-10 py-5'>
        <h4 className='text-light  text-3xl'>Stage 1</h4>
        <h4 className='text-light text-xl xl:text-3xl'>Development</h4>
       </div>
       <ScrollAnimation
        animateOnce
        animateIn='animate__fadeInUp'
        duration={0.5}
        delay={0}
       >
        <p className='text-l xs:text-xl px-5 xs:px-10 pt-3'>
         Pre-Seed Allocation
        </p>
       </ScrollAnimation>
       <ScrollAnimation
        animateOnce
        animateIn='animate__fadeInUp'
        duration={0.5}
        delay={100}
       >
        <p className='text-l xs:text-xl px-5 xs:px-10 pt-2'>
         Consolidate Developers
        </p>
       </ScrollAnimation>
       <ScrollAnimation
        animateOnce
        animateIn='animate__fadeInUp'
        duration={0.5}
        delay={200}
       >
        <p className='text-l xs:text-xl px-5 xs:px-10 pt-2'>
         Partner with a Market Data Provider
        </p>
       </ScrollAnimation>
       <ScrollAnimation
        animateOnce
        animateIn='animate__fadeInUp'
        duration={0.5}
        delay={400}
       >
        <p className='text-l xs:text-xl px-5 xs:px-10 pt-2'>
         Complete Vapur Devleopment
        </p>
       </ScrollAnimation>
      </section>
     </div>
     <div className='roadmapRow mb-10 roadmapRow-2 flex justify-end'>
      <section className='relative bg-medium text-light medium-shadow-medium rounded-xl pb-10'>
       <div
        className='
        absolute
        bg-medium
        rounded-full
        p-4
        roadmapCenterSticker
        hidden
        md:block
       '
       >
        <img className='w-8 h-8 relative' src='rocket-launch.svg' alt='' />
       </div>
       <div className='flex flex-col justify-start items-center xs:items-start xl:flex-row xl:justify-between rounded-t-md mb-5 bg-primary px-10 py-5'>
        <h4 className='text-light  text-3xl'>Stage 2</h4>
        <h4 className='text-light text-xl xl:text-3xl'>Platform Release</h4>
       </div>
       <ScrollAnimation
        animateOnce
        animateIn='animate__fadeInUp'
        duration={0.5}
        delay={0}
       >
        <p className='text-l xs:text-xl px-5 xs:px-10 pt-3'>Seed Allocation</p>
       </ScrollAnimation>
       <ScrollAnimation
        animateOnce
        animateIn='animate__fadeInUp'
        duration={0.5}
        delay={100}
       >
        <p className='text-l xs:text-xl px-5 xs:px-10 pt-2'>
         Launch Vapor Beta
        </p>
       </ScrollAnimation>
       <ScrollAnimation
        animateOnce
        animateIn='animate__fadeInUp'
        duration={0.5}
        delay={200}
       >
        <p className='text-l xs:text-xl px-5 xs:px-10 pt-2'>Grow Community</p>
       </ScrollAnimation>
      </section>
     </div>
     <div className='roadmapRow mb-10 roadmapRow-3 flex justify-start'>
      <section className='relative bg-medium text-light medium-shadow-medium rounded-xl pb-10'>
       <div
        className='
        absolute
        bg-medium
        rounded-full
        p-4
        roadmapCenterSticker
        hidden
        md:block
       '
       >
        <img className='w-8 h-8 invert relative' src='token.png' alt='' />
       </div>
       <div className='flex flex-col justify-start items-center xs:items-start xl:flex-row xl:justify-between rounded-t-md mb-5 bg-secondary px-10 py-5'>
        <h4 className='text-light text-3xl'>Stage 3</h4>
        <h4 className='text-light text-xl xl:text-3xl'>Vapur Token</h4>
       </div>
       <div className='text-left'>
        <ScrollAnimation
         animateOnce
         animateIn='animate__fadeInUp'
         duration={0.5}
         delay={0}
        >
         <p className='text-l xs:text-xl px-5 xs:px-10 pt-3'>
          Reach Target Circulating Supply
         </p>
        </ScrollAnimation>
        <ScrollAnimation
         animateOnce
         animateIn='animate__fadeInUp'
         duration={0.5}
         delay={100}
        >
         <p className='text-l xs:text-xl px-5 xs:px-10 pt-2'>
          Partner with Exchanges
         </p>
        </ScrollAnimation>
       </div>
      </section>
     </div>
     <div className='roadmapRow mb-10 roadmapRow-4 flex justify-end'>
      <section className='relative bg-medium text-light medium-shadow-medium rounded-xl pb-10'>
       <div
        className='
        absolute
        bg-medium
        rounded-full
        p-4
        roadmapCenterSticker
        hidden
        md:block
       '
       >
        <img className='w-8 h-8 relative' src='hammer.svg' alt='' />
       </div>
       <div className='flex flex-col justify-start items-center xs:items-start xl:flex-row xl:justify-between rounded-t-md mb-5 bg-primary px-10 py-5'>
        <h4 className='text-light  text-3xl'>Stage 4</h4>
        <h4 className='text-light text-xl xl:text-3xl'>Go Public</h4>
       </div>
       <ScrollAnimation
        animateOnce
        animateIn='animate__fadeInUp'
        duration={0.5}
        delay={0}
       >
        <p className='text-l xs:text-xl px-5 xs:px-10 pt-3'>Vapur Token IEO</p>
       </ScrollAnimation>
       <ScrollAnimation
        animateOnce
        animateIn='animate__fadeInUp'
        duration={0.5}
        delay={100}
       >
        <p className='text-l xs:text-xl px-5 xs:px-10 pt-2'>
         Begin Series A Funding
        </p>
       </ScrollAnimation>
      </section>
     </div>
    </div>
   </div>
  </section>
 );
};

export default roadmap;
