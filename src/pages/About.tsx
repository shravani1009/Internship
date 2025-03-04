
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle, Users, Clock, Award, BookOpen, Target } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { icon: <Users size={24} />, value: '15,000+', label: 'Students' },
    { icon: <BookOpen size={24} />, value: '100+', label: 'Courses' },
    { icon: <Award size={24} />, value: '35+', label: 'Expert Instructors' },
    { icon: <Clock size={24} />, value: '4.8/5', label: 'Average Rating' },
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in our course content, teaching methodologies, and student support.',
      icon: <Target size={24} />
    },
    {
      title: 'Innovation',
      description: 'We constantly evolve our courses to reflect the latest industry trends, technologies, and best practices.',
      icon: <Award size={24} />
    },
    {
      title: 'Student-Centric',
      description: 'Our approach focuses on providing the best learning experience and outcomes for our students.',
      icon: <Users size={24} />
    },
    {
      title: 'Practicality',
      description: 'We emphasize practical, applicable knowledge that students can immediately use in their careers.',
      icon: <BookOpen size={24} />
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-gold blur-[100px]"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-gold blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-gold/20 text-gold border border-gold/40 inline-block mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Empowering <span className="text-gold-gradient">Professionals</span> Through Education
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              We're on a mission to transform careers and lives by providing world-class educational resources for the modern professional.
            </p>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center bg-gray-800 rounded-xl p-6 border border-gray-700 animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-4 text-gold">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden border border-gold/20 shadow-[0_0_30px_rgba(176,147,76,0.1)]">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" 
                  alt="Our team" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full border border-gold/30 opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-64 h-64 rounded-full border border-gold/20 opacity-30"></div>
            </div>
            
            <div className="space-y-6">
              <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-gold/20 text-gold border border-gold/40 inline-block">
                Our Story
              </span>
              <h2 className="text-3xl font-bold text-white">From Humble Beginnings to Educational Excellence</h2>
              <p className="text-gray-300">
                Founded in 2015, Core Courses began with a simple mission: to bridge the gap between traditional education and the rapidly evolving demands of the professional world.
              </p>
              <p className="text-gray-300">
                What started as a small team of passionate educators has grown into a global platform serving over 15,000 students worldwide. Our journey has been defined by our unwavering commitment to quality education and student success.
              </p>
              <div className="space-y-3 pt-2">
                {['Industry-leading instructors', 'Continuously updated curriculum', 'Hands-on learning approach', 'Career-focused courses'].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-gold/20 text-gold border border-gold/40 inline-block mb-4">
              Our Values
            </span>
            <h2 className="text-4xl font-bold text-white mb-6">
              Principles That <span className="text-gold-gradient">Guide Us</span>
            </h2>
            <p className="text-gray-300">
              Our core values shape every aspect of our organization, from course development to student support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 transition-all duration-300 hover:border-gold/30 hover:shadow-lg animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-gold/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6 text-gold">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-gold/20 text-gold border border-gold/40 inline-block mb-4">
              Meet The Team
            </span>
            <h2 className="text-4xl font-bold text-white mb-6">
              The Minds Behind <span className="text-gold-gradient">Our Success</span>
            </h2>
            <p className="text-gray-300">
              Our team of dedicated professionals works tirelessly to create exceptional learning experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'David Chen', role: 'Founder & CEO', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
              { name: 'Sophia Williams', role: 'Chief Learning Officer', image: 'https://randomuser.me/api/portraits/women/65.jpg' },
              { name: 'Marcus Johnson', role: 'Head of Curriculum', image: 'https://randomuser.me/api/portraits/men/78.jpg' },
              { name: 'Elena Rodriguez', role: 'Student Success Director', image: 'https://randomuser.me/api/portraits/women/42.jpg' },
              { name: 'James Wilson', role: 'Technology Director', image: 'https://randomuser.me/api/portraits/men/15.jpg' },
              { name: 'Aisha Patel', role: 'Marketing Director', image: 'https://randomuser.me/api/portraits/women/29.jpg' }
            ].map((member, index) => (
              <div 
                key={index} 
                className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 transition-all duration-300 hover:border-gold/30 hover:shadow-lg group animate-float"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-white group-hover:text-gold transition-colors duration-300">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              </div>
            ))}
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our <span className="text-gold-gradient">Journey</span></h2>
              <p className="text-gray-300 md:text-lg">
                Be part of our mission to transform education and empower professionals worldwide.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="/join-team" className="btn-primary">
                Join Our Team
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

export default About;
