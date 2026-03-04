import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const Projects = () => {
    const projectImages = [
        "/caseStudies/chalaxeur.jpg",
        "/caseStudies/Fruite-bbq.jpg",
        "/caseStudies/iA_brand.jpg",
        "/caseStudies/opto.jpg",
        "/caseStudies/PJC_SiteK72.jpg",
    ]

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.from(".box", {
            height: "350px",
            ease: "none",
            scrollTrigger: {
                trigger: ".box",
                start: "top 70%",
                end: "bottom 70%",
                scrub: 2,
            }
        })
    })
    return (
        <div className='p-4'>
            <div className="mt-[40vh] flex">

                <h1 className='text-[10vw] font-medium uppercase'>Projects</h1> <p className='pt-[6%] pl-[1%] md:text-2xl'>{projectImages.length}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full min-h-screen -mt-10">
                <div className="box bg-amber-700 w-full h-[750px] overflow-hidden hover:rounded-4xl transition-all duration-300 ease-in-out cursor-pointer ease">
                    <img src="/caseStudies/chalaxeur.jpg" alt="" className='w-full h-full object-cover' />

                </div>
                <div className="box bg-amber-700 w-full h-[750px] overflow-hidden hover:rounded-4xl transition-all duration-300 ease-in-out cursor-pointer ease">
                    <img src="/caseStudies/Fruite-bbq.jpg" alt="" className='w-full h-full object-cover' />

                </div>

            </div>
        </div>
    )
}

export default Projects