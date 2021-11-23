import React, { useState, useEffect } from "react";

import ScrollAnimation from "react-animate-on-scroll";

const gameOverview = () => {

 
 return (
    <div className="flex flex-col items-center">
        <div className="nuts flex flex-col mt-20 justify-center items-center">
            <div className="flex flex-col w-full py-6 bg-black justify-center items-center">
                <div className="flex flex-col w-full justify-center items-center">
                    <img className="w-3/4 md:w-1/2" src='TitleOne.png' />
                    <img className="w-1/2 md:w-1/3 mt-2" src='SubTitleOne.png' />
                </div>                
            </div>     
            <div className="flex flex-col items-center w-full max-w-6xl ">                        
                <div className="flex flex-col sm:flex-row w-full items-center mt-24 sm:ml-40">
                    <div className="">
                        <img width={160} height={160} src='/schedule.png' alt='' />
                    </div>
                    <div className="flex items-center sm:items-start sm:pl-8 mt-8 sm:mt-0 flex-col">
                        <h1 className="text-light text-3xl">The Variety</h1>
                        <div className="border-t-2 border-secondary w-32 mt-1 pb-2" />
                        <div className="flex sm:pl-6 items-center flex-col sm:flex-row">
                            <h1 className="text-primary text-xl">Leagues</h1>
                            <h1 className="text-light sm:pl-4 text-xl">Stocks - Cryptos</h1>
                        </div>
                        <div className="flex sm:pl-6 items-center flex-col sm:flex-row">
                            <h1 className="text-primary text-xl">Lengths</h1>
                            <h1 className="text-light sm:pl-4 text-xl">Hour - Day - Week - Quarter</h1>
                        </div>                
                    </div>
                </div>  
                <div className="w-full sm:mt-24 sm:mr-40 flex flex-col sm:flex-row items-center sm:justify-end">
                    <div className="-mr-16 sm:hidden">    
                        <img className="relative z-20 top-28 right-16" width={100} height={100} src='/LightLogo3D.webp' alt='' />
                        <img className="relative z-30" width={120} height={120} src='/DarkLogo3D.webp' alt='' />
                    </div>    
                    <div className="flex items-center sm:items-start pl-8 mb-10 mt-4 sm:mt-0 flex-col items-end pr-8">
                        <h1 className="text-light text-3xl">Your Wagers</h1>
                        <div className="border-t-2 border-secondary w-32 mt-1 pb-2" />    
                        <h1 className="text-light sm:text-left text-right pt-2 sm:pt-0 pl-4 text-xl">Compete using the Vapur Token</h1> 
                        <div className="flex sm:pl-6 pt-3 sm:pt-0 items-center flex-col sm:flex-row">
                            <h1 className="text-primary text-xl">Liquid Against</h1>
                            <h1 className="text-light sm:pl-4 text-xl">USD - BTC - ETH - BNB</h1>
                        </div>      
                    </div>
                    <div className="hidden sm:block">    
                        <img className="relative z-20" width={100} height={100} src='/LightLogo3D.webp' alt='' />
                        <img className="relative z-30 bottom-10" width={120} height={120} src='/DarkLogo3D.webp' alt='' />
                    </div>        
                </div>  
                <div className="flex flex-col mt-16 sm:mt-8 sm:flex-row w-full items-center sm:ml-40">
                    <div className="">
                        <img className='relative z-10' width={120} height={120} src='/Bitcoin3D.png' alt='' />
                        <img className='relative z-20 bottom-20 left-10' width={150} height={150} src='/Pepsi3D.webp' alt='' />
                    </div>
                    <div className="flex items-center sm:items-start sm:pl-20 -mt-20 flex-col">
                        <h1 className="text-light text-3xl">Your Lineup</h1>
                        <div className="border-t-2 border-secondary w-32 mt-1 pb-2" />
                        <div className="flex sm:pl-6 items-center flex-col sm:flex-row">
                            <h1 className="text-primary text-xl">Stocks</h1>
                            <h1 className="text-light sm:pl-4 text-xl">NASDAQ - NYSE - Cboe - MIAX</h1>
                        </div>
                        <div className="flex sm:pl-6 items-center flex-col sm:flex-row">
                            <h1 className="text-primary text-xl">Cryptos</h1>
                            <h1 className="text-light sm:pl-4 text-xl">Coinbase - Kraken - Bitstamp - Bitfinex</h1>
                        </div>                
                    </div>
                </div> 
                <div className="w-full sm:mr-40 sm:mt-8 flex flex-col sm:flex-row items-center sm:justify-end">
                    <div className="-mr-16 sm:hidden">    
                        <img className="relative z-20 top-28 right-16" width={100} height={100} src='/LightLogo3D.webp' alt='' />
                        <img className="relative z-30" width={120} height={120} src='/DarkLogo3D.webp' alt='' />
                    </div>    
                    <div className="flex items-center sm:items-start pl-8 mt-4 sm:mt-0 flex-col items-end pr-8">
                        <h1 className="text-light text-3xl">The Competition</h1>
                        <div className="border-t-2 border-secondary w-32 mt-1 pb-2" /> 
                        <h1 className="text-light text-right sm:text-left pl-4 text-xl">Watch your lineup compete in real-time</h1>       
                    </div>
                    <div className="hidden sm:block">    
                        <img className="relative z-20" width={200} height={200} src='/area-chart.png' alt='' />            
                    </div>        
                </div>   
                <div className="flex flex-col mb-20 mt-20 sm:mt-24 sm:flex-row w-full items-center ml-10 sm:ml-40">
                    <div className="">
                        <img width={120} height={120} src='/MoneyBag.png' alt='' />
                    </div>
                    <div className="flex items-center sm:items-start sm:pl-16 mt-4 sm:mt-0 flex-col">
                        <h1 className="text-light text-3xl">The Prizes</h1>
                        <div className="border-t-2 border-secondary w-32 mt-1 pb-2" />
                        <div className="flex sm:pl-6 flex-col sm:flex-row">
                            <h1 className="text-primary text-xl">When you play the markets - expect to win big</h1>
                        </div>                
                    </div>
                </div>    
            </div> 
        </div>
        <div className="nuts2  flex flex-col justify-between w-full">
            <div className="flex flex-col w-full py-6 bg-black justify-center items-center">
                <div className="flex flex-col w-full justify-center items-center">
                    <img className="w-3/4 md:w-1/3" src='TheData.png' />
                </div>                
            </div>
            <div className="flex flex-row justify-between w-full">
                <div className="w-1/3">
                </div>            
                <img className="w-1/2" src='/Graphs.png' alt='' />
            </div> 
        </div>  
    </div>    
 );
};


export default gameOverview;
