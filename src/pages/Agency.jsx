import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Agency = () => {
    const imageArray = [
        "/teamMembers/Carl_480x640.jpg",
        "/teamMembers/Olivier_480x640.jpg",
        "/teamMembers/ChantalG_480x640.jpg",
        "/teamMembers/Michele_480X640.jpg",
        "/teamMembers/MEL_480X640.jpg",
        "/teamMembers/CAMILLE_480X640_2.jpg",
        "/teamMembers/MEGGIE_480X640_2.jpg",
        "/teamMembers/joel_480X640_3.jpg",
        // "",
        // "",
        // "",
        // "",
        // "",
    ]
    gsap.registerPlugin(ScrollTrigger)
    const imageDiv = useRef(null)
    const imgRef = useRef(null)
    useGSAP(function () {
        gsap.to(imageDiv.current, {
            scrollTrigger: {
                trigger: imageDiv.current,
                start: "top 29%",
                end: "bottom -40%",
                scrub: 2,
                pin: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const index = Math.floor(progress * (imageArray.length - 1));
                    imgRef.current.src = imageArray[index];
                }
            },
        })
    })
    return (
        <>
            <div className='section1'>
                <div ref={imageDiv} className="absolute  top-[29vh] left-[30%] w-[15vw] rounded-3xl overflow-hidden">
                    <img ref={imgRef} className='w-full h-full object-cover ' src="/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
                </div>
                <div className='relative w-full h-full flex flex-col items-center font-[Lausanne-500]'>
                    <div className='min-h-[55vh] w-full'></div>
                    <h1 className='text-[20vw] leading-[17vw] text-center '>
                        SEVEN7Y <br />
                        TWO
                    </h1>
                    <div className='w-full mt-5 px-20'>
                        <p className="w-[60%] float-end text-6xl leading-none"><span className='pl-20'></span> We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
                    </div>
                </div>
            </div>
            <div className='section2 h-screen w-full'></div>


        </>
    )
}

export default Agency