
import Link from 'next/link'
// import { IoCheckmarkDoneSharp } from "react-icons/io5";

export default function Home() {
  return (
    <div>
      <nav className="flex justify-around bg-white text-white- items-center py-2">
        <div>
        <img className="rounded-2xl" src="/logo.png" width={160} height={100} alt="" />
        </div>

        <div>
          <ul className="flex gap-6">
            <li className=" "><a href="">Home</a></li>
            <li><a href="">How It Works</a></li>
            <li><a href="">Service</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact us</a></li>
          </ul>
        </div>

        <div className="flex gap-6 text-white-">
          <Link className="bg-main  px-8 py-1 text-white rounded" href="/login">Login</Link>
          <Link className="border border-main text-black  px-8 py-1 rounded" href="/signup">Sign up</Link>
        </div>


      </nav>

      {/* <section></section> */}
      {/* herosection */}
      <div className="homeImg">

        <div className="flex justify-around py-14" >
          <div className="text-white px-24-">
            <div className="flex flex-col gap-6 w-11/12 ">
              <h1 className="text-6xl w-4/6">Lorem ipsum amet, consect consect</h1>
              <p className="w-4/6">Insecurity has chased our rural farmers away from their farms, plunging the Insecurity has chased our rural farmers away from their farms, plungin.</p>
              <div className="flex gap-6">
                <Link className="bg-main hover:text-backgroundColor text-xl px-4 py-2 text-white rounded" href="/signup">Become a Seller</Link>
                <Link className="bg-main px-4 py-2 text-white text-xl hover:text-backgroundColor rounded" href="/signup">Become a Investor</Link>

              </div>
            </div>
          </div>

          <div></div>
        </div>

      </div>




      {/* /hero end */}
      {/* service */}
      <div className="flex flex-col gap-8 top-16 relative flex-wrap">
        <div className="text-center">
          <h1 className="text-3xl font-semibold">How it works</h1>
        </div>

        <div className="flex flex-row gap-6 justify-center flex-wrap-">
          <div className="flex flex-col p-4 items-center gap-4 border-2 border-main rounded-xl h-4/6 w-64">
            <img className="rounded-2xl" src="/box-with-vegetables.jpg" width={300} height={200} alt="" />
            <h3 className="font-semibold text-lg">Vertical farming</h3>
            <p className="w-80-">Insecurity has chased our rural farmers away from their farms, plunging the Insecurity has chased our rural farmers</p>
          </div>

          <div className="flex flex-col p-4 items-center gap-4 border-2 border-main rounded-xl h-4/6 w-64">
            <img className="rounded-2xl" src="/strawberry-field.jpg" width={300} height={200} alt="" />
            <h3 className="font-semibold text-lg">Homegrown farming</h3>
            <p className="w-80-">Insecurity has chased our rural farmers away from their farms, plunging the Insecurity has chased our rural farmers</p>
          </div>

          <div className="flex flex-col p-4 items-center gap-4 border-2 border-main rounded-xl h-4/6 w-64">
            <img className="rounded-2xl" src="/protectingpPlant.jpg" width={300} height={200} alt="" />
            <h3 className="font-semibold text-lg">Educational agricultural content with AI</h3>
            <p className="w-80-">Insecurity has chased our rural farmers away from their farms, plunging the Insecurity has chased our rural farmers</p>
          </div>

          <div className="flex flex-col p-4 items-center gap-4 border-2 border-main rounded-xl h-4/6 w-64">
            <img className="rounded-2xl" src="/strawberry-field.jpg" width={300} height={200} alt="" />
            <h3 className="font-semibold text-lg">Homegrown farming</h3>
            <p className="w-80-">Insecurity has chased our rural farmers away from their farms, plunging the Insecurity has chased our rural farmers</p>
          </div>

        </div>

      </div>

      {/*  HOW IT WORKS end*/}

      

      {/* about */}
      <div className=" top-32 relative">
        <h1 className=" text-center font-bold text-3xl">Service</h1>
        <div className="flex flex-row justify-around items-center top-10 relative">
          <div className="flex flex-col gap-6">
            {/* <h2 className=" font-bold text-2xl">Lorem ipsum amet, consect consect</h2> */}
            <p className=" w-96">Insecurity has chased our rural farmers away from their farms, plunging the Insecurity has chased our rural farmers. plunging the Insecurity has chased our rural farmers</p>
            <ol className="list-disc px-10">
                  <li >Framer</li>
                  <li >Framer</li>
                  <li >Framer</li>
                  <li >Framer</li>
            </ol>
          </div>
          <div>
            <img src="/farm-workers.jpg" width={400} height={300} alt="" />
          </div>
        </div>
      </div>

      {/* about end */}


      {/* blog */}
      <div className="flex flex-col justify-center items-center gap-14 top-60 relative">
        <div className="text-center">
          <h1 className="text-3xl">Our Lastest News and Blog</h1>
          <p>Insecurity has chased our rural farmers away from their farms, plunging the Insecurity has chased our rural farmers</p>
        </div>
        {/*box*/}
        <div className="flex flex-row flex-wrap gap-10 shadow-2xl-">
          <div className=" border border-main flex flex-col gap-4 rounded-2xl drop-shadow-2xl">
            <img className="rounded-2xl" src="/plant.png" width={360} height={300} alt="" />
            <div className=" flex flex-col gap-4 px-4">
              <h3 className="text-main font-bold">13TH October 2024</h3>

              <h2>Insecurity has chased our rural farmers</h2>
              <p className="w-80">Insecurity has chased our rural farmers away from their farms, plunging the Insecurity has chased our rural farmers</p>

              <Link className="text-main font-bold" href="/signup">Read More</Link>
            </div>
          </div>

          {/*  */}
          <div className=" border border-main flex flex-col gap-4 rounded-2xl drop-shadow-2xl">
            <img className="rounded-2xl" src="/plant.png" width={360} height={300} alt="" />
            <div className=" flex flex-col gap-4 px-4">
              <h3 className="text-main font-bold">13TH October 2024</h3>

              <h2>Insecurity has chased our rural farmers</h2>
              <p className="w-80">Insecurity has chased our rural farmers away from their farms, plunging the Insecurity has chased our rural farmers</p>

              <Link className="text-main font-bold" href="/signup">Read More</Link>
            </div>
          </div>
          {/*  */}


          {/*  */}
          <div className=" border border-main flex flex-col gap-4 rounded-2xl drop-shadow-2xl">
            <img className="rounded-2xl" src="/plant.png" width={360} height={300} alt="" />
            <div className=" flex flex-col gap-4 px-4">
              <h3 className="text-main font-bold">13TH October 2024</h3>

              <h2>Insecurity has chased our rural farmers</h2>
              <p className="w-80">Insecurity has chased our rural farmers away from their farms, plunging the Insecurity has chased our rural farmers</p>

              <Link className="text-main font-bold" href="/signup">Read More</Link>
            </div>
          </div>
          {/*  */}

        </div>
        {/* box end */}
      </div>
      {/* blog end */}

      <div className="flex justify-between items-center flex-wrap top-80 relative bg-white px-14 py-2  ">
      <img className="rounded-2xl" src="/logo.png" width={160} height={100} alt="" />
        <div>
          <p>hello@gmail.com</p>
        </div>
        <p>the framers</p>
      </div>

    </div>
  );
}
