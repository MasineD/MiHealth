// ========Section about the service offered by MiHealth==============
import Overview from '../images/overview_back.jpg'
import Diagnostics from '../images/diagnostics_back.jpg'
import HealthAcess from '../images/healthAccess_back.jpg'
import Socialize from '../images/socialize_back.jpg'
// Array of details about the services offered
const services =[
    {   title:'Overview',
        image: Overview,
        description: 
            "Personalised tracking of user's upcoming and historical health events. Allowing users to journal their current health status for better AI assistance in improving the health conditions."
    },
     {   title:'Diagnostics',
        image: Diagnostics,
        description: 
            "Allowing user input in the form of text, voice, or image to assist with diagnosing and providing personalised health solutions."
    },
     {   title:'HealthAccess',
        image: HealthAcess,
        description: 
            "Providing real-time and easy access to health facilities through Google Maps integration. This enables the user to find the nearest health facility from the current location."
    },
     {   title:'Socialize',
        image: Socialize,
        description: 
            "Users can socialize with other patients, ex patients, doctors, and health coaches in a safe space, without exposing their identities."
    }
]

export default function Services(){
    return(
        <section id='servicesSection' className='servicesSection'>
            <div className="">
                <div className="sectionIntro">      {/*Introductory details to the section*/}
                    <span className="introQuestion">What We Offer</span>
                    <h2 className="sectionHeading">Our Services</h2>
                    <p className="miniDescription">
                        Smart healthcare solutions designed to meet all your needs. 
                    </p>
                </div>
                {/* Mapping the elements from the services array into individual cards */}
                <div className="cardContainer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-25">
                    {services.map((service,index) => (
                        <div key={index} className="serviceCard border border-white/10 w-70 rounded-lg shadow-md p-6 text-center shadow-[8px_8px_20px_0px_#2563eb] 
                            hover:shadow-[8px_8px_20px_0px_#2563eb] transition-shadow duration-300">
                            <h3 className="serviceTitle text-xl font-bold text-center mb-2">{service.title}</h3>
                            <img alt={service.title} src={service.image} className="serviceImage mx-auto mb-4 w-100 h-35 rounded-lg"/>
                            <p className="serviceDescription text-center">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
    