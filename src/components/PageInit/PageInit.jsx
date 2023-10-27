import Contact from "../Contact/Contact";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import About from "../About/About";
import Studies from "../Studies/Studies";
import Projects from "../Projects/Projects";
import { useEffect } from "react";

export const PageInit = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <NavBar status={true} />
      <Home />
      <About />
      <Studies />
      <Projects />
      <Contact />
    </>
  )
}