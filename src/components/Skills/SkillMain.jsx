import React from 'react'
import SkillText from './SkillText'
import AllSkills from './AllSkills'
import AllSkillSM from './AllSkillSM'
import SubSkills from './SubSkills'

const SkillMain = () => {
  return (
    <div id='skills'>
        <div className='max-w-[1200px] px-4 mx-auto min-h-[550px] relative overflow-hidden'> 
            <SkillText/>
            <div className='sm:hidden md:hidden lg:block bottom-[10px] absolute left-[50%] -translate-x-[50%]'>
                <AllSkills/>
            </div>
            <div className='sm:block md:block lg:hidden'>
                <AllSkillSM/>
            </div>
           
        </div>
        
    </div>
  )
}

export default SkillMain