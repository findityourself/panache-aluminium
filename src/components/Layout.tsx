import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';
const Layout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return <div className="min-h-screen bg-[#F7F3ED]">
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
          {isMenuOpen && <div className="md:hidden py-4 border-t border-gray-200">
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
            </div>}
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#F7F3ED] text-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <img src="/lovable-uploads/2915d7ae-8cc8-4915-8d15-2f92e77c53ed.png" alt="Palanche Industries Logo" className="h-8 w-auto mr-3" />
                <h3 className="text-xl font-bold">Palanche Industries</h3>
              </div>
              <p className="text-gray-600 text-sm mb-6">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-colors">
                Contact Us
              </button>
            </div>
            
            {/* Navigation */}
            <div>
              <h4 className="font-bold mb-4 text-black">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link></li>
                <li><Link to="/about-us/quality-control" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</Link></li>
                <li><Link to="/products" className="text-gray-600 hover:text-blue-600 transition-colors">Our Projects</Link></li>
                <li><Link to="/profile" className="text-gray-600 hover:text-blue-600 transition-colors">Profile</Link></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            {/* Connect With Us */}
            <div>
              <h4 className="font-bold mb-4 text-black">Connect With Us</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-600">
                  <Instagram size={16} className="mr-2" />
                  <span>Instagram</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Facebook size={16} className="mr-2" />
                  <span>Facebook</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Twitter size={16} className="mr-2" />
                  <span>Twitter</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Linkedin size={16} className="mr-2" />
                  <span>LinkedIn</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Layout;