
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Send } from 'lucide-react';

const Contact = () => {
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
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact <span className="text-gold-gradient">Our Team</span></h1>
            <p className="text-gray-300 text-lg">
              Have questions or need assistance? We're here to help you along your learning journey.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="rounded-2xl bg-black p-8 border border-gray-800 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5">
              <h2 className="text-3xl font-bold mb-6 text-white">Get In <span className="text-gold-gradient">Touch</span></h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button type="submit" className="px-6 py-3 rounded-full bg-gold text-black font-medium transition-all duration-300 hover:bg-white hover:text-gold flex items-center justify-center gap-2">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="rounded-2xl bg-black p-8 border border-gray-800 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5">
              <h2 className="text-3xl font-bold mb-6 text-white">Contact <span className="text-gold-gradient">Information</span></h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gold mb-3">Our Location</h3>
                  <p className="text-gray-300">
                    123 Learning Street<br />
                    Education District<br />
                    New York, NY 10001
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gold mb-3">Email Us</h3>
                  <p className="text-gray-300">
                    General Inquiries: info@corecourses.com<br />
                    Support: support@corecourses.com<br />
                    Careers: careers@corecourses.com
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gold mb-3">Call Us</h3>
                  <p className="text-gray-300">
                    Main Office: +1 (555) 123-4567<br />
                    Student Support: +1 (555) 987-6543
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gold mb-3">Business Hours</h3>
                  <p className="text-gray-300">
                    Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                    Saturday: 10:00 AM - 2:00 PM EST<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
