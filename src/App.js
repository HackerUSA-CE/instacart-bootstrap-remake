import React from 'react'
import './App.css'
import CustomNavbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import StoreListings from './components/StoreListings'

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <HeroSection />
      <StoreListings />
    </div>
  )
}

export default App
