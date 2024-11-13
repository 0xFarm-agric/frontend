import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <div>
      <nav className="flex justify-around bg-white text-white- items-center py-2">
        <div>
          <Image className="rounded-2xl" src="/logo.png" width={160} height={100} alt="" />
        </div>

        <div>
          <ul className="flex gap-6">
            <Link className="hover:text-main" href="">Home</Link>
            <li className="hover:text-main" id="blog">Service</li>
            {/* <Link className="hover:text-main" href="#" id='works'>How It Works</Link> */}
            {/* <Link ></Link> */}
            <Link className="hover:text-main" href="#blog" >blog</Link>
            <Link className="hover:text-main" href="#" id="contact">Contact us</Link>
          </ul>
        </div>

        <div className="flex gap-6 text-white-">
          <Link className="bg-main  px-8 py-1 text-white rounded" href="/login">Login</Link>
          <Link className="border border-main text-black  px-8 py-1 rounded" href="/signup">Sign up</Link>
        </div>


      </nav>

      {/* <section></section> */}
      {/* herosection */}
      <div className="homeImg">

        <div className="flex justify-around py-14" >
          <div className="text-white px-24-">
            <div className="flex flex-col gap-6 w-11/12 ">
              <h1 className="text-6xl w-4/6">Awaking the Oldest Profession</h1>
              <p className="w-4/6">Revolutionizing Agriculture with Vertical and Decentralized Farming through Real World Assets</p>
              <div className="flex gap-6">
                <Link className="bg-main hover:text-backgroundColor text-xl px-4 py-2 text-white rounded" href="/signup">Become a Seller</Link>
                <Link className="bg-main px-4 py-2 text-white text-xl hover:text-backgroundColor rounded" href="/signup">Become a Investor</Link>

              </div>
            </div>
          </div>

          <div></div>
        </div>

      </div>




      {/* /hero end */}
      {/* service */}
      <div className="flex flex-col gap-8 top-16 relative flex-wrap">
        <div className="text-center">
          <Link href="" id="#work" className="text-3xl font-semibold">How It Works</Link>
        </div>

        <div className="flex flex-row gap-6 justify-center flex-wrap-">
          <div className="flex flex-col p-4  gap-4 border-2 border-main rounded-xl h-64 w-64">
            <h3 className="font-semibold text-lg">Vertical farming</h3>
            <p className="text-sm">This grows crops indoors in stacked layers. With blockchain, every stage (from planting to harvest) can be securely tracked, giving consumers reliable info on food quality and sustainability. This approach supports urban areas with a safer, more transparent, and efficient food supply system.</p>
          </div>

          <div className="flex flex-col p-4  gap-4 border-2 border-main rounded-xl h-64 w-64">
            <h3 className="font-semibold text-lg">Homegrown farming</h3>
            <p className="text-sm">Homegrown farming is the practice of growing food, like vegetables and herbs, at home or in local spaces. It focuses on personal or community food production, promoting self-sufficiency, fresher produce, and reduced dependence on commercial food sources.</p>
          </div>

          <div className="flex flex-col p-4  gap-4 border-2 border-main rounded-xl h-64 w-64 ">
            <h3 className="font-semibold text-lg">Educational agricultural content with AI</h3>
            <p className="text-sm">Using artificial intelligence to provide customized information on farming practices, crop management, soil health, and sustainability. By tailoring content to specific learning needs, AI helps farmers, students, and agricultural professionals.</p>
          </div>

          <div className="flex flex-col p-4 items-center gap-4 border-2 border-main rounded-xl h-64 w-64">
            <h3 className="font-semibold text-lg">Farming Technicians</h3>
            <p className="text-sm">This are skilled professionals who assist in managing and improving agricultural operations. They handle tasks such as soil testing, equipment maintenance, pest control, and crop monitoring. Their work involves using technology to optimize farming processes.</p>
          </div>

        </div>

      </div>

      {/*  HOW IT WORKS end*/}



      {/* service */}
      <div className=" flex flex-col gap-10 top-32 relative">
        <Link className='text-center font-semibold text-2xl' href="#service" >Service</Link>
        {/* col1 end */}
        <div className="flex flex-row justify-center gap-8 flex-wrap">
          <div className="border border-main rounded-xl drop-shadow-2xl bg-white w-72 h-36 flex flex-col gap-6 justify-center text-center items-center ">
            <h3 className="font-semibold text-main">Supply Chain Tracking</h3>
            <p>Ensure transparency by tracking products from farm to consumer.</p>
          </div>

          <div className='border border-main rounded-xl drop-shadow-2xl bg-white w-72 h-36 flex flex-col gap-6 justify-center text-center items-center '>
            <h3 className="font-semibold text-main">Smart Contracts</h3>
            <p>Automate secure transactions between farmers, suppliers, and buyers.</p>
          </div>

          <div className="border border-main rounded-xl drop-shadow-2xl bg-white w-72 h-36 flex flex-col gap-6 justify-center text-center items-center ">
            <h3 className="font-semibold text-main">Token Rewards</h3>
            <p>Reward users and farmers with tokens for sustainable actions.</p>
          </div>

        </div>
        {/* col1 end */}
        {/* col 2 */}
        <div className='flex justify-center gap-8 flex-wrap'>

          <div className="border border-main rounded-xl drop-shadow-2xl bg-white w-72 h-36 flex flex-col gap-6 justify-center items-center text-center">
            <h3 className="font-semibold text-main">Direct Marketplaces</h3>
            <p>Enable farmers to sell their products directly to consumers, eliminating middlemen.</p>
          </div>

          <div className="border border-main rounded-xl drop-shadow-2xl bg-white w-72 h-36 flex flex-col gap-6 justify-center items-center  text-center ">
            <h3 className="font-semibold text-main">Data Sharing</h3>
            <p className="px-4">Let farmers share data like weather and crop performance securely for better insights.</p>
          </div>

          <div className="border border-main rounded-xl drop-shadow-2xl bg-white w-72 h-36 flex flex-col gap-6 justify-center items-center  text-center">
            <h3 className="font-semibold text-main">Crop Insurance</h3>
            <p>Offer automated insurance based on real-time data, ensuring fair claims.</p>
          </div>
        </div>
        {/* col 2 end */}

      </div>

      {/* about end */}


      {/* blog */}
      <div className="flex flex-col justify-center items-center gap-14 top-44 relative">
        <div className="text-center">
          <Link href="#blog"  className="text-3xl">Our Lastest News and Blog</Link>
        </div>
        {/*box*/}
        <div className="flex flex-row flex-wrap gap-6 shadow-2xl-">
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
            <Image className="rounded-2xl" src="/Scent Leaf.jpg" width={360} height={300} alt="" />
            <div className=" flex flex-col gap-4 px-4">
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

      <div className="flex justify-between items-center flex-wrap top-80 relative bg-white px-14 py-2  ">
        <Image className="rounded-2xl" src="/logo.png" width={160} height={100} alt="" />
        <Link href="#contact" id='contact'>
          <p>hello@gmail.com</p>
        </Link>
        <p>the framers</p>
      </div>

    </div>
  );
}
