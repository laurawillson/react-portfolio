import ThumbnailLinkComponent from "./ThumbnailLinkComponent";
import kikori_laptop from '../img/kikori_laptop.png';
import Paella_Bowls from '../img/Paella_Bowls.png';
import Schedulete from '../img/Schedulete.png';
import {FaGithub, FaLinkedinIn, FaEnvelope} from "react-icons/fa";
export default function BodyContentComponent(){
    return(
        <div className={`body-container overflow-x-hidden`}>
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
                            project_title={"Schedulete"}
                            image_path={Schedulete}
                            sentence="Creating an intuitive and efficient way for NCAA coaches to communicate."
                            href_link={"/react-portfolio/Schedulete"}
                            overlay_text={"View Case Study"}
                        />
                        <ThumbnailLinkComponent
                            project_title={"Kikori"}
                            image_path={kikori_laptop}
                            sentence="Improving the way K-12 educators access experiential social emotional learning (eSEL) curriculum."
                            href_link={"/react-portfolio/Kikori"}
                            overlay_text={"View Case Study"}
                        />
                        <ThumbnailLinkComponent
                            project_title={"Paella Bowls"}
                            image_path={Paella_Bowls}
                            sentence="Seamlessly integrating a paella delivery app."
                            href_link={"/react-portfolio/Paella_Bowls"}
                            overlay_text={"View Case Study"}
                        />
            </div>

            <div id="Contact" className="home-container flex flex-col justify-center align-text-top pt-2 pb-32 text-white px-10">
                <div className="home-content flex flex-col my-7 justify-center sm:items-center w-full text-black">
                    <p className="text-xl text-blue-500 decoration-solid underline font-normal">laura.willson.designer@gmail.com</p>
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