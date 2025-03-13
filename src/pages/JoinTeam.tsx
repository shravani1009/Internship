import { useEffect, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Check } from 'lucide-react';

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

  const benefits = [
    'Competitive salary and benefits package',
    'Remote work opportunities',
    'Professional development support',
    'Health and wellness programs',
    'Flexible working hours',
    'Career growth opportunities'
  ];

  const positions = [
    {
      title: 'Course Instructor',
      department: 'Education',
      type: 'Full-time',
      location: 'Remote'
    },
    {
      title: 'Content Developer',
      department: 'Content',
      type: 'Full-time',
      location: 'Remote'
    },
    {
      title: 'Student Success Coach',
      department: 'Support',
      type: 'Full-time',
      location: 'Hybrid'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 py-28 bg-white">
       
     
      
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold sm:text-5xl">
          <span className="text-gray-900">Join</span>
          <span className="text-green-600 ml-3">Team</span>
        </h1>
        <p className="mt-4 text-xl text-gray-600">Be part of our mission to transform education</p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Left Column */}
        <div>
          <img
            src="/api/placeholder/800/500"
            alt="Team collaboration"
            className="rounded-lg shadow-xl mb-8"
          />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <span className="h-2 w-2 bg-green-600 rounded-full mr-3"></span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Right Column */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Open Positions</h2>
          <div className="space-y-6 mb-12">
            {positions.map((position, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{position.title}</h3>
                <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">Department:</span> {position.department}
                  </div>
                  <div>
                    <span className="font-medium">Type:</span> {position.type}
                  </div>
                  <div>
                    <span className="font-medium">Location:</span> {position.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Application Process</h2>
            <ol className="space-y-4">
              <li className="flex items-center text-gray-600">
                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-green-600 text-white text-sm mr-3">1</span>
                Submit your application
              </li>
              <li className="flex items-center text-gray-600">
                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-green-600 text-white text-sm mr-3">2</span>
                Initial screening
              </li>
              <li className="flex items-center text-gray-600">
                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-green-600 text-white text-sm mr-3">3</span>
                Technical interview
              </li>
              <li className="flex items-center text-gray-600">
                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-green-600 text-white text-sm mr-3">4</span>
                Final interview
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Application Form Section */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto p-8 md:p-12 border border-gray-200 shadow-md bg-white rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Application <span className="text-green-600">Form</span></h2>
            
            <form className="space-y-8" onSubmit={handleSubmit} id="form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name*</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
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
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
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
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
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
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                id="button"
                className="px-6 py-3 w-full rounded-full bg-green-600 text-white font-medium transition-all duration-300 hover:bg-green-700 flex items-center justify-center gap-2"
              >
                <Check size={18} />
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
      
      
    </div>
  );
};

export default JoinTeam;