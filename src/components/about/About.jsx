import React from 'react';
import './about.css';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import Me from '../../assets/me_profile.png';

// const imgUrl = 'https://fakeimg.pl/500x500/2c2c6c/fff,255/?text=500x500&font_size=70'; //Placeholder

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Me} alt='Me' />
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>5+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>8+ Completed</small>
            </article>
          </div>
          <p>
            I am a 35 year old software developer with focus on MS Office 365 and front end development.
            In 2016 a friend invited me to help him develop a website and I quickly realized that I more than enjoy creating things that live on the internet.            
            As a SharePoint Consultant I got to know the fascinating world of O365 and inspired my customers, 
            both as an employee and as an independent developer, mainly with solutions in the areas of SharePoint, Power Apps, Power Automate and ReactJS.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>        
      </div>
    </section>    
  )
}

export default About