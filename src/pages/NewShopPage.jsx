import { ArrowLeft, ShoppingCart } from "lucide-react";
import Button from "../components/ui/Button";
import Footer from "../components/Footer";
import ContactSection from "../sections/ContactSection";
import HorizontalScrollSection from "../components/HorizontalScrollSection";
import HorizontalImageScroll from "../components/HorizontalImageScroll";
import { Header } from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import items from '../components/jsonData/items.json'

export const NewShopPage = () => {

    const navigate = useNavigate();
    const handleViewDetailsClick = (itemId) => {
        navigate(`/ShopPage/item/${itemId}`);
    };


    return (
        <div className="bg-gray-900">
            <Header />
            <main>
                <div className="bg-gray-900 min-h-screen py-20">
                    <div className="container mx-auto text-center px-4">
                        <div className="relative w-full mb-16">
                            <img
                                src="https://cdn.buttercms.com/4Hc00sNYQVW7R4gKVwyT"
                                alt="Our Products"
                                className="w-full h-64 object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
                                    Our Products
                                </h1>
                            </div>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 gap-8">
                            {items.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10 flex flex-col items-center justify-between"
                                >
                                    <div className="mb-4">       
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full bg-white h-auto rounded-md object-cover"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-white mb-2">{item.name}</h3>
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
                                </div>
                            ))}
                        </div>
                        <Link to="/" className="mt-12 inline-flex items-center text-blue-500 hover:underline text-lg">
                            <ArrowLeft className="mr-2 w-5 h-5" />
                            Back to Home
                        </Link>
                    </div>
                </div>
                <HorizontalScrollSection />
                <HorizontalImageScroll />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};