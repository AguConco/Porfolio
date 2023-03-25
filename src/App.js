import React from 'react'
import NavBar from './components/NavBar/NavBar'
import About from './sections/About/About'
import Home from './sections/Home/Home'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
    {/* <Studies /> Ver de hacer una linea del tipo que salgan las cosas que hice */}
    {/* <Projects />  En esta seccion aclarar que son proyectos de prueba para que uno vea el diseño y estilo de trabajo que realizo*/}
    {/* <Contact /> Dejar correo y Wpp pero no hacer formulario de contacto*/}
    </div>
  )
}

export default App;
