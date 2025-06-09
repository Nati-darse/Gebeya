import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Heart } from 'lucide-react';
import toast from 'react-hot-toast';
import Navbar from '../Leadingpage/Home/Navbar';
import Footer from '../Leadingpage/Home/Footer';

// Import images
import arabica from '../../assets/imgforcategories/arabica.jpg';
import avocado from '../../assets/imgforcategories/avocado.jpg';
import honey from '../../assets/imgforcategories/honey.jpg';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Arabica Coffee",
      price: 500,
      quantity: 2,
      image: arabica,
      farmer: "Bekele Farm",
      location: "Sidama, Ethiopia",
      inStock: true,
      maxQuantity: 50
    },
    {
      id: 2,
      name: "Fresh Avocados",
      price: 65,
      quantity: 5,
      image: avocado,
      farmer: "Green Valley Farm",
      location: "Oromia, Ethiopia",
      inStock: true,
      maxQuantity: 100
    },
    {
      id: 3,
      name: "Pure Wild Honey",
      price: 430,
      quantity: 1,
      image: honey,
      farmer: "Mountain Bee Farm",
      location: "Tigray, Ethiopia",
      inStock: true,
      maxQuantity: 25
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(items =>
      items.map(item => {
        if (item.id === id) {
          if (newQuantity > item.maxQuantity) {
            toast.error(`Maximum ${item.maxQuantity} kg available`);
            return item;
          }
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast.success('Item removed from cart');
  };

  const moveToWishlist = (id) => {
    const item = cartItems.find(item => item.id === id);
    removeItem(id);
    toast.success(`${item.name} moved to wishlist`);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = subtotal > 500 ? 0 : 50;
  const total = subtotal + shippingCost;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-24 pb-12">
          <div className="container mx-auto px-4">
            <div className="text-center py-16">
              <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
              <Link to="/products">
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Start Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
              <p className="text-gray-600">{cartItems.length} items in your cart</p>
            </div>
            <Link to="/products" className="flex items-center space-x-2 text-primary-600 hover:text-primary-700">
              <ArrowLeft className="w-4 h-4" />
              <span>Continue Shopping</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className="bg-white rounded-xl shadow-soft p-6"
                  >
                    <div className="flex items-center space-x-4">
                      {/* Product Image */}
                      <Link to={`/product/${item.id}`}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg hover:scale-105 transition-transform"
                        />
                      </Link>

                      {/* Product Info */}
                      <div className="flex-1">
                        <Link to={`/product/${item.id}`}>
                          <h3 className="font-semibold text-gray-900 hover:text-primary-600 transition-colors">
                            {item.name}
                          </h3>
                        </Link>
                        <p className="text-sm text-gray-600">From: {item.farmer}</p>
                        <p className="text-sm text-gray-500">{item.location}</p>
                        <p className="text-lg font-bold text-primary-600 mt-1">
                          {item.price} ETB/kg
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-gray-100 transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 py-2 font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-gray-100 transition-colors"
                            disabled={item.quantity >= item.maxQuantity}
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Item Total */}
                      <div className="text-right">
                        <p className="text-lg font-bold text-gray-900">
                          {item.price * item.quantity} ETB
                        </p>
                        <p className="text-sm text-gray-500">{item.quantity} kg</p>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col space-y-2">
                        <button
                          onClick={() => moveToWishlist(item.id)}
                          className="p-2 text-gray-400 hover:text-primary-600 transition-colors"
                          title="Move to wishlist"
                        >
                          <Heart className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-soft p-6 sticky top-24"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                
                <div className="space-y-4">
                  {/* Subtotal */}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">{subtotal} ETB</span>
                  </div>

                  {/* Shipping */}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">
                      {shippingCost === 0 ? (
                        <span className="text-green-600">Free</span>
                      ) : (
                        `${shippingCost} ETB`
                      )}
                    </span>
                  </div>

                  {/* Free shipping notice */}
                  {subtotal < 500 && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                      <p className="text-sm text-yellow-800">
                        Add {500 - subtotal} ETB more for free shipping!
                      </p>
                    </div>
                  )}

                  <hr className="border-gray-200" />

                  {/* Total */}
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary-600">{total} ETB</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <Link to="/checkout" className="block mt-6">
                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                    Proceed to Checkout
                  </button>
                </Link>

                {/* Security Notice */}
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500">
                    🔒 Secure checkout with SSL encryption
                  </p>
                </div>

                {/* Estimated Delivery */}
                <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm text-green-800 font-medium">
                    📦 Estimated delivery: 2-3 business days
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Recommended Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">You might also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Add recommended products here */}
              <div className="bg-white rounded-xl shadow-soft p-4">
                <div className="w-full h-32 bg-gray-200 rounded-lg mb-3"></div>
                <h3 className="font-medium text-gray-900">Recommended Product</h3>
                <p className="text-primary-600 font-bold">Price ETB</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;