import Image from "next/image";
import Link from 'next/link'
import { IoIosArrowForward } from "react-icons/io";
import Homenav from '../app/components/homenavbar'
export default function Home() {
  return (
    <main>
      <Homenav />

      {/* HERO */}
      <div className="flex flex-col justify-center items-center gap-10 py-4 md:py-10">
        {/* BOX */}
        <div className="flex justify-center items-center border-2 rounded-full px-2">
          <Image src="/flower.png" width={60} height={0} alt="Picture of the author" />
          <p className=" text-xl">Best Afrotech Network</p>
        </div>
        {/* BOX end*/}

        <div className=" flex flex-col justify-center items-center text-center gap-8">
          <h1 className="text-xl md:text-5xl w-6/12 font-semibold- tracking-wide font-normal">Revolutionizing Framing With <a className="text-main" href="#">Smart Solution</a></h1>
          <p className="w-8/12 sm:w-6/12">Unlocking the potential of modern agriculture by integrating innovation technologies that boost crop productivity, improve sustainability, and empower framers to thrive in an evolving landscape.</p>

    
      <a href="/dashboard" className="bg-main text-white px-8 py-3 rounded-full text-xl">
        Get Started
      </a>

          <Image src="/headshot.png" width={160} height={100} alt="oxFramer" />
        </div>

      </div>


      {/* HERO END */}

      {/* images end */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div>
          <Image src="/one.png" width={440} height={200} alt="oxFramer" />
        </div>

        <div>
          <Image src="/two.png" width={260} height={100} alt="oxFramer" />
        </div>

        <div>
          <Image src="/three.png" width={260} height={180} alt="oxFramer" />
        </div>
      </div>
      {/* images end */}


      {/* rating */}
      <div className="flex flex-col sm:flex-row justify-center gap-8 md:gap-32 items-center py-32">
        <div>
          <h1 className="text-sm md:text-xl text-gray-500">Satisfied <br /> Customers</h1>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-sm md:text-xl text-gray-500">Satisfied <br />Customers</h1>
          <p className="text-6xl text-main">1M+</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-sm md:text-xl text-gray-500">Total project <br /> completed</h1>
          <p className="text-6xl">19K</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-sm md:text-xl text-gray-500">Total years of <br /> experience</h1>
          <p className="text-6xl">09+</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-sm md:text-xl text-gray-500">Satisfied <br />Partner</h1>
          <p className="text-6xl">5K</p>
        </div>

      </div>
      {/* rating end */}

      {/* what we do */}
      <div className="flex flex-col justify-center items-center gap-10 py-4 md:py-10 bg-backgroundColor">
        {/* BOX */}
        <div className="flex justify-center items-center border-2 rounded-full px-2 py-2">
          <p className=" text-2xl">What We Do</p>
        </div>
        {/* BOX end*/}

        <div className=" flex flex-col justify-center items-center text-center gap-8">
          <h1 className="text-xl md:text-3xl w-800 font-semibold- tracking-wide font-normal">Revolutionizing Modern Agriculture</h1>
          <p className="w-7/12 text-gray-500 text-lg">Harness the power of cutting-edge technology to boost farm productivity, reduce operational costs, and ensure sustainable practices.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6" >
          <div className="bg-white rounded-3xl flex flex-col py-6 px-4 gap-8 w-80 md:w-[340px] h-96">
            <Image src="/icon.png" width={80} height={40} alt="oxFramer" />

            <h3 className="font-semibold- text-2xl font-normal">Smart Irrigation Systems</h3>
            <p className="w-72 text-lg tracking-wide text-gray-500">Save water and optimize growth with automated irrigation solutions. This helps in improving long-term profits and growth.</p>
            <Link className="flex items-center gap-4 text-main text-xl" href="/dashboard">Get in Touch <IoIosArrowForward /></Link>
          </div>

          <div className="bg-white rounded-3xl flex flex-col py-6 px-4 gap-8 w-80 md:w-[340px] h-96">
            <Image src="/icon.png" width={80} height={40} alt="oxFramer" />

            <h3 className="font-semibold- text-2xl font-normal">Smart Irrigation Systems</h3>
            <p className="w-72 text-lg tracking-wide text-gray-500">Save water and optimize growth with automated irrigation solutions. This helps in improving long-term profits and growth.</p>
            <Link className="flex items-center gap-4 text-main text-xl" href="/dashboard">Get in Touch <IoIosArrowForward /></Link>
          </div>
          <div className="bg-white rounded-3xl flex flex-col py-6 px-4 gap-8 w-80 md:w-[340px] h-96">
            <Image src="/icon.png" width={80} height={40} alt="oxFramer" />

            <h3 className="font-semibold- text-2xl font-normal">Smart Irrigation Systems</h3>
            <p className="w-72 text-lg tracking-wide text-gray-500">Save water and optimize growth with automated irrigation solutions. This helps in improving long-term profits and growth.</p>
            <Link className="flex items-center gap-4 text-main text-xl" href="/dashboard">Get in Touch <IoIosArrowForward /></Link>
          </div>
        </div>

      </div>

      {/* what we do end */}

      {/* solution */}
      <div className="flex flex-col justify-center items-center gap-10 py-4 md:py-10 ">
        {/* BOX */}
        <div className="flex justify-center items-center border-2 rounded-full px-2 py-2">
          <p className=" text-2xl">Unique Solution</p>
        </div>
        {/* BOX end*/}

        <div className=" flex flex-col justify-center items-center text-center gap-8 ">
          <h1 className="text-xl md:text-3xl w-800 font-semibold- tracking-wide font-normal">Revolutionizing Modern Agriculture</h1>
          <p className="w-7/12 text-gray-500 text-lg">Harness the power of cutting-edge technology to boost farm productivity, reduce operational costs, and ensure sustainable practices.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-20" >
          <div className="bg-gray-200 rounded-3xl flex flex-col py-6 px-4 gap-8 w-80 md:w-[500px] h-80">
            <Image src="/icon.png" width={80} height={40} alt="oxFramer" />

            <h3 className="font-semibold- text-2xl font-normal">Smart Irrigation Systems</h3>
            <p className="w-80- text-lg tracking-wide text-gray-500">Save water and optimize growth with automated irrigation solutions. This helps in improving long-term profits and growth.</p>
          </div>

          <div className="bg-gray-200 rounded-3xl flex flex-col py-6 px-4 gap-8 w-80 md:w-[500px] h-80">
            <Image src="/icon.png" width={80} height={40} alt="oxFramer" />

            <h3 className="font-semibold- text-2xl font-normal">Smart Irrigation Systems</h3>
            <p className="w-72- text-lg tracking-wide text-gray-500">Save water and optimize growth with automated irrigation solutions. This helps in improving long-term profits and growth.</p>
          </div>

        </div>

        {/* two */}


        <div className="flex flex-col md:flex-row gap-20 py-10" >
          <div className="bg-gray-200 rounded-3xl flex flex-col py-6 px-4 gap-8 w-80 md:w-[500px] h-80">
            <Image src="/icon.png" width={80} height={40} alt="oxFramer" />

            <h3 className="font-semibold- text-2xl font-normal">Smart Irrigation Systems</h3>
            <p className="w-80- text-lg tracking-wide text-gray-500">Save water and optimize growth with automated irrigation solutions. This helps in improving long-term profits and growth.</p>
          </div>

          <div className="bg-gray-200 rounded-3xl flex flex-col py-6 px-4 gap-8 w-80 md:w-[500px] h-80">
            <Image src="/icon.png" width={80} height={40} alt="oxFramer" />

            <h3 className="font-semibold- text-2xl font-normal">Smart Irrigation Systems</h3>
            <p className="w-72- text-lg tracking-wide text-gray-500">Save water and optimize growth with automated irrigation solutions. This helps in improving long-term profits and growth.</p>
          </div>

        </div>
        {/* two end */}

      </div>

      {/* solutions end */}

      {/* mission */}

      <div className="flex flex-col justify-center items-center gap-10 py-4 md:py-10">
        {/* two */}
        <div className="flex justify-center items-center border-2 rounded-full px-2 py-2">
          <p className=" text-2xl">What We Do</p>
        </div>


        <div className="flex flex-col md:flex-row gap-20 py-10" >
          <div className=" flex flex-col py-6 px-4 gap-8 h-80">
            <Image className="rounded-3xl" src="/farm-workers-collegues.jpg" width={500} height={400} alt="oxFramer" />

          </div>

          <div className="rounded-3xl flex flex-col items-start py-6 px-4 gap-8 w-80 md:w-[500px] h-80">
            <p className="flex justify-center items-center border-2 rounded-full px-2 py-2 text-2xl">Mission</p>


            <h3 className="font-semibold- text-2xl font-normal">Smart Irrigation Systems</h3>
            <p className="w-72- text-lg tracking-wide text-gray-500">Save water and optimize growth with automated irrigation solutions. This helps in improving long-term profits and growth.</p>
            <Link className="bg-main flex gap-4 items-center text-white px-6 py-3 rounded-full text-xl" href="#signup">Get Started <IoIosArrowForward /></Link>


          </div>

        </div>
        {/* two end */}
      </div>
      {/* mission */}


      {/* vision */}


      <div className="flex flex-col justify-center items-center gap-10 py-4 md:py-10">
        {/* two */}
        <div className="flex justify-center items-center border-2 rounded-full px-2 py-2">
          <p className=" text-2xl">Why Choose Us</p>
        </div>


        <div className="flex flex-col md:flex-row gap-20 py-10" >


          <div className="rounded-3xl flex flex-col items-start py-6 px-4 gap-8 w-80 md:w-[500px] h-80">
            <p className="flex justify-center items-center border-2 rounded-full px-2 py-2 text-2xl">Vision</p>


            <h3 className="font-semibold- text-2xl font-normal">Smart Irrigation Systems</h3>
            <p className="w-72- text-lg tracking-wide text-gray-500">Save water and optimize growth with automated irrigation solutions. This helps in improving long-term profits and growth.</p>
            <Link className="bg-main flex gap-4 items-center text-white px-6 py-3 rounded-full text-xl" href="#signup">Get Started <IoIosArrowForward /></Link>


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
        <div className="flex justify-center items-center border-2 rounded-full px-2 py-2">
          <p className=" text-2xl">Pricing</p>
        </div>
        {/* BOX end*/}

        <div className=" flex flex-col justify-center items-center text-center gap-8 border-">
          <h1 className="text-xl md:text-3xl w-800 font-semibold- tracking-wide font-normal">Revolutionizing Modern Agriculture</h1>
          <p className="w-7/12 text-gray-500 text-lg">Harness the power of cutting-edge technology to boost farm productivity, reduce operational costs, and ensure sustainable practices.</p>
        </div>

        {/* pricing box */}

        <div className="flex flex-col md:flex-row gap-8">
          <div className=" border-2 bg-white flex flex-col gap-6 px-4 py-4 hover:drop-shadow-2xl rounded-2xl">
            <h1 className="text-main text-lg">Basic</h1>

            <p>For personal Use and exploration of <br /> AI technoloy </p>
            <p><a className="text-3xl" href="#">$99</a>/month</p>

            <Link className="hover:bg-main border border-main text-center px-8 py-2 rounded-full text-xl" href="#signup">Get Started</Link>


            <div className="flex flex-col gap-4">
              <p>Basic IOT Session</p>
              <p>Data analytics</p>
              <p>Basic security</p>
              <p>Farm management tools</p>
            </div>

          </div>

          <div className=" border-2 bg-white flex flex-col gap-6 px-8 py-4 hover:drop-shadow-2xl rounded-2xl">
            <div className="flex justify-between">
              <h1 className="text-main text-lg">Premium </h1>
              <p>popular</p>
            </div>
            <p>For personal Use and exploration of <br /> AI technoloy </p>
            <p><a className="text-6xl" href="#">$299</a>/month</p>

            <Link className="hover:bg-main border border-main text-center px-8 py-2 rounded-full text-xl" href="#signup">Get Started</Link>


            <div className="flex flex-col gap-4">
              <p>Basic IOT Session</p>
              <p>Data analytics</p>
              <p>Basic security</p>
              <p>Farm management tools</p>
            </div>

          </div>

          <div className=" border-2 bg-white flex flex-col gap-6 px-4 py-4 hover:drop-shadow-2xl rounded-2xl">
            <h1 className="text-main text-lg">Enterprises</h1>
            <p>For personal Use and exploration of <br /> AI technoloy </p>

            <div className="py-9">
              <Link className="hover:bg-main border border-main text-center px-12 py-2 rounded-full text-xl py-9-" href="#signup">Request Quote</Link>

            </div>

            <div className="flex flex-col gap-4">
              <p>Basic IOT Session</p>
              <p>Data analytics</p>
              <p>Basic security</p>
              <p>Farm management tools</p>
            </div>

          </div>

        </div>

        {/* pricing box end */}
      </div>

      {/* pricing end */}

      {/* partner */}
      <div className="flex flex-col sm:flex-row justify-center gap-8 md:gap-32 items-center py-32">
        <div>
          <h1 className="text-sm md:text-xl text-gray-500">Over 30+ <br /> Partners</h1>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-sm md:text-xl text-gray-500">company </h1>
          {/* <p className="text-6xl text-main">1M+</p> */}
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-sm md:text-xl text-gray-500">company </h1>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-sm md:text-xl text-gray-500">company </h1>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-sm md:text-xl text-gray-500">company </h1>
        </div>

      </div>
      {/*  partner end*/}

      {/* success */}

      {/* success */}
      <div className="flex flex-col justify-center items-center gap-10 py-4 md:py-10 bg-backgroundColor ">
        {/* BOX */}
        <div className="flex flex-col gap-6 justify-center items-center">
          <p className="text-xl md:text-6xl text-center font-light">Get all the tools you <br /> need for success
          </p>
          <p className="">Join over 300+ partner and customers already growing with FarmTech
          </p>
          <Link className="bg-main text-center px-6 py-2 rounded-full text-xl py-9-" href="#signup">Start today</Link>

        </div>

        {/* BOX end*/}
      </div>

      {/* success end */}

      {/* subscribe */}
      <div className="flex md:flex-row flex-col items-center- justify-center md:justify-around  py-20">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold- text-3xl ">Subscribe to our <br /> newsletter</h1>
          <div className="border px-4 py-4 rounded-full ">
            <input className="border-none" placeholder="enter your email" type="text" />
            <Link className="bg-main  text-center px-6 py-2 rounded-full text-xl py-9-" href="#signup">Subscribe</Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">Explore</h3>
          <p className=" text-gray-600">Home</p>
          <p className=" text-gray-600">Service</p>
          <p className=" text-gray-600">About us</p>
          <p className=" text-gray-600">Contact us</p>

        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold">Socials</h1>
          <p className=" text-gray-600">linkedin</p>
          <p className=" text-gray-600">instagram</p>

          <p className=" text-gray-600">Twitter</p>
          <p className=" text-gray-600">Email</p>

        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">Legal</h3>
          <p className=" text-gray-600">Term of use</p>
          <p className=" text-gray-600">Privacy Policy</p>
        </div>

      </div>
      {/* subscribe end*/}

      {/* copyright */}
      <div className="flex flex-col md:flex-row justify-center items-center- lg:justify-between px-4 md:px-20">
        <p>Copyright 2024 Oxframer All rights reserved </p>
        <p>Terms and condition</p>
      </div>
      {/* copyright end */}

    </main>
  );
}
