import ThumbnailLinkComponent from "./ThumbnailLinkComponent";
import Kikori_UX_Design from '../img/Kikori_Homepage.png';
import Paella_Land_UX from '../img/Paella_Land.png';
import PizzaApp from '../img/I_Want_A_Pizza_That.png';
import Laura_Profile from '../img/Laura_Profile.jpg';
import {FaGithub, FaLinkedinIn, FaEnvelope} from "react-icons/fa";
export default function BodyContentComponent(){
    const body_background_color = "bg-slate-100";
    return(
        <div className={`body-container ${body_background_color} overflow-x-hidden`}>
            <div id="HOME" className="home-container flex flex-col justify-center align-text-top pt-32 text-white px-10">
                <div className="home-content flex flex-col my-7 justify-center sm:items-center w-full  text-black">
                    <p className="text-5xl font-bold">Hello, I'm Laura!</p>
                    <br></br>
                    <p className="font-light text-2xl">I'm a UX Designer passionate about understanding users' needs and inclusive design.</p>
                </div>
            </div>
            <div id="PROJECTS" className="home-container flex flex-col w-full  text-black mt-5">
            
                        <br></br>
                        
                        <ThumbnailLinkComponent
                            project_title={"Kikori"}
                            image_path={Kikori_UX_Design}
                            sentence="Designing an effective and intuitive way for educators to search and find activities."
                            href_link={"https://www.figma.com/proto/fsSGjzMdGHQuxf4yz4cpyZ/Kikori-Case-Study?type=design&node-id=2-10&t=PH9SDGpfo4r7RD3p-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A10&mode=design"}
                            overlay_text={"View Case Study"}
                        />
                        <ThumbnailLinkComponent
                            project_title={"Paella Land"}
                            image_path={Paella_Land_UX}
                            sentence="Seamlessly integrating a paella delivery app."
                            href_link={"https://www.figma.com/proto/LY8GJtEGiJfAwax9kRCXR4/Paella-Land-Case-Study?type=design&node-id=5-2&t=GWnpqzClvjVVemKm-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=5%3A2&mode=design"}
                            overlay_text={"View Case Study"}
                        />
                        <ThumbnailLinkComponent
                            project_title={"I Want A Pizza That!"}
                            sentence="Helping people find the perfect late night pizza snack."
                            image_path={PizzaApp}
                            href_link={"https://www.figma.com/proto/bULPVwztxaPCkIFfbtB00T/I-Want-A-Pizza-That!-Case-Study-%26-Prototype?type=design&node-id=3768-12&t=CHLgEweLGDTFJwAW-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3768%3A12&mode=design"}
                            overlay_text={"View Case Study"}
                        />
            </div>

            <div id="ABOUT" className="flex flex-col md:flex-row w-full p-30 py-16 text-black my-5 p-10 min-w-[72rem] max-w-[72rem] m-auto">
            <div className="flex flex-col my-7 justify-center sm:items-start w-9/12  text-black">
                    <p className="font-bold text-4xl">Thanks for stopping by!</p>
                    <br></br>
                    <br></br>
                    <p className="font-bold text-3xl">A little about me:</p>
                    <br></br>
                    <p className="font-light text-2xl">I'm a UX Designer based in New York City. I create
                    <p className="font-light text-2xl">thoughtful experiences that are built for everyone</p>
                    <p className="font-light text-2xl">to use and enjoy. I believe, that as a designer,</p>
                    <p className="font-light text-2xl">I have a mission to care for the  people I design for.</p>
                    </p>

                    <br></br>
                    <p className="font-light text-2xl">Growing up, I was constantly immersed in creative
                    <p className="font-light text-2xl">activities including drawing, painting, photography,</p>
                    <p className="font-light text-2xl">and daydreaming about what I could create next.</p>
                    <p className="font-light text-2xl">While in the midst of all that, technology started</p>
                    <p className="font-light text-2xl">to become a big part of my life as well, and my</p>
                    <p className="font-light text-2xl">interest in the constantly evolving digital world</p>
                    <p className="font-light text-2xl">continued to grow.</p>
                    </p>

                    <br></br>
                    <p className="font-light text-2xl">Previously, I worked as a UX Designer Consultant
                    <p className="font-light text-2xl">and I am currently working as an Administrative</p>
                    <p className="font-light text-2xl">Assistant for a construction project management</p>
                    <p className="font-light text-2xl">firm. My experiences in these roles have sharpened</p>
                    <p className="font-light text-2xl">my skills in digital design, working in a fast paced,</p>
                    <p className="font-light text-2xl">high-pressure environment, empathizing with</p>
                    <p className="font-light text-2xl">people, doing research and analysis, identifying</p>
                    <p className="font-light text-2xl"> goals and needs, and efficiently finding solutions </p>
                    <p className="font-light text-2xl">to a broad variety of problems and user pain points.</p>
                    </p>

                    <br></br>
                    <p className="font-light text-2xl">I chose to pursue UX Design to utilize my passions
                    <p className="font-light text-2xl">in a new and purposeful way. I want to explore</p>
                    <p className="font-light text-2xl">design and have the opportunity to make a positive </p>
                    <p className="font-light text-2xl">impact on people's lives.</p>
                    </p> 
                </div>


            <div className="laura-pic">
                    <img className="w-full object-contain w-full max-h-[500px] rounded-md mt-20"
                        src={Laura_Profile} 
                    />
                </div>
            </div>
                

            <div id="CONTACT" className="home-container flex flex-col justify-center align-text-top pt-2 pb-32 text-white px-10">
                <div className="home-content flex flex-col my-7 justify-center sm:items-center w-full  text-black">
                    <p className="font-bold text-4xl">Get in Touch</p>
                </div>

                <div className="mobile-icons-container flex align-middle text-3xl text-black justify-center">
                    <a href="https://github.com/laurawillson" target="_blank" rel="noopener noreferrer" className="flex align-center p-1">
                        <FaGithub className="text-slate-600"/>
                    </a>
                    <a href="https://www.linkedin.com/in/laura-willson" target="_blank" rel="noopener noreferrer" className="flex align-center p-1">
                        <FaLinkedinIn className="text-slate-600" />
                    </a>
                    <a href="mailto:laura.willson.designer@gmail.com" target="_blank" rel="noopener noreferrer" className="flex align-center p-1">
                        <FaEnvelope className="text-slate-600"/>
                    </a>
                </div>

            </div>
        </div>
    )
}