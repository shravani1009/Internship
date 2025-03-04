
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Clients', path: '/clients' },
    { name: 'Join Our Team', path: '/join-team' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Brochure', path: '/brochure' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-black/90 backdrop-blur-lg shadow-md' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-gold flex items-center gap-2">
          <span className="animate-pulse-gentle">Core</span> 
          <span className="text-white">Courses</span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
          {navItems.map((item, index) => (
            <NavLink 
              key={index} 
              to={item.path} 
              className={({ isActive }) => 
                `nav-link text-sm lg:text-base ${isActive ? 'text-gold active' : 'text-white'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <NavLink to="/start-project" className="ml-4 px-6 py-2 rounded-full bg-gold text-black font-medium transition-all duration-300 hover:bg-white hover:text-gold">
            Start A Project
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-black/95 backdrop-blur-lg transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {navItems.map((item, index) => (
            <NavLink 
              key={index} 
              to={item.path} 
              className={({ isActive }) => 
                `nav-link block py-2 ${isActive ? 'text-gold active' : 'text-white'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <NavLink to="/start-project" className="px-6 py-3 rounded-full bg-gold text-black font-medium text-center transition-all duration-300 hover:bg-white hover:text-gold">
            Start A Project
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
