
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "PRECISION PRISM TECHNOLOGY",
      image: "/lovable-uploads/2a2ebcf0-6f26-4d63-9dd2-8cb4713fb747.png",
      description: "Advanced optical precision technology for industrial applications with cutting-edge design and functionality.",
      specifications: [
        "High-grade optical materials",
        "Precision-engineered surfaces",
        "Advanced light manipulation",
        "Industrial-grade durability"
      ],
      category: "Optical Equipment"
    },
    {
      id: 2,
      name: "INDUSTRIAL FURNACE SYSTEMS",
      image: "/lovable-uploads/4d239df2-a73b-4466-a274-14ae0806a69d.png",
      description: "High-performance furnace systems for heavy industrial processing with advanced temperature control.",
      specifications: [
        "High-temperature resistance",
        "Energy-efficient design",
        "Automated control systems",
        "Safety compliance certified"
      ],
      category: "Heating Equipment"
    },
    {
      id: 3,
      name: "PRECISION CUTTING TOOLS",
      image: "/lovable-uploads/d97a93e3-8873-4937-a7e9-d321f673d889.png",
      description: "State-of-the-art cutting and machining tools for precision manufacturing applications.",
      specifications: [
        "Ultra-sharp cutting edges",
        "Precision-ground surfaces",
        "Durable tool materials",
        "Optimized geometries"
      ],
      category: "Cutting Tools"
    },
    {
      id: 4,
      name: "METAL FABRICATION EQUIPMENT",
      image: "/lovable-uploads/f41e77b0-c5b7-4a46-8337-239483989c05.png",
      description: "Professional metal fabrication and processing equipment for industrial manufacturing.",
      specifications: [
        "Heavy-duty construction",
        "Precision machined components",
        "Corrosion-resistant materials",
        "Industrial-grade performance"
      ],
      category: "Fabrication Equipment"
    },
    {
      id: 5,
      name: "STRUCTURAL COMPONENTS",
      image: "/lovable-uploads/2392bc73-dae8-40f9-8c7f-20dcd912a468.png",
      description: "High-grade structural components for industrial construction and architectural applications.",
      specifications: [
        "High-strength materials",
        "Precision-formed profiles",
        "Structural integrity certified",
        "Weather-resistant coating"
      ],
      category: "Structural Materials"
    },
    {
      id: 6,
      name: "WELDING TECHNOLOGY",
      image: "/lovable-uploads/f44790ab-80bd-4e9e-a77f-238988ffc0bd.png",
      description: "Advanced welding technology and equipment for precision joining applications.",
      specifications: [
        "Advanced welding processes",
        "Precision heat control",
        "Professional-grade equipment",
        "Safety-certified systems"
      ],
      category: "Welding Equipment"
    }
  ];

  const product = products.find(p => p.id === parseInt(id || '1'));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <button 
            onClick={() => navigate('/products')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <button 
            onClick={() => navigate('/products')}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors"
          >
            <ChevronLeft size={20} className="mr-2" />
            Back to Products
          </button>
          <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-lg text-gray-600 mt-2">{product.category}</p>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              
              {/* Thumbnail Gallery */}
              <div className="flex space-x-4 mt-6">
                <img src={product.image} alt="Main view" className="w-20 h-20 object-cover rounded border-2 border-blue-600" />
                <img src="/lovable-uploads/2392bc73-dae8-40f9-8c7f-20dcd912a468.png" alt="Detail view" className="w-20 h-20 object-cover rounded border border-gray-300" />
                <img src="/lovable-uploads/82d0c4f3-13b0-4f68-b1e1-8cdb528b2254.png" alt="Side view" className="w-20 h-20 object-cover rounded border border-gray-300" />
                <div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center text-sm font-semibold border border-gray-300">+3</div>
              </div>
            </div>

            {/* Product Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{product.name}</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Specifications</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {product.specifications.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Product Category</h3>
                  <p className="text-gray-600">{product.category}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-6">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition-colors font-semibold">
                    Add To Cart
                  </button>
                  <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-md transition-colors font-semibold">
                    Add To Quote
                  </button>
                </div>

                <div className="pt-4">
                  <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                    ✓ DOWNLOAD PRODUCT CATALOGUE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Products</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {products.filter(p => p.id !== product.id).slice(0, 3).map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={relatedProduct.image} 
                  alt={relatedProduct.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{relatedProduct.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{relatedProduct.description}</p>
                  <button 
                    onClick={() => navigate(`/products/${relatedProduct.id}`)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors text-sm"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
