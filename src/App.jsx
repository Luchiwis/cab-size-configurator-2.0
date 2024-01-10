//libraries
import { Routes, Route } from 'react-router-dom'
import './bootstrap/bootstrap-federal.css'
import './css/App.css'
import React from 'react'
import { useState } from 'react'

//components
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Selections } from './components/Selections'

//pages
import { Home } from './pages/Home'
import { Hoistway } from './pages/Hoistway'
import { Model } from './pages/Model'
import { Type } from './pages/Type'
import { Door } from './pages/Door'
import { Cab } from './pages/Cab'
import { Result } from './pages/Result'
import { PageNotFound } from './pages/PageNotFound'

//context

export const UnitContext = React.createContext(null);

function App() {
  const [unit, setUnit] = useState('in')
  return (
    <>
      <UnitContext.Provider value={[unit, setUnit]}>
        <header>
          <Navbar></Navbar>
          <Routes>
            <Route path="/hoistway" element={<Selections />} />
            {/* <Route path="/model" element={<Selections />} /> */}
            <Route path="/type" element={<Selections />} />
            <Route path="/door" element={<Selections />} />
            <Route path="/cab" element={<Selections />} />
          </Routes>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hoistway" element={<Hoistway />} />
          <Route path="/model" element={<Model />} />
          <Route path="/type" element={<Type />} />
          <Route path="/door" element={<Door />} />
          <Route path="/cab" element={<Cab />} />
          <Route path="/result" element={<Result />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer></Footer>
      </UnitContext.Provider>
    </>
  )
}

export default App
