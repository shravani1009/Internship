import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BookOpen, School, Users, Clock, Star, Lightbulb, Heart, Rocket } from 'lucide-react';


const AboutUs = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] mt-16">
        <img 
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&auto=format&fit=crop&w=2340&q=80"
          alt="Professional training and development session" 
          className="w-full h-full object-cover object-center transform scale-95 brightness-90"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wider mb-4">ABOUT US</h1>
          <p className="text-xl text-white/90">Learn, Innovate & Succeed</p>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-12 relative">
              <span className="inline-block px-6 py-3 bg-blue-50 rounded-lg shadow-sm">
                Learn, Innovate & Succeed
              </span>
            </p>
            
            <p className="mb-6 text-gray-700">
              RV TechLearn is more than just a training and consultancy firm—we are catalysts for growth, innovation, and success. Our mission is clear and powerful: Learn, Innovate, and Succeed.
            </p>
            
            <p className="mb-6 text-gray-700">
              We are dedicated to empowering individuals, institutions, and organizations through industry-aligned training programs designed to meet modern demands. From cutting-edge technologies to time-tested methodologies, we provide the knowledge and skills essential for excelling in today's dynamic business landscape.
            </p>
            
            <p className="mb-6 text-gray-700">
              Our consultancy services go beyond traditional approaches. With a team of seasoned experts, we work closely with businesses to identify challenges, craft strategic solutions, and implement effective processes that drive sustainable growth and long-term success.
            </p>
            
            
          </div>
          
         
        </div>
      </section>

      {/* Core Values Section */}
      <section className="pt-8 pb-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-12 text-center">
            <span className="inline-block px-6 py-3 bg-blue-50 rounded-lg shadow-sm">
              Our Core Values
            </span>
          </p>
          
          {/* Timeline */}
          <div className="relative max-w-6xl mx-auto mb-12">
            <div className="h-1 bg-gray-200 relative">
              <div className="flex justify-between absolute w-full top-1/2 -translate-y-1/2">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="w-10 h-10 bg-white rounded-full border border-gray-200 shadow-md flex items-center justify-center font-bold text-gray-600 relative">
                    {String(num).padStart(2, '0')}
                    <div className="absolute h-5 w-0.5 bg-gray-200 -bottom-5"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Star className="w-8 h-8" />,
                title: "Excellence",
                description: "Committed to delivering outstanding quality in every aspect of our educational services.",
                bgColor: "bg-blue-500"
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Innovation",
                description: "Continuously evolving and adapting to embrace new technologies and methodologies.",
                bgColor: "bg-blue-600"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Collaboration",
                description: "Building strong partnerships and fostering a supportive learning community.",
                bgColor: "bg-blue-700"
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Empowerment",
                description: "Enabling individuals to reach their full potential and achieve their goals.",
                bgColor: "bg-blue-800"
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300">
                <div className={`h-24 ${value.bgColor} flex items-center justify-center text-white`}>
                  {value.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3 text-gray-800 uppercase">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default AboutUs;