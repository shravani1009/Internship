import  { useState } from 'react';
import { ArrowRight, Brain, Database, Bot, Code, Network, 
  MessageSquare, BarChart2, TrendingUp, Globe, 
  Smartphone, Shield, Wifi, Cpu, Layers, Users, Terminal } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

const Courses = () => {
  // const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const courses = [
    {
      id: 1,
      title: 'Generative AI',
      description: 'Generative AI leverages transforming industries by enabling automation of creative processes and enhancing human capabilities.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
      icon: Brain
    },
    {
      id: 2,
      title: 'Data Science',
      description: 'Data Science involves the extraction of insights and knowledge from large volumes of data using statistical methods.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      icon: Database
    },
    {
      id: 3,
      title: 'Artificial Intelligence',
      description: 'Artificial Intelligence encompasses the development of systems that can perform tasks requiring human intelligence.',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b',
      icon: Bot
    },
    {
      id: 4,
      title: 'Machine Learning',
      description: 'Machine Learning is a subset of AI where systems learn from data to make predictions or decisions.',
      image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc',
      icon: Code
    },
    {
      id: 5,
      title: 'Deep Learning',
      description: 'Deep Learning uses neural networks with many layers to model complex patterns in data.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485',
      icon: Network
    },
    {
      id: 6,
      title: 'Natural Language Processing',
      description: 'NLP is the field of AI focused on enabling computers to understand, interpret, and generate human language.',
      image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72',
      icon: MessageSquare
    },
    {
      id: 7,
      title: 'Data Analytics',
      description: 'Data Analytics involves the systematic analysis of data to discover patterns, trends, and insights.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      icon: BarChart2
    },
    {
      id: 8,
      title: 'Business Analytics',
      description: 'Business Analytics involves the use of statistical methods to analyze past business performance data.',
      image: 'https://images.unsplash.com/photo-1560472355-536de3962603',
      icon: TrendingUp
    },
    {
      id: 9,
      title: 'Web Development',
      description: 'Web Design and Development involves both front-end design and back-end development.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166',
      icon: Globe
    },
    {
      id: 10,
      title: 'Android Development',
      description: 'Android Development involves coding, testing, and deploying apps for mobile devices.',
      image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb',
      icon: Smartphone
    },
    {
      id: 11,
      title: 'Cybersecurity',
      description: 'Learn to protect systems, networks, and programs from digital attacks while understanding security protocols.',
      image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87',
      icon: Shield
    },
    {
      id: 12,
      title: 'Internet of Things',
      description: 'The IOT connects everyday devices to the internet, enabling them to send and receive data.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      icon: Wifi
    },
    {
      id: 13,
      title: 'Robotics',
      description: 'Robotics involves the design, construction, and use of robots to perform tasks autonomously.',
      image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a',
      icon: Cpu
    },
    {
      id: 14,
      title: 'UI/UX Development',
      description: 'UI/UX development is a process that involves creating user interfaces and experiences for products.',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c',
      icon: Layers
    },
    {
      id: 15,
      title: 'Soft Skills',
      description: 'Soft skills are interpersonal abilities like communication, teamwork, and problem-solving.',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902',
      icon: Users
    },
    {
      id: 16,
      title: 'Core Programming',
      description: 'Core programming involves learning the fundamentals of programming languages and algorithms.',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713',
      icon: Terminal
    }
  ];

  const visibleCourses = isExpanded 
    ? courses 
    : courses.slice(0, 8);


  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explore our <span className="text-green-600">courses</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Learn from industry experts and advance your career
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleCourses.map((course) => (
            <div 
              key={course.id}
              className="bg-white rounded-xl overflow-hidden transition-all duration-300
                       hover:transform hover:-translate-y-2 hover:shadow-xl
                       border border-gray-100 w-full"
            >
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-[180px] object-cover"
                />
              </div>
            
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-1">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                  {course.description}
                </p>
                
               
              </div>
            </div>
          ))}
        </div>
        
        {courses.length > 8 && (
          <div className="mt-16 text-center">
            <button 
              onClick={() => setIsExpanded(prev => !prev)}
              className="bg-green-600 text-white px-8 py-3 rounded-full font-medium 
                       hover:bg-green-700 transition-all duration-300 inline-flex 
                       items-center gap-2"
            >
              {isExpanded ? 'Show Less' : 'View All Courses'}
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;

