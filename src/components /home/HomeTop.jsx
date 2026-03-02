import React from 'react'
import Video from './Video'

const HomeTop = () => {
    return (
        <div className='font-[Lausanne-300] text-[9.5vw] leading-[7.5vw] text-center pt-5 uppercase'>
            <div className="">
                The spark for
            </div>
            <div className="flex items-start
             justify-center">all <div className="h-[9.5vh] w-[10vw]  inline-block overflow-hidden rounded-full"><Video /> </div> things</div>
            <div className="">creative</div>
        </div>
    )
}

export default HomeTop