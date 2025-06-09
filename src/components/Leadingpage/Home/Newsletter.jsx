import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, Gift, Bell, Truck } from 'lucide-react';
import toast from 'react-hot-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      toast.success('Successfully subscribed to our newsletter!');
      setEmail('');
    }, 1000);
  };

  const benefits = [
    {
      icon: Gift,
      title: "Exclusive Offers",
      description: "Get special discounts and early access to new products"
    },
    {
      icon: Bell,
      title: "Fresh Updates",
      description: "Be the first to know about seasonal produce and harvest updates"
    },
    {
      icon: Truck,
      title: "Delivery Alerts",
      description: "Receive notifications about delivery schedules in your area"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Stay Connected with
              <span className="text-secondary-300"> Fresh Updates</span>
            </h2>
            <p className="text-xl text-primary-100 leading-relaxed">
              Join our community of food lovers and get the latest news about fresh produce, 
              seasonal offers, and farmer stories delivered to your inbox.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-primary-100 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </motion.div>

          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            {!isSubscribed ? (
              <>
                <div className="flex items-center justify-center space-x-2 mb-6">
                  <Mail className="w-6 h-6 text-secondary-300" />
                  <h3 className="text-2xl font-bold">Subscribe to Our Newsletter</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary-400"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
                
                <p className="text-primary-100 text-sm mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-primary-100">
                  You've successfully subscribed to our newsletter. 
                  Check your email for a welcome message!
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-center"
          >
            <p className="text-primary-100">
              Join <span className="font-bold text-secondary-300">5,000+</span> subscribers 
              who get fresh updates weekly
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;