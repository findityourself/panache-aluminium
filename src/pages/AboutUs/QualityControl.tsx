
import React from 'react';
import { CheckCircle, Award, Shield } from 'lucide-react';

const QualityControl = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-500 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            QUALITY CONTROL
          </h1>
          <p className="text-xl mt-4 font-light">
            Ensuring excellence in every product and process
          </p>
        </div>
      </section>

      {/* Quality Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-600 mb-12 text-center">QUALITY PROCESS</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">STEP 1</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                    alt="Quality Step 1"
                    className="w-32 h-20 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">STEP 2</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                    alt="Quality Step 2"
                    className="w-32 h-20 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">CERTIFICATIONS</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-orange-600" size={48} />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">ISO CERTIFIED</h3>
              <p className="text-gray-600">International Organization for Standardization certified processes</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-orange-600" size={48} />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">ISO CERTIFIED</h3>
              <p className="text-gray-600">Quality management systems compliance</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-orange-600" size={48} />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">OTHER</h3>
              <p className="text-gray-600">Additional industry certifications and standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Equipment Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">LAB EQUIPMENT</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
              alt="Lab Equipment 1"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
              alt="Lab Equipment 2"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
              alt="Lab Equipment 3"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
              alt="Lab Equipment 4"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default QualityControl;
