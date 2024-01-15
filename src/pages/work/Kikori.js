import '../../scss/work.scss';
import '../../scss/Kikori.scss';
import kikori_laptop_project from '../kikori_imgs/kikori_laptop_project.png';
import nine_grid_image from '../kikori_imgs/nine-grid-image.png';
import zoom_call_image from '../kikori_imgs/zoom_call_image.png';
import persona1 from '../kikori_imgs/Persona_1_Anna.png';
import persona2 from '../kikori_imgs/Persona_2_Trish.png';
import ideation_method from '../kikori_imgs/ideation_image.png'
import crazy8_sketch_1 from '../kikori_imgs/Crazy_8_Sketch_1.png'
import crazy8_sketch_2 from '../kikori_imgs/Crazy_8_Sketch_2.png'
import crazy8_sketch_3 from '../kikori_imgs/Crazy_8_Sketch_3.png'
import user_journey_mapping from '../kikori_imgs/user_journey_mapping.png'
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

export default function Kikori(){
    const project_title = 'Kikori';

    return(
        <div className="work-container">
            <div className='project-title'> {project_title} </div>
            <div className='laptop-image-container'>

                <img className="laptop-image" src={kikori_laptop_project}/>

            </div>

            <div className="sub-container overview">
                <div className="heading-text">
                    Overview
                </div>
                <br></br>

                <div className="text-container-row">
                    <div className="sub-text w-1/2">
                        Kikori is a community-driven platform that provides K-12 educators with easy access to experiential social emotional learning (eSEL) curriculum that help students play, reflect, connect, and grow. Kikori makes it easy for all educators to create the ideal environment for learning and transformation.
                    </div>

                    <div className="text-container-column ml-10">
                        <div className="flex"> 
                            <b>Role:</b> UX Designer 
                        </div>
                        <b>Responsibilities:</b>
                        <ul>
                            <li>Synthesizing user feedback</li>
                            <li>Sketching</li>
                            <li>Wireframing</li>
                            <li>Prototyping</li>
                        </ul>  
                        <div className="flex"> 
                            <b>Timeline:</b> 3 months
                        </div>
                        <div className="flex"> 
                            <b>Team:</b>  Mari F. / UX Designer<br/>
                            Brittney J. / UX Designer<br/>
                        </div>
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
                        Design an effective and intuitive way for educators to find/search, view, save and schedule activities, open and complete activities from the schedule (allowing to capture data for the user dashboard with streaks, badges and optional notes), mark them as played and share activities and curriculum/calendars. <br/>
                    </div>
                    <br></br>

                    <div className="text-container-row mt-10">
                        <div className="flex w-1/2"> 
                            <b>Problem:</b> Encourage users to stay on the web app longer.
                        </div>
                        <div className="flex w-1/2"> 
                            <b>Solution:</b> Design an engaging user experience that encourages interaction through user-centered design, high-quality content, social integration, personalization, feedback mechanisms, and ongoing optimization. 
                        </div>
                    </div>
                </div>
            </div>


            <div className="sub-container goals">
                <div className="heading-text">
                    Goals
                </div>
                <br></br>
                <div className="sub-text">
                    To better understand Kikori's background, market space, and who Kikori's users are, my team and I started with the following goals:
                    <br></br>
                        <ul>
                            <li>Create a meaningful user experience so users can find/search activities</li>
                            <li>Design a user-friendly and visually appealing interface that aligns with Kikori's brand and UI standards</li>
                            <li>Enhance user engagement and retention by implementing features and content that provide compelling reasons for users to stay longer</li>
                        </ul>  
                </div>
            </div>

            <div className="sub-container research">
                <div className="heading-text">
                    Research
                </div>
                    <br></br>
                    <div className="sub-heading-text">
                        Competitive Analysis
                    </div>
                <br></br>

                <div className="text-container-column">
                    <div className="text-container-column ">
                        <div className="sub-text">
                            We analyzed Kikori's top competitors to evaluate their strengths and weaknesses. This information helped us to understand what the trends are across all competitors, their unique differences, and why users might choose a particular service over another. These learnings helped guide our approach to our designs.
                        </div>

                        <div className="flex">
                            <div>
                                <div className="sub-text mt-10">
                                    From this analysis, we learned that:
                                    <ul>
                                        <li>These competitors have an SEL focus</li>
                                        <li>Are web-based platforms</li>
                                        <li>Are international</li>
                                    </ul>  
                                </div>
                                <br></br>
                            </div>
                            <img className="w-80 ml-60"src={nine_grid_image}/>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>

                <div className="sub-container user-personas">
                    <div className="sub-heading-text">
                        User Personas
                    </div>
                    <br></br>

                    <div className="text-container-column ">
                        <div className="sub-text ">
                            To make sure that our decisions moving forward in the process are user-centered, we wanted to have a clear understanding of who Kikori’s users are. We created 2 user personas to represent who we will be designing for.
                            Meet Anna and Trish:
                        </div>
                        <br></br>
                        <br></br>

                        <img src={persona1}/>
                        <br></br>
                        <br></br>
                        <img className="mt-5" src={persona2}/>
                    </div>
                </div>

                <div className="sub-container user-interviews">
                    <div className="sub-heading-text">
                        User Interviews
                    </div>
                    <br></br>

                    <div className="text-container-column">
                        <div className="sub-text">
                            We conducted one-on-one interviews via Zoom with six participants to gain deeper insights into user behavior and usage patterns on the Kikori platform when accessing activities.
                        </div>
                        
                        <div className="flex justify-around">
                            <div>
                            <div className="sub-text mt-10"> 
                                We conducted interviews with <b>5 participants,</b>about <b>15-20 minutes</b>each.
                            </div>
                                <div className="sub-text mt-10">
                                    These six participants included:
                                    <ul>
                                        <li>Educators who use Kikori 3+ times a week</li>
                                        <li>Live in the U.S.</li>
                                        <li>Work in public or charter schools</li>
                                    </ul>  
                                </div>
                                <br></br>

                                <div className="sub-text">
                                    After conducting these one-on-one sessions with the participants, we wanted to take all this new information gained and synthesize it to better understand who the users are.
                                </div>
                            </div>
                            <img className="w-80 ml-50"src={zoom_call_image}/>
                        </div>
                    </div>
                </div>


                <div className="sub-container usability-testing">
                    <div className="sub-heading-text">
                        Usability Testing
                    </div>
                    <br></br>

                    <div className="text-container-column">
                        <div className="sub-text">
                            We observed five educators while they completed a series of tasks through a prototype to see how they find/search and access activities on the Kikori platform.
                        </div>

                        <div className="sub-text mt-10">
                            Those five participants expressed that they: 
                                <ol>
                                    <li>Need less information on the screen</li>
                                    <li>Were able to navigate the web app with ease once overcoming challenges with their own tech issues</li>
                                    <li>Use the Kikori platform for approximately five minutes, select the activity they need, and exit the platform to use activity in the classroom</li>
                                </ol>  
                        </div>
                    </div>
                </div>
            </div>


            <div className="sub-container three-ideation-methods">
                <div className="heading-text">
                    Ideation Methods
                </div>
                <br></br>

                <div className="sub-heading-text">
                    Affinity Map
                </div>
                <br></br>

                <div className="text-container-column">
                    <div className="text-container-column">
                        <div className="sub-text">
                            Through Affinity Mapping, we were able to distill the educators' user interview findings into distinct pain points and common themes. We learned that users are on time constraints, so they don't have much time to find an activity. This helped us to provide actionable insights for targeted design improvements, such as streamlining the process of locating specific activities.
                        </div>
                        <br></br>
                        <div className="sub-text">
                            Amongst the patterns we uncovered, we were able to identify three common pain points amongst our participants.
                        </div>
                        <div className="flex mt-10">
                            <div className="sub-text ">
                                <b>Pain Points:</b>
                                <ul>
                                    <li>Time constraints with conducting activities</li>
                                    <li>Kikori's homepage is overwhelming</li>
                                    <li>Difficulty finding engaging activities for their students</li>
                                </ul>  
                            </div>
                            <img className="w-80 ml-40"src={ideation_method}/>
                        </div>
                        

                    </div>

                </div>
            </div>

            <div className="sub-container crazy-eight-sketches">
                <div className="sub-heading-text">
                    Crazy 8 Sketches
                </div>
                <br></br>

                <div className="text-container-column ">
                    <div className="sub-text">
                        We each took the time to draft iterations of 8 screens that would be added and redesigned on the Kikori platform. This ensured that the elements that made it to digital wireframes would be well-suited to address user pain points.
                    </div>
                    <div className="text-container-row mt-10">
                        <div className="text-container-column w-3/12 ">
                            <img src={crazy8_sketch_1}/>
                            <div className="sub-text mt-10 text-center">
                                These sketches show screens that educators can use to encourage engagement from their students.
                            </div>
                        </div>
                        <div className="text-container-column w-3/12 text-center">
                            <img src={crazy8_sketch_2}/>
                            <div className="sub-text mt-10">
                                These sketches show screens that ask educators about the classroom environment and offers educators activities based on previous completed activities.
                            </div>
                        </div>
                        <div className="text-container-column w-3/12 text-center">
                            <img src={crazy8_sketch_3}/>
                                <div className="sub-text mt-10">
                                    These sketches show screens that encourages interaction and ask educators about their feelings
                                </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="sub-container user-journey-mapping">
                <div className="sub-heading-text">
                    User Journey Map
                </div>
                <br></br>
                <div className="text-container-column">
                    <div className="sub-text mb-10">
                        Now, we wanted to dive even deeper and get a better understanding of the overall journey users would be taking throughout the app from start to finish. We wanted to better empathize with the scenarios users may be in, different decisions they would be making, and also the different paths they might take. To do this, we created a user journey map, which helped us to better understand educators' journey when they access activities on the Kikori platform.
                    </div>
                    <img src={user_journey_mapping}/>
                </div>
            </div>


            <div className="sub-container design-direction">
                <div className="heading-text">
                    Low Fidelity Prototype
                </div>
                <br></br>
                <div className="text-container-column">
                    <div className="sub-text ">
                        The low fidelity prototype connected the primary user flow of reminding educators to complete an activity as well as help them select an activity so the prototype could be used in a usability study with users. With the completed low-fidelity wireframes, we built a limited functionality, desktop prototype on Figma to help test our design with users.
                    </div>
                    <br></br>
                    <img src={lofi_screenshot}/>
                    <br></br>
                    <a className="text-blue-500 text-center" href= "https://www.figma.com/proto/wqnh9iMroilBhnwUmvGBAY/Kikori-User-Flow-Wireframes?type=design&node-id=1-2&t=K48ixAtuUISUsrND-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design" target='_blank'>View Kikori's low-fidelity prototype</a>
                </div>
            </div>


            <div className="sub-container design-direction">
                <div className="heading-text">
                    Design Direction
                </div>
                <br></br>
                <div className="text-container-column">
                    <div className="sub-text mb-10">
                        Our research led our design in the direction to simplify the user experience and significantly reduce the cognitive load on educators using Kikori's platform. We recommended implementing intuitive navigation and a streamlined activity library to decrease the overwhelm of endless content options. Educators desired more robust tools to customize activities to their classroom contexts as well.
                    </div>
                    <div className="sub-text mb-10">
                        Throughout this project, our team maintained open communication with Kikori to keep them apprised of key user insights uncovered during our research. We conveyed educators' needs around sharing, customization, and their lack of interest in badges or as incentives for platform usage. 
                    </div>
                    <div className="sub-text mb-10">
                        However, Kikori's executives ultimately made the decision to move forward with implementing badges aimed at increasing user engagement and retention. While we provided our evidence-based recommendations against these specific solutions, we respect that Kikori has to balance various stakeholder needs and business goals.
                    </div>
                </div>
            </div>

            <div className="sub-container design-direction">
                <div className="heading-text">
                    Mid Fidelity Prototype
                </div>
                <br></br>
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

            <div className="sub-container design-direction">
                <div className="heading-text">
                    High Fidelity Designs
                </div>
                <br></br>

                <div className="sub-heading-text">
                    High Fidelity Prototype
                </div>
                <br></br>

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

                <div className="sub-heading-text">
                    Understanding What Works and What Doesn't
                </div>
                <br></br>
                <div className="text-container-column">
                    <div className="sub-text ">
                        High-fidelity prototypes enabled the evaluation of key user tasks identified in the user interview research. An evaluation of the UI revealed that, while the tasks remained relatively straightforward, certain elements required reassessment. During testing, many participants expressed negative reactions to the volume of information on the homepage, which resulted in some confusion.
                    </div>
                </div>
                <br></br>
                <br></br>

                    <div className='text-container-row mt-10 mockups1'>
                        <div>
                        <div className="sub-heading-text">
                            Mockups
                        </div>
                        <br></br>
                            <ol>
                                <li>Homepage lo-fi wireframe <b>before</b>usability study</li>
                                <li>Homepage hi-fi mockup <b>after</b>usability study</li>
                            </ol>  
                        </div>

                        <div className="image-w-30">
                            <img src={mockups1}/>
                        </div>
                    </div>

                    <div className='text-container-row mt-20 activites'>
                        <div>
                        <div className="sub-heading-text">
                            Activities
                        </div>
                        <br></br>
                            <ol>
                                <li>Text above carousel deleted to reduce cognitive load</li>
                                <li>Search bar shortened and moved directly above carousel</li>
                                <li>Filter button remained next to the search bar and moved directly above carousel</li>
                            </ol>  
                        </div>

                        <div className="image-w-30">
                            <img src={activities}/>
                        </div>
                    </div>

                    <div className='text-container-row mt-20 activites'>
                        <div>
                        <div className="sub-heading-text">
                            Browse by Category
                        </div>
                        <br></br>
                            <ol>
                                <li>“Browse by Category” was moved higher on the page for easy access to activities</li>
                                <li>Categories changed to icons to visually represent activity categories and streamline the process of locating specific activities</li>
                            </ol>  
                        </div>

                        <div className="image-w-30">
                            <img src={browse_by_category}/>
                        </div>
                    </div>

                    <div className='text-container-row mt-20 activites'>
                        <div>
                        <div className="sub-heading-text">
                            Mockups
                        </div>
                        <br></br>
                            <ol>
                                <li>After-activity survey page <b>before</b>usability study</li>
                                <li>After-activity survey page <b>after</b>usability study</li>
                            </ol>  
                        </div>

                        <div className="image-w-30">
                            <img src={mockups2}/>
                        </div>
                    </div>

                    <div className='text-container-row mt-20 activites'>
                        <div>
                        <div className="sub-heading-text">
                            Rating
                        </div>
                        <br></br>
                            <ol>
                                <li>One question was changed to two questions to better understand educators' experience.</li>
                                <li>“Easy”, “Medium”, and “Difficult” was changed to a more known system, the star system.</li>
                            </ol>  
                        </div>

                        <div className="image-w-30">
                            <img src={rating}/>
                        </div>
                    </div>

                    <div className='text-container-row mt-20 activites'>
                        <div>
                        <div className="sub-heading-text">
                            Mockups
                        </div>
                        <br></br>
                            <ol>
                                <li>Badges page <b> before</b>usability study</li>
                                <li>Badges page <b> after</b>usability study</li>
                            </ol>  
                        </div>

                        <div className="image-w-30">
                            <img src={mockups3}/>
                        </div>
                    </div>

                    <div className='text-container-row mt-20 activites'>
                        <div>
                        <div className="sub-heading-text">
                            Badges
                        </div>
                        <br></br>
                            <ol>
                                <li>Badges were moved to a separate page.</li>
                                <li>The name of the badge was added to the image of the badge to show educators the badges they have earned and badges that they can earn (locked badges).</li>
                            </ol>  
                        </div>

                        <div className="image-w-30">
                            <img src={badges}/>
                        </div>
                    </div>

                    <div className='text-container-row mt-20 activites'>
                        <div>
                        <div className="sub-heading-text">
                            Mockups
                        </div>
                        <br></br>
                            <ol>
                                <li>Journeyboard<b> before</b>usability testing</li>
                                <li>Journeyboard<b> after</b>usability testing</li>
                            </ol>  
                        </div>

                        <div className="image-w-30">
                            <img src={mockups4}/>
                        </div>
                    </div>

                    <div className='text-container-row mt-20 activites'>
                        <div>
                            <div className="sub-heading-text">
                                Journeyboard
                            </div>
                            <br></br>
                            <ol>
                                <li>It was called a “Leaderboard” at first, but was changed to “Journeyboard” so students can collaborate rather than compete with one another</li>
                                <li>The rank was removed and changed to a journeyboard, where each block of the journeyboard tracks educators progress each day they login and complete activities</li>
                            </ol>  
                        </div>

                        <div className="image-w-30">
                            <img src={journeyboard}/>
                        </div>
                    </div>
                </div>

                
            <div className="sub-container key-learnings-and-recommendations">
                <div className="heading-text">
                    Key Learnings and Recommendations
                </div>
                <br></br>
                    <div className="sub-heading-text">
                        Key Learnings
                    </div>
                    <br></br>
                    <ol>
                        <li>Users prioritize quick access to activities, necessitating an efficient design for educators to access, print, or download activities of their choice</li>
                        <li>User engagement with activities is crucial, prompting the creation of a journeyboard to monitor student progress and stimulate interaction</li>
                        <li>Simplified post-activity feedback surveys are essential for both new and existing users, minimizing their workload and ensuring ease of completion</li>
                    </ol>  
                <br></br>
                <br></br>
                <br></br>

                <div className="sub-heading-text">
                    Design Recommendations
                </div>
                <br></br>
                <div className="text-container-row">
                    <div>
                        <div className="sub-text ">
                            If I had more time to work on the project, I would have made the following changes to the design of the Journeyboard:
                        </div>
                        <ol>
                            <li>Include days on each block so educators can easily look back at each day of the month that they completed activities</li>
                            <li>Include “Badges earned” with images of the badges so educators see the different badges they earned</li>
                        </ol> 
                    </div>                
                    <div className="image-w-30 ml-10">
                        <img src={journeyboard_recommendations}/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}