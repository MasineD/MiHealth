//============The testinomials section, containing customer feedback and reviews===========

// Constant details for customer reviews
// TODO: Replace constants with dynamic data
const reviews = [
    {
        name:'Sibongiseni Ndlovu',
        role:'Patient',
        rating: 5,
        text:'Since I started using MiHealth, I realised that not all illnesses require admission at a hospital. Through the AI-enhanced Diagnostics, I get homemade remedy suggestions, to cure short team illnesses like headache, running stomach, and flue.'
    },
    {
        name:'Dr. Amanda Smith',
        role:'Doctor',
        rating: 4,
        text:'This platform has helped me get more patients and revolutionized how I connect with them. It enabled me to fulfill my passion, allowing me to connect with other healthcare professionals and potential patients within the same platform. Th interface is intuitive. The security features give both me and my patients peace of mind '
    },
    {
        name:'MediClininc',
        role:'Hospital',
        rating: 5,
        text:'By referring some of our patients that normally suffer from short term and less-severe illnesses such as flu, tonsils and many more, we managed to reduce th number of patients coming to our facility for issues that they can solve on their own at home. This allowed us more time to focus on patients with more severe sicknesses'
    },
    {
        name:'Kopano Health',
        role:'Pharmacy',
        rating: 5,
        text:'By registering an account on this platform, we have managed to get and connect with more clients and other healthcare professionals. Our sales have also increased by a very good percentage.We would really recommend other companies to register an account.'
    }
]

export default function Testimonials(){
    return(
        <section id='testimonialsSection' className='testimonialsSection'>
            <div className="">
                <div className="sectionIntro">      {/*Introductory details to the section*/}
                    <span className="introQuestion">Reviews</span>
                    <h2 className="sectionHeading">What Our Users Say</h2>
                    <p className="miniDescription">
                        Trusted by thousands patients across South Africa
                    </p>
                </div>
                {/* Mapping the elements from the services array into individual cards */}
                <div className="cardContainer">
                    {reviews.map((review,index) => (
                        <div key={index} className="reviewCard">
                            <div className="reviewRating">
                                 {/*TODO: Use a nice and neet icon for star */}
                                {Array.from({length : review.rating}).map((_,j)=>(
                                    <span key={j} className="rating">*</span>
                                ))}
                            </div>
                            <p className="reviewDescription">{review.text}</p>
                            <h4 className="reviewerName">{review.name}</h4>
                            <h5 className="reviewrRole">{review.role}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}