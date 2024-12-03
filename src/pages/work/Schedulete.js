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
        <div className="work-container text-white">
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
                        <div className="sub-text">
                            Schedulete is a web application designed to simplify scheduling and communication for sports coaches, empowering them to spend more time focusing on their teams and less on administrative tasks. The app aims to enhance efficiency by providing intuitive tools that streamline these critical processes.
                        </div>
                    </div>
                    <br/>
                    <br/>

                    <div className="sub-heading-text">
                        Project Details
                    </div>

                    <div className="sub-text">
                        <b>Role:</b>UX Designer
                        </div>
                        <br></br>

                        <div className="sub-text">
                            <b>Responsibilities:</b>
                                <ul>
                                    <li>Synthesizing user feedback</li>
                                    <li>Sketching</li>
                                    <li>Wireframing</li>
                                    <li>Prototyping</li>
                                </ul>
                        </div>
                        <br></br>

                        <div className="sub-text">
                            <b>Team:</b>
                            <ul>
                                <li>Olivia J. (Project Manager)</li>
                                <li>Eugene K. (UX Designer)</li>
                                <li>Angela K. (UX Designer)</li>
                            </ul>
                        </div>
                        <br></br>

                        <div className="sub-text">
                            <b>Tools:</b>
                                <ul>
                                    <li>Figma</li>
                                    <li>FigJam</li>
                                    <li>Slack</li>
                                    <li>Zoom</li>
                                    <li>Google Suite</li>
                                    <li>Whimsical</li>
                                </ul>  
                        </div>
                    <br/>
                    <br/>

                    <div className="sub-heading-text">
                        The Challenge
                    </div>

                    <div className="sub-text">
                        Improve the user experience for NCAA coaches by streamlining the process of posting and responding to game invitations. The goal is to empower coaches with an intuitive workflow that enhances in-app communication and simplifies progress tracking, making their administrative tasks more efficient.
                    </div>
                    <br></br>
                    

                    <div className="sub-heading-text">
                        Goals
                    </div>
                    <div className="sub-text">
                        To gain a deeper understanding of Schedulete's background, market positioning, and user demographics, my team and I established the following objectives:
                        <br></br>
                        <br></br>
                            <b>1.</b> Design a user-friendly coach communication experience
                        <br></br>
                            <b>2.</b> Craft an intuitive interface aligned with Schedulete's brand and UI standards
                        <br></br>
                            <b>3.</b> Enhance engagement by streamlining game invitations
                    </div>
                    <br/>
                    <br/>

                    <div className="sub-heading-text">
                        Process
                    </div>

                    <div className="sub-text">
                        We started by conducting research to identify existing challenges. In the subsequent phases, we developed a user persona, applied affinity mapping to highlight key priorities, created a task flow, designed a site map, mapped the user journey, and built prototypes to validate the redesign. Each step helped ensure the final product would meet user needs and improve the overall experience.
                    </div>
                    <br></br>

                    <div className="sub-text">
                        Now, let's delve deeper into each step.
                    </div>
                    <br></br>

                    <img className="Design_Process" src={Design_Process}/>
                </div>

                <div className="sub-container research border-t-2 border-white">
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
                            My team and I began our research by analyzing three direct and indirect competitors. We synthesized this data into a competitive and comparative analysis to evaluate how these competitors stack up against Schedulete. This analysis helped us uncover areas for improvement, identify opportunities for differentiation, and make data-driven strategic decisions. Furthermore, it allowed us to stay aligned with industry trends and best practices, ensuring that Schedulete not only stays competitive but also continuously meets evolving user expectations.
                        </div>
                        <br></br>
                        <img className="Competitive_Comparative_Analysis w-full" src={Competitive_Comparative_Analysis}/>

                        <br></br>
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
                            To keep our design decisions user-centered, we focused on gaining a deep understanding of Schedulete's target audience. We created a user persona that represents our ideal user, helping us stay aligned with their needs, goals, and pain points throughout the design process.
                        </div >
                        <br></br>

                        <div className="sub-text">
                            Meet Alex:
                        </div>
                        <br></br>
                        <img className="persona w-full" src={persona}/>
                        <br></br>
                        <br/>
                        <br/>
                        <br/>

                        <div className="sub-heading-text">
                            User Interviews
                        </div>

                        <div className="sub-text">
                            Next, we set out to validate the persona by conducting user interviews via Zoom. During these interviews, we employed open-ended questions to gather qualitative insights into users' experiences, identify their needs, and uncover any pain points that could inform our design decisions.
                        </div>
                        <br></br>

                        <div className="sub-text">
                            <p>We conducted user interviews with four participants, each lasting 20-30 minutes. The participants represented a diverse range of user types, including:</p>
                            <br></br>
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
                            <p>"I like that Schedulete stands out from other tools on the market, and I especially like that it supports the NCAA." - B</p>
                        </div>
                        <br/>

                        <div className="sub-text">
                            After conducting one-on-one sessions with the participants, our goal was to synthesize the collected insights to gain a deeper, more nuanced understanding of our users' needs, behaviors, and pain points.
                        </div>
                    </div>
                </div>

                <div className="sub-container synthesize border-t-2 border-white">
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
                            Using Affinity Mapping, we organized the findings from the user interviews into key pain points and recurring themes. Our analysis highlighted a clear user demand for new features and improvements to enhance the app's usability. This insight allowed us to propose actionable design enhancements, such as adding an option to view other coaches' contact information directly on the main homepage.
                        </div>
                        <br></br>

                        <img className="w-full" src={Affinity_Map}/>
                        <br></br>

                        <div className="sub-heading-text">
                            Key Takeaways
                        </div>

                        <div className="sub-text">
                            From the patterns, we uncovered <b>three</b>common pain points among the coaches, including:
                            <br></br>
                            <b>1. </b>Difficulties in promptly responding to messages from fellow coaches
                            <br></br>
                            <b>2. </b>Color-coded game types and icons caused confusion
                            <br></br>
                            <b>3. </b>Uncertainty about responding to game invitations and updating game details
                        </div>
                    </div>
                </div>

                <div className="sub-container ideate border-t-2 border-white">
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
                            Based on the identified pain points, we ideated and tested multiple design options to optimize the user experience while minimizing changes. Throughout the redesign process, we remained focused on our target audience, UX goals, and the company’s mission. After several iterations and refinements, we arrived at effective solutions that addressed user needs and aligned with our overall objectives.
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
                            Next, we conducted a card sorting exercise to define the core information architecture for the various pages and navigation pathways within Schedulete, ensuring an intuitive and user-friendly structure.
                        </div>
                        <br></br>
                        <img className="w-full" src={Site_Map}/>
                    </div>
                    <br/>

                    <div className="sub-container user task flow">
                        <div className="sub-heading-text">
                            User Task Flow
                        </div>
                        <div className="sub-text">
                            Next, we created a task flow diagram to map out the typical steps users take to complete key tasks in Schedulete, such as creating and searching for a game. This visualization helped us pinpoint potential obstacles and inefficiencies in the process, enabling us to make targeted improvements. By gaining a deeper understanding of the user's journey, we were able to design more intuitive and seamless interactions that enhance the overall user experience.
                        </div>
                        <br></br>
                        <img className="w-full" src={User_Task_Flow}/>
                    </div>
                    <br/>

                    <div className="sub-container user journey map">
                        <div className="sub-heading-text">
                            User Journey Map
                        </div>
                        <div className="sub-text">
                            To gain a deeper understanding of the overall user experience, we mapped out the full journey users take through the app, from start to finish. Our goal was to empathize with the various scenarios users might encounter, the decisions they would make, and the different paths they could take. By creating a user journey map, we were able to gain valuable insights into how coaches navigate the Schedulete platform, particularly when accessing games, and identify opportunities to enhance their experience.
                        </div>
                        <br></br>

                        <img className="w-full" src={User_Journey_Map}/> 
                        <br/> 
                        <div className="sub-text">       
                            Through the journey map, we identified that many users struggle with updating game details on Schedulete. Key pain points included difficulties confirming alternative time proposals, locating available time options, understanding game status indicators, and interpreting email notifications. To address these challenges, users often resorted to workarounds, such as checking the calendar or alerts, using the list view, looking for blue dot indicators on the calendar, or making calls to confirm game details. These insights highlighted areas for improvement to streamline the user experience and reduce reliance on manual workarounds.
                        </div>
                    </div>
                </div>

                <div className="sub-container Prototype border-t-2 border-white">
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
                        Hi-fi Prototype
                    </div>
                    <div className="text-container-column">
                        <div className="sub-text mb-10">
                            With research-backed solutions in hand, we were eager to bring our insights to life in an interactive format. Using low-fidelity wireframe sketches and access to the Schedulete web app, we developed a high-fidelity interactive prototype. Having access to the Schedulete staging site allowed us to efficiently explore and test the app's features, ensuring the prototype was aligned with the real-world functionality. This high-fidelity prototype established the core user flow for scheduling games and contacting other coaches, setting the foundation for its use in a usability study.
                        </div>
                        <br/>
                        <a className="text-blue-500 text-center" href="https://www.figma.com/proto/Smbi7ESkdtE1IkfUZGZcRe/Schedulete-Persona?node-id=714-15790&t=pXf0Nlbou8IyprZD-1&scaling=contain&page-id=0%3A1" target='_blank'>View hi-fidelity prototype</a>
                        <br/>
                        <br/>
                    </div>
                </div>

                <div className="sub-container Test border-t-2 border-white">
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
                            We developed a usability test plan to ensure a structured approach and clearly defined objectives aligned with our design goals. The primary focus was to assess whether users could navigate the key flows seamlessly, while also capturing any frustrations and gathering valuable feedback to inform further improvements.
                        </div>
                        <br></br>
                        <div className="sub-text">
                            We conducted usability testing with five coaches, observing how they interacted with the high-fidelity prototype. Our focus was on key tasks such as searching for an open game, creating a new game, sending and responding to game invitations, editing game details, selecting an open game, and accessing their profiles. This allowed us to identify usability issues and gain insights into how coaches navigate the app’s core features.
                        </div>
                        <br></br>

                        <div className="sub-text">
                            Overall, we received positive feedback on both the features and design of Schedulete, including:
                            <br></br>
                            <b>1.</b> The "create game" feature was praised for being intuitive and easy to use.
                            <br></br>
                            <b>2.</b> The ability to view other teams' open games and browse for away games was highly appreciated by users.
                            <br></br>
                            <b>3.</b> One participant mentioned they would "10/10 recommend Schedulete to a friend," highlighting the app’s appeal and user satisfaction.
                        </div>
                        <br></br>

                        <div className="sub-text">
                            Key action points that informed the prototype update:
                            <br></br>
                            <b>1.</b> Add filter for open games – Participants expressed a need to filter open games by division, game type, and day of the week to streamline the search process.
                            <br></br>
                            <b>2.</b> Introduce additional features – Users requested a calendar view for better game organization and the ability to schedule non-conference games for increased flexibility.
                        </div>
                    </div>
                </div>

                <div className="sub-container Project Reflection border-t-2 border-white">
                    <div className="heading-text">
                        <br></br>
                        Final Design 
                    </div>
                    <br></br>

                    <div className="text-container-column">
                        <div className="sub-text">
                            Based on feedback from the usability study, we developed a high-fidelity prototype that refined the core user flow. This included streamlining game creation, invitation responses, game searches, and game detail edits, with a focus on enhancing usability and ensuring a more intuitive user experience.
                        </div>
                        <br/>
                        <a className="text-blue-500 text-center" href="https://www.figma.com/proto/0rCOmakG4p5zZIRECXeuhM/Schedulete?node-id=1-5051&t=qyMbPJqZK9epwJCU-1&scaling=contain&page-id=0%3A1" target='_blank'>View final design</a>
                    </div>

                </div>

                <div className="sub-container Project Reflection border-t-2 border-white">
                    <div className="heading-text">
                        <br/>
                        Project Reflection
                    </div>
                    <br/>
                    
                    <div className="sub-heading-text">
                        <p>Project Takeaways</p>
                    </div>
                    <div className="sub-text">
                        I anticipated that this project would present challenges, particularly given the coaches' limited time to respond to each other. To tackle this, my team and I brainstormed ways the web app could alleviate this pressure. I truly enjoyed the process of designing and optimizing user flows and interactions. Working on Schedulete was both engaging and rewarding. Collaborating with my team to refine the platform helped us deliver the best possible MVP, and we're proud of the outcome.
                    </div>
                    <br></br>

                    <div className="sub-heading-text">
                        <p>Next Steps</p>
                    </div>
                
                    <div className="sub-text">
                        If I had more time to work on this project, I would focus on the following enhancements:
                        <br></br>
                        <b>1.</b> Develop a more structured project plan, prioritizing the MVP's core needs and managing feature backlogs effectively.
                        <br></br>
                        <b>2. </b> Conduct additional user interviews to uncover new areas for improvement and ensure the design aligns with evolving user needs.
                        <br></br>
                        <b>3.</b> Refine and enhance the overall design of the app to further optimize usability and the user experience.
                    </div>
                    <br></br>
                    
                    <div className="sub-heading-text">
                        <p>What I Learned</p>
                    </div>
                    
                    <div className="sub-text">
                        Improving coach-to-coach communication and making game availability more accessible are key areas for continuous enhancement. Usability studies and user feedback play a crucial role in guiding each iteration of the app's design, ensuring we meet user needs and drive ongoing improvements.
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>

                    <div className="sub-heading-text text-center">
                        <p>Thank you for reading! 😊</p>
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