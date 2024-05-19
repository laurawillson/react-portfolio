import '../../scss/work.scss';
import '../../scss/Paella_Bowls.scss';
import Paella_Bowls_Homepage from '../paella_bowls_imgs/Paella_Bowls_Homepage.png';
import user_persona_maryann_green from '../paella_bowls_imgs/user_persona_maryann_green.png';
import user_journey_mapping from '../paella_bowls_imgs/user_journey_mapping.png';
import sketches from '../paella_bowls_imgs/sketches.png';
import lofi_screenshot from '../paella_bowls_imgs/lofi_screenshot.png';
import hifi_screenshot from '../paella_bowls_imgs/hifi_screenshot.png';
import before_and_after_first_study from '../paella_bowls_imgs/before_and_after_first_study.png'
import before_and_after_second_study from '../paella_bowls_imgs/before_and_after_second_study.png'
import key_mockups from '../paella_bowls_imgs/key_mockups.png'
import digital_wireframes from '../paella_bowls_imgs/digital_wireframes.png'
import Footer from '../../components/Footer'

export default function Paella_Bowls(){
    const project_title = 'Paella Bowls';

    return(
        <div className="work-container">
            <div className='project-title'> {project_title} </div>
            <div className='paella-bowls-homepage-container'>
                <br></br>
                <img className="paella-bowls-homepage" src={Paella_Bowls_Homepage}/>
            </div>
            <br></br>
            <br></br>

            <div className="sub-container overview">
                <div className="heading-text">
                    Overview
                </div>
                <br></br>
                <div className="text-container-row">
                    <div className="sub-text w-1/2">
                        Paella Bowls is a mobile application dedicated to offering delectable paella dishes. Designed to cater to busy commuters, it simplifies the process of ordering mouthwatering paellas for both lunch and dinner.                    
                    </div>

                    <div className="text-container-column ml-10">
                        <div className="flex"> 
                            <b>Role:</b> UX Designer
                        </div>
                        <b>Responsibilities:</b>
                        <ul>
                            <li>Conducting interviews and usability studies</li>
                            <li>Synthesizing user feedback</li>
                            <li>Sketching</li>
                            <li>Wireframing</li>
                            <li>Prototyping</li>
                        </ul>  
                        <div className="flex"> 
                            <b>Duration:</b> 7 months
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
                    <div className="sub-text ">
                        Create a mobile application tailored for a traditional Spanish dining experience.
                    </div>

                    <div className="text-container-row mt-10">
                        <div className="flex w-1/2"> 
                            <b>Problem:</b> Busy commuters often find themselves short on time to cook meals.
                        </div>
                        <div className="flex w-1/2"> 
                            <b>Solution:</b> Craft an app that enables seamless ordering of paella dishes for either pickup or delivery.
                        </div>
                    </div>
                </div>
            </div>

            <div className="sub-container research">
                <div className="heading-text">
                    Research
                </div>
                <br></br>
                <div className="sub-container user-persona">
                    <div className="sub-heading-text">
                        User Persona
                    </div>
                    <br></br>

                    <div className="text-container-col">
                        <div className="text-container-column ">
                            <div className="sub-text">
                                To ensure that my future decisions in the process remain focused on the user, I aimed to establish a comprehensive understanding of Paella Bowls' prospective user base. Thus, I crafted a user persona to embody the individuals I'll be designing for. Allow me to introduce you to MaryAnn:
                            </div>
                        </div>
                        <br></br>
                        <img className="persona w-full"src={user_persona_maryann_green}/>
                    </div>
                </div>

                <div className="sub-container user-journey-mapping">
                    <div className="sub-heading-text">
                        User Journey Map
                    </div>
                    <br></br>

                    <div className="text-container-col">
                        <div className="text-container-column">
                            <div className="sub-text">
                                As I worked on the journey map, I put myself in MaryAnn's shoes to envision how she would interact with the app. Additionally, I brainstormed enhancements that could benefit not only MaryAnn but also cater to the needs of various user profiles.
                            </div>
                        </div>
                        <br></br>
                        <img className="user_journey_mapping w-full"src={user_journey_mapping}/>
                    </div>
                </div>


                <div className="sub-heading-text">
                    User Interviews
                </div>
                <br></br>
                <div className="text-container-column">
                    <div className="text-container-column">
                        <div className="sub-text">
                            Now, the next step was to validate the persona and user journey map by conducting user interviews with potential Paella Bowls customers. Throughout these interviews, I posed open-ended questions aimed at gaining comprehensive insights into their experiences and uncovering their genuine needs.
                        </div>
                        <br></br>
                        <div className="sub-text">
                            I conducted interviews with <b>5 participants,</b>about <b>15-20 minutes</b>each.
                        </div>
                        <br></br>
                        <div className="sub-text">
                            These participants included: 
                            <ul>
                                <li>Parents with young children</li>
                                <li>College students</li>
                                <li>Working adults with a full-time job</li>
                            </ul>  
                        </div>
                        <br></br>

                        <div className="sub-text">
                            After completing these individual sessions with the participants, I aimed to assimilate all the newly acquired information to gain a deeper understanding of the user demographics.
                        </div>
                    </div>
                </div>
            </div>


            <div className="sub-container usability-testing">
                <div className="sub-heading-text">
                    Usability Testing
                </div>
                <br></br>

                <div className="text-container-col">
                    <div className="text-container-column ">
                        <div className="sub-text">
                            I conducted two rounds of usability studies. Insights gathered from the initial study informed the transition of designs from wireframes to mockups. In the second study, which utilized a high-fidelity prototype, I identified areas in the mockups requiring refinement. I observed five participants as they navigated through a series of tasks to understand their paella bowl ordering process on the app.
                        </div>
                    </div>
                    <br></br>

                    <div className="text-container-column ml-10">
                        <div className="flex"> 
                            <b>Round 1 Insights:</b>
                        </div>
                        <ol>
                            <li>Users desire a seamless and expedited paella ordering process</li>
                            <li>Users are seeking increased options for personalization</li>
                            <li>The “Edit order” functionality is confusing</li>
                        </ol>  
                    </div>
                    <br></br>

                    <div className="text-container-column ml-10">
                        <div className="flex"> 
                            <b>Round 2 Insights:</b>
                        </div>
                        <ol>
                            <li>Users value the option to connect with a customer service representative should they encounter any challenges with their order</li>
                            <li>Users seek an intuitive and user-friendly app experience</li>
                        </ol>  
                    </div>
                </div>
            </div>


            <div className="sub-container starting-the-design">
                <div className="heading-text">
                    Starting the Design
                </div>
                    <div className="sub-heading-text">
                        Sketches
                    </div>
                <br></br>

                <div className="text-container-col">
                    <div className="text-container-column ">
                        <div className="sub-text">
                            Carefully sketching multiple iterations of each app screen on paper ensured that the elements eventually translated into digital wireframes effectively addressed user concerns. Emphasizing a streamlined ordering process on the home screen aimed to enhance user efficiency and save valuable time.                        
                        </div>
                    </div>

                    <img className="m-auto mt-5"src={sketches}/>
                    <br></br>
                    <div>
                        <div><b>A.</b>Homepage</div>
                        <div><b>B.</b>Recommended Bowls Page</div>
                        <div><b>C.</b>Bowl of the Day Page</div>
                        <div><b>D.</b>Build Your Own Bowl Page</div>
                        <div><b>D.</b>Top Bowl Page</div>
                        <div><b>Home v1.</b>Second Version of Homepage</div>
                    </div>
                </div>

            </div>

            <div className="sub-container digital-wireframes">
                <div className="sub-heading-text">
                    Digital Wireframes
                </div>
                <br></br>

                <div className="text-container-column">
                    <div className="sub-text">
                        Throughout the initial design phase, I prioritized incorporating feedback and insights gleaned from user research into the screen designs. Simplified navigation emerged as a crucial aspect to fulfill the users needs effectively.
                    </div>
                    <br></br>
                    <br></br>
                        <img src={digital_wireframes}/>
                </div>
            </div>

            <div className="sub-container lofi-prototype">
                <div className="sub-heading-text">
                    Lo-fi Prototype
                </div>
                <br></br>
                <div className="text-container-column">
                    <div className="sub-text mb-10">
                        The low-fidelity prototype laid the foundation for the primary user journey of constructing and placing a paella order, facilitating its integration into a usability study.
                    <br></br>
                    </div>

                    <img src={lofi_screenshot}/>
                    <br></br>
                    <a className="text-blue-500 text-center" href="https://www.figma.com/proto/zGYqttjcWnwPUg2lET3tPt/Paella-Bowls-V2-(Wireframes%2C-Mockups%2C-and-Prototype)?type=design&node-id=1-2&t=HhXMyGl9bC5bJhBA-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design" target='_blank'>View Paella Bowls' low-fidelity prototype</a>
                </div>
            </div>


            <div className="sub-container redefining-the-design">
                <div className="heading-text">
                    Redefining the Design
                </div>
                <br></br>
                <div className="sub-heading-text">
                    Hi-Fi Mockups
                </div>
                <br></br>
                <div className="text-container-column">
                    <div className="sub-text">
                        The initial designs allowed users to easily choose between top dishes, recommended bowls, or customize their own paella bowl. After the initial usability study, I implemented the "PAELLAS YOU MIGHT LIKE" feature to provide users with more choices when they land on the home screen.
                    </div>
                    <br></br>

                    <div className="image-w-80 m-auto">
                        <img src={before_and_after_first_study}/>
                    </div>
                    <br></br>
                    <br></br>

                    <div className="text-container-column">
                        <div className="sub-text mb-10">
                            The second usability study uncovered user frustration stemming from the inability to contact a customer service representative when encountering order issues. In response, I integrated a "Contact Us" option within the menu, providing users with the ability to either send a message or initiate a live chat with a customer service representative.
                        </div>

                        <div className="image-w-80 m-auto">
                            <img src={before_and_after_second_study}/>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>

                <div className="sub-container key-mockups">
                    <div className="sub-heading-text">
                        Key Mockups
                    </div>
                    <br></br>
                    <div className="text-container-column">
                        <div className="sub-text">
                            These are the primary pages that users engage with throughout their app experience and encapsulate the user journey from start to finish.
                        </div>
                    </div>
                    <br></br>
                    <div className="image-w-80 m-auto">
                        <img src={key_mockups}/>
                    </div>
                </div>

                <div className="sub-container hifi-prototype">
                    <div className="sub-heading-text">
                        Hi-Fi Prototype
                    </div>
                    <br></br>
                    <div className="text-container-column">
                        <div className="sub-text mb-10">
                            The high-fidelity prototype introduced streamlined user pathways for creating a paella and completing the checkout process. Additionally, it fulfilled user requirements for both pickup and delivery choices while offering enhanced customization options.
                        <br></br>
                        </div>

                        <img src={hifi_screenshot}/>
                        <br></br>
                        <a className="text-blue-500 text-center" href="https://www.figma.com/proto/zGYqttjcWnwPUg2lET3tPt/Paella-Bowls-V2-(Wireframes%2C-Mockups%2C-and-Prototype)?type=design&node-id=335-301&t=yjqIcpmA6rsCFhhX-1&scaling=scale-down&page-id=335%3A164&starting-point-node-id=335%3A301&mode=design" target='_blank'>View Paella Bowls' high-fidelity prototype</a>
                    </div>
                </div>
            </div>


            <div className="sub-container redefining-the-design">
                <div className="heading-text">
                    Going Forward
                </div>
                <br></br>
                <div className="sub-heading-text">
                    Takeaways
                </div>
                <br></br>

                <div className="sub-text">
                    <b>Impact:</b>
                        The app ensures that users perceive Paella Bowls as attentive to their everyday requirements.
                </div>
                <br></br>

                <div className="sub-text">
                    <b>What I learned:</b>
                        <ul>
                            <li>The initial concepts for an app mark just the starting point of the journey, leaving ample space for refinement and enhancement.</li>
                            <li>Usability studies and feedback from peers play a critical role in shaping every iteration of the app's designs.</li>
                            <li>It's crucial to prioritize accessibility for all users.</li>
                        </ul>
                </div>
                <br></br>
                <br></br>
                <br></br>

                <div className="sub-heading-text">
                    Next Steps
                </div>
                <br></br>

                <div className="sub-text">
                    If I were to take this project to the next level, I would:
                        <ul>
                            <li>Execute another series of usability studies to confirm the effectiveness of the solutions implemented in addressing user pain points.</li>
                            <li>Conduct additional user interviews to identify any emerging areas of need.</li>
                            <li>Further enhance the app's design.</li>
                        </ul>  
                </div>
            </div>

            <br></br>
            <br></br>
            <br></br>

            <Footer/>
        </div>
    )
}