// import Script from "next/script";
// import "../public/tokens.js";
import Navbar from "../components/navbar";
import Showcase from "../components/showcase";
import GameOverview from "../components/gameOverview";
import Features from "../components/features";
import Roadmap from "../components/roadmap";
import Team from "../components/team";
import Footer from "../components/footer";

export default function Home() {
 return (
  <div className='bg-dark bodyClass'>
   <Navbar />
   <Showcase />
   <GameOverview />
   <Features />
   <Roadmap />
   <Team />
   <Footer />
   {/* <Script src='../public/tokens' strategy='lazyOnload' /> */}
  </div>
 );
}
