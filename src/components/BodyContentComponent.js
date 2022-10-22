import { useState } from "react"
import {FaChevronDown } from "react-icons/fa"

export default function BodyContentComponent(){

    return(
        <div className="body-container ">
            <div id="HOME" className="home-container flex flex-col justify-center align-text-top w-full h-screen border  text-white px-10">
                <div className="home-content flex flex-col my-7 justify-center sm:items-center w-full  text-black">
                    <p className="text-7xl font-bold">Hello, I'm Matt</p>
                    <p className="font-light text-2xl">I'm a full-stack Developer</p>
                </div>
                <div className="chevron-down-animation flex justify-center items-center text-black  mt-20">
                    <a href="#ABOUT" className="flex flex-col justify-center items-center">
                        <p className="text-sm text-blue-500">See More</p>
                        <FaChevronDown className="text-2xl"/>
                    </a>
                </div>
                <span id="ABOUT" className="block "></span>
            </div>

            <div  className="home-container flex flex-col w-full border-y border-blue-500 text-white px-10 py-20">
                <div className="about-content-header flex justify-start items-center">
                    <p className="text-5xl font-bold text-black">Who's Matt?</p>
                    {/* <p className="text-5xl font-bold text-blue-500">
                        <span className="loader_dot">.</span>
                        <span className="loader_dot">.</span>
                        <span className="loader_dot">.</span>
                    </p> */}
                </div>
                <div className="about-content text-black mt-5">
                    <p className="mb-2 font-medium">I'm a graduate from Hunter College with a major in Computer science and minor in Media Web Development.</p>
                    <p className="mb-2 font-medium">I have experience as a Full-Stack Web Developer and work with languages like HTML, CSS, Javascript, Python, PHP and C++.</p>
                    <p className="mb-2 font-medium">{'I am always learning new languages & technologies like NetSuite, AWS as well as languages like Ruby'}</p>
                </div>

            </div>

            <div id="EXPERIENCE" className="home-container w-full h-screen border border-red-500 text-white">
                experience section
            </div>
        </div>
    )
}