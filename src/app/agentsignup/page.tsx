
import Link from 'next/link'
import Image from 'next/image'
import Date from '../components/date'







export default function Agent() {
    return (
        <main className=' '>
            <div>
                <Image src="/logo.png" width={160} height={100} alt="oxFramer" />
            </div>
            <div className='flex flex-col bg-white shadow-x-l justify-center items-center gap-6 w-8/12- rounded-xl'>
                <div>

                    <div className='flex flex-col gap-2 text-center  '>
                        <h1 className='text-4xl'>Sign Up</h1>
                        <p className=' font-meduim flex gap-1 text-gray-600'>Enter your detail to create an account and become an <p className='text-main'>Agent</p></p>

                    </div>
                </div>

                {/* input */}
                <div className='flex gap-6'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Full name</label>
                        <input className='border px-2 py-2 rounded  w-72 shadow' type="text" placeholder='enter..' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Email</label>
                        <input className='border px-2 py-2 rounded w-72 shadow' type="text" placeholder='example@gmail.com...' />
                    </div>
                </div>
                {/* input end */}



                {/* input two*/}
                <div className='flex gap-6'>
                    <div className='flex flex-col'>
                        <Date />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Phone No</label>
                        <input className='border px-2 py-2 rounded w-72 shadow' type="text" placeholder='+234 000000...' />
                    </div>
                </div>
                {/* input end two */}




                {/* input three*/}
                <div className='flex gap-6'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Nationality</label>
                        <input className='border px-2 py-2 rounded  w-72 shadow' type="text" placeholder='enter..' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">ID Type</label>
                        <input className='border px-2 py-2 rounded w-72 shadow' type="text" placeholder='example@gmail.com...' />
                    </div>
                </div>
                {/* input end three */}



                {/* input four*/}
                <div className='flex gap-6'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Password</label>
                        <input className='border px-2 py-2 rounded  w-72 shadow' type="text" placeholder='enter...' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Confirm Password</label>
                        <input className='border px-2 py-2 rounded w-72 shadow' type="text" placeholder='enter...' />
                    </div>
                </div>
                {/* input end four */}

                {/* input four*/}
                <div className='flex gap-6'>
                    <div className='flex flex-col w-72 h-20- text-center'>
                        <Link className='border py-2 rounded' href="/dashboard">Cancel</Link>
                    </div>

                    <div className='flex flex-col w-72 text-center'>
                        <Link className='bg-main py-2 text-white rounded' href="/dashboard">Confirm</Link>
                    </div>
                </div>
                {/* input end four */}

                <h1 className='text-gray-600' >Already have an account?  <Link className='text-main' href="/agentlogin">Login</Link> </h1>


            </div>

        </main>
    )
}