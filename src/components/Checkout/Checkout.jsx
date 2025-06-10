import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Truck, Shield, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import Navbar from '../Leadingpage/Home/Navbar';
import Footer from '../Leadingpage/Home/Footer';

// Import images
import arabica from '../../assets/imgforcategories/arabica.jpg';
import avocado from '../../assets/imgforcategories/avocado.jpg';
import honey from '../../assets/imgforcategories/honey.jpg';

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    // Shipping Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    region: '',
    postalCode: '',
    
    // Payment Information
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    
    // Mobile Payment
    mobileNumber: '',
    
    // Special Instructions
    instructions: ''
  });

  // Mock cart items
  const cartItems = [
    {
      id: 1,
      name: "Premium Arabica Coffee",
      price: 500,
      quantity: 2,
      image: arabica,
      farmer: "Bekele Farm"
    },
    {
      id: 2,
      name: "Fresh Avocados",
      price: 65,
      quantity: 5,
      image: avocado,
      farmer: "Green Valley Farm"
    },
    {
      id: 3,
      name: "Pure Wild Honey",
      price: 430,
      quantity: 1,
      image: honey,
      farmer: "Mountain Bee Farm"
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = subtotal > 500 ? 0 : 50;
  const tax = Math.round(subtotal * 0.15); // 15% VAT
  const total = subtotal + shippingCost + tax;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (currentStep === 1) {
      // Validate shipping information
      const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'region'];
      const missingFields = requiredFields.filter(field => !formData[field]);
      
      if (missingFields.length > 0) {
        toast.error('Please fill in all required fields');
        return;
      }
      
      setCurrentStep(2);
    } else if (currentStep === 2) {
      // Validate payment information
      if (paymentMethod === 'card') {
        const requiredFields = ['cardNumber', 'expiryDate', 'cvv', 'cardName'];
        const missingFields = requiredFields.filter(field => !formData[field]);
        
        if (missingFields.length > 0) {
          toast.error('Please fill in all payment details');
          return;
        }
      } else if (paymentMethod === 'mobile') {
        if (!formData.mobileNumber) {
          toast.error('Please enter your mobile number');
          return;
        }
      }
      
      setCurrentStep(3);
    } else {
      // Process order
      toast.success('Order placed successfully!');
      // Redirect to order confirmation page
    }
  };

  const steps = [
    { number: 1, title: 'Shipping', icon: Truck },
    { number: 2, title: 'Payment', icon: CreditCard },
    { number: 3, title: 'Review', icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
              <p className="text-gray-600">Complete your order</p>
            </div>
            <Link to="/cart" className="flex items-center space-x-2 text-primary-600 hover:text-primary-700">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Cart</span>
            </Link>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-8">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                const isActive = currentStep === step.number;
                const isCompleted = currentStep > step.number;
                
                return (
                  <div key={step.number} className="flex items-center">
                    <div className={`flex items-center space-x-2 ${
                      isActive ? 'text-primary-600' : isCompleted ? 'text-green-600' : 'text-gray-400'
                    }`}>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        isActive ? 'bg-primary-600 text-white' : 
                        isCompleted ? 'bg-green-600 text-white' : 'bg-gray-200'
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="font-medium">{step.title}</span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-16 h-1 mx-4 ${
                        isCompleted ? 'bg-green-600' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Shipping Information */}
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white rounded-xl shadow-soft p-6"
                  >
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Shipping Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          required
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Address *
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Region *
                        </label>
                        <select
                          name="region"
                          value={formData.region}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          required
                        >
                          <option value="">Select Region</option>
                          <option value="Addis Ababa">Addis Ababa</option>
                          <option value="Oromia">Oromia</option>
                          <option value="Amhara">Amhara</option>
                          <option value="Tigray">Tigray</option>
                          <option value="SNNP">SNNP</option>
                          <option value="Somali">Somali</option>
                          <option value="Afar">Afar</option>
                          <option value="Benishangul-Gumuz">Benishangul-Gumuz</option>
                          <option value="Gambela">Gambela</option>
                          <option value="Harari">Harari</option>
                          <option value="Dire Dawa">Dire Dawa</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Special Instructions (Optional)
                      </label>
                      <textarea
                        name="instructions"
                        value={formData.instructions}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Any special delivery instructions..."
                      />
                    </div>
                    
                    <div className="mt-6 flex justify-end">
                      <button
                        type="submit"
                        className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        Continue to Payment
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Payment Information */}
                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white rounded-xl shadow-soft p-6"
                  >
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Information</h2>
                    
                    {/* Payment Method Selection */}
                    <div className="mb-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Method</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('card')}
                          className={`p-4 border-2 rounded-lg text-center transition-colors ${
                            paymentMethod === 'card' ? 'border-primary-500 bg-primary-50' : 'border-gray-200'
                          }`}
                        >
                          <CreditCard className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                          <span className="font-medium">Credit/Debit Card</span>
                        </button>
                        
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('mobile')}
                          className={`p-4 border-2 rounded-lg text-center transition-colors ${
                            paymentMethod === 'mobile' ? 'border-primary-500 bg-primary-50' : 'border-gray-200'
                          }`}
                        >
                          <div className="w-8 h-8 mx-auto mb-2 bg-primary-600 rounded text-white flex items-center justify-center">
                            M
                          </div>
                          <span className="font-medium">Mobile Payment</span>
                        </button>
                        
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('cod')}
                          className={`p-4 border-2 rounded-lg text-center transition-colors ${
                            paymentMethod === 'cod' ? 'border-primary-500 bg-primary-50' : 'border-gray-200'
                          }`}
                        >
                          <Truck className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                          <span className="font-medium">Cash on Delivery</span>
                        </button>
                      </div>
                    </div>

                    {/* Payment Details */}
                    {paymentMethod === 'card' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Card Number *
                          </label>
                          <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            placeholder="1234 5678 9012 3456"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Expiry Date *
                          </label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            placeholder="MM/YY"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            CVV *
                          </label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            placeholder="123"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            required
                          />
                        </div>
                        
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Cardholder Name *
                          </label>
                          <input
                            type="text"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            required
                          />
                        </div>
                      </div>
                    )}

                    {paymentMethod === 'mobile' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleInputChange}
                          placeholder="+251-9XX-XXX-XXX"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          required
                        />
                        <p className="text-sm text-gray-600 mt-2">
                          You will receive a payment request on your mobile device.
                        </p>
                      </div>
                    )}

                    {paymentMethod === 'cod' && (
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <p className="text-yellow-800">
                          <strong>Cash on Delivery:</strong> You will pay when your order is delivered. 
                          Please have the exact amount ready.
                        </p>
                      </div>
                    )}
                    
                    <div className="mt-6 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        Back to Shipping
                      </button>
                      <button
                        type="submit"
                        className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        Review Order
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Order Review */}
                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white rounded-xl shadow-soft p-6"
                  >
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Review Your Order</h2>
                    
                    {/* Order Items */}
                    <div className="space-y-4 mb-6">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">{item.name}</h4>
                            <p className="text-sm text-gray-600">From: {item.farmer}</p>
                            <p className="text-sm text-gray-600">Quantity: {item.quantity} kg</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-gray-900">{item.price * item.quantity} ETB</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Shipping Address */}
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-2">Shipping Address</h3>
                      <p className="text-gray-700">
                        {formData.firstName} {formData.lastName}<br />
                        {formData.address}<br />
                        {formData.city}, {formData.region}<br />
                        {formData.phone}
                      </p>
                    </div>

                    {/* Payment Method */}
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-2">Payment Method</h3>
                      <p className="text-gray-700">
                        {paymentMethod === 'card' && 'Credit/Debit Card'}
                        {paymentMethod === 'mobile' && 'Mobile Payment'}
                        {paymentMethod === 'cod' && 'Cash on Delivery'}
                      </p>
                    </div>
                    
                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        Back to Payment
                      </button>
                      <button
                        type="submit"
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        Place Order
                      </button>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-soft p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h3>
                
                <div className="space-y-3 mb-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {item.name} × {item.quantity}
                      </span>
                      <span className="font-medium">{item.price * item.quantity} ETB</span>
                    </div>
                  ))}
                </div>

                <hr className="my-4" />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">{subtotal} ETB</span>
                  </div>
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
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax (15%)</span>
                    <span className="font-medium">{tax} ETB</span>
                  </div>
                </div>

                <hr className="my-4" />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary-600">{total} ETB</span>
                </div>

                {/* Security Notice */}
                <div className="mt-4 flex items-center space-x-2 text-sm text-gray-600">
                  <Shield className="w-4 h-4" />
                  <span>Secure SSL encrypted checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;