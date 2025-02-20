import React from 'react'
import "./index.css"; 
import TopNav from './Components/TopNav';
import Home from './Components/Home';
import Mainnav from './Components/Mainnav';
import ApprovalsSection from './Components/ApprovalsSection';
import Youtube from './Components/Youtube';
import Footer from './Components/Footer';
import BenefitsSection from './Components/BenefitsSection';
import Category from './Components/Category';
const App = () => {
  return (
    <div>
        <TopNav />
        <Mainnav/>
        <Home/>
        <BenefitsSection/>
        <ApprovalsSection/>
        <Youtube/>
        
        <Category/>
        <Footer/>
    </div>
  )
}

export default App
