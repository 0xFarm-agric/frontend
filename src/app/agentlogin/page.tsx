
import Link from 'next/link'
import Image from 'next/image'







export default function Agent() {
    return (
        <main className=' '>
            <div>
                <Image src="/logo.png" width={160} height={100} alt="oxFramer" />
            </div>
            <div className='flex flex-col bg-white shadow-x-l justify-center items-center gap-6 w-8/12- rounded-xl'>
                <div>

                    <div className='flex flex-col gap-2 text-center  '>
                        <h1 className='text-4xl'>Welcome Back</h1>
                        <p className=' font-meduim flex flex-col gap-1-'> Glad to see you again 👋<p className=''> login to your account below</p></p>

                    </div>
                </div>

                <div className='flex items-center justify-center gap-2 border px-2 py-2 rounded  w-96 shadow '>
                    <div>
                    <Image src="/Google.png" width={24} height={24} alt="Picture of the author" />

                    </div>
                    <p className='flex'> Continue with Google</p>
                </div>




                {/* input four*/}
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Email</label>
                        <input className='border px-2 py-2 rounded  w-96 shadow' type="text" placeholder='enter...' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor=""> Password</label>
                        <input className='border px-2 py-2 rounded w-96 shadow' type="text" placeholder='Password...' />
                    </div>
                </div>
                {/* input end four */}

                {/* input four*/}
                <div className='flex gap-6'>


                    <div className='flex flex-col w-96 text-center'>
                        <Link className='bg-main py-2 rounded text-white shadow' href="/dashboard">Login</Link>
                    </div>
                </div>
                {/* input end four */}

                <h1 className='text-gray-600'> Don't have an Account?  <Link className='text-main' href="/agentsignup">Sign Up For Free</Link> </h1>


            </div>

        </main>
    )
}