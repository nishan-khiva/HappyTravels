import { Routes, Route, useLocation } from 'react-router-dom'
import LandingPage from "./pages/HomePage"
import Destinations from './pages/Destination'
import Packages from './pages/Package'
import CustomTrip from './pages/CustomTrip'



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<LandingPage />} />
        <Route path='/destination' element={<Destinations />} />
        <Route path='/package' element={<Packages />} />
        <Route path='/customtrip' element={<CustomTrip />} />
      </Routes>
    </>
  )
}

export default App
