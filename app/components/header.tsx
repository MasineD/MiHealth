// ========== Header section,containing the website name and the navigation bar=============

export default function Header() {
  
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 flex items-center justify-between h-16">
        <div className="flex items-center space-x-2">
          {/* <Heart className="w-6 h-6 text-primary" /> */}
          <span className="text-xl font-heading font-bold text-primary">MiHealth</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {['about', 'services', 'testimonials', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-sm font-medium text-foreground hover:text-primary capitalize transition-colors"
            >
              {section}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}