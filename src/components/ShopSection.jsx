import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button'; // Assuming your Button component is in the same directory
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Placeholder images (replace with your actual image URLs)
const itemImages = [
    './bat.jpg',
    './bat2.jpg',
    './bat3.jpg',
    './bat4.jpg',
    './bat5.jpg',
    './bat6.jpg',
];

// Animation variants
const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
};

const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
};

// Item Data (replace with your actual data)
const items = [
    { id: 1, name: 'Pro Elite Maple Bat', price: 179.99, image: itemImages[0] },
    { id: 2, name: 'Classic Ash Wood Bat', price: 129.99, image: itemImages[1] },
    { id: 3, name: 'Power Drive Alloy Bat', price: 229.99, image: itemImages[2] },
    { id: 4, name: 'Junior League Maple', price: 99.99, image: itemImages[3] },
    { id: 5, name: 'Big Barrel Alloy Pro', price: 249.99, image: itemImages[4] },
    { id: 6, name: 'Custom Pro Series Bat', price: 299.99, image: itemImages[5] },
];

const ShopSection = () => {
    const navigate = useNavigate();

    const handleShopMoreClick = () => {
        navigate('/ShopPage');
    };

    const handleViewDetailsClick = (itemId) => {
        navigate(`/ShopPage/item/${itemId}`); 
    };


    return (
        <section id="shop" className="py-20 bg-gradient-to-br from-gray-900 to-black">
            <div className="container mx-auto text-center px-4">
                <motion.h2
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-4xl font-extrabold text-white mb-12 tracking-tight"
                >
                    Our Latest Bats
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {items.slice(0, 4).map((item) => (  //show only 4
                        <motion.div
                            key={item.id}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-white/20
                                       transition-all duration-300 hover:scale-105 
                                       hover:shadow-purple-500/30
                                       flex flex-col items-center justify-between"
                        >
                            <div className="mb-6">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full bg-white h-64 object-cover rounded-xl mb-4
                                               transition-transform duration-300 hover:scale-105"
                                />
                                <h3 className="text-2xl font-semibold text-white text-center mt-2">{item.name}</h3>
                            </div>
                            <p className="text-lg font-medium text-gray-300 text-center mb-6">
                                Price: <span className="text-yellow-400">${item.price.toFixed(2)}</span>
                            </p>
                            <button
                                className="w-full inline-flex items-center justify-center bg-blue-500 text-blue-500 px-6 py-3 rounded-md hover:bg-blue-600 transition-colors" //Added styling
                                onClick={() => handleViewDetailsClick(item.id)}
                            >
                                <ShoppingCart className="w-6 h-6 mr-2" />
                                View Details
                            </button>
                        </motion.div>
                    ))}
                </div>
                <div className="mt-16">
                    <Button
                        variant="outline"
                        size="lg"
                        className="border border-gray-300 text-gray-800 hover:bg-gray-100 text-blue-500 border-gray-500 hover:bg-white/10 hover:border-white transition-colors text-xl px-8 py-3"
                        onClick={handleShopMoreClick}
                    >
                        Explore More Bats
                    </Button>
                </div>
            </div>
        </section>
    );
};        


export default ShopSection;
