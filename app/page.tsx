"use client"
import React from "react"
import NavBar from "./components/navBar/navBar"
import Footer from "./components/footer/footer"
import HomeContent from "./components/homeContent/homeContent"
import Image from "next/image"
import { WithAnimation } from "./components/withAnimationComponents/withAnimation"
import { motion } from "framer-motion"
import MainClaridge from "@/app/images/mainclaridge.jpg"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-indigo-100 via-sky-300 to-pink-400 ">
     <NavBar />
     <motion.div className="w-full bg-gradient-to-r from-indigo-100 via-sky-300 to-pink-400 items-center justify-center mx-auto">
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
            src={MainClaridge}
            alt={""}
            className="w-full lg:h-96"
          />
        </WithAnimation>
      </motion.div>
     <HomeContent />
     <Footer />
    </main>
  )
}
