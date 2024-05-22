import '../../scss/work.scss';
import '../../scss/Schedulete.scss';
import Schedulete_Laptop from '../schedulete_imgs/Schedulete_Laptop.png';
import persona from '../schedulete_imgs/Alex_User_Persona.png';
import Competitive_Comparative_Analysis from '../schedulete_imgs/Competitive_Comparative_Analysis.png';
import Affinity_Map from '../schedulete_imgs/Affinity_Map.png'
import User_Interview_James from '../schedulete_imgs/User_Interview_James.png'
import Create_New_Game from '../schedulete_imgs/Create_New_Game_Sketches.png'
import Respond_to_an_Invitation from '../schedulete_imgs/Respond_to_an_Invitation.png'
import Search_for_a_Game from '../schedulete_imgs/Search_for_a_Game.png'
import Edit_Game_Details from '../schedulete_imgs/Edit_Game_Details.png'
import Design_Process from '../schedulete_imgs/Design_Process.png'
import Site_Map from '../schedulete_imgs/Site_Map.png';
import User_Task_Flow from '../schedulete_imgs/User_Task_Flow.png'
import User_Journey_Map from '../schedulete_imgs/User_Journey_Map.png';
import Footer from '../../components/Footer';


export default function Schedulete(){
    const project_title = 'Schedulete';

    return(
        <div className="work-container">
            <div className='project-title'> {project_title} </div>
            <div className='schedulete-homepage-container m-auto'>
                <br/>
                <img className="schedulete_laptop w-full object-contain max-h-[500px]" src={Schedulete_Laptop}/>
            </div>
            <br/>
            <br/>

            <div className='m-auto max-w-[60rem]'>
                <div className="sub-container overview">
                    <div className="heading-text">
                        Overview
                    </div>
                    <br/>

                    <div className="sub-heading-text">
                        About Schedulete
                    </div>

                    <div className="text-container-row">
                        <div className="sub-text w-full">
                            <p>Schedulete is a web application designed to streamline scheduling and communication for sports coaches, allowing</p>
                            <p>them to dedicate more time to their teams and less to administrative tasks.</p>
                        </div>
                    </div>
                    <br/>
                    <br/>

                    <div className="sub-heading-text">
                        Project Details
                    </div>

                    <div className='flex'>
                        <div className="sub-text mr-9">
                            <p><b>Role:</b>UX Designer</p>
                        </div>

                        <div className="sub-text mr-9">
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
                                    <li>Slack</li>
                                    <li>Zoom</li>
                                    <li>Whimsical</li>
                                    <li>Google Drive</li>
                                </ul>  
                        </div>
                    </div>
                    <br/>
                    <br/>

                    <div className="sub-heading-text">
                        The Challenge
                    </div>
                    <div className="text-container-column">
                        <div className="sub-text">
                            <p>Enhance the user experience for NCAA coaches by refining the process of posting and responding to game invitations.</p>
                            <p>Empower coaches with an intuitive workflow that promotes efficient in-app communication and progress tracking.</p>
                        </div>
                    </div>
                    <br/>
                    <br/>

                    <div className="sub-heading-text">
                        Goals
                    </div>
                    <div className="text-container-column">
                        <div className="sub-text">
                            <p>To gain deeper insights into Schedulete's background, market positioning, and user demographics, my team and I</p>
                            <p>started with the following objectives:</p>
                            <br/>
                            <p><b>1.</b>Design a user-friendly coach communication experience</p>
                            <p><b>2.</b>Craft an intuitive interface aligned with Schedulete's brand and UI standards</p>
                            <p><b>3.</b>Enhance engagement by streamlining game invitations</p>
                        </div>
                    </div>
                    <br/>
                    <br/>

                    <div className="sub-heading-text">
                        Process
                    </div>
                    <div className="text-container-column">
                        <div className="sub-text">
                            <p>We began by conducting research to understand existing challenges. In the following phases, we developed a user</p>
                            <p>persona, used affinity mapping to identify key priorities, crafted a task flow, designed a site map, created a user</p>
                            <p>journey map, and built prototypes to validate the redesign.</p>
                            <br/>

                            <p>Now, let's delve deeper into each step.</p>
                            <br/>

                            <img className="Design_Process" src={Design_Process}/>
                        </div>
                    </div>
                </div>

                <div className="sub-container research border-t-2 border-black">
                    <div className="sub-container research">
                        <div className="heading-text">
                            <br/>
                            Research
                        </div>
                        
                        <div className="sub-text">
                            Understanding the user and situation
                        </div>
                        <br/>
                        <br/>

                        <div className="sub-heading-text">
                            Competitive and Comparative Analysis
                        </div>
                        <div className="sub-text">
                            <p>My team and I initiated our research by examining three direct and indirect competitors. We compiled this information</p>
                            <p>into a Competitive and Comparative Analysis to assess how these competitors compare to Schedulete. This analysis</p>
                            <p>enabled us to identify improvement opportunities, differentiate our offerings, and make informed strategic decisions.</p>
                            <p>Additionally, it kept us aware of industry trends and best practices, ensuring Schedulete remains competitive and meets</p>
                            <p>user expectations.</p>
                            <br/>
                            <img className="Competitive_Comparative_Analysis w-full" src={Competitive_Comparative_Analysis}/>
                        </div>
                        <br/>


                        <div className="sub-text">
                            <p>From this analysis, we learned that these competitors:</p>
                            <p><b>1.</b>Encompass all types of sports</p>
                            <p><b>2.</b>Allow users to share schedules with others</p>
                            <p><b>3.</b>Do not provide visibility into other teams' schedules</p>
                        </div>
                        <br/>
                        <br/>

                        <div className="sub-heading-text">
                            User Persona
                        </div>
                        <div className="sub-text">
                            <p>To ensure that our future decisions in the process remain focused on the user, we aimed to establish a comprehensive</p>
                            <p>understanding of Schedulete's user base. So, we created a user persona to represent who we will be designing for.</p>
                            <br/>
                            <p>Meet Alex:</p>
                            <br/>
                            <img className="persona w-full" src={persona}/>
                        </div>
                        <br/>
                        <br/>
                        <br/>

                        <div className="sub-heading-text">
                            User Interviews
                        </div>

                        <div className="sub-text">
                            <p>Next, we aimed to validate the persona by conducting user interviews over Zoom. Throughout these interviews,</p>
                            <p>we utilized open-ended questions to glean insights into their experiences, uncover needs, and pinpoint pain points.</p>
                            <br/>
                        </div>
                        
                        <div className="sub-text">
                            <p>We conducted interviews with <b>four participants,</b>about <b>20-30 minutes</b>each. These participants included:</p>
                            <p><b>1.</b>Coaches who use Schedulete on a weekly basis</p>
                            <p><b>2.</b>Coaches who recently started using Schedulete</p>
                            <p><b>3.</b>Coaches who use the app a few times during the month</p>
                        </div>
                        <br/>

                        <img className="w-full"src={User_Interview_James}/>
                        <br></br>
                        <br></br>

                        <div className="sub-text">
                            <p>Here are some insights from our interviewees:</p>
                            <p>"I like to figure out things that I don’t already know." - B</p>
                            <p>"I like the function of creating a game. It's easy and simple." - J</p>
                            <p>"I like that Schedulete is not like a lot of tools out there. I like that Schedulete supports the NCAA." - B</p>
                        </div>
                        <br/>

                        <div className="sub-text">
                            <p>After conducting these one-on-one sessions with the participants, our goal was to synthesize the new information to</p>
                            <p>gain a deeper understanding of our users.</p>
                        </div>
                    </div>
                </div>

                <div className="sub-container synthesize border-t-2 border-black">
                    <div className="heading-text">
                    <br/>
                        Synthesize
                    </div>

                    <div className="sub-text">
                        Integrating information into a unified concept
                    </div>
                    <br/>
                    <br/>

                    <div className="sub-heading-text">
                        Affinity Map
                    </div>
                    <div className="text-container-column">
                        <div className="sub-text">
                            <p>Utilizing Affinity Mapping, we condensed the findings from user interviews into clear pain points and recurring themes.</p>
                            <p>Our analysis revealed a desire among users for new features and enhancements to improve app usability. This enabled</p>
                            <p>us to offer actionable insights for focused design enhancements,  such as incorporating the option to view other coaches'</p>
                            <p>contact information on the main homepage.</p>
                            <br/>
                            <img className="w-full" src={Affinity_Map}/>
                        </div>
                        <br/>
                        <br/>

                        <div className="sub-text">
                            <p><b>Key Takeaways</b></p>
                            <p>From the patterns we identified, <b>three</b>common pain points emerged among the coaches, including:</p>
                            <p><b>1. </b>Difficulties in promptly responding to messages from fellow coaches</p>
                            <p><b>2. </b>Color-coded game types and icons caused confusion</p>
                            <p><b>3. </b>Uncertainty about responding to game invitations and updating game details</p>
                        </div>
                    </div>
                </div>

                <div className="sub-container ideate border-t-2 border-black">
                    <div className="heading-text">
                        <br/>
                        Ideate
                    </div>

                    <div className="sub-text">
                        Challenge assumptions and create ideas
                    </div>
                    <br/>
                    <br/>

                    <div className="sub-container sketches">
                        <div className="sub-heading-text">
                            Sketches
                        </div>
                        <div className="sub-text">
                            <p>Based on identified pain points, we sketched and tested multiple options to optimize the user experience with minimal</p>
                            <p>changes. Throughout the redesign, we focused on our target audience, UX goals, and the company mission. After several</p>
                            <p>iterations, we developed effective solutions.</p>
                        </div>
                        <br/>

                        <div>
                            <img src={Create_New_Game}/>
                            <br/>
                            <p>These sketches illustrate different approaches to<b> create a game.</b></p>
                        </div>
                        <br/>
                        <br/>
                        <br/>

                        <div>
                            <img src={Respond_to_an_Invitation}/>
                            <br/>
                            <p>These sketches illustrate different approaches to<b> respond to an invitation.</b></p>
                        </div>
                        <br/>
                        <br/>
                        <br/>

                        <div>
                            <img src={Search_for_a_Game}/>
                            <br/>
                            <p>These sketches illustrate different approaches to<b> search for a game.</b></p>
                        </div>
                        <br/>
                        <br/>
                        <br/>

                        <div>
                            <img src={Edit_Game_Details}/>
                            <br/>
                            <p>These sketches illustrate different approaches to<b> edit game details.</b></p>
                        </div>
                    </div>

                    <div className="sub-container user task flow">
                        <div className="sub-heading-text">
                            Site Map
                        </div>
                        <div className="sub-text">
                            <p>We then carried out a card sorting exercise to establish the fundamental information architecture for the different pages</p>
                            <p>and navigation pathways that a user might take in Schedulete.</p>
                            <br/>
                            <img className="w-full" src={Site_Map}/>
                        </div>
                    </div>
                    <br/>

                    <div className="sub-container user task flow">
                        <div className="sub-heading-text">
                            User Task Flow
                        </div>
                        <div className="sub-text">
                            <p>Next, we developed a task flow outlining the typical steps users take to complete tasks in Schedulete. This visualization</p>
                            <p>helped us identify potential obstacles and inefficiencies in communication, creating a game, and searching for a game,</p>
                            <p>allowing for targeted improvements to enhance the user experience. By understanding the user's journey, we were able</p>
                            <p>to create more intuitive and seamless interactions.</p>
                            <br/>
                            <img className="w-full" src={User_Task_Flow}/>
                        </div>
                    </div>
                    <br/>

                    <div className="sub-container user journey map">
                        <div className="sub-heading-text">
                            User Journey Map
                        </div>
                        <div className="sub-text">
                            <p>Now, we wanted to dive even deeper and get a better understanding of the overall journey users would be taking</p> 
                            <p>throughout the app from start to finish. We wanted to better empathize with the scenarios users may be in, different</p>
                            <p>decisions they would be making, and also the different paths they might take. To do this, we created a user journey map,</p>
                            <p>which helped us to better understand coaches' journey when they access games on the Schedulete platform.</p>
                            <br/>
                            <img className="w-full" src={User_Journey_Map}/>
                            <br/>          
                            <p>From this journey map, we discovered that most users struggle with changing game details on Schedulete. They have</p>
                            <p>difficulties confirming alternative time proposals, finding different time options, understanding game status indicators,</p>
                            <p>and interpreting email notifications. Users met their unmet needs with workarounds, such as checking the calendar or</p>
                            <p>alerts, using the list view, looking for blue dot alerts on the calendar, or making calls to confirm game details.</p>             
                        </div>
                    </div>
                </div>

                <div className="sub-container Prototype border-t-2 border-black">
                    <div className="heading-text">
                        <br/>
                        Prototype
                    </div>

                    <div className="sub-text">
                        Create solutions
                    </div>
                    <br/>
                    <br/>

                    <div className="sub-heading-text">
                        Lo-fi Prototype
                    </div>
                    <div className="text-container-column">
                        <div className="sub-text mb-10">
                            <p>At this point in the process armed with research-backed solutions for Schedulete, we were excited to translate these</p>
                            <p>insights into clickable form. We used the low-fidelity wireframe sketches to create a low-fidelity interactive prototype.</p>
                            <p>The low-fidelity prototype established the core user flow for scheduling games and contacting other coaches, which</p>
                            <p>enabled its use in a usability study.</p>
                        </div>
                        <br/>
                        <a className="text-blue-500 text-center" href="https://www.figma.com/proto/zGYqttjcWnwPUg2lET3tPt/Paella-Bowls-V2-(Wireframes%2C-Mockups%2C-and-Prototype)?type=design&node-id=1-2&t=HhXMyGl9bC5bJhBA-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design" target='_blank'>View Schedulete's low-fidelity prototype</a>
                        <br/>
                        <br/>
                    </div>
                    
                    <div className="sub-heading-text">
                        Hi-fi Prototype
                    </div>
                    <div className="text-container-column">
                        <div className="sub-text mb-10">
                            <p>The high-fidelity prototype provided a polished version of the core user flow, including creating a new game, responding</p>
                            <p>to invitations, searching for games, and editing game details, making it suitable for a usability study.</p>
                            <br/>
                        </div>
                        <br/>
                        <a className="text-blue-500 text-center" href="https://www.figma.com/proto/zGYqttjcWnwPUg2lET3tPt/Paella-Bowls-V2-(Wireframes%2C-Mockups%2C-and-Prototype)?type=design&node-id=1-2&t=HhXMyGl9bC5bJhBA-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design" target='_blank'>View Schedulete's hi-fidelity prototype</a>
                    </div>
                </div>

                <div className="sub-container Test border-t-2 border-black">
                    <div className="heading-text">
                        <br/>
                        Test
                    </div>
                    
                    <div className="sub-text">
                        Exploring the prototype thoroughly
                    </div>
                    <br/>
                    <br/>

                    <div className="sub-heading-text">
                        Usability Testing
                    </div>

                    <div className="text-container-column">
                        <div className="sub-text">
                            <p>We prepared a usability test plan to help us stay on track and determine objectives that made sense for our design.</p>
                            <p>Our main goal was to determine if users are able to navigate through the flows with ease and gather their frustrations and feedback.</p>
                            <br/>
                            <p>We observed <b>five</b>coaches as they interacted with the hi prototype, assessing how they create a game, respond to an</p>
                            <p>invitation, search for a game, and edit game details.</p>
                            <br/>
                            <p>Overall, we received positive feedback regarding the features and design of Schedulete, including:</p>
                            <p><b>1.</b>Users find it easy and simple to create and post open games</p>
                            <p><b>2.</b>Users appreciate the ability to see other teams' open games and browse for away games</p>
                            <p><b>3.</b>Schedulete is helpful for finding games outside of existing connections</p>
                            <p><b>4.</b>Users enjoy the ability to view the calendar month to month and the social aspect of experiencing content together</p>
                            <br/>
                            <p>Below are actionable points that guided us through my first round of iterations:</p>
                            <p><b>1.</b>Users want the ability to search for open games by filtering based on specific criteria like division, game type, and day of the week.</p>
                            <p><b>2.</b>Users would like to see additional features such as a calendar view and the ability to schedule non-conference games directly through Schedulete.</p>
                        </div>
                    </div>
                </div>

                <div className="sub-container Project Reflection border-t-2 border-black">
                    <div className="heading-text">
                        <b>Final Design</b> 
                    </div>


                </div>

                <div className="sub-container Project Reflection border-t-2 border-black">
                    <div className="heading-text">
                        <br/>
                        Project Reflection
                    </div>
                    <br/>
                    
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
            <br/>
            <br/>
            <br/>

            <Footer/>
        </div>
    )
}