import React from "react";

function team() {
 return (
  <section
   className='bg-dark pt-20 sm:pt-40  px-5 sm:px-10 over-tokens relative'
   id='team'
  >
   {/* left pipe */}
   <div className='hidden xl:block absolute bottom-0 left-0 h-full w-20 bg-medium border-t-8 border-t-primary rounded-bl-2xl'></div>

   {/* right pipe */}
   <div className='hidden xl:block absolute top-0 bottom-right-team right-0 w-20 bg-medium border-t-8 border-t-primary rounded-br-2xl'></div>
   {/* <div className=''>
    <h2 className='text-light text-5xl sm:text-6xl text-center pb-10 glory'>
     Team
    </h2>
   </div> */}

   <div className='relative h-96 w-3/4 ml-auto'>
    <h3 className='text-light text-4xl sm:text-5xl text-center pl-20 glory'>
     Core Team
    </h3>
    {/* Bottom pipe1 */}
    <div className='absolute bottom-0 left-0 right-0 h-20 bg-medium  border-l-8 border-l-black rounded-l-md'></div>
    <div className='absolute bottom-8 right-2 left-4  h-3 bg-light pipe-shine'></div>

    {/* Caleb */}

    <div className='absolute bottom-20 left-1/3 w-28 h-16 rounded-t-xl bg-medium '></div>
    <div className='absolute bottom-32 left-1/3 w-28 h-4 rounded-full bg-black border-4 border-primary  pipe-primary-shadow'></div>

    <img
     className='absolute bottom-40 caleb-head w-20'
     src='/Caleb.webp'
     alt=''
    />

    {/* Matt */}

    <div className='absolute bottom-20 left-2/3 w-28 h-16 rounded-t-xl bg-medium '></div>
    <div className='absolute bottom-32 left-2/3 w-28 h-4 rounded-full bg-black border-4 border-primary  pipe-primary-shadow'></div>

    <img className='absolute bottom-40 matt-head w-20' src='/Matt.webp' alt='' />
   </div>

   <div className='relative h-96 mb-96 w-3/4 mr-auto mt-40'>
    <h3 className='text-light text-4xl sm:text-5xl text-center pl-20 glory'>
     Advisors
    </h3>
    {/* Bottom pipe1 */}
    <div className='absolute bottom-0 left-0 right-0 h-20 bg-medium  border-r-8 border-r-black rounded-r-md'></div>
    <div className='absolute bottom-8 right-4 left-2  h-3 bg-light pipe-shine'></div>

    {/* Caleb */}

    <div className='absolute bottom-20 left-1/3 w-28 h-16 rounded-t-xl bg-medium '></div>
    <div className='absolute bottom-32 left-1/3 w-28 h-4 rounded-full bg-black border-4 border-primary  pipe-primary-shadow'></div>

    <img
     className='absolute bottom-40 caleb-head w-20'
     src='/Caleb.webp'
     alt=''
    />

    {/* Matt */}

    <div className='absolute bottom-20 left-2/3 w-28 h-16 rounded-t-xl bg-medium '></div>
    <div className='absolute bottom-32 left-2/3 w-28 h-4 rounded-full bg-black border-4 border-primary  pipe-primary-shadow'></div>

    <img className='absolute bottom-40 matt-head w-20' src='/Matt.webp' alt='' />
   </div>

   {/* white blur left */}
   <div className='hidden xl:block absolute top-0 bottom-10 left-8 w-3 bg-light pipe-shine '></div>

   {/* white blur right */}
   <div className='hidden xl:block absolute top-0 bottom-right-team-shine right-8 w-3  bg-light pipe-shine '></div>

   {/* <div className='flex flex-col items-center justify-center lg:items-start lg:flex-row'>
    <div className='flex-1 p-5 flex flex-col items-center justify-center'>
     <img className='w-2/4 lg:w-1/3 rounded-md' src='profile.webp' alt='' />

     <a
      className='
       transition-colors
       text-light 
       duration-100
       hover:text-primary
       
       text-center
       lg:text-left
       pt-5
       block
       glory
       text-3xl
       sm:text-4xl
       
      '
      target='_blank'
      rel='noopener noreferrer'
      href='https://www.linkedin.com/in/caleb-northcott/'
     >
      Caleb Northcott
     </a>
     <p className='text-light text-center lg:text-left text-xl z-10'>
      Co-Founder & Backend Engineer
     </p>
     <p className='text-light pt-5 text-xl sm:text-xl text-center'>
      Graduating from Eckerd College with a Bachelor of Science in Computer
      Science and Economics, Blockchain technology has always been an interest
      of Caleb’s. Since 2017, Caleb has actively traded both cryptocurrencies
      and U.S equities, where the inspiration for Vapur was born.
     </p>
    </div>
    <div className='flex-1 p-5 flex flex-col items-center justify-center'>
     <img className='w-2/4 lg:w-1/3 rounded-md' src='matt.webp' alt='' />

     <a
      className='
       transition-colors
       text-light text-center
       lg:text-left
       pt-5
       glory
       text-3xl
       sm:text-4xl
       duration-100
       hover:text-primary
      '
      target='_blank'
      rel='noopener noreferrer'
      href='https://www.linkedin.com/in/matthew-klimek-37629b153/'
     >
      Matthew Klimek
     </a>
     <p className='text-light text-center lg:text-left text-xl z-10'>
      Co-Founder & UI/UX Engineer
     </p>
     <p className='text-light pt-5 text-xl sm:text-xl text-center'>
      Matthew began his official digital exploration back in 2015 when he
      co-authored a book about digital marketing with Jay Berkowitz. In 2020 he
      recieved a bachelor's degree in Computer Science from Eckerd College.
      Today, he owns a profitable delta-8 distribution company.
     </p>
    </div>
   </div>
   */}
  </section>
 );
}

export default team;
