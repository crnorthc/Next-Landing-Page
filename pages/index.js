import Head from 'next/head'

export default function Home() {
  return (
	<div className="flex flex-col items-center justify-center min-h-screen py-2">
		<Head>
			<meta charset="UTF-8" />
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel='stylesheet' href='style.css'/>
			<link rel='stylesheet' href='tailwind.css'/>
			<link rel="shortcut icon" type="image/svg" href="vapur.svg"/>
			<title>Vapur</title>
		</Head>	  
		<div className="bodyClass bg-dark">
  <div className="tokenCont"></div>
  <div className="fixed w-full z-20">
    <div className="
     home-nav
     relative
     p-5
     flex flex-col
     sm:flex-row
     items-center
     justify-between
    ">
      <div>
        <img className="w-20 hidden sm:block" src="FinalLogo.svg" alt="" />
        <img className="w-20 sm:hidden" src="FinalLogo.svg" alt="" />
      </div>
      <div className="space-x-1 sm:space-x-4 text-sm pt-2 sm:pt-0 sm:text-xl text-light">
        <a className="transition-colors duration-100 hover:text-primary glory" href="#features">Features</a>
        <a className="transition-colors duration-100 hover:text-primary glory" href="#roadmap">Roadmap</a>
        <a className="transition-colors duration-100 hover:text-primary glory" target="_blank" rel="noopener noreferrer"
          href="/WhitePaper.pdf">White Paper</a>
        <a className="transition-colors duration-100 hover:text-primary glory" href="#team">Team</a>
      </div>
    </div>
  </div>
  <div className="showcase">
    <div className="
     flex
     items-center
     justify-center
     flex-col
     h-screen
     p-2
     space-y-3
     sm:space-y-6
    ">
      <h1 className="text-light text-5xl sm:text-8xl text-center z-10 px-4 glory">
        May The Best<br />
        Investor Win!
      </h1>
      <p className="
      text-light
      poppins
      text-md
      sm:text-2xl
      text-center
      max-w-3xl
      z-10
      px-4
     ">
        Vapur is a fantasy trading platform where players compete in wagered
        competitions by predicting which stocks and cryptocurrencies will perform
        the best in an allotted amount of time.
      </p>
      <div className="flex items-center justify-end pt-0 z-10 space-x-5 sm:space-x-10">
        <a className="
       w-7
       sm:w-10
       h-7
       sm:h-10
       transition
       duration-150
       ease-in-out
       transform
       hover:scale-125
      " href="https://t.me/joinchat/haNcc0MiOx4zMDNh" target="_blank"><img src="001-telegram.svg" alt="" /></a>
        <a className="
       w-7
       sm:w-10
       h-7
       sm:h-10
       transition
       duration-150
       ease-in-out
       transform
       hover:scale-125
      " href="https://www.instagram.com/vapurofficial/" target="_blank"><img src="002-instagram.svg" alt="" /></a>

        <a className="
       w-7
       sm:w-10
       h-7
       sm:h-10
       transition
       duration-150
       ease-in-out
       transform
       hover:scale-125
      " href="https://twitter.com/VapurOfficial" target="_blank"><img src="004-twitter.svg" alt="" /></a>
        <a className="
       w-7
       sm:w-10
       h-7
       sm:h-10
       transition
       duration-150
       ease-in-out
       transform
       hover:scale-125
      " href="https://www.linkedin.com/company/vapur" target="_blank"><img src="005-linkedin.svg" alt="" /></a>
      </div>
    </div>

    <div className="
     absolute
     w-full
     h-screen
     bottom-0
     left-0
     flex
     items-center
     justify-evenly
    ">
      <div className="z-0 bg-medium opacity-30 chart-width h-screen"></div>
      <div className="z-0 bg-medium opacity-30 chart-width h-screen"></div>
      <div className="z-0 bg-medium opacity-30 chart-width h-screen"></div>
      <div className="z-0 bg-medium opacity-30 chart-width h-screen"></div>
      <div className="z-0 bg-medium opacity-30 chart-width h-screen"></div>
      <div className="z-0 bg-medium opacity-30 chart-width h-screen"></div>
      <div className="z-0 bg-medium opacity-30 chart-width h-screen"></div>
      <div className="z-0 bg-medium opacity-30 chart-width h-screen"></div>
      <div className="z-0 bg-medium opacity-30 chart-width h-screen"></div>
      <div className="z-0 bg-medium opacity-30 chart-width h-screen"></div>

      <div className="z-0 bg-medium opacity-30 chart-width h-screen hidden sm:block"></div>
      <div className="z-0 bg-medium opacity-30 chart-width h-screen hidden sm:block"></div>
      <div className="z-0 bg-medium opacity-30 chart-width h-screen hidden sm:block"></div>
      <div className="z-0 bg-medium opacity-30 chart-width h-screen hidden sm:block"></div>
      <div className="z-0 bg-medium opacity-30 chart-width h-screen hidden sm:block"></div>
      <div className="z-0 bg-medium opacity-30 chart-width h-screen hidden sm:block"></div>
      <div className="z-0 bg-medium opacity-30 chart-width h-screen hidden sm:block"></div>
      <div className="z-0 bg-medium opacity-30 chart-width h-screen hidden sm:block"></div>
      <div className="z-0 bg-medium opacity-30 chart-width h-screen hidden sm:block"></div>
      <div className="z-0 bg-medium opacity-30 chart-width h-screen hidden sm:block"></div>
    </div>

    <div className="
     moving-chart
     absolute
     w-full
     h-screen
     bottom-0
     left-0
     flex flex-col
     items-center
     justify-between
    ">
      <div className="z-0 bg-medium opacity-30 w-full chart-height"></div>
      <div className="z-0 bg-medium opacity-30 w-full chart-height"></div>
      <div className="z-0 bg-medium opacity-30 w-full chart-height"></div>
      <div className="z-0 bg-medium opacity-30 w-full chart-height"></div>
      <div className="z-0 bg-medium opacity-30 w-full chart-height"></div>
      <div className="z-0 bg-medium opacity-30 w-full chart-height"></div>
      <div className="z-0 bg-medium opacity-30 w-full chart-height"></div>
      <div className="z-0 bg-medium opacity-30 w-full chart-height"></div>
      <div className="z-0 bg-medium opacity-30 w-full chart-height"></div>
      <div className="z-0 bg-medium opacity-30 w-full chart-height"></div>
      <div className="z-0 bg-medium opacity-30 w-full chart-height"></div>
      <div className="z-0 bg-medium opacity-30 w-full chart-height"></div>
      <div className="z-0 bg-medium opacity-30 w-full chart-height"></div>
      <div className="z-0 bg-medium opacity-30 w-full chart-height"></div>
      <div className="z-0 bg-medium opacity-30 w-full chart-height"></div>
      <div className="z-0 bg-medium opacity-30 w-full chart-height"></div>
      <div className="z-0 bg-medium opacity-30 w-full chart-height"></div>
      <div className="z-0 bg-medium opacity-30 w-full chart-height"></div>
      <div className="z-0 bg-medium opacity-30 w-full chart-height"></div>
      <div className="z-0 bg-medium opacity-30 w-full chart-height"></div>
      <div className="z-0 bg-medium opacity-30 w-full chart-height"></div>
      <div className="z-0 bg-medium opacity-30 w-full chart-height"></div>
    </div>

    <section>
      <div className="ocean"></div>
      <div className="ocean-front"></div>
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>
      <div className="low-1"></div>
      <div className="low-2"></div>
      <div className="low-3"></div>
    </section>
  </div>

  <section id="gameplay" className="bg-secondary pt-20 sm:pt-40 pb-10 sm:pb-20 px-5 sm:px-10 over-tokens">
    <h2 className="text-light text-5xl sm:text-6xl pt-3 pb-10 text-center glory">
      Game Overview
    </h2>

    <p className="text-light mx-auto max-w-4xl text-xl sm:text-2xl text-center p-5 bg-ocean rounded-xl">
      Fantasy trading on Vapur is modeled after the core concepts of fantasy
      sports leagues. However, instead of players, users will create a lineup of
      stocks and/or cryptos and instead of games, the markets will be used to
      determine the success of an individual’s lineup. Users of Vapur will have
      three leagues to choose from when selecting a game: stocks, cryptos, and the
      combination of both. By basing Vapur’s core concepts on fantasy sports
      leagues, anyone will have the ability to play! Breaking down the gaming
      experience, there are two main components: choosing a league and creating a
      lineup.
    </p>
  </section>

  <section id="features" className="bg-dark">
    <div className="
     py-10
     sm:py-20
     px-5
     sm:px-10
     over-tokens
     bg-gradient-to-b
     from-secondary
     to-transparent
    ">
      <h2 className="text-light text-5xl sm:text-6xl pt-3 text-center glory">
        Features
      </h2>

      <div className="pt-16 sm:pt-24">
        <h3 className="
       text-center text-light
       over-tokens
       text-4xl
       sm:text-5xl
       pb-10
       glory
      ">
          Join Games!
        </h3>
        <p className="
       text-light
       mx-auto
       max-w-4xl
       over-tokens
       text-xl
       sm:text-2xl
       text-center
       pb-10
      ">
          Players will have three leagues to choose from: stocks, cryptos, and the
          combination of both. The stock and combo game types will be available
          daily (from 9:30 A.M. to 4:30 P.M.), weekly (Mon – Fri) and quarterly
          (following the financial quarters). Games of the crypto type will be
          offered daily (9:30 A.M. – 9:30 A.M) and weekly (Monday 9:30 A.M. – Monday
          9:30 A.M.).
        </p>

        <div className="
       flex flex-col
       p-10
       bg-dark
       over-tokens
       mx-auto
       max-w-6xl
       rounded-xl
      ">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 hidden lg:block">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow ring-4 ring-primary h-96 overflow-y-scroll sm:rounded-lg">
                <table className="min-w-full">
                  <thead className="">
                    <tr className="">
                      <th scope="col" className="
              sticky
              top-0
              bg-medium
              px-6
              py-3
              text-left text-xs text-primary
              uppercase
              tracking-wider
             ">
                        League
                      </th>
                      <th scope="col" className="
              sticky
              top-0
              bg-medium
              px-6
              py-3
              text-left text-xs text-primary
              uppercase
              tracking-wider
             ">
                        Duration
                      </th>
                      <th scope="col" className="
              sticky
              top-0
              bg-medium
              px-6
              py-3
              text-left text-xs text-primary
              uppercase
              tracking-wider
             ">
                        Start Date
                      </th>
                      <th scope="col" className="
              sticky
              top-0
              bg-medium
              px-6
              py-3
              text-left text-xs text-primary
              uppercase
              tracking-wider
             ">
                        Winning Split
                      </th>
                      <th scope="col" className="
              sticky
              top-0
              bg-medium
              px-6
              py-3
              text-left text-xs text-primary
              uppercase
              tracking-wider
             ">
                        Players
                      </th>
                      <th scope="col" className="
              sticky
              top-0
              bg-medium
              px-6
              py-3
              text-left text-xs text-primary
              uppercase
              tracking-wider
             ">
                        Bet
                      </th>
                      <th scope="col" className="
              sticky
              top-0
              bg-medium
              px-6
              py-3
              text-left text-xs text-primary
              uppercase
              tracking-wider
             ">
                        Pot
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-light divide-y-4 divide-medium">
                    <tr className="bg-dark">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-md">Stocks</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-md">Day</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-md">
                          <p className="text-md">10/03/2021</p>
                          <p className="text-md">9:30am</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">Top Player</td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">95</td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">$10+</td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">$2,500</td>
                    </tr>
                    <tr className="bg-dark">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-md">Crypto</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-md">Day</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-md">
                          <p className="text-md">10/03/2021</p>
                          <p className="text-md">9:30am</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">Top Player</td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">67</td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">$10+</td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">$1,350</td>
                    </tr>
                    <tr className="bg-dark">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-md">Stocks & Crypto</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-md">Day</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-md">
                          <p className="text-md">10/03/2021</p>
                          <p className="text-md">9:30am</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">Top Player</td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">116</td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">$10+</td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">$3,900</td>
                    </tr>
                    <tr className="bg-dark">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-md">Stocks</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-md">Week</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-md">
                          <p className="text-md">10/03/2021</p>
                          <p className="text-md">9:30am</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">Top 3 Players</td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">450</td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">$10+</td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">$12,950</td>
                    </tr>
                    <tr className="bg-dark">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-md">Stocks & Crypto</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-md">Week</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-md">
                          <p className="text-md">10/03/2021</p>
                          <p className="text-md">9:30am</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">Top 10%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">300</td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">$50</td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">$15,000</td>
                    </tr>
                    <tr className="bg-dark">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-md">Crypto</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-md">Week</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-md">
                          <p className="text-md">10/03/2021</p>
                          <p className="text-md">9:30am</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">Top 40%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">950</td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">$100</td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">$9,500</td>
                    </tr>
                    <tr className="bg-dark">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-md">Stocks</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-md">Day</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-md">
                          <p className="text-md">10/04/2021</p>
                          <p className="text-md">9:30am</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">Top 10 Players</td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">56</td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">$10+</td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">$585</td>
                    </tr>
                    <tr className="bg-dark">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-md">Crypto</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-md">Day</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-md">
                          <p className="text-md">10/04/2021</p>
                          <p className="text-md">9:30am</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">Top 10%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">350</td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">$50</td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">$17,500</td>
                    </tr>
                    <tr className="bg-dark">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-md">Stocks</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-md">Day</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-md">
                          <p className="text-md">10/05/2021</p>
                          <p className="text-md">9:30am</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">Top 1 Player</td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">45</td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">$10+</td>
                      <td className="px-6 py-4 whitespace-nowrap text-md">$1,115</td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col md:flex-row items-center justify-center lg:hidden space-y-10 md:space-y-0 md:space-x-4">

            <div className="
         flex
         items-center
         justify-center
         bg-medium
         ring-4 ring-primary
         rounded-md
         flex-col
         space-y-2
         w-full
         text-center
        ">
              <h4 className="text-center text-light text-3xl p-5 bg-dark rounded-t-md w-full">Slippery Slope</h4>
              <div className="flex items-center w-full justify-center space-x-5 px-5 pt-5">
                <div className="flex-1">
                  <p className="text-xs text-lightmedium">League</p>
                  <p className="text-md text-light">Crypto</p>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-lightmedium">Duration</p>
                  <p className="text-md text-light">Day</p>
                </div>
              </div>
              <div className="flex items-center w-full justify-center space-x-5 px-5">
                <div className="flex-1">
                  <p className="text-xs text-lightmedium">Players</p>
                  <p className="text-md text-light">200</p>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-lightmedium">Winners</p>
                  <p className="text-md text-light">Top 40%</p>
                </div>
              </div>
              <div className="flex items-center w-full justify-center space-x-5 px-5">
                <div className="flex-1">

                  <p className="text-xs text-lightmedium">Bet</p>
                  <p className="text-md text-light">$50</p>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-lightmedium">Prize</p>
                  <p className="text-md text-light">$100</p>

                </div>
              </div>

              <div className="">
                <p className="text-xs text-lightmedium text-center">Start Date</p>
                <p className="text-md text-light">10/03/21 - 9:30am</p>
              </div>
              <div className="p-5 w-full">
                <button className="w-full block text-lg glory bg-skyblue text-light rounded-md py-1 transition-colors
       
       duration-100
       hover:bg-blue">
                  Join
                </button>
              </div>
            </div>
            <div className="
         flex
         items-center
         justify-center
         bg-medium
          ring-4 ring-primary
         rounded-md
         flex-col
         space-y-2
         w-full
         text-center
        ">
              <h4 className="text-center text-light text-3xl p-5 bg-dark rounded-t-md w-full">Heavy Time</h4>
              <div className="flex items-center w-full justify-center space-x-5 px-5 pt-5">
                <div className="flex-1">
                  <p className="text-xs text-lightmedium">League</p>
                  <p className="text-md text-light">Stock</p>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-lightmedium">Duration</p>
                  <p className="text-md text-light">Day</p>
                </div>
              </div>
              <div className="flex items-center w-full justify-center space-x-5 px-5">
                <div className="flex-1">
                  <p className="text-xs text-lightmedium">Players</p>
                  <p className="text-md text-light">500</p>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-lightmedium">Winners</p>
                  <p className="text-md text-light">Top 10%</p>
                </div>
              </div>
              <div className="flex items-center w-full justify-center space-x-5 px-5">
                <div className="flex-1">

                  <p className="text-xs text-lightmedium">Bet</p>
                  <p className="text-md text-light">$50</p>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-lightmedium">Prize</p>
                  <p className="text-md text-light">$400</p>

                </div>
              </div>

              <div className="">
                <p className="text-xs text-lightmedium text-center">Start Date</p>
                <p className="text-md text-light">10/03/21 - 9:30am</p>
              </div>
              <div className="p-5 w-full">
                <button className="w-full block text-lg glory bg-skyblue text-light rounded-md py-1 transition-colors
       
       duration-100
       hover:bg-blue">
                  Join
                </button>
              </div>
            </div>
            <div className="
         flex
         items-center
         justify-center
         bg-medium
          ring-4 ring-primary
         rounded-md
         flex-col
         space-y-2
         w-full
         text-center
        ">
              <h4 className="text-center text-light text-3xl p-5 bg-dark rounded-t-md w-full">Elephant Rug</h4>
              <div className="flex items-center w-full justify-center space-x-5 px-5 pt-5">
                <div className="flex-1">
                  <p className="text-xs text-lightmedium">League</p>
                  <p className="text-md text-light">Crypto</p>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-lightmedium">Duration</p>
                  <p className="text-md text-light">Day</p>
                </div>
              </div>
              <div className="flex items-center w-full justify-center space-x-5 px-5">
                <div className="flex-1">
                  <p className="text-xs text-lightmedium">Players</p>
                  <p className="text-md text-light">1500</p>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-lightmedium">Winners</p>
                  <p className="text-md text-light">Top 10</p>
                </div>
              </div>
              <div className="flex items-center w-full justify-center space-x-5 px-5">
                <div className="flex-1">

                  <p className="text-xs text-lightmedium">Bet</p>
                  <p className="text-md text-light">$50</p>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-lightmedium">Prize</p>
                  <p className="text-md text-light">$7,500</p>

                </div>
              </div>

              <div className="">
                <p className="text-xs text-lightmedium text-center">Start Date</p>
                <p className="text-md text-light">10/03/21 - 9:30am</p>
              </div>
              <div className="p-5 w-full">
                <button className="w-full block text-lg glory bg-skyblue text-light rounded-md py-1 transition-colors
       
       duration-100
       hover:bg-blue">
                  Join
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>


      <div className="pt-16 sm:pt-24">
        <h3 className="
       text-center text-light
       over-tokens
       text-4xl
       sm:text-5xl
       pb-10
       glory
      ">
          Grow Your Portfolio!
        </h3>
        <p className="
       text-light
       over-tokens
       mx-auto
       max-w-4xl
       text-xl
       sm:text-2xl
       text-center
       pb-10
      ">
          Once a player chooses a game, they have until the start time to choose
          their lineup of stocks, cryptos, or both. For every game, players will
          have $100,000 to allocate on the securities offered in game (stocks,
          cryptos, or both). Once chosen, players will submit their lineup and watch
          as their portfolio grows or shrinks.
        </p>

        <div className="
       grid grid-cols-3
       gap-4
       mx-auto
       max-w-6xl
       bg-dark
       px-5
       py-10
       over-tokens
       rounded-xl
      ">
          <div className="col-span-3 xl:col-span-2">
            <div className="flex items-center justify-between">
              <div className="flex-1 flex flex-col items-start justify-center">
                <p className="text-md sm:text-2xl text-light">$143,006.63</p>
                <p className="text-md sm:text-2xl text-green">+$43,006.63 (43.0%)</p>
              </div>
              <div className="flex-1 flex items-center justify-evenly text-light">
                <p className="text-md sm:text-2xl border-b-4 border-green px-1 sm:px-4">
                  You
                </p>
                <p className="text-md sm:text-2xl border-b-4 border-blue px-1 sm:px-4">
                  Avg
                </p>
                <p className="text-md sm:text-2xl border-b-4 border-primary px-1 sm:px-4">
                  #1
                </p>
              </div>
            </div>

            <div className="
         flex
         items-end
         justify-between
         text-light
         px-3
         py-1
         graphy
         rounded-2xl
         mx-auto
        ">
              <p className="text-md sm:text-2xl">-1</p>
              <p className="text-md sm:text-2xl">-3</p>
              <p className="text-md sm:text-2xl text-primary">Avg</p>
              <p className="text-md sm:text-2xl">+3</p>
              <p className="text-md sm:text-2xl">+1</p>
            </div>
          </div>
          <div className="
        col-span-3
        xl:col-span-1
        flex flex-col
        items-center
        justify-start
        ring-4 ring-medium
        rounded-2xl
        lg:mt-16
        mt-6
       ">
            <h4 className="text-primary text-3xl pt-4">Lineup</h4>
            <div className="flex flex-col items-center justify-start w-full p-5 space-y-4">
              <div className="
          flex flex-row
          items-center
          justify-between
          w-full
          ring-4 ring-green
          rounded-sm
          hover:bg-greenHueHover
          bg-greenHue
         ">
                <div className="flex flex-row items-center">
                  <img className="hidden sm:block" src="apple.svg" alt="" />
                  <div className="pl-3">
                    <p className="text-light text:md sm:text-2xl">Apple</p>
                    <p className="text-light text:sm sm:text-lg">APPL</p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center pr-5">
                  <p className="text-light text:md sm:text-2xl">$155.45</p>
                  <p className="text-green text:sm sm:text-lg">+$26,456.54</p>
                </div>
              </div>
              <div className="
          flex
          items-center
          justify-between
          w-full
          ring-4 ring-green
          rounded-sm
          hover:bg-greenHueHover
          bg-greenHue
         ">
                <div className="flex flex-row items-center">
                  <img className="hidden sm:block" src="amazon.svg" alt="" />
                  <div className="pl-3">
                    <p className="text-light text:md sm:text-2xl">Amazon</p>
                    <p className="text-light text:sm sm:text-lg">AMZN</p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center pr-5">
                  <p className="text-light text:md sm:text-2xl">$3420.22</p>
                  <p className="text-green text:sm sm:text-lg">+$16,784.98</p>
                </div>
              </div>
              <div className="
          flex
          items-center
          justify-between
          w-full
          ring-4 ring-red
          rounded-sm
          hover:bg-redHueHover
          bg-redHue
         ">
                <div className="flex flex-row items-center">
                  <img className="hidden sm:block" src="doge.svg" alt="" />
                  <div className="pl-3">
                    <p className="text-light text:md sm:text-2xl">Dogecoin</p>
                    <p className="text-light text:sm sm:text-lg">DOGE</p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center pr-5">
                  <p className="text-light text:md sm:text-2xl">$0.224</p>
                  <p className="text-red text:sm sm:text-lg">-$234.89</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-16 sm:pt-24">
        <h3 className="
       text-center text-light
       over-tokens
       text-4xl
       sm:text-5xl
       pb-10
       glory
      ">
          Win Crypto!
        </h3>


        <div className="
      bg-dark
      px-2
      py-10
      over-tokens
      rounded-xl
      sm:hidden
     ">
          <div className="col-span-3">
            <h4 className="text-center text-3xl text-primary pb-4">Final Results</h4>
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="
                flex
                flex-col
                items-center
                shadow
                sm:rounded-lg
                py-4
                px-5
               ">
                    <div className="
               flex flex-col
               items-center
               justify-center
               w-full
               h-72
               rounded-2xl
               ring-4 ring-secondary
               p-5
               
               my-4
              ">
                      <img className="h-20 w-20 rounded-full" src="Guy4.png" alt="" />
                      <h4 className="text-center text-3xl text-secondary p-2">Dana Boreg</h4>
                      <div className="
                flex
                items-center
                justify-between
                text-light text-lg
                sm:text-xl
                w-full
                pt-2
               ">
                        <p className="text-md">Position</p>
                        <p className="text-md">#1</p>
                      </div>


                      <div className="
                flex
                items-center
                justify-between
                text-light text-lg
                w-full
                pt-2
               ">
                        <p className="text-md">Prize Amount</p>
                        <p className="text-md">1,302 PUR</p>
                      </div>

                      <div className="
                flex
                items-center
                justify-between
                text-light text-lg
                w-full
                pt-2
               ">
                        <p className="text-md">Final Score</p>
                        <p className="text-md text-green">$136,654</p>
                      </div>
                    </div>
                    <div className="
              flex flex-col
              items-center
              justify-center
              
              h-72
              w-full
              rounded-2xl
              ring-4 ring-secondary
              p-5
              my-4
             ">
                      <img className="h-20 w-20 rounded-full" src="Girl1.png" alt="" />
                      <h4 className="text-center text-3xl text-secondary p-2">Riley Bewer</h4>
                      <div className="
               flex
               items-center
               justify-between
               text-light text-lg
               sm:text-xl
               w-full
               pt-2
              ">
                        <p className="text-md">Position</p>
                        <p className="text-md">#2</p>
                      </div>


                      <div className="
               flex
               items-center
               justify-between
               text-light text-lg
               w-full
               pt-2
              ">
                        <p className="text-md">Prize Amount</p>
                        <p className="text-md">568 PUR</p>
                      </div>

                      <div className="
               flex
               items-center
               justify-between
               text-light text-lg
               w-full
               pt-2
              ">
                        <p className="text-md">Final Score</p>
                        <p className="text-md text-green">$132,458</p>
                      </div>
                    </div>
                    <div className="
             flex flex-col
             items-center
             justify-center
             
             h-72
             w-full
             rounded-2xl
             ring-4 ring-secondary
             p-5
             my-4
            ">
                      <img className="h-20 w-20 rounded-full" src="Guy5.png" alt="" />
                      <h4 className="text-center text-3xl text-secondary p-2">Owen Richards</h4>
                      <div className="
              flex
              items-center
              justify-between
              text-light text-lg
              sm:text-xl
              w-full
              pt-2
             ">
                        <p className="text-md">Position</p>
                        <p className="text-md">#3</p>
                      </div>


                      <div className="
              flex
              items-center
              justify-between
              text-light text-lg
              w-full
              pt-2
             ">
                        <p className="text-md">Prize Amount</p>
                        <p className="text-md">349 PUR</p>
                      </div>

                      <div className="
              flex
              items-center
              justify-between
              text-light text-lg
              w-full
              pt-2
             ">
                        <p className="text-md">Final Score</p>
                        <p className="text-md text-green">$129,792</p>
                      </div>
                    </div>
                    <div className="
            flex flex-col
            items-center
            justify-center
            
            h-72
            w-full
            rounded-2xl
            ring-4 ring-secondary
            p-5
            my-4
            bg-medium
           ">
                      <img className="h-20 w-20 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                        alt="" />
                      <h4 className="text-center text-3xl text-secondary p-2">Ella Nice</h4>
                      <div className="
             flex
             items-center
             justify-between
             text-light text-lg
             sm:text-xl
             w-full
             pt-2
            ">
                        <p className="text-md">Position</p>
                        <p className="text-md">#4</p>
                      </div>


                      <div className="
             flex
             items-center
             justify-between
             text-light text-lg
             w-full
             pt-2
            ">
                        <p className="text-md">Prize Amount</p>
                        <p className="text-md">0.0 PUR</p>
                      </div>

                      <div className="
             flex
             items-center
             justify-between
             text-light text-lg
             w-full
             pt-2
            ">
                        <p className="text-md">Final Score</p>
                        <p className="text-md text-green">$127,568</p>
                      </div>
                    </div>
                    <div className="
           flex flex-col
           items-center
           justify-center
           
           h-72
           w-full
           rounded-2xl
           ring-4 ring-secondary
           p-5
           my-4
          ">
                      <img className="h-20 w-20 rounded-full" src="Guy6.png" alt="" />
                      <h4 className="text-center text-3xl text-secondary p-2">Luca Minter</h4>
                      <div className="
            flex
            items-center
            justify-between
            text-light text-lg
            sm:text-xl
            w-full
            pt-2
           ">
                        <p className="text-md">Position</p>
                        <p className="text-md">#5</p>
                      </div>


                      <div className="
            flex
            items-center
            justify-between
            text-light text-lg
            w-full
            pt-2
           ">
                        <p className="text-md">Prize Amount</p>
                        <p className="text-md">0.0 PUR</p>
                      </div>

                      <div className="
            flex
            items-center
            justify-between
            text-light text-lg
            w-full
            pt-2
           ">
                        <p className="text-md">Final Score</p>
                        <p className="text-md text-green">$128,566</p>
                      </div>
                    </div>



                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="
         grid grid-cols-3
         gap-4
         mx-auto
         max-w-6xl
         bg-dark
         px-5
         py-10
         rounded-xl
         sm:grid
         hidden
        ">
          <div className="col-span-3 lg:col-span-2">
            <h4 className="text-center text-3xl text-primary pb-4">Final Results</h4>
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="
              shadow
              h-96
              overflow-y-scroll
              ring-4 ring-secondary
              sm:rounded-lg
             ">
                    <table className="min-w-full">
                      <thead className="bg-medium">
                        <tr>
                          <th scope="col" className="
                  px-6
                  py-3
                  text-left text-xs text-light
                  uppercase
                  tracking-wider
                 ">
                            Rank
                          </th>
                          <th scope="col" className="
                  px-6
                  py-3
                  text-left text-xs text-light
                  uppercase
                  tracking-wider
                 ">
                            Player
                          </th>
                          <th scope="col" className="
                  px-6
                  py-3
                  text-left text-xs text-light
                  uppercase
                  tracking-wider
                 ">
                            Final Score
                          </th>
                          <th scope="col" className="
                  px-6
                  py-3
                  text-left text-xs text-light
                  uppercase
                  tracking-wider
                 ">
                            Prize
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-light">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm">#1</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img className="h-10 w-10 rounded-full" src="Guy4.png" alt="" />
                              </div>
                              <div className="ml-4">
                                <div className="text-md">Dana Boreg</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-md text-green">$136,654</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-md text-primary">
                            1,302 PUR
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm">#2</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img className="h-10 w-10 rounded-full" src="Girl1.png" alt="" />
                              </div>
                              <div className="ml-4">
                                <div className="text-md">Riley Bewer</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-md text-green">$132,458</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-md text-primary">
                            568 PUR
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm">#3</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img className="h-10 w-10 rounded-full" src="Guy5.png" alt="" />
                              </div>
                              <div className="ml-4">
                                <div className="text-md">Owen Richards</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-md text-green">$129,792</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-md text-primary">
                            349 PUR
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm">#4</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img className="h-10 w-10 rounded-full"
                                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                                  alt="" />
                              </div>
                              <div className="ml-4">
                                <div className="text-md">Ella Nice</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-md text-green">$127,568</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-md text-primary">
                            0.0 PUR
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm">#5</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img className="h-10 w-10 rounded-full" src="Guy6.png" alt="" />
                              </div>
                              <div className="ml-4">
                                <div className="text-md">Luca Minter</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-md text-green">$128,566</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-md text-primary">
                            0.0 PUR
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm">#6</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img className="h-10 w-10 rounded-full" src="Girl2.png" alt="" />
                              </div>
                              <div className="ml-4">
                                <div className="text-md">Cece Thomason</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-md text-green">$125,423</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-md text-primary">
                            0.0 PUR
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm">#7</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img className="h-10 w-10 rounded-full" src="Joey.png" alt="" />
                              </div>
                              <div className="ml-4">
                                <div className="text-md">Joey Webber</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-md text-green">$122,759</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-md text-primary">
                            0.0 PUR
                          </td>
                        </tr>

                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm">#8</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img className="h-10 w-10 rounded-full" src="Guy2.png" alt="" />
                              </div>
                              <div className="ml-4">
                                <div className="text-md">Bill Thornehaw</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-md text-green">$120,011</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-md text-primary">
                            0.0 PUR
                          </td>
                        </tr>

                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm">#9</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img className="h-10 w-10 rounded-full" src="Guy1.png" alt="" />
                              </div>
                              <div className="ml-4">
                                <div className="text-md">Jayven Sofa</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-md text-green">$119,154</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-md text-primary">
                            0.0 PUR
                          </td>
                        </tr>

                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm">#10</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img className="h-10 w-10 rounded-full" src="Guy3.png" alt="" />
                              </div>
                              <div className="ml-4">
                                <div className="text-md">Matt Medhurst</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-md text-green">$118,845</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-md text-primary">
                            0.0 PUR
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 lg:col-span-1">
            <h4 className="text-primary text-3xl pb-4 text-center">Stats</h4>

            <div className="
           flex flex-col
           items-center
           justify-center
           w-full
           h-96
           rounded-2xl
           ring-4 ring-secondary
           p-5
           sm:p-10
          ">
              <img className="h-20 w-20 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                alt="" />
              <h4 className="text-center text-3xl text-secondary p-2">Ella Nice</h4>
              <div className="
            flex
            items-center
            justify-between
            text-light text-lg
            sm:text-xl
            w-full
            pt-2
           ">
                <p className="text-md">Position</p>
                <p className="text-md">4th</p>
              </div>

              <div className="
            flex
            items-center
            justify-between
            text-light text-lg
            sm:text-xl
            w-full
            pt-2
           ">
                <p className="text-md">Best Symbol</p>
                <p className="text-md">BTC</p>
              </div>

              <div className="
            flex
            items-center
            justify-between
            text-light text-lg
            sm:text-xl
            w-full
            pt-2
           ">
                <p className="text-md">Worst Symbol</p>
                <p className="text-md">Doge</p>
              </div>

              <div className="
            flex
            items-center
            justify-between
            text-light text-lg
            sm:text-xl
            w-full
            pt-2
           ">
                <p className="text-md">Prize Amount</p>
                <p className="text-md">0.0 PUR</p>
              </div>

              <div className="
            flex
            items-center
            justify-between
            text-light text-lg
            sm:text-xl
            w-full
            pt-2
           ">
                <p className="text-md">Win Streak</p>
                <p className="text-md">3</p>
              </div>
            </div>
          </div>
        </div>
		</div>
		</div>
  </section>

  <section className="bg-dark" id="roadmap">
    <h2 className="
     text-light text-5xl
     sm:text-6xl
     text-center
     pt-10
     sm:pt-20
     over-tokens
     glory
    ">
      Roadmap
    </h2>
    <div className="wrapper max-w-7xl mx-auto pt-20 pb-10 px-6 sm:px-20 relative">
      <div className="
      roadmapCenter-line
      hidden
      md:block md:left-1/2 md:block
      left-16
      transform
      -translate-x-1/2
      absolute
      w-1
      bg-primary
      top-40
     "></div>
      <div className="roadmapRow mb-10 roadmapRow-1 flex justify-start">
        <section className="relative bg-medium text-light ring-4 ring-primary rounded-md pb-10">
          <div className="
        hidden
        md:block
        absolute
        roadmapCenterSticker
        rounded-full
        p-4
        bg-medium
       ">
            <img className="w-8 h-8" src="cash-on-delivery.svg" alt="" />
          </div>
          <div
            className='flex flex-col rounded-t-md justify-start items-start xl:flex-row xl:justify-between  mb-5 bg-dark px-10 py-5'>
            <h4 className="text-primary  text-3xl">Stage 1</h4>
            <h4 className="text-lightmedium text-xl xl:text-3xl">Development</h4>
          </div>
          <p className="text-xl px-10 pt-3">Pre-Seed Allocation</p>
          <p className="text-xl px-10 pt-2">Consolidate Developers</p>
          <p className="text-xl px-10 pt-2">Partner witha Market Data Provider</p>
          <p className="text-xl px-10 pt-2">Complete Vapur Devleopment</p>
        </section>
      </div>
      <div className="roadmapRow mb-10 roadmapRow-2 flex justify-end">
        <section className="relative bg-medium text-light ring-4 ring-primary rounded-md pb-10">
          <div className="
        absolute
        bg-medium
        rounded-full
        p-4
        roadmapCenterSticker
        hidden
        md:block
       ">
            <img className="w-8 h-8 relative" src="rocket-launch.svg" alt="" />
          </div>
          <div
            className='flex flex-col justify-start items-start xl:flex-row xl:justify-between rounded-t-md mb-5 bg-dark px-10 py-5'>
            <h4 className="text-primary  text-3xl">Stage 2</h4>
            <h4 className="text-lightmedium text-xl xl:text-3xl">Platform Release</h4>
          </div>
          <p className="text-xl px-10 pt-3">Seed Allocation</p>
          <p className="text-xl px-10 pt-2">Launch Vapor Beta</p>
          <p className="text-xl px-10 pt-2">Begin Marketing Platform</p>
        </section>
      </div>
      <div className="roadmapRow mb-10 roadmapRow-3 flex justify-start">
        <section className="relative bg-medium text-light ring-4 ring-primary rounded-md pb-10">
          <div className="
        absolute
        bg-medium
        rounded-full
        p-4
        roadmapCenterSticker
        hidden
        md:block
       ">
            <img className="w-8 h-8 relative" src="rocket-launch.svg" alt="" />
          </div>
          <div
            className='flex flex-col justify-start items-start xl:flex-row xl:justify-between rounded-t-md mb-5 bg-dark px-10 py-5'>
            <h4 className="text-primary  text-3xl">Stage 3</h4>
            <h4 className="text-lightmedium text-xl xl:text-3xl">Vapur Token</h4>
          </div>
          <p className="text-xl px-10 pt-3">Reach Target Circulating Supply</p>
          <p className="text-xl px-10 pt-2">Partner with Exchanges</p>
        </section>
      </div>
      <div className="roadmapRow mb-10 roadmapRow-4 flex justify-end">
        <section className="relative bg-medium text-light ring-4 ring-primary rounded-md pb-10">
          <div className="
        absolute
        bg-medium
        rounded-full
        p-4
        roadmapCenterSticker
        hidden
        md:block
       ">
            <img className="w-8 h-8 relative" src="hammer.svg" alt="" />
          </div>
          <div
            className='flex flex-col justify-start items-start xl:flex-row xl:justify-between rounded-t-md mb-5 bg-dark px-10 py-5'>
            <h4 className="text-primary  text-3xl">Stage 4</h4>
            <h4 className="text-lightmedium text-xl xl:text-3xl">Go Public</h4>
          </div>
          <p className="text-xl px-10 pt-3">Vapur Token IEO</p>
          <p className="text-xl px-10 pt-2">Begin Series A Funding</p>
        </section>
      </div>
    </div>
  </section>

  <section className="bg-dark py-10 sm:py-20 px-5 sm:px-10" id="team">
    <h2 className="text-light text-5xl sm:text-6xl text-center pb-10 glory">Team</h2>
    <div className="flex flex-col items-center justify-center lg:items-start lg:flex-row">
      <div className="flex-1 p-5 flex flex-col items-center justify-center">
        <img className="w-2/4 lg:w-1/3 rounded-md" src="profile.png" alt="" />

        <a className="
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
       
      " target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/caleb-northcott/">
          Caleb Northcott
        </a>
        <p className="text-light text-center lg:text-left text-xl z-10">
          Co-Founder & Backend Engineer
        </p>
        <p className="text-light pt-5 text-xl sm:text-xl text-center">
          Graduating from Eckerd College with a Bachelor of Science in Computer
          Science and Economics, Blockchain technology has always been an interest
          of Caleb’s. Since 2017, Caleb has actively traded both cryptocurrencies
          and U.S equities, where the inspiration for Vapur was born.
        </p>
      </div>
      <div className="flex-1 p-5 flex flex-col items-center justify-center">
        <img className="w-2/4 lg:w-1/3 rounded-md" src="matt.png" alt="" />

        <a className="
       transition-colors
       text-light text-center
       lg:text-left
       pt-5
       glory
       text-3xl
       sm:text-4xl
       duration-100
       hover:text-primary
      " target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/matthew-klimek-37629b153/">
          Matthew Klimek
        </a>
        <p className="text-light text-center lg:text-left text-xl z-10">
          Co-Founder & UI/UX Engineer
        </p>
        <p className="text-light pt-5 text-xl sm:text-xl text-center">
          Matthew began his official digital exploration back in 2015 when he
          co-authored a book about digital marketing with Jay Berkowitz. In 2020 he
          recieved a bachelor's degree in Computer Science from Eckerd College.
          Today, he owns a profitable delta-8 distribution company.
        </p>
      </div>
    </div>
  </section>
  <div className="w-full flex over-tokens flex-col bg-medium py-5 items-center">
    <img className="w-32 hidden sm:block" src="FinalLogo.svg" alt="" />
    <img className="w-20 sm:hidden" src="FinalLogo.svg" alt="" />
    <div className="flex items-center justify-end pt-5 z-10 space-x-5 sm:space-x-10">
      <a className="
       w-7
       sm:w-10
       h-7
       sm:h-10
       transition
       duration-150
       ease-in-out
       transform
       hover:scale-125
      " href="https://t.me/joinchat/haNcc0MiOx4zMDNh" target="_blank"><img src="001-telegram.svg" alt="" /></a>
      <a className="
       w-7
       sm:w-10
       h-7
       sm:h-10
       transition
       duration-150
       ease-in-out
       transform
       hover:scale-125
      " href="https://www.instagram.com/vapurofficial/" target="_blank"><img src="002-instagram.svg" alt="" /></a>

      <a className="
       w-7
       sm:w-10
       h-7
       sm:h-10
       transition
       duration-150
       ease-in-out
       transform
       hover:scale-125
      " href="https://twitter.com/VapurOfficial" target="_blank"><img src="004-twitter.svg" alt="" /></a>
      <a className="
       w-7
       sm:w-10
       h-7
       sm:h-10
       transition
       duration-150
       ease-in-out
       transform
       hover:scale-125
      " href="https://www.linkedin.com/company/vapur" target="_blank"><img src="005-linkedin.svg" alt="" /></a>
    </div>
  </div>

</div>

		</div>
  )
}
