
import { BookOpen, Users, Star, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <BookOpen className="h-8 w-8 text-white" />,
      title: 'Expert-Led Courses',
      description: 'Learn from industry professionals with years of experience',
      gradient: 'from-purple-500 to-indigo-600',
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: 'Interactive Learning',
      description: 'Engage with peers and mentors in collaborative sessions',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: <Star className="h-8 w-8 text-white" />,
      title: 'Premium Content',
      description: 'Access high-quality, up-to-date learning materials',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: <Award className="h-8 w-8 text-white" />,
      title: 'Certification',
      description: 'Earn industry-recognized certificates upon completion',
      gradient: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
           Our <span className="text-green-600">Services</span>
          </h2>
      
        <p className="text-gray-300 text-lg mb-8">
        Comprehensive learning solutions for your success
          </p>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-90`}></div>
            <div className="relative z-10">
              <div className="h-16 w-16 mb-8 p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-white/80">{service.description}</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="absolute -bottom-1 -left-1 -right-1 h-1 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;