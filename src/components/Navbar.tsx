import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Menu, X, Home, Users, Briefcase, Building2, UserPlus, Mail, FileText } from 'lucide-react';
import logo from '../assets/logo.png';
interface NavBarProps {
  setCurrentSection: (section: string) => void;
  bgColor?: string; // Add this prop
}

interface NavItem {
  name: string;
  path: string;
  icon: JSX.Element;
}

const NavBar: React.FC<NavBarProps> = ({ setCurrentSection, bgColor = 'bg-transparent' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: 'Home', path: '/', icon: <Home size={20} /> },
    { name: 'About Us', path: '/about', icon: <Users size={20} /> },
    { name: 'Services', path: '/services', icon: <Briefcase size={20} /> },
    { name: 'Clients', path: '/clients', icon: <Building2 size={20} /> },
    { name: 'Join Our Team', path: '/join-team', icon: <UserPlus size={20} /> },
    { name: 'Contact Us', path: '/contact', icon: <Mail size={20} /> },
    { name: 'Brochure', path: '/brochure', icon: <FileText size={20} /> },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : bgColor}`}>
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-10" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-black hover:text-techlearn-blue transition-colors text-[15px] flex items-center gap-2"
              onClick={() => setCurrentSection(item.name.toLowerCase())}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-500 hover:text-gray-700"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg" id="mobile-menu" role="menu">
          <div className="px-6 py-3 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-black hover:text-techlearn-blue block py-2 text-[15px] flex items-center gap-2"
                onClick={() => {
                  setCurrentSection(item.name.toLowerCase());
                  setIsOpen(false);
                }}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
