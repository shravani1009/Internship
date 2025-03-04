
import { useEffect } from 'react';
import Hero from '../components/Hero';
import CourseOverview from '../components/CourseOverview';
import ServiceCard from '../components/ServiceCard';
import WhyChooseUs from '../components/WhyChooseUs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BookOpen, Users, Award, PenTool, BarChart, Headphones, Star, ChevronRight } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <BookOpen size={24} />,
      title: 'Expert-Led Courses',
      description: 'Learn from industry professionals with years of real-world experience in their respective fields.'
    },
    {
      icon: <PenTool size={24} />,
      title: 'Practical Projects',
      description: 'Apply your knowledge through hands-on projects that simulate real-world scenarios and challenges.'
    },
    {
      icon: <Users size={24} />,
      title: 'Community Support',
      description: 'Join a thriving community of learners and experts to collaborate and grow together.'
    },
    {
      icon: <Award size={24} />,
      title: 'Certification',
      description: 'Earn industry-recognized certifications to showcase your expertise and boost your credentials.'
    },
    {
      icon: <BarChart size={24} />,
      title: 'Career Advancement',
      description: 'Gain the skills and knowledge needed to take your career to new heights and unlock opportunities.'
    },
    {
      icon: <Headphones size={24} />,
      title: '24/7 Support',
      description: 'Get help whenever you need it with our round-the-clock support system for all students.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Designer',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      quote: 'The courses offered here completely transformed my career. The instructors are top-notch and the content is extremely relevant to today\'s industry demands.',
      rating: 5
    },
    {
      name: 'Michael Chang',
      role: 'Frontend Developer',
      image: 'https://randomuser.me/api/portraits/men/78.jpg',
      quote: 'I\'ve taken multiple web development courses, and they\'ve all been exceptional. The practical approach helped me land my dream job within 3 months of completing the course.',
      rating: 5
    },
    {
      name: 'Emma Wilson',
      role: 'Marketing Director',
      image: 'https://randomuser.me/api/portraits/women/58.jpg',
      quote: 'The digital marketing course gave me insights that I couldn\'t find anywhere else. Highly recommend for anyone looking to excel in the marketing field.',
      rating: 4
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-gold/20 text-gold border border-gold/40 inline-block mb-4">
              What We Offer
            </span>
            <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Learning <span className="text-gold-gradient">Experience</span></h2>
            <p className="text-gray-300">
              Our courses are designed to provide you with a complete learning journey, from fundamental concepts to advanced applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <WhyChooseUs />
      
      {/* Course Overview Section */}
      <CourseOverview />
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-gold/20 text-gold border border-gold/40 inline-block mb-4">
              Success Stories
            </span>
            <h2 className="text-4xl font-bold text-white mb-6">What Our <span className="text-gold-gradient">Students Say</span></h2>
            <p className="text-gray-300">
              Don't just take our word for it. Hear from our students who have transformed their careers through our courses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="rounded-2xl bg-gray-900 p-8 border border-gray-800 transition-all duration-300 hover:border-gold/30 hover:transform hover:translate-y-[-5px] hover:shadow-lg hover:shadow-gold/5"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-gold"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={`inline-block mr-1 ${i < testimonial.rating ? 'text-gold fill-gold' : 'text-gray-600'}`} 
                    />
                  ))}
                </div>
                
                <p className="text-gray-300">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a href="#" className="text-gold hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
              View All Testimonials
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-gold blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-gold blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-gray-900/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-800 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to <span className="text-gold-gradient">Transform</span> Your Career?</h2>
              <p className="text-gray-300 md:text-lg">
                Join thousands of professionals who have already taken the leap to enhance their skills and advance their careers.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="#courses" className="btn-primary">
                Browse Courses
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

export default Index;
