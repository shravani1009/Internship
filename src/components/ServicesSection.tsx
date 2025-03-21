import { useState, useCallback, memo, useEffect, useRef } from 'react';
import { 
  Activity,
  Database,
  Monitor,
  Code,
  Share2 as Network,
  MessageSquare,
  BarChart2,
  TrendingUp,
  Globe,
  Smartphone,
  Shield,
  Wifi,
  Cpu,
  Layers,
  Users,
  Terminal 
} from 'react-feather';

const services = [
  {
    id: 1,
    title: "Generative AI",
    description: "Generative AI leverages transforming industries by enabling automation of creative processes and enhancing human capabilities.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    icon: Activity
  },
  {
    id: 2,
    title: "Data Science",
    description: "Data Science involves the extraction of insights and knowledge from large volumes of data using statistical methods.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    icon: Database
  },
  {
    id: 3,
    title: "Artificial Intelligence",
    description: "Artificial Intelligence encompasses the development of systems that can perform tasks requiring human intelligence.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b",
    icon: Monitor
  },
  {
    id: 4,
    title: "Machine Learning",
    description: "Machine Learning is a subset of AI where systems learn from data to make predictions or decisions.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    icon: Code
  },
  {
    id: 5,
    title: "Deep Learning",
    description: "Deep Learning uses neural networks with many layers to model complex patterns in data.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
    icon: Network
  },
  {
    id: 6,
    title: "Natural Language Processing",
    description: "NLP is the field of AI focused on enabling computers to understand, interpret, and generate human language.",
    image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72",
    icon: MessageSquare
  },
  {
    id: 7,
    title: "Data Analytics",
    description: "Data Analytics involves the systematic analysis of data to discover patterns, trends, and insights.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    icon: BarChart2
  },
  {
    id: 8,
    title: "Business Analytics",
    description: "Business Analytics involves the use of statistical methods to analyze past business performance data.",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603",
    icon: TrendingUp
  },
  {
    id: 9,
    title: "Web Development",
    description: "Web Design and Development involves both front-end design and back-end development.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166",
    icon: Globe
  },
  {
    id: 10,
    title: "Android Development",
    description: "Android Development involves coding, testing, and deploying apps for mobile devices.",
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb",
    icon: Smartphone
  },
  {
    id: 11,
    title: "Cybersecurity",
    description: "Learn to protect systems, networks, and programs from digital attacks while understanding security protocols.",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87",
    icon: Shield
  },
  {
    id: 12,
    title: "Internet of Things",
    description: "The IOT connects everyday devices to the internet, enabling them to send and receive data.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    icon: Wifi
  },
  {
    id: 13,
    title: "Robotics",
    description: "Robotics involves the design, construction, and use of robots to perform tasks autonomously.",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a",
    icon: Cpu
  },
  {
    id: 14,
    title: "UI/UX Development",
    description: "UI/UX development is a process that involves creating user interfaces and experiences for products.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c",
    icon: Layers
  },
  {
    id: 15,
    title: "Soft Skills",
    description: "Soft skills are interpersonal abilities like communication, teamwork, and problem-solving.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
    icon: Users
  },
  {
    id: 16,
    title: "Core Programming",
    description: "Core programming involves learning the fundamentals of programming languages and algorithms.",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713",
    icon: Terminal
  }
];

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
}

const ServiceCard = memo(({ service, index }: { service: Service; index: number }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add delay based on index for staggered animation
          setTimeout(() => {
            setIsVisible(true);
          }, index * 100);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className={`service-card bg-white rounded-lg overflow-hidden shadow-md transform 
        transition-all duration-700 ease-out
        ${isVisible 
          ? 'opacity-100 rotate-0 scale-100' 
          : 'opacity-0 -rotate-3 scale-95'
        }`}
    >
      <div className="relative h-48 overflow-hidden group">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
        )}
        <img 
          src={service.image + '?w=400&q=75'} 
          alt={service.title} 
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          {service.icon && <service.icon className="w-12 h-12 text-white" />}
        </div>
      </div>
      <div className="p-6 hover:bg-gray-50 transition-colors duration-300">
        <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
        <p className="text-base text-gray-600">{service.description}</p>
      </div>
    </div>
  );
});

const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleServices, setVisibleServices] = useState<Service[]>([]);

  // Load services progressively based on visibility
  useEffect(() => {
    setVisibleServices(showAll ? services : services.slice(0, 8));
  }, [showAll]);

  // Use Intersection Observer to detect when section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Only load images when scrolled into view
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const sectionElement = document.querySelector('.services-section');
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  const toggleServices = useCallback(() => {
    setIsLoading(true);
    // Use requestAnimationFrame for smoother transitions
    requestAnimationFrame(() => {
      setShowAll(prev => !prev);
      setTimeout(() => setIsLoading(false), 100);
    });
  }, []);

  return (
    <section className="services-section py-16 bg-techlearn-lightblue">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">OUR SERVICES</h2>
        <p className="text-base text-gray-600 text-center mb-12">Trainings we offer</p>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12`}>
          {visibleServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
        
        <div className="flex justify-center">
          <button 
            onClick={toggleServices}
            disabled={isLoading}
            className={`relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-md group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <span className="absolute left-0 w-0 h-full transition-all duration-500 ease-out bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full"></span>
            <span className="relative flex items-center gap-2">
              {showAll ? 'Show Less' : 'Explore All Courses'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d={showAll ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"}
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(ServicesSection);