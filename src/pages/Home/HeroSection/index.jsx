import React, { useState } from 'react'
import "./styles.scss"
import location from "../../../assets/images/location.svg"

const HeroSection = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='hero-section bg-black w-full h-[32rem] sm:h-[30rem] md:h-[40rem] lg:h-[635px]'>
        <div className='content h-full w-full p-7 sm:p-14 md:p-20 lg:p-24'>
          <div className='heading text-white font-normal leading-9 md:leading-[5rem] lg:leading-[105px] text-2xl md:text-4xl lg:text-6xl '>
            Welcome To The <br/>Gourmet Vegan Restaurant
          </div>
          <div className='details mb-4 sm:mb-8 md:mb-12 w-3/4 md:max-w-xl'>
            Every university has a website or mobile ordering application that provides information about the menus of university cafeterias, franchise dining locations, and university-based dining spots. However, this concept takes things a step further by utilizing the macronutrient data provided by the producers.
          </div>
          <div className='flex'>
            <button className='btn bg-[#ddbc7a]' onClick={() => setOpen(true)}>
              <img src={location} />
              Book Your Table
            </button>
            <button className='btn bg-transparent ml-3 text-white'>Explore Our Menu</button>
          </div>
        </div>
      </div>
      <dialog id="book_table" className="modal" open={open} onClose={() => setOpen(false)}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  )
}

export default HeroSection