import { useState } from 'react'
import './App.css'
import Header from './components/common/Header'
import PageRoutes from './PageRoutes'
import Footer from './components/common/Footer'

function App() {

  return (
    <>
      <Header/>
      <PageRoutes/>
      <Footer/>
    </>
  )
}

export default App
