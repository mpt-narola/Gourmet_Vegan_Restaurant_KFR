import React from 'react'
import "./styles.scss"
import location from "../../../assets/images/location.svg"

const HeroSection = () => {
  return (
    <>
      <div className='hero-section bg-black w-full h-[40rem] sm:h-[30rem] md:h-[40rem] lg:h-[635px]'>
        <div className='content h-full w-full p-7 sm:p-14 md:p-20 lg:p-24'>
          <div className='heading text-white font-normal leading-9 md:leading-[5rem] lg:leading-[105px] text-2xl md:text-4xl lg:text-6xl mb-4 md:mb-0'>
            Welcome To The <br/>Gourmet Vegan Restaurant
          </div>
          <div className='details mb-4 sm:mb-8 md:mb-12 w-3/4 md:max-w-xl h-[20rem] sm:h-auto leading-7'>
            Every university has a website or mobile ordering application that provides information about the menus of university cafeterias, franchise dining locations, and university-based dining spots. However, this concept takes things a step further by utilizing the macronutrient data provided by the producers.
          </div>
          <div className='grid sm:flex'>
            <button className='btn bg-[#ddbc7a] mr-3 mb-3'>
              <img src={location} />
              Book Your Table
            </button>
            <button className='btn bg-transparent text-white mr-3 mb-3'>Explore Our Menu</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection