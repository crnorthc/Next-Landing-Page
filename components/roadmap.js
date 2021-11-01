import React from "react";

const roadmap = () => {
 return (
  <section
   className='bg-dark pt-20 sm:pt-40 pb-10 sm:pb-20 px-5 sm:px-10 over-tokens relative'
   id='roadmap'
  >
   <div className='hidden xl:block absolute bottom-0 top-0 left-0 h w-20 bg-medium border-t-8 border-primary'></div>
   <div className='hidden xl:block absolute top-0 bottom-0 left-8 w-3  bg-light pipe-shine '></div>
   <div className='hidden xl:block absolute bottom-0 top-0 right-0 w-20 bg-medium border-t-8 border-primary'></div>
   <div className='hidden xl:block absolute top-0 bottom-0 right-8 w-3 h-full bg-light pipe-shine '></div>

   <h2
    className='
     text-light text-5xl
     sm:text-6xl
     text-center
     pt-10
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
     <section className='relative bg-medium text-light ring-4 ring-primary rounded-md pb-10'>
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
      <div className='flex flex-col rounded-t-md justify-start items-start xl:flex-row xl:justify-between  mb-5 bg-dark px-10 py-5'>
       <h4 className='text-primary  text-3xl'>Stage 1</h4>
       <h4 className='text-lightmedium text-xl xl:text-3xl'>Development</h4>
      </div>
      <p className='text-xl px-10 pt-3'>Pre-Seed Allocation</p>
      <p className='text-xl px-10 pt-2'>Consolidate Developers</p>
      <p className='text-xl px-10 pt-2'>Partner witha Market Data Provider</p>
      <p className='text-xl px-10 pt-2'>Complete Vapur Devleopment</p>
     </section>
    </div>
    <div className='roadmapRow mb-10 roadmapRow-2 flex justify-end'>
     <section className='relative bg-medium text-light ring-4 ring-primary rounded-md pb-10'>
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
      <div className='flex flex-col justify-start items-start xl:flex-row xl:justify-between rounded-t-md mb-5 bg-dark px-10 py-5'>
       <h4 className='text-primary  text-3xl'>Stage 2</h4>
       <h4 className='text-lightmedium text-xl xl:text-3xl'>
        Platform Release
       </h4>
      </div>
      <p className='text-xl px-10 pt-3'>Seed Allocation</p>
      <p className='text-xl px-10 pt-2'>Launch Vapor Beta</p>
      <p className='text-xl px-10 pt-2'>Grow Community</p>
     </section>
    </div>
    <div className='roadmapRow mb-10 roadmapRow-3 flex justify-start'>
     <section className='relative bg-medium text-light ring-4 ring-primary rounded-md pb-10'>
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
      <div className='flex flex-col justify-start items-start xl:flex-row xl:justify-between rounded-t-md mb-5 bg-dark px-10 py-5'>
       <h4 className='text-primary  text-3xl'>Stage 3</h4>
       <h4 className='text-lightmedium text-xl xl:text-3xl'>Vapur Token</h4>
      </div>
      <p className='text-xl px-10 pt-3'>Reach Target Circulating Supply</p>
      <p className='text-xl px-10 pt-2'>Partner with Exchanges</p>
     </section>
    </div>
    <div className='roadmapRow mb-10 roadmapRow-4 flex justify-end'>
     <section className='relative bg-medium text-light ring-4 ring-primary rounded-md pb-10'>
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
      <div className='flex flex-col justify-start items-start xl:flex-row xl:justify-between rounded-t-md mb-5 bg-dark px-10 py-5'>
       <h4 className='text-primary  text-3xl'>Stage 4</h4>
       <h4 className='text-lightmedium text-xl xl:text-3xl'>Go Public</h4>
      </div>
      <p className='text-xl px-10 pt-3'>Vapur Token IEO</p>
      <p className='text-xl px-10 pt-2'>Begin Series A Funding</p>
     </section>
    </div>
   </div>
  </section>
 );
};

export default roadmap;
