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
    <div className="min-h-screen bg-black text-white">
      <style>{subtleAnimation}</style>
      <Navbar />
      
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/contact-bg.jpg')] bg-cover bg-center bg-fixed"></div>
        <div className="relative z-10 text-center px-4 pt-24"> {/* Changed from pt-16 to pt-24 */}
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Let's <span className="text-gold-gradient">Connect</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4">
              Have questions about our courses or want to start your learning journey? We're here to help you succeed.
            </p>
            <div className="mt-6 px-5 py-3 bg-gold/10 border border-gold/20 rounded-lg">
              <p className="text-gold text-sm">
                For course details, pricing information, or to begin enrollment, our team is ready to assist you!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-12 px-4 relative -mt-16"> {/* Reduced py-16 to py-12 */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"> {/* Reduced gap-8 to gap-6 */}
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
            <div key={index} className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-6 border border-gray-800 hover:border-gold/30 transition-all duration-300"> {/* Reduced p-8 to p-6 */}
              <item.icon className="w-10 h-10 text-gold mb-4" /> {/* Reduced icon size */}
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3> {/* Reduced text size */}
              <a 
                href={item.link} 
                {...item.linkProps}
                className="text-gray-400 hover:text-gold transition-colors text-base"
              >
                {item.content}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-16 px-4"> {/* Reduced py-20 to py-16 */}
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8"> {/* Reduced gap-12 to gap-8 */}
            {/* Form Section */}
            <div className="lg:w-1/2">
              <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-800">
                <h2 className="text-3xl font-bold mb-8">Send us a <span className="text-gold-gradient">Message</span></h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-1">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 focus:border-gold/50 transition-colors"
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
                        className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 focus:border-gold/50 transition-colors"
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
                      className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 focus:border-gold/50 transition-colors"
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
                      className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 focus:border-gold/50 transition-colors"
                      value={formData.subject}
                      onChange={handleChange}
                      id="subject"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Message"
                      className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 focus:border-gold/50 transition-colors"
                      value={formData.message}
                      onChange={handleChange}
                      id="message"
                      rows={4}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-gold to-amber-500 text-black font-semibold py-4 rounded-lg hover:opacity-90 transition-opacity">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Map Section */}
            <div className="lg:w-1/2">
              <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-800 h-full"> {/* Reduced p-8 to p-6 */}
                <h2 className="text-2xl font-bold mb-6">Our <span className="text-gold-gradient">Location</span></h2>
                <div className="rounded-lg overflow-hidden h-[350px]"> {/* Reduced height from 400px to 350px */}
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
                <div className="mt-6 p-4 bg-black/30 rounded-lg">
                  <h3 className="font-semibold mb-2">Our Office</h3>
                  <a 
                    href="https://maps.app.goo.gl/1CQwRqm7etWm9esR8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gold transition-colors"
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

      <Footer />
    </div>
  );
};

export default Contact;
