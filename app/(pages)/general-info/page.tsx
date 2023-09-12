"use client";
import React from "react";
import GeneralInfo from "@/app/components/generalInformation/generalInfo";
import Navbar from "@/app/components/navBar/navBar";
import Footer from "@/app/components/footer/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import GeneralImage from "../../images/claridgesTree.jpg";
import { WithAnimation } from "@/app/components/withAnimationComponents/withAnimation";

function GeneralInfos() {
  return (
    <div className="bg-gradient-to-r from-indigo-100 via-sky-300 to-pink-400">
      <Navbar />
      <motion.div className="w-full bg-gradient-to-r from-indigo-100 via-sky-300 to-pink-400 items-center justify-center mx-auto">
        <WithAnimation
          initialX={0}
          visibleX={0.5}
          duration={0.2}
          delay={0.3}
          initialY={"50vh"}
          visibleY={0}
          initialScale={1}
          visibleScale={1}
          width={"100%"}
          height={undefined}
        >
          <Image
            src={GeneralImage}
            alt={""}
            className="w-full lg:h-2/5"
          />
        </WithAnimation>
      </motion.div>
      <GeneralInfo />
      <Footer />
    </div>
  );
}
export default GeneralInfos;
