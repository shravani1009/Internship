
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Clients = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const clients = [
    {
      name: "TechCorp",
      logo: "https://via.placeholder.com/150x80?text=TechCorp",
      description: "A leading technology company that has hired over 50 of our graduates."
    },
    {
      name: "DesignHub",
      logo: "https://via.placeholder.com/150x80?text=DesignHub",
      description: "Creative agency that regularly recruits from our design programs."
    },
    {
      name: "DataSphere",
      logo: "https://via.placeholder.com/150x80?text=DataSphere",
      description: "Data analytics firm partnering with us for specialized training programs."
    },
    {
      name: "WebMasters",
      logo: "https://via.placeholder.com/150x80?text=WebMasters",
      description: "Web development company that sponsors our hackathon events."
    },
    {
      name: "MarketPro",
      logo: "https://via.placeholder.com/150x80?text=MarketPro",
      description: "Digital marketing agency that offers internships to our students."
    },
    {
      name: "StartupX",
      logo: "https://via.placeholder.com/150x80?text=StartupX",
      description: "Startup accelerator that collaborates on entrepreneurship workshops."
    },
    {
      name: "Enterprise Solutions",
      logo: "https://via.placeholder.com/150x80?text=EnterpriseSolutions",
      description: "Enterprise software company that helps shape our curriculum."
    },
    {
      name: "Global Media",
      logo: "https://via.placeholder.com/150x80?text=GlobalMedia",
      description: "Media conglomerate that hires from our content creation courses."
    }
  ];

  const caseStudies = [
    {
      company: "TechCorp",
      title: "Building a Tech Talent Pipeline",
      description: "How our partnership with TechCorp created a steady stream of qualified developers.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      company: "DesignHub",
      title: "Bridging the UX/UI Talent Gap",
      description: "Helping DesignHub find qualified designers in a competitive market.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      company: "DataSphere",
      title: "Custom Data Science Training Program",
      description: "Developing a specialized curriculum for DataSphere's analytics team.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
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
              Our Partners
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Trusted by <span className="text-gold-gradient">Industry Leaders</span></h1>
            <p className="text-gray-300 text-lg">
              We collaborate with leading companies to develop curriculum and create career opportunities for our students.
            </p>
          </div>
        </div>
      </section>
      
      {/* Clients Logo Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Our <span className="text-gold-gradient">Client Partners</span></h2>
            <p className="text-gray-300">
              These companies hire our graduates, collaborate on curriculum development, and provide real-world projects for our students.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="rounded-xl bg-black p-6 border border-gray-800 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 flex flex-col items-center text-center group"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-16 object-contain mb-4 filter grayscale group-hover:filter-none transition-all duration-300"
                />
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gold transition-colors duration-300">{client.name}</h3>
                <p className="text-gray-400 text-sm">{client.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-gold/20 text-gold border border-gold/40 inline-block mb-4">
              Success Stories
            </span>
            <h2 className="text-4xl font-bold text-white mb-6">Client <span className="text-gold-gradient">Case Studies</span></h2>
            <p className="text-gray-300">
              Learn how our partnerships have helped companies find talent and grow their teams.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index} 
                className="rounded-2xl bg-gray-900 overflow-hidden border border-gray-800 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 text-sm font-medium text-gold">{study.company}</div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gold transition-colors duration-300">{study.title}</h3>
                  <p className="text-gray-300 mb-4">{study.description}</p>
                  <a href="#" className="text-gold group-hover:text-white transition-colors duration-300 inline-flex items-center">
                    Read case study
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">What Our <span className="text-gold-gradient">Clients Say</span></h2>
            <p className="text-gray-300">
              Hear directly from companies that have hired our graduates and partnered with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "The graduates from Core Courses come with both theoretical knowledge and practical skills that allow them to contribute immediately to our projects.",
                author: "Jennifer Lee",
                role: "CTO, TechCorp",
                image: "https://randomuser.me/api/portraits/women/12.jpg"
              },
              {
                quote: "We've hired five designers from Core Courses' UX/UI program, and each one has exceeded our expectations in terms of skill and professionalism.",
                author: "Marcus Johnson",
                role: "Creative Director, DesignHub",
                image: "https://randomuser.me/api/portraits/men/42.jpg"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="rounded-2xl bg-black p-8 border border-gray-800 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
              >
                <div className="mb-6">
                  <svg width="45" height="36" className="text-gold/40" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.028 0.842105C5.293 5.684 0 14.105 0 22.105C0 30.105 5.293 35.368 11.811 35.368C17.943 35.368 22.395 30.526 22.395 24.421C22.395 18.316 17.104 14.316 11.811 14.316C11.391 14.316 10.972 14.316 10.553 14.526C11.811 10.316 15.844 6.105 20.296 3.789L13.028 0.842105ZM35.633 0.842105C27.898 5.684 22.605 14.105 22.605 22.105C22.605 30.105 27.898 35.368 34.416 35.368C40.548 35.368 45 30.526 45 24.421C45 18.316 39.709 14.316 34.416 14.316C33.996 14.316 33.577 14.316 33.158 14.526C34.416 10.316 38.449 6.105 42.901 3.789L35.633 0.842105Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-gray-300 text-lg italic mb-8">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-gold"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonial.author}</h4>
                    <p className="text-gold">{testimonial.role}</p>
                  </div>
                </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Become a <span className="text-gold-gradient">Partner</span></h2>
              <p className="text-gray-300 md:text-lg">
                Join our network of industry partners to access top talent, collaborate on curriculum, and grow your team.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Contact Our Partnership Team
              </a>
              <a href="/brochure" className="px-6 py-3 rounded-full border border-gold text-gold font-medium transition-all duration-300 hover:bg-gold hover:text-black text-center">
                Download Partnership Brochure
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Clients;
