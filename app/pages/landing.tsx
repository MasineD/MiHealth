import Header from '../components/header';
import About from './about';
import Services from './services';
import Testimonials from './testimonials';
import Contacts from './contacts';
import Footer from '../components/footer';
import { useNavigate } from 'react-router';
import "../app.css";

export default function LandingPage() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* The Hero Section */}
      <section id="home"className="heroSection relative h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-heading font-bold mb-4">Welcome to MiHealth</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Your trusted partner in digital healthcare</p>
          <button onClick={() => navigate('/login')} className="bg-primary text-white px-10 py-4 rounded-lg text-lg font-medium hover:bg-primary/90 transition-all hover:scale-105">
            Get Started
          </button>
        </div>
      </section>
      {/* Other sections of the landing page */}
      <About />
      <Services />
      <Testimonials />
      <Contacts />
      <Footer />
    </div>
  );
}