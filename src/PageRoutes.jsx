import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import OffGrid from './components/GridSolutions/OffGrid'
import OnGrid from './components/GridSolutions/OnGrid'
import Places from './components/Pages/Places'
import SolarCalculator from './components/Pages/SolarCalculator'
import AboutUsDetailPage from './components/Pages/AboutUsDetailPage'
import Appointment from './components/Pages/Appointment'
import HousingSociety from './components/OfferingSolutions/HousingSociety'
import Commercial from './components/OfferingSolutions/Commercial'
import Residential from './components/OfferingSolutions/Residential'
const PageRoutes = () => {
  return (
    <div>

      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/places" element={<Places/>}/>
        <Route path="/solar_calculator" element={<SolarCalculator/>}/>
        <Route path='/about' element={<AboutUsDetailPage/>}/>
        <Route path="/Appointment" element={<Appointment/>}/>
        <Route path="/OffGridSolar" element={<OffGrid/>}/>
        <Route path="/OnGridSolar" element={<OnGrid/>}/>
        <Route path="/Housing" element={<HousingSociety/>}/>
        <Route path="/Commercial" element={<Commercial/>}/>
        <Route path="/Home" element={<Residential/>}/>
      </Routes>

    </div>
  )
}

export default PageRoutes
