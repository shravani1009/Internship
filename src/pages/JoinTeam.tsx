import { useEffect, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Check } from 'lucide-react';
import join from '../assets/join.jpeg';

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
    <div className="min-h-screen bg-gray-50">

      
      {/* Banner Section */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] mt-16">
        <img
          src={join}
          alt="Team collaboration and growth"
          className="w-full h-full object-cover object-center transform scale-95 brightness-90"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wider mb-4">JOIN OUR TEAM</h1>
          <p className="text-xl text-white/90">Unleash your potential with us, where innovation meets opportunity</p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="bg-white py-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <p className="text-gray-700 leading-relaxed">
              RV TechLearn stands as the leading hub for extensive training and consultancy services across various IT fields, including Artificial Intelligence, Machine Learning, Generative AI, Deep Learning, Data Science, Data Analytics, Full Stack Development, Internet of Things (IoT), Robotics, etc.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At RV TechLearn, we are committed to bridging the gap between theoretical knowledge and real-world applications. Our industry-aligned training programs are designed to equip professionals and students with the skills necessary to excel in the ever-evolving tech landscape.
            </p>
          </div>
        </div>
      </div>

      
          
        
        {/* Application Form Section */}
        <section className="py-12 bg-gray-50 rounded-lg">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto p-8 md:p-12 border border-gray-200 shadow-md bg-white rounded-lg">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Application <span className="text-blue-600">Form</span></h2>
              
              <form className="space-y-8" onSubmit={handleSubmit} id="form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name*</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name" 
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  id="button"
                  className="relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-md group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span className="absolute left-0 w-0 h-full transition-all duration-500 ease-out bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full"></span>
                  <span className="relative flex items-center gap-2">
                    <Check size={18} />
                    <span>Submit Application</span>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

  );
};

export default JoinTeam;