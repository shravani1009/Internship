
import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black/95"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-gold blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-gold blur-[120px]"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block">
              <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-gold/20 text-gold border border-gold/40">
                Transform Your Career
              </span>
            </div>
            <h1 className="hero-title text-white">
              Elevate Your Skills With Our <span className="text-gold-gradient">Premium Courses</span>
            </h1>
            <p className="text-gray-300 text-lg">
              We provide expert-led courses designed to help professionals master their craft and reach new heights in their careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#courses" className="btn-primary flex items-center justify-center gap-2">
                Explore Courses <ChevronRight size={18} />
              </a>
              <a href="#about" className="px-6 py-3 rounded-full border border-gold text-gold font-medium transition-all duration-300 hover:bg-gold hover:text-black text-center">
                Learn More
              </a>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-300"></div>
                ))}
              </div>
              <div>
                <div className="font-semibold text-white">500+</div>
                <div className="text-sm text-gray-400">Satisfied Students</div>
              </div>
              <div className="w-px h-10 bg-gray-700"></div>
              <div>
                <div className="font-semibold text-white">4.9/5</div>
                <div className="text-sm text-gray-400">Course Ratings</div>
              </div>
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative z-10 rounded-2xl overflow-hidden border border-gold/20 shadow-[0_0_30px_rgba(176,147,76,0.2)]">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1200&h=800" 
                alt="Professional learning environment" 
                className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full border border-gold/30 opacity-50"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 rounded-full border border-gold/20 opacity-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
