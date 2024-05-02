import React from 'react'
import dish from "../../assets/images/dish.png"

const SpecialDish = () => {
  return (
    <div className='mx-4 md:mx-8 lg:mx-16 my-5'>
      <div className='p-5'>
        <div className='mb-4'>
          <p className='font-had text-2xl md:text-4xl lg:text-5xl leading-10 md:leading-[80px] text-center text-[#0B1928] p-4'>Our Special Dish</p>
          <p className='text-[#606060] text-lg leading-5 text-center'>
            Etiam hendrerit nec ipsum eu dictum. Nulla facilisi. Ut quis laoreet arcu, nec vehicula eros.
          </p>
        </div>
        <div className='w-full'>
          <div className='inline-block w-full md:w-1/2 lg:w-1/4 p-4'>
            <div className='bg-white p-4 shadow'>
              <button className="btn btn-ghost rounded-full border border-[#ddbc7a] p-3 float-end">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ddbc7a]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </button>
              <img src={dish} alt="dish" className='max-w-full' />
              <div>
                <p className='text-lg leading-7 mb-2 font-semibold text-[#101A24]'>
                  Mexican tacos with beef in tomato sauce and salsa.
                </p>
                <p className='text-base leading-6 mb-4 text-[#606060]'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
              <div className='flex flex-row justify-between items-center h-12'>
                <span className='text-[#101A24] font-bold text-2xl leading-7'>$29.99</span>
                <button className='btn bg-[#ddbc7a] btn-sm py-1.5 px-2'>Add To Cart</button>
              </div>
            </div>
          </div>
          <div className='inline-block w-full md:w-1/2 lg:w-1/4 p-4'>
            <div className='bg-white p-4 shadow'>
              <button className="btn rounded-full border border-[#ddbc7a] bg-[#ddbc7a] p-3 float-end">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </button>
              <img src={dish} alt="dish" className='max-w-full' />
              <div>
                <p className='text-lg leading-7 mb-2 font-semibold text-[#101A24]'>
                  Mexican tacos with beef in tomato sauce and salsa.
                </p>
                <p className='text-base leading-6 mb-4 text-[#606060]'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
              <div className='flex flex-row justify-between items-center h-12'>
                <span className='text-[#101A24] font-bold text-2xl leading-7'>$29.99</span>
                <div className="rating rating-sm">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#DDBC7A]" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#DDBC7A]" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#DDBC7A]" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#DDBC7A]" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#DDBC7A]" checked />
                </div>
              </div>
            </div>
          </div>
          <div className='inline-block w-full md:w-1/2 lg:w-1/4 p-4'>
            <div className='bg-white p-4 shadow'>
              <button className="btn rounded-full border border-[#ddbc7a] bg-[#ddbc7a] p-3 float-end">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </button>
              <img src={dish} alt="dish" className='max-w-full' />
              <div>
                <p className='text-lg leading-7 mb-2 font-semibold text-[#101A24]'>
                  Mexican tacos with beef in tomato sauce and salsa.
                </p>
                <p className='text-base leading-6 mb-4 text-[#606060]'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
              <div className='flex flex-row justify-between items-center h-12'>
                <span className='text-[#101A24] font-bold text-2xl leading-7'>$29.99</span>
                <div className="rating rating-sm">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#DDBC7A]" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#DDBC7A]" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#DDBC7A]" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#DDBC7A]" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#DDBC7A]" checked />
                </div>
              </div>
            </div>
          </div>
          <div className='inline-block w-full md:w-1/2 lg:w-1/4 p-4'>
            <div className='bg-white p-4 shadow'>
              <button className="btn rounded-full border border-[#ddbc7a] bg-[#ddbc7a] p-3 float-end">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </button>
              <img src={dish} alt="dish" className='max-w-full' />
              <div>
                <p className='text-lg leading-7 mb-2 font-semibold text-[#101A24]'>
                  Mexican tacos with beef in tomato sauce and salsa.
                </p>
                <p className='text-base leading-6 mb-4 text-[#606060]'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
              <div className='flex flex-row justify-between items-center h-12'>
                <span className='text-[#101A24] font-bold text-2xl leading-7'>$29.99</span>
                <div className="rating rating-sm">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#DDBC7A]" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#DDBC7A]" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#DDBC7A]" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#DDBC7A]" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#DDBC7A]" checked />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialDish