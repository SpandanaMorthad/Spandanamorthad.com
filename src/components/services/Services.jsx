import React from 'react'
import './services.css'
import DBMS from '../../Assests/DBMS.png'

const Services = () => {
  return (
    <section id='services'className='services_w'>
      <h2>My Personal Projects</h2>
      <div className='services__box'>
      <div className='container services__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={DBMS} alt="" />
          </div>
          <h4>Telecommunication Management System</h4>
          <div className="portfolio__item-cta">
             <a href="https://github.com/SpandanaMorthad/Telecommunication-Management-System" className='btn' target='_blank'>Github</a>
          </div>
        </article>
      </div>
      </div>
    </section>
  )
}

export default Services