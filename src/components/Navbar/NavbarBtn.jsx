import React from 'react'
import { LuArrowDownRight } from 'react-icons/lu'
import { Link } from 'react-scroll'

const NavbarBtn = () => {
  return (
    <Link to='contact'>
    <button className='px-4 py-2 rounded-full text-xl font-bold border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:scale-110 transistion-all duration-400 cursor-pointer hover:border-orange hover:shadow-cyanShadow text-white'>
      Hire me <LuArrowDownRight/>
    </button>
    </Link>
  )
}

export default NavbarBtn