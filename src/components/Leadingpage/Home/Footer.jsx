import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  Leaf,
  ArrowRight
} from 'lucide-react';
import logo from '../../../assets/logo for Gebeya.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Story', href: '/about' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Blog', href: '/blog' }
    ],
    products: [
      { name: 'All Products', href: '/products' },
      { name: 'Fruits & Vegetables', href: '/category/fruits-vegetables' },
      { name: 'Grains & Cereals', href: '/category/grains-cereals' },
      { name: 'Coffee & Tea', href: '/category/coffee-tea' },
      { name: 'Dairy Products', href: '/category/dairy' }
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Shipping Info', href: '#' },
      { name: 'Returns', href: '#' },
      { name: 'FAQ', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Refund Policy', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="Gebeya Logo" className="h-12 w-20 object-contain" />
              <div>
                <h3 className="text-xl font-bold text-white">Gebeya</h3>
                <p className="text-sm text-gray-400">Agricultural Marketplace</p>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Connecting Ethiopian farmers with urban markets, delivering fresh, 
              quality agricultural products directly to your doorstep.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">Megenagna, Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">+251-911-123-456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">hello@gebeya.com</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Products</h4>
              <ul className="space-y-2">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold text-white mb-2">Stay Updated</h4>
              <p className="text-gray-300">Get the latest news about fresh produce and special offers</p>
            </div>
            <div className="flex items-center space-x-2">
              <Leaf className="w-5 h-5 text-primary-400" />
              <span className="text-gray-300">Fresh • Organic • Local</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Gebeya Agricultural Marketplace. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`text-gray-400 ${social.color} transition-colors duration-200`}
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;