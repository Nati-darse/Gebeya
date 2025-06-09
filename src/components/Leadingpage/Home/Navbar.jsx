import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Search, ShoppingCart, User, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../assets/logo for Gebeya.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/products", label: "Products" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-2 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm font-medium">
            🌿 Fresh Agricultural Products Direct from Farmers! Free Delivery on Orders Over 500 ETB 🌿
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={logo} 
              alt="Gebeya Marketplace Logo" 
              className="h-12 w-20 object-contain transition-transform group-hover:scale-105" 
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary-700">Gebeya</h1>
              <p className="text-xs text-gray-600">Agricultural Marketplace</p>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="w-full relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for fresh products..."
                className="w-full px-4 py-3 pl-12 pr-4 border-2 border-gray-200 rounded-full focus:border-primary-500 focus:outline-none transition-colors"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors"
              >
                Search
              </button>
            </form>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Wishlist */}
            <button className="p-2 text-gray-600 hover:text-primary-600 transition-colors relative">
              <Heart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>

            {/* Cart */}
            <Link to="/cart" className="p-2 text-gray-600 hover:text-primary-600 transition-colors relative">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User Menu */}
            <div className="hidden md:flex items-center space-x-2">
              <Link to="/signin">
                <button className="px-4 py-2 text-primary-600 border border-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
                  Sign In
                </button>
              </Link>
              <Link to="/signup">
                <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                  Sign Up
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden pb-4">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </form>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-gray-700 hover:text-primary-600 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <Link to="/signin" className="block">
                  <button className="w-full px-4 py-2 text-primary-600 border border-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
                    Sign In
                  </button>
                </Link>
                <Link to="/signup" className="block">
                  <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;