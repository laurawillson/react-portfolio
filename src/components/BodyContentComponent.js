import { useState } from "react"
import profileImage from '../img/Laura_Willson_Resume.pdf';
import {FaChevronDown } from "react-icons/fa"
import ThumbnailLinkComponent from "./ThumbnailLinkComponent";
import ContactComponent from "./ContactComponent"
import PizzaAppProcessImage from '../img/I_Want_A_Pizza_That.png';
import CleanUp_UX_Design from '../img/CleanUp_UX_Design.png';
export default function BodyContentComponent(){

    return(
        <div className="body-container bg-red-200">
            <div id="HOME" className="home-container flex flex-col justify-center align-text-top w-full h-screen   text-white px-10">
                <div className="home-content flex flex-col my-7 justify-center sm:items-center w-full  text-black">
                    <p className="text-5xl font-bold">Hello, I'm Laura!</p>
                    <p className="font-light text-4xl">I'm a UI Designer.</p>
                </div>
                <div className="chevron-down-animation flex justify-center items-center text-black  mt-20">
                    <a href="#PORTFOLIO" className="flex flex-col justify-center items-center">
                        <p className="text-sm text-blue-500">Portfolio</p>
                        <FaChevronDown className="text-2xl"/>
                    </a>
                </div>
            </div>
            <div id="PORTFOLIO" className="home-container flex flex-col w-full pt-20  text-black mt-5">
                        <ThumbnailLinkComponent
                            project_title={"I Want A Pizza That!"}
                            hashtags={["Process", "Design", "Outcome", "UI/UX Design"]}
                            image_path={PizzaAppProcessImage}
                            href_link={"https://www.figma.com/proto/bULPVwztxaPCkIFfbtB00T/I-Want-A-Pizza-That!?node-id=3768%3A12&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3768%3A12"}
                            overlay_text={"Click to see my project"}
                        />
                        <ThumbnailLinkComponent
                            project_title={"CleanUp"}
                            image_path={CleanUp_UX_Design}
                            hashtags={["Process", "Design", "Outcome", "UX Design"]}
                            href_link={"https://www.figma.com/proto/Ocl2dznvE1Ljr1wmDfHCte/CleanUp-Project?node-id=2%3A4&scaling=contain&page-id=0%3A1&starting-point-node-id=2%3A4"}
                            overlay_text={"Click to see my project"}
                        />
                <div className="chevron-down-animation flex justify-center items-center text-black  mt-20">
                    <a href="#RESUME" className="flex flex-col justify-center items-center">
                        <p className="text-sm text-blue-500">Resume</p>
                        <FaChevronDown className="text-2xl"/>
                    </a>
                </div>
            </div>

            <div id="RESUME" className="home-container flex flex-col w-full h-auto pt-70  text-black mt-5">
                <embed src={profileImage} type="application/pdf" width="100%" height="800px" zoom="70" />
                <div className="chevron-down-animation flex justify-center items-center text-black  mt-20">
                    <a href="#CONTACT" className="flex flex-col justify-center items-center">
                        <p className="text-sm text-blue-500">Contact</p>
                        <FaChevronDown className="text-2xl"/>
                    </a>
                </div>
            </div>

            <div id="CONTACT" className="home-container flex flex-col w-full h-screen pt-96  text-black mt-5">
                <div className="skills-content-header flex flex-col justify-start items-center">
                    <p className="mb-2 font-medium">Contact Me</p>
                    <ContactComponent/>
                </div>
            </div>
        </div>
    )
}