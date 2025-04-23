import React from 'react';
import { motion } from 'framer-motion';
import Input from '../components/ui/Input'; // Assuming these are your UI components
import {
    Mail,
    MapPin,
    Phone,
    Info,       // For About Us
    ShoppingCart, // For Shop
    BookOpen,     // For Blog
} from 'lucide-react';
import { cardVariants, sectionVariants } from '../App';

const batLogo = 'https://www.delanobats.com/_next/image?url=https%3A%2F%2Fcdn.buttercms.com%2FJse9bneQZaYNFFQHOsDg&w=1200&q=75'; 

const ContactSection = () => {
    return (
        <section id="contact">
            <div className="bg-[#db3d21] py-12">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">

                        <div className="md:w-1/3">
                            <h3 className="text-white font-bold text-lg md:text-xl uppercase tracking-wide">
                                Stay Up To Date
                            </h3>
                        </div>

                        <div className="flex w-full md:w-2/3 max-w-xl">
                            <Input
                                type="email"
                                placeholder="Enter Your Email"
                                className="flex-1 px-4 bg-gray-800 py-2 text-white placeholder-gray-400 outline-none"
                            />

                            <button className="bg-black text-black px-6 py-2 font-semibold hover:bg-gray-800 transition-colors">
                                Subscribe
                            </button>
                        </div>

                    </div>
                </div>
            </div>


            <div className="py-20 bg-gray-900">
                <div className="container mx-auto px-4">

                    <div className="grid md:grid-cols-3 gap-12 items-start">
                        {/* Left Column: Quick Links */}
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2">
                                    <Info className="w-5 h-5 text-blue-400" />
                                    <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                                        About Us
                                    </a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <ShoppingCart className="w-5 h-5 text-green-400" />
                                    <a href="#shop" className="text-gray-300 hover:text-white transition-colors">
                                        Shop
                                    </a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-purple-400" />
                                    <a href="#blog" className="text-gray-300 hover:text-white transition-colors">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Center Column: Bat Logo */}
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex justify-center"
                        >
                            <img src={batLogo} alt="Delano Bats Logo" className="w-90 h-auto rounded-full" />
                        </motion.div>

                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-6 text-right md:text-right md:ml-auto"
                        >
                            <h3 className="text-xl font-semibold text-white">Contact Information</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center justify-end gap-2">
                                    <MapPin className="w-5 h-5 text-red-400" />
                                    <span className="text-gray-300">Address: Delano, MN</span>
                                </li>
                                <li className="flex items-center justify-end gap-2">
                                    <Mail className="w-5 h-5 text-blue-400" />
                                    <span className="text-gray-300">Email: sales@delanobats.com</span>
                                </li>
                            </ul>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
