import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import Singleinfo from './Singleinfo';


const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white '>
        <Singleinfo text="eswarkathir66@gmail.com" Image={HiOutlineMail} />
        <Singleinfo text="Chennai" Image={IoLocationOutline} />
        
    </div>
  )
}

export default ContactInfo