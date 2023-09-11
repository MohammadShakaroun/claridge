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
    <nav className="bg-blue-500 p-4 relative w-full h-24">
      <motion.div className="flex justify-center items-center sm:gap-4 xl:gap-20">
        <Link href={"/home"} className="md:border-2 p-2 border-white rounded-md">
          <motion.div className=" w-16">
            {/* <motion.div className="items-center justify-center flex-row mx-auto">Claridge</motion.div> */}
            <Image src={ClaridgeLogo} alt={""} className="rounded-xl" />
          </motion.div>
        </Link>
        <Link
          className="md:border-2 p-2 border-white rounded-md" href={"/home"}        >
          <motion.div
            className="text-white md:text-xl hover:text-slate-300"
          >
            Main Page
          </motion.div>
        </Link>
        <motion.div className="relative">
            <motion.div
              onClick={toggleDropdown}
              className="flex flex-row text-white md:text-xl focus:outline-none border-2 p-2 hover:text-slate-300 border-white rounded-md cursor-pointer"
            >
              CSE {" "}<AiOutlineArrowDown className="mt-1"/>
            </motion.div>
          {isDropdownOpen && (
            <motion.div className="relative right-0 mt-2 py-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-40">
              <ul>
                <Link href={"/annual-report"}>
                  <li className="hover:bg-gray-400 px-4 py-2 text-black">
                    Annual Report
                  </li>
                </Link>
                <Link href={"annoucement"}>
                  <li className="hover:bg-gray-400 px-4 py-2 text-black">
                    Announcements
                  </li>
                </Link>
                <Link href={"/interim-annoucement"}>
                  <li className="hover:bg-gray-400 px-4 py-2 text-black">
                    Interim Announcements
                  </li>
                </Link>
              </ul>
            </motion.div>
          )}
        </motion.div>
        <Link href={"/general-info"} className="md:border-2 p-2 border-white rounded-md">
          <motion.div className="text-white md:text-xl hover:text-slate-300">
            General Info
          </motion.div>
        </Link>
        <Link href={"/corporate-gov"} className="md:border-2 p-2 border-white rounded-md">
          <motion.div className="text-white md:text-xl hover:text-slate-300">
            Corporate Governance
          </motion.div>
        </Link>
      </motion.div>
    </nav>
  );
};

export default Navbar;
