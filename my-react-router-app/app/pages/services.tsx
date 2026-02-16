import diagnosticsImage from '../images/diagnostics_back.jpg';
import healthAccessImage from '../images/healthAccess_back.jpg';
import socializeImage from '../images/socialize_back.jpg';
import overviewImage from '../images/overview_back.jpg';

const Services = () => {        //The services section
    return (
        <section className="landing_section">
            <h2 className="section_title">Services</h2>
            <hr />
            <div id='card_container' className='grid grid-cols-4 gap-8 m-20 mt-15'>
                <div id='overview_card' className='card'>
                    <h3 className="text-xl font-bold text-center">Overview</h3>
                    <img src={overviewImage} alt="Overview" className="mx-auto mb-4 w-100 h-35 rounded-lg" />
                    <p id='card_description' className='text-center'>
                        Personalised tracking of user's upcoming and historical health events. Allowing users to journal
                        their current health status for better AI assistance in improving the health conditions. 
                    </p>
                </div>
                <div id='diagnostics_card' className='card'>
                    <h3 className="text-xl font-bold text-center">Diagnostics</h3>
                    <img src={diagnosticsImage} alt="Diagnostics" className="mx-auto mb-4 w-100 h-35 rounded-lg" />
                    <p id='card_description' className='text-center'>
                        Allowing user input in the form of text, voice, or image to assist with diagnosing and providing
                        personalised health solutions.
                    </p>
                </div>
                <div id='healthAccess_card' className='card'>
                    <h3 className="text-xl font-bold text-center">Health Access</h3>
                    <img src={healthAccessImage} alt="Health Access" className="mx-auto mb-4 w-100 h-35 rounded-lg" />
                    <p id='card_description' className='text-center'>
                        Providing real-time and easy access to health facilities through Google Maps integration. This
                        enables the user to find the nearest health facility from the current location. 
                    </p>
                </div>
                <div id='socialize_card' className='card'>
                    <h3 className="text-xl font-bold text-center">Socialize</h3>
                    <img src={socializeImage} alt="Socialize" className="mx-auto mb-4 w-100 h-35 rounded-lg" />
                    <p id='card_description' className='text-center'>
                        Users can socialize with other patients, ex patients, doctors, and health coaches in a safe space,
                        without exposing their identities.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Services;