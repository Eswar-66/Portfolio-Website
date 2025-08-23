import React from 'react'
import { Link } from 'react-scroll'

const AboutText = () => {

  
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center '>
        <h1 className='text-6xl uppercase text-cyan mb-10'>About Me</h1>
        <p className='text-white '>Hi I'm Eswar.! I'm a passionate and detail-oriented Full Stack Developer with a strong foundation in both front-end and back-end technologies. I specialize in building dynamic, responsive web applications that deliver seamless user experiences.With a solid grasp of HTML, CSS, and JavaScript, I craft clean, user-friendly interfaces using React.js and modern styling tools like Tailwind CSS. On the backend, I develop robust APIs and server-side logic with Node.js, Express.js, and Java.I enjoy turning ideas into reality through code, and I’m always eager to learn new technologies, solve complex problems, and collaborate on meaningful projects.</p>
        <Link to="projects" smooth={true} spy={true} duration={500} offset={-130} className='cursor-pointer text-white hover:text-cyan transition-all duration-500'>
         <button className='bg-amber-400 border-4 border-white rounded-full mt-5 py-2 px-4 cursor-pointer hover:bg-amber-300 active:bg-amber-600 transition-all duration-400 md:self-start sm:self-center'>My Projects</button>
        </Link>
       
    </div>
  )
}

export default AboutText