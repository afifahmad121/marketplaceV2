import React from "react";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/layout/Hero";
import { Footer } from "./components/layout/Footer";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/layout/Login";

export default function App() {
  return (
    <main className=" text-fontWhite">
      <header>
        <Navbar />
      </header>

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
      </Routes>

      <section id="hero">
        <Hero />
      </section>

      <footer>
        <Footer />
      </footer>
    </main>
  );
}
