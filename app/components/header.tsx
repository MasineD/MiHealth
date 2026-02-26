// ========== Header section,containing the website name and the navigation bar=============

// Array of different sections to navigate to
const sections = [
    {
        id:'aboutSection',
        name: 'About'
    },
    {
        id:'servicesSection',
        name: 'Services'
    },
    {
        id:'testimonialsSection',
        name: 'Testimonials'
    },
    {
        id:'contactSection',
        name: 'Contact Us'
    }
]
export default function Header() {
  
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="headerSection">
      <div className="max-w-7xl px-4 sm:px-8 lg:px-16 flex items-center justify-center h-16">
        <div className="flex items-center space-x-2">
          {/* <Heart className="w-6 h-6 text-primary" /> */}
          <span className="text-xl font-heading font-bold text-primary">MiHealth</span>
        </div>
        <nav className="hidden md:flex items-center space-x-15 md:ml-100">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="text-sm font-medium w-30 rounded-b-lg  bg-gradient-to-b from-transparent via-black/90 to-black hover:shadow-[8px_8px_20px_0px_#2563eb] transition-shadow duration-300 hover:bg-black/90 hover:cursor-pointer"
            >
              {section.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}