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
import { RestrictionBox } from './components/RestrictionBox'

//pages
import { Home } from './pages/Home'
import { Hoistway } from './pages/Hoistway'
import { Model } from './pages/Model'
import { Type } from './pages/Type'
import { Door } from './pages/Door'
import { Cab } from './pages/Cab'
import { Result } from './pages/Result'
import { PageNotFound } from './pages/PageNotFound'
import { useElevatorParams } from '../hooks/useElevatorParams'
//context

export const UnitContext = React.createContext(null);

function App() {
  const elevatorParams = useElevatorParams()
  const [unit, setUnit] = useState(elevatorParams.unit || 'in')

  return (
    <>
      <UnitContext.Provider value={[unit, setUnit]}>
        <RestrictionBox>
          <header>
            <Navbar></Navbar>
            <Routes>
              <Route path="/hoistway" element={<Selections />} />
              <Route path="/type" element={<Selections />} />
              <Route path="/door" element={<Selections />} />
              <Route path="/cab" element={<Selections />} />
              <Route path="*" element />
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
        </RestrictionBox>
        <Footer></Footer>
      </UnitContext.Provider>
    </>
  )
}

export default App
