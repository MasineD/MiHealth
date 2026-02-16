/* ========= PURPESE:==========================
    1.Creating the landing page for the website
   =============================================*/
import About  from "../pages/about";
import Services  from "../pages/services";
import Testimonials  from "../pages/testimonials";
import Contacts  from "../pages/contacts";

//-------------- The landing page component ------------------
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
            <About />
            <Services />
            <Testimonials />
            <Contacts />
        </section>
    )
}

export default Landing;
