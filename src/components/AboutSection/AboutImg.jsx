import React from 'react'

const AboutImg = () => {
  return (
    <div className='h-[500px] w-[300px] relative'>
        <div className='h-[500px] w-[300px] rounded-[100px] overflow-hidden'>
            <img src="/images/about-me.jpg" alt="Aboutme-img" className='h-full w-auto object-cover' />
        </div>
        <div className='h-[500px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-tl-[20px] rounded-br-[20px] -z-10'></div>
    </div>

  )
}

export default AboutImg