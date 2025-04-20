import { ArrowLeft, ShoppingCart } from "lucide-react";
import Button from "./ui/Button";
import Footer from "./Footer";
import ContactSection from "./ContactSection";
import HorizontalScrollSection from "./HorizontalScrollSection";
import HorizontalImageScroll from "./HorizontalImageScroll";
import { Header } from "./Header";
import { Link } from "react-router-dom";

const itemImages = [
    './bat.jpg',
    './bat2.jpg',
    './bat3.jpg',
    './bat4.jpg',
    './bat5.jpg',
    './bat6.jpg',
];

const items = [
    { id: 1, name: 'Baseball wood bats', price: 49.99, image: itemImages[0] },
    { id: 2, name: 'Wood Baseball Bats', price: 79.99, image: itemImages[1] },
    { id: 3, name: 'Marucci Pro AP5 Maple Wood Baseball Bat ', price: 99.99, image: itemImages[2] },
    { id: 4, name: 'Victus Pro Reserve JC24', price: 29.99, image: itemImages[3] },
    { id: 5, name: 'Victus V-Cut Hard Maple Wood Baseball', price: 129.99, image: itemImages[4] },
    { id: 6, name: 'Rawlings Adirondack R271 Maple Wood Baseball Bat', price: 69.99, image: itemImages[5] },
];

export const NewShopPage = () => {
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
                                            className="w-full h-auto rounded-md object-cover"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-white mb-2">{item.name}</h3>
                                    <p className="text-gray-300 mb-4 text-lg">Price: ${item.price.toFixed(2)}</p>
                                    <button
                                        variant="default"
                                        size="lg"
                                        className="bg-blue-500 hover:bg-blue-600 text-black px-8 py-3 rounded-full transition-colors flex items-center gap-2"
                                    >
                                        <ShoppingCart className="w-5 h-5" />
                                        Add to Cart
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