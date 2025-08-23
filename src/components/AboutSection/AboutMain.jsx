import React from 'react'
import AboutText from './AboutText'
import AboutImg from './AboutImg'

const AboutMain = () => {
  return (
    <div id='about' className='flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center'>
        <div><AboutText/></div>
        <div>  <AboutImg/></div>
        
      
    </div>
  )
}

export default AboutMain