import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LOVE from '../assets/LOVE.png';
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
            <span className="px-5 py-3 rounded-full text-base font-medium bg-gold/20 text-gold border border-gold/30 inline-block mb-4">
              Who we are 
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
              <h2 className="text-5xl font-bold mb-6 text-white">Our <span className="text-gold-gradient">Story</span></h2>
              <p className="text-gray-300 mb-6">
              RV TechLearn is more than just a training and consultancy firm—we are catalysts for growth, innovation, and success. Our mission is simple yet powerful: Learn, Innovate, and Succeed.
              </p>
              <p className="text-gray-300 mb-6">
              We are dedicated to empowering individuals, institutions, and organizations through industry-aligned training programs designed to meet modern demands. From cutting-edge technologies to time-tested methodologies, we provide the knowledge and skills essential for excelling in today's dynamic business landscape.
              </p>
              <p className="text-gray-300">
              Our consultancy services go beyond traditional approaches. With a team of seasoned experts, we work closely with businesses to identify challenges, craft strategic solutions, and implement effective processes that drive sustainable growth and long-term success.

              Whether you're an individual looking to advance your career or a business striving to stay ahead of the competition, RV TechLearn is your trusted partner in success. Together, let’s Learn, Innovate, and Succeed.
              </p>
              
              <div className="mt-8">
                <h3 className="text-3xl font-normal italic">
                  <span className="text-white">Together, let's</span>{" "}
                  <span className="text-gold-gradient">Learn, Innovate <span className='text-white'> & </span> Succeed.</span>
                </h3>
              </div>

  
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl shadow-gold/10 border border-gold/20 h-full flex items-center">
              <img 
                src={LOVE} 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
                style={{ maxHeight: '500px' }}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/*values section*/}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="px-5 py-2 rounded-full text-base font-medium bg-gold/20 text-gold border border-gold/30 inline-block mb-3">
              Our Values
            </span>
            </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 md:gap-4">
              {[
                {
                  title: "Excellence",
                  description: "We are committed to delivering nothing short of excellence in everything we do.",
                  icon: "⭐"
                },
                {
                  title: "Innovation",
                  description: "Innovation is at the heart of RVTechlearn. We embrace change and creativity.",
                  icon: "💡"
                },
                {
                  title: "Collaboration",
                  description: "We believe in the power of collaboration to achieve remarkable results.",
                  icon: "🤝"
                },
                {
                  title: "Empowerment",
                  description: "Through learning and development, we empower individuals and organizations.",
                  icon: "🚀"
                }
              ].map((value, index) => (
                <div 
                  key={index}
                  className="group relative"
                  style={{
                    transform: `translateY(${index % 2 === 0 ? '2rem' : '0'})`
                  }}
                >
                  <div className="relative z-10 bg-gray-900/90 backdrop-blur-md rounded-2xl p-6 h-full border border-gold/20 transition-all duration-500 
                    group-hover:border-gold/50 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-gold/10">
                    <div className="absolute -inset-1 bg-gradient-to-br from-gold/20 to-transparent rounded-2xl opacity-0 
                      group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                    
                    <div className="flex flex-col h-full">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold/20 to-black/50 
                        border border-gold/30 flex items-center justify-center text-3xl mb-4 
                        transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                        {value.icon}
                      </div>
                      
                      <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gold bg-clip-text text-transparent mb-3">
                        {value.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                        {value.description}
                      </p>
                      
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
