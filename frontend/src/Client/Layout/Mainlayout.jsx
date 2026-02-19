import React from 'react'
import { Outlet } from "react-router-dom";
import Header from "../Pages/Header";
import Footer from "../Pages/Footer";
function Mainlayout() {
  return (
    <div className="bg-[#0F172A] text-white min-h-screen">
      <Header />
      <main className="pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Mainlayout