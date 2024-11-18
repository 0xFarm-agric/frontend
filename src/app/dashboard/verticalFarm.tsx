"use client";
import React from "react";
import { FaFlag } from "react-icons/fa";
import { GoArrowUp } from "react-icons/go";
import { LuArrowBigUp } from "react-icons/lu";
import { CiCircleMinus } from "react-icons/ci";
import { RiDraftFill } from "react-icons/ri";
import { IoGrid } from "react-icons/io5";
import { CiGrid2H } from "react-icons/ci";
import { FaCalendarDay } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import BoxOne from "../components/dashboxCol"
import BoxTwo from "../components/dashboxColtwo"


export default function VerticalFarms() {
    return (
        <main className="px-8-">
            <h1>Your Campaign <a className="bg-black h-16 w-16 rounded-full text-white px-3 py-2" href="">5</a> </h1>

            {/* section */}
            <div className="flex justify-between py-6">
                <div className="flex gap-2 border drop-shadow-xl rounded-lg bg-white px-2 py-2">
                    <div className="flex gap-2 items-center">
                        <div className="flex items-center gap-2">
                            <p className=" text-main">< FaFlag /></p>
                            <p className="border-">All campaigns  </p>
                        </div>
                        <p className="border h-4  border-gray-400"></p>

                    </div>
                    <div className="flex gap-2 items-center">
                        <p className="flex gap-2 items-center"><GoArrowUp />Goals Reached </p>
                        <p className="border h-4  border-gray-400"></p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <p className="flex gap-2 items-center"><LuArrowBigUp /> Goals unreached</p>
                        <p className="border h-4  border-gray-400"></p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <p className="flex gap-2 items-center"><CiCircleMinus /> Closed</p>
                        <p className="border h-4  border-gray-400"></p>
                    </div>
                    <div >
                        <p className="flex gap-2 items-center"><RiDraftFill />Draft</p>
                    </div>
                </div>


                <div className="flex gap-4">
                    <div className="flex gap-2 border drop-shadow-xl rounded-lg bg-white px-2 py-2">
                        <div className="flex gap-2 items-center">
                            <div className="flex items-center gap-2">
                                <h3 className=" text-main"><IoGrid /> </h3>
                                <h3>  Grid</h3>
                            </div>
                            <p className="border h-4  border-gray-400"></p>
                        </div>
                        <h3 className="flex gap-2 items-center"><CiGrid2H /> List</h3>
                    </div>
                    <div className="flex gap-2 border drop-shadow-xl rounded-lg bg-white px-2 py-2">
                        <p className="flex gap-2 items-center"><FaCalendarDay className=" text-main" />  Data Posted <IoIosArrowDown /></p>
                    </div>
                </div>
                {/* section end */}
            </div>

            {/* col box */}

            <div className="flex flex-col justify-center items-center">
                <div>
                    <BoxOne />
                </div>
                <div>
                    <BoxTwo />
                </div>

            </div>
            {/* col box end*/}


        </main>
    );
};