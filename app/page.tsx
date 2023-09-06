"use client"
import React from "react"
import NavBar from "./components/navBar/navBar"
import HomePage from "./components/homeImage/homeImage"
import Footer from "./components/footer/footer"

export default function Home() {
  return (
    <main className="flex bg-white min-h-screen flex-col items-center justify-between">
     <NavBar />
     <HomePage />
     <Footer />
    </main>
  )
}
