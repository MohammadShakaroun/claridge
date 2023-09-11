"use client"
import React from "react"
import Navbar from "@/app/components/navBar/navBar"
import Footer from "@/app/components/footer/footer"
import InterimAnnoucement from "@/app/components/cse/interimAnnoucement/interimAnnoucement"

function InterimAnn() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-indigo-100 via-sky-300 to-pink-400 ">
    <Navbar />
    <InterimAnnoucement />
    <Footer />
    </div>
  )
}
export default InterimAnn