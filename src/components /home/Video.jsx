import React from 'react'

const Video = () => {
    return (
        <div className='w-full h-full'>
            <video src='/videos/HomeHero.mp4' autoPlay loop muted className='w-full h-full object-cover' />
        </div>
    )
}

export default Video