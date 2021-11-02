import React from "react";

const features = () => {
 return (
  <section id='features' className='bg-dark'>
   <div
    className='
     py-10
     sm:py-20
     px-5
     sm:px-10
     over-tokens
     bg-gradient-to-b
     from-secondary
     to-transparent
    '
   >
    <h2 className='text-light text-5xl sm:text-6xl pt-3 text-center glory'>
     Features
    </h2>

    <div className='pt-16 sm:pt-24'>
     <h3
      className='
       text-center text-light
       over-tokens
       text-4xl
       sm:text-5xl
       pb-10
       glory
      '
     >
      Join Games!
     </h3>
     <p
      className='
       text-light
       mx-auto
       max-w-4xl
       over-tokens
       text-xl
       sm:text-2xl
       text-center
       pb-10
      '
     >
      Players will have three leagues to choose from: stocks, cryptos, and the
      combination of both. The stock and combo game types will be available
      daily (from 9:30 A.M. to 4:30 P.M.), weekly (Mon – Fri) and quarterly
      (following the financial quarters). Games of the crypto type will be
      offered daily (9:30 A.M. – 9:30 A.M) and weekly (Monday 9:30 A.M. – Monday
      9:30 A.M.).
     </p>

     <div
      className='
       flex flex-col
       p-10
       bg-dark
       over-tokens
       mx-auto
       max-w-6xl
       rounded-xl
      '
     >
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 hidden lg:block'>
       <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
        <div className='shadow ring-4 ring-primary h-96 overflow-y-scroll sm:rounded-lg'>
         <table className='min-w-full'>
          <thead className=''>
           <tr className=''>
            <th
             scope='col'
             className='
              sticky
              top-0
              bg-medium
              px-6
              py-3
              text-left text-xs text-primary
              uppercase
              tracking-wider
             '
            >
             League
            </th>
            <th
             scope='col'
             className='
              sticky
              top-0
              bg-medium
              px-6
              py-3
              text-left text-xs text-primary
              uppercase
              tracking-wider
             '
            >
             Duration
            </th>
            <th
             scope='col'
             className='
              sticky
              top-0
              bg-medium
              px-6
              py-3
              text-left text-xs text-primary
              uppercase
              tracking-wider
             '
            >
             Start Date
            </th>
            <th
             scope='col'
             className='
              sticky
              top-0
              bg-medium
              px-6
              py-3
              text-left text-xs text-primary
              uppercase
              tracking-wider
             '
            >
             Winning Split
            </th>
            <th
             scope='col'
             className='
              sticky
              top-0
              bg-medium
              px-6
              py-3
              text-left text-xs text-primary
              uppercase
              tracking-wider
             '
            >
             Players
            </th>
            <th
             scope='col'
             className='
              sticky
              top-0
              bg-medium
              px-6
              py-3
              text-left text-xs text-primary
              uppercase
              tracking-wider
             '
            >
             Bet
            </th>
            <th
             scope='col'
             className='
              sticky
              top-0
              bg-medium
              px-6
              py-3
              text-left text-xs text-primary
              uppercase
              tracking-wider
             '
            >
             Pot
            </th>
           </tr>
          </thead>
          <tbody className='text-light divide-y-4 divide-medium'>
           <tr className='bg-dark'>
            <td className='px-6 py-4 whitespace-nowrap'>
             <div className='text-md'>Stocks</div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap'>
             <div className='text-md'>Day</div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap'>
             <div className='text-md'>
              <p className='text-md'>10/03/2021</p>
              <p className='text-md'>9:30am</p>
             </div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>Top Player</td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>95</td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>$10+</td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>$2,500</td>
           </tr>
           <tr className='bg-dark'>
            <td className='px-6 py-4 whitespace-nowrap'>
             <div className='text-md'>Crypto</div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap'>
             <div className='text-md'>Day</div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap'>
             <div className='text-md'>
              <p className='text-md'>10/03/2021</p>
              <p className='text-md'>9:30am</p>
             </div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>Top Player</td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>67</td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>$10+</td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>$1,350</td>
           </tr>
           <tr className='bg-dark'>
            <td className='px-6 py-4 whitespace-nowrap'>
             <div className='text-md'>Stocks & Crypto</div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap'>
             <div className='text-md'>Day</div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap'>
             <div className='text-md'>
              <p className='text-md'>10/03/2021</p>
              <p className='text-md'>9:30am</p>
             </div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>Top Player</td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>116</td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>$10+</td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>$3,900</td>
           </tr>
           <tr className='bg-dark'>
            <td className='px-6 py-4 whitespace-nowrap'>
             <div className='text-md'>Stocks</div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap'>
             <div className='text-md'>Week</div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap'>
             <div className='text-md'>
              <p className='text-md'>10/03/2021</p>
              <p className='text-md'>9:30am</p>
             </div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>
             Top 3 Players
            </td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>450</td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>$10+</td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>$12,950</td>
           </tr>
           <tr className='bg-dark'>
            <td className='px-6 py-4 whitespace-nowrap'>
             <div className='text-md'>Stocks & Crypto</div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap'>
             <div className='text-md'>Week</div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap'>
             <div className='text-md'>
              <p className='text-md'>10/03/2021</p>
              <p className='text-md'>9:30am</p>
             </div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>Top 10%</td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>300</td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>$50</td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>$15,000</td>
           </tr>
           <tr className='bg-dark'>
            <td className='px-6 py-4 whitespace-nowrap'>
             <div className='text-md'>Crypto</div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap'>
             <div className='text-md'>Week</div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap'>
             <div className='text-md'>
              <p className='text-md'>10/03/2021</p>
              <p className='text-md'>9:30am</p>
             </div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>Top 40%</td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>950</td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>$100</td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>$9,500</td>
           </tr>
           <tr className='bg-dark'>
            <td className='px-6 py-4 whitespace-nowrap'>
             <div className='text-md'>Stocks</div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap'>
             <div className='text-md'>Day</div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap'>
             <div className='text-md'>
              <p className='text-md'>10/04/2021</p>
              <p className='text-md'>9:30am</p>
             </div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>
             Top 10 Players
            </td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>56</td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>$10+</td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>$585</td>
           </tr>
           <tr className='bg-dark'>
            <td className='px-6 py-4 whitespace-nowrap'>
             <div className='text-md'>Crypto</div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap'>
             <div className='text-md'>Day</div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap'>
             <div className='text-md'>
              <p className='text-md'>10/04/2021</p>
              <p className='text-md'>9:30am</p>
             </div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>Top 10%</td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>350</td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>$50</td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>$17,500</td>
           </tr>
           <tr className='bg-dark'>
            <td className='px-6 py-4 whitespace-nowrap'>
             <div className='text-md'>Stocks</div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap'>
             <div className='text-md'>Day</div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap'>
             <div className='text-md'>
              <p className='text-md'>10/05/2021</p>
              <p className='text-md'>9:30am</p>
             </div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>
             Top 1 Player
            </td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>45</td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>$10+</td>
            <td className='px-6 py-4 whitespace-nowrap text-md'>$1,115</td>
           </tr>
          </tbody>
         </table>
        </div>
       </div>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center lg:hidden space-y-10 md:space-y-0 md:space-x-4'>
       <div
        className='
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
        '
       >
        <h4 className='text-center text-light text-3xl p-5 bg-dark rounded-t-md w-full'>
         Slippery Slope
        </h4>
        <div className='flex items-center w-full justify-center space-x-5 px-5 pt-5'>
         <div className='flex-1'>
          <p className='text-xs text-lightmedium'>League</p>
          <p className='text-md text-light'>Crypto</p>
         </div>
         <div className='flex-1'>
          <p className='text-xs text-lightmedium'>Duration</p>
          <p className='text-md text-light'>Day</p>
         </div>
        </div>
        <div className='flex items-center w-full justify-center space-x-5 px-5'>
         <div className='flex-1'>
          <p className='text-xs text-lightmedium'>Players</p>
          <p className='text-md text-light'>200</p>
         </div>
         <div className='flex-1'>
          <p className='text-xs text-lightmedium'>Winners</p>
          <p className='text-md text-light'>Top 40%</p>
         </div>
        </div>
        <div className='flex items-center w-full justify-center space-x-5 px-5'>
         <div className='flex-1'>
          <p className='text-xs text-lightmedium'>Bet</p>
          <p className='text-md text-light'>$50</p>
         </div>
         <div className='flex-1'>
          <p className='text-xs text-lightmedium'>Prize</p>
          <p className='text-md text-light'>$100</p>
         </div>
        </div>

        <div className=''>
         <p className='text-xs text-lightmedium text-center'>Start Date</p>
         <p className='text-md text-light'>10/03/21 - 9:30am</p>
        </div>
        <div className='p-5 w-full'>
         <button
          className='w-full block text-lg glory bg-skyblue text-light rounded-md py-1 transition-colors
       
       duration-100
       hover:bg-blue'
         >
          Join
         </button>
        </div>
       </div>
       <div
        className='
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
        '
       >
        <h4 className='text-center text-light text-3xl p-5 bg-dark rounded-t-md w-full'>
         Heavy Time
        </h4>
        <div className='flex items-center w-full justify-center space-x-5 px-5 pt-5'>
         <div className='flex-1'>
          <p className='text-xs text-lightmedium'>League</p>
          <p className='text-md text-light'>Stock</p>
         </div>
         <div className='flex-1'>
          <p className='text-xs text-lightmedium'>Duration</p>
          <p className='text-md text-light'>Day</p>
         </div>
        </div>
        <div className='flex items-center w-full justify-center space-x-5 px-5'>
         <div className='flex-1'>
          <p className='text-xs text-lightmedium'>Players</p>
          <p className='text-md text-light'>500</p>
         </div>
         <div className='flex-1'>
          <p className='text-xs text-lightmedium'>Winners</p>
          <p className='text-md text-light'>Top 10%</p>
         </div>
        </div>
        <div className='flex items-center w-full justify-center space-x-5 px-5'>
         <div className='flex-1'>
          <p className='text-xs text-lightmedium'>Bet</p>
          <p className='text-md text-light'>$50</p>
         </div>
         <div className='flex-1'>
          <p className='text-xs text-lightmedium'>Prize</p>
          <p className='text-md text-light'>$400</p>
         </div>
        </div>

        <div className=''>
         <p className='text-xs text-lightmedium text-center'>Start Date</p>
         <p className='text-md text-light'>10/03/21 - 9:30am</p>
        </div>
        <div className='p-5 w-full'>
         <button
          className='w-full block text-lg glory bg-skyblue text-light rounded-md py-1 transition-colors
       
       duration-100
       hover:bg-blue'
         >
          Join
         </button>
        </div>
       </div>
       <div
        className='
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
        '
       >
        <h4 className='text-center text-light text-3xl p-5 bg-dark rounded-t-md w-full'>
         Elephant Rug
        </h4>
        <div className='flex items-center w-full justify-center space-x-5 px-5 pt-5'>
         <div className='flex-1'>
          <p className='text-xs text-lightmedium'>League</p>
          <p className='text-md text-light'>Crypto</p>
         </div>
         <div className='flex-1'>
          <p className='text-xs text-lightmedium'>Duration</p>
          <p className='text-md text-light'>Day</p>
         </div>
        </div>
        <div className='flex items-center w-full justify-center space-x-5 px-5'>
         <div className='flex-1'>
          <p className='text-xs text-lightmedium'>Players</p>
          <p className='text-md text-light'>1500</p>
         </div>
         <div className='flex-1'>
          <p className='text-xs text-lightmedium'>Winners</p>
          <p className='text-md text-light'>Top 10</p>
         </div>
        </div>
        <div className='flex items-center w-full justify-center space-x-5 px-5'>
         <div className='flex-1'>
          <p className='text-xs text-lightmedium'>Bet</p>
          <p className='text-md text-light'>$50</p>
         </div>
         <div className='flex-1'>
          <p className='text-xs text-lightmedium'>Prize</p>
          <p className='text-md text-light'>$7,500</p>
         </div>
        </div>

        <div className=''>
         <p className='text-xs text-lightmedium text-center'>Start Date</p>
         <p className='text-md text-light'>10/03/21 - 9:30am</p>
        </div>
        <div className='p-5 w-full'>
         <button
          className='w-full block text-lg glory bg-skyblue text-light rounded-md py-1 transition-colors
       
       duration-100
       hover:bg-blue'
         >
          Join
         </button>
        </div>
       </div>
      </div>
     </div>
    </div>

    <div className='pt-16 sm:pt-24'>
     <h3
      className='
       text-center text-light
       over-tokens
       text-4xl
       sm:text-5xl
       pb-10
       glory
      '
     >
      Grow Your Portfolio!
     </h3>
     <p
      className='
       text-light
       over-tokens
       mx-auto
       max-w-4xl
       text-xl
       sm:text-2xl
       text-center
       pb-10
      '
     >
      Once a player chooses a game, they have until the start time to choose
      their lineup of stocks, cryptos, or both. For every game, players will
      have $100,000 to allocate on the securities offered in game (stocks,
      cryptos, or both). Once chosen, players will submit their lineup and watch
      as their portfolio grows or shrinks.
     </p>

     <div
      className='
       grid grid-cols-3
       gap-4
       mx-auto
       max-w-6xl
       bg-dark
       px-5
       py-10
       over-tokens
       rounded-xl
      '
     >
      <div className='col-span-3 xl:col-span-2'>
       <div className='flex items-center justify-between'>
        <div className='flex-1 flex flex-col items-start justify-center'>
         <p className='text-md sm:text-2xl text-light'>$143,006.63</p>
         <p className='text-md sm:text-2xl text-green'>+$43,006.63 (43.0%)</p>
        </div>
        <div className='flex-1 flex items-center justify-evenly text-light'>
         <p className='text-md sm:text-2xl border-b-4 border-green px-1 sm:px-4'>
          You
         </p>
         <p className='text-md sm:text-2xl border-b-4 border-blue px-1 sm:px-4'>
          Avg
         </p>
         <p className='text-md sm:text-2xl border-b-4 border-primary px-1 sm:px-4'>
          #1
         </p>
        </div>
       </div>

       <div
        className='
         flex
         items-end
         justify-between
         text-light
         px-3
         py-1
         graphy
         rounded-2xl
         mx-auto
        '
       >
        <p className='text-md sm:text-2xl'>-1</p>
        <p className='text-md sm:text-2xl'>-3</p>
        <p className='text-md sm:text-2xl text-primary'>Avg</p>
        <p className='text-md sm:text-2xl'>+3</p>
        <p className='text-md sm:text-2xl'>+1</p>
       </div>
      </div>
      <div
       className='
        col-span-3
        xl:col-span-1
        flex flex-col
        items-center
        justify-start
        ring-4 ring-medium
        rounded-2xl
        lg:mt-16
        mt-6
       '
      >
       <h4 className='text-primary text-3xl pt-4'>Lineup</h4>
       <div className='flex flex-col items-center justify-start w-full p-5 space-y-4'>
        <div
         className='
          flex flex-row
          items-center
          justify-between
          w-full
          ring-4 ring-green
          rounded-sm
          hover:bg-greenHueHover
          bg-greenHue
         '
        >
         <div className='flex flex-row items-center'>
          <img className='hidden sm:block' src='apple.svg' alt='' />
          <div className='pl-3'>
           <p className='text-light text:md sm:text-2xl'>Apple</p>
           <p className='text-light text:sm sm:text-lg'>APPL</p>
          </div>
         </div>
         <div className='flex flex-col items-center justify-center pr-5'>
          <p className='text-light text:md sm:text-2xl'>$155.45</p>
          <p className='text-green text:sm sm:text-lg'>+$26,456.54</p>
         </div>
        </div>
        <div
         className='
          flex
          items-center
          justify-between
          w-full
          ring-4 ring-green
          rounded-sm
          hover:bg-greenHueHover
          bg-greenHue
         '
        >
         <div className='flex flex-row items-center'>
          <img className='hidden sm:block' src='amazon.svg' alt='' />
          <div className='pl-3'>
           <p className='text-light text:md sm:text-2xl'>Amazon</p>
           <p className='text-light text:sm sm:text-lg'>AMZN</p>
          </div>
         </div>
         <div className='flex flex-col items-center justify-center pr-5'>
          <p className='text-light text:md sm:text-2xl'>$3420.22</p>
          <p className='text-green text:sm sm:text-lg'>+$16,784.98</p>
         </div>
        </div>
        <div
         className='
          flex
          items-center
          justify-between
          w-full
          ring-4 ring-red
          rounded-sm
          hover:bg-redHueHover
          bg-redHue
         '
        >
         <div className='flex flex-row items-center'>
          <img className='hidden sm:block' src='doge.svg' alt='' />
          <div className='pl-3'>
           <p className='text-light text:md sm:text-2xl'>Dogecoin</p>
           <p className='text-light text:sm sm:text-lg'>DOGE</p>
          </div>
         </div>
         <div className='flex flex-col items-center justify-center pr-5'>
          <p className='text-light text:md sm:text-2xl'>$0.224</p>
          <p className='text-red text:sm sm:text-lg'>-$234.89</p>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
    <div className='pt-16 sm:pt-24'>
     <h3
      className='
       text-center text-light
       over-tokens
       text-4xl
       sm:text-5xl
       pb-10
       glory
      '
     >
      Win Crypto!
     </h3>

     <div
      className='
      bg-dark
      px-2
      py-10
      over-tokens
      rounded-xl
      sm:hidden
     '
     >
      <div className='col-span-3'>
       <h4 className='text-center text-3xl text-primary pb-4'>Final Results</h4>
       <div className='flex flex-col'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
         <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div
           className='
                flex
                flex-col
                items-center
                shadow
                sm:rounded-lg
                py-4
                px-5
               '
          >
           <div
            className='
               flex flex-col
               items-center
               justify-center
               w-full
               h-72
               rounded-2xl
               ring-4 ring-secondary
               p-5
               
               my-4
              '
           >
            <img className='h-20 w-20 rounded-full' src='Guy4.webp' alt='' />
            <h4 className='text-center text-3xl text-secondary p-2'>
             Dana Boreg
            </h4>
            <div
             className='
                flex
                items-center
                justify-between
                text-light text-lg
                sm:text-xl
                w-full
                pt-2
               '
            >
             <p className='text-md'>Position</p>
             <p className='text-md'>#1</p>
            </div>

            <div
             className='
                flex
                items-center
                justify-between
                text-light text-lg
                w-full
                pt-2
               '
            >
             <p className='text-md'>Prize Amount</p>
             <p className='text-md'>1,302 PUR</p>
            </div>

            <div
             className='
                flex
                items-center
                justify-between
                text-light text-lg
                w-full
                pt-2
               '
            >
             <p className='text-md'>Final Score</p>
             <p className='text-md text-green'>$136,654</p>
            </div>
           </div>
           <div
            className='
              flex flex-col
              items-center
              justify-center
              
              h-72
              w-full
              rounded-2xl
              ring-4 ring-secondary
              p-5
              my-4
             '
           >
            <img className='h-20 w-20 rounded-full' src='Girl1.webp' alt='' />
            <h4 className='text-center text-3xl text-secondary p-2'>
             Riley Bewer
            </h4>
            <div
             className='
               flex
               items-center
               justify-between
               text-light text-lg
               sm:text-xl
               w-full
               pt-2
              '
            >
             <p className='text-md'>Position</p>
             <p className='text-md'>#2</p>
            </div>

            <div
             className='
               flex
               items-center
               justify-between
               text-light text-lg
               w-full
               pt-2
              '
            >
             <p className='text-md'>Prize Amount</p>
             <p className='text-md'>568 PUR</p>
            </div>

            <div
             className='
               flex
               items-center
               justify-between
               text-light text-lg
               w-full
               pt-2
              '
            >
             <p className='text-md'>Final Score</p>
             <p className='text-md text-green'>$132,458</p>
            </div>
           </div>
           <div
            className='
             flex flex-col
             items-center
             justify-center
             
             h-72
             w-full
             rounded-2xl
             ring-4 ring-secondary
             p-5
             my-4
            '
           >
            <img className='h-20 w-20 rounded-full' src='Guy5.webp' alt='' />
            <h4 className='text-center text-3xl text-secondary p-2'>
             Owen Richards
            </h4>
            <div
             className='
              flex
              items-center
              justify-between
              text-light text-lg
              sm:text-xl
              w-full
              pt-2
             '
            >
             <p className='text-md'>Position</p>
             <p className='text-md'>#3</p>
            </div>

            <div
             className='
              flex
              items-center
              justify-between
              text-light text-lg
              w-full
              pt-2
             '
            >
             <p className='text-md'>Prize Amount</p>
             <p className='text-md'>349 PUR</p>
            </div>

            <div
             className='
              flex
              items-center
              justify-between
              text-light text-lg
              w-full
              pt-2
             '
            >
             <p className='text-md'>Final Score</p>
             <p className='text-md text-green'>$129,792</p>
            </div>
           </div>
           <div
            className='
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
           '
           >
            <img
             className='h-20 w-20 rounded-full'
             src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
             alt=''
            />
            <h4 className='text-center text-3xl text-secondary p-2'>
             Ella Nice
            </h4>
            <div
             className='
             flex
             items-center
             justify-between
             text-light text-lg
             sm:text-xl
             w-full
             pt-2
            '
            >
             <p className='text-md'>Position</p>
             <p className='text-md'>#4</p>
            </div>

            <div
             className='
             flex
             items-center
             justify-between
             text-light text-lg
             w-full
             pt-2
            '
            >
             <p className='text-md'>Prize Amount</p>
             <p className='text-md'>0.0 PUR</p>
            </div>

            <div
             className='
             flex
             items-center
             justify-between
             text-light text-lg
             w-full
             pt-2
            '
            >
             <p className='text-md'>Final Score</p>
             <p className='text-md text-green'>$127,568</p>
            </div>
           </div>
           <div
            className='
           flex flex-col
           items-center
           justify-center
           
           h-72
           w-full
           rounded-2xl
           ring-4 ring-secondary
           p-5
           my-4
          '
           >
            <img className='h-20 w-20 rounded-full' src='Guy6.webp' alt='' />
            <h4 className='text-center text-3xl text-secondary p-2'>
             Luca Minter
            </h4>
            <div
             className='
            flex
            items-center
            justify-between
            text-light text-lg
            sm:text-xl
            w-full
            pt-2
           '
            >
             <p className='text-md'>Position</p>
             <p className='text-md'>#5</p>
            </div>

            <div
             className='
            flex
            items-center
            justify-between
            text-light text-lg
            w-full
            pt-2
           '
            >
             <p className='text-md'>Prize Amount</p>
             <p className='text-md'>0.0 PUR</p>
            </div>

            <div
             className='
            flex
            items-center
            justify-between
            text-light text-lg
            w-full
            pt-2
           '
            >
             <p className='text-md'>Final Score</p>
             <p className='text-md text-green'>$128,566</p>
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>

     <div
      className='
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
        '
     >
      <div className='col-span-3 lg:col-span-2'>
       <h4 className='text-center text-3xl text-primary pb-4'>Final Results</h4>
       <div className='flex flex-col'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
         <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div
           className='
              shadow
              h-96
              overflow-y-scroll
              ring-4 ring-secondary
              sm:rounded-lg
             '
          >
           <table className='min-w-full'>
            <thead className='bg-medium'>
             <tr>
              <th
               scope='col'
               className='
                  px-6
                  py-3
                  text-left text-xs text-light
                  uppercase
                  tracking-wider
                 '
              >
               Rank
              </th>
              <th
               scope='col'
               className='
                  px-6
                  py-3
                  text-left text-xs text-light
                  uppercase
                  tracking-wider
                 '
              >
               Player
              </th>
              <th
               scope='col'
               className='
                  px-6
                  py-3
                  text-left text-xs text-light
                  uppercase
                  tracking-wider
                 '
              >
               Final Score
              </th>
              <th
               scope='col'
               className='
                  px-6
                  py-3
                  text-left text-xs text-light
                  uppercase
                  tracking-wider
                 '
              >
               Prize
              </th>
             </tr>
            </thead>
            <tbody className='text-light'>
             <tr>
              <td className='px-6 py-4 whitespace-nowrap'>
               <div className='text-sm'>#1</div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
               <div className='flex items-center'>
                <div className='flex-shrink-0 h-10 w-10'>
                 <img
                  className='h-10 w-10 rounded-full'
                  src='Guy4.webp'
                  alt=''
                 />
                </div>
                <div className='ml-4'>
                 <div className='text-md'>Dana Boreg</div>
                </div>
               </div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
               <div className='text-md text-green'>$136,654</div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-md text-primary'>
               1,302 PUR
              </td>
             </tr>
             <tr>
              <td className='px-6 py-4 whitespace-nowrap'>
               <div className='text-sm'>#2</div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
               <div className='flex items-center'>
                <div className='flex-shrink-0 h-10 w-10'>
                 <img
                  className='h-10 w-10 rounded-full'
                  src='Girl1.webp'
                  alt=''
                 />
                </div>
                <div className='ml-4'>
                 <div className='text-md'>Riley Bewer</div>
                </div>
               </div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
               <div className='text-md text-green'>$132,458</div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-md text-primary'>
               568 PUR
              </td>
             </tr>
             <tr>
              <td className='px-6 py-4 whitespace-nowrap'>
               <div className='text-sm'>#3</div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
               <div className='flex items-center'>
                <div className='flex-shrink-0 h-10 w-10'>
                 <img
                  className='h-10 w-10 rounded-full'
                  src='Guy5.webp'
                  alt=''
                 />
                </div>
                <div className='ml-4'>
                 <div className='text-md'>Owen Richards</div>
                </div>
               </div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
               <div className='text-md text-green'>$129,792</div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-md text-primary'>
               349 PUR
              </td>
             </tr>
             <tr>
              <td className='px-6 py-4 whitespace-nowrap'>
               <div className='text-sm'>#4</div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
               <div className='flex items-center'>
                <div className='flex-shrink-0 h-10 w-10'>
                 <img
                  className='h-10 w-10 rounded-full'
                  src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
                  alt=''
                 />
                </div>
                <div className='ml-4'>
                 <div className='text-md'>Ella Nice</div>
                </div>
               </div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
               <div className='text-md text-green'>$127,568</div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-md text-primary'>
               0.0 PUR
              </td>
             </tr>
             <tr>
              <td className='px-6 py-4 whitespace-nowrap'>
               <div className='text-sm'>#5</div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
               <div className='flex items-center'>
                <div className='flex-shrink-0 h-10 w-10'>
                 <img
                  className='h-10 w-10 rounded-full'
                  src='Guy6.webp'
                  alt=''
                 />
                </div>
                <div className='ml-4'>
                 <div className='text-md'>Luca Minter</div>
                </div>
               </div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
               <div className='text-md text-green'>$128,566</div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-md text-primary'>
               0.0 PUR
              </td>
             </tr>
             <tr>
              <td className='px-6 py-4 whitespace-nowrap'>
               <div className='text-sm'>#6</div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
               <div className='flex items-center'>
                <div className='flex-shrink-0 h-10 w-10'>
                 <img
                  className='h-10 w-10 rounded-full'
                  src='Girl2.webp'
                  alt=''
                 />
                </div>
                <div className='ml-4'>
                 <div className='text-md'>Cece Thomason</div>
                </div>
               </div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
               <div className='text-md text-green'>$125,423</div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-md text-primary'>
               0.0 PUR
              </td>
             </tr>
             <tr>
              <td className='px-6 py-4 whitespace-nowrap'>
               <div className='text-sm'>#7</div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
               <div className='flex items-center'>
                <div className='flex-shrink-0 h-10 w-10'>
                 <img
                  className='h-10 w-10 rounded-full'
                  src='Joey.webp'
                  alt=''
                 />
                </div>
                <div className='ml-4'>
                 <div className='text-md'>Joey Webber</div>
                </div>
               </div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
               <div className='text-md text-green'>$122,759</div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-md text-primary'>
               0.0 PUR
              </td>
             </tr>

             <tr>
              <td className='px-6 py-4 whitespace-nowrap'>
               <div className='text-sm'>#8</div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
               <div className='flex items-center'>
                <div className='flex-shrink-0 h-10 w-10'>
                 <img
                  className='h-10 w-10 rounded-full'
                  src='Guy2.webp'
                  alt=''
                 />
                </div>
                <div className='ml-4'>
                 <div className='text-md'>Bill Thornehaw</div>
                </div>
               </div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
               <div className='text-md text-green'>$120,011</div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-md text-primary'>
               0.0 PUR
              </td>
             </tr>

             <tr>
              <td className='px-6 py-4 whitespace-nowrap'>
               <div className='text-sm'>#9</div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
               <div className='flex items-center'>
                <div className='flex-shrink-0 h-10 w-10'>
                 <img
                  className='h-10 w-10 rounded-full'
                  src='Guy1.webp'
                  alt=''
                 />
                </div>
                <div className='ml-4'>
                 <div className='text-md'>Jayven Sofa</div>
                </div>
               </div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
               <div className='text-md text-green'>$119,154</div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-md text-primary'>
               0.0 PUR
              </td>
             </tr>

             <tr>
              <td className='px-6 py-4 whitespace-nowrap'>
               <div className='text-sm'>#10</div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
               <div className='flex items-center'>
                <div className='flex-shrink-0 h-10 w-10'>
                 <img
                  className='h-10 w-10 rounded-full'
                  src='Guy3.webp'
                  alt=''
                 />
                </div>
                <div className='ml-4'>
                 <div className='text-md'>Matt Medhurst</div>
                </div>
               </div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
               <div className='text-md text-green'>$118,845</div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-md text-primary'>
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
      <div className='col-span-3 lg:col-span-1'>
       <h4 className='text-primary text-3xl pb-4 text-center'>Stats</h4>

       <div
        className='
           flex flex-col
           items-center
           justify-center
           w-full
           h-96
           rounded-2xl
           ring-4 ring-secondary
           p-5
           sm:p-10
          '
       >
        <img
         className='h-20 w-20 rounded-full'
         src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
         alt=''
        />
        <h4 className='text-center text-3xl text-secondary p-2'>Ella Nice</h4>
        <div
         className='
            flex
            items-center
            justify-between
            text-light text-lg
            sm:text-xl
            w-full
            pt-2
           '
        >
         <p className='text-md'>Position</p>
         <p className='text-md'>4th</p>
        </div>

        <div
         className='
            flex
            items-center
            justify-between
            text-light text-lg
            sm:text-xl
            w-full
            pt-2
           '
        >
         <p className='text-md'>Best Symbol</p>
         <p className='text-md'>BTC</p>
        </div>

        <div
         className='
            flex
            items-center
            justify-between
            text-light text-lg
            sm:text-xl
            w-full
            pt-2
           '
        >
         <p className='text-md'>Worst Symbol</p>
         <p className='text-md'>Doge</p>
        </div>

        <div
         className='
            flex
            items-center
            justify-between
            text-light text-lg
            sm:text-xl
            w-full
            pt-2
           '
        >
         <p className='text-md'>Prize Amount</p>
         <p className='text-md'>0.0 PUR</p>
        </div>

        <div
         className='
            flex
            items-center
            justify-between
            text-light text-lg
            sm:text-xl
            w-full
            pt-2
           '
        >
         <p className='text-md'>Win Streak</p>
         <p className='text-md'>3</p>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default features;
