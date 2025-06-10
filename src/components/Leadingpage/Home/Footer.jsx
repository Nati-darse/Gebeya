import { Link } from 'react-router-dom';
import {  FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-800 to-black text-white py-8 mt-10">
            <div className="container mx-auto text-center">
                <p className="text-sm mb-4">
                    &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
                </p>

                <div className="flex justify-center space-x-8 mb-6">
                    <Link to="/about" className="hover:underline text-lg font-medium transition-all duration-300">About Us</Link>
                    <Link to="/services" className="hover:underline text-lg font-medium transition-all duration-300">Services</Link>
                    <Link to="/contact" className="hover:underline text-lg font-medium transition-all duration-300">Contact</Link>
                </div>

                <div className="flex justify-center space-x-6">
                    <a href="#" className="text-2xl hover:text-blue-500 transition-all duration-300">
                        <FaFacebook />
                    </a>
                    <a href="https://x.com/home" className="text-2xl hover:text-blue-400 transition-all duration-300">
                        <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com/n.a.t.i_sha_229/" className="text-2xl hover:text-pink-500 transition-all duration-300">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;