import React from 'react'
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'
import Home from './components/Home/Home'
import Studies from './components/Studies/Studies'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Studies />
      {/* <Projects />  En esta seccion aclarar que son proyectos de prueba para que uno vea el diseño y estilo de trabajo que realizo*/}
      <Contact /> 
      {/*  Dejar correo y Wpp pero no hacer formulario de contacto*/}
    </div>
  )
}

export default App;
