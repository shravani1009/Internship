import { useEffect, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Upload, Check } from 'lucide-react';

const JoinTeam = () => {
  useEffect(() => {
    emailjs.init('_yYiuD054bCttpfRF');
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    
    if (submitButton) {
      submitButton.textContent = 'Sending...';
    }

    const serviceID = 'service_4w0734t';
    const templateID = 'template_oqigksl';

    try {
      await emailjs.sendForm(serviceID, templateID, form);
      alert('Sent!');
      form.reset();
    } catch (error) {
      console.error('Failed:', error);
      alert(JSON.stringify(error));
    } finally {
      if (submitButton) {
        submitButton.textContent = 'Submit Application';
      }
    }
  };

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
              Join our team
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-relaxed">
              Become Part of Our 
              <span className="text-gold-gradient block mt-4">Expert Team</span>
            </h1>
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
            
            <form className="space-y-8" onSubmit={handleSubmit} id="form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name*</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email*</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject*</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
                  placeholder="Subject"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message*</label>
                <textarea 
                  id="message"
                  name="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                id="button"
                className="px-6 py-3 w-full rounded-full bg-gold text-black font-medium transition-all duration-300 hover:bg-white hover:text-gold flex items-center justify-center gap-2"
              >
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
