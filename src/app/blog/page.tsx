import Image from "next/image";
import Link from 'next/link'
// import { IoCheckmarkDoneSharp } from "react-icons/io5";

export default function Home() {
    return (
        <main>
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

            {/* blog */}
            <div className="flex flex-col justify-center items-center gap-14 top-10 relative">
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



            {/* col2 */}
            
      {/* blog */}
      <div className="flex flex-col justify-center items-center gap-14 top-20 relative">
      
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

            {/* col2 end */}

            {/* foooter */}

            <div className="flex justify-between items-center flex-wrap top-40 relative bg-white px-14 py-2  ">
                <img className="rounded-2xl" src="/logo.png" width={160} height={100} alt="" />
                <div>
                    <p>hello@gmail.com</p>
                </div>
                <p>the framers</p>
            </div>

            {/* footer */}
        </main>
    );
}
