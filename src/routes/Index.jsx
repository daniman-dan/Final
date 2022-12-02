import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { About } from "../componentes/About";
import { DashBoard } from "../componentes/DashBoard";
import { Header } from "../componentes/Header";
import { Home } from "../componentes/Home";
import '../componentes/styles/navegacion.css'

export function Navegacion() {
  return (
      <BrowserRouter>
        <nav>
          <div className="cabezera">
            <ul>
            <Link className="inicio" to="/home"><li>Home</li></Link>
            <Link className="inicio" to="/about"><li>About</li></Link>
            <Link className="inicio" to="/dashboard"><li>Dashboard</li></Link>
            </ul>
        </div>
        </nav>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
  );
}
