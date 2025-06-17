
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const industries = [
    {
      title: "ARCHITECTURE & FACADE",
      description: "Innovative solutions for modern architectural projects with cutting-edge design and functionality.",
      image: "/lovable-uploads/2a2ebcf0-6f26-4d63-9dd2-8cb4713fb747.png"
    },
    {
      title: "CONSTRUCTION",
      description: "Heavy-duty construction equipment and machinery for large-scale industrial projects.",
      image: "/lovable-uploads/f6c6b9e7-aa21-4830-8afe-d1deed581dc9.png"
    },
    {
      title: "INDUSTRIAL",
      description: "Advanced industrial furnaces and manufacturing equipment for precision engineering.",
      image: "/lovable-uploads/1424d1e9-3513-4b32-89f4-6cc4eb6c6bec.png"
    },
    {
      title: "ENERGY",
      description: "Energy-efficient solutions and welding technologies for sustainable manufacturing.",
      image: "/lovable-uploads/82d0c4f3-13b0-4f68-b1e1-8cdb528b2254.png"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            PRECISION ENGINEERING
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto leading-relaxed">
            Advanced industrial solutions and cutting-edge technology for modern manufacturing excellence
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

      {/* WHO WE WORK WITH Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">WHO WE WORK WITH</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src={industry.image} 
                  alt={industry.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">{industry.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">CAPABILITIES</h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/4d239df2-a73b-4466-a274-14ae0806a69d.png" 
                alt="Advanced Technology" 
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/d97a93e3-8873-4937-a7e9-d321f673d889.png" 
                alt="Precision Manufacturing" 
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/f41e77b0-c5b7-4a46-8337-239483989c05.png" 
                alt="Quality Equipment" 
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

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-600 mb-12 text-center">REACH OUT TO US</h2>
          
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">EMAIL</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">PHONE</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">SUBJECT</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">INQUIRY</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Type of inquiry"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">MESSAGE</label>
                <textarea 
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition-colors"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
