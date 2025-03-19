import { Link } from 'react-router-dom';

const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.querySelector('.services-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-40 pb-24 bg-techlearn-lightblue">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 animate-fade-in">Learn. Grow. Succeed.</h1>
        <p className="text-base md:text-lg text-gray-600 mb-8 animate-fade-in">Explore top-notch tech courses and boost your skills.</p>
        
        <div className="flex justify-center space-x-4 mb-12">
          <button 
            onClick={scrollToServices}
            className="relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-md group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span className="absolute left-0 w-0 h-full transition-all duration-500 ease-out bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full"></span>
            <span className="relative flex items-center gap-2">
              Explore Courses
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          <Link 
            to="/contact" 
            className="relative overflow-hidden px-6 py-3 text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-md group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span className="absolute left-0 w-0 h-full transition-all duration-500 ease-out bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full"></span>
            <span className="relative">Contact Us</span>
          </Link>
        </div>
        
        <div className="flex justify-center animate-fade-in">
          <img 
            src="https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?w=1380&t=st=1716316345~exp=1716316945~hmac=e9318df9d0b44e118d31ab5f0be9e1e3e56ac3f172a13ba7f1f90982c39d1e69" 
            alt="Team collaborating" 
            className="max-w-full sm:max-w-lg md:max-w-xl rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;