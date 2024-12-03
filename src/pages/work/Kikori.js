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
        <div className="work-container text-white">
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

                    <div className="sub-text">
                        Kikori is a community-driven platform designed to provide K-12 educators with seamless access to experiential social-emotional learning (eSEL) curriculum. The platform helps students engage, reflect, connect, and grow. Kikori empowers educators to easily create a transformative learning environment that fosters growth and emotional development.
                    </div>
                    <br></br>
                    <br></br>

                    <div className="sub-heading-text">
                        Project Details
                    </div>
                    
                    <div className="sub-text">
                            <b>Role:</b>UX Designer
                    </div>
                    <br></br>

                    <div class="sub-text">
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
                                <li>Mari F. (UX Designer)</li>
                                <li>Brittney J. (UX Designer)</li>
                            </ul>
                    </div>
                    <br></br>

                    <div className="sub-text mr-12">
                        <b>Tools:</b>
                            <ul>
                                <li>Figma</li>
                                <li>FigJam</li>
                                <li>Slack</li>
                                <li>Zoom</li>
                                <li>Workona</li>
                                <li>Google Suite</li>
                                <li>Zeplin</li>
                            </ul>  
                    </div>
                    <br></br>
                    <br></br>

                    <div className="sub-heading-text">
                        The Challenge
                    </div>
                    <div className="sub-text">
                        Design an intuitive and efficient way for educators to search for, view, save, and schedule activities. The solution must also allow them to open and complete activities from their schedule, capturing data for the user dashboard, including streaks, badges, and optional notes. The design should enable educators to mark activities as completed and easily share activities, curriculum, and calendars with others.
                    </div>
                    <br></br>

                    <div className="sub-text">
                        <b>Problem:</b>
                    </div>

                    <div className="sub-text">
                        Encourage prolonged interaction on the web app.
                    </div>
                    <br></br>

                    <div className="sub-text">
                        <b>Solution:</b>
                    </div>

                    <div className="sub-text">
                        Craft an engaging user experience by prioritizing needs, delivering quality content, integrating social elements, tailoring experiences, gathering feedback, and refining for optimal performance.
                    </div>

                    <br></br>
                    <br></br>

                    <div className="sub-heading-text">
                        Goals
                    </div>
                    <div className="sub-text">
                        To gain a deeper understanding of Kikori's background, market positioning, and user demographics, my team and I began by setting the following objectives:
                        <br></br>
                        <br></br>
                            <b>1.</b>Design a purposeful user experience to enhance activity discovery and searchability.
                            <br></br>
                            <b>2.</b>Design an intuitive, visually appealing interface aligned with Kikori's brand and UI guidelines.
                            <br></br>
                            <b>3.</b>Boost user engagement and retention with features that promote prolonged interaction.
                        </div>
                    <br></br>
                    <br></br>

                    <div className="sub-heading-text">
                        Process
                    </div>
                    <div className="sub-text">
                        We began by conducting research to identify existing challenges. In the subsequent phases, we developed a user persona, employed affinity mapping to prioritize key insights, created a user task flow, designed a site map, mapped the user journey, and built prototypes to test and validate the redesign. Each step was focused on improving the user experience and ensuring our solutions addressed the identified pain points.
                        <br></br>
                        <br></br>
                        <p>Now, let's explore each step in more detail.</p>
                        <br></br>
                        <img className="Design_Process" src={Design_Process}/>
                    </div>
                </div>

                <div className="sub-container reflection border-t-2 border-white">
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
                            We conducted a competitive analysis of Kikori's top competitors to assess their strengths and weaknesses. This research provided insights into industry trends, unique differentiators, and the factors that influence user preferences. These findings played a crucial role in shaping our design strategy and ensuring our approach addressed gaps and opportunities within the market.
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
                            To keep our design process user-centered, we focused on gaining a comprehensive understanding of Kikori’s user base. Based on our research, we created two user personas to represent the key individuals we would be designing for, ensuring our solutions addressed their specific needs and goals.
                            <br></br>
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
                            We conducted one-on-one Zoom interviews with six participants to gain deeper insights into user behavior and usage patterns while interacting with activities on the Kikori platform.
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
                            After completing the one-on-one sessions, we synthesized the insights to develop a clearer understanding of our users' needs and behaviors.
                        </div>
                    </div>
                </div>

                <div className="sub-container synthesize border-t-2 border-white">
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
                        Through Affinity Mapping, we distilled educators' interview insights into key pain points and recurring themes. We identified that time constraints hindered their ability to quickly find activities. This led to actionable design improvements, such as streamlining the activity search process for better efficiency.
                    </div>
                    <br></br>

                    <img className="w-90"src={affinity_map}/>
                    <br></br>
                    <br></br>

                    <div className="sub-heading-text">
                        Key Takeaways
                    </div>
                
                    <div className="sub-text">
                        Based on the patterns we identified, three key pain points emerged among educators, including:
                            <br></br>
                            <b>1.</b>Time constraints with conducting activities
                            <br></br>
                            <b>2.</b>Kikori's homepage is overwhelming
                            <br></br>
                            <b>3.</b>Difficulty finding engaging activities for their students
                    </div>
                    
                </div>

                <div className="sub-container ideation methods border-t-2 border-white">
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
                        We designed and iterated 8 screens for additions and updates on the Kikori platform, ensuring the digital wireframes effectively addressed user pain points.
                    </div>
                    <br></br>

                    <img src={crazy8_sketch_1}/>
                    <br></br>
                    <div>
                        These sketches illustrate screens designed to engage students in interactive activities.
                    </div>
                    <br></br>
                    <br></br>

                    <img src={crazy8_sketch_2}/>
                    <br></br>
                    <div>
                        These sketches depict questions about the classroom environment paired with recommended activities.
                    </div>
                    <br></br>
                    <br></br>

                    <img src={crazy8_sketch_3}/>
                    <br></br>
                    <div>
                        These sketches are designed to foster engagement and capture educators' sentiments.
                    </div>
                    <br></br>
                    <br></br>

                    <div className="sub-heading-text">
                        User Task Flow
                    </div>

                    <div className="sub-text">
                        After sketching the initial concepts, we mapped out the user's journey to access activities on Kikori. We visually represented each action, decision, and interaction from start to finish, allowing us to understand the user's experience, identify pain points, and optimize for intuitive, efficient, and seamless tasks. This process was crucial in refining the user interfaces and interactions to ensure the highest levels of usability and satisfaction.
                    </div>
                    <br></br>
                    <img src={user_task_flow}/>
                    <br></br>
                    <br></br>

                    <div className="sub-heading-text">
                        User Journey Map
                    </div>

                    <div className="sub-text">
                        We set out to deepen our understanding of the complete user journey within the app, from start to finish. Our goal was to empathize with the different scenarios, decisions, and paths users might face. To do this, we created a user journey map, which gave us valuable insights into educators' experiences while accessing activities on the Kikori platform.
                    </div>
                    <br></br>
                    <img src={user_journey_map}/>
                </div>

                <div className="sub-container prototype border-t-2 border-white">
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

                    <div className="sub-heading-text">
                        Design Direction
                    </div>


                    <div className="sub-text">
                        Our research guided the design towards simplifying the user experience and reducing cognitive load for educators on the Kikori platform. We recommended implementing intuitive navigation and a streamlined activity library to alleviate the overwhelm of countless content options. Additionally, educators expressed the need for more robust tools to customize activities to better fit their classroom contexts.
                    </div>
                    <br></br>

                    <div className="sub-text">
                        Throughout the project, our team maintained clear communication with Kikori to share key user insights discovered during our research. We highlighted educators' needs around sharing, customization, and their lack of interest in badges or other incentives for platform usage.
                    </div>
                    <br></br>

                    <div className="sub-text">
                        Despite our evidence-based recommendations against implementing badges, Kikori's executives decided to move forward with them as a strategy to boost user engagement and retention. We respect their decision, understanding that they must balance the needs of various stakeholders and business objectives.
                    </div>
                    <br></br>
                    <br></br>
                    
                <div className="sub-container design-direction">
                    <div className="sub-heading-text">
                        Mid Fidelity Prototype
                    </div>

                    <div className="text-container-column">
                        <div className="sub-text">
                            We wanted to make sure our designs are effectively reaching our project goals. Taking the low fidelity wireframes, we updated the wireframes so users are able to navigate through the pages and complete tasks we presented to them during the usability testing. These mid fidelity wireframes would help our focus on what we needed to be improved in terms of the functionality of our design.
                        </div>
                        <br></br>
                        <img src={midfi_screenshot}/>
                        <br></br>
                        <a className="text-blue-500 text-center" href= "https://www.figma.com/proto/WMSiUZa9OR6pGZcFLXBMgp/Usability-Study-Flow?type=design&node-id=915-576&t=GBTq7pax5oH0aUYT-1&scaling=scale-down&page-id=915%3A186&starting-point-node-id=915%3A576&mode=design" target='_blank'>View Kikori's mid-fidelity prototype</a>
                    </div>
                </div>

                <div className="sub-heading-text">
                    High Fidelity Prototype
                </div>

                <div className="text-container-column">
                    <div className="sub-text">
                        The high fidelity prototype presented cleaner user flows for accessing activities. It also met user needs for quick access to activities and finding engaging activities.
                    </div>
                    <br></br>
                    <img src={hifi_screenshot}/>
                    <br></br>

                    <a className="text-blue-500 text-center" href= "https://www.figma.com/proto/WMSiUZa9OR6pGZcFLXBMgp/Usability-Study-Flow?type=design&node-id=1543-5234&t=3k3QcN7HBiwRRKUy-1&scaling=scale-down&page-id=1146%3A244&starting-point-node-id=1543%3A5234&show-proto-sidebar=1&mode=design" target='_blank'>View Kikori's high-fidelity prototype</a>
                    <br></br>
                </div>
                </div>

                <div className="sub-container Test border-t-2 border-white">
                    <div className="sub-container usability-testing">
                        <div className="heading-text">
                        <br></br>
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
                                The five participants shared the following insights:
                                <b>1.</b> They preferred less information on the screen for a cleaner, more focused experience.
                                <br></br>
                                <b>2.</b> They navigated the web app easily after resolving personal tech challenges.
                                <br></br>
                                <b>3.</b> They used Kikori for five minutes to select an activity, then exited to implement the activity in the classroom.
                            </div>
                        </div>
                        <br></br>
                        <br></br>

                        <div className="sub-heading-text">
                            Understanding What Works and What Doesn't
                        </div>

                        <div className="text-container-column">
                            <div className="sub-text">
                                High-fidelity prototypes helped us evaluate key user tasks from the interviews. While the tasks were straightforward, UI testing revealed that some elements needed reassessment, with many participants noting confusion due to the homepage's information overload.
                            </div>
                        </div>
                        <br></br>
                        <br></br>

                        <div className='text-container-row mt-10 mockups1'>
                            <div>
                                <div className="sub-heading-text">
                                    Homepage Mockups
                                </div>
                                <b>1.</b><b>Before</b>usability study.
                                <br></br>
                                <br></br>
                                <b>2.</b><b>After</b>usability study.
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
                                <b>1.</b>Deleted text above the carousel to reduce cognitive load.
                                <br></br>
                                <br></br>
                                <b>2.</b>Shortened and repositioned the search bar above the carousel.
                                <br></br>
                                <br></br>
                                <b>3.</b>The filter button remained next to the search bar, above the carousel.
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
                        
                                <b>1.</b>Shifted 'Browse by Category' up for easier
                                <br></br>
                                access to activities
                                <br></br>
                                <br></br>
                                <b>2.</b>Replaced 'Category' with icons for streamlined activity navigation.
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
                                <b>1.</b><b>Before</b>usability study
                                <br></br>
                                <br></br>
                                <b>2.</b><b>After</b>usability study
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
                                <b>1.</b>Split question into two to better understand educators' experiences
                                <br></br>
                                <br></br>
                                <b>2.</b>‘Easy,’ ‘Medium,’ and ‘Difficult’ responses
                                <br></br>
                                were replaced with a more familiar star rating system.
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
                            <b>1.</b>Badges were relocated to a separate page
                            <br></br>
                            <br></br>
                            <b>2.</b>The badge names were added to badge
                            <br></br>
                            images, indicating both earned and locked
                            <br></br>
                            badges for educators
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
                                <b>1.</b>Originally called the "Leaderboard,"
                                it was renamed "Journeyboard" to promote
                                collaboration among students.
                                <br></br>
                                <br></br>
                                <b>2.</b>The leaderboard was removed to foster
                                collaboration among students.
                        </div>

                        <div className="image-w-30">
                            <img src={journeyboard}/>
                        </div>
                    </div>
                </div>
            </div>

                <div className="sub-container Reflection border-t-2 border-white">
                    <div className="heading-text">
                        <br></br>
                        Project Reflections
                    </div>
                    <br></br>

                    <div className="sub-text">                 
                        <div className="sub-heading-text">
                            Project Takeaways
                        </div>
                            From the outset, our team anticipated the challenges of this project, including prioritizing essential activities, addressing teachers' limited classroom time, and encouraging sustained engagement on the web app. Despite these complexities, I found genuine fulfillment in designing and strategizing user flows and interactions, turning these challenges into opportunities to craft thoughtful, user-centered solutions.
                            <br></br>
                            <br></br>

                            <b>Here are some key insights:</b>
                            <br></br>
                            <b>1.</b>Users prioritize quick access to activities, highlighting the need for an efficient homepage design that streamlines navigation to their preferred resources.
                            <br></br>
                            <br></br>
                            <b>2.</b>Badges enhance the Kikori platform's user experience by promoting engagement, tracking progress, and recognizing achievements.
                            <br></br>
                            <br></br>
                            <b>3.</b>To boost engagement with activities, we designed a Journeyboard to track student progress and encourage continued interaction.
                    </div>
                    <br></br>
                    <br></br>

                    <div className="sub-text">
                        <div>
                            <div className="sub-heading-text">
                                Design Recommendations
                            </div>
                                If I were given more time to work on this project, I would have made the following changes to
                                the Journeyboard's design:
                                <br></br>
                                <br></br>
                                <b>1.</b> Integrated day labels into each block, allowing educators to quickly view the completion
                                status for each day of the month at a glance.
                                <br></br>
                                <br></br>
                                <b>2.</b> Added a "Badges Earned" section displaying badge images, enabling educators to easily
                                review their achievements and the days they earned them.
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