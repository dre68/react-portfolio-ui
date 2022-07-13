import React from 'react';
import './portfolio.css';
import PortfolioData from './PortfolioData';

const {data} = PortfolioData();

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, imageUrl, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={imageUrl} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  {github && ( <a href={github} className='btn' target={'_blank'} rel='noreferrer'>Github</a> )}
                  {demo && ( <a href={demo} className='btn btn-primary' target={'_blank'} rel='noreferrer'>Live Demo</a> )}
                </div>
              </article>
            )
            })
        }
      </div>
    </section>
  )
}

export default Portfolio