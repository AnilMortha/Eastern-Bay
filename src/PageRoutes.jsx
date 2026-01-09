import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import OffGrid from './components/GridSolutions/OffGrid'
import OnGrid from './components/GridSolutions/OnGrid'
import Places from './components/Pages/Places'
import SolarCalculator from './components/Pages/SolarCalculator'
import AboutUsDetailPage from './components/Pages/AboutUsDetailPage'
import Appointment from './components/Pages/Appointment'
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
      </Routes>

    </div>
  )
}

export default PageRoutes
