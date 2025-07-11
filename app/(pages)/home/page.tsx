"use client"
import React from "react";
import HomePage from "../../components/homeContent/homeContent";
import Navbar from "@/app/components/navBar/navBar";
import { motion } from "framer-motion";
import Footer from "@/app/components/footer/footer";
import Image from "next/image";
import { WithAnimation } from "@/app/components/withAnimationComponents/withAnimation";
import ClaridgeHotels from "@/app/images/claridgehotels.jpg"
import AnimatedRoute from "@/app/components/animateRoutes/animateRoute";

function Home() {
  return (
    <motion.div className="w-full h-screen bg-gradient-to-r from-blue-100 to-blue-400">
    <AnimatedRoute />
    <Navbar />
    <motion.div className="w-full bg-gradient-to-r from-blue-100 to-blue-400 items-center justify-center mx-auto">
        <WithAnimation
          initialX={0}
          visibleX={0.5}
          duration={1}
          delay={0}
          initialY={"50vh"}
          visibleY={0}
          initialScale={1}
          visibleScale={1}
          width={"100%"}
          height={undefined}
        >
          <Image
            src={ClaridgeHotels}
            alt={""}
            className="w-full lg:h-96"
          />
        </WithAnimation>
      </motion.div>
    <HomePage />
    <Footer />
    </motion.div>
  )
}
export default Home