import React from 'react'
import HeroText from './HeroText'
import HeroPic from './HeroPic'

const HeroMain = () => {
  return (
   <div className='pt-50 pb-16'>
        <div className='flex md:flex-row sm:flex-col  lg:max-w-[1050px]  md:max-w-[900px] mx-auto justify-between items-center relative px-4"'>
            <HeroText/>
            <HeroPic/>
        </div> 
   </div>
  )
}

export default HeroMain