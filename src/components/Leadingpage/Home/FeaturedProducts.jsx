import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Eye, MapPin, Clock } from 'lucide-react';
import toast from 'react-hot-toast';

// Import product images
import arabica from '../../../assets/imgforcategories/arabica.jpg';
import avocado from '../../../assets/imgforcategories/avocado.jpg';
import banana from '../../../assets/imgforcategories/ban.jpeg';
import honey from '../../../assets/imgforcategories/honey.jpg';
import tomato from '../../../assets/imgforcategories/tomato.jpg';
import coffee from '../../../assets/imgforcategories/coffee.jpg';

const FeaturedProducts = () => {
  const [wishlist, setWishlist] = useState(new Set());

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Arabica Coffee",
      price: 500,
      originalPrice: 650,
      image: arabica,
      rating: 4.8,
      reviews: 124,
      location: "Sidama, Ethiopia",
      farmer: "Bekele Farm",
      category: "Coffee & Tea",
      inStock: true,
      discount: 23,
      isOrganic: true,
      harvestDate: "2024-01-15"
    },
    {
      id: 2,
      name: "Fresh Avocados",
      price: 65,
      originalPrice: 80,
      image: avocado,
      rating: 4.6,
      reviews: 89,
      location: "Oromia, Ethiopia",
      farmer: "Green Valley Farm",
      category: "Fruits & Vegetables",
      inStock: true,
      discount: 19,
      isOrganic: true,
      harvestDate: "2024-01-20"
    },
    {
      id: 3,
      name: "Organic Bananas",
      price: 60,
      originalPrice: 75,
      image: banana,
      rating: 4.7,
      reviews: 156,
      location: "SNNP, Ethiopia",
      farmer: "Tropical Farms",
      category: "Fruits & Vegetables",
      inStock: true,
      discount: 20,
      isOrganic: true,
      harvestDate: "2024-01-18"
    },
    {
      id: 4,
      name: "Pure Wild Honey",
      price: 430,
      originalPrice: 500,
      image: honey,
      rating: 4.9,
      reviews: 203,
      location: "Tigray, Ethiopia",
      farmer: "Mountain Bee Farm",
      category: "Honey & Bee Products",
      inStock: true,
      discount: 14,
      isOrganic: true,
      harvestDate: "2024-01-10"
    },
    {
      id: 5,
      name: "Fresh Tomatoes",
      price: 55,
      originalPrice: 70,
      image: tomato,
      rating: 4.5,
      reviews: 78,
      location: "Amhara, Ethiopia",
      farmer: "Sunshine Farm",
      category: "Fruits & Vegetables",
      inStock: true,
      discount: 21,
      isOrganic: false,
      harvestDate: "2024-01-22"
    },
    {
      id: 6,
      name: "Ethiopian Coffee Beans",
      price: 390,
      originalPrice: 450,
      image: coffee,
      rating: 4.8,
      reviews: 167,
      location: "Kaffa, Ethiopia",
      farmer: "Heritage Coffee",
      category: "Coffee & Tea",
      inStock: true,
      discount: 13,
      isOrganic: true,
      harvestDate: "2024-01-12"
    }
  ];

  const toggleWishlist = (productId) => {
    const newWishlist = new Set(wishlist);
    if (newWishlist.has(productId)) {
      newWishlist.delete(productId);
      toast.success('Removed from wishlist');
    } else {
      newWishlist.add(productId);
      toast.success('Added to wishlist');
    }
    setWishlist(newWishlist);
  };

  const addToCart = (product) => {
    toast.success(`${product.name} added to cart!`);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays} days ago`;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
              {" "}Products
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Handpicked premium products from our trusted farmers, delivered fresh to your doorstep
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.discount > 0 && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      -{product.discount}%
                    </span>
                  )}
                  {product.isOrganic && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Organic
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      wishlist.has(product.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white/90 text-gray-600 hover:bg-red-500 hover:text-white'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${wishlist.has(product.id) ? 'fill-current' : ''}`} />
                  </button>
                  
                  <Link to={`/product/${product.id}`}>
                    <button className="w-10 h-10 bg-white/90 text-gray-600 hover:bg-primary-500 hover:text-white rounded-full flex items-center justify-center transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                  </Link>
                </div>

                {/* Stock Status */}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold">
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category & Rating */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-primary-600 font-medium">
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">
                      {product.rating}
                    </span>
                    <span className="text-sm text-gray-500">
                      ({product.reviews})
                    </span>
                  </div>
                </div>

                {/* Product Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                  {product.name}
                </h3>

                {/* Location & Farmer */}
                <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{product.location}</span>
                  </div>
                </div>

                <div className="text-sm text-gray-600 mb-3">
                  <span className="font-medium">From:</span> {product.farmer}
                </div>

                {/* Harvest Date */}
                <div className="flex items-center space-x-1 mb-4 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>Harvested {formatDate(product.harvestDate)}</span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    {product.price} ETB
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-lg text-gray-500 line-through">
                      {product.originalPrice} ETB
                    </span>
                  )}
                  <span className="text-sm text-gray-600">/kg</span>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => addToCart(product)}
                  disabled={!product.inStock}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    product.inStock
                      ? 'bg-primary-600 hover:bg-primary-700 text-white transform hover:scale-105'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link to="/products">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              View All Products
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;