import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaSquareGithub} from 'react-icons/fa6'
import { FaSquareInstagram } from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/spandana-morthad-a93402254/" target='_blank'><AiFillLinkedin size={40}/></a>
        <a href="https://github.com/SpandanaMorthad?tab=repositories" target='_blank'><FaSquareGithub size={40}/></a>
        <a href="https://www.instagram.com/spandana_lilly/" target='_blank'><FaSquareInstagram size={40}/></a>
    </div>
  )
}

export default HeaderSocials