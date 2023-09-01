import { useState } from "react"
import profileImage from '../img/Laura_Willson_UX_Designer_Resume.pdf';
import {FaChevronDown } from "react-icons/fa"
import ThumbnailLinkComponent from "./ThumbnailLinkComponent";
import ContactComponent from "./ContactComponent"
import Kikori_UX_Design from '../img/Kikori_Homepage.png';
import Paella_Land_UX from '../img/Paella_Land.png';
import PizzaApp from '../img/I_Want_A_Pizza_That.png';
import Resume from '../img/Resume.png';
export default function BodyContentComponent(){

    return(
        <div className="body-container bg-red-200 overflow-x-hidden">
            <div id="PROJECTS" className="home-container flex flex-col w-full  text-black mt-5">
            <div id="HOME" className="home-container flex flex-col justify-center align-text-top pt-32 text-white px-10">
                <div className="home-content flex flex-col my-7 justify-center sm:items-center w-full  text-black">
                    <p className="text-5xl font-bold">Hello, I'm Laura!</p>
                    <br></br>
                    <p className="font-light text-2xl">I'm a UX Designer passionate about understanding users' needs and inclusive design.</p>
                </div>
            </div>
                        
                        <ThumbnailLinkComponent
                            project_title={"Kikori"}
                            image_path={Kikori_UX_Design}
                            hashtags={["UX Design", "User Research", "User Testing", "Sketching", "Information Architecture", "User Personas", "Wireframing", "Prototyping"]}
                            href_link={"https://www.figma.com/proto/fsSGjzMdGHQuxf4yz4cpyZ/Kikori-Case-Study?type=design&node-id=2-10&t=PH9SDGpfo4r7RD3p-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A10&mode=design"}
                            overlay_text={"Click to see my project"}
                        />
                        <ThumbnailLinkComponent
                            project_title={"Paella Land"}
                            image_path={Paella_Land_UX}
                            hashtags={["UX Design", "User Research", "User Testing", "Sketching", "Information Architecture", "User Personas", "Wireframing", "Prototyping"]}
                            href_link={"https://www.figma.com/proto/LY8GJtEGiJfAwax9kRCXR4/Paella-Land-Case-Study?type=design&node-id=5-2&t=GWnpqzClvjVVemKm-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=5%3A2&mode=design"}
                            overlay_text={"Click to see my project"}
                        />
                        <ThumbnailLinkComponent
                            project_title={"I Want A Pizza That!"}
                            hashtags={["UX Design", "User Personas", "Wireframing", "Prototyping"]}
                            image_path={PizzaApp}
                            href_link={"https://www.figma.com/proto/bULPVwztxaPCkIFfbtB00T/I-Want-A-Pizza-That!-Case-Study-%26-Prototype?type=design&node-id=3768-12&t=CHLgEweLGDTFJwAW-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3768%3A12&mode=design"}
                            overlay_text={"Click to see my project"}
                        />
                
            </div>
                    <div>
                        <ThumbnailLinkComponent
                            project_title={"Resume"}
                            image_path={Resume}
                            href_link={"https://docs.google.com/document/d/1knicjDFPERzrKuLHe5e0_f62rg-7K8KvITii6HN7kAg/edit?usp=sharing"}
                            overlay_text={"Click to see my resume"}
                        />
                    </div>

             

            <div id="CONTACT" className="home-container flex flex-col w-full  py-40 text-black my-5">
                <div className="skills-content-header flex flex-col justify-start items-center">
                    <ContactComponent/>
                </div>
            </div>
        </div>
    )
}