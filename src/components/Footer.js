import {FaGithub, FaLinkedinIn, FaEnvelope} from "react-icons/fa";

export default function Footer(){

    return(
        <div className=" w-full m-auto left-0 bottom-20">
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
    )
}