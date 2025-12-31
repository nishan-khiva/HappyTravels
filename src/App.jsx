import { Routes, Route, useLocation } from 'react-router-dom'
import LandingPage from "./pages/HomePage"
import Destinations from './pages/Destination'
import Packages from './pages/Package'
import CustomTrip from './pages/CustomTrip'
import { Localtaxi } from './pages/Localtaxi'
import { Outstation } from './pages/OutStation'
import { Airport } from './pages/AirportPickup'
import { Footer } from './component/Footer'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<LandingPage />} />
        <Route path='/destination' element={<Destinations />} />
        <Route path='/package' element={<Packages />} />
        <Route path='/customtrip' element={<CustomTrip />} />

        <Route path="/local-taxi" element={<Localtaxi />} />
        <Route path="/outstation" element={<Outstation />} />
        <Route path="/airport" element={<Airport />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
