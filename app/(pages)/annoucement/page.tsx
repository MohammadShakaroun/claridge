"use client"
import React from "react"
import Navbar from "@/app/components/navBar/navBar"
import Footer from "@/app/components/footer/footer"
import Annoucements from "@/app/components/cse/annoucement/annoucement"

function Annoucement() {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-100 via-sky-300 to-pink-400 ">
    <Navbar />
    <Annoucements />
    <Footer />
    </div>
  )
}
export default Annoucement