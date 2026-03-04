import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottom = () => {
    return (
        <div className='py-8 md:py-4 w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-5 text-[10vw] md:text-[6vw] uppercase font-medium'>
            <Link to="/projects" className='leading-none border-2 md:border-3 border-white rounded-full px-12 md:px-8 py-3 md:py-0 md:pb-2 hover:text-primary hover:border-primary transition-colors'>Projects</Link>
            <Link to="/agency" className='leading-none border-2 md:border-3 border-white rounded-full px-12 md:px-8 py-3 md:py-0 md:pb-2 hover:text-primary hover:border-primary transition-colors'>Agency</Link>
        </div>
    )
}

export default HomeBottom