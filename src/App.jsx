import { Routes, Route, useLocation } from 'react-router-dom'
import LandingPage from "./pages/HomePage"




function App() {

  return (
    <>
      <LandingPage />
      <Routes>
        <Route path='/home' element={<LandingPage/>}/>
      </Routes>
    </>
  )
}

export default App
