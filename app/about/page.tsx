import React from 'react'
import Navbar from '../components/navbar'
import Section1 from '../components/aboutCompo/Section1'
import Section3 from '../components/aboutCompo/Section3'
import Section4 from '../components/aboutCompo/Section4'
import FAQSection from '../components/portfolio/components/FAQSection'
import CTASection from '../components/portfolio/components/CTASection'
import Footer from '../components/Footer'

const AboutPage = () => {
  return (
    <div className=" bg-black relative">
        <Navbar />  
        <Section1 />  
        <Section3 />
        <Section4 />
        <FAQSection />
        <CTASection />
        <Footer />
        <div className="backdrop-blur-md bg-transparent fixed -bottom-1 left-0 w-full h-[80px] z-60 rounded-t-xl shadow-lg" />
    </div>
  )
}

export default AboutPage