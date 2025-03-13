
import { BookOpen, Users, Star, Award, Laptop, Headphones, Clock, AlignCenterVertical as Certificate } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <BookOpen className="h-8 w-8 text-green-600" />,
      title: 'Expert-Led Courses',
      description: 'Learn from industry professionals with years of experience in their respective fields.',
      features: ['Live sessions', 'Interactive workshops', 'Real-world projects', 'Industry insights']
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: 'Interactive Learning',
      description: 'Engage with peers and mentors in collaborative sessions designed to enhance your learning.',
      features: ['Group discussions', 'Peer reviews', 'Team projects', 'Networking opportunities']
    },
    {
      icon: <Star className="h-8 w-8 text-green-600" />,
      title: 'Premium Content',
      description: 'Access high-quality, up-to-date learning materials curated by industry experts.',
      features: ['HD video lessons', 'Downloadable resources', 'Practice exercises', 'Case studies']
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: 'Certification',
      description: 'Earn industry-recognized certificates upon successful completion of your courses.',
      features: ['Verified certificates', 'Digital badges', 'Portfolio projects', 'Skills assessment']
    },
    {
      icon: <Laptop className="h-8 w-8 text-green-600" />,
      title: 'Online Platform',
      description: 'Learn at your own pace with our user-friendly online learning platform.',
      features: ['24/7 access', 'Mobile-friendly', 'Progress tracking', 'Resume builder']
    },
    {
      icon: <Headphones className="h-8 w-8 text-green-600" />,
      title: 'Student Support',
      description: 'Get help when you need it with our dedicated student support team.',
      features: ['Technical support', 'Academic guidance', 'Career counseling', 'Community forums']
    },
    {
      icon: <Clock className="h-8 w-8 text-green-600" />,
      title: 'Flexible Schedule',
      description: 'Learn at your own pace with flexible scheduling options.',
      features: ['Self-paced learning', 'Recorded sessions', 'Flexible deadlines', 'Lifetime access']
    },
    {
      icon: <Certificate className="h-8 w-8 text-green-600" />,
      title: 'Career Services',
      description: 'Get support in launching your career with our career services.',
      features: ['Resume review', 'Interview prep', 'Job placement', 'Industry connections']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 py-28">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold sm:text-5xl">
          <span className="text-gray-900">Our</span>
          <span className="text-green-600 ml-3">Services</span>
        </h1>
        <p className="mt-4 text-xl text-gray-600">Comprehensive learning solutions designed for your success</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="p-8">
              <div className="flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 text-center mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="h-2 w-2 bg-green-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;