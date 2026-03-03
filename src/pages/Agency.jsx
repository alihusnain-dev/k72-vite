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
    ]
    gsap.registerPlugin(ScrollTrigger)
    const imageDiv = useRef(null)
    const agencyBody = useRef(null)
    const section3 = useRef(null)
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

        gsap.to(section3.current, {
            scrollTrigger: {
                trigger: section3.current,
                start: "top 90%",
                end: "bottom 90%",
                scrub: 2,
                onToggle: (self) => {
                    agencyBody.current.style.backgroundColor = self.isActive ? "black" : "white"
                    agencyBody.current.style.color = self.isActive ? "white" : "black"
                }
            },
        })

    })
    return (
        <div ref={agencyBody} className='transition-all duration-1000 ease'>
            <div className='section1'>
                <div ref={imageDiv} className="absolute  top-[29vh] left-[30%] w-[15vw] rounded-3xl overflow-hidden">
                    <img ref={imgRef} className='w-full h-full object-cover ' src="/teamMembers/Carl_480x640.jpg" alt="" />
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
            <div className='section2 my-32 md:my-42 lg:my-52 h-full w-screen flex flex-col lg:flex-row px-10 md:px-20 lg:px-32 gap-4 font-medium md:text-xl'>

                <div className="w-full lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className='h-30 md:h-52 lg:h-72 w-full'>Expertises</div>
                    <div className='h-30 md:h-52 lg:h-72 w-full'>
                        Strategy <br />
                        Advertising <br />
                        Creative <br />
                        Content <br />
                        Production <br />
                    </div>
                    <div className='h-30 md:h-52 lg:h-72 w-full'></div>
                    <div className='h-30 md:h-52 lg:h-72 w-full'>Our Work_ Born in curiosity, raised by dedication and fed with a steady diet of creativity.</div>
                    <div className='h-30 md:h-52 lg:h-72 w-full'>Our Creative_ Simmering in an environment where talent can come to a full boil. Encouraged to become the best versions of ourselves.</div>
                    <div className='h-30 md:h-52 lg:h-72 w-full'>
                        Our Culture_ We’re open to each other. Period. The team works together to create a space that makes us proud.

                    </div>
                </div>
            </div>
            <div ref={section3} className="section-3 h-screen my-32 md:my-42 lg:my-52 w-full border border-white ">
                <div className='relative w-full h-screen'>
                    <marquee behavior="smooth" direction="" scrollamount={50} className='text-[20vw] leading-[17vw] text-center '>
                        BÉATRICE</marquee>

                </div>
                {/* ROUSSIN
Strategist */}
            </div>


        </div>
    )
}

export default Agency