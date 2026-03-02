import React from 'react'

const Agency = () => {
    return (
        <>
            <div className="fixed top-[20%] left-[40%]">
                <img className='w-[' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
            </div>
            <div className='w-full h-full flex flex-col items-center font-[Lausanne-500] bg-white text-black '>
                <div className='min-h-[59vh] w-full'></div>
                <h1 className='text-[20vw] leading-[17vw] text-center '>
                    SEVEN7Y <br />
                    TWO
                </h1>
                <div className='w-full mt-5 px-20'>
                    <p className="w-[60%] float-end text-6xl leading-none"><span className='pl-20'></span> We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
                </div>
            </div>
        </>
    )
}

export default Agency