
import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "PRECISION PRISM TECHNOLOGY",
      image: "/lovable-uploads/2a2ebcf0-6f26-4d63-9dd2-8cb4713fb747.png",
      description: "Advanced optical precision technology for industrial applications"
    },
    {
      id: 2,
      name: "INDUSTRIAL FURNACE SYSTEMS",
      image: "/lovable-uploads/4d239df2-a73b-4466-a274-14ae0806a69d.png",
      description: "High-performance furnace systems for heavy industrial processing"
    },
    {
      id: 3,
      name: "PRECISION CUTTING TOOLS",
      image: "/lovable-uploads/d97a93e3-8873-4937-a7e9-d321f673d889.png",
      description: "State-of-the-art cutting and machining tools for precision manufacturing"
    },
    {
      id: 4,
      name: "METAL FABRICATION EQUIPMENT",
      image: "/lovable-uploads/f41e77b0-c5b7-4a46-8337-239483989c05.png",
      description: "Professional metal fabrication and processing equipment"
    },
    {
      id: 5,
      name: "STRUCTURAL COMPONENTS",
      image: "/lovable-uploads/2392bc73-dae8-40f9-8c7f-20dcd912a468.png",
      description: "High-grade structural components for industrial construction"
    },
    {
      id: 6,
      name: "WELDING TECHNOLOGY",
      image: "/lovable-uploads/f44790ab-80bd-4e9e-a77f-238988ffc0bd.png",
      description: "Advanced welding technology and equipment for precision joining"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            PRODUCT CATALOGUE
          </h1>
          <p className="text-xl mt-4 font-light">
            Discover our comprehensive range of industrial solutions
          </p>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">PRODUCT GALLERY</h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors">
              DOWNLOAD PRODUCT CATALOGUE
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link key={product.id} to={`/products/${product.id}`}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/82d0c4f3-13b0-4f68-b1e1-8cdb528b2254.png" 
                alt="Featured Product"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">FEATURED TECHNOLOGY</h2>
              <div className="space-y-4 text-gray-600">
                <p><strong>Product Category:</strong> Industrial Equipment</p>
                <p><strong>Specifications:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>High-grade materials</li>
                  <li>Advanced technology integration</li>
                  <li>Customizable configurations</li>
                  <li>Industry-standard compliance</li>
                </ul>
                <div className="flex space-x-4 mt-6">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                  <div className="flex space-x-2">
                    <img src="/lovable-uploads/2a2ebcf0-6f26-4d63-9dd2-8cb4713fb747.png" alt="Thumb 1" className="w-12 h-12 object-cover rounded" />
                    <img src="/lovable-uploads/4d239df2-a73b-4466-a274-14ae0806a69d.png" alt="Thumb 2" className="w-12 h-12 object-cover rounded" />
                    <img src="/lovable-uploads/d97a93e3-8873-4937-a7e9-d321f673d889.png" alt="Thumb 3" className="w-12 h-12 object-cover rounded" />
                    <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center text-sm font-semibold">+3</div>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors">
                    Add To Cart
                  </button>
                  <button className="ml-4 border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-md transition-colors">
                    Add To Quote
                  </button>
                </div>
                <p className="text-sm text-blue-600 mt-4">✓ DOWNLOAD PRODUCT CATALOGUE</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
