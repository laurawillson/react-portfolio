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

            <div className='m-auto max-w-[60rem]'>
                <div className="sub-container overview">
                    <div className="heading-text">
                        Overview
                    </div>
                    <br></br>

                    <div className="sub-heading-text">
                        About Schedulete
                    </div>

                    <div className="text-container-row">
                        <div className="sub-text w-full">
                            <p>Schedulete is a web application designed to streamline scheduling and communication for sports coaches, allowing</p>
                            <p>them to dedicate more time to their teams and less to administrative tasks.</p>
                        </div>
                    </div>
                    <br></br>
                    <br></br>

                    <div className="sub-heading-text">
                        Project Details
                    </div>

                    <div className='flex'>
                        <div class="sub-text mr-9">
                            <p><b>Role:</b>UX Designer</p>
                        </div>

                        <div class="sub-text mr-9">
                            <p><b>Responsibilities:</b></p>
                                <ul>
                                    <li>Synthesizing user feedback</li>
                                    <li>Sketching</li>
                                    <li>Wireframing</li>
                                    <li>Prototyping</li>
                                </ul>
                        </div>

                        <div className="sub-text mr-9">
                            <p><b>Team:</b></p>
                            <ul>
                                <li>Olivia J. (Project Manager)</li>
                                <li>Eugene K. (UX Designer)</li>
                                <li>Angela K. (UX Designer)</li>
                            </ul>
                        </div>

                        <div className="sub-text mr-9">
                            <p><b>Tools:</b></p>
                                <ul>
                                    <li>Figma</li>
                                    <li>FigJam</li>
                                    <li>Zoom</li>
                                    <li>Whimsical</li>
                                    <li>Google Drive</li>
                                </ul>  
                        </div>
                    </div>
                    <br></br>
                    <br></br>

                    <div className="sub-heading-text">
                        The Challenge
                    </div>
                    <div className="text-container-column">
                        <div className="sub-text">
                            <p>Enhance the user experience for NCAA coaches by refining the process of posting and responding to game invitations.</p>
                            <p>Empower coaches with an intuitive workflow that promotes efficient in-app communication and progress tracking.</p>
                        </div>
                    </div>
                    <br></br>
                    <br></br>

                    <div className="sub-heading-text">
                        Goals
                    </div>
                    <div className="text-container-column">
                        <div className="sub-text">
                            <p>To gain deeper insights into Schedulete's background, market positioning, and user demographics, my team and I</p>
                            <p>started with the following objectives:</p>
                            <br></br>
                            <p><b>1.</b>Design a user-friendly coach communication experience</p>
                            <p><b>2.</b>Craft an intuitive interface aligned with Schedulete's brand and UI standards</p>
                            <p><b>3.</b>Enhance engagement by streamlining game invitations</p>
                        </div>
                    </div>
                    <br></br>
                    <br></br>

                    <div className="sub-heading-text">
                        Process
                    </div>
                    <div className="text-container-column">
                        <div className="sub-text">
                            <p>We began by conducting research to understand existing challenges. In subsequent phases, we developed a user</p>
                            <p>persona, used affinity mapping to identify key priorities, crafted a task flow, created a user journey map, and built</p>
                            <p>prototypes to validate the redesign.</p>
                            <br></br>

                            <p>Now, let's delve deeper into each step.</p>
                            <br></br>

                            <img className="Design_Process" src={Design_Process}/>
                        </div>
                    </div>
                </div>

                <div class="sub-container research border-t-2 border-black">
                    <div className="sub-container research">
                        <div className="heading-text">
                            <br></br>
                            Research
                        </div>

                        <div className="sub-text">
                            Understanding the user and situation
                        </div>
                        <br></br>

                        <div className="sub-heading-text">
                            Competitive and Comparative Analysis
                        </div>
                        <div className="text-container-column">
                            <div className="sub-text">
                                <p>My team and I initiated our research by conducting a Competitive and Comparative Analysis to evaluate how three other</p>
                                <p>sports scheduling applications stack up against Schedulete. We were able to identify opportunities for improvement,</p>
                                <p>differentiate offerings, and make informed strategic decisions. This analysis also helped us stay  aware of industry trends</p>
                                <p>and best practices, ensuring Schedulete remains competitive and meets user expectations.</p>
                                <br></br>
                                <br></br>
                                <img className="Competitive_Comparative_Analysis w-full" src={Competitive_Comparative_Analysis}/>
                            </div>
                        </div>

                        <div className="sub-heading-text">
                            User Persona
                        </div>
                        <div className="text-container-column">
                            <div className="sub-text">
                                <p>To ensure that our future decisions in the process remain focused on the user, we aimed to establish a comprehensive</p>
                                <p>understanding of Schedulete's user base. So, we created a user persona to represent who we will be designing for.</p>
                                <br></br>
                                <p>Meet Alex:</p>
                                <br></br>
                                <img className="persona w-full" src={persona}/>
                            </div>
                        </div>
                        <br></br>
                        <br></br>

                        <div className="sub-heading-text">
                            User Interviews
                        </div>

                        <div className="text-container-column">
                            <div className="sub-text">
                                <p>Next, we aimed to validate the persona by conducting user interviews. Throughout these interviews, we utilized open-</p>
                                <p>ended questions to glean insights into their experiences, uncover needs, and pinpoint pain points.</p>
                                <br></br>
                                <p>We conducted interviews with <b>4 participants,</b>about <b>15-20 minutes</b>each. These participants included:</p>
                            </div>
                            <br></br>

                            <div className="sub-text">
                                <p><b>1.</b>Coaches who use Schedulete on a weekly basis</p>
                                <p><b>2.</b>Coaches who recently started using Schedulete</p>
                                <p><b>3.</b>Coaches who use the app a few times during the month</p>
                            </div>
                            <br></br>

                            <div className="sub-text">
                                <p>After conducting these one-on-one sessions with the participants, our goal was to synthesize the new information to</p>
                                <p>gain a deeper understanding of our users.</p>
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
                    <div className="text-container-column">
                        <div className="sub-text">
                            <p>Utilizing Affinity Mapping, we condensed the findings from user interviews into clear pain points and recurring themes.</p>
                            <p>Our analysis revealed a desire among users for new features and enhancements to improve app usability. This enabled</p>
                            <p>us to offer actionable insights for focused design enhancements,  such as incorporating the option to view other coaches'</p>
                            <p>contact information on the main homepage.</p>
                            <br></br>
                            <img className="w-80 ml-40"src={Affinity_Map}/>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="sub-text">
                            <p>We identified <b>three</b>recurring pain points among our participants:</p>
                            <p><b>1. </b>Difficulties in promptly responding to messages from fellow coaches</p>
                            <p><b>2. </b>Color-coded game types and icons caused confusion</p>
                            <p><b>3. </b>Uncertainty about responding to game invitations and updating game details</p>
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
                        <div className="sub-text">
                            <p>We developed task flows outlining the typical steps users take to complete tasks in Schedulete. This visualization helps</p>
                            <p>identify potential obstacles and inefficiencies in the process, allowing for targeted improvements to enhance the user</p>
                            <p>experience. By understanding the user's journey, we were able to create more intuitive and seamless interactions.</p>
                            <br></br>
                            <img className="w-80 ml-40"src={User_Task_Flow}/>
                        </div>
                        <br></br>
                    </div>

                    <div className="sub-container user journey map">
                        <div className="sub-heading-text">
                            User Journey Map
                        </div>
                        <div className="sub-text">
                            <p>Now, we wanted to dive even deeper and get a better understanding of the overall journey users would be taking</p> 
                            <p>throughout the app from start to finish. We wanted to better empathize with the scenarios users may be in, different</p>
                            <p>decisions they would be making, and also the different paths they might take. To do this, we created a user journey map,</p>
                            <p>which helped us to better understand coaches' journey when they access games on the Schedulete platform.</p>
                            <br></br>
                            <img className="w-full"src={User_Journey_Map}/>
                            <br></br>          
                            <p>From this journey map, we discovered that most users struggle with changing game details on Schedulete. They have</p>
                            <p>difficulties confirming alternative time proposals, finding different time options, understanding game status indicators,</p>
                            <p>and interpreting email notifications. Users met their unmet needs with workarounds, such as checking the calendar or</p>
                            <p>alerts, using the list view, looking for blue dot alerts on the calendar, or making calls to confirm game details.</p>             
                        </div>
                    </div>

                    {/* <div className="sub-heading-text">
                        Sketches
                        </div>
                        <div className="text-container-column">
                            <div className="sub-text">
                                <p>Based on identified pain points, we sketched and tested multiple options to optimize the user</p>
                                <p>experience with minimal changes. Throughout the redesign, we focused on our target audience,</p>
                                <p>company mission, and UX goals. After several iterations, we developed effective solutions.</p>
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
                    </div>  */}
                    
                    <div className="sub-container user journey map">
                        <div className="sub-heading-text">
                            Sketches
                        </div>
                        <div className="sub-text">
                            <p>Based on identified pain points, we sketched and tested multiple options to optimize the user experience with minimal</p>
                            <p>changes. Throughout the redesign, we focused on our target audience, company mission, and UX goals. After several</p>
                            <p>iterations, we developed effective solutions.</p>
                        </div>
                        <div className="text-container-row mt-10">
                            <div className="text-container-column w-6/12">
                                <img src={Create_New_Game}/>
                                <div className="sub-text mt-10 text-center">
                                    <p><b>Game creation</b>sketches</p>
                                </div>
                            </div>
                            <div className="text-container-column w-6/12 text-center">
                                <img src={Respond_to_an_Invitation}/>
                                <div className="sub-text mt-10">
                                    <p><b>Invitation response</b>sketches</p>
                                    <p></p>
                                </div>
                            </div>
                            <div className="text-container-column w-6/12 text-center">
                                <img src={Search_for_a_Game}/>
                                <div className="sub-text mt-10">
                                    <p><b>Game search</b>sketches</p>
                                </div>
                            </div>
                            <div className="text-container-column w-6/12 text-center">
                                <img src={Edit_Game_Details}/>
                                <div className="sub-text mt-10">
                                    <p><b>Game detail editing</b>sketches</p>
                                </div>
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

                    <div className="sub-heading-text">
                        Lo-fi Prototype
                    </div>
                    <div className="text-container-column">
                        <div className="sub-text mb-10">
                            <p>The low-fidelity prototype established the core user flow for scheduling games, contacting other coaches, enabling its</p>
                            <p>use in a usability study.</p>
                            <br></br>
                        </div>
                        <br></br>
                        <a className="text-blue-500 text-center" href="https://www.figma.com/proto/zGYqttjcWnwPUg2lET3tPt/Paella-Bowls-V2-(Wireframes%2C-Mockups%2C-and-Prototype)?type=design&node-id=1-2&t=HhXMyGl9bC5bJhBA-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design" target='_blank'>View Schedulete's low-fidelity prototype</a>
                        <br></br>
                        <br></br>
                    </div>
                    
                    <div className="sub-heading-text">
                        Hi-fi Prototype
                    </div>
                    <div className="text-container-column">
                        <div className="sub-text mb-10">
                            <p>The high-fidelity prototype provided a polished version of the core user flow, including creating a new game, responding</p>
                            <p>to invitations, searching for games, and editing game details, making it suitable for a usability study.</p>
                            <br></br>
                        </div>
                        <br></br>
                        <a className="text-blue-500 text-center" href="https://www.figma.com/proto/zGYqttjcWnwPUg2lET3tPt/Paella-Bowls-V2-(Wireframes%2C-Mockups%2C-and-Prototype)?type=design&node-id=1-2&t=HhXMyGl9bC5bJhBA-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design" target='_blank'>View Schedulete's hi-fidelity prototype</a>
                    </div>
                </div>

                <div className="sub-container Project Reflection border-t-2 border-black">
                    <div className="heading-text">
                        <br></br>
                        Project Reflection
                    </div>
                    <br></br>
                    
                    <div className="sub-heading-text">
                        <p>Project Takeaways</p>
                    </div>
                    <div className="text-container-column">
                        <div className="sub-text mb-10">
                            <p>I knew going into this project that it would be a challenge. What features are most important? Given the coaches not</p>
                            <p>having enough time to respond to other coaches, what are some ways the web app can provide relief? I found myself</p>
                            <p>truly enjoying the process of designing and strategizing flows and user interactions.</p>
                        </div>
                    </div>

                    <div className="sub-heading-text">
                        <p>Next Steps:</p>
                    </div>
                    <div className="text-container-column">
                        <div className="sub-text mb-10">
                            <p><b>1.</b>Craft a focused project plan, prioritizing MVP needs and managing backlogs</p>
                            <p><b>2.</b>Conduct more user interviews to determine any new areas of need</p>
                            <p><b>3.</b>Make more improvements to the design of the app</p>
                        </div>
                    </div>
                    
                    <div className="sub-heading-text">
                        <p>What I Learned:</p>
                    </div>
                    <div className="text-container-column">
                        <div className="sub-text mb-10">
                            <p>Continuous improvement in coach-to-coach communication and accessing available games is crucial. Usability studies</p>
                            <p>and user feedback play a significant role in shaping each iteration of the  app's design.</p>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>

            <Footer/>
        </div>
    )
}