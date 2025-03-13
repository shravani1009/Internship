import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, X, Home, Users, Briefcase, Building2, UserPlus, Mail, FileText } from 'lucide-react';

interface NavBarProps {
  setCurrentSection: (section: string) => void;
}

interface NavItem {
  name: string;
  path: string;
  icon: JSX.Element;
}

const NavBar: React.FC<NavBarProps> = ({ setCurrentSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: NavItem[] = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'About Us', path: '/about', icon: <Users size={18} /> },
    { name: 'Services', path: '/services', icon: <Briefcase size={18} /> },
    { name: 'Clients', path: '/clients', icon: <Building2 size={18} /> },
    { name: 'Join Our Team', path: '/join-team', icon: <UserPlus size={18} /> },
    { name: 'Contact Us', path: '/contact', icon: <Mail size={18} /> },
    { name: 'Brochure', path: '/brochure', icon: <FileText size={18} /> },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-md z-50" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-green-600">EduPro</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
                onClick={() => setCurrentSection(item.name.toLowerCase())}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden" id="mobile-menu" role="menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
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
      </div>
    </nav>
  );
};

export default NavBar;
