import { useEffect } from 'react';
import Hero from '../components/Hero';
import CourseOverview from '../components/CourseOverview';
import ServiceCard from '../components/ServiceCard';
import WhyChooseUs from '../components/WhyChooseUs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BookOpen, Users, Award, PenTool, BarChart, Headphones, ChevronRight, Briefcase, UserCheck, Sliders, Clock } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Briefcase size={24} />,
      title: 'Industry-Relevant Training',
      description: 'Stay ahead with training programs designed to match current industry trends and requirements.'
    },
    {
      icon: <UserCheck size={24} />,
      title: 'Experienced Faculty',
      description: 'Learn from seasoned professionals who bring years of expertise and hands-on knowledge.'
    },
    {
      icon: <Sliders size={24} />,
      title: 'Customized Programs',
      description: 'Tailor your learning experience with programs that align with your career goals and interests.'
    },
    {
      icon: <Clock size={24} />,
      title: 'Flexible Delivery Options',
      description: 'Choose from self-paced, live, or hybrid learning models that suit your schedule.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-black relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#b0934c]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#b0934c]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          

          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="px-5 py-3 rounded-full text-base font-medium bg-gold/20 text-gold border border-gold/30 inline-block mb-4">
              What we offer ?
            </span>
            <h2 className="text-4xl font-bold text-white mb-6">
          Comprehensive Learning <span className="text-gold-gradient">Experience </span>
          </h2>
          <p className="text-gray-300">
          Leading hub for extensive training and consultancy services
          </p>
        </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl shadow-[#b0934c]/20 transform transition-transform hover:scale-[1.02] duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
                  alt="Our services" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 border-8 border-[#b0934c]/20 rounded-lg -z-10"></div>
            </div>
            
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="p-3 bg-[#b0934c]/10 rounded-lg text-[#b0934c] group-hover:bg-[#b0934c]/20 transition-colors">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 group-hover:text-[#b0934c] transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <WhyChooseUs />
      <CourseOverview />
      
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
