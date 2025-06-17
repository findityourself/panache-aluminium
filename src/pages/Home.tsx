
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section with Tagline */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            TAGLINE/HEADING
          </h1>
          <div className="text-xl md:text-2xl mb-8 font-light">
            <span className="inline-block mr-8">HOME: 10:00 AM</span>
            <span className="inline-block">SIGN: 10:00 AM</span>
          </div>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
            Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
      </section>

      {/* Logo Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <img 
            src="/lovable-uploads/2915d7ae-8cc8-4915-8d15-2f92e77c53ed.png" 
            alt="Palanche Industries Logo" 
            className="h-32 w-auto mx-auto mb-8"
          />
        </div>
      </section>

      {/* Short Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">SHORT INTRO</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Sint sunt voluptate ullam sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">CAPABILITIES</h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                alt="Capability 1" 
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                alt="Capability 2" 
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                alt="Capability 3" 
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="bg-orange-400 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              <div className="text-center">
                <div className="text-3xl mb-2">+500K</div>
                <div className="text-sm">FURNACES</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reach Out to Us Section - Table Format */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-600 mb-12 text-center">REACH OUT TO US</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="bg-gray-50 font-semibold text-gray-700 px-6 py-4 w-1/4 border-r border-gray-300">
                      NAME
                    </td>
                    <td className="px-6 py-4">
                      <input 
                        type="text" 
                        placeholder="Enter your name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="bg-gray-50 font-semibold text-gray-700 px-6 py-4 w-1/4 border-r border-gray-300">
                      EMAIL
                    </td>
                    <td className="px-6 py-4">
                      <input 
                        type="email" 
                        placeholder="Enter your email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="bg-gray-50 font-semibold text-gray-700 px-6 py-4 w-1/4 border-r border-gray-300">
                      PHONE
                    </td>
                    <td className="px-6 py-4">
                      <input 
                        type="tel" 
                        placeholder="Enter your phone"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="bg-gray-50 font-semibold text-gray-700 px-6 py-4 w-1/4 border-r border-gray-300">
                      SUBJECT
                    </td>
                    <td className="px-6 py-4">
                      <input 
                        type="text" 
                        placeholder="Enter subject"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="bg-gray-50 font-semibold text-gray-700 px-6 py-4 w-1/4 border-r border-gray-300">
                      INQUIRY
                    </td>
                    <td className="px-6 py-4">
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Select inquiry type</option>
                        <option value="general">General Inquiry</option>
                        <option value="product">Product Information</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-gray-50 font-semibold text-gray-700 px-6 py-4 w-1/4 border-r border-gray-300 align-top">
                      MESSAGE
                    </td>
                    <td className="px-6 py-4">
                      <textarea 
                        rows={4}
                        placeholder="Enter your message"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      ></textarea>
                    </td>
                  </tr>
                </tbody>
              </table>
              
              <div className="bg-gray-50 px-6 py-4 text-center border-t border-gray-300">
                <button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition-colors"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
