import React from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'


const products=[
    {
        name: "Food Blog",
        align: "right",
        tools:"HTML,CSS,Javascript,ReactJS,NodeJS,ExpressJS (MERN)",
        image: "/images/FoodBlog.jpg",
        link: "https://foodblogfront.onrender.com/"
    },
    {
        name: "Portfolio Website",
        align: "left",
        tools:"HTML,CSS,Javascript,ReactJS,TailwindCSS",
        image: "/images/Portfolio.jpg",
        link: "#"
    },
    {
        name: "Educational Website",
        align: "right",
        tools:"HTML,CSS,Javascript,ReactJS",
        image: "/images/educadium.jpg",
        link: "https://educational-website-azure.vercel.app/"
    },
    {
        name: "Stay Inn Hostel Website (Freelancing)",
        align: "left",
        tools:"HTML,CSS,Javascript",
        image: "/images/StayInn.png",
        link: "https://stayinnhostel.netlify.app/"
    },
   
]

const ProjectMain = () => {
  return (
    <div id='projects'  className='max-w-[1200px] px-4 mx-auto'>
        <ProjectText/>
        <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12 '>
            {products.map((item,index)=>{
                return(
                    <SingleProject key={index} 
                    name={item.name}
                    tools={item.tools} 
                    align={item.align} 
                    image={item.image}
                    link={item.link} />
                )
            })}
           
        </div>
    </div>
  )
}

export default ProjectMain