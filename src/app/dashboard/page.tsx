

"use client"; // This tells Next.js this is a Client Component
import Image from "next/image";
import { useState } from 'react';
import Link from 'next/link';
import Leftside from '../dashboard/leftside';
import Rightside from '../dashboard/rightside';

const ToggleButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <nav className="bg-white">
                <div className="flex justify-around items-center px-0 sm:px-0 py-2">
                    <div className="text-white- text-lg font-bold">
                        <Link href="#">
                            <img className="rounded-2xl" src="/logo.png" width={160} height={100} alt="" />
                        </Link>
                    </div>

                    <div>
                        <input className="border border-main w-96 h-10 px-4 rounded-3xl" type="text" placeholder="search " />
                        <button className="bg-main text-white px-5 h-10 rounded">New Campaign</button>
                    </div>
                    {/* addbtn */}
                   

                    {/*  */}

                    {/* Menu Links */}
                    <div className="flex gap-4">
                        <div>
                            <Link href="#" className="flex justify-around items-center text-white- border rounded-2xl w-20 sm:w-28 py-1 border-main">
                                {/* <Image src="/base.png" alt="base" height={20} width={20} /> */}
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
            {/* end of nav */}
            <div className="flex gap-20">
                <Leftside/>
                <Rightside/>
              
            </div>


        </div>




    );
};

export default ToggleButton;
