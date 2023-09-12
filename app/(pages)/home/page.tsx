"use client"
import React from "react";
import HomePage from "../../components/homeContent/homeContent";
import Navbar from "@/app/components/navBar/navBar";
import { motion } from "framer-motion";
import Footer from "@/app/components/footer/footer";
import Image from "next/image";
import { WithAnimation } from "@/app/components/withAnimationComponents/withAnimation";
import ClaridgeEnter from "@/app/images/claridgeenter.jpg"

function Home() {
  return (
    <motion.div className="w-full h-screen bg-gradient-to-r from-indigo-100 via-sky-300 to-pink-400">
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
            src={ClaridgeEnter}
            alt={""}
            className="w-full lg:h-96 rounded-md"
          />
        </WithAnimation>
      </motion.div>
    <HomePage />
    <Footer />
    </motion.div>
  )
}
export default Home