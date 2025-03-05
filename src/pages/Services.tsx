import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Users, BookOpen, Award, PenTool, BarChart, Headphones, Check, ArrowRight } from 'lucide-react';

const Services = () => {
  const [showAllCourses, setShowAllCourses] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <BookOpen size={24} />,
      title: 'Expert-Led Courses',
      description: 'Learn from industry professionals with years of real-world experience in their respective fields. Our instructors bring practical knowledge to help you succeed.',
      features: [
        'Live online sessions with Q&A',
        'Personalized feedback on assignments',
        'Office hours for additional help',
        'Access to instructor network'
      ]
    },
    {
      icon: <PenTool size={24} />,
      title: 'Practical Projects',
      description: 'Apply your knowledge through hands-on projects that simulate real-world scenarios and challenges. Build a portfolio that showcases your skills to potential employers.',
      features: [
        'Industry-relevant projects',
        'Real-world case studies',
        'Portfolio-ready deliverables',
        'Code reviews and optimization'
      ]
    },
    {
      icon: <Users size={24} />,
      title: 'Community Support',
      description: 'Join a thriving community of learners and experts to collaborate and grow together. Network with peers and build connections that last beyond your courses.',
      features: [
        'Active Discord community',
        'Peer study groups',
        'Networking events',
        'Alumni connections'
      ]
    },
    {
      icon: <Award size={24} />,
      title: 'Certification',
      description: 'Earn industry-recognized certifications to showcase your expertise and boost your credentials. Stand out in the job market with our verified certificates.',
      features: [
        'Blockchain-verified credentials',
        'Industry-recognized certificates',
        'LinkedIn profile integration',
        'Resume-building assistance'
      ]
    },
    {
      icon: <BarChart size={24} />,
      title: 'Career Advancement',
      description: 'Gain the skills and knowledge needed to take your career to new heights and unlock opportunities. Our career services team helps you achieve your goals.',
      features: [
        'Job placement assistance',
        'Interview preparation',
        'Resume and LinkedIn optimization',
        'Career counseling sessions'
      ]
    },
    {
      icon: <Headphones size={24} />,
      title: '24/7 Support',
      description: 'Get help whenever you need it with our round-the-clock support system for all students. Never feel stuck with our comprehensive assistance.',
      features: [
        'Live chat support',
        'Ticket-based help system',
        'Comprehensive knowledge base',
        'Video tutorials library'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-gold blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-gold blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="px-5 py-3 rounded-full text-base font-medium bg-gold/20 text-gold border border-gold/40 inline-block mb-4">
            Our Services
          </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Comprehensive <span className="text-gold-gradient">Learning Solutions</span></h1>
            <p className="text-gray-300 text-lg">
              Discover our range of services designed to provide you with a complete educational experience.
            </p>
          </div>
        </div>
      </section>

      {/* Course Overview Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Generative AI",
                description: "Generative AI leverages transforming industries by enabling automation of creative processes and enhancing human capabilities.",
                duration: "12 weeks",
                level: "Advanced"
              },
              {
                title: "Data Science",
                description: "Data Science involves the extraction of insights and knowledge from large volumes of data using statistical methods, machine learning, and data visualization.",
                duration: "24 weeks",
                level: "Intermediate to Advanced"
              },
              {
                title: "Artificial Intelligence",
                description: "Artificial Intelligence encompasses the development of systems that can perform tasks requiring human intelligence, such as problem-solving, learning, and decision-making.",
                duration: "20 weeks",
                level: "Advanced"
              },
              {
                title: "Machine Learning",
                description: "Machine Learning is a subset of AI where systems learn from data to make predictions or decisions without explicit programming.",
                duration: "16 weeks",
                level: "Intermediate to Advanced"
              },
              {
                title: "Deep Learning",
                description: "Deep Learning, a specialized branch of Machine Learning, uses neural networks with many layers to model complex patterns in data.",
                duration: "14 weeks",
                level: "Advanced"
              },
              {
                title: "Natural Language Processing",
                description: "NLP is the field of AI focused on enabling computers to understand, interpret, and generate human language.",
                duration: "12 weeks",
                level: "Intermediate"
              },
              {
                title: "Data Analytics",
                description: "Data Analytics involves the systematic analysis of data to discover patterns, trends, and insights.",
                duration: "10 weeks",
                level: "Beginner to Intermediate"
              },
              {
                title: "Business Analytics",
                description: "Business Analytics involves the use of statistical methods and technologies to analyze and interpret past business performance data.",
                duration: "8 weeks",
                level: "Beginner"
              },
              {
                title: "Web Development",
                description: "Web Design and Development involves both front-end design, ensuring an attractive user interface, and back-end development.",
                duration: "24 weeks",
                level: "Beginner to Advanced"
              },
              {
                title: "Android Development",
                description: "Android Development involves coding, testing, and deploying apps that can be used on a wide range of mobile devices.",
                duration: "16 weeks",
                level: "Intermediate"
              },
              {
                title: "Cybersecurity",
                description: "Learn to protect systems, networks, and programs from digital attacks while understanding security protocols.",
                duration: "20 weeks",
                level: "Intermediate to Advanced"
              },
              {
                title: "Internet of Things",
                description: "The IOT connects everyday devices to the internet, enabling them to send and receive data.",
                duration: "12 weeks",
                level: "Intermediate"
              },
              {
                title: "Robotics",
                description: "Robotics involves the design, construction, and perform tasks autonomously or semi-autonomously.",
                duration: "16 weeks",
                level: "Advanced"
              },
              {
                title: "UI/UX Development",
                description: "UI/UX development is a process that involves creating user interfaces and experiences for products.",
                duration: "14 weeks",
                level: "Beginner to Intermediate"
              },
              {
                title: "Soft Skills",
                description: "Soft skills are interpersonal abilities like communication, teamwork, and problem-solving.",
                duration: "6 weeks",
                level: "All Levels"
              }
            ].slice(0, showAllCourses ? undefined : 6).map((course, index) => (
              <div
                key={index}
                className="rounded-2xl bg-black p-8 border border-gray-800 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group"
              >
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-gold transition-colors duration-300">
                  {course.title}
                </h3>
                <p className="text-gray-300 mb-6">{course.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-gold">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Level:</span>
                    <span className="text-gold">{course.level}</span>
                  </div>
                </div>

                <a 
                  href="/contact" 
                  className="block w-full px-4 py-2 rounded-full bg-gold text-black font-medium transition-all duration-300 hover:bg-gold/90 text-center"
                >
                  Explore Now
                </a>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAllCourses(!showAllCourses)}
              className="px-8 py-3 rounded-full bg-gold text-black font-medium transition-all duration-300 hover:bg-gold/90 flex items-center gap-2"
            >
              {showAllCourses ? 'Show Less' : 'View More Courses'}
              {showAllCourses ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </section>


      {/* Process Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="px-5 py-3 rounded-full text-base font-medium bg-gold/20 text-gold border border-gold/30 inline-block mb-4">
            Our Process
            </span>
            <h2 className="text-4xl font-bold text-white mb-6">How We <span className="text-gold-gradient">Deliver Excellence</span></h2>
            <p className="text-gray-300">
              Our methodology ensures you receive the highest quality education and support throughout your learning journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "01", title: "Assessment", description: "We begin by understanding your goals and current skill level through a comprehensive assessment." },
              { number: "02", title: "Customization", description: "Based on your assessment, we create a personalized learning path tailored to your specific needs." },
              { number: "03", title: "Implementation", description: "You'll work through carefully structured courses with ongoing support from instructors and peers." },
              { number: "04", title: "Evaluation", description: "Regular feedback and assessments help track your progress and make adjustments to your learning path." }
            ].map((step, index) => (
              <div 
                key={index} 
                className="rounded-2xl bg-gray-900 p-8 border border-gray-800 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 relative group"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-gold transition-colors duration-300 mt-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Services Section */}
     
      {/* CTA Section */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-gold blur-[100px]"></div>
          <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-gold blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-gray-900/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-800 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to <span className="text-gold-gradient">Get Started?</span></h2>
              <p className="text-gray-300 md:text-lg">
                Choose the service that best fits your needs and begin your journey to professional excellence.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="/brochure" className="btn-primary">
                Download Brochure
              </a>
              <a href="/contact" className="px-6 py-3 rounded-full border border-gold text-gold font-medium transition-all duration-300 hover:bg-gold hover:text-black text-center">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
