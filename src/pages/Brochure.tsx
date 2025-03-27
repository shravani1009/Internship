import { FormEvent, useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Brochure = () => {
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    emailjs.init('_yYiuD054bCttpfRF');
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);

    const serviceID = 'service_4w0734t';
    const templateID = 'template_oqigksl';

    try {
      await emailjs.sendForm(serviceID, templateID, formRef.current);
      
      // Download brochure logic
      const link = document.createElement('a');
      link.href = '/documents/UNOCODES_Broucher.pdf';
      link.download = 'RVTechLearn-Brochure.pdf';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      alert('Email sent successfully! Your brochure is downloading.');
      formRef.current.reset();
    } catch (error) {
      console.error('Failed:', error);
      alert('Unable to process your request. Please try again later.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] mt-16">
        <img 
          src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop"
          alt="Modern technology workspace" 
          className="w-full h-full object-cover object-center transform scale-95 brightness-90"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wider mb-4">COURSE BROCHURE</h1>
          <p className="text-xl text-white/90">
            Download our comprehensive course brochure to explore our programs in detail
          </p>
        </div>
      </div>

      {/* New Form Section styled like JoinTeam Form */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto p-8 md:p-12 border border-gray-200 shadow-md bg-white rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Get <span className="text-blue-600">Brochure</span></h2>
            
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name*</label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address*</label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject*</label>
                <input 
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                <textarea 
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={sending}
                className="relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-md group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl mt-4"
              >
                <span className="absolute left-0 w-0 h-full transition-all duration-500 ease-out bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full"></span>
                <span className="relative flex items-center gap-2">
                  {sending ? 'Processing...' : 'Download Brochure'}
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Brochure;
