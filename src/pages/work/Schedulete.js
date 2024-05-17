import '../../scss/work.scss';
import '../../scss/Schedulete.scss';
import Schedulete_Homepage from '../schedulete_imgs/Schedulete_Homepage.png';
import persona from '../schedulete_imgs/Alex_User_Persona.png';
import Competitive_Comparative_Analysis from '../schedulete_imgs/Competitive_Comparative_Analysis.png';
import Affinity_Map from '../schedulete_imgs/Affinity_Map.png'
import Create_New_Game from '../schedulete_imgs/Create_New_Game_Sketches.png'
import Respond_to_an_Invitation from '../schedulete_imgs/Respond_to_an_Invitation.png'
import Search_for_a_Game from '../schedulete_imgs/Search_for_a_Game.png'
import Edit_Game_Details from '../schedulete_imgs/Edit_Game_Details.png'
import Design_Process from '../schedulete_imgs/Design_Process.png'
import User_Task_Flow from '../schedulete_imgs/User_Task_Flow.png'
import User_Journey_Map from '../schedulete_imgs/User_Journey_Map.png';
import Footer from '../../components/Footer';


export default function Schedulete(){
    const project_title = 'Schedulete';

    return(
        <div className="work-container">
            <div className='project-title'> {project_title} </div>
            <div className='schedulete-homepage-container m-auto'>
                <br></br>
                <img className="schedulete_homepage w-full object-contain max-h-[500px]" src={Schedulete_Homepage}/>
            </div>
            <br></br>
            <br></br>

            <div className='m-auto max-w-[44rem]'>
                <div className="sub-container overview">
                    <div className="heading-text">
                        Overview
                    </div>
                    <br></br>
                    <div className="text-container-row">
                        <div className="sub-text w-full">
                            <p>Schedulete is a web application designed to streamline scheduling for sports</p>
                            <p>coaches, allowing them to dedicate more time to their teams and less to</p>
                            <p>administrative tasks.</p>
                        </div>
                    </div>
                    <br></br>
                    <div className='flex'>
                        <div class="sub-text mr-4">
                            <p><b>Role:</b> UX Designer</p>
                        </div>

                        <div class="sub-text mr-4">
                            <p><b>My Responsibilities:</b></p>
                                <ul>
                                    <li>Synthesizing user feedback</li>
                                    <li>Sketching</li>
                                    <li>Wireframing</li>
                                    <li>Prototyping</li>
                                </ul>
                        </div>

                        <div className="sub-text mr-4">
                            <p><b>Team:</b></p>
                            <ul>
                                <li>Olivia J. (Project Manager)</li>
                                <li>Eugene K. (UX Designer)</li>
                                <li>Angela K. (UX Designer)</li>
                            </ul>
                        </div>
                    </div>
                    <br></br>
                        
                    <div className='flex'>
                        <div className="sub-text mr-3">
                            <p><b>Tools:</b></p>
                                <ul>
                                    <li>Figma</li>
                                    <li>FigJam</li>
                                    <li>Whimsical</li>
                                    <li>Google Drive</li>
                                </ul>  
                        </div>
                        <br></br>
                        <div className="sub-text">
                            <p><b>Timeline: </b>3 months</p>
                        </div>
                    </div>
                    
                </div>
                <div className="sub-container the-challenge">
                    <div className="heading-text">
                        The Challenge
                    </div>
                    <br></br>
                    <div className="text-container-column">
                        <div className="sub-text">
                            <p>Enhance the user experience for NCAA coaches by refining the process of posting</p>
                            <p>and responding to game invitations. Empower coaches with an intuitive workflow</p>
                            <p>that promotes efficient in-app communication and progress tracking.</p>
                        </div>
                    </div>
                </div>
                <div className="sub-container goals">
                    <div className="heading-text">
                        Goals
                    </div>
                    <br></br>
                    <div className="sub-text">
                        <p>To gain deeper insights into Schedulete's background, market positioning, and</p>
                        <p>user demographics, my team and I started with the following objectives:</p>
                        <p><b>1.</b>Design a user-friendly coach communication experience</p>
                        <p><b>2.</b>Craft an intuitive interface aligned with Schedulete's brand and UI standards</p>
                        <p><b>3.</b>Enhance engagement by streamlining game invitations</p>
                    </div>
                </div>
                <div className="sub-container process">
                    <div className="heading-text">
                        Process
                    </div>
                    <br></br>
                    <div className="sub-text">
                        <p>My team and I team initiated the process by conducting research to comprehend</p>
                        <p>existing challenges. During the following phases, we utilized affinity mapping to</p>
                        <p>identify key priorities, crafted task flows, and prototypes to validate the redesign.</p>
                        <p>Now, let's delve into each step further.</p>
                        <br></br>
                        <img className="Design_Process " src={Design_Process}/>
                    </div>
                </div>
                <div class="sub-container research border-t-2 border-black">
                    <div className="sub-container research">
                        <div className="heading-text">
                        <br></br>
                            Research
                        </div>
                        <br></br>
                        <div className="sub-container user-persona">
                            <div className="sub-heading-text">
                                Competitive and Comparative Analysis
                            </div>
                            <br></br>
                            <div className="text-container-col">
                                <div className="sub-text">
                                    <p>My team and I initiated our research by conducting a Competitive and Comparative</p>
                                    <p>Analysis to evaluate how three other sports scheduling applications stack up against</p>
                                    <p>Schedulete. We were able to identify opportunities for improvement, differentiate</p>
                                    <p>offerings, and make informed strategic decisions. This analysis also helped us stay</p>
                                    <p>aware of industry trends and best practices, ensuring Schedulete remains</p>
                                    <p>competitive and meets user expectations.</p>
                                    <br></br>
                                    <br></br>
                                    <img className="Competitive_Comparative_Analysis w-full" src={Competitive_Comparative_Analysis}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sub-container user-persona">
                    <div className="sub-heading-text">
                        User Persona
                    </div>
                    <br></br>
                    <div className="text-container-col">
                        <div className="text-container-column ">
                            <div className="sub-text">
                                <p>To ensure that our future decisions in the process remain focused on the user, we</p>
                                <p>aimed to establish a comprehensive understanding of Schedulete's user base. So, we</p>
                                <p>created a user persona to represent who we will be designing for.</p>
                                <br></br>
                                <p>Meet Alex:</p>
                                <br></br>
                                <img className="persona w-full" src={persona}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sub-container user-interviews">
                    <div className="sub-heading-text">
                        User Interviews
                    </div>
                    <br></br>
                    <div className="text-container-column">
                        <div className="text-container-column">
                            <div className="sub-text">
                                <p>Next, we aimed to validate the persona by conducting user interviews. Throughout</p>
                                <p>these interviews, we utilized open-ended questions to glean insights into their</p>
                                <p>experiences, uncover needs, and pinpoint pain points.</p>
                                <br></br>
                                <p>We conducted interviews with <b>4 participants,</b>about <b>15-20 minutes</b>each.</p>
                            </div>
                            <br></br>
                            <div className="sub-text">
                                <p>These participants included:</p>
                                <p>1. Coaches who use Schedulete on a weekly basis</p>
                                <p>2. Coaches who recently started using Schedulete</p>
                                <p>3. Coaches who use the app a few times during the month</p>
                            </div>
                            <br></br>
                            <div className="sub-text">
                                <p>After conducting these one-on-one sessions with the participants, our goal was to</p>
                                <p>synthesize the new information to gain a deeper understanding of our users.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sub-container synthesize border-t-2 border-black">
                    <div className="heading-text">
                    <br></br>
                        Synthesize
                    </div>
                    <br></br>
                    <div className="sub-heading-text">
                        Affinity Map
                    </div>
                    <br></br>
                    <div className="text-container-column">
                        <div className="text-container-column">
                            <div className="sub-text">
                                <p>Utilizing Affinity Mapping, we condensed the findings from user interviews into clear</p>
                                <p>pain points and recurring themes. Our analysis revealed a desire among users for</p>
                                <p>new features and enhancements to improve app usability. This enabled us to offer</p>
                                <p>actionable insights for focused design enhancements, such as incorporating the</p>
                                <p>option to view other coaches' contact information on the main homepage.</p>
                                <br></br>
                                <img className="w-80 ml-40"src={Affinity_Map}/>
                            </div>
                            <br></br>
                            <br></br>
                            <div className="sub-text">
                                <p>We identified <b>three</b>recurring pain points among our participants:</p>
                                    <p><b>1. </b>Difficulties in promptly responding to messages from fellow coaches</p>
                                    <p><b>2. </b>Color-coded game types and icons caused confusion</p>
                                    <p><b>3. </b>Uncertain about responding to game invitations and updating game details</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sub-container ideation border-t-2 border-black">
                    <div className="heading-text">
                        <br></br>
                        Ideate
                    </div>
                    <br></br>
                    <div className="sub-container user task flow">
                        <div className="sub-heading-text">
                            User Task Flow
                        </div>
                        <br></br>
                        <div className="sub-text">
                            <p>We developed task flows outlining the typical steps users take to complete tasks in</p>
                            <p>Schedulete. This visualization helps identify potential obstacles and inefficiencies</p>
                            <p>in the process, allowing for targeted improvements to enhance the user experience.</p>
                            <p>By understanding the user's journey, we were able to create more intuitive and</p>
                            <p>seamless interactions.</p>
                            <br></br>
                            <img className="w-80 ml-40"src={User_Task_Flow}/>
                        </div>
                        <br></br>
                    </div>
                    <div className="sub-container user journey map">
                        <div className="sub-heading-text">
                            User Journey Map
                        </div>
                        <br></br>
                        <div className="sub-text">
                            <p>Now, we wanted to dive even deeper and get a better understanding of the overall</p> 
                            <p>journey users would be taking throughout the app from start to finish. We wanted</p>
                            <p>to better empathize with the scenarios users may be in, different decisions they</p>
                            <p>would be making, and also the different paths they might take. To do this, we</p>
                            <p>created a user journey map, which helped us to better understand coaches'</p>
                            <p>journey when they access games on the Schedulete platform.</p>
                            <br></br>
                            <img className="w-full"src={User_Journey_Map}/>                           
                        </div>
                    </div>
                    <br></br>
                    <div className="sub-heading-text">
                        Sketches
                    </div>
                    <br></br>
                    <div className="text-container-column ">
                        <div className="sub-text">
                            <p>Based on the identified pain points, we sketched multiple options to test and</p>
                            <p>implement minimal changes to optimize the user experience. Throughout the</p>
                            <p>redesign process, we consistently referred to the target audience company</p>
                            <p>mission, and our goal of improving the user experience rather than making</p>
                            <p>arbitrary design changes. After several iterations, we arrived at effective solutions.</p>
                        </div>
                        <div className="text-container-row mt-10">
                            <div className="sub-text mr-2">
                                <img src={Create_New_Game}/>
                                <p>Sketches showcasing various approaches devised for coaches to <b>create a new game.</b></p>
                            </div>
                            <div className="sub-text mr-2">
                                <img src={Respond_to_an_Invitation}/>
                                <p>Sketches showcasing various approaches devised for coaches to <b>respond to an invitation.</b></p>
                            </div>
                            <div className="sub-text mr-2">
                                <img src={Search_for_a_Game}/>
                                <p>Sketches showcasing various approaches devised for coaches to <b>search for a game.</b></p>
                            </div>
                            <div className="sub-text mr-2">
                                <img src={Edit_Game_Details}/>
                                <p>Sketches showcasing various approaches devised for coaches to <b>edit game details.</b></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sub-container Prototype border-t-2 border-black">
                    <div className="heading-text">
                    <br></br>
                        Prototype
                    </div>
                    <br></br>
                    <div className="sub-container lofi-prototype">
                        <div className="sub-heading-text">
                            Hi-fi Prototype
                        </div>
                        <br></br>
                        <div className="text-container-column">
                            <div className="sub-text mb-10">
                                <p>The low-fidelity prototype established the core user flow for building and ordering a paella, enabling its use in a usability study.</p>
                                <br></br>
                            </div>
                            <br></br>
                            <a className="text-blue-500 text-center" href="https://www.figma.com/proto/zGYqttjcWnwPUg2lET3tPt/Paella-Bowls-V2-(Wireframes%2C-Mockups%2C-and-Prototype)?type=design&node-id=1-2&t=HhXMyGl9bC5bJhBA-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design" target='_blank'>View Schedulete's low-fidelity prototype</a>
                        </div>
                    </div>
                </div>
                <div className="sub-container Reflection border-t-2 border-black">
                    <div className="heading-text">
                        <br></br>
                        Project Reflection
                    </div>
                    <br></br>
                    <div className="sub-text">
                        <p><b>Project Takeaways</b></p>
                        <p>I knew going into this project that it would be a challenge. What features are most</p>
                        <p>important? Given the coaches not having enough time to respond to other coaches,</p>
                        <p>what are some ways the web app can provide relief? I found myself truly enjoying</p>
                        <p>the process of designing and strategizing flows and user interactions.</p>
                        <br></br>
                        <p><b>Next Steps:</b></p>
                        <p><b>1.</b>Craft a focused project plan, prioritizing MVP needs and managing backlogs</p>
                        <p><b>2.</b>Conduct more user interviews to determine any new areas of need</p>
                        <p><b>3.</b>Make more improvements to the design of the app</p>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="sub-text">
                        <p><b>What I learned:</b></p>
                        <p>The first ideas for an app are only the beginning of the process and there is always</p>
                        <p>room for improvement. Usability studies and peer feedback are important and</p>
                        <p>influence each iteration of the app’s designs.</p>
                    </div>
                    <br></br>
                    <br></br>
                </div>
                </div>
            <br></br>
            <br></br>
            <br></br>
            <Footer/>
        </div>
    )
}