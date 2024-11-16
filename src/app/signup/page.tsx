
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineSearch } from "react-icons/ai";



export default function Login() {
  return (

    <main>
      <div className='flex flex-col md:flex-row justify-between items-center px-20 py-4'>
        <div>

          <Image src="/logo.png" width={160} height={100} alt="oxFramer" />
        </div>
        <div className='flex items-center gap-6'>
          <Link className=" border border-main text-center px-4 py-1 rounded-full text-sm  md:text-xl py-9-" href="#signup">Log in</Link>
          <Link className="border border-main hover:bg-main text-center px-4 py-1  rounded-full text-sm  md:text-xl py-9-" href="#signup">Sign Up</Link>

        </div>
      </div>

      {/* hero */}
      <div className='flex flex-col md:flex-row  justify-evenly items-center py-10 '>
        <div>
          <Image src="/Frame-circle.png" width={400} height={100} alt="oxFramer" />

        </div>

        <div className='flex flex-col justify-center items-center text-center gap-6'>
          <div className='flex flex-col gap-6'>
            <h1 className='text-xl md:text-3xl'>Welcome to OxFrams</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Dolor architecto odio possimus sapiente ex nulla?</p>
          </div>



          <div className='flex flex-col gap-4'>
            <div className="relative flex items-center">
              <AiOutlineSearch className="absolute left-3 text-gray-500" />
              <input
                type="text"
                className="pl-10 py-2 flex gap-4 w-72 md:w-80 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder='what type of restuarant your are?'
              />
            </div>

            {/*  */}
            <div className="relative flex items-center">
              <AiOutlineSearch className="absolute left-3 text-gray-500" />
              <input
                type="text"
                className="pl-10 py-2 flex gap-4 w-72 md:w-80 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder='store name'
              />
            </div>

            {/*  */}

            <div className="relative flex items-center">
              <AiOutlineSearch className="absolute left-3 text-gray-500" />
              <input
                type="text"
                className="pl-10 py-2 flex gap-4 w-72 md:w-80 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder='Email'
              />
            </div>

            {/*  */}

            <div className="relative flex items-center">
              <AiOutlineSearch className="absolute left-3 text-gray-500" />
              <input
                type="text"
                className="pl-10 py-2 flex gap-4 w-72 md:w-80 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder='Phone' />
            </div>


            {/*  */}

           
            <Link className="bg-main text-center text-white px-4- py-2 text-sm- rounded-full" href="#signup">Create Account</Link>

            <Link href='/login'>Already Registered, <a className=' text-blue-400' href="#">sign in</a>?</Link>


          </div>
        </div>
        

      </div>
      {/* hero end */}

    </main>

  );
=======
            <nav className="flex justify-around bg-white items-center py-2">
                <div>
                    <Link href="#">
                        <Image src="/logo.png" width={160} height={100} alt="" />
                    </Link>
                </div>

                <div>
                    <ul className="flex gap-6">
                        <li  className="hover:text-main text-[#778599] text-white"><a href="">Home</a></li>
                        <li  className="hover:text-main"><a href="" id=''>Service</a></li>
                        <li  className="hover:text-main"><a href="">About</a></li>
                        <li className="hover:text-main"><a href="">Blog</a></li>
                        <li  className="hover:text-main"><a href="">Contact us</a></li>
                    </ul>
                </div>

                <div className="flex gap-6 text-white-">
                   
                    <Link className="bg-main px-8 py-1 text-white hover:border hover:bg-white hover:text-main hover:border-main rounded" href="/login">Login</Link>
                    <Link className="border border-main hover:bg-main hover:text-white text-black  px-8 py-1 rounded" href="/signup">Sign up</Link>
                </div>

            </nav >

            {/* <section></section> */}

            < div className="signupHero " >
                {/*  */}
                < div className=" flex flex-col justify-center items-center top-12 relative" >
                    <div className="bg-white rounded-xl px-6 py-6 w-96 flex flex-col gap-6">
                        <div>
                            <h1 className="text-3xl text-center">Welcome</h1>
                            <p>Continue With Your <a className="text-blue-500" href="">Google</a> or <a className="text-blue-500" href="">Connect wallet</a></p>
                        </div>
                        <form className="flex flex-col justify-center gap-5" action="">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="">Full Name</label>
                                <input className="border border-main rounded-3xl px-4 py-1" placeholder="Full Name" type="text" />
                            </div>

                            {/*  */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="">Email Address Or Username</label>
                                <input className="border border-main rounded-3xl px-4 py-1" placeholder="Full Name or Username" type="text" />

                            </div>
                            {/*  */}
                            <div className="flex flex-col gap-2">

                                <label htmlFor="">Phone Number</label>
                                <input className="border border-main rounded-3xl px-4 py-1" placeholder="+234 00000000000" type="text" />

                            </div>
                            {/*  */}
                            {/*  */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="">Password</label>
                                <input className="border border-main rounded-3xl px-4 py-1" placeholder="Password" type="text" />

                            </div>
                            {/*  */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="">Confirm Password</label>
                                <input className="border border-main rounded-3xl px-4 py-1" placeholder="Password" type="text" />
                            </div>

                            {/*  */}
                            {/* <button className="text-white  px-8 py-1 bg-main rounded">Login  </button> */}
                        </form>
                        <Link className="text-white py-2 bg-main rounded-3xl" href="">Register</Link>


                    </div>
                </div >
                {/*  */}

            </div >


        </div >
    );

}
