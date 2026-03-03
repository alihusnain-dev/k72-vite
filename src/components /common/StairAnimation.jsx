import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'

const StairAnimation = ({ children }) => {
    const { pathname } = useLocation()
    const stairRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline()

        // reset state for each route change
        tl.set(stairRef.current, { display: "block" })
        tl.set(".stair", { y: "0%", height: "0%" })

        // 1. reveal: grow height to fill screen
        tl.to(".stair", {
            height: "100%",
            stagger: {
                amount: 0.4,
                from: "start"
            },
            ease: "power2.inOut"
        })

        // 2. exit: move downwards out of screen
        tl.to(".stair", {
            y: "100%",
            stagger: {
                amount: 0.4,
                from: "start"
            },
            ease: "power2.inOut"
        })

        // hide the container so it doesn't block interactions
        tl.set(stairRef.current, { display: "none" })

    }, { dependencies: [pathname], scope: stairRef })

    return (
        <>
            <div ref={stairRef} className='w-screen h-screen z-9999 fixed top-0 left-0 pointer-events-none'>
                <div className="w-full h-full flex">
                    <div className="stair w-1/5 h-full bg-black"></div>
                    <div className="stair w-1/5 h-full bg-black"></div>
                    <div className="stair w-1/5 h-full bg-black"></div>
                    <div className="stair w-1/5 h-full bg-black"></div>
                    <div className="stair w-1/5 h-full bg-black"></div>
                </div>
            </div>
            {children}
        </>
    )
}

export default StairAnimation