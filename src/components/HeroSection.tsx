import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 bg-techlearn-lightblue">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-2 animate-fade-in">Learn. Grow. Succeed.</h1>
        <p className="text-lg mb-8 animate-fade-in">Explore top-notch tech courses and boost your skills.</p>
        
        <div className="flex justify-center space-x-4 mb-12">
          <Link 
            to="/join" 
            className="bg-techlearn-blue text-white px-6 py-2 rounded transition-all duration-300 hover:bg-techlearn-darkblue"
          >
            Join Our Team
          </Link>
          <Link 
            to="/contact" 
            className="bg-indigo-600 text-white px-6 py-2 rounded transition-all duration-300 hover:bg-indigo-700"
          >
            Contact Us
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