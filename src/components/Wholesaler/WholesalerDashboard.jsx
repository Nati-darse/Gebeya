import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Package, 
  DollarSign, 
  TrendingUp, 
  Users, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  BarChart3,
  Calendar,
  MapPin
} from 'lucide-react';
import toast from 'react-hot-toast';
import Navbar from '../Leadingpage/Home/Navbar';
import Footer from '../Leadingpage/Home/Footer';

// Import images
import arabica from '../../assets/imgforcategories/arabica.jpg';
import avocado from '../../assets/imgforcategories/avocado.jpg';
import honey from '../../assets/imgforcategories/honey.jpg';
import tomato from '../../assets/imgforcategories/tomato.jpg';

const WholesalerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showAddProduct, setShowAddProduct] = useState(false);

  // Mock data
  const stats = {
    totalProducts: 24,
    totalSales: 45600,
    monthlyRevenue: 12300,
    activeOrders: 8
  };

  const products = [
    {
      id: 1,
      name: "Premium Arabica Coffee",
      price: 500,
      stock: 150,
      sold: 45,
      image: arabica,
      status: 'active',
      category: 'Coffee & Tea'
    },
    {
      id: 2,
      name: "Fresh Avocados",
      price: 65,
      stock: 200,
      sold: 120,
      image: avocado,
      status: 'active',
      category: 'Fruits & Vegetables'
    },
    {
      id: 3,
      name: "Pure Wild Honey",
      price: 430,
      stock: 50,
      sold: 25,
      image: honey,
      status: 'active',
      category: 'Honey & Bee Products'
    },
    {
      id: 4,
      name: "Fresh Tomatoes",
      price: 55,
      stock: 0,
      sold: 80,
      image: tomato,
      status: 'out_of_stock',
      category: 'Fruits & Vegetables'
    }
  ];

  const recentOrders = [
    {
      id: 'ORD-001',
      customer: 'Alemayehu T.',
      product: 'Premium Arabica Coffee',
      quantity: 5,
      total: 2500,
      status: 'pending',
      date: '2024-01-20'
    },
    {
      id: 'ORD-002',
      customer: 'Sara B.',
      product: 'Fresh Avocados',
      quantity: 10,
      total: 650,
      status: 'shipped',
      date: '2024-01-19'
    },
    {
      id: 'ORD-003',
      customer: 'Daniel H.',
      product: 'Pure Wild Honey',
      quantity: 2,
      total: 860,
      status: 'delivered',
      date: '2024-01-18'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'out_of_stock':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleAddProduct = () => {
    setShowAddProduct(true);
  };

  const handleEditProduct = (productId) => {
    toast.success('Edit product functionality coming soon!');
  };

  const handleDeleteProduct = (productId) => {
    toast.success('Product deleted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="bg-white rounded-xl shadow-soft p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Wholesaler Dashboard</h1>
                <p className="text-gray-600">Manage your products and track your sales</p>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>Sidama, Ethiopia</span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-soft p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Products</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalProducts}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl shadow-soft p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Sales</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalSales.toLocaleString()} ETB</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-soft p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Monthly Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.monthlyRevenue.toLocaleString()} ETB</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl shadow-soft p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Orders</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.activeOrders}</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Tabs */}
          <div className="bg-white rounded-xl shadow-soft mb-8">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                {[
                  { id: 'overview', label: 'Overview', icon: BarChart3 },
                  { id: 'products', label: 'My Products', icon: Package },
                  { id: 'orders', label: 'Orders', icon: Calendar }
                ].map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors ${
                        activeTab === tab.id
                          ? 'border-primary-500 text-primary-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-xl shadow-soft p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl font-bold text-gray-900 mb-6">Sales Overview</h2>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Best Selling Product</h3>
                    <p className="text-primary-600 font-medium">Fresh Avocados</p>
                    <p className="text-sm text-gray-600">120 kg sold this month</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Average Order Value</h3>
                    <p className="text-primary-600 font-medium">1,340 ETB</p>
                    <p className="text-sm text-gray-600">+12% from last month</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Customer Satisfaction</h3>
                    <p className="text-primary-600 font-medium">4.8/5.0</p>
                    <p className="text-sm text-gray-600">Based on 45 reviews</p>
                  </div>
                </div>

                {/* Recent Activity */}
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">New order received for Premium Arabica Coffee</span>
                    <span className="text-sm text-gray-500 ml-auto">2 hours ago</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Product "Fresh Avocados" stock updated</span>
                    <span className="text-sm text-gray-500 ml-auto">5 hours ago</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-700">Low stock alert for Pure Wild Honey</span>
                    <span className="text-sm text-gray-500 ml-auto">1 day ago</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Products Tab */}
            {activeTab === 'products' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">My Products</h2>
                  <button
                    onClick={handleAddProduct}
                    className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Product</span>
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Product</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Category</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Price</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Stock</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Sold</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={product.id} className="border-b border-gray-100">
                          <td className="py-3 px-4">
                            <div className="flex items-center space-x-3">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-12 h-12 object-cover rounded-lg"
                              />
                              <span className="font-medium text-gray-900">{product.name}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-gray-600">{product.category}</td>
                          <td className="py-3 px-4 font-medium text-gray-900">{product.price} ETB/kg</td>
                          <td className="py-3 px-4 text-gray-600">{product.stock} kg</td>
                          <td className="py-3 px-4 text-gray-600">{product.sold} kg</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                              {product.status.replace('_', ' ').toUpperCase()}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => handleEditProduct(product.id)}
                                className="text-blue-600 hover:text-blue-800 transition-colors"
                              >
                                <Edit className="w-4 h-4" />
                              </button>
                              <button className="text-gray-600 hover:text-gray-800 transition-colors">
                                <Eye className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteProduct(product.id)}
                                className="text-red-600 hover:text-red-800 transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Orders</h2>
                
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900">Order #{order.id}</h3>
                          <p className="text-sm text-gray-600">Customer: {order.customer}</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                            {order.status.toUpperCase()}
                          </span>
                          <p className="text-lg font-bold text-gray-900 mt-1">{order.total} ETB</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{order.product} × {order.quantity} kg</span>
                        <span>{new Date(order.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WholesalerDashboard;