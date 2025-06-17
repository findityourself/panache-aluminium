
import React from 'react';

const QualityControl = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('/lovable-uploads/ae50567d-7be1-4edf-89b2-402b67673472.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            QUALITY CONTROL
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
            overview lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam aliquam nisl nisl
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Quality Standards</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Palanche Industries, quality control is at the heart of everything we do. Our rigorous quality assurance processes ensure that every product meets the highest industry standards and exceeds customer expectations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We employ advanced testing methodologies, precision measurement tools, and comprehensive inspection protocols to maintain consistency and reliability across our entire product range.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>ISO 9001:2015 certified quality management system</li>
                <li>Advanced testing and measurement equipment</li>
                <li>Comprehensive inspection protocols</li>
                <li>Continuous improvement processes</li>
                <li>Skilled quality assurance professionals</li>
              </ul>
            </div>
            <div>
              <img 
                src="/lovable-uploads/d97a93e3-8873-4937-a7e9-d321f673d889.png" 
                alt="Quality Control Equipment"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Quality Process</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <img 
                src="/lovable-uploads/2a2ebcf0-6f26-4d63-9dd2-8cb4713fb747.png" 
                alt="Precision Testing"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Precision Testing</h3>
              <p className="text-gray-600">
                State-of-the-art testing equipment ensures every component meets exact specifications and tolerances.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-md">
              <img 
                src="/lovable-uploads/4d239df2-a73b-4466-a274-14ae0806a69d.png" 
                alt="Material Analysis"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Material Analysis</h3>
              <p className="text-gray-600">
                Comprehensive material analysis and verification processes guarantee optimal performance and durability.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-md">
              <img 
                src="/lovable-uploads/f41e77b0-c5b7-4a46-8337-239483989c05.png" 
                alt="Final Inspection"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Final Inspection</h3>
              <p className="text-gray-600">
                Thorough final inspection procedures ensure only the highest quality products reach our customers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QualityControl;
