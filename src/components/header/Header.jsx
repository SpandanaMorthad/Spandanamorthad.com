import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from "..//../Assests/Spandana1.png"
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <section className='header_section'>
      <div id = "Header_cont" className="header__container">
        <div className='header_cards'>
        <article className='Introduction' id='Introduction'>
         <h4 className= "Hello">Hello I'm</h4>
          <h1 className= "Rahul" >Spandana Morthad</h1>
         <h5 className="text-light" id='Description'>Software Engineer | Business Analyst | Data Engineer | Data Analyst</h5>
            <p>As a Software Engineer at Flightsafety International, I currently develop data integration strategies, streamline data pipelines, and maintain interactive Power BI dashboards to enhance operational efficiency. With over 4 years of experience in the Financial and Retail sectors, I specialize in online banking, mortgages, and loans, consistently delivering impactful data-driven solutions.
               <br/><br/>I hold a Master's degree in Computer Sciences from the University of Central Missouri, graduating with a CGPA of 3.55. I am adept in data analysis and visualization using Tableau and Power BI, and have extensive experience with ETL tools such as SSIS, Azure Data Factory, and Azure Databricks. My commitment to ensuring data quality and integrity, combined with my ability to optimize SQL queries and design efficient ETL workflows, underscores my capability to drive data-driven decision-making and operational excellence.</p>
          <CTA />
        </article>
        <article id='socialPhoto'>
        <div className="me">
          <img src={ME} className="spandana" alt="me" />
        </div>
        <HeaderSocial />
        </article>
        </div>
        </div>
      </section>
    </header>
  )
}

export default Header