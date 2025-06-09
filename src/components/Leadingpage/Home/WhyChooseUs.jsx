import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Truck, Users, Leaf, Clock, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "Every product is carefully inspected and quality-checked before delivery",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable delivery across Ethiopia with real-time tracking",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Users,
      title: "Direct from Farmers",
      description: "Connect directly with local farmers and support rural communities",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Leaf,
      title: "Fresh & Organic",
      description: "Sustainably grown, pesticide-free products harvested at peak freshness",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer service to assist with your orders",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Award,
      title: "Best Prices",
      description: "Competitive pricing with no middleman markup - fair for all",
      color: "text-red-600",
      bgColor: "bg-red-50"
    }
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
            Why Choose
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
              {" "}Gebeya?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're committed to connecting you with the finest agricultural products while supporting Ethiopian farmers
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-500"
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 ${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-200 rounded-2xl transition-colors duration-300" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 bg-primary-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Trusted Farmers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">10K+</div>
              <div className="text-primary-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">1000+</div>
              <div className="text-primary-100">Products Available</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">8</div>
              <div className="text-primary-100">Regions Covered</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;