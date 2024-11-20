"use client"; import React from 'react';

import { useWallet } from '../hooks/useWallet'; // Import your custom hook

export const Navbar = () => {
  const { walletAddress, networkError, connectWallet } = useWallet(); // Use the custom hook

  return (
    <div className="bg-[#FFFFFF]  text-white  px-6 flex justify-between items-center">

      <div className="flex justify-center p-4">
        <div className="relative w-80">
          {/* Input Field */}
          <input
            type="text"
            placeholder="Search Something here..."
            className="w-full p-2 pl-10 pr-4 text-[#778599] font-medium text-xs border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* Search Icon */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth={0.5}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#778599]"
          >
            <path
              d="M21.0002 21L16.6572 16.657M16.6572 16.657C17.4001 15.9141 17.9894 15.0321 18.3914 14.0615C18.7935 13.0909 19.0004 12.0506 19.0004 11C19.0004 9.94936 18.7935 8.90905 18.3914 7.93842C17.9894 6.96779 17.4001 6.08585 16.6572 5.34296C15.9143 4.60007 15.0324 4.01078 14.0618 3.60874C13.0911 3.20669 12.0508 2.99976 11.0002 2.99976C9.9496 2.99976 8.90929 3.20669 7.93866 3.60874C6.96803 4.01078 6.08609 4.60007 5.34321 5.34296C3.84288 6.84329 3 8.87818 3 11C3 13.1217 3.84288 15.1566 5.34321 16.657C6.84354 18.1573 8.87842 19.0002 11.0002 19.0002C13.122 19.0002 15.1569 18.1573 16.6572 16.657Z"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="flex space-x-2">

        <button className="px-4 py-2  bg-[#3c6454] text-white rounded-[8px] text-[12px] hover:bg-[#93af1c] hover:text-white focus:outline-none focus:ring-2 focus:ring-green-300" onClick={connectWallet}> {walletAddress ? `Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'Connect Wallet'}</button>
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
        <div>
          <p className='text-gray-600 text-[12px]'>Solomon Femi
          </p>
          <p className='text-[#778599] text-[10px] font'>ayoseunsolomon@gmail.vom
          </p>
        </div>

      </div>
    </div>
  );
};