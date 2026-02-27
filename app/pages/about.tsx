// =========The about section, containing details about MiHealth website=========
import "../app.css";
import LandingSection from '../images/landingSection_back.jpg'

// Constant statistical values, which will then be replaced with dynamic values
const stats = [
    {value:'1.5k+',label:'Patients served'},
    {value:'100+',label:'Doctors'},
    {value:'97%',label:'Satisfaction Rate'}
]
// The about component
export default function About() {
    return(
        <section id='aboutSection' className="py-24 sm:px-8 lg:px-16 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="sectionIntro">      {/*Introductory details to the section*/}
                    <span className="introQuestion">Who We Are</span>
                    <h2 className="sectionHeading">About MiHealth</h2>
                    <p className="miniDescription">
                        A digital platform dedicated to making quality healthcare available to everyone, everywhere. 
                    </p>
                </div>

                <div className="sectionDetails grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">     {/*mission statement and image separated into two columns */}
                        <h3 className="subsectionHeading text-2xl font-semibold">Our Mission</h3>
                        <p className="fullDescription">     {/*Full description about the website */}
                            MiHealth is a holistic health platform dedicated to bridging the gap between ancient wisdom and cutting-edge modern science
                            . It integrates traditional healing systems with modern medical advancements to address chronic and lifestyle-related health
                            issues. Apart from allowing easy and real-time access to health facilities, MiHealth also levarages AI to provide sophisticated 
                            suggesstions for homemade remedies. This allows quick solutions to minor problems, saving lives while waiting for the far fetched
                            doctor.
                        </p>
                        <div className="statSection grid grid-cols-3 gap-6 pt-4 border-t border-border">   {/*Mappging the elements in stats array to individual cards */}
                            {stats.map((stat)=>(
                              <div key={stat.value}>
                                <p>{stat.value}</p>
                                <p>{stat.label}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div className="imageSection">      {/*Container for the image*/}
                            <img src={LandingSection} alt='Healthcare professionals at MiHealth' className="rounded-[15px]"/>
                        </div>
                </div>
            </div>
        </section>
    )
}