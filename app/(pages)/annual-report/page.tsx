"use client"
import React from "react"
import Reports from "../../components/cse/annualReports/annualReport"
import Navbar from "@/app/components/navBar/navBar"
import Footer from "@/app/components/footer/footer"

function Report() {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-100 via-sky-300 to-pink-400 ">
    <Navbar />
    <Reports />
    <Footer />
    </div>
  )
}
export default Report