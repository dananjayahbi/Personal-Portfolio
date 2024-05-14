import React from 'react'
import HeroSection from './HeroSection'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home