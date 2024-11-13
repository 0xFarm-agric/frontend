
"use client"; // This tells Next.js this is a Client Component
import Image from "next/image";
import { useState } from 'react';
import Link from 'next/link';

const ToggleButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
    };


    return (
        <main>

            <nav className="bg-white">
                <div className="flex justify-around items-center px-0 sm:px-0 py-2">
                    <div className="text-white- text-lg font-bold">
                        <Link href="#">
                            <Image className="rounded-2xl" src="/logo.png" width={160} height={100} alt="" />
                        </Link>
                    </div>

                    <div>
                        <input className="border border-main w-96 h-10 px-4 rounded-3xl" type="text" placeholder="search " />
                        {/* <button className="bg-main text-white px-5 h-10 rounded">New Campaign</button> */}
                    </div>
                    {/* addbtn */}


                    {/*  */}

                    {/* Menu Links */}
                    <div className="flex gap-4">
                        <div>
                            <Link href="#" className="flex justify-around items-center text-white- border rounded-2xl w-20 sm:w-28 py-1 border-main">
                                <p>Freighter</p>
                            </Link>
                        </div>

                        {/* Toggle Button */}
                        <div className="relative">
                            <Link
                                href="#"
                                className="flex justify-around items-center text-white- border rounded-2xl py-1 px-4 border-main w-20 sm:w-40"
                                onClick={handleClick}
                            >
                                pb1...f58xcmxd
                            </Link>

                            {/* Dropdown Menu */}
                            {isVisible && (
                                <div className="absolute right-0 mt-2 w-48 border border-main shadow-2xl rounded-xl px-2 py-4 bg-backgroundColor z-20">
                                    <Link href="/profile" className="block shadow-2xl  border rounded-2xl text-center py-1 px-4 border-main">
                                        My profile
                                    </Link>
                                    <Link href="#" className="block shadow-2xl  border rounded-2xl text-center py-1 px-4 border-main mt-2">
                                        Discount Wallet
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>


            {/* blog */}
            <div className="flex flex-col justify-center items-center gap-14 top-10 relative">
                <div className="text-center">
                    <h1 className="text-3xl">Our Lastest News and Blog</h1>
                    {/* <p>Insecurity has chased our rural farmers away from their farms, plunging the Insecurity has chased our rural farmers</p> */}
                </div>
                {/*box*/}
                <div className="flex flex-row flex-wrap gap-10 shadow-2xl-">
                    <div className=" border border-main flex flex-col gap-4 rounded-2xl drop-shadow-2xl">
                        <Image className="rounded-2xl" src="/plant.png" width={360} height={300} alt="" />
                        <div className=" flex flex-col gap-4 px-4">
                            <h3 className="text-main font-bold">13TH October 2024</h3>

                            <h2 className='font-semibold'>Embracing Digitalized Farming: Shaping <br /> the Future of Agriculture</h2>
                            <p className='w-80'>The agricultural industry is undergoing a profound transformation, driven by the digital revolution. Digitalized farming, which integrates advanced technologies like the Internet of Things (IoT), big data, artificial intelligence (AI), and blockchain</p>

                            <Link className="text-main font-bold" href="/signup">Read More</Link>
                        </div>
                    </div>

                    {/*  */}
                    <div className=" border border-main flex flex-col gap-4 rounded-2xl drop-shadow-2xl">
                        <Image className="rounded-2xl" src="/side-view-tomatoes.jpg" width={360} height={300} alt="" />
                        <div className=" flex flex-col gap-4 px-4">
                            <h3 className="text-main font-bold">10TH October 2024</h3>

                            <h2 className="font-semibold">The Importance and Benefits of Tomatoes: <br /> A Nutrient-Packed Superfood</h2>
                            <p className="w-80">Tomatoes, scientifically known as Solanum lycopersicum, are one of the most popular and widely cultivated fruits globally. Whether consumed raw, cooked, or as part of sauces, soups, and juices, tomatoes are a staple in kitchens around the world.</p>

                            <Link className="text-main font-bold" href="/signup">Read More</Link>
                        </div>
                    </div>
                    {/*  */}


                    {/*  */}
                    <div className=" border border-main flex flex-col gap-4 rounded-2xl drop-shadow-2xl">
                    <Image className="rounded-2xl" src="/Scent Leaf.jpg" width={360} height={300} alt="" />                        <div className=" flex flex-col gap-4 px-4">
                            <h3 className="text-main font-bold">13TH October 2024</h3>

                           
              <h2 className=" font-semibold">The Importance and Benefits of Scent Leaf: <br /> Nature’s Healing Herb</h2>
              <p className='w-80'>Scent leaf, scientifically known as Ocimum gratissimum, is a versatile herb that has been used for centuries in various cultures for its culinary, medicinal, and aromatic qualities. Commonly found in tropical and subtropical regions, especially in West Africa</p>
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
                        <Image className="rounded-2xl" src="/plant.png" width={360} height={300} alt="" />
                        <div className=" flex flex-col gap-4 px-4">
                            <h3 className="text-main font-bold">13TH October 2024</h3>

                            <h2>Insecurity has chased our rural farmers</h2>
                            <p className="w-80">Insecurity has chased our rural farmers away from their farms, plunging the Insecurity has chased our rural farmers</p>

                            <Link className="text-main font-bold" href="/signup">Read More</Link>
                        </div>
                    </div>

                    {/*  */}
                    <div className=" border border-main flex flex-col gap-4 rounded-2xl drop-shadow-2xl">
                        <Image className="rounded-2xl" src="/plant.png" width={360} height={300} alt="" />
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
                        <Image className="rounded-2xl" src="/plant.png" width={360} height={300} alt="" />
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
                <Image className="rounded-2xl" src="/logo.png" width={160} height={100} alt="" />
                <div>
                    <p>hello@gmail.com</p>
                </div>
                <p>the framers</p>
            </div>

            {/* footer */}
        </main>
    );
}
export default ToggleButton;