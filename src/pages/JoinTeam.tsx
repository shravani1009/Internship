
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Upload, Check } from 'lucide-react';

const JoinTeam = () => {
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
              Join Our Team
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Become Part of Our <span className="text-gold-gradient">Expert Team</span></h1>
            <p className="text-gray-300 text-lg">
              We're always looking for talented individuals to join our mission of transforming education.
            </p>
          </div>
        </div>
      </section>
      
      {/* Application Form Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto rounded-2xl bg-black p-8 md:p-12 border border-gray-800 shadow-xl">
            <h2 className="text-3xl font-bold mb-8 text-white">Application <span className="text-gold-gradient">Form</span></h2>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">First Name*</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
                    placeholder="Your first name"
                    required
                  />
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address*</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-300 mb-2">Position Applying For*</label>
                <select 
                  id="position" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
                  required
                >
                  <option value="">Select a position</option>
                  <option value="instructor">Course Instructor</option>
                  <option value="developer">Web Developer</option>
                  <option value="designer">UI/UX Designer</option>
                  <option value="marketing">Marketing Specialist</option>
                  <option value="support">Student Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-2">Years of Experience*</label>
                <select 
                  id="experience" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
                  required
                >
                  <option value="">Select experience level</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Why do you want to join our team?*</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
                  placeholder="Tell us a bit about yourself and why you'd be a good fit..."
                  required
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Upload Resume/CV*</label>
                <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center hover:border-gold/50 transition-colors duration-300">
                  <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-gray-300 mb-2">Drag and drop your resume/CV here, or click to browse</p>
                  <p className="text-gray-400 text-sm mb-4">PDF, DOC, or DOCX (Max 5MB)</p>
                  <input type="file" className="hidden" id="resume" accept=".pdf,.doc,.docx" required />
                  <button 
                    type="button" 
                    className="px-4 py-2 rounded-full bg-gold/20 text-gold border border-gold/40 font-medium transition-all duration-300 hover:bg-gold hover:text-black"
                    onClick={() => document.getElementById('resume')?.click()}
                  >
                    Browse Files
                  </button>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input 
                    id="terms" 
                    type="checkbox" 
                    className="w-4 h-4 accent-gold"
                    required
                  />
                </div>
                <label htmlFor="terms" className="ml-3 text-sm text-gray-300">
                  I agree to the <a href="#" className="text-gold hover:underline">Privacy Policy</a> and <a href="#" className="text-gold hover:underline">Terms of Service</a>
                </label>
              </div>
              
              <button type="submit" className="px-6 py-3 rounded-full bg-gold text-black font-medium transition-all duration-300 hover:bg-white hover:text-gold flex items-center justify-center gap-2">
                <Check size={18} />
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Work <span className="text-gold-gradient">With Us</span></h2>
            <p className="text-gray-300">
              Join a team passionate about education and innovation. Here's what you can expect when you become part of our family.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Competitive Salary",
                description: "We offer industry-leading compensation packages that reward your expertise and experience."
              },
              {
                title: "Remote Work Options",
                description: "Enjoy the flexibility of working from anywhere in the world with our remote-first approach."
              },
              {
                title: "Professional Development",
                description: "Continuous learning opportunities to help you grow your skills and advance your career."
              },
              {
                title: "Health Benefits",
                description: "Comprehensive health, dental, and vision coverage for you and your dependents."
              },
              {
                title: "Collaborative Culture",
                description: "Work alongside talented professionals in a supportive and inclusive environment."
              },
              {
                title: "Meaningful Impact",
                description: "Help transform the lives of students worldwide through quality education."
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="rounded-2xl bg-gray-900 p-8 border border-gray-800 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group"
              >
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-gold transition-colors duration-300">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default JoinTeam;
