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
                    <br></br>
                    <br></br>

                    <div className="sub-heading-text">
                        The Challenge
                    </div>

                    <div className="sub-text">
                        Improve the user experience for NCAA coaches by streamlining the process of posting and responding to game invitations. The goal is to empower coaches with an intuitive workflow that enhances in-app communication and simplifies progress tracking, making their administrative tasks more efficient.
                    </div>
                    <br></br>
                    <br></br>
                    

                    <div className="sub-heading-text">
                        Goals
                    </div>
                    <div className="sub-text">
                        To gain a deeper understanding of Schedulete's background, market positioning, and user demographics, my team and I established the following objectives:
                        <br></br>
                        <br></br>
                            <b>1.</b>Design a user-friendly coach communication experience
                        <br></br>
                            <b>2.</b>Craft an intuitive interface aligned with Schedulete's brand and UI standards
                        <br></br>
                            <b>3.</b>Enhance engagement by streamlining game invitations
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
                            From this analysis, we learned that these competitors:
                            <br></br>
                            <b>1.</b>Encompass all types of sports
                            <br></br>
                            <b>2.</b>Allow users to share schedules with others
                            <br></br>
                            <b>3.</b>Do not provide visibility into other teams' schedules
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
                            We conducted user interviews with four participants, each lasting 20-30 minutes. The participants represented a diverse range of user types, including:
                            <br></br>
                            <br></br>
                            <b>1.</b>Coaches who use Schedulete on a weekly basis
                            <br></br>
                            <b>2.</b>Coaches who recently started using Schedulete
                            <br></br>
                            <b>3.</b>Coaches who use the app a few times during the month
                        </div>
                        <br/>

                        <img className="w-full"src={User_Interview_James}/>
                        <br></br>
                        <br></br>

                        <div className="sub-text">
                            Here are some insights from our interviewees:
                            <br></br>
                            "I like to figure out things that I don’t already know." - B
                            <br></br>
                            "I like the function of creating a game. It's easy and simple." - J
                            <br></br>
                            "I like that Schedulete stands out from other tools on the market, and I especially like that it supports the NCAA." - B
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
                            Using affinity mapping, we organized the findings from the user interviews into key pain points and recurring themes. Our analysis highlighted a clear user demand for new features and improvements to enhance the app's usability. This insight allowed us to propose actionable design enhancements, such as adding an option to view other coaches' contact information directly on the main homepage.
                        </div>
                        <br></br>

                        <img className="w-full" src={Affinity_Map}/>
                        <br></br>
                        <br></br>

                        <div className="sub-heading-text">
                            Key Takeaways
                        </div>

                        <div className="sub-text">
                            From the patterns, we uncovered three common pain points among the coaches, including:
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
                            These sketches explore various design approaches for creating a game. Each concept focuses on balancing user needs, intuitive interactions, and aesthetic appeal. This early ideation phase helps visualize potential user journeys and refine key features before moving into prototyping.
                        </div>
                        <br/>
                        <br/>
                        <br/>

                        <div>
                            <img src={Respond_to_an_Invitation}/>
                            <br/>
                            These sketches present different design approaches for responding to an invitation, focusing on usability, clarity, and accessibility. Each concept explores how users might interact with the interface to accept, decline, or request more information seamlessly. By visualizing these scenarios, we were able to better assess how design choices impact the user journey and ensure the response process feels intuitive and engaging.
                        </div>
                        <br/>
                        <br/>
                        <br/>

                        <div>
                            <img src={Search_for_a_Game}/>
                            <br/>
                            These sketches explore various design approaches for a game search interface, prioritizing usability, efficiency, and a seamless user experience. Each concept examines how users might filter, sort, and discover games based on preferences such as team, type, date, or location. By visualizing these options, we were able to evaluate which design best supports user needs and aligns with the overall product goals, ensuring an intuitive and engaging search experience.
                        </div>
                        <br/>
                        <br/>
                        <br/>

                        <div>
                            <img src={Edit_Game_Details}/>
                            <br/>
                            These sketches explore various design approaches for editing game details, focusing on usability, clarity, and efficiency. Each concept addresses how users can seamlessly modify key information such as team, type, date, location, and notes while minimizing errors and enhancing workflow. By visualizing these options, we were able to evaluate which design best supports user needs, ensures accessibility, and aligns with the platform's overall functionality.
                        </div>
                    </div>

                    <div className="sub-container user task flow">
                        <div className="sub-heading-text">
                            Site Map
                        </div>
                        <div className="sub-text">
                            Next, we conducted a card sorting exercise to define the core information architecture for Schedulete’s various pages and navigation pathways. This exercise helped us understand how users categorize and prioritize information, ensuring that the final structure would be intuitive and user-friendly. By organizing content in a way that aligns with user mental models, we aimed to create a seamless navigation experience that enhances usability and reduces friction.
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
                            We created a task flow diagram to map out the typical steps users take when completing key tasks in Schedulete, such as searching for a game, creating a game, and editing game details. This visualization allowed us to identify potential obstacles and inefficiencies in the process, providing insights for targeted improvements. By gaining a deeper understanding of the user journey, we were able to refine interactions and design more intuitive, seamless experiences that enhance overall usability and satisfaction.
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
                        <br/>
                        <div className="sub-heading-text">
                            Key Pain Points
                        </div>
                        <div className="sub-text">       
                            Through the journey map, we identified several pain points that users face, including:
                            <br></br>
                            <b>1.</b>Difficulties confirming alternative time proposals
                            <br></br>
                            <b>2.</b>Locating available time options
                            <br></br>
                            <b>3.</b>Understanding game status indicators
                            <br></br>
                            <b>4.</b>Interpreting email notifications.
                            <br></br>
                            <br></br>

                            In response, users often relied on workarounds, such as checking the calendar or alerts, using the list view, searching for blue dot indicators, or calling other coaches to confirm details. These insights revealed critical areas where we could improve the user experience by streamlining processes and reducing the need for manual workarounds.
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
                            <b>1.</b>The "Create Game" feature was praised for being intuitive and easy to use.
                            <br></br>
                            <b>2.</b>The ability to view other teams' open games and browse for away games, which was highly appreciated.
                            <br></br>
                            <b>3.</b>One participant shared that they would "10/10 recommend Schedulete to a friend," reflecting strong user satisfaction and the app’s overall appeal.
                        </div>
                        <br></br>
                        <br></br>

                        <div className="sub-heading-text">
                            Key Action Points
                        </div>
                        <div className="sub-text">
                            Key action points that informed the prototype update:
                            <br></br>
                            <b>1.</b> Add a filter for open games – Participants highlighted the need to filter open games by division, game type, and day of the week to make the search process more efficient.
                            <br></br>
                            <b>2.</b> Introduce additional features – Users requested a calendar view for improved game organization and the ability to schedule non-conference games, providing greater flexibility in planning.
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
                            Based on feedback from the usability study, we developed a high-fidelity prototype that refined the core user flow to better align with user needs. This iteration focused on streamlining key tasks such as game creation, invitation responses, game searches, and editing game details. We made improvements to reduce friction and enhance usability, ensuring that each interaction felt more intuitive and efficient. By focusing on these areas, we aimed to provide a smoother, more seamless user experience that addressed pain points identified during testing.
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
                        I anticipated challenges with this project, especially given the coaches' limited time to collaborate. To address this, my team and I brainstormed ways the web app could ease these constraints. I found the process of designing and optimizing user flows and interactions both engaging and rewarding. Working on Schedulete was an exciting opportunity to refine the platform through close collaboration, ultimately delivering an MVP we're proud of.
                    </div>
                    <br></br>

                    <div className="sub-heading-text">
                        <p>Next Steps</p>
                    </div>
                
                    <div className="sub-text">
                        If I had more time to work on this project, I would focus on the following enhancements:
                        <br></br>
                        <b>1.</b>Develop a more structured project plan, prioritizing core MVP features and effectively managing the feature backlog.
                        <br></br>
                        <b>2.</b>Conduct additional user interviews to identify new areas for enhancement and ensure the design continues to meet evolving user needs.
                        <br></br>
                        <b>3.</b>Refine the app’s overall design to further optimize usability and enhance the user experience.
                    </div>
                    <br></br>
                    
                    <div className="sub-heading-text">
                        <p>What I Learned</p>
                    </div>
                    
                    <div className="sub-text">
                        Improving coach-to-coach communication and enhancing game availability are crucial areas for ongoing refinement. Usability studies and user feedback are essential in shaping each iteration of the app, ensuring we align with user needs and drive continuous improvements.
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