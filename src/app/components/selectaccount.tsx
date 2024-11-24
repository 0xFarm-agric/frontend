'use client'
import Link from 'next/link'
import { useState } from "react";
import { FaUserTie, FaUserSecret } from "react-icons/fa";


const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-main text-white px-8 font-thin py-3 rounded-full text-lg hover:bg-main-dark transition duration-300"
      >
        Get Started
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg">
          <div
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            <FaUserTie className="text-main" />

            <span>   <Link  href="/signup">Investor</Link> </span>
          </div>
          <div
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            <FaUserSecret className="text-main" />
            <span>    <Link  href="/agentsignup">Agent</Link> </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
