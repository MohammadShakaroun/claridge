"use client"
import React from "react"
import NavBar from "./components/navBar/navBar"
import Footer from "./components/footer/footer"
import HomeContent from "./components/homeContent/homeContent"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-violet-400 to-fuchsia-400">
     <NavBar />
     <HomeContent />
     <Footer />
    </main>
  )
}
