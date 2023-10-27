import React from 'react'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom';
import { Service } from './components/Service/Service'
import { PageInit } from './components/PageInit/PageInit'


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PageInit />} />
        <Route path='/service/*' element={<Service />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;


