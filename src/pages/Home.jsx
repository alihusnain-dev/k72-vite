import React from 'react'
import Video from '../components /home/Video'
import HomeBottom from '../components /home/HomeBottom'
import HomeTop from '../components /home/HomeTop'

const Home = () => {
    return (
        <>
            <div className='w-screen h-screen fixed top-0 left-0'>
                <Video />
            </div>
            <div className='w-screen h-screen relative flex justify-between  flex-col items-center'>
                <HomeTop />
                <HomeBottom />
            </div>
        </>
    )
}

export default Home