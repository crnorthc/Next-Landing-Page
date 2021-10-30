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
import Features from "../components/features";
import Roadmap from "../components/roadmap";
import Team from "../components/team";
import Footer from "../components/footer";
import pickAGame from "../components/pickAGame.js";

export default function Home() {
 return (
  <div className='bg-dark bodyClass'>
   <div className='tokenCont'></div>
   <Navbar />
   <Showcase />
   <GameOverview />
   <PickAGame />
   <ChooseATier />
   <CreateALineup />
   <PortfolioCompete />
   <WinCryptocurrency />
   {/* <Features /> */}
   <Roadmap />
   <Team />
   <Footer />
   <Script src='../public/tokens' strategy='lazyOnload' />
  </div>
 );
}
