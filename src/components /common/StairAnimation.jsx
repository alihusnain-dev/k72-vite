import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const StairAnimation = () => {
    const stairRef = useRef(null)
    useGSAP(function () {
        const tl = gsap.timeline()
        tl.from(stairRef.current, {
            display: "block",
        })
        tl.from(".stair", {
            height: "0",
            stagger: {
                amount: -0.25,
            }
        })
        tl.to(".stair", {
            y: "100%",
            stagger: {
                amount: -0.25,
            }
        })
        tl.to(stairRef.current, {
            display: "none",
        })

    })
    return (
        <div ref={stairRef} className='w-screen h-screen z-10 fixed top-0 left-0'>
            <div className="w-full h-full flex">
                <div className="stair w-full h-full bg-black 1/5"></div>
                <div className="stair w-full h-full bg-black 1/5"></div>
                <div className="stair w-full h-full bg-black 1/5"></div>
                <div className="stair w-full h-full bg-black 1/5"></div>
                <div className="stair w-full h-full bg-black 1/5"></div>
            </div>
        </div>
    )
}

export default StairAnimation