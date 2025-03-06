import { FormEvent, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Check } from 'lucide-react';

const Brochure = () => {
  useEffect(() => {
    // Initialize EmailJS with your public key
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

    // Update these with your actual service and template IDs
    const serviceID = 'service_4w0734t';
    const templateID = 'template_oqigksl';

    try {
      await emailjs.sendForm(serviceID, templateID, form);
      alert('Sent!');
      form.reset();
      
      // Updated brochure path to use public URL
      const link = document.createElement('a');
      link.href = '/documents/UNOCODES_Broucher.pdf'; // Updated path
      link.download = 'RVTechLearn-Brochure.pdf';
      link.target = '_blank'; // Opens in new tab if download fails
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Failed:', error);
      alert(JSON.stringify(error));
    } finally {
      if (submitButton) {
        submitButton.textContent = 'Download Brochure';
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Download Our <span className="text-gold-gradient">Brochure</span></h1>
            <p className="text-gray-300 text-lg">
              Learn more about our methods and strategies through our comprehensive brochure.
            </p>
          </div>
        </div>
      </section>
      
      {/* Brochure Form Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto rounded-2xl bg-black p-8 md:p-12 border border-gray-800 shadow-xl">
            <h2 className="text-3xl font-bold mb-8 text-white">Get <span className="text-gold-gradient">Brochure</span></h2>
            
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
                Download Brochure
              </button>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Brochure;
