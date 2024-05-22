import '../../scss/work.scss';
import '../../scss/Kikori.scss';
import Kikori_Homepage from '../kikori_imgs/Kikori_Homepage.png';
import nine_grid_image from '../kikori_imgs/nine_grid_image.jpg';
import zoom_call_image from '../kikori_imgs/zoom_call_image.png';
import persona1 from '../kikori_imgs/Persona_1_Anna.png';
import persona2 from '../kikori_imgs/Persona_2_Trish.png';
import affinity_map from '../kikori_imgs/affinity_map.png'
import crazy8_sketch_1 from '../kikori_imgs/Crazy_8_Sketch_1.png'
import crazy8_sketch_2 from '../kikori_imgs/Crazy_8_Sketch_2.png'
import crazy8_sketch_3 from '../kikori_imgs/Crazy_8_Sketch_3.png'
import user_task_flow from '../kikori_imgs/user_task_flow.png'
import user_journey_map from '../kikori_imgs/user_journey_map.png'
import mockups1 from '../kikori_imgs/hi_fi_designs/mockups1.png';
import activities from '../kikori_imgs/hi_fi_designs/activities.png';
import browse_by_category from '../kikori_imgs/hi_fi_designs/browse_by_category.png';
import mockups2 from '../kikori_imgs/hi_fi_designs/mockups2.png';
import rating from '../kikori_imgs/hi_fi_designs/rating.png';
import mockups3 from '../kikori_imgs/hi_fi_designs/mockup3.png';
import badges from '../kikori_imgs/hi_fi_designs/badges.png';
import mockups4 from '../kikori_imgs/hi_fi_designs/mockup4.png';
import journeyboard from '../kikori_imgs/hi_fi_designs/journeyboard.png';
import journeyboard_recommendations from '../kikori_imgs/hi_fi_designs/journeyboard_recommendations.png';
import lofi_screenshot from '../kikori_imgs/lofi_screenshot.png';
import midfi_screenshot from '../kikori_imgs/midfi_screenshot.png';
import hifi_screenshot from '../kikori_imgs/hifi_screenshot.png';
import Design_Process from '../kikori_imgs/Design_Process.png'
import 'react-medium-image-zoom/dist/styles.css'
import Footer from '../../components/Footer';

