import React from "react";

import Navbar from "./Navbar";
import Slider from "./Slider";
import Cards from "./cards";
import Agents from './Agents';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />  
      <Cards />
      <Agents />
      <Footer/>
      
    </>
  );
};
export default Home;
