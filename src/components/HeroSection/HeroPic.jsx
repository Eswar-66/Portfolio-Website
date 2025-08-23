import React from 'react'
import { PiHexagonThin } from "react-icons/pi";



const HeroPic = () => {
  return (
    <div className='h-full flex items-center justify-center'>
        <img src='/images/HeroPic.png' alt="Eswar" className='lg:max-h-[350px] md:max-h-[250px] sm:max-h-[400px] w-auto' />
        <div className='absolute -z-10 flex justify-center items-center animate-pulse'>
            <PiHexagonThin className='md:h-[90%]  sm:h-[120%] lg:min-h-[450px] md:min-h-[300px] sm:min-h-[450px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]' />
        </div>
    </div>
  )
}

export default HeroPic