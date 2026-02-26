// =========The contacts section,containing contact details of the developer=============

// A constant array of contact details
const developerDetails = [
    {
        label:'Email',
        value:'masinedonald@gmail.com',
        link: 'mailto:masinedonald@gmail.com'
    },
    {
        label:'LinkedIn',
        value:'Donald Masine',
        link: 'https://www.linkedin.com/in/donald-masine-17a430270/'
    },
    {
        label:'Whatsapp',
        value:'Main Dee',
        link: 'https://wa.me/27647266704"'
    }
]

export default function Contacts(){
    return(
        <section id='contactSection' className='contactSection'>
            <div className="">
                <div className="sectionIntro">      {/*Introductory details to the section*/}
                    <span className="introQuestion">Reach Out</span>
                    <h2 className="sectionHeading">Contact Us</h2>
                    <p className="miniDescription">
                        Have questions? We would love to hear from you. Send us a message and we will respond as soon as possible.
                    </p>
                </div>
                {/* Mapping the elements from the developerDetails array into individual cards */}
                <div className="cardContainer">
                    {/* TODO: Add icons from lucide */}
                    {developerDetails.map((detail,index) => (
                        <div key={index} className="contactDetailsCard">
                            <a href={detail.link} target='_blank'>      {/*Wrapping details in a link tag,so the user can just click*/}
                                <h4 className="contactPlatform">{detail.label}</h4>
                                <p className="contactName">{detail.value}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}