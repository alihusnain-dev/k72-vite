import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    useGSAP(() => {
        if (isOpen) {
            gsap.to(".mobile-menu", { height: "100vh", duration: 0.6, ease: "power4.inOut" })
            gsap.to(".mobile-link", { opacity: 1, y: 0, stagger: 0.1, delay: 0.3 })
        } else {
            gsap.to(".mobile-link", { opacity: 0, y: 20, stagger: 0.05 })
            gsap.to(".mobile-menu", { height: 0, duration: 0.6, ease: "power4.inOut" })
        }
    }, [isOpen])

    return (
        <div className='fixed top-0 left-0 w-full z-50'>
            <div className="flex items-start justify-between w-full h-full relative z-50">
                <Link to="/" className='p-4 mix-blend-difference'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="34" viewBox="0 0 103 44" className='md:w-[103px] md:h-[44px]'>
                        <path fill="white" fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg>
                </Link>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex max-w-[150px] md:max-w-[250px] w-full h-12 md:h-14 bg-black group relative cursor-pointer outline-none"
                >
                    <div className="absolute top-0 left-0 w-full h-0 group-hover:h-full transition-all duration-300 ease-in-out bg-primary"></div>
                    <div className="w-full h-full flex flex-col items-end justify-center gap-1.5 pr-6 md:pr-10 z-10">
                        <span className={`h-[2px] w-12 md:w-20 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[8px] md:translate-y-[10px] bg-black' : 'group-hover:bg-black'}`}></span>
                        <span className={`h-[2px] w-8 md:w-15 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[0px] bg-black' : 'group-hover:bg-black'}`}></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className="mobile-menu fixed top-0 left-0 w-full h-0 bg-black overflow-hidden z-40 flex flex-col items-center justify-center gap-8">
                <Link onClick={() => setIsOpen(false)} to="/" className="mobile-link text-white text-4xl md:text-6xl font-medium uppercase opacity-0 translate-y-5 hover:text-primary transition-colors">Home</Link>
                <Link onClick={() => setIsOpen(false)} to="/agency" className="mobile-link text-white text-4xl md:text-6xl font-medium uppercase opacity-0 translate-y-5 hover:text-primary transition-colors">Agency</Link>
                <Link onClick={() => setIsOpen(false)} to="/projects" className="mobile-link text-white text-4xl md:text-6xl font-medium uppercase opacity-0 translate-y-5 hover:text-primary transition-colors">Projects</Link>
            </div>
        </div>
    )
}

export default Navbar