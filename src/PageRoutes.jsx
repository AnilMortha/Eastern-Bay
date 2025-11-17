import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Banner from './components/Pages/Banner'
import Features from './components/Pages/Features'
import About from './components/Pages/About'
import CounterSection from './components/Pages/CounterSection'
import TeamSection from './components/Pages/TeamSection'
import ProjectSection from './components/Pages/ProjectSection'
import ServicesSection from './components/Pages/ServicesSection'
import ProcessSection from './components/Pages/ProcessSection'
import FAQSection from './components/Pages/FAQSection'
import RequestQuote from './components/Pages/RequestQuote'
import BlogSection from './components/Pages/BlogSection'
import Home from './components/Home/Home'
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
      </Routes>

    </div>
  )
}

export default PageRoutes
