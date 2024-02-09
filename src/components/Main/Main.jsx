import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import { Service } from "../Service/Service";
import { NavBar } from "../NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Jobs } from "../Jobs/Jobs";

export const Main = () => {

  return (
    <>
      <Home />
      <NavBar />
      <Routes>
        <Route path="" element={<Service />} />
        <Route path="/service" element={<Service />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
      <Contact />
      <Footer />
    </>
  )
}