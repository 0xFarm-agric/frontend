import React from 'react';
import VideoPlayer from './videoPlayer';
import BlogCards from './blog';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="px-6 py-2 flex items-center justify-between bg-white">
        <div className="flex items-center">
          <div className="text-xl font-semibold flex items-center">
            <span className="text-green-600">0x</span>
            <span className="text-gray-800">Farms</span>
          </div>
        </div>
        <div className="flex text-sm text-gray-600 font-bold items-center space-x-8">
          <a href="#" >Home</a>
          <a href="#">Services</a>
          <a href="#" >How it works</a>
          <a href="#">Farmer Hub</a>

        </div>
        <button className="px-8 py-2 bg-black text-white text-sm rounded-lg">Login</button>
      </nav>

      {/* Hero Section */}
      <div className=" flex py-16 bg-[#F4F3EF] px-16 gap-24">
        <div className="flex justify-center mt-20 mb-24 ">
        
          {/* Left Content */}
          <div className="max-w-lg ">


            <h1 className="text-4xl font-bold w-4/5">
              <span className="text-black">Homegrown Farming</span>
              <span className="br text-green-600"> &</span>
              <div className="rounded-lg mt-2">
                Vertical Farms
              </div>
            </h1>

            {/* Stats */}
            <div className="">

              <p className="text-gray-500 w-2/3 mt-2">
                Revolutionizing Agriculture with Vertical and Decentralized Farming through Real World Assets (RWA)
              </p>
            </div>

            {/* Circular Button */}
            <img
            src="/meal.png"
            alt="Farmer with vegetables"
            className="w-20 h-20 object-cover"
          />
          </div>

          {/* Right Images Stack */}
          <div className="absolute right-0 top-20 w-1/2 mt-8 mr-24">
            <div className="relative shadow-lg shadow-[-32px_12px_15px_20px_rgba(124,160,19,0.1)]">
              {/* Main Image */}
              <img
                src="/Two_up_image_Module.jpg"
                alt="Farmer tending to plants"
                className="rounded-lg shadow-lg"
              />
              {/* Orange Sun/Star decoration */}


              {/* Stacked Image at bottom left */}
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-white rounded-lg shadow-lg shadow-rgba(124, 160, 19, 0.33) overflow-hidden">
                <div className="relative w-full h-full">
                  <img
                    src="/vegs.png"
                    alt="Farmer with vegetables"
                    className="w-full h-full object-cover"
                  />

                </div>
              </div>

              {/* Decorative yellow curved arrows */}
              <div className="absolute -left-12 top-1/2 transform -translate-y-1/2">
                <svg width="40" height="80" viewBox="0 0 40 80" fill="none">
                  <path d="M30 20 C40 40, 0 40, 10 60" stroke="#FCD34D" strokeWidth="3" fill="none" />
                </svg>
              </div>
              <div className="absolute -top-12 top-3/5 transform translate-y-1/2 w-12">
                <img className='w-6' src='/usdt.svg'></img>
              </div>
              <div className="absolute -right-12 top-2/2 transform -translate-y-1/2">
                <img className='w-6' src='/usdc.svg'></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-auto bg-gray-300 h-0.5 mx-8 '></div>
      <div className='w-full h-1/3'>
      <BlogCards></BlogCards>
      </div>
  
      <div className='w-auto bg-gray-300 h-0.5 mx-8 '></div>
      {/* Howegrown Section */}
      <div className="text-center py-8 px-72 bg-[#F4F3EF]">
        <h2 className="text-3xl font-bold mb-4">Decentralized Farming</h2>
        <p className="text-gray-500 mb-12 ">
          Everyone a farmer, Empowering rural households to turn backyards into high-yield mini-farms 0xFarms provides you with the platform to crowdfund a mini-Farm so you can even go commercial
        </p>

        {/* Partner Logos */}
        <div className="flex items-center justify-between gap-12">

        
          <div className="w-48">
            <img src="/homeg.jpeg" alt="Ventures" className="w-48 h-72 object-cover rounded-lg" />
          </div>
          <div className="w-24">
            <VideoPlayer></VideoPlayer>
          </div>
          <div className="ml-24 w-64 text-start">
            <p>Plant at yor backyard, get help on techniques from 0xFarm Farmer Hub</p>
          </div>
          <div className="w-64 text-start">
          <p>Get investor funding or participate in the crowdubuding to aid your go to market</p>
          </div>
        </div>
      </div>

      <div className='w-64 bg-green-600 h-0.5 mx-8 '></div>
      {/* Vertical Farms Section */}
      <div className="text-center py-8 px-72 bg-[#F4F3EF]">
        <h2 className="text-3xl font-bold mb-4">Vertical Farms</h2>
        <p className="text-gray-500 mb-12 ">
          Everyone a farmer, Empowering rural households to turn backyards into high-yield mini-farms 0xFarms provides you with the platform to crowdfund a mini-Farm so you can even go commercial
        </p>

        {/* Partner Logos */}
        <div className="flex items-center justify-between space-x-12 ">

          <div className="w-24">
            <VideoPlayer></VideoPlayer>
          </div>
          <div className="w-48">
            <img src="/homeg.jpeg" alt="Ventures" className="w-48 h-72 object-cover rounded-lg" />
          </div>
          <div className="w-24">
            <img src="/api/placeholder/96/48" alt="Flourish" className="w-full" />
          </div>
          <div className="w-24">
            <img src="/api/placeholder/96/48" alt="MDI" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;