export default function Kikori(){
    const project_title = 'Kikori';

    return(
        <div className="work-container">
            <div className='project-title'> {project_title}</div>
            <div className='laptop-image-container'>
                <br></br>
                <img className="kikori-homepage" src={Kikori_Homepage}/>
            </div>
            <br></br>
            <br></br>

            <div className="sub-container m-auto max-w-[62rem]">
                <div className="sub-container overview">
                    <div className="heading-text">
                        Overview
                    </div>
                    <br></br>

                    <div className="sub-heading-text">
                        About Kikori
                    </div>

                    <div className="sub-text w-full">
                        <p>Kikori is a community-driven platform that provides K-12 educators with easy access to experiential social emotional learning</p>
                        <p>(eSEL) curriculum that help students play, reflect, connect, and grow. Kikori makes it easy for all educators to create the ideal</p>
                        <p>environment for learning and transformation.</p>
                    </div>
                    <br></br>
                    <br></br>

                    <div className="sub-heading-text">
                        Project Details
                    </div>
                    
                    <div className='flex'>
                        <div class="sub-text mr-12">
                            <p><b>Role:</b>UX Designer</p>
                        </div>

                        <div class="sub-text mr-12">
                            <p><b>Responsibilities:</b></p>
                            <ul>
                                <li>Synthesizing user feedback</li>
                                <li>Sketching</li>
                                <li>Wireframing</li>
                                <li>Prototyping</li>
                            </ul>
                        </div>

                        <div className="sub-text mr-12">
                            <p><b>Team:</b></p>
                            <ul>
                                <li>Mari F. (UX Designer)</li>
                                <li>Brittney J. (UX Designer)</li>
                            </ul>
                        </div>

                        <div className="sub-text mr-12">
                            <p><b>Tools:</b></p>
                            <ul>
                                <li>Figma</li>
                                <li>FigJam</li>
                                <li>Slack</li>
                                <li>Zoom</li>
                                <li>Workona</li>
                                <li>Google Drive</li>
                                <li>Zeplin</li>
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
                            <p>Design an effective and intuitive way for educators to find/search, view, save and schedule activities, open and complete</p>
                            <p>activities from the schedule (allowing to capture data for the user dashboard with streaks, badges and optional notes),</p>
                            <p>mark them as played and share activities and curriculum/calendars.</p>
                        </div>
                    </div>

                    <div className="text-container-row mt-10">
                        <div className="flex w-1/2"> 
                            <b>Problem:</b>Encourage prolonged interaction on the web app.
                        </div>
                        <div className="flex w-1/2"> 
                            <b>Solution:</b>Craft an engaging user experience by prioritizing needs, delivering quality content, integrating social elements, tailoring experiences, gathering feedback, and refining for optimal performance.
                        </div>
                    </div>
                    <br></br>
                    <br></br>

                    <div className="sub-heading-text">
                        Goals
                    </div>
                    <div className="text-container-column">
                        <div className="sub-text">
                            <p>To gain deeper insights into Kikori's background, market positioning, and user demographics, my team and I initiated our</p>
                            <p>efforts with the following objectives:</p>
                            <br></br>

                            <p><b>1.</b>Design a purposeful user experience to enhance activity discovery and searchability</p>
                            <p><b>2.</b>Create an intuitive, visually appealing interface that aligns with Kikori's brand identity and UI guidelines</p>
                            <p><b>3.</b>Increase user engagement and retention with features and content that encourage prolonged interaction</p>
                        </div>
                    </div>
                    <br></br>
                    <br></br>

                    <div className="sub-heading-text">
                        Process
                    </div>
                    <div className="sub-text">
                        <p>We began by conducting research to understand existing challenges. In the following phases, we developed a user persona,</p>
                        <p>used affinity mapping to identify key priorities, crafted a user task flow, designed a site map, created a user journey map,</p>
                        <p>and built prototypes to validate the redesign.</p>
                        <p></p>
                        <p></p>
                        <br></br>
                        <p>Now, let's explore each step in more detail.</p>
                        <br></br>
                        <img className="Design_Process" src={Design_Process}/>
                    </div>
                </div>

                <div className="sub-container reflection border-t-2 border-black">
                    <div className="sub-container research">
                        <div className="heading-text">
                            <br></br>
                            Research
                        </div>
                        
                        <div className="sub-text">
                            Understanding the user and situation
                        </div>
                        <br></br>
                        <br></br>

                        <div className="sub-heading-text">
                            Competitive Analysis
                        </div>

                        <div className="sub-text">
                            <p>We analyzed Kikori's top competitors to evaluate their strengths and weaknesses. This information helped us to understand</p>
                            <p>what the trends are across all competitors, their unique differences, and why users might choose a particular service over</p>
                            <p>another. These learnings helped guide our approach to our designs.</p>
                        </div>
                        <br></br>
                            
                        <img className="w-90"src={nine_grid_image}/>
                        <br></br>

                        <div className="sub-text">
                            <p>From this analysis, we learned that these competitors:</p>
                            <p><b>1.</b>Have an SEL focus</p>
                            <p><b>2.</b>Are web-based platforms</p>
                            <p><b>3.</b>Are international</p>
                        </div>
                        <br></br>
                        <br></br>

                        <div className="sub-heading-text">
                            User Personas
                        </div>

                        <div className="sub-text">
                            <p>To ensure our decisions throughout the process remain user-centered, we sought a comprehensive understanding of Kikori's</p>
                            <p>user base. As a result, we created two user personas to represent the individuals we’ll be designing for.</p>
                            <br></br>
                            Meet Anna and Trish:
                        </div>
                        <br></br>
                        <img src={persona1}/>
                        <br></br>
                        <br></br>
                        <img className="mt-5" src={persona2}/>
                        <br></br>
                        <br></br>

                        <div className="sub-heading-text">
                            User Interviews
                        </div>

                        <div className="sub-text">
                            <p>Next, we engaged in one-on-one interviews via Zoom with <b>six participants</b>to delve deeper into user behavior and usage</p>
                            <p>patterns on the Kikori platform while accessing activities.</p>
                        </div>
                        <br></br>
                        
                        <div className="sub-text"> 
                            <p>These six participants included:</p>
                        </div>

                        <div className="sub-text">
                            <p><b>1.</b>Educators who use Kikori 3+ times a week</p>
                            <p><b>2.</b>Live in the U.S.</p>
                            <p><b>3.</b>Work in public or charter schools</p>
                        </div>
                        <br></br>

                        <img className="w-full"src={zoom_call_image}/>
                        <br></br>

                        <div className="sub-text">
                            <p>After conducting these one-on-one sessions with the participants, we aimed to synthesize the new information to gain a</p>
                            <p>clearer understanding of our users.</p>
                        </div>
                    </div>
                </div>

                <div className="sub-container synthesize border-t-2 border-black">
                    <div className="heading-text">
                        <br></br>
                        Synthesize
                    </div>

                    <div className="sub-text">
                        Integrating information into a unified concept
                    </div>
                    <br></br>
                    <br></br>

                    <div className="sub-heading-text">
                        Affinity Map
                    </div>

                    <div className="sub-text">
                        <p>Using Affinity Mapping, we condensed educators' interview findings into clear pain points and common themes. We found</p>
                        <p>that educators are constrained by time, limiting their ability to find activities quickly. This informed actionable insights for</p>
                        <p>focused design enhancements, such as simplifying the activity search process.</p>
                    </div>
                    <br></br>

                    <img className="w-90"src={affinity_map}/>
                    <br></br>
                    <br></br>

                    <div className="sub-text">
                        <p><b>Key Takeaways</b></p>
                        <p>From the patterns we identified, <b>three</b>common pain points emerged among the educators, including:</p>
                        <p><b>1.</b>Time constraints with conducting activities</p>
                        <p><b>2.</b>Kikori's homepage is overwhelming</p>
                        <p><b>3.</b>Difficulty finding engaging activities for their students</p>
                    </div>
                    
                </div>

                <div className="sub-container ideation methods border-t-2 border-black">
                    <div className="heading-text">
                        <br></br>
                        Ideate
                    </div>

                    <div className="sub-text">
                        Challenge assumptions and create ideas
                    </div>
                    <br></br>
                    <br></br>

                    <div className="sub-heading-text">
                        Crazy 8 Sketches
                    </div>

                    <div className="sub-text">
                        <p>We individually crafted iterations of 8 screens for addition and redesign on the Kikori platform. This ensured that the</p>
                        <p>elements incorporated into the digital wireframes effectively addressed user pain points.</p>
                    </div>
                    <br></br>

                    <div>
                        <img src={crazy8_sketch_1}/>
                        <br></br>
                        <p>These sketches portray screens designed to <b>immerse</b>students in interactive activities.</p>
                    </div>
                    <br></br>
                    <br></br>

                    <div>
                        <img src={crazy8_sketch_2}/>
                        <br></br>
                        <p>These sketches illustrate <b>inquiries</b>about the classroom environment along with <b>recommended activities.</b></p>
                    </div>
                    <br></br>
                    <br></br>

                    <div>
                        <img src={crazy8_sketch_3}/>
                        <br></br>
                        <p>These sketches <b>promote engagement</b>and capture the <b>sentiments</b>of educators.</p>
                    </div>
                    <br></br>
                    <br></br>

                    <div className="sub-heading-text">
                        User Task Flow
                    </div>

                    <div className="sub-text">
                        <p>Following the sketches, we aimed to chart the user's path to accessing activities on Kikori. We visually depicted each action,</p>
                        <p>decision, and interaction a user undergoes from initiation to completion. This enabled us to grasp the user's journey,</p>
                        <p>pinpoint areas of difficulty, and enhance the user experience by prioritizing intuitive, efficient, and effective tasks.</p>
                        <p>Additionally, it proved instrumental in refining user interfaces and interactions for optimal usability and satisfaction.</p>
                        <br></br>
                        <img src={user_task_flow}/>
                    </div>
                    <br></br>
                    <br></br>

                    <div className="sub-heading-text">
                        User Journey Map
                    </div>

                    <div className="sub-text">
                        <p>Now, we aimed to further explore and grasp the comprehensive journey users undergo within the app, from inception to</p>
                        <p>completion. We sought to empathize with the various scenarios, decisions, and paths users might encounter. To achieve this,</p>
                        <p>we developed a user journey map, enhancing our understanding of educators' experiences while accessing activities on the</p>
                        <p>Kikori platform.</p>
                    </div>
                    <br></br>
                    <img src={user_journey_map}/>
                </div>

                <div className="sub-container prototype border-t-2 border-black">
                    <div className="heading-text">
                        <br></br>
                        Prototype
                    </div>

                    <div className="sub-text">
                        Create solutions
                    </div>
                    <br></br>

                    <div className="sub-heading-text">
                        Low Fidelity Prototype
                    </div>
                    <div className="text-container-column">
                        <div className="sub-text ">
                            The low fidelity prototype connected the primary user flow of reminding educators to complete an activity as well as help them select an activity so the prototype could be used in a usability study with users. With the completed low-fidelity wireframes, we built a limited functionality, desktop prototype on Figma to help test our design with users.
                        </div>
                        <br></br>
                        <img src={lofi_screenshot}/>
                        <br></br>
                        <a className="text-blue-500 text-center" href= "https://www.figma.com/proto/wqnh9iMroilBhnwUmvGBAY/Kikori-User-Flow-Wireframes?type=design&node-id=1-2&t=K48ixAtuUISUsrND-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design" target='_blank'>View Kikori's low-fidelity prototype</a>
                    </div>
                    <br></br>

                    <div className="heading-text">
                        Design Direction
                    </div>

                    <div className="text-container-column">
                        <div className="sub-text">
                            <p>Our research led our design in the direction to simplify the user experience and significantly reduce the cognitive load on</p>
                            <p>educators using Kikori's platform. We recommended implementing intuitive navigation and a streamlined activity library to</p>
                            <p>decrease the overwhelm of endless content options. Educators desired more robust tools to customize activities to their</p>
                            <p>classroom contexts as well.</p>
                        </div>
                        <br></br>

                        <div className="sub-text mb-10">
                            <p>Throughout this project, our team maintained open communication with Kikori to keep them apprised of key user insights</p>
                            <p>uncovered during our research. We conveyed educators' needs around sharing, customization, and their lack of interest in</p>
                            <p>badges or as incentives for platform usage.</p>
                        </div>

                        <div className="sub-text mb-10">
                            However, Kikori's executives ultimately made the decision to move forward with implementing badges aimed at increasing user engagement and retention. While we provided our evidence-based recommendations against these specific solutions, we respect that Kikori has to balance various stakeholder needs and business goals.
                        </div>
                    </div>

                <div className="sub-container design-direction">
                    <div className="heading-text">
                        Mid Fidelity Prototype
                    </div>

                    <div className="text-container-column">
                        <div className="sub-text ">
                            We wanted to make sure our designs are effectively reaching our project goals. Taking the low fidelity wireframes, we updated the wireframes so users are able to navigate through the pages and complete tasks we presented to them during the usability testing. These mid fidelity wireframes would help our focus on what we needed to be improved in terms of the functionality of our design.
                        </div>
                        <br></br>
                        <img src={midfi_screenshot}/>
                        <br></br>
                        <a className="text-blue-500 text-center" href= "https://www.figma.com/proto/WMSiUZa9OR6pGZcFLXBMgp/Usability-Study-Flow?type=design&node-id=915-576&t=GBTq7pax5oH0aUYT-1&scaling=scale-down&page-id=915%3A186&starting-point-node-id=915%3A576&mode=design" target='_blank'>View Kikori's mid-fidelity prototype</a>
                    </div>
                </div>

                <div className="heading-text">
                    High Fidelity Designs
                </div>
                <br></br>

                <div className="sub-heading-text">
                    High Fidelity Prototype
                </div>

                <div className="text-container-column">
                    <div className="sub-text ">
                        The high fidelity prototype presented cleaner user flows for accessing activities. It also met user needs for quick access to activities and finding engaging activities.
                    </div>
                    <br></br>
                    <img src={hifi_screenshot}/>
                    <br></br>

                    <a className="text-blue-500 text-center" href= "https://www.figma.com/proto/WMSiUZa9OR6pGZcFLXBMgp/Usability-Study-Flow?type=design&node-id=1543-5234&t=3k3QcN7HBiwRRKUy-1&scaling=scale-down&page-id=1146%3A244&starting-point-node-id=1543%3A5234&show-proto-sidebar=1&mode=design" target='_blank'>View Kikori's high-fidelity prototype</a>
                    <br></br>
                </div>
                <br></br>
                <br></br>
                </div>

                <div className="sub-container Test border-t-2 border-black">
                    <div className="sub-container usability-testing">
                        <div className="heading-text">
                            Test
                        </div>
                        <div className="sub-text">
                            Exploring wireframes thoroughly
                        </div>
                        <br></br>
                        <br></br>

                        <div className="sub-heading-text">
                            Usability Testing
                        </div>

                        <div className="text-container-column">
                            <div className="sub-text">
                                <p>We observed <b>five</b>educators as they interacted with the hi prototype, assessing how they discover, search for, and access activities within the Kikori platform.</p>
                            </div>

                            <div className="sub-text mt-10">
                                Those five participants expressed that they:
                                    <p><b>1.</b>Need less information on the screen</p>
                                    <p><b>2.</b>Were able to navigate the web app with ease once overcoming challenges with their own tech issues</p>
                                    <p><b>3.</b>Use Kikori for about five minutes, select the desired activity, and then exit the platform to use the activity in the classroom</p>
                            </div>
                        </div>
                        <br></br>
                        <br></br>

                        <div className="sub-heading-text">
                            Understanding What Works and What Doesn't
                        </div>

                        <div className="text-container-column">
                            <div className="sub-text">
                                <p>High-fidelity prototypes allowed us to evaluate key user tasks identified during interviews. Although the tasks were relatively</p>
                                <p> straightforward, the UI evaluation revealed that some elements needed reassessment. Many participants expressed</p>
                                <p> confusion about the homepage's information overload during testing.</p>
                            </div>
                        </div>
                        <br></br>
                        <br></br>

                        <div className='text-container-row mt-10 mockups1'>
                            <div>
                                <div className="sub-heading-text">
                                    Homepage Mockups
                                </div>
                                <p><b>1.</b>Homepage low-fidelity wireframe <b>before</b>usability study</p>
                                <br></br>
                                <p><b>2.</b>Homepage low-fidelity wireframe <b>after</b>usability study</p>
                            </div>
                            <div className="image-w-30">
                                <img src={mockups1}/>
                            </div>
                        </div>
                        <br></br>
                        <br></br>

                        <div className='text-container-row mt-20 activites'>
                            <div>
                                <div className="sub-heading-text">
                                    Activities
                                </div>
                                <p><b>1.</b>Deleted text above the carousel to reduce cognitive load</p>
                                <br></br>
                                <p><b>2.</b>Shortened and repositioned the search bar above the carousel</p>
                                <br></br>
                                <p><b>3.</b>The filter button remained next to the search bar, above the carousel</p>
                            </div>

                            <div className="image-w-30">
                                <img src={activities}/>
                            </div>
                        </div>
                        <br></br>
                        <br></br>

                        <div className='text-container-row mt-20 activites'>
                            <div>
                                <div className="sub-heading-text">
                                    Browse by Category
                                </div>
                        
                                <p><b>1.</b>Shifted 'Browse by Category' up for easier access to activities</p>
                                <br></br>
                                <p><b>2.</b>Replaced 'Category' with icons for streamlined activity navigation</p>
                            </div>

                            <div className="image-w-30">
                                <img src={browse_by_category}/>
                            </div>
                        </div>
                        <br></br>
                        <br></br>

                        <div className='text-container-row mt-20 activites'>
                            <div>
                                <div className="sub-heading-text">
                                    After-activity Mockups
                                </div>
                                <p><b>1.</b>After-activity survey page <b>before</b>usability study</p>
                                <br></br>
                                <p><b>2.</b>After-activity survey page <b>after</b>usability study</p>
                            </div>

                            <div className="image-w-30">
                                <img src={mockups2}/>
                            </div>
                        </div>
                        <br></br>
                        <br></br>

                        <div className='text-container-row mt-20 activites'>
                            <div>
                                <div className="sub-heading-text">
                                    Rating
                                </div>
                                <p><b>1.</b>Split question into two to better understand educators' experiences</p>
                                <br></br>
                                <p><b>2.</b>‘Easy,’ ‘Medium,’ and ‘Difficult’ responses were replaced</p>
                                <p>with a more familiar star rating system.</p>
                            </div>

                            <div className="image-w-30">
                                <img src={rating}/>
                            </div>
                        </div>
                        <br></br>
                        <br></br>

                    <div className='text-container-row mt-20 activites'>
                        <div>
                        <div className="sub-heading-text">
                            Badges Mockups
                        </div>
                            <p><b>1.</b>Badges page <b>before</b>usability study</p>
                            <br></br>
                            <p><b>2.</b>Badges page <b>after</b>usability study</p>
                        </div>

                        <div className="image-w-30">
                            <img src={mockups3}/>
                        </div>
                    </div>
                    <br></br>
                    <br></br>

                    <div className='text-container-row mt-20 activites'>
                        <div>
                        <div className="sub-heading-text">
                            Badges
                        </div>
                            <p><b>1.</b>Badges were relocated to a separate page</p>
                            <br></br>
                            <p><b>2.</b>The badge names were added to badge images,</p>
                            <p>indicating both earned and locked badges for educators</p>
                        </div>

                        <div className="image-w-30">
                            <img src={badges}/>
                        </div>
                    </div>

                    <div className='text-container-row mt-20 activites'>
                        <div>
                        <div className="sub-heading-text">
                            Journeyboard Mockups
                        </div>
                            <p><b>1.</b>Journeyboard<b> before</b>usability testing</p>
                            <br></br>
                            <p><b>2.</b>Journeyboard<b> after</b>usability testing</p>
                        </div>

                        <div className="image-w-30">
                            <img src={mockups4}/>
                        </div>
                    </div>

                    <div className='text-container-row mt-20 journeyboard'>
                        <div>
                            <div className="sub-heading-text">
                                Journeyboard
                            </div>
                                <p><b>1.</b>It was initially termed as the "Leaderboard," but was later</p>
                                <p>renamed to "Journeyboard" to encourage collaboration</p>
                                <p>among students rather than fostering competition</p>
                                <br></br>
                                <p><b>2.</b>The rank was removed and changed to a journeyboard,</p>
                                <p>where each block of the journeyboard tracks educators</p>
                                <p>progress each day they login and complete activities</p>
                        </div>

                        <div className="image-w-30">
                            <img src={journeyboard}/>
                        </div>
                    </div>
                </div>
            </div>

                <div className="sub-container Reflection border-t-2 border-black">
                    <div className="heading-text">
                        <br></br>
                        Project Reflections
                    </div>
                    <br></br>

                    <div className="sub-text">                 
                        <div className="sub-heading-text">
                            Project Takeaways
                        </div>
                            <p>My team and I anticipated the challenges embedded in this project from the beginning. Questions surrounding prioritizing</p>
                            <p>essential activities, navigating the limitations imposed by the restricted time available to teachers in the classroom, and</p> 
                            <p>encouraging prolonged interaction on the web app were significant. However, I derived genuine satisfaction from designing</p>
                            <p>and strategizing user flows and interactions throughout the process.</p>
                            <br></br>

                            <p>Here are some key insights:</p>
                            <p><b>1.</b>Users prioritize quick access to activities on the homepage, making an efficient design essential for educators to easily</p>
                            <p>access their preferred activities.</p>
                            <br></br>
                            <p><b>2.</b>Badges enhance the user experience on the Kikori platform by fostering engagement, tracking progress, and</p>
                            <p>acknowledging achievements.</p>
                            <br></br>
                            <p><b>3.</b>User engagement with activities is pivotal, prompting us to develop a journeyboard to monitor student progress and</p>
                            <p>encourage interaction.</p>
                    </div>
                    <br></br>
                    <br></br>

                    <div className="sub-text">
                        <div>
                            <div className="sub-heading-text">
                                Design Recommendations
                            </div>
                                <p>If I had more time to work on this project, I would have made these changes to the Journeyboard's design:</p>
                                <p><b>1.</b>I would have incorporated the days into each block, enabling educators to easily check the completion status</p>
                                <p>for each day of the month at a glance.</p>
                                <br></br>
                                <p><b>2.</b>I would have also included a section labeled "Badges Earned," featuring badge images, to allow educators to conveniently</p>
                                <p>review their badges and the corresponding days they were earned.</p>
                        </div>
                        <br></br>
                        <br></br>

                        <div className="image-w-40">
                            <img src={journeyboard_recommendations}/>
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