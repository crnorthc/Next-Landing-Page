import React, { useState, useEffect } from "react";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";

const gameOverview = () => {
 const [isVapur, setisVapur] = useState(false);
 const [initiallyHidden, setInitiallyHidden] = useState("hidden");
 const [hideAfterAnimation, setHideAfterAnimation] = useState("");
 const [removeHidden, setRemoveHidden] = useState("");
 const [lineupIn, setLineupIn] = useState("");
 const [lineupOut, setLineupOut] = useState("lineup-out");

 const FantasyFootball = () => {
  if (isVapur) {
   setisVapur(false);

   const timer = setTimeout(() => {
    setHideAfterAnimation("");
   }, 1000);

   return () => {
    clearTimeout(timer);
   };
  }
 };

 const Vapur = () => {
  if (!isVapur) {
   setisVapur(true);

   const timer = setTimeout(() => {
    setHideAfterAnimation("hidden");
    setInitiallyHidden("");
    setLineupIn("lineup-in");
   }, 1000);
   setInitiallyHidden("hidden");
   setLineupIn("");
   return () => clearTimeout(timer);
  }
 };
 return (
  <section id='gameOverview' className='background-ocean'>
   <div className='background-secondary pt-16 sm:pt-40 pb-10 sm:pb-20 px-5 over-tokens '>
    {/* Bottom pipe */}
    <div className='absolute z-50 bottom-0 left-0 right-0 h-20 bg-medium xl:rounded-tr-2xl'>
     <div className='absolute z-50 bottom-8 left-0 right-0 xl:right-10 h-3 bg-light pipe-shine'></div>
     <div className='hidden xl:block absolute bottom-0 right-8 w-3 h-8 bg-light pipe-shine'></div>
    </div>

    {/* blur bug fix */}
    <div className=' absolute  top-0 left-0 w-1 h-1 bg-ocean pipe-shine'></div>

    {/* page content */}
    <div className='flex flex-col-reverse md:flex-row justify-center md:space-x-16  max-w-6xl mx-auto pb-12'>
     <div class='block'>
      <div className='flex flex-col items-center justify-start bg-medium medium-shadow-big rounded-xl px-5 py-8 lineup-background-size lineup-box-animation space-y-5'>
       <div>
        <h3 className='text-light text-center text-3xl glory'>Mach Lineups</h3>
        <p className='text-light text-center text-md lg:text-lg poppins'>
         Similar concept. Different lineups.
        </p>
       </div>
       <div className='flex items-start justify-center space-x-2 sm:leading-8 sm:space-x-4 w-full'>
        <button
         onClick={() => FantasyFootball()}
         className={`${
          !isVapur ? " border-primary" : "border-medium"
         } border-b-4 sm:border-b-8 flex-1 text-md xs:text-lg sm:text-xl  glory text-light transition duration-400 ease-in-out transform hover:-translate-y-1 hover:scale-110 pb-2`}
        >
         Fantasy Football
        </button>
        <button
         onClick={() => Vapur()}
         className={`${
          isVapur ? " border-primary" : "border-medium"
         } border-b-4 sm:border-b-8 flex-1 text-md xs:text-lg sm:text-xl  glory text-light transition duration-400 ease-in-out transform hover:-translate-y-1 hover:scale-110 pb-2 `}
        >
         Vapur Trading
        </button>
       </div>
       <div className='flex flex-col items-center justify-center poppins  w-full'>
        {/* fantasy football */}
        <div
         className={`${
          isVapur
           ? `${lineupOut}-1 ${hideAfterAnimation}`
           : `${lineupIn}-1 ${hideAfterAnimation}`
         }  flex  items-center justify-between rounded-xl w-full md:w-80 xl:w-92 bg-dark px-2 xs:px-4 py-4  medium-shadow-small text-white poppins mb-5`}
        >
         <div className='flex  items-center justify-center space-x-3 '>
          <Image
           className=' w-24 rounded-full bg-light'
           height={60}
           width={60}
           src='/t-brady.png'
           alt=''
          />
          <div className='flex flex-col items-start justify-center space-y-1'>
           <p className='text-lg font-bold'>Tom Brady</p>
           <p className='text-sm'>QB | $6,900</p>
          </div>
         </div>

         <div className='flex flex-col items-center justify-center space-y-1'>
          <Image src='/campfire.png' width={25} height={25}></Image>
          <p className='text-sm'>30.67</p>
         </div>
        </div>
        <div
         className={`${
          isVapur
           ? `${lineupOut}-2 ${hideAfterAnimation}`
           : `${lineupIn}-2 ${hideAfterAnimation}`
         }  flex  items-center justify-between rounded-xl w-full md:w-80 xl:w-92 bg-dark px-2 xs:px-4 py-4  medium-shadow-small text-white poppins mb-5`}
        >
         <div className='flex  items-center justify-center space-x-3 '>
          <Image
           className=' w-24 rounded-full bg-light'
           height={60}
           width={60}
           src='/antonio-brown.png'
           alt=''
          />
          <div className='flex flex-col items-start justify-center space-y-1'>
           <p className='text-lg font-bold'>Antonio Brown</p>
           <p className='text-sm'>WR | $4,600</p>
          </div>
         </div>

         <div className='flex flex-col items-center justify-center space-y-1'>
          <Image src='/campfire.png' width={25} height={25}></Image>
          <p className='text-sm'>27.84</p>
         </div>
        </div>
        <div
         className={`${
          isVapur
           ? `${lineupOut}-3 ${hideAfterAnimation}`
           : `${lineupIn}-3 ${hideAfterAnimation}`
         }  flex  items-center justify-between rounded-xl w-full md:w-80 xl:w-92 bg-dark px-2 xs:px-4 py-4  medium-shadow-small text-white poppins mb-5`}
        >
         <div className='flex  items-center justify-center space-x-3 '>
          <Image
           className=' w-24 rounded-full bg-light'
           height={60}
           width={60}
           src='/cody-parkey.png'
           alt=''
          />
          <div className='flex flex-col items-start justify-center space-y-1'>
           <p className='text-lg font-bold'>Cody Parkey</p>
           <p className='text-sm'>K | $4,300</p>
          </div>
         </div>

         <div className='flex flex-col items-center justify-center space-y-1'>
          <Image src='/campfire.png' width={25} height={25}></Image>
          <p className='text-sm'>23.91</p>
         </div>
        </div>
        <div
         className={` hidden md:flex lg:hidden ${
          isVapur
           ? `${lineupOut}-4 md:${hideAfterAnimation} ${hideAfterAnimation}`
           : `${lineupIn}-4 md:${hideAfterAnimation} ${hideAfterAnimation}`
         }  hidden md:flex lg:hidden items-center justify-between rounded-xl w-full md:w-80 xl:w-92 bg-dark px-2 xs:px-4 py-4  medium-shadow-small text-white poppins mb-5`}
        >
         <div className='flex  items-center justify-center space-x-3 '>
          <Image
           className=' w-24 rounded-full bg-light'
           height={60}
           width={60}
           src='/jacob-martin.jpg'
           alt=''
          />
          <div className='flex flex-col items-start justify-center space-y-1'>
           <p className='text-lg font-bold'>Jacob Martin</p>
           <p className='text-sm'>LB | $4,000</p>
          </div>
         </div>

         <div className='flex flex-col items-center justify-center space-y-1'>
          <Image src='/campfire.png' width={25} height={25}></Image>
          <p className='text-sm'>23.11</p>
         </div>
        </div>
        <div
         className={` hidden md:flex lg:hidden ${
          isVapur
           ? `${lineupOut}-5 md:${hideAfterAnimation} ${hideAfterAnimation}`
           : `${lineupIn}-5 md:${hideAfterAnimation} ${hideAfterAnimation}`
         }   items-center justify-between rounded-xl w-full md:w-80 xl:w-92 bg-dark px-2 xs:px-4 py-4  medium-shadow-small text-white poppins mb-5`}
        >
         <div className='flex items-center justify-center space-x-3 '>
          <Image
           className=' w-24 rounded-full bg-light'
           height={60}
           width={60}
           src='/chase-roullier.png'
           alt=''
          />
          <div className='flex flex-col items-start justify-center space-y-1'>
           <p className='text-lg font-bold'>Chase Roullier</p>
           <p className='text-sm'>OL | $3,200</p>
          </div>
         </div>

         <div className='flex flex-col items-center justify-center space-y-1'>
          <Image src='/campfire.png' width={25} height={25}></Image>
          <p className='text-sm'>22.37</p>
         </div>
        </div>
        {/* Vapur */}
        <div
         className={`${
          isVapur
           ? `${lineupIn}-1 ${initiallyHidden}`
           : `${lineupOut}-1 ${initiallyHidden}`
         }  flex  items-center justify-between rounded-xl w-full md:w-80 xl:w-92 bg-dark px-2 xs:px-4 py-4 medium-shadow-small text-white poppins mb-5`}
        >
         <Image width={60} height={60} src='/001-bitcoin.png' alt='' />

         <div className='flex flex-1 items-center justify-between pl-4 pr-2 '>
          <div className=''>
           <p className=''>Bitcoin</p>
           <p className=''>BTC</p>
          </div>

          <div className='text-green flex flex-col items-end'>
           <p className=''>$60,254</p>
           <p className=''>+0.20%</p>
          </div>
         </div>
        </div>
        <div
         className={`${
          isVapur
           ? `${lineupIn}-2 ${initiallyHidden}`
           : `${lineupOut}-2 ${initiallyHidden}`
         }  flex  items-center justify-between rounded-xl w-full md:w-80 xl:w-92 bg-dark px-2 xs:px-4 py-4 medium-shadow-small text-white poppins mb-5`}
        >
         <Image width={60} height={60} src='/004-apple.png' alt='' />

         <div className='flex flex-1 items-center justify-between pl-4 pr-2 '>
          <div className=''>
           <p className=''>Apple</p>
           <p className=''>APPL</p>
          </div>

          <div className='text-green flex flex-col items-end'>
           <p className=''>$153.49</p>
           <p className=''>+0.78%</p>
          </div>
         </div>
        </div>
        <div
         className={`${
          isVapur
           ? `${lineupIn}-3 ${initiallyHidden}`
           : `${lineupOut}-3 ${initiallyHidden}`
         }  flex  items-center justify-between rounded-xl w-full md:w-80 xl:w-92 bg-dark px-2 xs:px-4 py-4 medium-shadow-small text-white poppins mb-5`}
        >
         <Image width={60} height={60} src='/003-paypal.png' alt='' />

         <div className='flex flex-1 items-center justify-between pl-4 pr-2 '>
          <div className=''>
           <p className=''>PayPal</p>
           <p className=''>PYPL</p>
          </div>

          <div className='text-green flex flex-col items-end'>
           <p className=''>$209.65</p>
           <p className=''>+1.34%</p>
          </div>
         </div>
        </div>
        <div
         className={` hidden md:flex lg:hidden ${
          isVapur
           ? `${lineupIn}-4 md:${initiallyHidden}`
           : `${lineupOut}-4 md:${initiallyHidden}`
         }  flex  items-center justify-between rounded-xl w-full md:w-80 xl:w-92 bg-dark px-2 xs:px-4 py-4 medium-shadow-small text-white poppins mb-5`}
        >
         <Image width={60} height={60} src='/005-ethereum.png' alt='' />

         <div className='flex flex-1 items-center justify-between pl-4 pr-2'>
          <div className=''>
           <p className=''>Ethereum</p>
           <p className=''>ETH</p>
          </div>

          <div className='text-green flex flex-col items-end'>
           <p className=''>$4,341.06</p>
           <p className=''>+4.12%</p>
          </div>
         </div>
        </div>
        <div
         className={` hidden md:flex lg:hidden ${
          isVapur
           ? `${lineupIn}-5 md:${initiallyHidden}`
           : `${lineupOut}-5 md:${initiallyHidden}`
         }   items-center justify-between rounded-xl w-full md:w-80 xl:w-92 bg-dark px-2 xs:px-4 py-4 medium-shadow-small text-white poppins mb-5`}
        >
         <Image width={60} height={60} src='/002-netflix.png' alt='' />

         <div className='flex flex-1 items-center justify-between pl-4 pr-2 '>
          <div className=''>
           <p className=''>Netflix</p>
           <p className=''>NFLX</p>
          </div>

          <div className='text-green flex flex-col items-end'>
           <p className=''>$690.01</p>
           <p className=''>+0.51%</p>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>

     <div className='flex flex-col items-center justify-center pb-10 md:pb-0'>
      <h2 className=' text-4xl lg:text-5xl glory text-dark glory pb-5 '>
       <span className='text-primary glory bg-light rounded-xl px-2'>
        Vapur
       </span>{" "}
       is like Fantasy Football of the Stock and Crypto Markets...
      </h2>

      <div className='flex lg:flex-col items-start justify-center w-full '>
       <div className='hidden lg:flex justify-center items-end text-light text-lg  text-center'>
        <div className='flex justify-center items-center w-32 xl:w-40 xl:mr-2'></div>
        <div className='flex justify-center items-center w-28 xl:w-36 mr-3 xl:mr-5 '>
         <ScrollAnimation
          animateOnce
          animateIn='animate__fadeIn'
          duration={0.5}
          delay={0}
         >
          <p className=' glory'>
           Join a <br /> Tournament
          </p>
         </ScrollAnimation>
        </div>
        <div className='flex justify-center items-center  w-28 xl:w-36 mr-3 xl:mr-5'>
         <ScrollAnimation
          animateOnce
          animateIn='animate__fadeIn'
          duration={0.5}
          delay={0}
         >
          <p className=' glory'>
           Choose a <br /> Lineup
          </p>
         </ScrollAnimation>
        </div>
        <div className='flex justify-center items-center  w-28 xl:w-36 mr-3 xl:mr-5'>
         <ScrollAnimation
          animateOnce
          animateIn='animate__fadeIn'
          duration={0.5}
          delay={0}
         >
          <p className=' glory'>
           Compete <br />
           Against Others
          </p>
         </ScrollAnimation>
        </div>
        <div className='flex justify-center items-center  w-28 xl:w-36  '>
         <ScrollAnimation
          animateOnce
          animateIn='animate__fadeIn'
          duration={0.5}
          delay={0}
         >
          <p className=' glory'>
           Win <br /> Currency!
          </p>
         </ScrollAnimation>
        </div>
       </div>

       <div className='flex flex-col lg:flex-row items-center justify-center p-5  space-y-4 lg:space-y-0 space-x-0 lg:space-x-3 xl:space-x-4'>
        <div className='flex flex-col items-center justify-center pb-4 lg:pb-0 border-primary border-b-4 lg:border-0 '>
         <div className='flex items-center justify-center w-20 h-20 xl:w-28 xl:h-28 bg-light light-shadow-small p-2 rounded-xl compare1'>
          <Image src='/fantasy-football.webp' width={150} height={150} />
         </div>
        </div>

        <div className='hidden lg:flex flex-col items-center justify-center space-y-3  compare2'>
         <div className=' w-6 h-2 bg-light light-shadow-small rounded-xl'></div>
         <div className=' w-6 h-2 bg-light light-shadow-small rounded-xl'></div>
        </div>

        <div className='flex flex-col items-center justify-end  '>
         <div className='flex flex-col items-center justify-center w-20 h-20 xl:w-28 xl:h-28 bg-light light-shadow-small  rounded-xl compare3'>
          <div className='bg-light p-1 rounded-t-xl w-full'>
           <p className='glory text-dark text-xs xl:text-lg text-center'>
            Tournament 1
           </p>
          </div>
          <div className='bg-white p-1 w-full'>
           <p className='glory text-dark text-xs xl:text-lg text-center'>
            Tournament 2
           </p>
          </div>

          <div className='bg-light p-1 rounded-b-xl w-full'>
           <p className='glory text-dark text-xs xl:text-lg text-center'>
            Tournament 3
           </p>
          </div>
         </div>
        </div>

        <div className='relative flex items-center justify-center w-2 h-5 lg:w-5 lg:h-2 bg-light light-shadow-small rounded-t rounded-b-xl  lg:rounded-l lg:rounded-r-xl  arrow compare4 '></div>

        <div className='flex flex-col items-center justify-center  '>
         <div className='flex flex-col items-center justify-center w-20 h-20 xl:w-28 xl:h-28 bg-primary light-shadow-small  rounded-xl compare5'>
          <div className='flex items-center justify-start bg-primary px-2 py-1 rounded-t-xl w-full space-x-2'>
           <Image src='/football-helmet.png' height={20} width={20} />
           <p className='flex items-start justify-center glory text-light text-sm xl:text-lg text-center'>
            Brady
           </p>
          </div>
          <div className='flex items-center justify-start bg-primaryDarker px-2 py-1  w-full space-x-2'>
           <Image src='/football-helmet.png' height={20} width={20} />
           <p className='flex items-start justify-center  glory text-light text-sm xl:text-lg text-center'>
            Brown
           </p>
          </div>
          <div className='flex items-center justify-start bg-primary px-2 py-1 rounded-b-xl w-full space-x-2'>
           <Image src='/football-helmet.png' height={20} width={20} />
           <p className='flex items-start justify-center  glory text-light text-sm xl:text-lg text-center'>
            Parkey
           </p>
          </div>
         </div>
        </div>

        <div className='relative flex items-center justify-center w-2 h-5 lg:w-5 lg:h-2 bg-light light-shadow-small rounded-t rounded-b-xl  lg:rounded-l lg:rounded-r-xl  arrow compare6 '></div>

        <div className='flex flex-col items-center justify-center   '>
         <div className='flex flex-col items-center justify-center w-20 h-20 xl:w-28 xl:h-28 bg-light light-shadow-small rounded-xl compare7'>
          <div className='flex items-center justify-start bg-light px-2 py-1  rounded-t-xl w-full space-x-2'>
           <Image src='/overview-man-1.png' height={20} width={20} />
           <p className='flex items-start justify-center  glory text-primaryDarker text-sm xl:text-lg text-center'>
            1. You
           </p>
          </div>
          <div className='flex items-center justify-start bg-white px-2 py-1   w-full space-x-2'>
           <Image src='/overview-woman-1.png' height={20} width={20} />
           <p className='flex items-start justify-center  glory text-dark text-sm xl:text-lg text-center'>
            2. Jess
           </p>
          </div>
          <div className='flex items-center justify-start bg-light px-2 py-1  rounded-b-xl w-full space-x-2'>
           <Image src='/overview-man-2.png' height={20} width={20} />
           <p className='flex items-start justify-center  glory text-dark text-sm xl:text-lg text-center'>
            3. Tim
           </p>
          </div>
         </div>
        </div>

        <div className='relative flex items-center justify-center w-2 h-5 lg:w-5 lg:h-2 bg-light light-shadow-small rounded-t rounded-b-xl  lg:rounded-l lg:rounded-r-xl  arrow compare8 '></div>

        <div className='flex flex-col items-center justify-center  '>
         <div className='flex items-center justify-center w-20 h-20 xl:w-28 xl:h-28 bg-light light-shadow-small p-1 rounded-xl compare9'>
          <Image src='/usd-box.png' height={128} width={128} />
         </div>
        </div>
       </div>

       <div className='flex flex-col lg:hidden text-light text-lg text-center'>
        <ScrollAnimation
         animateOnce
         animateIn='animate__fadeIn'
         duration={0.5}
         delay={0}
        >
         <p className='pt-36 mt-1'>
          Join a <br /> Tornament
         </p>
        </ScrollAnimation>
        <ScrollAnimation
         animateOnce
         animateIn='animate__fadeIn'
         duration={0.5}
         delay={0}
        >
         <p className='pt-16 mt-3 '>
          Choose a <br /> Lineup
         </p>
        </ScrollAnimation>
        <ScrollAnimation
         animateOnce
         animateIn='animate__fadeIn'
         duration={0.5}
         delay={0}
        >
         <p className='pt-12 mt-3 '>
          Compete <br /> Against <br /> Others
         </p>
        </ScrollAnimation>
        <ScrollAnimation
         animateOnce
         animateIn='animate__fadeIn'
         duration={0.5}
         delay={0}
        >
         <p className='pt-16 '>
          Win <br /> Currency
         </p>
        </ScrollAnimation>
       </div>

       <div className='flex flex-col lg:flex-row items-center justify-center p-5  space-y-4 lg:space-y-0 space-x-0 lg:space-x-3 xl:space-x-4'>
        <div className='flex flex-col items-center justify-center pb-4 lg:pb-0 border-primary border-b-4 lg:border-0'>
         <div className='flex items-center justify-center w-20 h-20 xl:w-28 xl:h-28 bg-light light-shadow-small p-2 rounded-xl lowerCompare1'>
          <p className='text-primary text-3xl xl:text-4xl glory'>Vapur</p>
         </div>
        </div>

        <div className='hidden lg:flex flex-col items-center justify-center space-y-3  lowerCompare2'>
         <div className=' w-6 h-2 bg-light light-shadow-small rounded-xl'></div>
         <div className=' w-6 h-2 bg-light light-shadow-small rounded-xl'></div>
        </div>

        <div className='flex flex-col items-center justify-end  '>
         <div className='flex flex-col items-center justify-center w-20 h-20 xl:w-28 xl:h-28 bg-light light-shadow-small  rounded-xl lowerCompare3'>
          <div className='bg-light p-1 rounded-t-xl w-full'>
           <p className='glory text-dark text-xs xl:text-lg text-center'>
            Tournament 1
           </p>
          </div>
          <div className='bg-white p-1 w-full'>
           <p className='glory text-dark text-xs xl:text-lg text-center'>
            Tournament 2
           </p>
          </div>

          <div className='bg-light p-1 rounded-b-xl w-full'>
           <p className='glory text-dark text-xs xl:text-lg text-center'>
            Tournament 3
           </p>
          </div>
         </div>
        </div>

        <div className='relative flex items-center justify-center w-2 h-5 lg:w-5 lg:h-2 bg-light light-shadow-small rounded-t rounded-b-xl  lg:rounded-l lg:rounded-r-xl  arrow lowerCompare4 '></div>

        <div className='flex flex-col items-center justify-center  '>
         <div className='flex flex-col items-center justify-center w-20 h-20 xl:w-28 xl:h-28 bg-secondary light-shadow-small  rounded-xl lowerCompare5'>
          <div className='flex items-center justify-start bg-secondary px-2 py-1 rounded-t-xl w-full space-x-2'>
           <Image src='/overview-apple.png' height={20} width={20} />
           <p className='flex items-start justify-center glory text-light text-sm xl:text-lg text-center'>
            Apple
           </p>
          </div>
          <div className='flex items-center justify-start bg-secondaryDarker px-2 py-1  w-full space-x-2'>
           <Image src='/overview-bitcoin.png' height={20} width={20} />
           <p className='flex items-start justify-center  glory text-light text-sm xl:text-lg text-center'>
            Bitcoin
           </p>
          </div>
          <div className='flex items-center justify-start bg-secondary px-2 py-1 rounded-b-xl w-full space-x-2'>
           <Image src='/overview-google.png' height={20} width={20} />
           <p className='flex items-start justify-center  glory text-light text-sm xl:text-lg text-center'>
            Google
           </p>
          </div>
         </div>
        </div>

        <div className='relative flex items-center justify-center w-2 h-5 lg:w-5 lg:h-2 bg-light light-shadow-small rounded-t rounded-b-xl  lg:rounded-l lg:rounded-r-xl  arrow lowerCompare6 '></div>

        <div className='flex flex-col items-center justify-center   '>
         <div className='flex flex-col items-center justify-center w-20 h-20 xl:w-28 xl:h-28 bg-light light-shadow-small rounded-xl lowerCompare7'>
          <div className='flex items-center justify-start bg-light px-2 py-1 rounded-t-xl w-full space-x-2'>
           <Image src='/overview-man-1.png' height={20} width={20} />
           <p className='flex items-start justify-center  glory text-primaryDarker text-sm xl:text-lg text-center'>
            1. You
           </p>
          </div>
          <div className='flex items-center justify-start bg-white px-2 py-1  w-full space-x-2'>
           <Image src='/overview-woman-1.png' height={20} width={20} />
           <p className='flex items-start justify-center  glory text-dark text-sm xl:text-lg text-center'>
            2. Jess
           </p>
          </div>
          <div className='flex items-center justify-start bg-light px-2 py-1 rounded-b-xl w-full space-x-2'>
           <Image src='/overview-man-2.png' height={20} width={20} />
           <p className='flex items-start justify-center  glory text-dark text-sm xl:text-lg text-center'>
            3. Tim
           </p>
          </div>
         </div>
        </div>

        <div className='relative flex items-center justify-center w-2 h-5 lg:w-5 lg:h-2 bg-light light-shadow-small rounded-t rounded-b-xl  lg:rounded-l lg:rounded-r-xl  arrow lowerCompare8 '></div>

        <div className='flex flex-col items-center justify-center  '>
         <div className='flex items-center justify-center w-20 h-20 xl:w-28 xl:h-28 bg-light light-shadow-small p-1 rounded-xl lowerCompare9'>
          <Image src='/crypto-box.png' height={128} width={128} />
         </div>
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
  </section>
 );
};

export default gameOverview;
