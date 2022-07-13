import React from 'react';
import {BsLinkedin} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href='https://xing.com' target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href='https://google.com' target='_blank' rel="noreferrer"><BsLinkedin /></a>
    </div>
  )
}

export default HeaderSocials