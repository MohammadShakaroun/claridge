"use client"
import React from "react"
import NavBar from "./components/navBar/navBar"
import HomePage from "./components/homeImage/homeImage"
import Footer from "./components/footer/footer"
import HomeContent from "./components/homeContent/homeContent"

export default function Home() {
  return (
    <main className="flex bg-gradient-to-r from-violet-400 to-fuchsia-400  min-h-screen flex-col items-center justify-between">
     <NavBar />
     <HomePage />
     <HomeContent />
     <Footer />
    </main>
  )
}
