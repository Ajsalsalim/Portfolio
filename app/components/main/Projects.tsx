import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20' id="projects">
         <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/jobgenie.png"
          title="Service Booking Application"
          description="customer can login and search for particular proffesion and location and book the sevice"
        />
         <ProjectCard
          src="/newjersey.png"
          title="Ecommerce Application"
          description="Customer can buy the product, admin can manage the products especially the product's stock and price"
        />
       
      </div>

      
    </div>
  )
}

export default Projects
