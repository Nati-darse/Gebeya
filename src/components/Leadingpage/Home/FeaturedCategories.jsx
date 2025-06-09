import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Coffee, Wheat, Milk, Droplets, Flower } from 'lucide-react';

// Import images
import img1 from '../../../assets/Cereal.jpg';
import img2 from '../../../assets/friutes.jpg';
import img3 from '../../../assets/oil_seeds.jpg';
import img4 from '../../../assets/diary_products.jpg';
import img5 from '../../../assets/coffee.jpg';
import img6 from '../../../assets/imgforcategories/honey.jpg';

const FeaturedCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Cereal Grains",
      description: "Premium quality grains from Ethiopian highlands",
      image: img1,
      icon: Wheat,
      productCount: 45,
      color: "from-amber-400 to-orange-500",
      bgColor: "bg-amber-50",
      textColor: "text-amber-700"
    },
    {
      id: 2,
      name: "Fruits & Vegetables",
      description: "Fresh, organic produce harvested daily",
      image: img2,
      icon: Leaf,
      productCount: 120,
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-700"
    },
    {
      id: 3,
      name: "Oil Seeds",
      description: "Nutrient-rich seeds for healthy cooking",
      image: img3,
      icon: Droplets,
      productCount: 28,
      color: "from-yellow-400 to-amber-500",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-700"
    },
    {
      id: 4,
      name: "Dairy Products",
      description: "Fresh dairy from local farms",
      image: img4,
      icon: Milk,
      productCount: 35,
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700"
    },
    {
      id: 5,
      name: "Coffee & Tea",
      description: "World-renowned Ethiopian coffee beans",
      image: img5,
      icon: Coffee,
      productCount: 22,
      color: "from-brown-400 to-amber-600",
      bgColor: "bg-amber-50",
      textColor: "text-amber-800"
    },
    {
      id: 6,
      name: "Honey & Bee Products",
      description: "Pure, natural honey and bee products",
      image: img6,
      icon: Flower,
      productCount: 15,
      color: "from-orange-400 to-red-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700"
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
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50">
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
            Explore Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
              {" "}Categories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover fresh, high-quality agricultural products sourced directly from Ethiopian farmers across different regions
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-soft hover:shadow-large transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <div className={`absolute top-4 right-4 w-12 h-12 ${category.bgColor} rounded-full flex items-center justify-center shadow-md`}>
                    <IconComponent className={`w-6 h-6 ${category.textColor}`} />
                  </div>

                  {/* Product Count Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-semibold text-gray-700">
                      {category.productCount} products
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  {/* CTA Button */}
                  <Link
                    to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold group/link"
                  >
                    <span>Explore Category</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-200 rounded-2xl transition-colors duration-300" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link to="/products">
            <button className="group bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              View All Products
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCategories;