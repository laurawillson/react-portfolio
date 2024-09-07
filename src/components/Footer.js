import {FaEnvelope, FaLinkedinIn, FaGithub} from "react-icons/fa";

export default function Footer(){

    return(
        <div className="p-10 text-center max-w-[72rem] m-auto text-white">
            <div className="flex align-center text-3xl items-center justify-center">
                <p className="font-light  text-2xl justify-center">Thank you for your interest in my work. <div className="text-blue-400 inline font-bold">Let's connect! </div></p>
            </div>

            <br></br>

            <div className="mobile-icons-container flex align-middle text-3xl  justify-center">
                <a href="mailto:laura.willson.designer@gmail.com" target="_blank" rel="noopener noreferrer" className="flex align-center p-1">
                    <FaEnvelope className="text-blue-400"/>
                </a>
                
                <a href="https://www.linkedin.com/in/laura-willson" target="_blank" rel="noopener noreferrer" className="flex align-center p-1">
                    <FaLinkedinIn className="text-blue-400"/>
                </a>
                
                <a href="https://github.com/laurawillson" target="_blank" rel="noopener noreferrer" className="flex align-center p-1">
                    <FaGithub className="text-blue-400"/>
                </a>
            </div>
        </div>
    )
}