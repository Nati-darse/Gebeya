import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

// Import components
import Registration from "./components/Registration/Registration";
import Signup from "./components/Registration/Signup";
import Signin from "./components/Registration/Login";
import About from "./components/Leadingpage/About";
import Home from "./components/Leadingpage/Home/Home";
import Blog from "./components/Leadingpage/Blog";
import Contact from './components/Leadingpage/Contact';
import TermsAndConditions from './components/Registration/TermsAndCondition';
import ProductListing from "./components/Categories/ProductListing";
import ProductDetail from "./components/Categories/ProductDetail";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import UserProfile from "./components/User/UserProfile";
import WholesalerDashboard from "./components/Wholesaler/WholesalerDashboard";
import SearchResults from "./components/Search/SearchResults";
import CategoryPage from "./components/Categories/CategoryPage";

// Import assets
import logo from "./assets/logo for Gebeya.jpg";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              theme: {
                primary: '#22c55e',
                secondary: 'black',
              },
            },
          }}
        />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup logo={logo} />} />
          <Route path="/signin" element={<Signin logo={logo} />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/wholesaler-dashboard" element={<WholesalerDashboard />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;