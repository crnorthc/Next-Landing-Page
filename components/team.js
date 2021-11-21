import React, { useState, Fragment } from "react";
import ScrollAnimation from "react-animate-on-scroll";

import { Dialog, Transition } from "@headlessui/react";

function team() {
 let [isOpen, setIsOpen] = useState(false);
 let [isOpen2, setIsOpen2] = useState(false);

 function closeModal() {
  setIsOpen(false);
 }

 function openModal() {
  setIsOpen(true);
 }

 function closeModal2() {
  setIsOpen2(false);
 }

 function openModal2() {
  setIsOpen2(true);
 }

 return (
  <section className='background-ocean ' id='team'>
   <div className='background-dark sm:pt-40 pb-20 sm:pb-40 over-tokens relative'>
    {/* page conter */}
    <div className='relative pb-20  px-2 max-w-6xl mx-auto'>
     <h2 className='text-light text-5xl sm:text-6xl text-center pb-10 glory'>
      Core Team
     </h2>

     <div className='flex flex-col sm:flex-row space-y-10 items-center sm:items-end justify-evenly'>
      <div className='flex flex-col items-center justify-center'>
       <img
        onClick={openModal2}
        className='cursor-pointer w-1/2 md:w-1/2 caleb-head pb-4'
        src='/Caleb.webp'
        alt=''
       />
       <ScrollAnimation
        animateOnce
        animateIn='animate__fadeIn'
        duration={0.5}
        delay={0}
       >
        <h3 className='text-center text-2xl sm:text-4xl text-light glory'>
         Caleb Ryan
        </h3>
       </ScrollAnimation>
       <ScrollAnimation
        animateOnce
        animateIn='animate__fadeIn'
        duration={0.5}
        delay={100}
       >
        <h4 className='text-center text-xl sm:text-2xl  text-primary glory'>
         Co-Founder & <br /> Software Developer
        </h4>
       </ScrollAnimation>
      </div>
      <div className='flex flex-col items-center justify-center'>
       <img
        onClick={openModal}
        className='cursor-pointer w-1/2 md:w-1/2 matt-head pb-4'
        src='/Matt.webp'
        alt=''
       />
       <ScrollAnimation
        animateOnce
        animateIn='animate__fadeIn'
        duration={0.5}
        delay={0}
       >
        <h3 className='text-center text-2xl sm:text-4xl text-light glory'>
         Matthew Klimek
        </h3>
       </ScrollAnimation>
       <ScrollAnimation
        animateOnce
        animateIn='animate__fadeIn'
        duration={0.5}
        delay={100}
       >
        <h4 className='text-center text-xl sm:text-2xl  text-primary glory'>
         Co-Founder & <br /> Software Developer
        </h4>
       </ScrollAnimation>
      </div>
     </div>
    </div>

    <div className='relative  px-2 max-w-6xl mx-auto'>
     <h2 className='text-light text-5xl sm:text-6xl text-center pb-10 glory'>
      Advisors
     </h2>

     <div className='flex flex-col md:hidden space-y-10 items-end justify-evenly'>
      <div className='flex flex-row justify-between items-end'>
       <div className='flex-1 flex flex-col items-center justify-center'>
        <a
         className='no-underline text-center display-none'
         href='https://www.linkedin.com/in/jack-northcott-9ab709/'
         target='_blank'
        >
         <img
          className='w-1/2 inline-block caleb-head pb-4'
          src='/Jack.png'
          alt=''
         />
        </a>
        <ScrollAnimation
         animateOnce
         animateIn='animate__fadeIn'
         duration={0.5}
         delay={0}
        >
         <h3 className='text-center text-2xl sm:text-4xl text-light glory'>
          Jack Northcott
         </h3>
        </ScrollAnimation>
        <ScrollAnimation
         animateOnce
         animateIn='animate__fadeIn'
         duration={0.5}
         delay={100}
        >
         <h4 className='text-center text-xl sm:text-2xl  text-primary glory'>
          Business Advisor
         </h4>
        </ScrollAnimation>
       </div>
       <div className='flex-1 flex flex-col items-center justify-center'>
        <a
         className='no-underline text-center'
         href='https://www.linkedin.com/in/hallzy/'
         target='_blank'
        >
         <img
          className='w-1/2 inline-block matt-head pb-4'
          src='/Dave.png'
          alt=''
         />
        </a>
        <ScrollAnimation
         animateOnce
         animateIn='animate__fadeIn'
         duration={0.5}
         delay={0}
        >
         <h3 className='text-center text-2xl sm:text-4xl text-light glory'>
          Dave Hall
         </h3>
        </ScrollAnimation>
        <ScrollAnimation
         animateOnce
         animateIn='animate__fadeIn'
         duration={0.5}
         delay={100}
        >
         <h4 className='text-center text-xl sm:text-2xl  text-primary glory'>
          Startup Advisor
         </h4>
        </ScrollAnimation>
       </div>
      </div>
      <div className='flex-1 flex flex-col items-center justify-center'>
       <a
        className='no-underline text-center'
        href='https://www.linkedin.com/in/gschwartzman/'
        target='_blank'
       >
        <img
         className='w-1/4 inline-block matt-head pb-4'
         src='/Glenn.png'
         alt=''
        />
       </a>
       <ScrollAnimation
        animateOnce
        animateIn='animate__fadeIn'
        duration={0.5}
        delay={0}
       >
        <h3 className='text-center text-2xl sm:text-4xl text-light glory'>
         Glenn Schwartzman
        </h3>
       </ScrollAnimation>
       <ScrollAnimation
        animateOnce
        animateIn='animate__fadeIn'
        duration={0.5}
        delay={100}
       >
        <h4 className='text-center text-xl sm:text-2xl  text-primary glory'>
         Legal Advisor
        </h4>
       </ScrollAnimation>
      </div>
     </div>

     <div className='hidden md:flex flex-row space-y-10 items-end justify-evenly'>
      <div className='flex-1 flex flex-col items-center justify-center'>
       <a
        className='no-underline text-center display-none'
        href='https://www.linkedin.com/in/jack-northcott-9ab709/'
        target='_blank'
       >
        <img
         className='w-1/2 md:w-1/4 inline-block caleb-head pb-4'
         src='/Jack.png'
         alt=''
        />
       </a>
       <h3 className='text-center text-2xl sm:text-4xl text-light glory'>
        Jack Northcott
       </h3>
       <h4 className='text-center text-xl sm:text-2xl  text-primary glory'>
        Business Advisor
       </h4>
      </div>
      <div className='flex-1 flex flex-col items-center justify-center'>
       <a
        className='no-underline text-center'
        href='https://www.linkedin.com/in/hallzy/'
        target='_blank'
       >
        <img
         className='w-1/2 md:w-1/4 inline-block matt-head pb-4'
         src='/Dave.png'
         alt=''
        />
       </a>
       <h3 className='text-center text-2xl sm:text-4xl text-light glory'>
        Dave Hall
       </h3>
       <h4 className='text-center text-xl sm:text-2xl  text-primary glory'>
        Startup Advisor
       </h4>
      </div>
      <div className='flex-1 flex flex-col items-center justify-center'>
       <a
        className='no-underline text-center'
        href='https://www.linkedin.com/in/gschwartzman/'
        target='_blank'
       >
        <img
         className='w-1/2 md:w-1/4 inline-block matt-head pb-4'
         src='/Glenn.png'
         alt=''
        />
       </a>
       <h3 className='text-center text-2xl sm:text-4xl text-light glory'>
        Glenn Schwartzman
       </h3>
       <h4 className='text-center text-xl sm:text-2xl  text-primary glory'>
        Legal Advisor
       </h4>
      </div>
     </div>
    </div>

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

    {/* Caleb's Modal */}

    <Transition appear show={isOpen2} as={Fragment}>
     <Dialog
      as='div'
      className='fixed inset-0 z-10 overflow-y-auto'
      onClose={closeModal2}
     >
      <div className='min-h-screen px-4 text-center'>
       <Transition.Child
        as={Fragment}
        enter='ease-out duration-300'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='ease-in duration-200'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
       >
        <Dialog.Overlay className='fixed inset-0 bg-dark opacity-70' />
       </Transition.Child>

       {/* This element is to trick the browser into centering the modal contents. */}
       <span className='inline-block h-screen align-middle' aria-hidden='true'>
        &#8203;
       </span>
       <Transition.Child
        as={Fragment}
        enter='ease-out duration-300'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='ease-in duration-200'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
       >
        <div className='inline-block w-full max-w-3xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-light medium-shadow-big rounded-2xl'>
         <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'>
          <div className='flex-1 flex items-center justify-center'>
           <img
            className='rounded w-40 sm:w-full'
            src='/Caleb-Real.webp'
            alt=''
           />
          </div>

          <div className='flex-1 justify-between'>
           <div className='border-b-2 border-medium pb-2'>
            <div className='flex items-end justify-between space-x-4'>
             <Dialog.Title
              as='h3'
              className='text-2xl font-medium leading-6 text-dark'
             >
              Caleb Ryan
             </Dialog.Title>
             <div className='flex items-center justify-start'>
              <a
               className='no-underline'
               href='https://www.linkedin.com/in/caleb--ryan/'
               target='_blank'
              >
               <img
                className='mr-2 w-6 h-6 sm:w-9 sm:h-9'
                src='005-linkedin.svg'
                alt=''
               />
              </a>
             </div>
            </div>
            <Dialog.Title as='h4' className='text-sm  leading-6 text-medium'>
             Co-Founder & Software Developer
            </Dialog.Title>
           </div>
           <div className='mt-2 mb-8 xs:mb-0'>
            <p className='text-dark text-sm leading-5 sm:text-md sm:leading-6'>
             Graduating from Eckerd College with a Bachelor of Science in
             Computer Science and Economics, Blockchain technology has always
             been an interest of Caleb’s. Since 2017, Caleb has actively traded
             both cryptocurrencies and U.S equities, where the inspiration for
             Vapur was born.
            </p>
           </div>

           <div className='absolute bottom-4 right-4'>
            <button
             type='button'
             className='inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
             onClick={closeModal2}
            >
             X
            </button>
           </div>
          </div>
         </div>
        </div>
       </Transition.Child>
      </div>
     </Dialog>
    </Transition>

    {/* Matt's Modal */}

    <Transition appear show={isOpen} as={Fragment}>
     <Dialog
      as='div'
      className='fixed inset-0 z-10 overflow-y-auto'
      onClose={closeModal}
     >
      <div className='min-h-screen px-4 text-center'>
       <Transition.Child
        as={Fragment}
        enter='ease-out duration-300'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='ease-in duration-200'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
       >
        <Dialog.Overlay className='fixed inset-0 bg-dark opacity-70' />
       </Transition.Child>

       {/* This element is to trick the browser into centering the modal contents. */}
       <span className='inline-block h-screen align-middle' aria-hidden='true'>
        &#8203;
       </span>
       <Transition.Child
        as={Fragment}
        enter='ease-out duration-300'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='ease-in duration-200'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
       >
        <div className='inline-block w-full max-w-3xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-light medium-shadow-big  rounded-2xl'>
         <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'>
          <div className='flex-1 flex items-center justify-center'>
           <img
            className='rounded w-40 sm:w-full'
            src='/Matt-Real.webp'
            alt=''
           />
          </div>

          <div className='flex-1'>
           <div className='border-b-2 border-medium pb-2'>
            <div className='flex items-end justify-between '>
             <Dialog.Title
              as='h3'
              className='text-xl sm:text-2xl  font-medium leading-6 text-dark flex-1'
             >
              Matthew Klimek
             </Dialog.Title>
             <div className='flex items-center justify-start'>
              <a
               className='no-underline'
               href='https://www.linkedin.com/in/matthew-klimek-37629b153/'
               target='_blank'
              >
               <img
                className='mr-2 w-6 h-6 sm:w-9 sm:h-9'
                src='005-linkedin.svg'
                alt=''
               />
              </a>
              <a
               className='no-underline'
               href='https://twitter.com/gravityhaha'
               target='_blank'
              >
               <img
                className='mr-2 w-6 h-6 sm:w-9 sm:h-9'
                src='004-twitter.svg'
                alt=''
               />
              </a>
             </div>
            </div>
            <Dialog.Title as='h4' className='text-sm leading-6 text-medium'>
             Co-Founder & Software Developer
            </Dialog.Title>
           </div>
           <div className='mt-2 mb-8 xs:mb-0'>
            <p className='text-dark text-sm leading-5 sm:text-md sm:leading-6'>
             Matthew began his official digital exploration back in 2015 when he
             co-authored a book about digital marketing with Jay Berkowitz. In
             2020 he recieved a bachelor's degree in Computer Science. His
             attention shifted towards investing in stocks and cryptocurrency in
             early 2018, and blockchain technology soon after.
            </p>
           </div>

           <div className='absolute bottom-4 right-4'>
            <button
             type='button'
             className='inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
             onClick={closeModal}
            >
             X
            </button>
           </div>
          </div>
         </div>
        </div>
       </Transition.Child>
      </div>
     </Dialog>
    </Transition>
   </div>
  </section>
 );
}

export default team;
