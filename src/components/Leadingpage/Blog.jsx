import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 bg-gray-50 text-gray-900">
            {/* Page Title */}
            <motion.h1 
                className="text-4xl md:text-5xl font-extrabold text-center text-[#007A33] mb-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Blog & News
            </motion.h1>

            {/* Blog Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Main Blog Posts */}
                <div className="md:col-span-2 space-y-8">
                    {[
                        { title: "Available Now", date: "Oct 1, 2024", description: "Abebe eats Beso which is made from barley. You can get it by using our platform now." },
                        { title: "New Product", date: "Sept 15, 2024", description: "Discover our latest product innovation! Check it out on our platform." },
                        { title: "New Region Joined Us", date: "Sept 1, 2024", description: "A new region is now part of our platform, expanding our agricultural market reach." },
                    ].map((post, index) => (
                        <motion.div 
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <h2 className="text-2xl font-semibold text-[#007A33] mb-2">{post.title}</h2>
                            <p className="text-gray-500 text-sm mb-3">Published on: <span className="font-semibold">{post.date}</span></p>
                            <p className="text-gray-700">{post.description} <a href="#" className="text-blue-600 hover:underline">Read more</a></p>
                        </motion.div>
                    ))}
                </div>

                {/* Sidebar */}
                <aside className="bg-white p-6 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-semibold text-[#007A33] mb-4">Categories</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {["Agriculture", "Marketing", "Sustainability", "Technology"].map((category, index) => (
                            <li key={index}>
                                <a href="#" className="text-blue-600 hover:underline">{category}</a>
                            </li>
                        ))}
                    </ul>

                    <h2 className="text-2xl font-semibold text-[#007A33] mt-6 mb-4">Recent Posts</h2>
                    <ul className="space-y-2 text-gray-700">
                        {["Blog Post Title 1", "Blog Post Title 2", "Blog Post Title 3"].map((post, index) => (
                            <li key={index}>
                                <a href="#" className="text-blue-600 hover:underline">{post}</a>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>

            {/* Newsletter Subscription Section */}
            <motion.section 
                className="bg-green-600 text-white p-8 rounded-xl text-center mt-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Stay Updated!</h2>
                <p className="text-lg mb-5">Subscribe to our newsletter for the latest news and updates.</p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="p-3 rounded-lg text-gray-900 w-full sm:w-72 focus:ring focus:ring-green-400 outline-none"
                    />
                    <button className="bg-white text-green-600 px-5 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">Subscribe</button>
                </div>
            </motion.section>
        </div>
    );
};

export default Blog;