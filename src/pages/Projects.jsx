
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
        <div className='p-4'>
            <div className="mt-[40vh] flex">

                <h1 className='text-[10vw] font-medium uppercase'>Projects</h1> <p className='pt-[6%] pl-[1%] md:text-2xl'>{projectImages.length}</p>
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