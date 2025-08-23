import React from 'react'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import SingleContactSocial from './SingleContactSocial';


const ContactSocial = () => {
  return (
    <div className='flex gap-4 -ml-29 -mt-5'>
        <SingleContactSocial link="#" Icon={FiGithub}/>
        <SingleContactSocial link="#" Icon={FaLinkedinIn}/>
    </div>
  )
}

export default ContactSocial