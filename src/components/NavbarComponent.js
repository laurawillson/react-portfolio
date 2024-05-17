import React, { useState } from "react";
import { Link, redirect } from "react-router-dom";
import Laura_Profile from '../img/Laura_Profile.jpg';
import LW_Logo from '../img/LW_Logo.svg';

export default function NavbarComponent(){
    const [show, setShow ] = React.useState(false);
    const navItems2 = [
     
        {
            label: "About",
            is_link: true
        },
        {
            label: "Contact",
            is_link: true
        }
    ]
    const [isMobileNavOpen, setisMobileNavOpen ] = useState(false);
    function handleMobileBarClick(){
        setisMobileNavOpen(!isMobileNavOpen);
    }
    React.useEffect(()=>{
        console.log("window", window.location.pathname);
    },[])

    function updateNavActive(){
        setShow(false);
        console.log("window", window.location.pathname);
    }
    return(
        <>
        <nav className="navbar-container fixed w-full h-20 z-20  p-6 sm:px-4 ">
            <div className="container flex  flex-wrap  w-full justify-between items-center mx-auto ">
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

                <div onClick={()=>window.location.href = '/react-portfolio'}
                
                    className="navbar-profile-container flex align-middle text-3xl text-zinc-800 cursor-pointer">
                   <div className="navbar-profile-img">
                        <img className="max-w-xs w-10 rounded-md" src={LW_Logo}/>
                   </div>
                   <div className="profile-text flex items-start ml-2  flex-col justify-start">
                        <div className="text-base text-zinc-800">Laura Willson</div>
                        <div className="text-xs text-zinc-800">UX Designer</div>
                    </div>
                </div>

                {/* Hidden on mobile, appears on desktop */}
                <div className={`hidden w-full bg-transparent text-zinc-800  md:translate-y-0 md:block md:w-auto `} id="desktop-menu">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <div className="relative inline-block text-left">
                            <button 
                                onClick={()=> setShow(!show)}
                                type="button" 
                                className="inline-flex w-full justify-center text-zinc-800 bg-transparent  font-medium " 
                                id="menu-button" aria-expanded="true" aria-haspopup="true">
                                Projects
                                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </button>

                            <div className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${show ? '' : 'hidden'}`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" >
                                <div className="py-1" role="none">
                                    <Link 
                                        onClick={updateNavActive}
                                        to="/react-portfolio" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">All Projects</Link>
                                    <Link 
                                        onClick={updateNavActive}
                                        to="/react-portfolio/Schedulete" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Schedulete</Link>
                                    <Link 
                                        onClick={updateNavActive}
                                        to="/react-portfolio/Kikori" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Kikori</Link>
                                    <Link 
                                        onClick={updateNavActive}
                                        to="/react-portfolio/Paella_Bowls" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Paella Bowls</Link>
                                </div>
                            </div>
                        </div>
                        {
                            navItems2.map((items,index)=>{

                                return(
                                    <li key={index}>
                                        <Link 
                                            onClick={updateNavActive}
                                            key={index} 
                                            to={items.is_link ? 'react-portfolio/' + items.label : "/#"+ items.label} 
                                            className="block py-2 pr-4 pl-3 text-zinc-800 bg-transparent rounded md:bg-transparent md:p-0 dark:text-zinc-800" aria-current="page"
                                        >
                                            {items.label.replaceAll("_", " ")}
                                        </Link>
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
                    <div className="relative inline-block text-left">
                        <button 
                            onClick={()=> setShow(!show)}
                            type="button" 
                            className="inline-flex w-full justify-center text-zinc-800 bg-transparent  font-medium " 
                            id="menu-button" aria-expanded="true" aria-haspopup="true">
                            Projects
                            <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </button>

                        <div className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${show ? '' : 'hidden'}`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" >
                            <div className="py-1" role="none">
                                <Link onClick={updateNavActive} to="/react-portfolio" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">All Projects</Link>
                                <Link onClick={updateNavActive} to="/react-portfolio/Kikori" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Kikori</Link>
                                <Link onClick={updateNavActive} to="/react-portfolio/Paella_Bowls" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Paella Bowls</Link>
                            </div>
                        </div>
                    </div>
                {
                    navItems2.map((items,index)=>{
                        <li key={index}>
                            <Link 
                                onClick={updateNavActive}
                                key={index} 
                                to={items.is_link ? 'react-portfolio/' + items.label : "/#"+ items.label} 
                                className="block py-2 pr-4 pl-3 text-zinc-800 bg-transparent rounded md:bg-transparent md:p-0 dark:text-zinc-800" aria-current="page"
                            >
                                {items.label.replaceAll("_", " ")}
                            </Link>
                        </li>
                    }
                    )
                }
            </ul>

        </div>

            <div
                onClick={() => setShow(false)} 
                className={`h-screen w-screen bg-transparent  ${show ? 'absolute' : 'hidden'}`}>
                                
            </div>
        </>
    )
}