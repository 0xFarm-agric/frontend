
import Link from 'next/link'
import Image from 'next/image'
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";





export default function Login() {
  return (

    <main className='bg-backgroundColor'>
      <div className='flex flex-col md:flex-row justify-between items-center px-20 py-4'>
        <div>
          <Image src="/logo.png" width={160} height={100} alt="oxFramer" />
        </div>
        <div className='flex items-center gap-6'>
          <Link className="border border-main text-white hover:text-backgroundColor bg-main text-center px-4 py-1  rounded-full text-sm  md:text-xl" href="/login">Log in</Link>
          <Link className="border border-main hover:bg-main hover:text-backgroundColor text-center px-4 py-1  rounded-full text-sm  md:text-xl py-9-" href="/signup">Sign Up</Link>

        </div>
      </div>

      {/* hero */}
      <div className='flex flex-col md:flex-row  justify-evenly items-center py-10 '>
        <div>
          <Image src="/Frame-circle.png" width={420} height={100} alt="oxFramer" />

        </div>

        <div className='flex flex-col justify-center items-center text-center gap-6'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-xl md:text-4xl font-semibold'>Welcome to 0xFarms</h1>
            <p> Revolutionizing Agriculture with Vertical and <br /> Decentralized Farming through Real World Assets</p>
          </div>



          <div className='flex flex-col gap-4'>


            <div className="relative flex items-center">
              <MdOutlineMail className="absolute left-3 text-gray-500" />
              <input
                type="text"
                className="pl-10 py-2 flex gap-4 w-72 md:w-80 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder='Email or phone'
              />
            </div>

            {/*  */}

            <div className="relative flex items-center">
              <RiLockPasswordLine className="absolute left-3 text-gray-500" />
              <input
                type="text"
                className="pl-10 py-2 flex gap-4 w-72 md:w-80 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder='Password' />
            </div>


            {/*  */}


            <Link className="bg-main text-center text-white px-4- py-2 text-sm- rounded-full" href="signup">Login</Link>

            <p>or</p>
            <section className="flex justify-center gap-4">
              <Image src="/Twitter.png" alt={"img"} width={"26"} height={"26"} />
              <Image src="/Linkedin.png" alt={"img"} width={"26"} height={"26"} />
              <Image src="/Google.png" alt={"img"} width={"26"} height={"26"} />

            </section>
            <p>Create Account <Link className=' text-blue-400' href='/signup'>sign up</Link>?</p>

          </div>
        </div>


      </div>
      {/* hero end */}

    </main>

  );
}

