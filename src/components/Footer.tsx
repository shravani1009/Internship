import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import companyLogo from '../assets/logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Clients', path: '/clients' },
    { name: 'Join Our Team', path: '/join-team' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Brochure', path: '/brochure' }
  ];

  const popularCourses = [
    { name: 'Generative AI' },
    { name: 'Data Science' },
    { name: 'Artificial Intelligence' },
    { name: 'Machine Learning' },
    { name: 'Deep Learning' },
    { name: 'Web Development' }
  ];

  return (
    <footer className="bg-black pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <div className="bg-white p-2.5 rounded-lg w-fit">
                <img 
                  src={companyLogo} 
                  alt="RV TechLearn Logo" 
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-300 text-base font-medium leading-relaxed">
              Established in India by Mr. Rithik Raj Vaishya, RV TechLearn leverages years of expertise 
              and experience to provide top-notch educational and consulting solutions.
            </p>
            <div className="flex space-x-7 pt-2">
              <a 
                href="https://www.facebook.com/people/RV-Techlearn/pfbid0AcbxNufJDYRDjrjoesiqGyTYgQyAiE3Q5Nc5bjsk1mMg7Rp67ye8yStRo4nbNXMol/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-gold transition-colors duration-300"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://x.com/RVTechLearn" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-gold transition-colors duration-300"
              >
                <Twitter size={24} />
              </a>
              <a 
                href="https://www.instagram.com/rvtechlearn/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-gold transition-colors duration-300"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/company/rvtechlearn/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-gold transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-6">Popular Courses</h3>
            <ul className="space-y-3">
              {popularCourses.map((course, index) => (
                <li key={index}>
                  <span className="text-gray-400">
                    {course.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-gold flex-shrink-0 mt-1" />
                <a 
                  href="https://maps.app.goo.gl/1CQwRqm7etWm9esR8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gold transition-colors duration-300"
                >
                  Vashi Sec 26, Navi Mumbai
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-gold flex-shrink-0" />
                <a 
                  href="tel:+919967482137" 
                  className="text-gray-400 hover:text-gold transition-colors duration-300"
                >
                  +91 9967482137
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-gold flex-shrink-0" />
                <a 
                  href="mailto:contact@rvtechlearn.com" 
                  className="text-gray-400 hover:text-gold transition-colors duration-300"
                >
                  contact@rvtechlearn.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-10">
          <div className="flex justify-center items-center">
            <p className="text-gray-500 text-m text-center">
              RVTechLearn. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
