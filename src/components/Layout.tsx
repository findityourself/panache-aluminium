
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm relative z-50">
        {/* Top section with logo and search bars */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/2915d7ae-8cc8-4915-8d15-2f92e77c53ed.png" 
                alt="Palanche Industries Logo" 
                className="h-12 w-auto"
              />
            </Link>

            {/* Search Bars - Desktop */}
            <div className="hidden lg:flex space-x-4 flex-1 max-w-2xl mx-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Search by category..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Search by industry..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Quick search..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Navigation */}
          <div className="border-t border-gray-200">
            <nav className="hidden lg:flex space-x-8 py-4">
              <Link 
                to="/" 
                className={`font-medium transition-colors ${
                  isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className={`font-medium transition-colors ${
                  isActive('/products') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Products
              </Link>
              <div className="relative group">
                <button className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
                  About Us
                </button>
                <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  <Link 
                    to="/about-us/quality-control" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Quality Control
                  </Link>
                  <Link 
                    to="/about-us/infrastructure" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Infrastructure
                  </Link>
                  <Link 
                    to="/about-us/industries" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Industries
                  </Link>
                </div>
              </div>
              <Link 
                to="/profile" 
                className={`font-medium transition-colors ${
                  isActive('/profile') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Profile
              </Link>
            </nav>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="lg:hidden py-4">
                {/* Mobile Search */}
                <div className="mb-4 space-y-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    <input 
                      type="text" 
                      placeholder="Search..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                </div>
                
                <nav className="flex flex-col space-y-4">
                  <Link 
                    to="/" 
                    onClick={toggleMenu}
                    className={`font-medium transition-colors ${
                      isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/products" 
                    onClick={toggleMenu}
                    className={`font-medium transition-colors ${
                      isActive('/products') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    Products
                  </Link>
                  <div className="pl-4 space-y-2">
                    <p className="font-medium text-gray-900">About Us</p>
                    <Link 
                      to="/about-us/quality-control" 
                      onClick={toggleMenu}
                      className="block text-gray-700 hover:text-blue-600"
                    >
                      Quality Control
                    </Link>
                    <Link 
                      to="/about-us/infrastructure" 
                      onClick={toggleMenu}
                      className="block text-gray-700 hover:text-blue-600"
                    >
                      Infrastructure
                    </Link>
                    <Link 
                      to="/about-us/industries" 
                      onClick={toggleMenu}
                      className="block text-gray-700 hover:text-blue-600"
                    >
                      Industries
                    </Link>
                  </div>
                  <Link 
                    to="/profile" 
                    onClick={toggleMenu}
                    className={`font-medium transition-colors ${
                      isActive('/profile') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    Profile
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img 
                src="/lovable-uploads/2915d7ae-8cc8-4915-8d15-2f92e77c53ed.png" 
                alt="Palanche Industries Logo" 
                className="h-12 w-auto mb-4 filter brightness-0 invert"
              />
              <p className="text-gray-400 text-sm">
                Leading provider of industrial solutions and equipment for modern manufacturing.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
                <li><Link to="/about-us/quality-control" className="hover:text-white transition-colors">Quality Control</Link></li>
                <li><Link to="/profile" className="hover:text-white transition-colors">Profile</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Email: info@palanche.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Industrial Blvd</li>
                <li>City, State 12345</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Palanche Industries. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
