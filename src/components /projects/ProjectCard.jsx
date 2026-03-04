import React from 'react'

const ProjectCard = (img) => {
    return (
        <div className="box bg-amber-700 w-full h-[750px] overflow-hidden hover:rounded-4xl transition-all duration-300 ease-in-out cursor-pointer ease">
            <img src={img} alt="" className='w-full h-full object-cover' />

        </div>
    )
}

export default ProjectCard