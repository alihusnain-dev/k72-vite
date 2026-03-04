
import React from 'react'
import ProjectCard from '../components /projects/ProjectCard'

const Projects = () => {
    const projectImages = [
        "/caseStudies/chalaxeur.jpg",
        "/caseStudies/Fruite-bbq.jpg",
        "/caseStudies/iA_brand.png",
        "/caseStudies/opto.jpg",
        "/caseStudies/PJC_SiteK72.jpg",
    ]


    return (
        <div className='p-6 md:p-10'>
            <div className="mt-[20vh] md:mt-[40vh] flex flex-col md:flex-row items-baseline gap-2 md:gap-4">
                <h1 className='text-[15vw] md:text-[10vw] font-bold uppercase leading-none'>Projects</h1>
                <p className='text-xl md:text-3xl font-medium text-neutral-400'>({projectImages.length})</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full min-h-screen -mt-10">
                {projectImages.map((img, index) => (
                    <ProjectCard key={index} img={img} />
                ))}

            </div>
        </div>
    )
}

export default Projects