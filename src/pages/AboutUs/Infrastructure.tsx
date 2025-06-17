
import React from 'react';
import { Building, Cog, Users } from 'lucide-react';

const Infrastructure = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            INFRASTRUCTURE
          </h1>
          <p className="text-xl mt-4 font-light">
            World-class facilities and advanced manufacturing capabilities
          </p>
        </div>
      </section>

      {/* Plant Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">PLANT OVERVIEW</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our state-of-the-art manufacturing facility spans over 100,000 square feet and houses the most advanced industrial equipment in the industry. With cutting-edge technology and automated systems, we ensure consistent quality and efficient production processes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The facility is designed with sustainability in mind, featuring energy-efficient systems and environmentally responsible manufacturing practices.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                alt="Plant Overview 1"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                alt="Plant Overview 2"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Machinery Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                alt="Machinery 1"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                alt="Machinery 2"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">MACHINERY DETAILS</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our machinery fleet includes the latest in industrial automation and precision manufacturing equipment. Each machine is regularly maintained and calibrated to ensure optimal performance and product quality.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Cog className="text-blue-600" size={20} />
                  <span className="text-gray-700">Advanced CNC machining centers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Cog className="text-blue-600" size={20} />
                  <span className="text-gray-700">Automated assembly lines</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Cog className="text-blue-600" size={20} />
                  <span className="text-gray-700">Quality inspection systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Workflow Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">MANUFACTURING WORKFLOW</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-lg flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                1
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">STEP 1</h3>
              <p className="text-gray-600">Initial design and engineering phase with detailed specifications</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-lg flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                2
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">STEP 2</h3>
              <p className="text-gray-600">Precision manufacturing using advanced machinery and technology</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-lg flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                3
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">STEP 3</h3>
              <p className="text-gray-600">Quality control and final inspection before delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">GALLERY</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1518770660439-4636190af475",
              "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
              "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
              "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
              "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
              "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
              "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
              "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
              "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
            ].map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`Gallery ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Extrusion Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-600 mb-12 text-center">EXTRUSION PROCESS</h2>
          
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center space-x-6 mb-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900">STEP 1</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center space-x-6 mb-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900">STEP 2</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="text-center mt-12">
              <div className="inline-flex space-x-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Building className="text-blue-600" size={32} />
                </div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="text-blue-600" size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Infrastructure;
