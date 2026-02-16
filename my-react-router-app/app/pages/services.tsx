
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

export default Services;