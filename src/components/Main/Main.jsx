import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import About from "../About/About";
import Studies from "../Studies/Studies";
import Projects from "../Projects/Projects";
import { Service } from "../Service/Service";
import { NavBar } from "../NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Footer } from "../Footer/Footer";

export const Main = () => {

  return (
    <main>
      <Home />
      <NavBar />
      <Routes>
        <Route path="" element={<Service />} />
        <Route path="/service" element={<Service />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Contact />
      <Footer />
    </main>
  )
}


{/* <Projects /> */ }
{/* <Studies /> */ }
{/* <About /> */ }