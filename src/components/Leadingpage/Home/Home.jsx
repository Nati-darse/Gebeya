import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import FeaturedCategories from "./FeaturedCategories";
import FeaturedProducts from "./FeaturedProducts";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20"> {/* Add padding-top to account for fixed navbar */}
        <Hero />
        <FeaturedCategories />
        <FeaturedProducts />
        <WhyChooseUs />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Home;