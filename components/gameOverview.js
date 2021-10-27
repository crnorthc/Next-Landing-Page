import React from "react";

const gameOverview = () => {
 return (
  <section
   id='gameplay'
   className='bg-secondary pt-20 sm:pt-40 pb-10 sm:pb-20 px-5 sm:px-10 over-tokens'
  >
   <h2 className='text-light text-5xl sm:text-6xl pt-3 pb-10 text-center glory'>
    Game Overview
   </h2>

   <p className='text-light mx-auto max-w-4xl text-xl sm:text-2xl text-center p-5 bg-ocean rounded-xl'>
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
 );
};

export default gameOverview;
