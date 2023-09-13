"use client"
import React from "react"
import Navbar from "@/app/components/navBar/navBar"
import Footer from "@/app/components/footer/footer"
import InterimAnnoucement from "@/app/components/cse/interimAnnoucement/interimAnnoucement"
import AnimatedRoute from "@/app/components/animateRoutes/animateRoute"

function InterimAnn() {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-blue-100 to-blue-400">
    <AnimatedRoute />
    <Navbar />
    <InterimAnnoucement />
    <Footer />
    </div>
  )
}
export default InterimAnn