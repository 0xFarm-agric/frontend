import Image from "next/image";
import Link from 'next/link'
import { FaRegUser } from "react-icons/fa";


export default function rightSide() {
    return (
        <main className="py-8">
            <h1 className=" text-2xl font-semibold">Your Campaigns</h1>

            <div className="grid grid-cols-3 items-center gap-8">

                <div className="" >
                    {/* box1 */}
                    <div className="flex items-center gap-2 top-11 relative">
                        <a className="bg-main text-white px-1 py-1 rounded text-sm" href="">24 days left</a>
                        <a className="bg-main text-white px-2 py-1 rounded text-sm flex items-center gap-2" href=""><FaRegUser />2k</a>
                    </div>
                    {/* boxcontent */}
                    <div className="flex flex-col items-center gap-2- py-4">
                        <img className="rounded-lg- rounded-t-3xl" src="/protectingpPlant.jpg" width={240} height={160} alt="" />
                        {/* box content end */}
                        <div className="border border-main flex flex-col gap-5">
                            {/* content */}
                            <div className="flex flex-col gap-4 items-center">
                                <h2 className="w-52 font-bold">Lorem ipsum dolor sit amet consectetur. </h2>
                                {/* progress */}

                                <div className=" bg-slate-300 w-52 h-2  rounded-3xl ">
                                    <p className="bg-main w-40 h-2 rounded-3xl"></p>
                                </div>
                                {/* progress */}

                                <button className=" border-2 border-main hover:bg-main hover:text-white w-52 text-lg font-bold text-main rounded-lg">Invest</button>

                            </div>

                            {/* content end */}
                            <div className="flex flex-row items-center">
                                <div className="border w-20 text-center bg-white">
                                    <p>Raised</p>
                                    <h1 className="font-semibold">$200</h1>
                                </div>

                                <div className="border w-20  text-center bg-white">
                                    <p>Goal</p>
                                    <h1 className="font-semibold">$500</h1>
                                </div>

                                <div className="border  w-20  text-center bg-white">
                                    <p>Left</p>
                                    <h1 className="font-semibold">$300</h1>
                                </div>

                                <p></p>

                            </div>

                        </div>
                    </div>


                    {/* box1end */}

                </div >


                {/* box2  */}
                <div className="" >
                    {/* box1 */}
                    <div className="flex items-center gap-2 top-11 relative">
                        <a className="bg-main text-white px-1 py-1 rounded text-sm" href="">24 days left</a>
                        <a className="bg-main text-white px-2 py-1 rounded text-sm flex items-center gap-2" href=""><FaRegUser />2k</a>
                    </div>
                    {/* boxcontent */}
                    <div className="flex flex-col items-center gap-2- py-4">
                        <img className="rounded-lg- rounded-t-3xl" src="/protectingpPlant.jpg" width={240} height={160} alt="" />
                        {/* box content end */}
                        <div className="border border-main flex flex-col gap-5">
                            {/* content */}
                            <div className="flex flex-col gap-4 items-center">
                                <h2 className="w-52 font-bold">Lorem ipsum dolor sit amet consectetur. </h2>
                                {/* progress */}

                                <div className=" bg-slate-300 w-52 h-2  rounded-3xl ">
                                    <p className="bg-main w-40 h-2 rounded-3xl"></p>
                                </div>
                                {/* progress */}

                                <button className=" border-2 border-main hover:bg-main hover:text-white w-52 text-lg font-bold text-main rounded-lg">Invest</button>

                            </div>

                            {/* content end */}
                            <div className="flex flex-row items-center">
                                <div className="border w-20 text-center bg-white">
                                    <p>Raised</p>
                                    <h1 className="font-semibold">$200</h1>
                                </div>

                                <div className="border w-20  text-center bg-white">
                                    <p>Goal</p>
                                    <h1 className="font-semibold">$500</h1>
                                </div>

                                <div className="border  w-20  text-center bg-white">
                                    <p>Left</p>
                                    <h1 className="font-semibold">$300</h1>
                                </div>

                                <p></p>

                            </div>

                        </div>
                    </div>


                    {/* box1end */}

                </div >
                {/* box2 end */}
                <div className="" >
                    {/* box1 */}
                    <div className="flex items-center gap-2 top-11 relative">
                        <a className="bg-main text-white px-1 py-1 rounded text-sm" href="">24 days left</a>
                        <a className="bg-main text-white px-2 py-1 rounded text-sm flex items-center gap-2" href=""><FaRegUser />2k</a>
                    </div>
                    {/* boxcontent */}
                    <div className="flex flex-col items-center gap-2- py-4">
                        <img className="rounded-lg- rounded-t-3xl" src="/protectingpPlant.jpg" width={240} height={160} alt="" />
                        {/* box content end */}
                        <div className="border border-main flex flex-col gap-5">
                            {/* content */}
                            <div className="flex flex-col gap-4 items-center">
                                <h2 className="w-52 font-bold">Lorem ipsum dolor sit amet consectetur. </h2>
                                {/* progress */}

                                <div className=" bg-slate-300 w-52 h-2  rounded-3xl ">
                                    <p className="bg-main w-40 h-2 rounded-3xl"></p>
                                </div>
                                {/* progress */}

                                <button className=" border-2 border-main hover:bg-main hover:text-white w-52 text-lg font-bold text-main rounded-lg">Invest</button>

                            </div>

                            {/* content end */}
                            <div className="flex flex-row items-center">
                                <div className="border w-20 text-center bg-white">
                                    <p>Raised</p>
                                    <h1 className="font-semibold">$200</h1>
                                </div>

                                <div className="border w-20  text-center bg-white">
                                    <p>Goal</p>
                                    <h1 className="font-semibold">$500</h1>
                                </div>

                                <div className="border  w-20  text-center bg-white">
                                    <p>Left</p>
                                    <h1 className="font-semibold">$300</h1>
                                </div>

                                <p></p>

                            </div>

                        </div>
                    </div>


                    {/* box1end */}

                </div >


            </div>

            {/* row 2 */}
            <div className="grid grid-cols-3 items-center gap-8">

                <div className="" >
                    {/* box1 */}
                    <div className="flex items-center gap-2 top-11 relative">
                        <a className="bg-main text-white px-1 py-1 rounded text-sm" href="">24 days left</a>
                        <a className="bg-main text-white px-2 py-1 rounded text-sm flex items-center gap-2" href=""><FaRegUser />2k</a>
                    </div>
                    {/* boxcontent */}
                    <div className="flex flex-col items-center gap-2- py-4">
                        <img className="rounded-lg- rounded-t-3xl" src="/protectingpPlant.jpg" width={240} height={160} alt="" />
                        {/* box content end */}
                        <div className="border border-main flex flex-col gap-5">
                            {/* content */}
                            <div className="flex flex-col gap-4 items-center">
                                <h2 className="w-52 font-bold">Lorem ipsum dolor sit amet consectetur. </h2>
                                {/* progress */}

                                <div className=" bg-slate-300 w-52 h-2  rounded-3xl ">
                                    <p className="bg-main w-40 h-2 rounded-3xl"></p>
                                </div>
                                {/* progress */}

                                <button className=" border-2 border-main hover:bg-main hover:text-white w-52 text-lg font-bold text-main rounded-lg">Invest</button>

                            </div>

                            {/* content end */}
                            <div className="flex flex-row items-center">
                                <div className="border w-20 text-center bg-white">
                                    <p>Raised</p>
                                    <h1 className="font-semibold">$200</h1>
                                </div>

                                <div className="border w-20  text-center bg-white">
                                    <p>Goal</p>
                                    <h1 className="font-semibold">$500</h1>
                                </div>

                                <div className="border  w-20  text-center bg-white">
                                    <p>Left</p>
                                    <h1 className="font-semibold">$300</h1>
                                </div>

                                <p></p>

                            </div>

                        </div>
                    </div>


                    {/* box1end */}

                </div >


                {/* box2  */}
                <div className="" >
                    {/* box1 */}
                    <div className="flex items-center gap-2 top-11 relative">
                        <a className="bg-main text-white px-1 py-1 rounded text-sm" href="">24 days left</a>
                        <a className="bg-main text-white px-2 py-1 rounded text-sm flex items-center gap-2" href=""><FaRegUser />2k</a>
                    </div>
                    {/* boxcontent */}
                    <div className="flex flex-col items-center gap-2- py-4">
                        <img className="rounded-lg- rounded-t-3xl" src="/protectingpPlant.jpg" width={240} height={160} alt="" />
                        {/* box content end */}
                        <div className="border border-main flex flex-col gap-5">
                            {/* content */}
                            <div className="flex flex-col gap-4 items-center">
                                <h2 className="w-52 font-bold">Lorem ipsum dolor sit amet consectetur. </h2>
                                {/* progress */}

                                <div className=" bg-slate-300 w-52 h-2  rounded-3xl ">
                                    <p className="bg-main w-40 h-2 rounded-3xl"></p>
                                </div>
                                {/* progress */}

                                <button className=" border-2 border-main hover:bg-main hover:text-white w-52 text-lg font-bold text-main rounded-lg">Invest</button>

                            </div>

                            {/* content end */}
                            <div className="flex flex-row items-center">
                                <div className="border w-20 text-center bg-white">
                                    <p>Raised</p>
                                    <h1 className="font-semibold">$200</h1>
                                </div>

                                <div className="border w-20  text-center bg-white">
                                    <p>Goal</p>
                                    <h1 className="font-semibold">$500</h1>
                                </div>

                                <div className="border  w-20  text-center bg-white">
                                    <p>Left</p>
                                    <h1 className="font-semibold">$300</h1>
                                </div>

                                <p></p>

                            </div>

                        </div>
                    </div>


                    {/* box1end */}

                </div >
                {/* box2 end */}
                <div className="" >
                    {/* box1 */}
                    <div className="flex items-center gap-2 top-11 relative">
                        <a className="bg-main text-white px-1 py-1 rounded text-sm" href="">24 days left</a>
                        <a className="bg-main text-white px-2 py-1 rounded text-sm flex items-center gap-2" href=""><FaRegUser />2k</a>
                    </div>
                    {/* boxcontent */}
                    <div className="flex flex-col items-center gap-2- py-4">
                        <img className="rounded-lg- rounded-t-3xl" src="/protectingpPlant.jpg" width={240} height={160} alt="" />
                        {/* box content end */}
                        <div className="border border-main flex flex-col gap-5">
                            {/* content */}
                            <div className="flex flex-col gap-4 items-center">
                                <h2 className="w-52 font-bold">Lorem ipsum dolor sit amet consectetur. </h2>
                                {/* progress */}

                                <div className=" bg-slate-300 w-52 h-2  rounded-3xl ">
                                    <p className="bg-main w-40 h-2 rounded-3xl"></p>
                                </div>
                                {/* progress */}

                                <button className=" border-2 border-main hover:bg-main hover:text-white w-52 text-lg font-bold text-main rounded-lg">Invest</button>

                            </div>

                            {/* content end */}
                            <div className="flex flex-row items-center">
                                <div className="border w-20 text-center bg-white">
                                    <p>Raised</p>
                                    <h1 className="font-semibold">$200</h1>
                                </div>

                                <div className="border w-20  text-center bg-white">
                                    <p>Goal</p>
                                    <h1 className="font-semibold">$500</h1>
                                </div>

                                <div className="border  w-20  text-center bg-white">
                                    <p>Left</p>
                                    <h1 className="font-semibold">$300</h1>
                                </div>

                                <p></p>

                            </div>

                        </div>
                    </div>


                    {/* box1end */}

                </div >


            </div>

            {/* row 2 end */}
        </main>
    );
}