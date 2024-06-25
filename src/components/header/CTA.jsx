import React from 'react'
import ME from '../../Assests/Spandana_BA_Resume.docx'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={ME} downlaod className='btn' >Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Connect</a>
    </div>
  )
}

export default CTA