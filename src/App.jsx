import { Outlet } from 'react-router-dom'
import './App.css'
import Navitems from './components/Navitems'
import Footer from './components/footer'

function App() {

  return (
    <>
      <Navitems></Navitems>
      <div className="min-vh-100">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
