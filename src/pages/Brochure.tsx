
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Download, User, MapPin } from 'lucide-react';

const Brochure = () => {
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
              Course Catalog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Download Our <span className="text-gold-gradient">Brochure</span></h1>
            <p className="text-gray-300 text-lg">
              Get detailed information about our courses, instructors, and learning methodology.
            </p>
          </div>
        </div>
      </section>
      
      {/* Brochure Form Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl shadow-gold/10 border border-gold/20">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Course catalog preview" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="rounded-2xl bg-black p-8 border border-gray-800 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5">
              <h2 className="text-3xl font-bold mb-6 text-white">Request Our <span className="text-gold-gradient">Brochure</span></h2>
              <p className="text-gray-300 mb-6">
                Fill out the form below to receive our comprehensive course catalog directly in your inbox. Our brochure contains detailed information about:
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span className="text-gray-300">Complete course listings with syllabus details</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span className="text-gray-300">Instructor profiles and expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span className="text-gray-300">Pricing and special discount opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span className="text-gray-300">Student success stories and testimonials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span className="text-gray-300">Career support and placement services</span>
                </li>
              </ul>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">First Name*</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <User size={18} className="text-gray-400" />
                      </div>
                      <input 
                        type="text" 
                        id="firstName" 
                        className="w-full pl-10 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
                        placeholder="Your first name"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">Last Name*</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address*</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Mail size={18} className="text-gray-400" />
                    </div>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full pl-10 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <MapPin size={18} className="text-gray-400" />
                    </div>
                    <input 
                      type="text" 
                      id="location" 
                      className="w-full pl-10 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
                      placeholder="City, Country"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="interests" className="block text-sm font-medium text-gray-300 mb-2">Interested In</label>
                  <select 
                    id="interests" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
                  >
                    <option value="">Select your area of interest</option>
                    <option value="webdev">Web Development</option>
                    <option value="datascience">Data Science</option>
                    <option value="design">UX/UI Design</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="business">Business & Entrepreneurship</option>
                  </select>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input 
                      id="newsletter" 
                      type="checkbox" 
                      className="w-4 h-4 accent-gold"
                      defaultChecked
                    />
                  </div>
                  <label htmlFor="newsletter" className="ml-3 text-sm text-gray-300">
                    Subscribe to our newsletter for updates on new courses and special offers
                  </label>
                </div>
                
                <button type="submit" className="px-6 py-3 rounded-full bg-gold text-black font-medium transition-all duration-300 hover:bg-white hover:text-gold flex items-center justify-center gap-2 w-full">
                  <Download size={18} />
                  Get the Brochure
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Brochure;
