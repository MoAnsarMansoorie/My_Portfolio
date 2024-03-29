import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href='https://linkedin.com' target='_blank' >
            <BsLinkedin />
        </a>
        <a href='https://github.com' target='_blank' >
            <FaGithub />
        </a>
        <a href='https://google.com' target='_blank' >
            <FcGoogle />
        </a>
    </div>
  )
}

export default HeaderSocial