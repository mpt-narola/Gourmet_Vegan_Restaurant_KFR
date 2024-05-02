import React from 'react'
import HeroSection from './HeroSection'
import AboutChef from './AboutChef'
import Services from './Services'
import SpecialDish from './SpecialDish'
import OurMenu from './OurMenu'
import Gallery from './Gallery'
import NewsLatter from './NewsLatter'

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutChef />
      <Services />
      <SpecialDish />
      <OurMenu />
      <Gallery />
      <NewsLatter />
    </>
  )
}

export default Home