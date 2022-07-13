import React from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { Link } from "react-scroll";

const Nav = () => {
  
  return (    
    <nav>     
      <Link activeClass="active" spy to="header">
        <AiOutlineHome />
      </Link>
      <Link activeClass="active" spy to="about">
        <AiOutlineUser />
      </Link>
      <Link activeClass="active" spy to="experience" >
        <BiBook />
      </Link>
      <Link activeClass="active" spy to="myservices" >
        <RiServiceLine />
      </Link>      
      <Link activeClass="active" spy to="contact">
        <BiMessageSquareDetail />
      </Link>
    </nav>
  )
}

export default Nav