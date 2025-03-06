import { useState } from 'react';
import { 
  ArrowRight, 
  Brain, 
  Database, 
  Bot, 
  Code, 
  Network, 
  MessageSquare, 
  BarChart2, 
  TrendingUp, 
  Globe, 
  Smartphone, 
  Shield, 
  Wifi, 
  Cpu, 
  Layers, 
  Users 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CourseOverview = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [visibleTab, setVisibleTab] = useState<string>('all');
  const [isExpanded, setIsExpanded] = useState(false);

  const courses = [
    {
      id: 1,
      title: 'Generative AI',
      category: 'development',
      description: 'Generative AI leverages transforming industries by enabling automation of creative processes and enhancing human capabilities.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
      icon: Brain
    },
    {
      id: 2,
      title: 'Data Science',
      category: 'design',
      description: 'Data Science involves the extraction of insights and knowledge from large volumes of data using statistical methods, machine learning, and data visualization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      icon: Database
    },
    {
      id: 3,
      title: 'Artificial Intelligence',
      category: 'marketing',
      description: 'Artificial Intelligence encompasses the development of systems that can perform tasks requiring human intelligence, such as problem-solving, learning, and decision-making.',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
      icon: Bot
    },
    {
      id: 4,
      title: 'Machine Learning',
      category: 'business',
      description: 'Machine Learning is a subset of AI where systems learn from data to make predictions or decisions without explicit programming.',
      image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      icon: Code
    },
    {
      id: 5,
      title: 'Deep Learning',
      category: 'development',
      description: 'Deep Learning, a specialized branch of Machine Learning, uses neural networks with many layers to model complex patterns in data.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80',
      icon: Network
    },
    {
      id: 6,
      title: 'Natural Language Processing',
      category: 'design',
      description: 'NLP is the field of AI focused on enabling computers to understand, interpret, and generate human language.',
      image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      icon: MessageSquare
    },
    {
      id: 7,
      title: 'Data Analytics',
      category: 'marketing',
      description: 'Data Analytics involves the systematic analysis of data to discover patterns, trends, and insights.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
      icon: BarChart2
    },
    {
      id: 8,
      title: 'Business Analytics',
      category: 'business',
      description: 'Business Analytics involves the use of statistical methods and technologies to analyze and interpret past business performance data.',
      image: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      icon: TrendingUp
    },
    {
      id: 9,
      title: 'Web Development',
      category: 'development',
      description: 'Web Design and Development involves both front-end design, ensuring an attractive user interface, and back-end development.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
      icon: Globe
    },
    {
      id: 10,
      title: 'Android Development',
      category: 'development',
      description: 'Android Development involves coding, testing, and deploying apps that can be used on a wide range of mobile devices.',
      image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      icon: Smartphone
    },
    {
      id: 11,
      title: 'Cybersecurity',
      category: 'business',
      description: 'Learn to protect systems, networks, and programs from digital attacks while understanding security protocols.',
      image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      icon: Shield
    },
    {
      id: 12,
      title: 'Internet of Things',
      category: 'development',
      description: 'The IOT connects everyday devices to the internet, enabling them to send and receive data.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      icon: Wifi
    },
    {
      id: 13,
      title: 'Robotics',
      category: 'development',
      description: 'Robotics involves the design, construction, and perform tasks autonomously or semi-autonomously.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      icon: Cpu
    },
    {
      id: 14,
      title: 'UI/UX Development',
      category: 'business',
      description: 'UI/UX development is a process that involves creating user interfaces and experiences for products.',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      icon: Layers
    },
    {
      id: 15,
      title: 'Soft Skills',
      category: 'business',
      description: 'Soft skills are interpersonal abilities like communication, teamwork, and problem-solving.',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      icon: Users
    }
  ];

  const filteredCourses = visibleTab === 'all' 
    ? courses 
    : courses.filter(course => course.category === visibleTab);

  const visibleCourses = isExpanded 
    ? filteredCourses 
    : filteredCourses.slice(0, 8);

  const handleExplore = () => {
    navigate('/contact');
  };

  const handleViewAll = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <section id="courses" className="py-20 bg-black relative overflow-hidden">
  
      <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="px-5 py-3 rounded-full text-base font-medium bg-gold/20 text-gold border border-gold/40 inline-block mb-4">
            Our Services
          </span>
          <h2 className="text-4xl font-bold text-white mb-6">
            Trainings we <span className="text-gold-gradient">offer</span>
          </h2>
          <p className="text-gray-300">
            We offer a wide range of courses designed to help you build a successful career in the tech industry.
          </p>
          
        </div>
        

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleCourses.map((course, index) => (
            <div 
              key={course.id}
              className="relative group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`bg-black border border-[#b0934c]/30 rounded-xl p-6 h-full transition-all duration-500 
                ${hoveredCard === index ? 'transform -translate-y-4 shadow-lg shadow-[#b0934c]/20' : 'hover:shadow-md hover:shadow-[#b0934c]/10'}
                hover:border-[#b0934c]/50 overflow-hidden`}
              >
                {/* Background image with overlay */}
                <div className="absolute inset-0 opacity-10 transition-opacity duration-500 group-hover:opacity-15">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="relative z-10">
                  <div className="text-[#b0934c] mb-4 bg-[#b0934c]/10 w-14 h-14 rounded-full flex items-center justify-center">
                    {course.icon && <course.icon size={24} className="text-[#b0934c]" />}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#b0934c] transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {course.description}
                  </p>
                  
                  <div className={`mt-6 overflow-hidden transition-all duration-500 ${hoveredCard === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                    
                  </div>
                </div>
              </div>
              
              {/* Keep the floating effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-[#b0934c] to-[#b0934c]/50 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-1000 ${hoveredCard === index ? 'opacity-30' : ''}`}></div>
            </div>
          ))}
        </div>
        
        {filteredCourses.length > 8 && (
          <div className="mt-16 text-center">
            <button 
              onClick={handleViewAll}
              className="px-8 py-4 bg-transparent border-2 border-[#b0934c] text-[#b0934c] font-bold rounded-lg hover:bg-[#b0934c]/10 transition-all duration-300 group"
            >
              <span className="relative">
                {isExpanded ? 'Show Less' : 'View All Courses'}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#b0934c] group-hover:w-full transition-all duration-300"></span>
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseOverview;
