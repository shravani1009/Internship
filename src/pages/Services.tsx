
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Users, BookOpen, Award, PenTool, BarChart, Headphones, Check, ArrowRight } from 'lucide-react';

const Services = () => {
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
            <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-gold/20 text-gold border border-gold/40 inline-block mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Comprehensive <span className="text-gold-gradient">Learning Solutions</span></h1>
            <p className="text-gray-300 text-lg">
              Discover our range of services designed to provide you with a complete educational experience.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="rounded-2xl bg-black p-8 border border-gray-800 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group"
              >
                <div className="bg-black/40 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-gold transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check size={16} className="text-gold mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <a href="#" className="flex items-center text-gold group-hover:text-white transition-colors duration-300">
                  <span className="mr-2">Learn more</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-gold/20 text-gold border border-gold/40 inline-block mb-4">
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
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Additional <span className="text-gold-gradient">Services</span></h2>
            <p className="text-gray-300">
              Beyond our core offerings, we provide these specialized services to enhance your learning experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Corporate Training",
                description: "Customized training programs for teams and organizations to upskill employees in specific areas."
              },
              {
                title: "One-on-One Mentorship",
                description: "Personalized guidance from industry experts to accelerate your learning and career growth."
              },
              {
                title: "Career Coaching",
                description: "Professional coaching to help you navigate career transitions and achieve your professional goals."
              },
              {
                title: "Custom Curriculum Development",
                description: "Tailored course development for organizations with specific training needs and objectives."
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="rounded-2xl bg-black p-8 border border-gray-800 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group"
              >
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-gold transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <a href="#" className="px-6 py-2 rounded-full border border-gold text-gold font-medium transition-all duration-300 hover:bg-gold hover:text-black inline-block">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      
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
              <a href="#courses" className="btn-primary">
                Browse Our Courses
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
