import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Agency = () => {
    const imageArray = [
        "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7",
        "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64",
        "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991",
        "https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2",
        "https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6",
        "https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a",
        "https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847",
        "https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6",
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
                    <img ref={imgRef} className='w-full h-full object-cover ' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
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