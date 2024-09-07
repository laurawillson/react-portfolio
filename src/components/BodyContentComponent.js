import ThumbnailLinkComponent from "./ThumbnailLinkComponent";
import Schedulete_Homepage from '../img/Schedulete_Homepage.png';
import Kikori_Homepage from '../img/Kikori_Homepage.png';
import Paella_Bowls_Homepage from '../img/Paella_Bowls_Homepage.png';
import Footer from './Footer';
export default function BodyContentComponent(){
    return(
        <div className={`body-container overflow-x-hidden `}>
            <div id="HOME" className="home-container flex flex-col justify-center align-text-top pt-32 text-white px-10">
                <div className="home-content flex flex-col my-7 justify-center sm:items-center w-full  ">
                    <p className="text-8xl font-bold">Hello!👋🏼 I'm <div className="text-blue-400 inline">Laura</div>.</p>
                    <br></br>
                    <p className="font-light text-2xl"> <div className="text-blue-400 inline font-bold">UX Designer</div> that <div className="text-blue-400 inline font-bold">empathizes</div> with <div className="text-blue-400 inline font-bold">users' needs</div> and  champions <div className="text-blue-400 inline font-bold">inclusive</div>,</p>
                    <p className="font-light text-2xl"> <div className="text-blue-400 inline font-bold">accessible</div>  design principles. Let's chat about user behavior, accessibility, and cats!</p>
                    <p className="font-light text-2xl"></p>
                </div>
            </div>
            <div id="PROJECTS" className="home-container flex flex-col w-full  text-white  mt-5">                      
                <ThumbnailLinkComponent
                    project_title={"Schedulete"}
                    image_path={Schedulete_Homepage}
                    sentence="Developing a streamlined and effective communication platform for sports coaches."
                    href_link={"/react-portfolio/Schedulete"}
                    overlay_text={"View Case Study"}
                />
                <ThumbnailLinkComponent
                    project_title={"Kikori"}
                    image_path={Kikori_Homepage}
                    sentence="Increasing engagement in experiential social-emotional learning (eSEL) activities for K-12 educators."
                    href_link={"/react-portfolio/Kikori"}
                    overlay_text={"View Case Study"}
                />
                <ThumbnailLinkComponent
                    project_title={"Paella Bowls"}
                    image_path={Paella_Bowls_Homepage}
                    sentence="Seamlessly integrating a paella delivery app."
                    href_link={"/react-portfolio/Paella_Bowls"}
                    overlay_text={"View Case Study"}
                />
            </div>

            <br></br>
            <br></br>
            <br></br>

            <Footer/>
        </div>
    )
}