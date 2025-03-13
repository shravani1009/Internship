import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StartLearning = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-8 backdrop-blur-sm shadow-xl">
        <div className="text-center cursor-pointer" onClick={handleGetStarted}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 hover:opacity-90 transition-opacity">
            Ready to <span className="text-green-600">Start Learning?</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto hover:text-gray-200 transition-colors">
            Join our community of learners and start your journey towards mastering new skills
          </p>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handleGetStarted}
              className="bg-white text-green-600 px-8 py-3 rounded-full font-medium 
                       hover:bg-gray-100 hover:scale-105 transform 
                       transition-all ease-in-out duration-200 inline-flex 
                       items-center gap-2 shadow-md hover:shadow-lg"
            >
              Get Started <ArrowRight size={16} />
            </button>
            <a
              href="/brochure"
              className="bg-transparent border border-white text-white px-8 py-3 rounded-full font-medium 
                       hover:bg-white/10 hover:scale-105 transform 
                       transition-all ease-in-out duration-200 inline-flex 
                       items-center gap-2"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartLearning;
