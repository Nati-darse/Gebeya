import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 bg-gray-50 text-gray-900">
            {/* Page Title */}
            <motion.h1 
                className="text-4xl md:text-5xl font-extrabold text-center text-[#002D62] mb-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                About Us
            </motion.h1>
            
            {/* Mission Section */}
            <motion.section 
                className="mb-10"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-2xl md:text-3xl font-semibold text-[#002D62] mb-3">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Our mission is to promote a marketing system equitable for the country’s development with specific solutions.
                </p>
            </motion.section>

            {/* Vision Section */}
            <motion.section 
                className="mb-10"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h2 className="text-2xl md:text-3xl font-semibold text-[#002D62] mb-3">Our Vision</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Our vision is to advance the market for agricultural products by providing a simple and fast system. 
                    We aim to empower every farmer and wholesaler of agricultural products, as agriculture is the base 
                    of our country's economy. We envision an Ethiopia where the marketing system is simple and preferred 
                    regardless of technological advancements.
                </p>
            </motion.section>

            {/* Values Section */}
            <motion.section 
                className="mb-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <h2 className="text-2xl md:text-3xl font-semibold text-[#002D62] mb-3">Our Values</h2>
                <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
                    <li><strong>Transparency:</strong> We believe in openness and transparency in all our operations.</li>
                    <li><strong>Innovation:</strong> We are committed to continuous improvement and creativity.</li>
                    <li><strong>Effectiveness:</strong> We are passionate about serving our users efficiently.</li>
                </ul>
            </motion.section>

            {/* Meet the Team Section */}
            <motion.section 
                className="mb-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <h2 className="text-2xl md:text-3xl font-semibold text-[#002D62] mb-6 text-center">Meet the Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {["Mr X", "Mr Y", "Mr Z"].map((name, index) => (
                        <motion.div 
                            key={index} 
                            className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition-shadow duration-300"
                            whileHover={{ scale: 1.05 }}
                        >
                            <h3 className="font-semibold text-xl md:text-2xl text-[#002D62]">{name}</h3>
                            <p className="text-gray-700">{index === 0 ? "Founder & CEO" : index === 1 ? "Chief Operating Officer" : "Head of Marketing"}</p>
                            <p className="text-gray-600 text-sm md:text-base mt-2">
                                {index === 0 ? "Passionate about delivering quality and innovation." :
                                index === 1 ? "Ensures our operations run smoothly and efficiently." :
                                "Dedicated to connecting our brand with customers."}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Contact Section */}
            <motion.section 
                className="mb-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                <h2 className="text-2xl md:text-3xl font-semibold text-[#002D62] mb-3">Contact Us</h2>
                <p className="text-lg text-gray-700">
                    If you have any questions or would like to learn more about us, feel free to 
                    <a href="mailto:gebeya@gmail.com" className="text-blue-600 hover:underline font-medium"> email us</a>.
                </p>
            </motion.section>
            
            {/* Footer */}
            <motion.footer 
                className="text-center mt-10 text-gray-600 text-sm md:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <p>&copy; 2024 Gebeya Agricultural Market. All rights reserved.</p>
            </motion.footer>
        </div>
    );
};

export default About;
