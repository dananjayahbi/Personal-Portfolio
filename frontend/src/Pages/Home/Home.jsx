import React from 'react'
import HeroSection from './HeroSection'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from './Footer'
// import Test1 from '../Tests/test1'
import ClockAnim from './ClockAnim'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
      <ClockAnim />
      <Footer />
    </div>
  )
}

export default Home