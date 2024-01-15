import Laura_Profile from '../img/Laura_Profile.jpg';
import Footer from './Footer';
export default function About(){
    return(
        <div className={`body-container overflow-x-hidden`}>
            <div id="About" className="flex flex-col w-full p-30 py-40 text-black my-5 min-w-[72rem] max-w-[72rem] m-auto">
                <div className="flex">
                    <div className="flex flex-col my-7 justify-center sm:items-start w-9/12  text-black">
                        <p className="font-bold text-4xl">Thanks for stopping by!</p>
                        <br></br>
                        <br></br>
                        <p className="font-bold text-3xl">A little about me:</p>
                        <br></br>
                        <div className="font-light text-2xl">I'm a UX Designer based in New York City. I create
                            <p className="font-light text-2xl">thoughtful experiences that are built for everyone</p>
                            <p className="font-light text-2xl">to use and enjoy. As a designer, I believe I have</p>
                            <p className="font-light text-2xl">a mission to care for the people I design for.</p>
                            <br></br>
                            <p className="font-light text-2xl">I chose to pursue UX Design to utilize my passions</p>
                            <p className="font-light text-2xl">in a new and purposeful way. I want to explore design</p>        
                            <p className="font-light text-2xl">and have the opportunity to make a positive</p>        
                            <p className="font-light text-2xl">impact on people's lives.</p> 
                        </div>
                    </div>


                    <div className="laura-pic">
                        <img className="w-full object-contain w-full max-h-[500px] rounded-md mt-20"
                            src={Laura_Profile} alt="Laura_Willson"
                        />
                    </div>
                </div>


                <Footer/>
            </div>
        </div>
    )
}