import React from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

function InterimAnnoucement() {
  const mainControls = useAnimation();
  return (
     <motion.div className="flex flex-col w-full h-96 bg-gradient-to-r from-cyan-100 to-blue-300">
      <motion.h1 className="text-center text-black text-4xl font-extrabold p-10">
      Interim Announcements
      </motion.h1>
      <motion.div className="flex-row md:flex-col justify-between items-start w-full mt-8 text-center">
        <motion.div
          className="items-center justify-center mx-auto"
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            href={
              "http://www.claridgepublic.com/docs/Scan0194.pdf"
            }
            className=" hover:text-red-500 hover:underline text-black"
          >
            Unaudited interim condensed consolidated financial statements for
            the six months ended 30 June 2011
          </Link>
        </motion.div>
        <motion.div
          className="items-center justify-center mx-auto"
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <Link href={"http://www.claridgepublic.com/docs/CLA%20INTERIM%202012.pdf"} className=" hover:text-red-500 hover:underline text-black">
            Unaudited interim condensed consolidated financial statements for
            the six months ended 30 June 2012
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
export default InterimAnnoucement;