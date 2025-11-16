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
import Places from './components/Pages/Places'
import SolarCalculator from './components/Pages/SolarCalculator'
const PageRoutes = () => {
  return (
    <div>

      <Routes>
        
        <Route path="/" element={<Banner/>}/>
        <Route path="/features" element={<Features/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/counter" element={<CounterSection/>}/>
        <Route path="/team" element={<TeamSection/>}/>
        <Route path="/project" element={<ProjectSection/>}/>
        <Route path="/services" element={<ServicesSection/>}/>
        <Route path="/process" element={<ProcessSection/>}/>
        <Route path="/faq" element={<FAQSection/>}/>
        <Route path="/quote" element={<RequestQuote/>}/>
        <Route path="/blog" element={<BlogSection/>}/>

        <Route path="/places" element={<Places/>}/>
        <Route path="/solar_calculator" element={<SolarCalculator/>}/>
      </Routes>

    </div>
  )
}

export default PageRoutes
