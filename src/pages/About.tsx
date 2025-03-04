
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              Who We Are
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About <span className="text-gold-gradient">Our Mission</span></h1>
            <p className="text-gray-300 text-lg">
              We're committed to transforming education and making quality learning accessible to everyone.
            </p>
          </div>
        </div>
      </section>
      
      {/* About Content */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Our <span className="text-gold-gradient">Story</span></h2>
              <p className="text-gray-300 mb-6">
                Founded in 2018, Core Courses began with a simple mission: to bridge the gap between traditional education and the rapidly evolving demands of the professional world. We recognized that many graduates were entering the workforce without the practical skills needed to succeed.
              </p>
              <p className="text-gray-300 mb-6">
                What started as a small collection of web development courses has grown into a comprehensive platform offering education across multiple disciplines, from design to digital marketing to data science.
              </p>
              <p className="text-gray-300">
                Today, we're proud to have helped over 100,000 students worldwide transform their careers and achieve their professional goals.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl shadow-gold/10 border border-gold/20">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Team collaboration" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-gold/20 text-gold border border-gold/40 inline-block mb-4">
              Our Team
            </span>
            <h2 className="text-4xl font-bold text-white mb-6">Meet The <span className="text-gold-gradient">Experts</span></h2>
            <p className="text-gray-300">
              Our instructors bring decades of real-world experience from top companies around the globe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Emily Chen",
                role: "Lead Data Science Instructor",
                image: "https://randomuser.me/api/portraits/women/23.jpg",
                description: "Former Lead Data Scientist at Google with a PhD in Computer Science from MIT."
              },
              {
                name: "James Wilson",
                role: "Web Development Director",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                description: "15+ years of experience building enterprise applications for Fortune 500 companies."
              },
              {
                name: "Sophia Rodriguez",
                role: "UX/UI Design Lead",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                description: "Award-winning designer with experience at Apple and Airbnb."
              }
            ].map((member, index) => (
              <div key={index} className="rounded-2xl bg-gray-900 p-8 border border-gray-800 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-6 border-2 border-gold"
                />
                <h3 className="text-xl font-semibold text-white text-center mb-2">{member.name}</h3>
                <p className="text-gold text-center mb-4">{member.role}</p>
                <p className="text-gray-300 text-center">{member.description}</p>
                <div className="mt-6 text-center">
                  <a href="#" className="text-sm text-gold group-hover:text-white transition-colors duration-300">View Full Profile</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
