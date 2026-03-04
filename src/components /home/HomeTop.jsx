import React from 'react'
import Video from './Video'

const HomeTop = () => {
    return (
        <div className='font-[Lausanne-300] text-[15vw] md:text-[9.5vw] leading-[12vw] md:leading-[7.5vw] text-center pt-10 md:pt-5 uppercase px-4'>
            <div className="">
                The spark for
            </div>
            <div className="flex items-center justify-center flex-wrap gap-2">
                all
                <div className="h-[8vh] md:h-[9.5vh] w-[20vw] md:w-[10vw] inline-block overflow-hidden rounded-full self-center">
                    <Video />
                </div>
                things
            </div>
            <div className="">creative</div>
        </div>
    )
}

export default HomeTop