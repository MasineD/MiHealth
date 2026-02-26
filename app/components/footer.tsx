// ========== The footer section, containing extra details about the website and the developer=========

// An array containing details for the footer section
const footerDetails = [
    {
        label:'About',
        id:'aboutSection'
    },
    {
        label:'Services',
        id:'servicesSection'
    },
    {
        label:'Testimonials',
        id:'testimonialsSection'
    },
    {
        label:'Contacts',
        id:'contactSection'
    }
]
// Array of resources
const resources = [
    {
        label:'Documentation',
        link:""
    },
     {
        label:'Support',
        link:""
    },
     {
        label:'Careers',
        link:""
    }
]
// Array of the legal details
const legalDetials = [
    {
        label: 'Privacy Policy',
        link: "#"
    },
    {
        label: 'Terms of Service',
        link: "#"
    },
    {
        label: 'HIIPA Compliance',
        link: "#"
    }
]
export default function Footer(){
    // Allowing the user to scroll to a section when cliking under the Navigate
    const scrollToSection = (id:string) =>{
        const element = document.getElementById(id);    //Using the id to scroll to the section
        if (element) element.scrollIntoView({behavior:'smooth'});   //Allowing for smooth scroll
    }
    return(
        <footer className="footerSection">
            <div className="footerContainer">
                <div className="cardContainer">
                    <div className="websiteSummary space-y-4">
                        <div className="space-x-2">
                            <span className="websiteName">MiHealth</span>
                        </div>
                        <p>Empowering Healthcare through technology</p>
                    </div>
                    <div className="websiteSections">       
                        <h5>Navigate</h5>
                        <ul className="space-y-3">
                            {/*Mapping the elements of the constant array into individual list items */}
                            {footerDetails.map((item)=>(        
                                <li key={item.id}>
                                    <button onClick={()=>scrollToSection(item.id)}>
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="resources">
                        <h5>Resources</h5>
                        <ul className="space-y-3">
                            {resources.map((item)=>(
                                <li key={item.label}>
                                    <a href={item.link}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul> 
                    </div>
                    <div className="legal">
                        <h5>Legal</h5>
                        <ul className="space-y-3">
                            {legalDetials.map((item)=>(
                                <li key={item.label}>
                                    <a href={item.link}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul> 
                    </div>
                </div>
                <div className="copyright">
                    <p className="copyrightDetails">
                        @{new Date().getFullYear()} MiHealth. All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}