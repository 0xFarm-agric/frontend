"use client"; import React from 'react';

import Image from 'next/image';


export const Navbar = () => {
  return (
    <div className="bg-[#DAE4D5]  text-white py-2 px-6 flex justify-between items-center">
      <img width={100} alt='' src={"/logo.png"} />

      <div className="flex space-x-4">
        <button id="connect-wallet-button" className="px-4  bg-[#3c6454] text-white rounded-xl text-[12px] hover:bg-[#93af1c] hover:text-white focus:outline-none focus:ring-2 focus:ring-green-300">
          Connect Wallet
        </button>
        <div className="p-2 cursor-pointer ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#26272F] hover:text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </div>
        <div className=" p-2 cursor-pointer ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#26272F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.066z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>


      </div>
    </div>
  );
};