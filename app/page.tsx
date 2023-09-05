import React from "react"
import NavBar from "./components/navBar/navBar"
import HomePage from "./components/homepage/page"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-1">
     <NavBar />
     <HomePage />
    </main>
  )
}
