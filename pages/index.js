import Script from "next/script";
import "../public/tokens.js";
import Navbar from "../components/navbar";
import Showcase from "../components/showcase";
import GameOverview from "../components/gameOverview";
import PickAGame from "../components/pickAGame";
import ChooseATier from "../components/chooseATier";
import CreateALineup from "../components/createALineup";
import PortfolioCompete from "../components/portfolioCompete";
import WinCryptocurrency from "../components/winCryptocurrency";
import Roadmap from "../components/roadmap";
import Team from "../components/team";
import Footer from "../components/footer";
import { useEffect, useState } from "react";

export default function Home() {
 const [y, setY] = useState(0);

 function scrollToTop() {
  window.scrollTo({
   top: 0,
   behavior: "smooth",
  });
 }

 const handleScroll = () => {
  setY(window.scrollY);
 };

 useEffect(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
 });

 return (
  <div className='bg-dark bodyClass'>
   <div className='tokenCont'></div>
   <div className='sm:hidden flex-row flex z-50 fixed top-3 right-2'>
    <a href='https://t.me/joinchat/haNcc0MiOx4zMDNh' target='_blank'>
     <img className='mr-4 w-9 h-9' src='001-telegram.svg' alt='' />
    </a>
    <a href='https://www.instagram.com/vapurofficial/' target='_blank'>
     <img className='mr-4 w-9 h-9' src='002-instagram.svg' alt='' />
    </a>
    <a href='https://twitter.com/VapurOfficial' target='_blank'>
     <img className='mr-4 w-9 h-9' src='004-twitter.svg' alt='' />
    </a>
    <a href='https://www.linkedin.com/company/vapur' target='_blank'>
     <img className='mr-4 w-9 h-9' src='005-linkedin.svg' alt='' />
    </a>
   </div>
   <div className='sm:hidden z-50 fixed bottom-1 right-2'>
    {y == 0 ? (
     <div className='mt-4 w-9 h-9' />
    ) : (
     <button onClick={() => scrollToTop()}>
      <img className='mt-4 w-9 h-9' src='To-Top.svg' alt='' />
     </button>
    )}
   </div>
   <Navbar />
   <Showcase />
   <GameOverview />
   <PickAGame />
   <ChooseATier />
   <CreateALineup />
   <PortfolioCompete />
   <WinCryptocurrency />
   <Roadmap />
   <Team />
   <Footer />
   <Script src='../public/tokens' strategy='lazyOnload' />
  </div>
 );
}
