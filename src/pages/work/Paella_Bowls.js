import '../../scss/work.scss';
import '../../scss/Paella_Bowls.scss';
import homepage from '../paella_bowls_imgs/homepage.png';
import user_persona_maryann_green from '../paella_bowls_imgs/user_persona_maryann_green.png';
import user_journey_mapping from '../paella_bowls_imgs/user_journey_mapping.png';
import sketches from '../paella_bowls_imgs/sketches.png';
import lofi_screenshot from '../paella_bowls_imgs/lofi_screenshot.png';
import hifi_screenshot from '../paella_bowls_imgs/hifi_screenshot.png';
import before_and_after_first_study from '../paella_bowls_imgs/before_and_after_first_study.png'
import before_and_after_second_study from '../paella_bowls_imgs/before_and_after_second_study.png'
import key_mockups from '../paella_bowls_imgs/key_mockups.png'
import digital_wireframes from '../paella_bowls_imgs/digital_wireframes.png'

export default function Paella_Bowls(){
    const project_title = 'Paella Bowls';

    return(
        <div className="work-container">
            <div className='project-title'> {project_title} </div>
            <div className='paella-bowls-homepage-container'>
                <br></br>
                <img className="paella-bowls-homepage max-w-xs m-auto" src={homepage}/>
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
                        Paella Bowls is a mobile app that sells Paellas and strives to deliver delicious paella dishes. Paella Bowls makes it easier for commuting workers to order a delicious paella for lunch or dinner.
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
                            <b>Timeline:</b> 7 months
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
                    Design an app for a Spanish Restaurant.
                    </div>

                    <div className="text-container-row mt-10">
                        <div className="flex w-1/2"> 
                            <b>Problem:</b> Commuting workers lack the time necessary to prepare a meal.
                        </div>
                        <div className="flex w-1/2"> 
                            <b>Solution:</b> Design an app that allows users to easily order delicious paella dishes for pickup or delivery.
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
                                To make sure that my decisions moving forward in the process are user-centered, I wanted to have a clear understanding of who Paella Bowls' potential users would be. So, I created a user persona to represent who I will be designing for. Meet MaryAnn:
                            </div>
                        </div>
                        <img className="m-auto mt-5"src={user_persona_maryann_green}/>
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
                                While completing the journey map, I was able to think like MaryAnn and how she might use the app. I also thought about ways that the app can be improved, not only for MaryAnn, but also for every type of user.
                            </div>
                        </div>
                        <img className="m-auto mt-5"src={user_journey_mapping}/>
                    </div>
            </div>


                <div className="sub-heading-text">
                    User Interviews
                </div>
                <br></br>
                <div className="text-container-column">
                    <div className="text-container-column">
                        <div className="sub-text">
                            Now, it was time to validate the persona and user journey map through user interviews with potential Paella Bowls customers. During these interviews, I asked open-ended questions to learn as much as I could about their experiences and identify what the user’s needs truly are.
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
                            After conducting these one-on-one sessions with the participants, I wanted to take all this new information gained and synthesize it to better understand who the users are.
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
                            I conducted two rounds of usability studies. Findings from the first study helped guide the designs from wireframes to mockups. The second study used a high-fidelity prototype and revealed what aspects of the mockups needed refining. I observed five participants while they completed a series of tasks to see how they order a paella bowl on the app.
                        </div>
                    </div>
                    <br></br>

                    <div className="text-container-column ml-10">
                        <div className="flex"> 
                            <b>Round 1 Insights:</b>
                        </div>
                        <ol>
                            <li>People want to order paellas quickly</li>
                            <li>People want more customization options</li>
                            <li>“Edit order” functionality is confusing</li>
                        </ol>  
                    </div>
                    <br></br>

                    <div className="text-container-column ml-10">
                        <div className="flex"> 
                            <b>Round 2 Insights:</b>
                        </div>
                        <ol>
                            <li>Users want to be able to speak with a customer service representative if they are experiencing issues with their order</li>
                            <li>Users want a straightforward and easy to use app</li>
                        </ol>  
                    </div>
                </div>
            </div>


            <div className="sub-container starting-the-design">
                <div className="heading-text">
                    Starting the Design
                </div>
                <br></br>
                    <div className="sub-heading-text">
                        Sketches
                    </div>
                <br></br>

                <div className="text-container-col">
                    <div className="text-container-column ">
                        <div className="sub-text">
                            Taking the time to draft iterations of each screen of the app on paper ensured that the elements that made it to digital wireframes would be well-suited to address user pain points. For the home screen, I prioritized a quick and easy ordering process to help users save time.                        
                        </div>
                    </div>

                    <img className="m-auto mt-5"src={sketches}/>
                </div>
            </div>

            <div className="sub-container digital-wireframes">
                <div className="sub-heading-text">
                    Digital Wireframes
                </div>
                <br></br>

                <div className="text-container-column">
                    <div className="sub-text">
                        As the initial design phase continued, I made sure to base screen designs on feedback and findings from the user research. Easy navigation was a key user need to address in the designs.
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
                        The low-fidelity prototype connected the primary user flow of building and ordering a paella so the prototype could be used in a usability study.
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
                        Early designs allowed for users to be able to easily choose a top dish, recommended bowl, or to build their own paella bowl. After the first usability study, I added <b>“PAELLAS YOU MIGHT LIKE”</b>so users have more options to choose from when they first land on the home screen.
                    </div>
                    <br></br>

                    <div className="image-w-80 m-auto">
                        <img src={before_and_after_first_study}/>
                    </div>
                    <br></br>
                    <br></br>

                    <div className="text-container-column">
                        <div className="sub-text mb-10">
                            The second usability study revealed frustration with not being able to speak with a customer service representative if they are experiencing issues with their order. I added a <b>“Contact Us”</b>option in the menu, which leads to a page where users can either send a message or start a live chat with a customer service representative.
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
                            These are the main pages that users utilize during their experience on the app.
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
                            The high-fidelity prototype presented cleaner user flows for building a paella and checkout. It also met user needs for a pickup or delivery option as well as provided more options for customization.
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
                    The app makes sure users feel like Paella Bowls thinks about how to meet their everyday needs.
                </div>
                <br></br>

                <div className="sub-text">
                    <b>What I learned:</b>
                        <ul>
                            <li>The first ideas for an app are only the beginning of the process and there is always room for improvement.</li>
                            <li>Usability studies and peer feedback are important and influence each iteration of the app’s designs.</li>
                            <li>Accessibility for all users is important.</li>
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
                    If I were to push this project further, I would:
                        <ul>
                            <li>Conduct another round of usability studies to validate whether the pain points users experienced have been effectively addressed.</li>
                            <li>Conduct more user interviews to determine any new areas of need.</li>
                            <li>Make more improvements to the design of the app.</li>
                        </ul>  
                </div>
            </div>

        </div>
    )
}