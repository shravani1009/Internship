import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Quick links with proper routes
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Clients', path: '/clients' },
    { name: 'Join Our Team', path: '/join-team' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Brochure', path: '/brochure' }
  ];

  // Popular courses with proper routes
  const popularCourses = [
    { name: 'Digital Marketing', path: '/courses/digital-marketing' },
    { name: 'Web Development', path: '/courses/web-development' },
    { name: 'Data Science', path: '/courses/data-science' },
    { name: 'UI/UX Design', path: '/courses/ui-ux-design' },
    { name: 'Project Management', path: '/courses/project-management' },
    { name: 'Business Analytics', path: '/courses/business-analytics' }
  ];

  return (
    <footer className="bg-black pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold text-gold flex items-center gap-2">
              <span>Core</span> 
              <span className="text-white">Courses</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Elevate your skills with our premium courses. We help professionals master their craft through expert-led courses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
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
          
          <div>
            <h3 className="text-white font-semibold mb-4">Popular Courses</h3>
            <ul className="space-y-2">
              {popularCourses.map((course, index) => (
                <li key={index}>
                  <Link 
                    to={course.path}
                    className="text-gray-400 hover:text-gold transition-colors duration-300"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-gold flex-shrink-0 mt-1" />
                <span className="text-gray-400">123 Learning Street, Education City, 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-gold flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-gold flex-shrink-0" />
                <span className="text-gray-400">info@corecourses.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Core Courses. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-500 hover:text-gold text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-500 hover:text-gold text-sm transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-gray-500 hover:text-gold text-sm transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
