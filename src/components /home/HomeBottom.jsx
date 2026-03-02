import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottom = () => {
    return (
        <div className='py-4 w-full flex justify-center items-center gap-5 text-[6vw] uppercase font-medium'>
            <Link to="/projects" className='leading-none border-3 border-white rounded-full px-8 pb-2 hover:text-[#D3FD50] hover:border-[#D3FD50]'>Projects</Link>
            <Link to="/agency" className='leading-none border-3 border-white rounded-full px-8 pb-2 hover:text-[#D3FD50] hover:border-[#D3FD50]'>Agency</Link>
        </div>
    )
}

export default HomeBottom