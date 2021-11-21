import Navbar from "../components/navbar";
import Head from "next/head";
// import Script from "next/script";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
// import "../public/tokens.js";
import ScrollAnimation from "react-animate-on-scroll";

import { CopyToClipboard } from "react-copy-to-clipboard";

const showcase = () => {
 const [spot, setSpot] = useState(null); // a users spot on the waitlist
 const [total, setTotal] = useState(null); // total amount of people signed up
 const [referral_link, setReferralLink] = useState(null); // the link for users to share with friends
 const [referrals, setReferrals] = useState(0); // number of referrals person has
 const [hasJoined, setJoined] = useState(false); // has joined waitlist
 const [submittedEmail, setSubmittedEmail] = useState("");
 const [copied, setCopied] = useState("Copy");

 const handleScroll = () => {
  let nav = document.querySelector(".home-nav");
  nav.classList.toggle("scrolling-active", window.scrollY > 0);
 };

 useEffect(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
 });

 const handleSubmit = () => {
  addToWaitlist(submittedEmail);
 };

 useEffect(() => {
  const cookies = new Cookies();
  const cookie = cookies.getAll();

  const config = {
   headers: {
    "Content-Type": "application/json",
   },
  };

  if ("user_email" in cookie) {
   const body = JSON.stringify({
    email: cookie["user_email"],
    api_key: "QZ83SF",
   });
   setJoined(true);

   axios
    .post("https://getwaitlist.com/api/v1/users/status", body, config)
    .then((res) => {
     setSpot(res.data.current_priority);
     setTotal(res.data.total_users);
     setReferralLink(res.data.referral_link);
     setReferrals(res.data.total_referrals);
    });
  }
 }, []);

 const addToWaitlist = (email) => {
  setJoined(true);
  const config = {
   headers: {
    "Content-Type": "application/json",
   },
  };

  const body = JSON.stringify({
   email,
   api_key: "QZ83SF",
   referral_link: document.URL,
  });

  axios
   .post("https://getwaitlist.com/api/v1/waitlists/submit", body, config)
   .then((res) => {
    console.log(res.data);
    setSpot(res.data.current_priority);
    setTotal(res.data.total_users);
    setReferralLink(res.data.referral_link);
    const cookie = new Cookies();
    cookie.set("user_email", email, { maxAge: 31540000 });
   });
 };

 const text_md = "text-light poppins text-md sm:text-2xl text-center z-10 pb-2";
 const text_sm = "text-light poppins text-sm sm:text-2xl text-center z-10 pb-2";

 return (
  <div className=''>
   <Head>
    <meta charset='UTF-8' />
    <meta http-equiv='X-UA-Compatible' content='IE=edge' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <link rel='shortcut icon' type='image/svg' href='vapur.svg' />
    <title>Vapur</title>
   </Head>

   <div className='hidden sm:block'>
    <Navbar />
   </div>
   <div className='showcase py-10'>
    <div
     className='
     flex
     items-center
     justify-center
     flex-col
     mt-20
     mb-40
     px-4
     space-y-3
     sm:space-y-6
     max-w-3xl
     mx-auto
     h-1/2
    '
    >
     <ScrollAnimation
      animateOnce
      animateIn='animate__fadeInUp'
      duration={0.5}
      delay={0}
      className='z-10'
     >
      <h1 className='text-light text-5xl sm:text-8xl text-center  glory'>
       May The Best
       <br />
       Investor Win!
      </h1>
     </ScrollAnimation>

     <ScrollAnimation
      animateOnce
      animateIn='animate__fadeInUp'
      duration={0.5}
      delay={200}
      className='z-10'
     >
      <p className={hasJoined ? text_sm : text_md}>
       Vapur will be the largest fantasy financial trading platform in the
       world, disrupting the market with cryptocurrency wagers.
      </p>
     </ScrollAnimation>
     <ScrollAnimation
      animateOnce
      animateIn='animate__fadeInUp'
      duration={0.5}
      delay={400}
      className='z-10'
     >
      {hasJoined ? (
       <div className='z-10 bg-medium p-4 rounded-xl medium-shadow-medium'>
        <p
         className='text-light
      poppins
      text-xs
      sm:text-lg
      text-center
      pb-4
      '
        >
         Thanks for signing up! The top{" "}
         <span className='text-primary font-bold'> 10,000</span> players will be
         invited to early access! Move up{" "}
         <span className='text-secondary font-bold'> 10</span> spots when
         someone signs up using your referral link.
         <br />
        </p>
        <div className='flex items-center justify-center flex-col sm:flex-row space-y-2 space-x-0 sm:space-x-10 '>
         <p
          className='
         text-light
     
      poppins
      text-xs
      sm:text-lg
      text-center
      '
         >
          Your position:
          <span className='text-secondary font-bold'> {spot}</span> | Total
          players:
          <span className='text-primary font-bold'> {total}</span> <br />
          You currently have{" "}
          <span className='text-green font-bold'> {referrals}</span> referrals.
         </p>
         <div className='flex items-center justify-center rounded flex-1 bg-light'>
          <input
           className='p-4 rounded-l bg-light w-full text-xs sm:text-lg'
           readOnly
           type='text'
           value={referral_link}
          />
          <CopyToClipboard
           text={referral_link}
           onCopy={() => setCopied("Copied!")}
          >
           <button className='bg-primary w-24 py-4 text-xs sm:text-lg text-white rounded '>
            {copied}
           </button>
          </CopyToClipboard>

          {/* {this.state.copied ? (
         <span style={{ color: "red" }}>Copied.</span>
        ) : null} */}
         </div>
        </div>
       </div>
      ) : (
       <div className='flex items-start justify-center bg-white rounded-md z-10 w-full '>
        <input
         type='text'
         onChange={(e) => setSubmittedEmail(e.target.value)}
         className='rounded-l-md px-2 sm:px-4 text-xs sm:text-xl text-dark poppins h-12 flex-1'
         placeholder='ex: elonmusk@spacex.com'
        />
        <button
         type='submit'
         onClick={() => handleSubmit()}
         className='rounded-md px-2 sm:px-4 text-sm sm:text-xl  bg-primary text-white h-12 transition-colors duration-100 hover:bg-primaryTransition'
        >
         Get Early Access
        </button>
       </div>
      )}
     </ScrollAnimation>
    </div>

    <div
     className='
     absolute
     w-full
     chart-vertical
     bottom-0
     left-0
     flex
     items-center
     justify-evenly
    '
    >
     <div className='z-0 bg-medium opacity-30 chart-width h-screen'></div>
     <div className='z-0 bg-medium opacity-30 chart-width h-screen'></div>
     <div className='z-0 bg-medium opacity-30 chart-width h-screen'></div>
     <div className='z-0 bg-medium opacity-30 chart-width h-screen'></div>
     <div className='z-0 bg-medium opacity-30 chart-width h-screen'></div>
     <div className='z-0 bg-medium opacity-30 chart-width h-screen'></div>
     <div className='z-0 bg-medium opacity-30 chart-width h-screen'></div>
     <div className='z-0 bg-medium opacity-30 chart-width h-screen'></div>
     <div className='z-0 bg-medium opacity-30 chart-width h-screen'></div>
     <div className='z-0 bg-medium opacity-30 chart-width h-screen'></div>

     <div className='z-0 bg-medium opacity-30 chart-width h-screen hidden sm:block'></div>
     <div className='z-0 bg-medium opacity-30 chart-width h-screen hidden sm:block'></div>
     <div className='z-0 bg-medium opacity-30 chart-width h-screen hidden sm:block'></div>
     <div className='z-0 bg-medium opacity-30 chart-width h-screen hidden sm:block'></div>
     <div className='z-0 bg-medium opacity-30 chart-width h-screen hidden sm:block'></div>
     <div className='z-0 bg-medium opacity-30 chart-width h-screen hidden sm:block'></div>
     <div className='z-0 bg-medium opacity-30 chart-width h-screen hidden sm:block'></div>
     <div className='z-0 bg-medium opacity-30 chart-width h-screen hidden sm:block'></div>
     <div className='z-0 bg-medium opacity-30 chart-width h-screen hidden sm:block'></div>
     <div className='z-0 bg-medium opacity-30 chart-width h-screen hidden sm:block'></div>
    </div>

    <div
     className='
     moving-chart
     absolute
     w-full
     chart-horizontal
     bottom-0
     left-0
     flex flex-col
     items-center
     justify-between
    '
    >
     <div className='z-0 bg-medium opacity-30 w-full chart-height'></div>
     <div className='z-0 bg-medium opacity-30 w-full chart-height'></div>
     <div className='z-0 bg-medium opacity-30 w-full chart-height'></div>
     <div className='z-0 bg-medium opacity-30 w-full chart-height'></div>
     <div className='z-0 bg-medium opacity-30 w-full chart-height'></div>
     <div className='z-0 bg-medium opacity-30 w-full chart-height'></div>
     <div className='z-0 bg-medium opacity-30 w-full chart-height'></div>
     <div className='z-0 bg-medium opacity-30 w-full chart-height'></div>
     <div className='z-0 bg-medium opacity-30 w-full chart-height'></div>
     <div className='z-0 bg-medium opacity-30 w-full chart-height'></div>
     <div className='z-0 bg-medium opacity-30 w-full chart-height'></div>
     <div className='z-0 bg-medium opacity-30 w-full chart-height'></div>
     <div className='z-0 bg-medium opacity-30 w-full chart-height'></div>
     <div className='z-0 bg-medium opacity-30 w-full chart-height'></div>
     <div className='z-0 bg-medium opacity-30 w-full chart-height'></div>
     <div className='z-0 bg-medium opacity-30 w-full chart-height'></div>
     <div className='z-0 bg-medium opacity-30 w-full chart-height'></div>
     <div className='z-0 bg-medium opacity-30 w-full chart-height'></div>
     <div className='z-0 bg-medium opacity-30 w-full chart-height'></div>
     <div className='z-0 bg-medium opacity-30 w-full chart-height'></div>
     <div className='z-0 bg-medium opacity-30 w-full chart-height'></div>
     <div className='z-0 bg-medium opacity-30 w-full chart-height'></div>
    </div>

    <section>
     <div className='ocean'></div>
     <div className='ocean-front'></div>
     <div className='wave wave1'></div>
     <div className='wave wave2'></div>
     <div className='wave wave3'></div>
     <div className='wave wave4'></div>
     <div className='low-1'></div>
     <div className='low-2'></div>
     <div className='low-3'></div>
    </section>
   </div>
  </div>
 );
};

export default showcase;
