import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
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
  Terminal,
  Clock,
  Star as StarIcon
} from 'react-feather';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/slider.css';

// Add image imports
import leonaImage from '../assets/leona.jpg';
import purvaImage from '../assets/PURVA.jpg';
import samImage from '../assets/sam.jpg';
import vimalImage from '../assets/vimal.jpg';
import yaswanthImage from '../assets/yaswanth-TL.jpg';
import ponsankarImage from '../assets/pon.jpg';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 1,
      title: "Generative AI",
      description: "Generative AI leverages transforming industries by enabling automation of creative processes and enhancing human capabilities.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      icon: Activity,
      duration: "12 weeks",
      level: "Intermediate"
    },
    {
      id: 2,
      title: "Data Science",
      description: "Data Science involves the extraction of insights and knowledge from large volumes of data using statistical methods.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      icon: Database,
      duration: "10 weeks",
      level: "Beginner"
    },
    {
      id: 3,
      title: "Artificial Intelligence",
      description: "Artificial Intelligence encompasses the development of systems that can perform tasks requiring human intelligence.",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b",
      icon: Monitor,
      duration: "14 weeks",
      level: "Advanced"
    },
    {
      id: 4,
      title: "Machine Learning",
      description: "Machine Learning is a subset of AI where systems learn from data to make predictions or decisions.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      icon: Code,
      duration: "12 weeks",
      level: "Intermediate"
    },
    {
      id: 5,
      title: "Deep Learning",
      description: "Deep Learning uses neural networks with many layers to model complex patterns in data.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
      icon: Network,
      duration: "16 weeks",
      level: "Advanced"
    },
    {
      id: 6,
      title: "Natural Language Processing",
      description: "NLP is the field of AI focused on enabling computers to understand, interpret, and generate human language.",
      image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72",
      icon: MessageSquare,
      duration: "10 weeks",
      level: "Intermediate"
    },
    {
      id: 7,
      title: "Data Analytics",
      description: "Data Analytics involves the systematic analysis of data to discover patterns, trends, and insights.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      icon: BarChart2,
      duration: "8 weeks",
      level: "Beginner"
    },
    {
      id: 8,
      title: "Business Analytics",
      description: "Business Analytics involves the use of statistical methods to analyze past business performance data.",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603",
      icon: TrendingUp,
      duration: "10 weeks",
      level: "Intermediate"
    },
    {
      id: 9,
      title: "Web Development",
      description: "Web Design and Development involves both front-end design and back-end development.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166",
      icon: Globe,
      duration: "12 weeks",
      level: "Beginner"
    },
    {
      id: 10,
      title: "Android Development",
      description: "Android Development involves coding, testing, and deploying apps for mobile devices.",
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb",
      icon: Smartphone,
      duration: "14 weeks",
      level: "Intermediate"
    },
    {
      id: 11,
      title: "Cybersecurity",
      description: "Learn to protect systems, networks, and programs from digital attacks while understanding security protocols.",
      image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87",
      icon: Shield,
      duration: "16 weeks",
      level: "Advanced"
    },
    {
      id: 12,
      title: "Internet of Things",
      description: "The IOT connects everyday devices to the internet, enabling them to send and receive data.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      icon: Wifi,
      duration: "12 weeks",
      level: "Intermediate"
    },
    {
      id: 13,
      title: "Robotics",
      description: "Robotics involves the design, construction, and use of robots to perform tasks autonomously.",
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a",
      icon: Cpu,
      duration: "14 weeks",
      level: "Advanced"
    },
    {
      id: 14,
      title: "UI/UX Development",
      description: "UI/UX development is a process that involves creating user interfaces and experiences for products.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c",
      icon: Layers,
      duration: "10 weeks",
      level: "Beginner"
    },
    {
      id: 15,
      title: "Soft Skills",
      description: "Soft skills are interpersonal abilities like communication, teamwork, and problem-solving.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
      icon: Users,
      duration: "8 weeks",
      level: "Beginner"
    },
    {
      id: 16,
      title: "Core Programming",
      description: "Core programming involves learning the fundamentals of programming languages and algorithms.",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713",
      icon: Terminal,
      duration: "12 weeks",
      level: "Intermediate"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Leona Alphonso",
      role: "Graduate Intern",
      image: leonaImage,
      content: "I was thoroughly impressed by RV TechLearn's ability to bridge the gap between theory and industry practice. Their training gave me the confidence to excel in my internship.",
      rating: 5
    },
    {
      id: 2,
      name: "Purva Nerkar",
      role: "Corporate Trainee",
      image: purvaImage,
      content: "The expertise of RV TechLearn truly stood out during our corporate training. Their trainers not only provided in-depth knowledge but also ensured it was relevant to our field.",
      rating: 5
    },
    {
      id: 3,
      name: "Sam Meshach",
      role: "Intern Developer",
      image: samImage,
      content: "RV TechLearn's exceptional training bridged theoretical knowledge with practical skills perfectly. The experience and insights I gained were invaluable for my internship, making me feel well-prepared and confident.",
      rating: 5
    },
    {
      id: 4,
      name: "Vimalsrinivasan",
      role: "Tech Intern",
      image: vimalImage,
      content: "I was amazed by how RV TechLearn integrated theory with real-world applications. Their training equipped me with essential skills, giving me the confidence to thrive in my internship and beyond.",
      rating: 5
    },
    {
      id: 5,
      name: "Yaswanth",
      role: "Student Intern",
      image: yaswanthImage,
      content: "RV TechLearn's program effectively combined academic knowledge with hands-on practice. This approach greatly enhanced my skills and boosted my confidence during my internship, making it a success.",
      rating: 5
    },
    {
      id: 6,
      name: "Ponsankar",
      role: "Tech Trainee",
      image: ponsankarImage,
      content: "The ability of RV TechLearn to merge theoretical concepts with practical application was outstanding. Their training provided me with the confidence and skills needed to excel during my internship.",
      rating: 5
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] mt-16">
        <img 
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&auto=format&fit=crop&w=2340&q=80"
          alt="Modern technology workspace" 
          className="w-full h-full object-cover object-center transform scale-95 brightness-90"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wider mb-4">OUR SERVICES</h1>
          <p className="text-xl text-white/90">Trainings we offer</p>
        </div>
      </div>

   
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-[460px]"
            >
              <div className="h-48 relative">
                {service.image ? (
                  <>
                    <img 
                      src={`${service.image}?w=400&h=192&fit=crop&q=75`}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center">
                    <service.icon className="w-12 h-12 text-indigo-600" />
                  </div>
                )}
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <StarIcon className="w-4 h-4" />
                      <span>{service.level}</span>
                    </div>
                  </div>
                </div>
                <Link 
                  to="/contact"
                  className="text-indigo-600 hover:text-indigo-700 font-medium text-sm flex items-center"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mt-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What Our Students Say
              </h2>
              <div className="w-24 h-1 bg-indigo-600 mx-auto mb-4"></div>
              <p className="text-xl text-gray-600">
                Hear from our successful graduates who transformed their careers
              </p>
            </div>

            <div className="px-4">
              <Slider {...sliderSettings}>
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="px-4 pb-4">
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative h-[300px] flex flex-col">
                      <div className="absolute -top-4 left-8 w-8 h-8 bg-indigo-600 transform rotate-45"></div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative">
                          <img
                            src={`${testimonial.image}?w=100&h=100&fit=crop&crop=face`}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover ring-4 ring-indigo-100"
                          />
                          <div className="absolute -bottom-1 -right-1 bg-indigo-600 rounded-full p-1">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                          <p className="text-indigo-600 font-medium">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6 italic line-clamp-4">{testimonial.content}</p>
                      <div className="flex gap-1 mt-auto">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <StarIcon key={i} className="w-5 h-5 fill-current text-indigo-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 text-center">
          <Link 
            to="/contact"
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white overflow-hidden transition-all duration-300 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_100%] hover:bg-[100%] rounded-lg hover:translate-y-[-2px] hover:shadow-lg hover:shadow-indigo-500/50 active:translate-y-[1px]"
          >
            Ready to Transform Your Career?
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default Services;