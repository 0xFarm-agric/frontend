import Link from 'next/link'
import Image from 'next/image'


export default function Login() {
  return (
    <div>
      <nav className="flex justify-around bg-white items-center py-2">
        <div>
          <Link href="#">
            <Image src="/logo.png" width={160} height={100} alt="" />
          </Link>
        </div>

        <div>
          <ul className="flex gap-6">
            <li className="hover:text-main"><a href="">Home</a></li>
            <li className="hover:text-main"><a href="" id=''>Service</a></li>
            <li className="hover:text-main"><a href="">About</a></li>
            <li className="hover:text-main"><a href="">Blog</a></li>
            <li className="hover:text-main"><a href="">Contact us</a></li>
          </ul>
        </div>

        <div className="flex gap-6 text-white-">
          <div className="flex gap-6 text-white-">
          <Link className="bg-main px-8 py-1 text-white hover:border hover:bg-white hover:text-main hover:border-main rounded" href="/login">Login</Link>
          <Link className="border border-main hover:bg-main hover:text-white text-black  px-8 py-1 rounded" href="/signup">Sign up</Link>
          </div>

        </div>


      </nav>

      {/* <section></section> */}

      <div className="heroImg ">
        {/*  */}
        <div className=" flex flex-col justify-center items-center top-16 relative">
          <div className="bg-white rounded-xl px-6 py-6 w-96 flex flex-col gap-6">
            <div>
              <h1 className="text-3xl text-center">Welcome</h1>
              <p>Continue With Your <a className="text-blue-500" href="">Google</a> or <a className="text-blue-500" href="">Connect wallet</a></p>
            </div>
            <form className="flex flex-col justify-center gap-4" action="">
              <label htmlFor="">Email Address Or Username</label>
              <input className="border border-main rounded-3xl px-4 py-1" placeholder="Full Name or Username" type="text" />
              {/*  */}
              <label htmlFor="">Password</label>
              <input className="border border-main rounded-3xl px-4 py-1" placeholder="Password" type="text" />
              {/*  */}

            </form>
            <Link className="text-white text-center  px-4- py-2 bg-main rounded-3xl" href="">Login</Link>

          </div>
        </div>
        {/*  */}

      </div>


    </div>
  );
}
