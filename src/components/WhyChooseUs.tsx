
import { ArrowRight, ShieldCheck, Clock, Award, Users, Globe, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <ShieldCheck size={24} />,
      title: 'Industry-Relevant Curriculum',
      description: 'Our courses are designed in collaboration with industry leaders to ensure you learn skills that are in demand.'
    },
    {
      icon: <Clock size={24} />,
      title: 'Flexible Learning',
      description: 'Study at your own pace with our flexible scheduling options that fit your busy lifestyle.'
    },
    {
      icon: <Award size={24} />,
      title: 'Recognized Certifications',
      description: 'Earn certificates that are recognized by employers and will enhance your professional credentials.'
    },
    {
      icon: <Users size={24} />,
      title: 'Expert Instructors',
      description: 'Learn from professionals who bring years of real-world experience into their teaching.'
    },
    {
      icon: <Globe size={24} />,
      title: 'Global Community',
      description: 'Join a diverse community of learners from around the world and expand your professional network.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Career Acceleration',
      description: 'Our courses are designed to help you acquire skills quickly and advance your career faster.'
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-gold/20 text-gold border border-gold/40 inline-block mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl font-bold text-white mb-6">What Makes Us <span className="text-gold-gradient">Different</span></h2>
          <p className="text-gray-300">
            We're committed to providing an exceptional learning experience that sets you up for success in your career.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="rounded-2xl bg-black/60 backdrop-blur-sm p-8 border border-gray-800 transition-all duration-300 hover:border-gold/30 hover:transform hover:translate-y-[-5px] hover:shadow-lg hover:shadow-gold/5 group"
            >
              <div className="bg-gold/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-gold transition-colors duration-300">{reason.title}</h3>
              <p className="text-gray-300 mb-4">{reason.description}</p>
              <a href="#" className="flex items-center text-gold group-hover:text-white transition-colors duration-300">
                <span className="mr-2">Learn more</span>
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="/about" className="px-6 py-3 rounded-full bg-gold text-black font-medium transition-all duration-300 hover:bg-white hover:text-gold inline-flex items-center">
            <span>Discover Our Story</span>
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
