import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const ProjectCard = (props) => {
    const boxRef = useRef(null)

    useGSAP(() => {
        gsap.from(boxRef.current, {
            height: window.innerWidth < 768 ? "200px" : "350px",
            ease: "none",
            scrollTrigger: {
                trigger: boxRef.current,
                start: "top 95%",
                end: "top 50%",
                scrub: 2,
            }
        })
    }, { scope: boxRef })

    return (
        <div
            ref={boxRef}
            className="box bg-neutral-800 w-full h-[400px] md:h-[750px] overflow-hidden hover:rounded-3xl md:hover:rounded-[2vw] transition-all duration-300 ease-in-out cursor-pointer"
        >
            <img src={props.img} alt="" className='w-full h-full object-cover' />
        </div>
    )
}

export default ProjectCard