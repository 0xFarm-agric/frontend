import Image from "next/image";
import Link from 'next/link'
import { IoIosArrowForward } from "react-icons/io";
import Homenav from '../app/components/homenavbar'
import TextWithIcons from "./components/textWithIcon";
export default function Home() {
  const features = [
    { text: 'You invest or rent a space using smart contracts from anywhere in the world', color: 'text-blue-500' },
    { text: '0xFarm\'s AI powered reporting system monitoring farming environment and logs then to a smart-contract', color: 'text-yellow-500' },
    { text: 'We do the planting and husbandry', color: 'text-green-500' },
    { text: 'A farm technician is on standby to monitor the crops health', color: 'text-red-500' },
    { text: 'Our supply-chain smart contracts help you monitor your harvest from seed to market', color: 'bg-black' },
    { text: 'Payouts are powered by blockchain', color: 'text-red-500' }
  ];
  const homefarm = [
    { text: '0xFarm\'s Hub provides all-you-need materials to get started with planting and setting a home mini farm for food crops', color: 'text-yellow-500' },
    { text: 'Selecting from a plethora of cash-crops with AI home-grown recommender system', color: 'text-green-500' },
    { text: 'Anyone with enough open space within their compound can get seedlings of a cash-crop', color: 'text-red-500' },
    { text: 'Your mini home farm can recieve investments or you can request crowfunding directly from your page', color: 'bg-black' },
    { text: 'Anyone can invest in a Home-grown Farm using stellar blockchain and soroban crowdfunding smart contract to get % yields ', color: 'text-red-500' }
  ];
  const crowdFunding = [
    { text: 'Farmers and vertical farm projects are listed on the 0XFarms platform with detailed descriptions, funding goals, and expected yields.', color: 'text-blue-500' },
    { text: 'Investors browse through projects and select those they wish to fund', color: 'text-yellow-500' },
    { text: 'Investments are made using Soroban smart contracts to ensure transparency and security.', color: 'text-green-500' },
    { text: 'Investors can track the progress of their investments in real-time through the platform, with updates on funding status, crop growth, and expected returns.', color: 'text-red-500' },
    { text: 'After the harvest, profits are distributed automatically to investors based on the terms specified in the smart contracts', color: 'bg-black' },

  ];
  return (
    <main>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      <Homenav />

      {/* HERO */}
      <div className="flex flex-col justify-center items-center gap-10 py-4 md:py-10">
        {/* BOX */}
        <div className="flex justify-center items-center border-[1.6px] rounded-full px-1">
          <Image src="/flower.png" width={40} height={0} alt="Picture of the author" />
          <p className="text-sm pr-2">
            <span className="text-[#321D90] font-semibold">Web3</span> x <span className="text-[#7CA013] font-semibold">Agric</span> x <span className="text-[#FFB220] font-semibold">AI</span>
          </p>

        </div>
        {/* BOX end*/}

        <div className="flex flex-col justify-center items-center text-center gap-8">
          <h1 className="text-lg md:text-6xl w-7/12  tracking-wide font-semibold">Revolutionizing Agriculture with
            <a className="text-main text-6xl font-bold"> Smart Solution</a></h1>
          <p className="w-8/12 sm:w-6/12 font-normal text-[12px] text-gray-600">Transforming agriculture for a sustainable future—our platform offers cutting-edge solutions like vertical farming powered by Web3 investments, the AI Gardeners Companion to simplify home-grown farming, expert training and educational resources, smart contract-driven supply chain management, and urban farming innovations to reshape how we grow and consume food.
          </p>


          <a href="login" className="bg-main text-white px-8 font-thin py-3 rounded-full text-lg">
            Get Started
          </a>

          <Image src="/headshot.png" width={160} height={100} alt="oxFramer" />
        </div>

      </div>


      {/* HERO END */}

      {/* images end */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div>
          <Image src="/dashboard.png" width={500} height={400} alt="oxFramer" />
        </div>

        <div>
          <Image src="/hm.jpeg" width={350} height={200} alt="oxFramer" />
        </div>

        <div>
          <Image sizes="23" src="/pure.jpg" width={360} height={200} alt="oxFramer" />
        </div>
      </div>
      {/* images end */}




      {/* what we do */}
      <div className="flex flex-col mt-16 justify-center items-center gap-10 py-4 md:py-10 bg-backgroundColor">
        {/* BOX */}
        <div className="flex justify-center border-gray-300 items-center border-[0.5px] rounded-full px-2 py-2">
          <p className="text-[18px] text-black font-thin px-4">What We Do</p>
        </div>
        {/* BOX end*/}

        <div className=" flex flex-col justify-center items-center text-center gap-8">
          <h1 className="text-xl md:text-3xl w-800 font-semibold- tracking-wide font-normal">Revolutionizing Modern Agriculture</h1>
          <p className="w-7/12 text-gray-600 font-light text-lg">Vertical Farms-AI powered food crop farms utilizing web3 for supply-chain, commercialization and investments in urban areas.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6" >
          <div className="bg-white rounded-3xl flex flex-col py-6 px-4 gap-8 w-80 md:w-[340px] h-96">


            <svg
              width="55" height="55"
              strokeWidth={0.3} stroke="#578917"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M14.5 9.75C14.5663 9.75 14.6299 9.72366 14.6768 9.67678C14.7237 9.62989 14.75 9.5663 14.75 9.5C14.75 9.4337 14.7237 9.37011 14.6768 9.32322C14.6299 9.27634 14.5663 9.25 14.5 9.25C13.0935 9.2491 11.6946 9.45634 10.3488 9.865C9.79326 9.50318 9.21591 9.1761 8.62 8.88562C10.4885 8.13165 12.4851 7.74604 14.5 7.75C14.5663 7.75 14.6299 7.72366 14.6768 7.67678C14.7237 7.62989 14.75 7.5663 14.75 7.5C14.75 7.4337 14.7237 7.37011 14.6768 7.32322C14.6299 7.27634 14.5663 7.25 14.5 7.25C14.0808 7.25 13.6642 7.26583 13.25 7.2975V5C13.25 4.96119 13.241 4.92291 13.2236 4.8882C13.2063 4.85348 13.181 4.82329 13.15 4.8L9.15 1.8C9.10673 1.76754 9.05409 1.75 9 1.75C8.94591 1.75 8.89327 1.76754 8.85 1.8L4.85 4.8C4.81895 4.82329 4.79375 4.85348 4.77639 4.8882C4.75904 4.92291 4.75 4.96119 4.75 5V7.575C3.68022 7.3585 2.59146 7.24962 1.5 7.25C1.4337 7.25 1.37011 7.27634 1.32322 7.32322C1.27634 7.37011 1.25 7.4337 1.25 7.5C1.25 7.5663 1.27634 7.62989 1.32322 7.67678C1.37011 7.72366 1.4337 7.75 1.5 7.75C3.86189 7.74536 6.19435 8.2741 8.32336 9.29678C10.4524 10.3195 12.323 11.8097 13.7956 13.6562C13.8378 13.7056 13.8975 13.7367 13.9622 13.7428C14.0269 13.7489 14.0914 13.7296 14.1421 13.689C14.1928 13.6484 14.2256 13.5896 14.2338 13.5252C14.2419 13.4608 14.2246 13.3957 14.1856 13.3438C13.7693 12.8246 13.3218 12.3312 12.8456 11.8663C13.3937 11.789 13.9465 11.7501 14.5 11.75C14.5663 11.75 14.6299 11.7237 14.6768 11.6768C14.7237 11.6299 14.75 11.5663 14.75 11.5C14.75 11.4337 14.7237 11.3701 14.6768 11.3232C14.6299 11.2763 14.5663 11.25 14.5 11.25C13.7911 11.2501 13.0835 11.3112 12.385 11.4325C11.9091 11.0023 11.4082 10.6006 10.885 10.2294C12.0634 9.91016 13.2791 9.74896 14.5 9.75ZM10.25 7.8125C9.48313 8.02078 8.73258 8.28503 8.00438 8.60312C7.91938 8.56687 7.835 8.52938 7.75 8.49438V6.25H10.25V7.8125ZM5.25 5.125L9 2.3125L12.75 5.125V7.34312C12.0769 7.41474 11.4089 7.5285 10.75 7.68375V6C10.75 5.9337 10.7237 5.87011 10.6768 5.82322C10.6299 5.77634 10.5663 5.75 10.5 5.75H7.5C7.4337 5.75 7.37011 5.77634 7.32322 5.82322C7.27634 5.87011 7.25 5.9337 7.25 6V8.29438C6.5971 8.04921 5.92904 7.8465 5.25 7.6875V5.125ZM8.34375 13.6381C8.32559 13.6655 8.30221 13.6891 8.27494 13.7074C8.24767 13.7258 8.21705 13.7386 8.18483 13.7451C8.15261 13.7516 8.11943 13.7516 8.08717 13.7453C8.05492 13.739 8.02424 13.7263 7.99687 13.7081C6.07239 12.4276 3.81156 11.7462 1.5 11.75C1.4337 11.75 1.37011 11.7237 1.32322 11.6768C1.27634 11.6299 1.25 11.5663 1.25 11.5C1.25 11.4337 1.27634 11.3701 1.32322 11.3232C1.37011 11.2763 1.4337 11.25 1.5 11.25C3.91009 11.2463 6.26724 11.9568 8.27375 13.2919C8.3289 13.3285 8.36725 13.3856 8.38037 13.4505C8.3935 13.5154 8.38033 13.5829 8.34375 13.6381ZM11.4731 13.3212C11.5205 13.3677 11.5476 13.431 11.5483 13.4973C11.549 13.5637 11.5233 13.6276 11.4769 13.675C11.4305 13.7224 11.3671 13.7494 11.3008 13.7501C11.2344 13.7508 11.1705 13.7252 11.1231 13.6788C8.5577 11.1534 5.09983 9.74168 1.5 9.75C1.4337 9.75 1.37011 9.72366 1.32322 9.67678C1.27634 9.62989 1.25 9.5663 1.25 9.5C1.25 9.4337 1.27634 9.37011 1.32322 9.32322C1.37011 9.27634 1.4337 9.25 1.5 9.25C5.23072 9.24116 8.81439 10.7041 11.4731 13.3212Z" fill="black" />
            </svg>

            <h3 className="font-semibold- text-2xl font-normal">Vertical Farms</h3>
            <p className="w-72 text-[12px] tracking-wide">AI powered food crop farms utilizing web3 for supply-chain, commercialization and investments in urban areas.</p>
            <Link className="flex items-center gap-4 text-main text-lg" href="">Get in Touch <IoIosArrowForward /></Link>
          </div>

          <div className="bg-white rounded-3xl flex flex-col py-6 px-4 gap-8 w-80 md:w-[340px] h-96">
            <svg

              viewBox="0 0 16 16"
              fill="none"
              strokeWidth={0.3} stroke="#578917"
              width="55" height="55"
              xmlns="http://www.w3.org/2000/svg">

              <path d="M15.227 3.0075C15.2233 2.94645 15.1973 2.88888 15.154 2.84569C15.1107 2.8025 15.0531 2.77668 14.992 2.77312C11.8514 2.58562 9.33949 3.52937 8.27199 5.29125C7.54449 6.4925 7.57387 7.91125 8.34949 9.30437C7.80213 9.90566 7.44068 10.6526 7.30887 11.455L5.84074 9.98687C6.38012 8.98687 6.39137 7.96625 5.86699 7.1C5.09074 5.81812 3.27199 5.13312 1.00012 5.26625C0.93938 5.27008 0.882128 5.29594 0.839094 5.33897C0.796061 5.38201 0.770203 5.43926 0.766368 5.5C0.633243 7.77062 1.31824 9.58937 2.60012 10.3656C3.01151 10.6183 3.48485 10.7519 3.96762 10.7519C4.50049 10.7428 5.02269 10.601 5.48699 10.3394L7.25012 12.1044V14C7.25012 14.0663 7.27646 14.1299 7.32334 14.1768C7.37022 14.2237 7.43381 14.25 7.50012 14.25C7.56642 14.25 7.63001 14.2237 7.67689 14.1768C7.72378 14.1299 7.75012 14.0663 7.75012 14V12.1569C7.74777 11.2339 8.08833 10.3429 8.70574 9.65687C9.42387 10.0544 10.1476 10.2544 10.8457 10.2544C11.5034 10.2545 12.1482 10.0726 12.7089 9.72875C14.4701 8.66062 15.412 6.14875 15.227 3.0075ZM2.85887 9.9375C1.77949 9.285 1.18762 7.73062 1.25512 5.755C3.23074 5.68687 4.78512 6.27937 5.44262 7.35875C5.84762 8.02812 5.85449 8.81937 5.47137 9.61437L3.67637 7.82312C3.62881 7.78003 3.56651 7.75688 3.50235 7.75846C3.4382 7.76004 3.37711 7.78623 3.33173 7.83161C3.28635 7.87699 3.26016 7.93808 3.25858 8.00223C3.257 8.06639 3.28015 8.12869 3.32324 8.17625L5.11512 9.96812C4.31949 10.3512 3.52824 10.3444 2.85887 9.9375ZM12.4495 9.3C11.4464 9.9075 10.2564 9.89937 9.06949 9.28437L12.677 5.67625C12.7219 5.62902 12.7467 5.56611 12.7459 5.50091C12.7451 5.43572 12.7189 5.37341 12.6728 5.32727C12.6268 5.28113 12.5645 5.25481 12.4993 5.25392C12.4341 5.25302 12.3712 5.27763 12.3239 5.3225L8.71574 8.93062C8.10074 7.74312 8.09074 6.55562 8.70012 5.55062C9.64449 3.98812 11.8926 3.1425 14.7395 3.26062C14.8582 6.1075 14.0095 8.35562 12.4495 9.3Z" fill="black" />
            </svg>

            <h3 className="text-2xl font-normal">Decentralized farming</h3>
            <p className="w-72 text-[12px] tracking-wide">Everyone a farmer, Empowering rural households to turn backyards into high-yield mini-farms 0xFarms provides you with the platform to crowdfund a mini-Farm so you can even go commercial.</p>
            <Link className="flex items-center gap-4 text-main text-xl" href="">Get in Touch <IoIosArrowForward /></Link>
          </div>
          <div className="bg-white rounded-3xl flex flex-col py-6 px-4 gap-8 w-80 md:w-[340px] h-96">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24"
              strokeWidth={0.3} stroke="#578917"
              width="55" height="55"
            >
              <path strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
            </svg>

            <h3 className="font-semibold- text-2xl font-normal">Farmer Hub</h3>
            <p className="w-72 text-[12px] tracking-wide">0xFarms farmer hub provides the X(formerly called Twitter) experience. you can meet ,share and learn farming ideas.</p>
            <Link className="flex items-center gap-4 text-main text-xl" href="">Get in Touch <IoIosArrowForward /></Link>
          </div>
        </div>

      </div>

      {/* what we do end */}

      {/* solution */}
      <div className="flex flex-col justify-center items-center gap-10 py-2 md:py-10 ">
        {/* BOX */}
        <div className="flex justify-center items-center border-[1px] rounded-full px-2 py-2">
          <p className=" text-xl px-2 font-thin">Unique Solution</p>
        </div>
        {/* BOX end*/}

        <div className=" flex flex-col justify-center items-center text-center gap-8">
          <h1 className="text-xl md:text-3xl w-800 tracking-wide font-medium">How 0xFarms works</h1>
          <p className="w-7/12 text-gray-600 text-sm">Awakening the oldest professional, Empowering urban households to turn backyards into high-yield mini-farms, State-of-the-art web3 and AI powered vertical farms in urban centers with flexible rental farming plans.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-20" >
          <div className="bg-gray-200 rounded-3xl flex flex-col py-6 px-4 w-80 md:w-[500px] h-80">
            <Image src="/vf.jpg" className="rounded-lg mb-4" width={80} height={40} alt="oxFramer" />

            <p className="font-semibold- text-xl font-normal mb-2">Vertical Farms</p>
            <TextWithIcons features={features} />
          </div>

          <div className="bg-gray-200 rounded-3xl flex flex-col py-6 px-4 w-80 md:w-[500px] h-80">
          <Image src="/hm.jpeg" className="rounded-lg mb-2" width={80} height={40} alt="oxFramer" />

            <p className="font-semibold- text-xl font-normal mb-2">Home Mini Farms</p>
            <TextWithIcons features={homefarm} />
              </div>

        </div>

        {/* two */}

        <div className="flex flex-col md:flex-row gap-20 py-10" >
        <div className="bg-gray-200 rounded-3xl flex flex-col py-6 px-4 w-80 md:w-[500px] h-80">
          <Image src="/hm.jpeg" className="rounded-lg mb-2" width={80} height={40} alt="oxFramer" />

            <p className="font-semibold- text-xl font-normal mb-2">Crowd Funding</p>
            <TextWithIcons features={crowdFunding} />
          </div>

        

        </div>
        {/* two end */}

      </div>

      {/* mission */}

      <div className="flex flex-col justify-center items-center gap-10 py-4 ">
        {/* two */}
        <div className="flex justify-center items-center border-[1px] rounded-full px-2 py-2">
          <p className=" text-xl px-2 font-thin">Why Choose Us</p>
        </div>

        <div className="flex flex-col md:flex-row gap-20 py-10" >
          <div className=" flex flex-col py-6 px-4 gap-8 h-80">
            <Image className="rounded-3xl" src="/Farming-tech.jpg" width={500} height={400} alt="oxFramer" />

          </div>

          <div className="rounded-3xl flex flex-col items-start py-6 px-4 gap-8 w-80 md:w-[500px] h-80">
            <p className="flex justify-center items-center border-[1px] rounded-full px-4 py-2 text-sm">Mission</p>

            <h3 className="font-semibold- text-2xl font-normal">Eradicate Poverty through Modernized Agric</h3>
            <p className="w-72- text-lg font-thin tracking-wide text-gray-600">Awaken and strengthen the worlds oldest proffesion while creating equal opportunity to create wealth, increase employeability and introduce the next generation agriculture</p>
            <Link className="bg-main flex gap-4 items-center text-white px-6 py-3 font-thin rounded-full text-lg" href="#signup">Get Started<IoIosArrowForward /></Link>

          </div>

        </div>
        {/* two end */}
      </div>
      {/* mission */}

      {/* vision */}

      <div className="flex flex-col justify-center items-center gap-10 py-2">

        <div className="flex flex-col md:flex-row gap-20 py-10" >

          <div className="rounded-3xl flex flex-col items-start py-6 px-4 gap-8 w-80 md:w-[500px] h-80">
            <p className="flex justify-center items-center border-[1px] rounded-full px-4 py-2 text-sm">Vision</p>

            <h3 className="font-semibold- text-2xl font-normal">World Farming</h3>
            <p className="w-72- text-lg font-thin tracking-wide text-gray-600">Ensure every household is fed with not just food but agricultural knowlegde that span into the future</p>
            <Link className="bg-main flex gap-4 items-center text-white px-6 py-3 font-thin rounded-full text-lg" href="#signup">Get Started <IoIosArrowForward /></Link>

          </div>

          <div className=" flex flex-col py-6 px-4 gap-8 h-80">
            <Image className="rounded-3xl" src="/farm-workers-collegues.jpg" width={500} height={400} alt="oxFramer" />

          </div>

        </div>
        {/* two end */}
      </div>

      {/* vision end */}

      {/* pricing */}
      <div className="flex flex-col justify-center items-center gap-10 py-4 md:py-10 bg-backgroundColor ">
        {/* BOX */}
        <div className="flex justify-center border-gray-300 items-center border-[0.5px] rounded-full px-2 py-2">
          <p className="text-[18px] text-black font-thin px-4">Pricing</p>
        </div>
        {/* BOX end*/}

        <div className=" flex flex-col justify-center items-center text-center gap-4 border-">
          <h1 className="text-xl md:text-3xl w-800 font-semibold- tracking-wide font-normal">Affordable vertical fields</h1>
          <p className="w-7/12 text-gray-500 font-thin text-lg">Our pricing is designed to cater for farms of different width and height area</p>
        </div>

        {/* pricing box */}

        <div className="flex flex-col md:flex-row gap-8">
          <div className=" border-2 bg-white flex flex-col gap-6 px-4 py-4 hover:drop-shadow-2xl rounded-2xl">
            <h1 className="text-main text-lg">Basic</h1>

            <p className="font-thin">For personal Use and exploration of <br /> AI technoloy </p>
            <p><a className="text-3xl" href="#">$99</a>/month</p>

            <Link className="hover:bg-main border-[1px] border-main text-center px-8 py-2 rounded-full text-xs" href="#signup">Get Started</Link>

            <div className="flex flex-col gap-4 font-thin text-xs">
              <p>Basic IOT Session</p>
              <p>Data analytics</p>
              <p>Basic security</p>
              <p>Farm management tools</p>
            </div>

          </div>

          <div className=" border-2 bg-white flex flex-col gap-6 px-8 py-4 hover:drop-shadow-2xl rounded-2xl">
            <div className="flex justify-between">
              <h1 className="text-main text-lg">Premium </h1>
              <p className="text-xs font-thin">popular</p>
            </div>
            <p className="font-thin text-xs">For personal Use and exploration of <br /> AI technoloy </p>
            <p><a className="text-6xl" href="#">$299</a>/month</p>

            <Link className="hover:bg-main border-[1px] border-main text-center px-8 py-2 rounded-full text-xs" href="#signup">Get Started</Link>

            <div className="flex flex-col gap-4 text-xs font-light">
              <p>Basic IOT Session</p>
              <p>Data analytics</p>
              <p>Basic security</p>
              <p>Farm management tools</p>
            </div>

          </div>

          <div className=" border-2 bg-white flex flex-col gap-6 px-4 py-4 hover:drop-shadow-2xl rounded-2xl">
            <h1 className="text-main text-lg">Enterprises</h1>
            <p className="font-thin text-xs">For personal Use and exploration of <br /> AI technoloy </p>

            <div className="py-9">
              <Link className="hover:bg-main border-[1px] border-main text-center px-12 py-2 rounded-full text-xs py-9-" href="#signup">Request Quote</Link>

            </div>

            <div className="flex flex-col gap-4 text-xs font-light">
              <p>Basic IOT Session</p>
              <p>Data analytics</p>
              <p>Basic security</p>
              <p>Farm management tools</p>
            </div>

          </div>

        </div>

        {/* pricing box end */}
      </div>


      {/* success */}

      {/* success */}
      <div className="flex flex-col justify-center items-center gap-10 py-4 md:py-10 bg-backgroundColor ">
        {/* BOX */}
        <div className="flex flex-col gap-6 justify-center items-center">
          <p className="text-xl md:text-6xl text-center font-light">Get all the tools you <br /> need for success
          </p>
          <p className="text-xl font-thin text-gray-600">Join over 300+ partner and customers already growing with FarmTech
          </p>
          <Link className="bg-main text-center px-6 py-2 rounded-full text-xl py-2 text-white" href="#signup">Start today</Link>

        </div>

        {/* BOX end*/}
      </div>

      {/* success end */}

      {/* subscribe */}
      <div className="flex md:flex-row flex-col items-center- justify-center md:justify-around  py-20">
        <div className="flex flex-col gap-4">
          <h1 className="font-thin text-3xl ">Subscribe to our <br /> newsletter</h1>
          <div className="border py-2 rounded-full">
            <input className="border-none text-sm pl-2" placeholder="enter your email" type="text" />
            <Link className="bg-main  text-center px-6 py-2 rounded-full text-sm py-2" href="#signup">Subscribe</Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-medium">Explore</h3>
          <p className="font-thin text-gray-600">Home</p>
          <p className="font-thin text-gray-600">Service</p>
          <p className="font-thin text-gray-600">About us</p>
          <p className="font-thin text-gray-600">Contact us</p>

        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold">Socials</h1>
          <p className=" text-gray-600 font-thin">linkedin</p>
          <p className=" text-gray-600 font-thin">instagram</p>

          <p className=" text-gray-600 font-thin">Twitter</p>
          <p className=" text-gray-600 font-thin">Email</p>

        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">Legal</h3>
          <p className=" text-gray-600 font-thin">Term of use</p>
          <p className=" text-gray-600 font-thin">Privacy Policy</p>
        </div>

      </div>

      {/* copyright */}
      <div className="flex flex-col md:flex-row justify-center items-center- lg:justify-between font-thin text-gray-600 px-4 md:px-20 mb-8">
        <p>Copyright 2024 0xFarms All rights reserved </p>
        <p>Terms and condition</p>
      </div>
      {/* copyright end */}

    </main>
  );
}
