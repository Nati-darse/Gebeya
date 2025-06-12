import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/Cereal.jpg'; 
import img2 from '../../../assets/friutes.jpg';
import img3 from '../../../assets/oil_seeds.jpg';
import img4 from '../../../assets/diary_products.jpg';
import img5 from '../../../assets/coffee.jpg';
import img6 from '../../../assets/imgforcategories/honey.jpg';

const categories = [
  { name: "Cereal Grains", img: img1 },
  { name: "Fruits and Vegetables", img: img2 },
  { name: "Oil Seeds", img: img3 },
  { name: "Dairy Products", img: img4 },
  { name: "Coffee and Tea", img: img5 },
  { name: "Honey and Bee Products", img: img6 }
];

const Cards = () => {
  return (
    <div className="relative bg-gradient-to-r from-green-50 via-white to-green-50 py-16">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 bg-pattern opacity-30"></div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 justify-items-center relative z-10">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-lg border-2 overflow-hidden transform transition-transform duration-300 hover:scale-105 flex flex-col justify-between w-[280px] mx-auto h-[350px] hover:bg-gray-100"
          >
            {/* Decorative Image Shape (circle or custom shape) */}
            <div className="relative w-full h-56 overflow-hidden rounded-full shadow-lg transform transition-all duration-300 hover:scale-105">
              <img 
                src={category.img} 
                alt={category.name} 
                className="object-cover w-full h-full rounded-full transform transition-all duration-300 hover:rotate-6"
              />
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-center text-green-600 text-xl font-semibold mb-4 transition duration-300 hover:text-green-800">
                {category.name}
              </h3>
              <Link to='/products'>
                <button className="bg-green-600 text-white px-6 py-2 rounded-full border-2 border-green-600 hover:bg-transparent hover:text-green-600 font-bold transition-all duration-300 mx-auto mt-4">
                  Get more
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;