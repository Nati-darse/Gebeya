import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from "../../assets/logo for Gebeya.jpg";
import ban from "../../assets/imgforcategories/ban.jpeg";
import org from '../../assets/imgforcategories/nnn.jpeg';
import arabica from '../../assets/imgforcategories/arabica.jpg';
import barley from '../../assets/imgforcategories/barley.jpg';
import mango from '../../assets/imgforcategories/mango.jpg';
import wheat from '../../assets/imgforcategories/wheat.jpg';
import yogurt from '../../assets/imgforcategories/yogurt.jpg';
import teff from '../../assets/imgforcategories/teff.jpg';
import cabbage from '../../assets/imgforcategories/cabbage.jpg';
import cheese from '../../assets/imgforcategories/cheese.jpg';
import groundnuts from '../../assets/imgforcategories/groundnuts.jpg';
import butter from '../../assets/imgforcategories/butter.jpg';
import carrot from '../../assets/imgforcategories/carrot.jpg';
import beeswax from '../../assets/imgforcategories/beeswax.jpg';
import sorghum from '../../assets/imgforcategories/sorghum.jpg';
import garlic from '../../assets/imgforcategories/garlic.jpg';
import potato from '../../assets/imgforcategories/potato.jpg';
import papaya from '../../assets/imgforcategories/papaya.jpg';
import kale from '../../assets/imgforcategories/kale.png';
import maize from '../../assets/imgforcategories/maize.jpg';
import onion from '../../assets/imgforcategories/onion.jpg';
import honey from '../../assets/imgforcategories/honey.jpg';
import nigerseed from '../../assets/imgforcategories/nigerseed.jpg';
import sesameseed from '../../assets/imgforcategories/sesameseed.jpg';
import rice from '../../assets/imgforcategories/rice.webp';
import tomato from '../../assets/imgforcategories/tomato.jpg';
import sunflower from '../../assets/imgforcategories/sunflower.jpg';
import coffee from '../../assets/imgforcategories/coffee.jpg';
import tea from '../../assets/imgforcategories/tea.jpg';
import avocado from '../../assets/imgforcategories/avocado.jpg';

const products = [
  { id: 1, name: "Arabica Coffee | አረቢክ ቡና", category: "Coffee and Tea", price: "500", imageUrl: arabica },
  { id: 2, name: "Avocados | አቮካዶ", category: "Fruits and Vegetables", price: "65 ", imageUrl: avocado },
  { id: 3, name: "Bananas | ሙዝ", category: "Fruits and Vegetables", price: "60", imageUrl: ban },
  { id: 4, name: "Barley | ገብስ", category: "Cereal Grains", price: "129", imageUrl: barley },
  { id: 5, name: "Beeswax |", category: "Honey and Bee Products", price: "220 ", imageUrl: beeswax },
  { id: 6, name: "Butter |ቅቤ", category: "Dairy Products", price: "750", imageUrl: butter },
  { id: 7, name: "Cabbage |ጥቅል ጎመን", category: "Fruits and Vegetables", price: "25 ", imageUrl: cabbage },
  { id: 8, name: "Carrots | ካሮት ", category: "Fruits and Vegetables", price: "50", imageUrl: carrot },
  { id: 9, name: "Cheese | አይብ", category: "Dairy Products", price: "550", imageUrl: cheese },
  { id: 10, name: "Coffee | ቡና", category: "Coffee and Tea", price: "390 ", imageUrl: coffee },
  { id: 11, name: "Groundnuts(Peanuts) |ለውዝ", category: "Oil Seeds", price: "187", imageUrl: groundnuts },
  { id: 12, name: "Garlic | ነጭ ሽንኩርት", category: "Fruits and Vegetables", price: "210", imageUrl: garlic },
  { id: 13, name: "Honey | ማር", category: "Honey and Bee Products", price: "430", imageUrl: honey },
  { id: 14, name: "Kale |ጥቁር ጎመን", category: "Fruits and Vegetables", price: "90", imageUrl: kale },
  { id: 15, name: "Maize(corn) |በቆሎ", category: "Fruits and Vegetables", price: "130", imageUrl: maize },
  { id: 16, name: "Mangoes | ማንጎ", category: "Fruits and Vegetables", price: "160", imageUrl: mango },
  { id: 17, name: "Niger seed | ኑግ", category: "Oil Seeds", price: "330", imageUrl: nigerseed },
  { id: 18, name: "Onions |ቀይ ሽንኩርት", category: "Fruits and Vegetables", price: "105", imageUrl: onion },
  { id: 19, name: "Oranges | ብርቱካን ", category: "Fruits and Vegetables", price: "200 ", imageUrl: org },
  { id: 20, name: "Papayas | ፓፓያ ", category: "Fruits and Vegetables", price: "45 ", imageUrl: papaya },
  { id: 21, name: "Potatoes | ድንች", category: "Fruits and Vegetables", price: "35", imageUrl: potato },
  { id: 22, name: "Rice |ሩዝ", category: "Fruits and Vegetables", price: "127", imageUrl: rice },
  { id: 23, name: "Sesame seeds|ሰሊጥ", category: "Oil Seeds", price: "100", imageUrl: sesameseed },
  { id: 24, name: "Sorghum | ማሽላ", category: "Cereal Grains", price: "110", imageUrl: sorghum },
  { id: 25, name: "Sunflower seeds |ሱፍ", category: "Oil Seeds", price: "165", imageUrl: sunflower },
  { id: 26, name: "Tea (Herbal) |ሻይ ቅጠል", category: "Coffee and Tea", price: "70", imageUrl: tea },
  { id: 27, name: "Teff |ጤፍ", category: "Cereal Grains", price: "185", imageUrl: teff },
  { id: 28, name: "Tomatoes |ቲማቲም", category: "Fruits and Vegetables", price: "55", imageUrl: tomato },
  { id: 29, name: "Wheat |ስንዴ", category: "Cereal Grains", price: "115 ", imageUrl: wheat },
  { id: 30, name: "Yogurt |እርጎ", category: "Dairy Products", price: "190 ", imageUrl: yogurt },
];

