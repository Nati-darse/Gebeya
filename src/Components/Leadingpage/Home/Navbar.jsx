import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for mobile menu
import logo from "../../../assets/logo for Gebeya.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4 shadow-md">
      {/* Top Heading */}
      <h1 className="text-green-600 text-center mb-2 text-lg md:text-2xl font-bold italic">
        🌿 HERE, YOU CAN FIND EVERYTHING YOU WANT! 🌿
      </h1>
      <hr />

      <div className="flex items-center justify-between py-3">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Gebeya Marketplace Logo" className="h-12 w-24" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 text-green-700 font-semibold text-lg">
          <Link to="/" className="hover:text-green-500 transition duration-200">
            Home
          </Link>
          <Link to="/about" className="hover:text-green-500 transition duration-200">
            About
          </Link>
          <Link to="/blog" className="hover:text-green-500 transition duration-200">
            Blog
          </Link>
          <Link to="/contact" className="hover:text-green-500 transition duration-200">
            Contact Us
          </Link>
        </div>

        {/* Right Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link to="/signin">
            <button className="border border-gray-400 px-6 py-2 rounded-lg text-white bg-green-600 hover:bg-green-700 font-bold transition duration-300">
              Log In
            </button>
          </Link>
          <Link to="/signup">
            <button className="border border-gray-400 px-6 py-2 rounded-lg bg-green-600 text-white font-bold hover:bg-green-700 transition duration-300">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-green-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Links (Dropdown) */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-white py-4 space-y-4 border-t">
          <Link to="/" className="text-green-700 text-lg hover:text-green-500" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="text-green-700 text-lg hover:text-green-500" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/blog" className="text-green-700 text-lg hover:text-green-500" onClick={() => setIsOpen(false)}>
            Blog
          </Link>
          <Link to="/contact" className="text-green-700 text-lg hover:text-green-500" onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>
          <Link to="/signin">
            <button className="border border-gray-400 px-6 py-2 w-full rounded-lg text-white  bg-green-600 hover:bg-green-700 font-bold hover:text-white transition duration-300">
              Log In
            </button>
          </Link>
          <Link to="/signup">
            <button className="border border-gray-400 px-6 py-2 w-full rounded-lg bg-green-600 font-bold text-white hover:bg-green-700 transition duration-300">
              Sign Up
            </button>
          </Link>
        </div>
      )}

      <hr />
    </nav>
  );
};

export default Navbar;
