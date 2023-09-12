import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";

function AnnualReport() {
  const mainControls = useAnimation();

  return (
    <motion.div className="w-full h-96 bg-gradient-to-r from-sky-400 to-fuchsia-500">
      <motion.h1 className="text-center text-4xl font-extrabold p-10">
        Annual Reports
      </motion.h1>
      <motion.div
      className="flex flex-col justify-between items-start w-2/3 mx-auto mt-8 text-center"
      >
        <motion.div
          className="items-center justify-center mx-auto"
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href={"http://www.claridgepublic.com/docs/Claridge%20Public%20Limited_Financial%20Statements%202018.pdf"} className=" hover:text-red-500 text-2xl hover:underline">
            Annual Report 2018
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
          <Link href={"http://www.claridgepublic.com/docs/April30_2013_CLA_FinalResults2012.pdf"} className=" hover:text-red-500 text-2xl hover:underline">
            Annual Report 2013
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
          <Link href={"http://www.claridgepublic.com/images/Claridge%20SIGNED%20FS%202010.pdf"} className=" hover:text-red-500 text-2xl hover:underline">
            Annual Report 2010
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
          <Link href={"http://www.claridgepublic.com/docs/image1999.pdf"} className=" hover:text-red-500 text-2xl hover:underline">
            Annual Report 2011
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
export default AnnualReport;
