
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
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-tr from-black to-gray-900">
                <div className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-black">
                      <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Watch Course Preview</h3>
                  <p className="text-gray-300 text-sm">See what makes our courses exceptional</p>
                </div>
              </div>
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
