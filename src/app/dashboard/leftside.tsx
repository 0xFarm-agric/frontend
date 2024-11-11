import Image from "next/image";
import Link from 'next/link'
import { AiOutlineHome } from "react-icons/ai";
import { IoToggleSharp } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { TbHistory } from "react-icons/tb";
import { FaBloggerB } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";


export default function Leftside() {
    return (
        <main className="flex flex-col gap-28 py-8- bg-main">
            

            <div className=" flex flex-col gap-40- gap-96 py-8">
                <div className="flex flex-col justify-center- items-center gap-4">
                    <div className="flex gap-6 items-center bg-backgroundColor bg-gray-200- rounded-3xl px-2 w-60 h-12- py-2   ">
                        <p className=" bg-light flex items-center justify-center  w-8 h-8 rounded-full text-lg"><AiOutlineHome /></p>
                        <p className=" text-lg font-light">Vertical Farm</p>
                    </div>

                    <div className="flex gap-6 items-center hover:bg-backgroundColor bg-gray-200- rounded-3xl px-2 w-60 h-12- py-2  ">
                        <p className=" bg-light flex items-center justify-center t w-8 h-8 rounded-full text-lg"><FaBloggerB /></p>
                        <Link className="text-lg font-light" href="/blog">Blog</Link>
                    </div>

                    <div className="flex gap-6 items-center hover:bg-backgroundColor bg-gray-200- rounded-3xl px-2 w-60 h-12- py-2  ">
                        <p className=" bg-light flex items-center justify-center  w-8 h-8 rounded-full text-lg"><MdOutlineSupportAgent /> </p>
                        <p className=" text-lg font-light">Agent</p>
                    </div>

                    <div className="flex gap-6 items-center hover:bg-backgroundColor bg-gray-200- rounded-3xl px-2 w-60 h-12- py-2  ">
                        <p className=" bg-light flex items-center justify-center  w-8 h-8 rounded-full text-lg"><TbHistory /></p>
                        <p className=" text-lg font-light"> History</p>
                    </div>


                </div>
                <div className="flex gap-6 items-center px-10 w-80 py-2  ">
                    <p className="text-3xl text-light"> <LuLogOut /> </p>
                    <p className="  font-light">Log out </p>
                </div>
              

            </div>


        </main >
    );
}