
import React from 'react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "PRODUCT NAME",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      description: "Product description goes here"
    },
    {
      id: 2,
      name: "PRODUCT NAME",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      description: "Product description goes here"
    },
    {
      id: 3,
      name: "PRODUCT NAME",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      description: "Product description goes here"
    },
    {
      id: 4,
      name: "PRODUCT NAME",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      description: "Product description goes here"
    },
    {
      id: 5,
      name: "PRODUCT NAME",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      description: "Product description goes here"
    },
    {
      id: 6,
      name: "PRODUCT NAME",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      description: "Product description goes here"
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
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>
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
                src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                alt="Featured Product"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">PRODUCT NAME</h2>
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
                    <img src="https://images.unsplash.com/photo-1518770660439-4636190af475" alt="Thumb 1" className="w-12 h-12 object-cover rounded" />
                    <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" alt="Thumb 2" className="w-12 h-12 object-cover rounded" />
                    <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" alt="Thumb 3" className="w-12 h-12 object-cover rounded" />
                    <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center text-sm font-semibold">+2</div>
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
