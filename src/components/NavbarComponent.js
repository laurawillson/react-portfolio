import { useState } from "react"
import { FaLinkedinIn, FaGithub, FaReadme } from "react-icons/fa"

export default function NavbarComponent(){
    const navItems =[
        "HOME", "ABOUT", "EXPERIENCE", "SKILLS", "RESUME", "CONTACT"
    ]
    const [isMobileNavOpen, setisMobileNavOpen ] = useState(false);
    function handleMobileBarClick(){
        setisMobileNavOpen(!isMobileNavOpen);
    }
    return(
        <>
        <nav className="navbar-container fixed w-full h-20 z-20 bg-zinc-800 p-6 sm:px-4">
            <div className="container flex flex-wrap  w-full justify-between items-center mx-auto">
                <button id="mobile-button" type="button" 
                onClick={handleMobileBarClick}
                className={`
                flex
                flex-col
                content-between
                justify-around
                items-center
                p-2 ml-3 
                text-sm  
                bg-white
                text-gray-500 
                rounded-lg 
                hover:bg-gray-100
                md:hidden 
                `}
                aria-controls="mobile-menu-2" aria-expanded="false">
                <div className={`burgerbar w-6 bg-black h-1 rounded-md ${isMobileNavOpen ? "rotate-45 translate-y-2" : ""}`}></div>
                <div className={`burgerbar w-6 bg-black h-1 rounded-md mt-1 ${isMobileNavOpen ? "opacity-0" : ""}`}></div>
                <div className={`burgerbar w-6 bg-black h-1 rounded-md mt-1 ${isMobileNavOpen ? "-rotate-45 -translate-y-2" : ""}` }></div>
                </button>

                <div className="mobile-icons-container flex align-middle text-3xl text-white">
                    <a href="#RESUME" className="ml-4 p-1">
                        <FaReadme/>
                    </a>
                    <a href="https://github.com/matter13311" target="_blank" rel="noopener noreferrer" className=" ml-4 p-1">
                        <FaGithub/>
                    </a>
                    <a href="https://www.linkedin.com/in/matthew-liang-854637169/" target="_blank" rel="noopener noreferrer" className="ml-4 p-1">
                        <FaLinkedinIn />
                    </a>
                </div>

                {/* Hidden on mobile, appears on desktop */}
                <div className={`hidden w-full bg-zinc-800  md:translate-y-0 md:block md:w-auto `} id="desktop-menu">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        {
                            navItems.map((items,index)=>{
                                return(
                                    <li>
                                        <a key={index} href={"#"+ items} className="block py-2 pr-4 pl-3 text-white bg-transparent rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">
                                            {items}
                                        </a>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>
        </nav>

        {/* Visible on mobile, hidden on desktop */}
        <div className={`fixed px-6 sm:px-8 w-full bg-zinc-800 z-10 ${isMobileNavOpen ? "translate-y-20" : "-translate-y-80"}  md:hidden `} id="mobile-menu">
            <ul className="flex pb-4 flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                {
                    navItems.map((items,index)=>{
                        return(
                            <li>
                                <a key={index} href={"#"+ items} className="block py-2 pr-4 pl-3 text-white bg-transparent rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">
                                    {items}
                                </a>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
        </>
    )
}