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

  const features = [
    {
      title: 'Course Details',
      items: [
        'Comprehensive curriculum overview',
        'Learning objectives and outcomes',
        'Course duration and schedule',
        'Prerequisites and requirements'
      ]
    },
    {
      title: 'Learning Resources',
      items: [
        'Interactive learning materials',
        'Practice exercises and projects',
        'Video lectures and tutorials',
        'Supplementary resources'
      ]
    },
    {
      title: 'Student Support',
      items: [
        'One-on-one mentoring',
        'Technical assistance',
        'Career guidance',
        'Learning community access'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 py-28">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            <span className="text-gray-900">Course</span>
            <span className="text-green-600 ml-3">Brochure</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600">Learn more about our methods and strategies through our comprehensive brochure.</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
              <ul className="list-disc list-inside text-gray-700">
                {feature.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Form Section */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-white p-8 md:p-12 border border-gray-200 shadow-xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Get Your Free Brochure</h2>
          
          <form ref={formRef} className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name*</label>
                <input 
                  type="text" 
                  id="name"
                  name="name" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email*</label>
                <input 
                  type="email" 
                  id="email"
                  name="email" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject*</label>
              <input 
                type="text" 
                id="subject"
                name="subject" 
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
                placeholder="Subject"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message*</label>
              <textarea 
                id="message"
                name="message" 
                rows={4} 
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="px-6 py-3 w-full rounded-full bg-green-600 text-white font-medium transition-all duration-300 hover:bg-green-700 disabled:opacity-50"
              disabled={sending}
            >
              {sending ? 'Sending...' : 'Download Brochure'}
            </button>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default Brochure;
