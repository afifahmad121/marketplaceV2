import React from "react";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/layout/Hero";
import { Footer } from "./components/layout/Footer";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/layout/Login";
import { Registration } from "./components/layout/Registration";

export default function App() {
  return (
    <main className=" text-fontWhite">
      <>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
        </Routes>
      </>
    </main>
  );
}
