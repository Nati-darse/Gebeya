import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Star, 
  Heart, 
  ShoppingCart, 
  Minus, 
  Plus, 
  MapPin, 
  Clock, 
  Shield, 
  Truck,
  ArrowLeft,
  Share2,
  MessageCircle,
  Phone
} from 'lucide-react';
import toast from 'react-hot-toast';
import Navbar from '../Leadingpage/Home/Navbar';
import Footer from '../Leadingpage/Home/Footer';

// Import images
import arabica from '../../assets/imgforcategories/arabica.jpg';
import avocado from '../../assets/imgforcategories/avocado.jpg';
import banana from '../../assets/imgforcategories/ban.jpeg';
import honey from '../../assets/imgforcategories/honey.jpg';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  // Mock product data - in real app, fetch from API
  const product = {
    id: 1,
    name: "Premium Arabica Coffee",
    price: 500,
    originalPrice: 650,
    images: [arabica, avocado, banana, honey],
    rating: 4.8,
    reviews: 124,
    location: "Sidama, Ethiopia",
    farmer: {
      name: "Bekele Farm",
      phone: "+251-911-123-456",
      rating: 4.9,
      yearsExperience: 15,
      totalProducts: 23
    },
    category: "Coffee & Tea",
    inStock: true,
    stockQuantity: 150,
    discount: 23,
    isOrganic: true,
    harvestDate: "2024-01-15",
    description: "Premium quality Arabica coffee beans grown in the highlands of Sidama, Ethiopia. These beans are carefully hand-picked and sun-dried to preserve their unique flavor profile. Known for their bright acidity, medium body, and complex flavor notes including citrus, chocolate, and floral undertones.",
    specifications: {
      weight: "1 kg",
      origin: "Sidama, Ethiopia",
      altitude: "1,800-2,200m",
      processing: "Washed",
      roastLevel: "Medium",
      caffeine: "1.2-1.5%"
    },
    nutritionalInfo: {
      calories: "2 per cup",
      protein: "0.3g",
      carbs: "0g",
      fat: "0g",
      antioxidants: "High"
    },
    shippingInfo: {
      freeShipping: true,
      estimatedDelivery: "2-3 days",
      packaging: "Eco-friendly",
      returnPolicy: "30 days"
    }
  };

  const relatedProducts = [
    { id: 2, name: "Ethiopian Coffee Beans", price: 390, image: honey },
    { id: 3, name: "Fresh Avocados", price: 65, image: avocado },
    { id: 4, name: "Organic Bananas", price: 60, image: banana },
  ];

  const reviews = [
    {
      id: 1,
      user: "Alemayehu T.",
      rating: 5,
      date: "2024-01-20",
      comment: "Excellent quality coffee! The flavor is amazing and delivery was fast.",
      verified: true
    },
    {
      id: 2,
      user: "Sara M.",
      rating: 4,
      date: "2024-01-18",
      comment: "Good coffee, but packaging could be better. Overall satisfied.",
      verified: true
    },
    {
      id: 3,
      user: "Daniel K.",
      rating: 5,
      date: "2024-01-15",
      comment: "Best coffee I've had in a long time. Will definitely order again!",
      verified: false
    }
  ];

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= product.stockQuantity) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    toast.success(`${quantity} kg of ${product.name} added to cart!`);
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast.success(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Product link copied to clipboard!');
    }
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
            <Link to={`/category/${product.category.toLowerCase()}`} className="hover:text-primary-600">
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>

          {/* Back Button */}
          <Link to="/products" className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Products</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.discount > 0 && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      -{product.discount}%
                    </span>
                  )}
                  {product.isOrganic && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Organic
                    </span>
                  )}
                </div>

                {/* Share Button */}
                <button
                  onClick={handleShare}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Thumbnail Images */}
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-primary-500' : 'border-gray-200'
                    }`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-primary-600 font-medium">{product.category}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-semibold">{product.rating}</span>
                    <span className="text-gray-500">({product.reviews} reviews)</span>
                  </div>
                </div>
                
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                
                {/* Price */}
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-3xl font-bold text-gray-900">{product.price} ETB</span>
                  {product.originalPrice > product.price && (
                    <span className="text-xl text-gray-500 line-through">{product.originalPrice} ETB</span>
                  )}
                  <span className="text-gray-600">/kg</span>
                </div>
              </div>

              {/* Farmer Info */}
              <div className="bg-white rounded-xl p-4 shadow-soft">
                <h3 className="font-semibold text-gray-900 mb-2">Farmer Information</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{product.farmer.name}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{product.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{product.farmer.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center hover:bg-primary-200 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center hover:bg-primary-200 transition-colors">
                      <Phone className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="w-4 h-4 text-primary-600" />
                  <span>Harvested 5 days ago</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Shield className="w-4 h-4 text-primary-600" />
                  <span>Quality Guaranteed</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Truck className="w-4 h-4 text-primary-600" />
                  <span>Free Delivery</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                  <span>{product.stockQuantity} kg in stock</span>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="font-medium">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-2 hover:bg-gray-100 transition-colors"
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 font-medium">{quantity} kg</span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="p-2 hover:bg-gray-100 transition-colors"
                      disabled={quantity >= product.stockQuantity}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="text-sm text-gray-600">
                  Total: <span className="font-semibold text-gray-900">{product.price * quantity} ETB</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
                
                <button
                  onClick={handleWishlist}
                  className={`p-3 rounded-xl border-2 transition-colors ${
                    isWishlisted
                      ? 'border-red-500 bg-red-50 text-red-500'
                      : 'border-gray-300 hover:border-red-500 hover:text-red-500'
                  }`}
                >
                  <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8">
                {['description', 'specifications', 'reviews', 'shipping'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${
                      activeTab === tab
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            <div className="py-8">
              {activeTab === 'description' && (
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed">{product.description}</p>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Product Specifications</h3>
                    <dl className="space-y-2">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <dt className="text-gray-600 capitalize">{key}:</dt>
                          <dd className="font-medium text-gray-900">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Nutritional Information</h3>
                    <dl className="space-y-2">
                      {Object.entries(product.nutritionalInfo).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <dt className="text-gray-600 capitalize">{key}:</dt>
                          <dd className="font-medium text-gray-900">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">Customer Reviews</h3>
                    <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                      Write a Review
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <div key={review.id} className="bg-white rounded-lg p-6 shadow-soft">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-gray-900">{review.user}</span>
                            {review.verified && (
                              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                Verified Purchase
                              </span>
                            )}
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        
                        <div className="flex items-center space-x-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'shipping' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Shipping Information</h3>
                    <dl className="space-y-2">
                      {Object.entries(product.shippingInfo).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <dt className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</dt>
                          <dd className="font-medium text-gray-900">
                            {typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Delivery Areas</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Addis Ababa - Same day delivery</li>
                      <li>• Major cities - 1-2 days</li>
                      <li>• Regional areas - 2-3 days</li>
                      <li>• Remote areas - 3-5 days</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="bg-white rounded-xl shadow-soft hover:shadow-medium transition-shadow overflow-hidden"
                >
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                    <p className="text-primary-600 font-bold">{relatedProduct.price} ETB/kg</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;