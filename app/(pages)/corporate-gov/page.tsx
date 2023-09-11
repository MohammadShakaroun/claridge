"use client"
import React from "react"
import CorporateGov from "../../components/corporategov/corporateGov"
import NavBar from "@/app/components/navBar/navBar"
import Footer from "@/app/components/footer/footer"

function Gov() {
  return (
    <div className="bg-secondary ">
     <NavBar />
     <CorporateGov />
     <Footer />
     </div>
  )
}
export default Gov