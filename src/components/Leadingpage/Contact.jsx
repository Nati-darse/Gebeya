import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 bg-gray-50 text-gray-900">
            {/* Page Title */}
            <motion.h1 
                className="text-4xl md:text-5xl font-extrabold text-center text-[#007A33] mb-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Contact Us
            </motion.h1>

            {/* Contact Form & Info Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <motion.section 
                    className="bg-white p-8 rounded-xl shadow-lg"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl text-[#007A33] font-semibold mb-4">Get in Touch</h2>
                    <p className="text-gray-600 mb-6">Have questions? Fill out the form below, and we'll get back to you shortly.</p>

                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Your Email"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                placeholder="Your Message"
                                rows="4"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                                required
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-green-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-500 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.section>

                {/* Contact Information */}
                <motion.section 
                    className="bg-white p-8 rounded-xl shadow-lg"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl text-[#007A33] font-semibold mb-4">Our Contact Information</h2>
                    <p className="text-gray-600 mb-6">Reach out to us via email, phone, or visit our location.</p>

                    <div className="space-y-4 text-lg">
                        <p><strong>Email:</strong> <a href="mailto:gebeya@gmail.com" className="text-blue-600 hover:underline">gebeya@gmail.com</a></p>
                        <p><strong>Phone:</strong> <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a></p>
                        <p><strong>Address:</strong> Megenagna, Addis Ababa, Ethiopia</p>
                    </div>

                    {/* Map Placeholder */}
                    <div className="mt-6">
                        <iframe
                            className="w-full h-56 rounded-lg"
                            src="https://www.openstreetmap.org/export/embed.html?bbox=38.763611,9.035,38.807778,9.075"
                            title="Our Location"
                        ></iframe>
                    </div>
                </motion.section>
            </div>

            {/* CTA Section */}
            <motion.section 
                className="bg-green-600 text-white p-12 rounded-xl text-center mt-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                <h2 className="text-3xl font-bold mb-3">We'd Love to Hear From You!</h2>
                <p className="text-lg mb-5">Feel free to reach out with any questions or feedback.</p>
                <a href="mailto:gebeya@gmail.com" className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                    Email Us
                </a>
            </motion.section>
        </div>
    );
};

export default Contact;