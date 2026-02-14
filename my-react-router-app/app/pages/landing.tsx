/* ========= PURPESE:==========================
    1.Creating the landing page for the website
   =============================================*/
import { Link } from "react-router-dom"

//------------------ Creating a components associated with the landing page -------------
const About = () =>{        //The about section
    return (
        <section>
            <h2>About</h2>
            <hr />
            <p>
                MiHealth is a holistic health platform dedicated to bridging the gap between ancient wisdom and cutting-edge modern science
                . It integrates traditional healing systems with modern medical advancements to address chronic and lifestyle-related health
                issues. Apart from allowing easy and real-time access to health facilities, MiHealth also levarages AI to provide sophisticated 
                suggesstions for homemade remedies. This allows quick solutions to minor problems, saving lives while waiting for the far fetched
                doctor. 
            </p>
        </section>
    )    
}

const Services = () => {        //The services section
    return (
        <section>
            <h2>Services</h2>
            <hr />
            <div id='card_container'>
                <div id='overview_card'>
                    <h3>Overview</h3>
                    <p id='card_description'>
                        Personalised tracking of user's upcoming and historical health events. Allowing users to journal
                        their current health status for better AI assistance in improving the health conditions. 
                    </p>
                </div>
                <div id='diagnostics_card'>
                    <h3>Diagnostics</h3>
                    <p id='card_description'>
                        Allowing user input in the form of text, voice, or image to assist with diagnosing and providing
                        personalised health solutions.
                    </p>
                </div>
                <div id='healthAccess_card'>
                    <h3>Health Access</h3>
                    <p id='card_description'>
                        Providing real-time and easy access to health facilities through Google Maps integration. This
                        enables the user to find the nearest health facility from the current location. 
                    </p>
                </div>
                <div id='socialize_card'>
                    <h3>Socialize</h3>
                    <p id='card_description'>
                        Users can socialize with other patients, ex patients, doctors, and health coaches in a safe space,
                        without exposing their identities.
                    </p>
                </div>
            </div>
        </section>
    )
}

const Testimonials =() =>{      //The testimonials section
    return (
        <section>
            <h3>Testimoonials</h3>
            <hr />
            <div id='card_container'>

            </div>
        </section>
    )
}
const Contacts = () =>{     //The contacts section
    return (
        <section>
            <h3>Contacts</h3>
            <p>
                I welcome connections and conversations regarding opportunities, collaborations (software engineering, data engineeering, data science), or shared interests
                in technology and data. Please feel free to reach out through any of the following channels:
                {/* <Link href =''>LINKEDIN</Link>
                <Link href =''>GMAIL</Link>
                <Link href =''>WHATSAPP</Link> */}
            </p>
        </section>
    )
}
//-------------- Creating the landing page ------------------
const Landing = () =>{
    return (
        <section>
            <header> 
                <h1 id='website_name'>MiHealth</h1>     {/*The website name*/}
                <nav id='navigation_bar'>       {/*The navigation bar with its links*/}
                    <a href=''>About</a>
                    <a href=''>Services</a>
                    <a href=''>Testimonials</a>
                    <a href=''>Contacts</a>
                </nav>
            </header>
            <div id="slogan_and_button">
                <div id='slogan'>
                    <h2 id='h2_slogan'>Improving Your Health The SMART Way</h2>
                    <p id='p_slogan'>YOUR HEALTH, YOUR WEALTH</p>
                </div>
                <button id='get_started'>Get Started</button>
            </div>
            <About/>
            <Services />
            <Testimonials />
            <Contacts />
        </section>
    )
}

export default Landing;
