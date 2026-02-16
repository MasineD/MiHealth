/* ========= PURPOSE:==========================
    1. Creating the landing page for the website
    2. Smooth scrolling to sections with anchor tags
   =============================================*/
import About from "../pages/about";
import Services from "../pages/services";
import Testimonials from "../pages/testimonials";
import Contacts from "../pages/contacts";
import "../app.css";
import { useEffect } from "react";

//-------------- The landing page component ------------------
const Landing = () => {
    
    // Add smooth scrolling behavior to all anchor links
    useEffect(() => {
        // Handle click on anchor links
        const handleAnchorClick = (e:any) => {
            const target = e.target.closest('a[href^="#"]');
            if (target) {
                e.preventDefault();
                const id = target.getAttribute('href').slice(1); // Remove the #
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);
        
        // Cleanup
        return () => {
            document.removeEventListener('click', handleAnchorClick);
        };
    }, []);

    return (
        <div className="bg-[rgba(255,255,255,0.2)]">
            <section className="landing_page">
                <div className="blur_landingPage"></div>
                <header className="header_section"> 
                    <h1 id='website_name' className='web_name'>MiHealth</h1>
                    <nav id='navigation_bar' className="nav_bar">
                        <a href="#about-section" className="nav_link cursor-pointer">About</a>
                        <a href="#services-section" className="nav_link cursor-pointer">Services</a>
                        <a href="#testimonials-section" className="nav_link cursor-pointer">Testimonials</a>
                        <a href="#contacts-section" className="nav_link cursor-pointer">Contacts</a>
                    </nav>
                </header>
                <div id="slogan_and_button" className="slogan_and_btn">
                    <div id='slogan'>
                        <h2 id='h2_slogan' className="text-center text-[70px]">Improving Your Health<br/> The SMART Way</h2>
                        <p id='p_slogan' className="text-center text-[40px]">YOUR HEALTH, YOUR WEALTH</p>
                    </div>
                    <a href="#">
                        <button 
                            id='get_started' 
                            className="text-[20px] mt-10 bg-blue-400 w-[150px] h-[50px] rounded-md cursor-pointer"
                        >
                            Get Started
                        </button>
                    </a>
                </div>
            </section>
            
            <div id="about-section">
                <About />
            </div>
            <div id="services-section">
                <Services />
            </div>
            <div id="testimonials-section">
                <Testimonials />
            </div>
            <div id="contacts-section">
                <Contacts />
            </div>
        </div>
    )
}

export default Landing;