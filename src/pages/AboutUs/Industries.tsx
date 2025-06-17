import React from 'react';
import { Wind, Building2, Factory } from 'lucide-react';
const Industries = () => {
  return <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-teal-400 to-teal-500 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            INDUSTRIES WE SERVE
          </h1>
          <p className="text-xl mt-4 font-light">
            Providing specialized solutions across multiple industry sectors
          </p>
        </div>
        
        {/* Wind turbines background effect */}
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1472396961693-142e6e269027" alt="Wind turbines" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-16 bg-[#f7f3ed]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-600 mb-12 text-center">WHO WE WORK WITH</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg">
              <Wind className="mb-4" size={48} />
              <h3 className="font-bold text-lg mb-2">ARCHITECTURE & FACADE</h3>
              <p className="text-blue-100 text-sm">
                Innovative solutions for modern architectural projects and building facades
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-lg">
              <Building2 className="mb-4" size={48} />
              <h3 className="font-bold text-lg mb-2">CONSTRUCTION</h3>
              <p className="text-blue-100 text-sm">
                Comprehensive construction industry solutions and materials
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 text-white p-6 rounded-lg">
              <Factory className="mb-4" size={48} />
              <h3 className="font-bold text-lg mb-2">INDUSTRIAL</h3>
              <p className="text-gray-300 text-sm">
                Heavy industrial applications and manufacturing solutions
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-lg">
              <Wind className="mb-4" size={48} />
              <h3 className="font-bold text-lg mb-2">ENERGY</h3>
              <p className="text-orange-100 text-sm">
                Renewable energy and power generation industry support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-[#f7f3ed]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">CASE STUDIES</h2>
          
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">CLIENT NAME</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475" alt="Case Study 1" className="w-full h-64 object-cover rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#f7f3ed]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">TESTIMONIALS</h2>
          
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" alt="Testimonial 1" className="w-full h-64 object-cover rounded-lg shadow-lg" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">CLIENT NAME</h3>
                <p className="text-gray-600 leading-relaxed mb-4 italic">
                  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                </p>
                <div className="text-blue-600 font-semibold">
                  — Senior Project Manager, ABC Corporation
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2">
                <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" alt="Testimonial 2" className="w-full h-64 object-cover rounded-lg shadow-lg" />
              </div>
              <div className="md:order-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">CLIENT NAME</h3>
                <p className="text-gray-600 leading-relaxed mb-4 italic">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
                </p>
                <div className="text-blue-600 font-semibold">
                  — Director of Operations, XYZ Industries
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-16 bg-[#f7f3ed]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Industry Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With decades of experience across multiple sectors, we understand the unique challenges and requirements of each industry we serve.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-blue-600" size={32} />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Architecture</h3>
              <p className="text-gray-600 text-sm">Modern building solutions and facade systems</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wind className="text-green-600" size={32} />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Renewable Energy</h3>
              <p className="text-gray-600 text-sm">Wind and solar energy infrastructure</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="text-orange-600" size={32} />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Manufacturing</h3>
              <p className="text-gray-600 text-sm">Industrial equipment and automation</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-purple-600" size={32} />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Infrastructure</h3>
              <p className="text-gray-600 text-sm">Large-scale infrastructure projects</p>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Industries;