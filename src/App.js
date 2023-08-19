import React from 'react'
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'
import Home from './components/Home/Home'
import Studies from './components/Studies/Studies'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom';
import { Service } from './components/Service/Service'
import { DedicatedSoftware } from './components/DedicatedSoftware/DedicatedSoftware'


const PageInit = () => (
  <>
    <Home />
    <Service />
    <About />
    <Studies />
    <Projects />
    <Contact />
  </>
)

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<PageInit />} />
        <Route path='/dedicated-software' element={<DedicatedSoftware />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;


