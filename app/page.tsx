"use client";
import React from "react";
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import HomeContent from "./components/homeContent/homeContent";
import Image from "next/image";
import { WithAnimation } from "./components/withAnimationComponents/withAnimation";
import { motion } from "framer-motion";
import MainClaridge from "@/app/images/ClaridgeHome.jpg";
import AnimateRoute from "./components/animateRoutes/animateRoute";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-blue-100 to-blue-400">
      <AnimateRoute />
      <NavBar />
      <motion.div className="w-full relative bg-gradient-to-r from-blue-100 to-blue-400 items-center justify-center mx-auto">
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
          <Image src={MainClaridge} alt={""} className="w-full lg:h-screen" />
          <div className="absolute w-full mx-auto lg:h-24 top-20 left-0 lg:top-80  items-center bg-black bg-opacity-50 text-white p-6">
            <p className="font-bold text-4xl mx-10 sm:mx-52 lg:translate-x-1/2">The Claridge</p>
          </div>
        </WithAnimation>
      </motion.div>
      <HomeContent />
      <Footer />
    </main>
  );
}
