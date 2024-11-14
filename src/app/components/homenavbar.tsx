"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex justify-between items-center py-8 px-4 sm:px-16 lg:px-24">
      <div>
        <Image src="/logo.png" width={160} height={100} alt="oxFramer" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 sm:gap-4 lg:gap-16">
        <Link href="#home" className="hover:text-main">Home</Link>
        <Link href="#product" className="hover:text-main">Products</Link>
        <Link href="#pricing" className="hover:text-main">Pricing</Link>
        <Link href="#about" className="hover:text-main">About Us</Link>
      </div>

      {/* Mobile Toggle Icon */}
      <div className="md:hidden">
        {menuOpen ? (
          <AiOutlineClose size={30} onClick={toggleMenu} />
        ) : (
          <AiOutlineMenu size={30} onClick={toggleMenu} />
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white p-8 flex flex-col gap-4 md:hidden">
          <Link href="#home" className="hover:text-main" onClick={toggleMenu}>Home</Link>
          <Link href="#product" className="hover:text-main" onClick={toggleMenu}>Products</Link>
          <Link href="#pricing" className="hover:text-main" onClick={toggleMenu}>Pricing</Link>
          <Link href="#about" className="hover:text-main" onClick={toggleMenu}>About Us</Link>
          <Link className="bg-main text-white px-8 py-3 rounded-3xl text-xl mt-4" href="#signup" onClick={toggleMenu}>Get Started</Link>
        </div>
      )}

      {/* Get Started Button for Desktop */}
      <div className="hidden md:block">
        <Link className="bg-main text-white px-8 py-3 rounded-3xl text-xl" href="#signup">Get Started</Link>
      </div>
    </nav>

// hero start

// hero end
  );
}
