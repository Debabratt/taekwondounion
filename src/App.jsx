import React from 'react'
import { Routes, Route } from 'react-router-dom'; // No BrowserRouter here
import "./index.css"; 
import TopNav from './Components/TopNav';
import Home from './Components/Home';
import Mainnav from './Components/Mainnav';
import ApprovalsSection from './Components/ApprovalsSection';
import Youtube from './Components/Youtube';
import Footer from './Components/Footer';
import BenefitsSection from './Components/BenefitsSection';
import Category from './Components/Category';
import Marque from './Components/Marque';
import About from './Components/About';
import Contact from './Components/Contact';
import StateUnion from './Components/StateUnion';

const App = () => {
  return (
  
    <>
      <Mainnav />
      <TopNav />
      
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Marque />
            <BenefitsSection />
            <ApprovalsSection />
            <Youtube />
            <Category />
          </>
        } />
        
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/state-union" element={<StateUnion />} />
      </Routes>
      
      <Footer />
    </>
  )
}

export default App