"use client"
import React from "react"
import Navbar from "@/app/components/navBar/navBar"
import Footer from "@/app/components/footer/footer"
import Annoucements from "@/app/components/cse/annoucement/annoucement"
import AnimatedRoute from "@/app/components/animateRoutes/animateRoute"

function Annoucement() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-100 to-blue-400">
    <AnimatedRoute />
    <Navbar />
    <Annoucements />
    <Footer />
    </div>
  )
}
export default Annoucement