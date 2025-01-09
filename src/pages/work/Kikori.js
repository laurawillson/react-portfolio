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
import homepage from '../kikori_imgs/hi_fi_designs/homepage.png';
import activities from '../kikori_imgs/hi_fi_designs/activities.png';
import browse_by_category from '../kikori_imgs/hi_fi_designs/browse_by_category.png';
import post_survey_feedback from '../kikori_imgs/hi_fi_designs/post_survey_feedback.png';
import rating from '../kikori_imgs/hi_fi_designs/rating.png';
import badges_before_and_after from '../kikori_imgs/hi_fi_designs/badges_before_and_after.png';
import badges from '../kikori_imgs/hi_fi_designs/badges.png';
import badges_journeyboard from '../kikori_imgs/hi_fi_designs/badges_journeyboard.png';
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
                            After conducting the one-on-one sessions, we synthesized the insights to gain a deeper understanding of our users' needs and behaviors, informing the next steps in our design process.
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
                        Through analyzing the patterns, we identified three key pain points among educators:
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
                        We designed and iterated on 8 screens for new features and updates on the Kikori platform, focusing on simplifying navigation and improving usability. Through user testing and feedback, we refined the digital wireframes to directly address key pain points, such as streamlining the activity discovery process and enhancing the overall user flow, ensuring a more intuitive and engaging experience for educators.
                    </div>
                    <br></br>

                    <img src={crazy8_sketch_1}/>
                    <br></br>
                    <div>
                        These sketches represent screens designed to engage students in interactive activities by enhancing visual appeal and usability. The goal was to create an intuitive interface that encourages participation, with thoughtful consideration of the user flow to ensure educators can easily navigate and interact with the content. Through user-centered design principles, we focused on optimizing the experience to make learning activities both engaging and accessible.
                    </div>
                    <br></br>
                    <br></br>

                    <img src={crazy8_sketch_2}/>
                    <br></br>
                    <div>
                        These sketches showcase screens featuring questions about the classroom environment, paired with personalized activity recommendations. The design aims to guide educators in selecting the most relevant activities based on their classroom context, promoting a tailored and effective learning experience. By integrating user feedback, we focused on creating a seamless flow where teachers can easily answer key questions and quickly access activity suggestions that align with their students' needs and learning goals.
                    </div>
                    <br></br>
                    <br></br>

                    <img src={crazy8_sketch_3}/>
                    <br></br>
                    <div>
                        These sketches are designed to foster engagement by capturing educators' sentiments and feedback in real-time. The goal was to create intuitive interfaces that encourage teachers to share their thoughts and experiences easily, allowing us to gather valuable insights that inform future design iterations. By prioritizing a user-friendly, interactive experience, we aimed to ensure that educators feel heard and that their input directly influences the evolution of the platform.
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
                        Our objective was to gain a comprehensive understanding of the entire user journey within the app, from initial interaction to task completion. We aimed to empathize with the diverse scenarios, decisions, and pathways users encounter throughout their experience. To achieve this, we developed a user journey map that helped us visualize the educators’ experience as they navigated the Kikori platform to find and engage with activities. This map provided valuable insights into pain points, emotional touchpoints, and key decision-making moments, allowing us to design more intuitive and user-centered features that better meet the needs of educators.
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
                        The high-fidelity prototype was designed to streamline user flows, making it easier for educators to access and discover activities with minimal friction. By refining the navigation and simplifying the interaction steps, the prototype addressed key user needs, ensuring quick and intuitive access to activities. It also incorporated feedback from educators, prioritizing features that helped them efficiently find engaging activities for their students, ultimately enhancing the overall user experience and boosting engagement with the platform.
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
                                <br></br>
                                <b>1.</b>Preferred less information on the screen for a more focused experience.
                                <br></br>
                                <b>2.</b>Navigated the web app easily after resolving personal tech challenges.
                                <br></br>
                                <b>3.</b>Used Kikori for five minutes to select an activity, then exited to implement the activity in the classroom.
                            </div>
                        </div>
                        <br></br>
                        <br></br>

                        <div className="sub-heading-text">
                            Understanding What Works and What Doesn't
                        </div>

                        <div className="text-container-column">
                            <div className="sub-text">
                                High-fidelity prototypes allowed us to evaluate key user tasks identified during interviews, providing a clearer picture of how users interact with the platform. While the tasks themselves were straightforward, our UI testing uncovered areas for improvement. Many participants expressed confusion due to the overwhelming amount of information on the homepage, highlighting the need to simplify and prioritize content. This feedback led us to reassess the layout and information hierarchy, ensuring a more intuitive and streamlined user experience.
                            </div>
                        </div>
                        <br></br>
                        <br></br>

                        <div className='text-container-col mt-10 homepage'>
                            <div>
                                <div className="sub-heading-text">
                                    Homepage
                                </div>
                                <b>1.</b><b>Before</b>usability study
                                <br></br>
                                <br></br>
                                <b>2.</b><b>After</b>usability study
                            </div>
                            <div className="image-w-30">
                                <img src={homepage}/>
                            </div>
                        </div>
                        <br></br>
                        <br></br>

                        <div className='text-container-col mt-20 activites'>
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

                        <div className='text-container-col mt-20 browse by category'>
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

                        <div className='text-container-col mt-20 postsurveyfeedback'>
                            <div>
                                <div className="sub-heading-text">
                                    Post Survey Feedback
                                </div>
                                <b>1.</b><b>Before</b>usability study
                                <br></br>
                                <br></br>
                                <b>2.</b><b>After</b>usability study
                            </div>

                            <div className="image-w-30">
                                <img src={post_survey_feedback}/>
                            </div>
                        </div>
                        <br></br>
                        <br></br>

                        <div className='text-container-col mt-20 rating'>
                            <div>
                                <div className="sub-heading-text">
                                    Rating
                                </div>
                                <b>1.</b>Split the user survey question into two to gain deeper insights into educators' experiences.
                                <br></br>
                                <br></br>
                                <b>2.</b>Replaced the ‘Easy,’ ‘Medium,’ and ‘Difficult’ options with a familiar star rating system to improve usability and gather more accurate feedback.
                            </div>

                            <div className="image-w-30">
                                <img src={rating}/>
                            </div>
                        </div>
                        <br></br>
                        <br></br>

                    <div className='text-container-col mt-20 badges_before_and_after'>
                        <div>
                        <div className="sub-heading-text">
                            Badges
                        </div>
                            <b>1.</b>Before usability study
                            <br></br>
                            <b>2.</b>After usability study
                        </div>

                        <div className="image-w-30">
                            <img src={badges_before_and_after}/>
                        </div>
                    </div>
                    <br></br>
                    <br></br>

                    <div className='text-container-col mt-20 badges'>
                        <div>
                        <div className="sub-heading-text">
                            Badges
                        </div>
                            <b>1.</b>Relocated badges to a dedicated page and added locked badges to motivate activity completion.
                            <br></br>
                            <br></br>
                            <b>2.</b>Renamed 'Leaderboard' to 'Journeyboard' to encourage collaboration and shared progress among students.
                        </div>

                        <div className="image-w-30">
                            <img src={badges}/>
                        </div>
                    </div>

                    <div className='text-container-col mt-20 badges_journeyboard'>
                        <div>
                        <div className="sub-heading-text">
                            Journeyboard
                        </div>
                            <b>1.</b>Before usability testing
                            <br></br>
                            <br></br>
                            <b>2.</b>After usability testing
                        </div>

                        <div className="image-w-30">
                            <img src={badges_journeyboard}/>
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