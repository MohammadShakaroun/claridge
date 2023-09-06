// components/Navbar.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
     AiOutlineArrowDown,
   } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-blue-500 p-4 w-full h-24">
      <motion.div className="flex justify-center items-center gap-10">
        <Link href={""} className="border-2 p-2 border-white rounded-md">
          <motion.div className="text-white text-2xl">LOGO</motion.div>
        </Link>
        <Link href={""} className="border-2 p-2 border-white rounded-md">
          <motion.div className="text-white text-2xl">Home</motion.div>
        </Link>
        <motion.div className="relative">
          <Link href={""}>
            <motion.div
              onClick={toggleDropdown}
              className="flex flex-row text-white text-2xl focus:outline-none border-2 p-2 border-white rounded-md"
            >
              Menu <AiOutlineArrowDown />
            </motion.div>
          </Link>
          {isDropdownOpen && (
            <motion.div className="absolute right-0 mt-2 py-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
              <ul>
                <li className="hover:bg-gray-400 px-4 py-2 text-black">
                  Item 1
                </li>
                <li className="hover:bg-gray-400 px-4 py-2 text-black">
                  Item 2
                </li>
                <li className="hover:bg-gray-400 px-4 py-2 text-black">
                  Item 3
                </li>
              </ul>
            </motion.div>
          )}
        </motion.div>
        <Link href={""} className="border-2 p-2 border-white rounded-md">
          <motion.div className="text-white text-2xl">Home</motion.div>
        </Link>
        <Link href={""} className="border-2 p-2 border-white rounded-md">
          <motion.div className="text-white text-2xl">Home</motion.div>
        </Link>
      </motion.div>
    </nav>
  );
};

export default Navbar;
