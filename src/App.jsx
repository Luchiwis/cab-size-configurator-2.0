import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './components/Home'
import { Hoistway } from './components/Hoistway'
import { Model } from './components/Model'
import { Type } from './components/Type'
import { Door } from './components/Door'
import { Cab } from './components/Cab'
import { Results } from './components/Results'
import './bootstrap/bootstrap-federal.css'
import './App.css'

function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        {/* <Home></Home> */}
        {/* <Hoistway></Hoistway> */}
        {/* <Model></Model> */}
        {/* <Type></Type> */}
        {/* <Door></Door> */}
        {/* <Cab></Cab> */}
        <Results></Results>
      </main>

      <Footer></Footer>
    </>
  )
}

export default App
