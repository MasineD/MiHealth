
const Contacts = () =>{     //The contacts section
    return (
        <footer className="contact_section">
            <h2 className="section_title">Contacts</h2><hr/>
            <p className="text-center text-lg mt-5 w-[50%] mx-auto">
                I welcome connections and conversations regarding opportunities, collaborations (software engineering, data science), or shared interests
                in technology and data. Please feel free to reach out through any of the following channels:
            </p>
            <div className="justify-center flex gap-25 mt-5">
                <a href="https://www.linkedin.com/in/donald-masine-17a430270/" target="_blank" className="text-blue-500 hover:underline text-[20px]"> LinkedIn</a>
                <a href="mailto:masinedonald@gmail.com" target="_blank" className="text-red-500 hover:underline text-[20px]"> Gmail</a>
                <a href="https://wa.me/27647266704" target="_blank" className="text-green-500 hover:underline text-[20px]"> WhatsApp</a>
            </div>
        </footer>
    )
}

export default Contacts;