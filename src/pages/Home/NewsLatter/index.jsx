import React from 'react'
import "./styles.scss"

const NewsLatter = () => {
  return (
    <div className='m-5 md:my-8 lg:my-12'>
      <div className='news-latter mx-4 lg:mx-14 p-4 lg:p-10 text-center'>
        <div className='max-w-3xl mx-auto'>
          <p className='font-had text-white text-2xl leading-8 md:text-3xl md:leading-10 lg:text-5xl lg:leading-[80px]'>Get Our Promo Code by Subscribing To Our Newsletter</p>
          <div className='p-2 bg-white inline-flex mb-5 sm:w-2/3 lg:w-2/3 justify-between mt-4'>
            <input type="text" placeholder="Enter you email" className="input w-full max-w-xs focus:outline-none focus:border-none " />
            <button className="btn bg-[#ddbc7a]">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsLatter