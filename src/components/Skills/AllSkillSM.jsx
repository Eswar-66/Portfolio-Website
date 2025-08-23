import React from 'react'

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import SingleSkill from './SingleSkill';



const skills=[
    {
    skill:"HTML",
    icon: FaHtml5
    },
    {
        skill:"CSS",
        icon: FaCss3Alt
    },
    {
        skill:"JavaScript",
        icon: IoLogoJavascript
    },
    {
        skill:"ReactJS",
        icon: FaReact
    },
    {
        skill:"Redux",
        icon: SiRedux
    },
    {
        skill:"TailwindCss",
        icon: RiTailwindCssFill
    },
    {
        skill:"NodeJS",
        icon: FaNodeJs
    },
    {
        skill:"ExpressJS",
        icon: SiExpress
    },
    {
        skill:"Java",
        icon: FaJava
    },

]

const AllSkillSM = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
        {skills.map((item,index)=>{
            return(
                    <div key={index} className='flex flex-col items-center'>
                        <item.icon className='text-7xl text-orange'/>
                        <p className='text-center text-white mt-4'>{item.skill}</p>
                    </div>
            )
        })}
    </div>
  )
}

export default AllSkillSM