import React from 'react';
import hgLogo from '../../assets/hg_logo.png';
import reweLogo from '../../assets/rewe_center_logo.png';
import './testimonial.css';

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatarUrl: hgLogo,
    name: 'Alexander Springer - CTO',
    review: ` I have worked closely with Andrej Vaganov and therefore it is my special pleasure to recommend him to all interested parties.
              He was professional, comprehensive and competent during the whole process of our cooperation.
              I hereby thank Andrej Vaganov for all his hard support.`    
  },
  {
    avatarUrl: reweLogo,
    name: 'Max Kruse - Assistant Store Manager',
    review: ` I was very satisfied with Mr. Vaganov's work across the board.
              I particularly appreciated his initiative and problem-solving approach.
              From a professional point of view, he was an extremely valuable member and always stood by his colleagues. Many thanks Mr. Vaganov! `    
  }
]


const Testimonial = () => {  
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}      
      pagination={{ clickable: true }}>
        {
          data.map(({avatarUrl, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatarUrl} alt='Client'/>            
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial