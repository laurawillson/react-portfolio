import Laura_Profile from '../img/Laura_Profile.jpg';
import Relaxing_with_the_Pup from '../img/Relaxing_with_the_Pup.jpg'
import Beating_PR from '../img/Beating_PR.jpg'
import Laura_Taking_Pics from '../img/Laura_Taking_Pics.jpg'
import Alice_and_Mr_Kitten from '../img/Alice_and_Mr_Kitten.png' 
import Seven_Siblings from '../img/Seven_Siblings.png'
import Uncie_and_I from '../img/Uncie_and_I.png' 
import Footer from './Footer';
export default function About(){
    return(
        <div className={`body-container overflow-x-hidden`}>
            <div id="About" className="flex flex-col w-full p-30 pt-40 pb-30 text-white my-5 min-w-[72rem] max-w-[72rem] m-auto">
                <div className="flex justify-center">
                    <div className="flex flex-col my-7 justify-center sm:items-start w-9/12">
                        <div className='flex justify-between items-start mb-10'>
                            <p className="text-4xl font-light text-center">I'm Laura, a <div className="text-blue-400 inline font-bold">UX Designer</div> based in <div className="text-blue-400 inline font-bold">NYC</div>.🗽</p>
                        </div>

                        <div className="laura-pic m-auto">
                            <img className="w-full object-contain max-h-[500px] rounded-md"
                                src={Laura_Profile} alt="Laura_Willson"
                            />
                        </div>

                        <br></br>
                        <br></br>
                        <br></br>
                        <p className="font-bold text-3xl">🔍 I embarked on my journey into UX Design <div className="text-blue-400 inline font-bold">2.5 years ago</div>.</p>
                        
                        <br></br>

                        <div className="font-light text-2xl">
                            Combining my background in studio art and computer science, I transitioned into UX Design, a field that aligns perfectly with my passions. It allows me to empathize with users while crafting inclusive and impactful experiences. I approach design challenges by blending analytical problem-solving with creative thinking, always focused on understanding user needs and championing inclusive design principles.
                        </div>

                        <br></br>
                        <br></br>
                        <br></br>

                        <p className="font-bold text-3xl">🤔 Why <div className="text-blue-400 inline font-bold">UX Design</div>?</p>
                        <br></br>
                        <div className="font-light text-2xl">
                            As a UX Designer, my focus is on solving real problems that impact people's lives. My background as an Administrative Assistant has sharpened my empathy and enriched my understanding of diverse perspectives, both of which drive my approach to design. I’m passionate about creating inclusive, accessible digital experiences that truly meet the needs of all users.
                        </div>

                        <br></br>
                        <br></br>
                        <br></br>

                        <div className="font-bold text-3xl">
                            🤝 Moving forward, I aspire to <div className="text-blue-400 inline font-bold">collaborate </div>with fellow designers in crafting <div className="text-blue-400 inline font-bold">intuitive digital experiences</div> that instill <div className="text-blue-400 inline font-bold">confidence </div>and <div className="text-blue-400 inline font-bold">joy</div> in all users.
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>

                        <div class="border-t-2 border-white">
                        <br></br>
                        <br></br>
                        <br></br>
                        
                            <p className="font-bold text-3xl">What are my <div className="text-blue-400 inline font-bold">go-to activities </div>outside of work?</p>
                            <br></br>

                            <div className="font-light text-2xl flex">
                                <div class="mr-2">
                                    <img className="Relaxing_with_the_Pup object-cover h-48 w-96" src={Relaxing_with_the_Pup}/>
                                    <p className="font-light text-lg text-center">🐈 Relaxing with my cats</p>
                                </div>
                                <div class="mr-2">
                                    <img className="Beating_PR object-cover h-48 w-96" src={Beating_PR}/>
                                    <p className="font-light text-lg text-center">🏋🏻‍♀️ Working out at the gym</p>
                                </div>
                                <div class="mr-2">
                                    <img className="Laura_Taking_Pics object-cover h-48 w-96" src={Laura_Taking_Pics}/>
                                    <p className="font-light text-lg text-center">📸 Snapping photos of NYC</p>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>

                        <p className="font-bold text-3xl text-center">3 <div className="text-blue-400 inline font-bold">fun facts</div> about me</p>
                        <br></br>

                        <div className="font-light text-2xl flex">
                            <div class="mr-2">
                                <img className="Alice_and_Mr_Kitten object-cover h-48 w-96" src={Alice_and_Mr_Kitten}/>
                                    <p className="font-light text-lg text-center">🐈 I have two adorable cats,</p>
                                    <p className="font-light text-lg text-center">Alice (left) and Mr. Kitten (right).</p>
                            </div>
                            <div class="mr-2">
                                <img className="Seven_Siblings object-cover h-48 w-96" src={Seven_Siblings}/>
                                    <p className="font-light text-lg text-center">👨🏻‍👩🏻‍👧🏻‍👦🏻 I'm one of eight children, occupying the middle spot in the lineup.</p>
                            </div>
                            <div>
                                <img className="Uncie_and_I object-cover h-48 w-96"  style={{objectPosition: '0 17%'}} src={Uncie_and_I}/>
                                    <p className="font-light text-lg text-center">🥳 My youngest brother and I</p>
                                    <p className="font-light text-lg text-center">share the same birthday, with a</p>
                                    <p className="font-light text-lg text-center">nine-year age difference between us.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <Footer/>
        </div>
    )
}