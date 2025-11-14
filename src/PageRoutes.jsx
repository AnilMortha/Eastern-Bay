import React from 'react'
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

const PageRoutes = () => {
  return (
    <div>
      <Banner/>
      <Features/>
      <About/>
      <CounterSection/>
      <ServicesSection/>
      <TeamSection/>
      <ProjectSection/>
      <ProcessSection/>
      <FAQSection/>
      <RequestQuote/>
      <BlogSection/>
    </div>
  )
}

export default PageRoutes
