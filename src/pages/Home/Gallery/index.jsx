import React from 'react'
import img1 from "../../../assets/images/gallary/img-1.png"
import img2 from "../../../assets/images/gallary/img-2.png"
import img3 from "../../../assets/images/gallary/img-3.png"
import img4 from "../../../assets/images/gallary/img-4.png"
import img5 from "../../../assets/images/gallary/img-5.png"
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.scss';

const Gallery = () => {
  return (
    <div className='my-5 text-center'>
      <div className=''>
        <div className='relative mb-4'>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {[img1, img2, img3, img4, img5].map((img, index) => {
              return (
                <SwiperSlide className='max-h-80 w-72 relative group'>
                  <div className='absolute p-7 border bg-transparent group-hover:bg-[#00000091] w-full h-full transition-all'>
                      <div className='border-0 h-full flex group-hover:border group-hover:border-[#ddbc7a]'>
                        <div className='m-auto hidden group-hover:block text-center'>
                          <svg width="22" height="22" viewBox="0 0 22 22" className='mx-auto' fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0078 5.58594C13.9609 5.58594 16.3984 8.02344 16.3984 10.9766C16.3984 13.9766 13.9609 16.3672 11.0078 16.3672C8.00781 16.3672 5.61719 13.9766 5.61719 10.9766C5.61719 8.02344 8.00781 5.58594 11.0078 5.58594ZM11.0078 14.4922C12.9297 14.4922 14.4766 12.9453 14.4766 10.9766C14.4766 9.05469 12.9297 7.50781 11.0078 7.50781C9.03906 7.50781 7.49219 9.05469 7.49219 10.9766C7.49219 12.9453 9.08594 14.4922 11.0078 14.4922ZM17.8516 5.39844C17.8516 6.10156 17.2891 6.66406 16.5859 6.66406C15.8828 6.66406 15.3203 6.10156 15.3203 5.39844C15.3203 4.69531 15.8828 4.13281 16.5859 4.13281C17.2891 4.13281 17.8516 4.69531 17.8516 5.39844ZM21.4141 6.66406C21.5078 8.39844 21.5078 13.6016 21.4141 15.3359C21.3203 17.0234 20.9453 18.4766 19.7266 19.7422C18.5078 20.9609 17.0078 21.3359 15.3203 21.4297C13.5859 21.5234 8.38281 21.5234 6.64844 21.4297C4.96094 21.3359 3.50781 20.9609 2.24219 19.7422C1.02344 18.4766 0.648438 17.0234 0.554688 15.3359C0.460938 13.6016 0.460938 8.39844 0.554688 6.66406C0.648438 4.97656 1.02344 3.47656 2.24219 2.25781C3.50781 1.03906 4.96094 0.664062 6.64844 0.570312C8.38281 0.476562 13.5859 0.476562 15.3203 0.570312C17.0078 0.664062 18.5078 1.03906 19.7266 2.25781C20.9453 3.47656 21.3203 4.97656 21.4141 6.66406ZM19.1641 17.1641C19.7266 15.8047 19.5859 12.5234 19.5859 10.9766C19.5859 9.47656 19.7266 6.19531 19.1641 4.78906C18.7891 3.89844 18.0859 3.14844 17.1953 2.82031C15.7891 2.25781 12.5078 2.39844 11.0078 2.39844C9.46094 2.39844 6.17969 2.25781 4.82031 2.82031C3.88281 3.19531 3.17969 3.89844 2.80469 4.78906C2.24219 6.19531 2.38281 9.47656 2.38281 10.9766C2.38281 12.5234 2.24219 15.8047 2.80469 17.1641C3.17969 18.1016 3.88281 18.8047 4.82031 19.1797C6.17969 19.7422 9.46094 19.6016 11.0078 19.6016C12.5078 19.6016 15.7891 19.7422 17.1953 19.1797C18.0859 18.8047 18.8359 18.1016 19.1641 17.1641Z" fill="white"></path>
                          </svg>
                          <p className='text-white'>@GV_Restaurant</p>
                        </div>
                      </div>
                    </div>
                  <img src={img} className='h-full' />
                </SwiperSlide>
              )
            })}
          </Swiper>

        </div>
      </div>
      <div className='text-center'>
        <button className='btn bg-[#ddbc7a]'>Load More</button>
      </div>
    </div>
  )
}

export default Gallery