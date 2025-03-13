import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const CustomButton = ({ to, variant, children }: { to: string; variant: 'primary' | 'secondary'; children: React.ReactNode }) => (
    <Link
      to={to}
      className={`px-6 py-3 rounded-full font-medium transition-all duration-300 inline-flex items-center gap-2 ${
        variant === 'primary'
          ? 'bg-green-600 text-white hover:bg-green-700'
          : 'bg-white text-green-600 hover:bg-gray-50'
      }`}
    >
      {children}
    </Link>
  );

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 relative px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className={`flex-1 text-center md:text-left transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className={`inline-block bg-green-100 text-green-600 font-medium text-xs md:text-sm py-1 px-3 rounded-full mb-4 md:mb-6 transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Transform Your Skills
            </div>
            <h1 className={`text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4 md:mb-6 text-black transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Let's{" "}
              <span className="bg-gradient-to-r from-green-600 to-green-400 text-transparent bg-clip-text">
                Learn
              </span>,{" "}
              <br />
              <span className="bg-gradient-to-r from-green-600 to-green-400 text-transparent bg-clip-text">
                Innovate
              </span>
              <span className="text-black"> & </span>
              <span className="bg-gradient-to-r from-green-600 to-green-400 text-transparent bg-clip-text">
                Succeed
              </span>
            </h1>
            <p className={`text-base md:text-lg text-gray-800 mb-6 md:mb-8 max-w-xl mx-auto md:mx-0 transition-all duration-700 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Join thousands of learners worldwide and transform your career with our expert-led courses designed for the modern professional.
            </p>
            <div className={`flex flex-col sm:flex-row justify-center md:justify-start gap-4 transition-all duration-700 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <CustomButton to="/services" variant="primary">
                Explore Courses
              </CustomButton>
              <CustomButton to="/about" variant="secondary">
                Learn More
              </CustomButton>
            </div>
          </div>
          <div className={`flex-1 mt-8 md:mt-0 transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="Students learning"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;