import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // optional icons library

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="py-1 bg-white/10 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
            <div className="container mx-auto flex justify-between items-center px-4">
                <Link to="/" className="text-2xl font-bold text-white">
                    <img
                        src='https://www.delanobats.com/_next/image?url=%2Fdb.webp&w=128&q=75'
                        alt='Delano'
                        className="w-auto h-10" //  height to 8 and width to auto
                    />
                </Link>
                <nav className="hidden md:block">
                    <ul className="flex space-x-6">
                        <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                        <li><a href="#shop" className="text-gray-300 hover:text-white transition-colors">Shop</a></li>
                        <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                        <li><a href="#blog" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
                    </ul>
                </nav>

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden px-4 pb-4">
                    <ul className="flex flex-col space-y-2">
                        <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                        <li><a href="#shop" className="text-gray-300 hover:text-white transition-colors">Shop</a></li>
                        <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                        <li><a href="#blog" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
                    </ul>
                </div>
            )}
        </header>
    );
};
