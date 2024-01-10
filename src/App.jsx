import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Hoistway } from './pages/Hoistway'
import { Model } from './pages/Model'
import { Type } from './components/Type'
import { Door } from './components/Door'
import { Cab } from './components/Cab'
import { Results } from './pages/Results'
import { PageNotFound } from './pages/PageNotFound'
import './bootstrap/bootstrap-federal.css'
import './css/App.css'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hoistway" element={<Hoistway />} />
        <Route path="/model" element={<Model />} />
        <Route path="/type" element={<Type />} />
        <Route path="/door" element={<Door />} />
        <Route path="/cab" element={<Cab />} />
        <Route path="/results" element={<Results />} />
        <Route path="*" element={<PageNotFound />}/>
      </Routes>

      <Footer></Footer>
    </>
  )
}

export default App
