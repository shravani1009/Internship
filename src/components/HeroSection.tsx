import { Link } from 'react-router-dom';
import hero from '../assets/hero.jpeg'

const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.querySelector('.services-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative mt-16 pt-32 pb-24 bg-techlearn-lightblue min-h-screen"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>  {/* Added dark overlay for readability */}

      <div className="relative z-10 container mx-auto px-6 text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white animate-fade-in">Learn. Grow. Succeed.</h1>
        <p className="text-base md:text-lg text-white mb-8 animate-fade-in">Explore top-notch tech courses and boost your skills.</p>
        
        <div className="flex justify-start space-x-4 mb-12">
          <button 
            onClick={scrollToServices}
            className="relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-black rounded-md group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span className="relative flex items-center gap-2">
              Explore Courses
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          <Link 
            to="/contact" 
            className="relative overflow-hidden px-6 py-3 text-white bg-black rounded-md group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span className="relative">Contact Us</span>
          </Link>
        </div>
        
        {/* Removed inline hero image; the hero image is now set as section background */}
      </div>
    </section>
  );
};

export default HeroSection;