const categories = [
  "Fruits and Vegetables",
  "Cereal Grains",
  "Dairy Products",
  "Oil Seeds",
  "Coffee and Tea",
  "Honey and Bee Products"
];

const priceRanges = [
  { label: "Under 100 ETB", max: 100 },
  { label: "100 - 200 ETB", min: 100, max: 200 },
  { label: "200 - 300 ETB", min: 200, max: 300 },
  { label: "300 - 400 ETB", min: 300, max: 400 },
  { label: "Above 400 ", min: 401 },
];

const ProductListing = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const handlePriceChange = (range) => {
    setSelectedPriceRanges(prev =>
      prev.includes(range) ? prev.filter(r => r !== range) : [...prev, range]
    );
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPrice = selectedPriceRanges.length === 0 || selectedPriceRanges.some(range => {
      const price = parseInt(product.price);
      if (range.min && range.max) {
        return price >= range.min && price < range.max;
      }
      if (range.max) {
        return price < range.max;
      }
      if (range.min) {
        return price > range.min;
      }
      return true;
    });

    return matchesCategory && matchesSearch && matchesPrice;
  });

  return (
    <div className="flex flex-col md:flex-row container mx-auto p-4">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-gray-100 p-4 rounded-lg shadow-md mb-4 md:mb-0">
        <h2 className="font-bold mb-4 text-lg">Categories</h2>
        <div className="overflow-x-auto">
          <ul className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <li key={category} className="flex items-center">
                <input
                  type="checkbox"
                  value={category}
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="mr-2"
                />
                <span className="text-sm md:text-base">{category}</span>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="font-bold mt-6 mb-4 text-lg">Price Range</h2>
        <ul>
          {priceRanges.map((range) => (
            <li key={range.label} className="flex items-center">
              <input
                type="checkbox"
                value={range.label}
                checked={selectedPriceRanges.includes(range)}
                onChange={() => handlePriceChange(range)}
                className="mr-2"
              />
              <span className="text-sm">{range.label}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-4">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <div className="flex items-center mb-4 sm:mb-0">
            <img src={logo} alt="Logo" className="h-14 w-24 mr-2" />
            <h1 className="text-2xl font-bold text-green-700">Agricultural Market</h1>
          </div>

          {/* Search Bar */}
          <div className="relative flex-grow mx-4">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products..."
              className="border border-gray-300 rounded-lg p-2 pl-10 pr-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
          </div>
        </header>

        <h6 className="text-lg mb-4">Different products from different regions of the country</h6>
        <hr className="font-bold shadow-md border-2" />

        {/* Product Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
              <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover mb-4 rounded-md" />
              <h2 className="text-lg font-semibold text-gray-700">{product.name}</h2>
              <p className="text-gray-500">{product.price} ETB/kg</p>
              <Link to={`/product/${product.id}`}>
                <button className="mt-2 bg-green-500 text-white py-2 px-4 rounded-md transition-colors hover:bg-green-600 w-full">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductListing;