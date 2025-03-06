import { useState, useEffect } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import bgimage from '../assets/bgimage.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    bgimage,
    bgimage
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {backgroundImages.map((imgSrc, index) => (
        <div 
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            currentImageIndex === index ? 'opacity-20' : 'opacity-0'
          }`}
        >
          <img 
            src={imgSrc} 
            alt={`Background ${index + 1}`} 
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/90 z-1"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="px-5 py-2 rounded-full text-sm font-medium bg-gold/20 text-gold border border-gold/40">
              Transform Your Career
            </span>
            <h1 className="hero-title text-white">
              Let's Learn, Innovate <span className="text-gold-gradient">& Succeed</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Study like the best IIT graduates and secure lucrative positions with an expertly engineered path to elevate you into an expert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#courses" className="btn-primary flex items-center justify-center gap-2 group relative overflow-hidden">
                Explore Courses 
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
              <a href="/about" className="px-6 py-3 rounded-full border border-gold text-gold font-medium transition-all duration-300 hover:bg-gold/10 group">
                <span className="relative">
                  Learn More
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
                </span>
              </a>
            </div>

            {/* Stats Section */}
            <div className="flex flex-wrap gap-8 ml-4 mt-4">
              <div className="flex flex-col items-center group">
                <span className="text-4xl font-bold text-[#b0934c] group-hover:scale-110 transition-transform duration-300">25k+</span>
                <span className="text-gray-400">Students Trained</span>
              </div>
              <div className="flex flex-col items-center group">
                <span className="text-4xl font-bold text-[#b0934c] group-hover:scale-110 transition-transform duration-300">7.5k+</span>
                <span className="text-gray-400">Faculties Trained</span>
              </div>
              <div className="flex flex-col items-center group">
                <span className="text-4xl font-bold text-[#b0934c] group-hover:scale-110 transition-transform duration-300">5k+</span>
                <span className="text-gray-400">Corporates Trained</span>
              </div>
              <div className="flex flex-col items-center group">
                <span className="text-4xl font-bold text-[#b0934c] group-hover:scale-110 transition-transform duration-300">15+</span>
                <span className="text-gray-400">Courses</span>
              </div>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative z-10 rounded-3xl overflow-hidden border border-gold/20 shadow-[0_8px_32px_rgba(176,147,76,0.3)] transform transition-all duration-700 hover:shadow-[0_12px_40px_rgba(176,147,76,0.4)]">
              <img 
                src={bgimage}
                alt="Professional learning environment" 
                className="w-full h-auto object-cover transform transition-all duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Hero;
