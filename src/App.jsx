import React from "react";

import { BrowserRouter as Router, Route, Routes ,Link } from "react-router-dom";
import Registration from "./Components/Registration/Registration";
import Signup from "./Components/Registration/Signup";
import Signin from "./Components/Registration/Login";
import logo from "./assets/logo for Gebeya.jpg";
import About from "./Components/Leadingpage/About";
import Home from "./Components/Leadingpage/Home/Home";
import Blog from "./Components/Leadingpage/Blog";
import Contact from './Components/Leadingpage/Contact'
import TermsAndConditions from './Components/Registration/TermsAndCondition'
import ProductListing from "./Components/Categories/ProductListing";



const App = () => {
  return (
    <Router>
      <div className="bg-[white-green] min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup logo={logo} />} />
          <Route path="/signin" element={<Signin logo={logo} />} />
          <Route path="/about" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path ="/Contact" element={<Contact/>} />
          <Route path="/terms" element={<TermsAndConditions />}/>
          <Route path ='/products' element={< ProductListing/>}/>
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
