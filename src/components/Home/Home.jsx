import React from 'react';
import Banner from '../../components/Pages/Banner'
import Features from '../../components/Pages/Features'
import About from '../../components/Pages/About'
import ProjectSection from '../../components/Pages/ProjectSection'
import ProcessSection from '../../components/Pages/ProcessSection'
import FAQSection from '../../components/Pages/FAQSection'
import RequestQuote from '../../components/Pages/RequestQuote'


const Home = () => {
  return (
    <div>
      <Banner/>
      <Features/>
      <About/>
      {/* <CounterSection/> */}
      {/* <PlacesAP/> */}
      {/* <TeamSection/> */}
      <ProjectSection/>
      <ProcessSection/>
      <FAQSection/>
      <RequestQuote/>
      {/* <BlogSection/> */}
    </div>
  );
}

export default Home;
