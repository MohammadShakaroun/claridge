"use client"
import React from "react"
import Reports from "../../components/cse/annualReports/annualReport"
import Navbar from "@/app/components/navBar/navBar"
import Footer from "@/app/components/footer/footer"
import AnimatedRoute from "@/app/components/animateRoutes/animateRoute"

function Report() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-100 to-blue-400">
    <AnimatedRoute />
    <Navbar />
    <Reports />
    <Footer />
    </div>
  )
}
export default Report