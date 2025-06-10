import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List, Star, Heart, ShoppingCart, ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';
import Navbar from '../Leadingpage/Home/Navbar';
import Footer from '../Leadingpage/Home/Footer';

// Import product images
import arabica from '../../assets/imgforcategories/arabica.jpg';
import avocado from '../../assets/imgforcategories/avocado.jpg';
import banana from '../../assets/imgforcategories/ban.jpeg';
import honey from '../../assets/imgforcategories/honey.jpg';
import tomato from '../../assets/imgforcategories/tomato.jpg';
import coffee from '../../assets/imgforcategories/coffee.jpg';
import barley from '../../assets/imgforcategories/barley.jpg';
import wheat from '../../assets/imgforcategories/wheat.jpg';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('relevance');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Mock products data
  const allProducts = [
    { id: 1, name: "Premium Arabica Coffee", price: 500, image: arabica, rating: 4.8, farmer: "Bekele Farm", category: "Coffee & Tea" },
    { id: 2, name: "Fresh Avocados", price: 65, image: avocado, rating: 4.6, farmer: "Green Valley", category: "Fruits & Vegetables" },
    { id: 3, name: "Organic Bananas", price: 60, image: banana, rating: 4.7, farmer: "Tropical Farm", category: "Fruits & Vegetables" },
    { id: 4, name: "Pure Wild Honey", price: 430, image: honey, rating: 4.9, farmer: "Mountain Bee Farm", category: "Honey & Bee Products" },
    { id: 5, name: "Fresh Tomatoes", price: 55, image: tomato, rating: 4.5, farmer: "Sunshine Farm", category: "Fruits & Vegetables" },
    { id: 6, name: "Ethiopian Coffee Beans", price: 390, image: coffee, rating: 4.8, farmer: "Heritage Coffee", category: "Coffee & Tea" },
    { id: 7, name: "Barley Grains", price: 129, image: barley, rating: 4.5, farmer: "Highland Farm", category: "Cereal Grains" },
    { id: 8, name: "Wheat Flour", price: 115, image: wheat, rating: 4.3, farmer: "Golden Fields", category: "Cereal Grains" }
  ];

  const categories = ["Coffee & Tea", "Fruits & Vegetables", "Cereal Grains", "Honey & Bee Products"];

  // Filter products based on search query
  const searchResults = allProducts.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase()) ||
    product.farmer.toLowerCase().includes(query.toLowerCase())
  );

  // Apply additional filters
  const filteredProducts = searchResults.filter(product => {
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    return matchesPrice && matchesCategory;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0; // relevance (keep original order)
    }
  });

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

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
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Search Results {query && `for "${query}"`}
              </h1>
              <p className="text-gray-600">{sortedProducts.length} products found</p>
            </div>
            <Link to="/products" className="flex items-center space-x-2 text-primary-600 hover:text-primary-700">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Products</span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="bg-white rounded-xl shadow-soft p-6 mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                defaultValue={query}
                placeholder="Search for products, categories, or farmers..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    const newQuery = e.target.value;
                    window.location.href = `/search?q=${encodeURIComponent(newQuery)}`;
                  }
                }}
              />
            </div>
          </div>

          {/* No Results */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600 mb-6">
                {query 
                  ? `We couldn't find any products matching "${query}". Try adjusting your search or filters.`
                  : "Try searching for products, categories, or farmers."
                }
              </p>
              <Link to="/products">
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Browse All Products
                </button>
              </Link>
            </div>
          )}

          {/* Results */}
          {sortedProducts.length > 0 && (
            <>
              {/* Controls */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 space-y-4 md:space-y-0">
                <div className="flex items-center space-x-4">
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
                    <option value="relevance">Sort by Relevance</option>
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

                    {/* Categories */}
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-900 mb-3">Categories</h4>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <label key={category} className="flex items-center">
                            <input
                              type="checkbox"
                              checked={selectedCategories.includes(category)}
                              onChange={() => handleCategoryChange(category)}
                              className="mr-2 text-primary-600 focus:ring-primary-500"
                            />
                            <span className="text-gray-700">{category}</span>
                          </label>
                        ))}
                      </div>
                    </div>

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
                        setSelectedCategories([]);
                        setSortBy('relevance');
                      }}
                      className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Reset Filters
                    </button>
                  </div>
                </div>

                {/* Products Grid */}
                <div className="lg:col-span-3">
                  <div className={`grid gap-6 ${
                    viewMode === 'grid' 
                      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                      : 'grid-cols-1'
                  }`}>
                    {sortedProducts.map((product, index) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`bg-white rounded-xl shadow-soft hover:shadow-large transition-all duration-300 overflow-hidden group ${
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
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
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
                              {product.category}
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
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SearchResults;