"use client"
import React from "react"
import HomePage from "../../components/homeContent/homeContent"
import Navbar from "@/app/components/navBar/navBar"
import { motion } from "framer-motion"
import Footer from "@/app/components/footer/footer"
import HomeImage from "@/app/components/homeImage/homeImage"

function Home() {
  return (
    <motion.div className="bg-secondary">
    <Navbar />
    <HomeImage />
    <HomePage />
    <Footer />
    </motion.div>
  )
}
export default Home