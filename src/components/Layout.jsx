
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <div className="min-h-screen bg-[#F7F3ED]">
      {/* Header */}
      <header className="bg-white shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#f7f3ed]">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src="/lovable-uploads/2915d7ae-8cc8-4915-8d15-2f92e77c53ed.png" alt="Palanche Industries Logo" className="h-12 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className={`font-medium transition-colors ${isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                Home
              </Link>
              <Link to="/products" className={`font-medium transition-colors ${isActive('/products') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                Products
              </Link>
              <div className="relative group">
                <button className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
                  About Us
                </button>
                <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  <Link to="/about-us/quality-control" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Quality Control
                  </Link>
                  <Link to="/about-us/infrastructure" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Infrastructure
                  </Link>
                  <Link to="/about-us/industries" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Industries
                  </Link>
                </div>
              </div>
              <Link to="/profile" className={`font-medium transition-colors ${isActive('/profile') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                Profile
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button onClick={toggleMenu} className="md:hidden p-2 text-gray-700 hover:text-blue-600">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <Link to="/" onClick={toggleMenu} className={`font-medium transition-colors ${isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                  Home
                </Link>
                <Link to="/products" onClick={toggleMenu} className={`font-medium transition-colors ${isActive('/products') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                  Products
                </Link>
                <div className="pl-4 space-y-2">
                  <p className="font-medium text-gray-900">About Us</p>
                  <Link to="/about-us/quality-control" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">
                    Quality Control
                  </Link>
                  <Link to="/about-us/infrastructure" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">
                    Infrastructure
                  </Link>
                  <Link to="/about-us/industries" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">
                    Industries
                  </Link>
                </div>
                <Link to="/profile" onClick={toggleMenu} className={`font-medium transition-colors ${isActive('/profile') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                  Profile
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Column 1: Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">PALANCHE INDUSTRIES</h3>
              <p className="mb-4 text-gray-300">
                Innovating industrial solutions since 1995. Quality, reliability, and sustainability at scale.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-bold mb-4 text-white">QUICK LINKS</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-blue-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-gray-300 hover:text-blue-400">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/profile" className="text-gray-300 hover:text-blue-400">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/about-us/quality-control" className="text-gray-300 hover:text-blue-400">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h4 className="font-bold mb-4 text-white">CONTACT US</h4>
              <address className="not-italic text-gray-300">
                <p>123 Industrial Park, Mumbai</p>
                <p>India - 400001</p>
                <a href="mailto:info@palanche.com" className="hover:text-blue-400">info@palanche.com</a>
                <p>Phone: +91 1234567890</p>
              </address>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
            <p className="text-gray-300">© {new Date().getFullYear()} Palanche Industries. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
