"use client"
import React from "react"
import Image from "next/image"
import CorporateGov from "../../components/corporategov/corporateGov"
import NavBar from "@/app/components/navBar/navBar"
import Footer from "@/app/components/footer/footer"
import CorporateImg from "../../images/129794890.jpg"
import { WithAnimation } from "@/app/components/withAnimationComponents/withAnimation"
import AnimatedRoute from "@/app/components/animateRoutes/animateRoute"
function Gov() {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-400">
    <AnimatedRoute />
     <NavBar />
      <WithAnimation  initialX={0}
        visibleX={0.5}
        duration={0.2}
        delay={0.3}
        initialY={0}
        visibleY={0}
        initialScale={1}
        visibleScale={1}
        width={"100%"}
        height={"60%"}>
        <Image 
        src={CorporateImg}
        alt={""}
        className="w-full h-80"
        />
      </WithAnimation>
     <CorporateGov />
     <Footer />
     </div>
  )
}
export default Gov