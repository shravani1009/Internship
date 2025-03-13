import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Send, Mail, Phone, Clock, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const subtleAnimation = `
  @keyframes subtle-fade {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
  }
  @keyframes gentle-float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    emailjs.send(
      'service_zr9rj4j',
      'template_0o4wxt9',
      {
        from_name: `${formData.firstName} ${formData.lastName}`,
        to_name: "Team",
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'mYmvkB-0-rTXoedK8'
    )
    .then(() => {
      toast.success('Message sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    })
    .catch(() => {
      toast.error('Error sending message. Please try again.');
    });
  };

  return (
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 py-28">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold sm:text-5xl">
          <span className="text-gray-900">Let's</span>
          <span className="text-green-600 ml-3">Connect</span>
        </h1>
        <p className="mt-4 text-xl text-gray-600">  For course details, pricing information, or to begin enrollment, our team is ready to assist you!</p>
      </div>

      {/* Quick Contact Cards */}
      <section className="py-12 px-4 relative -mt-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              icon: MapPin, 
              title: 'Visit Us', 
              content: 'Vashi Sec 26, Navi Mumbai',
              link: 'https://maps.app.goo.gl/1CQwRqm7etWm9esR8',
              linkProps: { target: '_blank', rel: 'noopener noreferrer' }
            },
            { 
              icon: Phone, 
              title: 'Call Us', 
              content: '+91 9967482137',
              link: 'tel:+919967482137',
            },
            { 
              icon: Mail, 
              title: 'Email Us', 
              content: 'contact@rvtechlearn.com',
              link: 'mailto:contact@rvtechlearn.com',
            },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:border-green-300 transition-all duration-300">
              <item.icon className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
              <a 
                href={item.link} 
                {...item.linkProps}
                className="text-gray-600 hover:text-green-600 transition-colors text-base"
              >
                {item.content}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Form Section */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md">
                <h2 className="text-3xl font-bold mb-8">Send us a <span className="text-green-600">Message</span></h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-1">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-500 outline-none transition-colors"
                        value={formData.firstName}
                        onChange={handleChange}
                        id="firstName"
                        required
                      />
                    </div>
                    <div className="col-span-1">
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-500 outline-none transition-colors"
                        value={formData.lastName}
                        onChange={handleChange}
                        id="lastName"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-500 outline-none transition-colors"
                      value={formData.email}
                      onChange={handleChange}
                      id="email"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-500 outline-none transition-colors"
                      value={formData.subject}
                      onChange={handleChange}
                      id="subject"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Message"
                      className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-500 outline-none transition-colors"
                      value={formData.message}
                      onChange={handleChange}
                      id="message"
                      rows={4}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full bg-green-600 text-white font-semibold py-4 rounded-lg hover:bg-green-700 transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Map Section */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md h-full">
                <h2 className="text-2xl font-bold mb-6">Our <span className="text-green-600">Location</span></h2>
                <div className="rounded-lg overflow-hidden h-[350px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30169.083604862267!2d72.99856!3d19.076543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c136b519107b%3A0x8452b99754be0fc8!2sVashi%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709906358045!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold mb-2 text-gray-900">Our Office</h3>
                  <a 
                    href="https://maps.app.goo.gl/1CQwRqm7etWm9esR8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Vashi Sec 26<br />
                    Navi Mumbai, Maharashtra
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   
    </div>
  );
};

export default Contact;