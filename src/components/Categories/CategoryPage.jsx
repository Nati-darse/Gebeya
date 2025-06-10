import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Filter, Grid, List, Star, Heart, ShoppingCart } from 'lucide-react';
import Navbar from '../Leadingpage/Home/Navbar';
import Footer from '../Leadingpage/Home/Footer';
import toast from 'react-hot-toast';

// Import product images
import arabica from '../../assets/imgforcategories/arabica.jpg';
import avocado from '../../assets/imgforcategories/avocado.jpg';
import banana from '../../assets/imgforcategories/ban.jpeg';
import honey from '../../assets/imgforcategories/honey.jpg';
import tomato from '../../assets/imgforcategories/tomato.jpg';
import coffee from '../../assets/imgforcategories/coffee.jpg';
import barley from '../../assets/imgforcategories/barley.jpg';
import wheat from '../../assets/imgforcategories/wheat.jpg';
import teff from '../../assets/imgforcategories/teff.jpg';
import sorghum from '../../assets/imgforcategories/sorghum.jpg';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  // Mock products data organized by category
  const categoryProducts = {
    'cereal-grains': [
      { id: 4, name: "Barley | ገብስ", price: 129, image: barley, rating: 4.5, farmer: "Highland Farm" },
      { id: 29, name: "Wheat |ስንዴ", price: 115, image: wheat, rating: 4.3, farmer: "Golden Fields" },
      { id: 27, name: "Teff |ጤፍ", price: 185, image: teff, rating: 4.7, farmer: "Traditional Farm" },
      { id: 24, name: "Sorghum | ማሽላ", price: 110, image: sorghum, rating: 4.2, farmer: "Dry Land Farm" },
    ],
    'fruits-and-vegetables': [
      { id: 2, name: "Avocados | አቮካዶ", price: 65, image: avocado, rating: 4.6, farmer: "Green Valley" },
      { id: 3, name: "Bananas | ሙዝ", price: 60, image: banana, rating: 4.7, farmer: "Tropical Farm" },
      { id: 28, name: "Tomatoes |ቲማቲም", price: 55, image: tomato, rating: 4.5, farmer: "Fresh Garden" },
    ],
    'coffee-and-tea': [
      { id: 1, name: "Premium Arabica Coffee", price: 500, image: arabica, rating: 4.8, farmer: "Bekele Farm" },
      { id: 10, name: "Coffee | ቡና", price: 390, image: coffee, rating: 4.6, farmer: "Heritage Coffee" },
    ],
    'honey-and-bee-products': [
      { id: 13, name: "Pure Wild Honey", price: 430, image: honey, rating: 4.9, farmer: "Mountain Bee Farm" },
    ]
  };

  const formatCategoryName = (name) => {
    return name?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Category';
  };

  const products = categoryProducts[categoryName] || [];

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const filteredProducts = sortedProducts.filter(
    product => product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  const addToCart = (product) => {
    toast.success(`${product.name} added to cart!`);
  };

  const addToWishlist = (product) => {
    toast.success(`${product.name} added to wishlist!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <Link to="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-primary-600">Products</Link>
            <span>/</span>
            <span className="text-gray-900">{formatCategoryName(categoryName)}</span>
          </nav>

          {/* Back Button */}
          <Link to="/products" className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Products</span>
          </Link>

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {formatCategoryName(categoryName)}
              </h1>
              <p className="text-gray-600">{filteredProducts.length} products found</p>
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              {/* View Mode */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-primary-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-primary-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-soft p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                </h3>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Price Range (ETB)</h4>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{priceRange[0]} ETB</span>
                      <span>{priceRange[1]} ETB</span>
                    </div>
                  </div>
                </div>

                {/* Reset Filters */}
                <button
                  onClick={() => {
                    setPriceRange([0, 1000]);
                    setSortBy('name');
                  }}
                  className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-gray-400 mb-4">
                    <Filter className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                  <p className="text-gray-600">Try adjusting your filters or browse other categories.</p>
                </div>
              ) : (
                <div className={`grid gap-6 ${
                  viewMode === 'grid' 
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                    : 'grid-cols-1'
                }`}>
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`bg-white rounded-xl shadow-soft hover:shadow-large transition-all duration-300 overflow-hidden ${
                        viewMode === 'list' ? 'flex' : ''
                      }`}
                    >
                      {/* Product Image */}
                      <div className={`relative overflow-hidden ${
                        viewMode === 'list' ? 'w-48 h-48' : 'h-64'
                      }`}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                        
                        {/* Action Buttons */}
                        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => addToWishlist(product)}
                            className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 transition-colors"
                          >
                            <Heart className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-6 flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-primary-600 font-medium">
                            {formatCategoryName(categoryName)}
                          </span>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                          </div>
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-primary-700 transition-colors">
                          <Link to={`/product/${product.id}`}>
                            {product.name}
                          </Link>
                        </h3>

                        <p className="text-gray-600 mb-3">From: {product.farmer}</p>

                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-2xl font-bold text-gray-900">{product.price} ETB</span>
                            <span className="text-gray-600">/kg</span>
                          </div>

                          <button
                            onClick={() => addToCart(product)}
                            className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2"
                          >
                            <ShoppingCart className="w-4 h-4" />
                            <span>Add to Cart</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;