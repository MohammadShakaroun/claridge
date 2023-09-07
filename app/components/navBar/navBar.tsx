// components/Navbar.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import Image from "next/image";
import ClaridgeLogo from "../../images/claridgeLogo.jpg";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-blue-500 p-4 w-full h-24 ">
      <motion.div className="flex justify-center items-center gap-10 xl:gap-20">
        <Link href={""} className="border-2 p-2 border-white rounded-md">
          <motion.div className="w-20 justify-start">
               <Image src={ClaridgeLogo} alt={""} className="rounded" />
          </motion.div>
        </Link>
        <Link href={""} className="border-2 p-2 border-white rounded-md">
          <motion.div className="text-white text-xl hover:text-slate-300">Main Page</motion.div>
        </Link>
        <motion.div className="relative">
          <Link href={""}>
            <motion.div
              onClick={toggleDropdown}
              className="flex flex-row text-white text-xl focus:outline-none border-2 p-2 hover:text-slate-300 border-white rounded-md"
            >
              CSE <AiOutlineArrowDown />
            </motion.div>
          </Link>
          {isDropdownOpen && (
            <motion.div className="absolute right-0 mt-2 py-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
              <ul>
                <Link href={""}>
                  <li className="hover:bg-gray-400 px-4 py-2 text-black">
                    Annual Report
                  </li>
                </Link>
                <Link href={""}>
                  {" "}
                  <li className="hover:bg-gray-400 px-4 py-2 text-black">
                    Item 2
                  </li>
                </Link>
                <Link href={""}>
                  <li className="hover:bg-gray-400 px-4 py-2 text-black">
                    Announcements
                  </li>
                </Link>
                <Link href={""}>
                  <li className="hover:bg-gray-400 px-4 py-2 text-black">
                    Interim Announcements
                  </li>
                </Link>
              </ul>
            </motion.div>
          )}
        </motion.div>
        <Link href={""} className="border-2 p-2 border-white rounded-md">
          <motion.div className="text-white text-xl hover:text-slate-300">General Info</motion.div>
        </Link>
        <Link href={""} className="border-2 p-2 border-white rounded-md">
          <motion.div className="text-white text-xl hover:text-slate-300">
            Corporate Governance
          </motion.div>
        </Link>
      </motion.div>
    </nav>
  );
};

export default Navbar;
