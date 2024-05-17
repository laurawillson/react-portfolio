import ThumbnailLinkComponent from "./ThumbnailLinkComponent";
import Schedulete_Homepage from '../img/Schedulete_Homepage.png';
import Kikori_Homepage from '../img/Kikori_Homepage.png';
import Paella_Bowls_Homepage from '../img/Paella_Bowls_Homepage.png';
import Footer from './Footer';
export default function BodyContentComponent(){
    return(
        <div className={`body-container overflow-x-hidden `}>
            <div id="HOME" className="home-container flex flex-col justify-center align-text-top pt-32 text-white px-10">
                <div className="home-content flex flex-col my-7 justify-center sm:items-center w-full  text-black">
                    <p className="text-8xl font-bold">Hello!👋🏼 I'm <div className="text-red-300 inline">Laura</div>.</p>
                    <br></br>
                    <p className="font-light text-2xl"> <div className="text-red-300 inline font-bold">UX Designer</div> driven by <div className="text-red-300 inline font-bold">understanding</div> how everyday products influence <div className="text-red-300 inline font-bold">human</div></p>
                    <p className="font-light text-2xl"><div className="text-red-300 inline font-bold">behavior.</div> My commitment lies in <div className="text-red-300 inline font-bold">empathizing</div>  with users' needs and <div className="text-red-300 inline font-bold">promoting</div></p>
                    <p className="font-light text-2xl"><div className="text-red-300 inline font-bold">inclusive design principles.</div> Let's chat about user behavior, accessibility, and cats!</p>
                </div>
            </div>
            <div id="PROJECTS" className="home-container flex flex-col w-full  text-black mt-5">                      
                <ThumbnailLinkComponent
                    project_title={"Schedulete"}
                    image_path={Schedulete_Homepage}
                    sentence="Developing a streamlined and effective communication platform for NCAA coaches."
                    href_link={"/react-portfolio/Schedulete"}
                    overlay_text={"View Case Study"}
                />
                <ThumbnailLinkComponent
                    project_title={"Kikori"}
                    image_path={Kikori_Homepage}
                    sentence="Enhancing accessibility to experiential social-emotional learning (eSEL) curriculum for K-12 educators."
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