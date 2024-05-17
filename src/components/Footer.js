import {FaEnvelope, FaLinkedinIn, FaGithub} from "react-icons/fa";

export default function Footer(){

    return(
        <div className="p-10 min-w-[72rem] max-w-[72rem] m-auto">
            <div className="flex align-center text-3xl items-center justify-center">
                <p className="font-bold text-3xl justify-center">Thanks for stopping by! 😄</p>
            </div>

            <br></br>

            <div className="flex align-center text-1xl items-center justify-center">
                <p className="font-light text-1xl justify-center">Connect with me via email, LinkedIn, or GitHub.</p>
            </div>

            <br></br>

            <div className="mobile-icons-container flex align-middle text-3xl text-black justify-center">
                <a href="mailto:laura.willson.designer@gmail.com" target="_blank" rel="noopener noreferrer" className="flex align-center p-1">
                    <FaEnvelope className="text-red-300"/>
                </a>

                <a href="https://www.linkedin.com/in/laura-willson" target="_blank" rel="noopener noreferrer" className="flex align-center p-1">
                    <FaLinkedinIn className="text-red-300"/>
                </a>

                <a href="https://github.com/laurawillson" target="_blank" rel="noopener noreferrer" className="flex align-center p-1">
                    <FaGithub className="text-red-300"/>
                </a>
            </div>
        </div>
    )
}