import React from 'react';
import './header.css';
import CTA from './CTA';
// import HeaderSocials from './HeaderSocials';
// import * as Scroll from 'react-scroll';
import Me from '../../assets/me.png';

// const placeholderUrl = 'https://fakeimg.pl/300x370/2c2c6c/fff,255/?text=300x370&font_size=70';

/* eslint-disable */
const Header = () => {
  // let scroll    = Scroll.animateScroll;
  return (
    <header id='header'>
        <div className='container header__container'>
            <h5>Hello I'm</h5>
            <h1>Andrej Vaganov</h1>
            <h5 className='text-light'>Fullstack Developer</h5>
            <CTA />
            {/* <HeaderSocials /> */}

            <div className='me'>
              <img src={Me} alt='me' />
            </div>
            {/* <a onClick={() => scroll.scrollToBottom()} className='scroll__down'>Scroll Down</a> */}
        </div>
    </header>
  )
}

export default Header