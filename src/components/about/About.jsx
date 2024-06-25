import React from 'react'
import './About.css'
import {PiStudentFill} from 'react-icons/pi'
import {HiComputerDesktop} from 'react-icons/hi2'
import {FaUserGraduate} from 'react-icons/fa'
import ME from '../../Assests/Spandana2.png'

const About = () => {
  return (
    <section className='about' id='about'>
      <h5 className='getToKnow'>Get To Know</h5>
      <h2 className='AboutMe'>About Me</h2>
      <img src={ME} alt="me" className='rahul' />
      <div className="container about__container">
          <div className="about__cards">
            <article className='about__card'>
            <br />
              <PiStudentFill className='about__experience__icon'/>
              <h5>Masters</h5>
              <small>Jan 2022 - May 2023<br/>
 Masters in Computer Sciences <br/> University of Central Missouri, Missouri, United States</small>
            </article>
            <article className='about__card'>
            <br />
              <HiComputerDesktop className='about__experience__icon'/>
              <h5>Software Engineer</h5>
              <small>Apr 2023 - Present <br/>
              Flightsafety International <br/>
              Texas, USA</small>
            </article>
          </div>
          <div className="about__cards">
            <article className='about__card'>
              <br />
              <FaUserGraduate className='about__experience__icon'/>
              <h5>Under Graduation</h5>
              <small>Aug 2016 - Sep 2020 <br/>
              Bachelors in Electronics and Communication Engineering <br/>MVSR College of Engineering <br/>Hyderabad, India</small>
            </article>
            <article className='about__card'>
            <br />
              <HiComputerDesktop className='about__experience__icon'/>
              <h5>Software Engineer</h5>
              <small> Feb 2022 - Apr 2023 <br /> Centene <br/>
              Seattle, USA </small>
            </article>
          </div>
          <article className='cisco about__card'>
            <br />
              <HiComputerDesktop className='about__experience__icon'/>
              <h5>Software Engineer</h5>
              <small> Feb 2020 - Nov 2021 <br /> Cisco <br/>
              California, USA </small>
            </article>
      </div>
    </section>
  )
}

export default About