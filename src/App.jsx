import React from "react";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/layout/Hero";
import { Footer } from "./components/layout/Footer";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/layout/Login";
import { Registration } from "./components/layout/Registration";
import ProtectedRoute from "./components/layout/ProtectedRoute";

export default function App() {
  return (
    <main className=" text-fontWhite">
      <>
        <Navbar />
        <Routes>
          {/* public Routes */}
          <Route path="/" element={<Hero />} />
          <Route path="/" element={<Footer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />

          {/* Protected Route (harus logi)  */}

          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <Users />
              </ProtectedRoute>
            }
          />

          <Route
            path="/users/:id"
            element={
              <ProtectedRoute>
                <UserDetail />
              </ProtectedRoute>
            }
          />

          <Route
            path="/register"
            element={
              <ProtectedRoute>
                <Register />
              </ProtectedRoute>
            }
          />
        </Routes>
      </>
    </main>
  );
}
