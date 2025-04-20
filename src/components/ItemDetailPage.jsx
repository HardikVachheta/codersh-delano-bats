import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, XCircle, ArrowLeft } from 'lucide-react';
import items from './jsonData/items.json';
import { Header } from './Header';
import HorizontalScrollSection from './HorizontalScrollSection';
import HorizontalImageScroll from './HorizontalImageScroll';
import ContactSection from './ContactSection';
import Footer from './Footer';

const ItemDetailPage = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const found = items.find((i) => i.id === parseInt(id));
        setItem(found);
    }, [id]);

    useEffect(() => {
        const storedCart = localStorage.getItem('shoppingCart');
        if (storedCart) {
            try {
                setCart(JSON.parse(storedCart));
            } catch (error) {
                console.error('Error parsing cart data from localStorage', error);
                localStorage.removeItem('shoppingCart');
                setCart([]);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (itemToAdd) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === itemToAdd.id);
            if (existingItem) {
                return prevCart.map((cartItem) =>
                    cartItem.id === itemToAdd.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...itemToAdd, quantity: 1 }];
            }
        });
        setIsCartOpen(true);
    };

    const deleteFromCart = (itemId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    };

    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    if (!item) return <div className="text-white text-center py-20">Item not found.</div>;

    return (
        <div className="bg-gray-900">
            <Header />
            <main className="relative">
                <div className="bg-gray-900 text-white min-h-screen py-16 px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white text-black p-8 rounded-xl shadow-lg">
                            <div className="md:flex gap-8 items-start">
                                <div className="md:w-1/2">
                                    <img src={item.image} alt={item.name} className="w-full rounded-lg mb-6" />
                                </div>
                                <div className="md:w-1/2 space-y-4">
                                    <h1 className="text-3xl font-bold text-gray-900">{item.name}</h1>
                                    <p className="text-xl text-yellow-600">Price: ${item.price.toFixed(2)}</p>
                                    <p className="text-gray-700">{item.description}</p>
                                    {item.specifications && (
                                        <div>
                                            <h2 className="text-lg font-semibold text-gray-900 mb-2">Specifications</h2>
                                            <ul className="list-disc list-inside text-gray-700">
                                                {Object.entries(item.specifications).map(([key, value]) => (
                                                    <li key={key}>
                                                        <span className="font-medium">{key}: </span>
                                                        {Array.isArray(value) ? value.join(', ') : value}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    <button
                                        className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors flex items-center"
                                        onClick={() => addToCart(item)}
                                    >
                                        <ShoppingCart className="mr-2 w-5 h-5" />
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                            <Link to="/ShopPage" className="mt-8 inline-flex items-center text-blue-500 hover:underline text-lg">
                                <ArrowLeft className="mr-2 w-5 h-5" />
                                Back to Shop
                            </Link>
                        </div>
                    </div>
                </div>
                <HorizontalScrollSection />
                <HorizontalImageScroll />
                <ContactSection />
            </main>
            <Footer />
            <div
                className={`fixed top-0 right-0 h-full w-80 bg-gray-800 text-white shadow-lg transform transition-transform duration-300 ease-in-out ${
                    isCartOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
                style={{ zIndex: 100 }}
            >
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">Your Cart</h2>
                        <button className="text-gray-400 hover:text-white" onClick={() => setIsCartOpen(false)}>
                            <XCircle className="w-6 h-6" />
                        </button>
                    </div>
                    {cart.length === 0 ? (
                        <p className="text-gray-400">Your cart is empty.</p>
                    ) : (
                        <div className="space-y-4 overflow-y-auto max-h-[calc(100vh-200px)]">
                            {cart.map((cartItem) => (
                                <div key={cartItem.id} className="flex items-center justify-between border-b border-gray-700 pb-4">
                                    <div>
                                        <h3 className="text-lg font-semibold">{cartItem.name}</h3>
                                        <p className="text-gray-400">Quantity: {cartItem.quantity}</p>
                                        <p className="text-yellow-400">Price: ${cartItem.price.toFixed(2)}</p>
                                    </div>
                                    <button
                                        className="text-red-400 hover:text-red-500"
                                        onClick={() => deleteFromCart(cartItem.id)}
                                    >
                                        <XCircle className="w-5 h-5" />
                                    </button>
                                </div>
                            ))}
                            <div className="mt-4">
                                <h3 className="text-xl font-bold">Total: ${calculateTotalPrice()}</h3>
                            </div>
                        </div>
                    )}
                    {cart.length > 0 && (
                        <button
                            className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors w-full mt-6"
                            onClick={() => {
                                console.log('Proceeding to checkout with items:', cart);
                                alert(`Proceeding to checkout with ${cart.length} items. Total: $${calculateTotalPrice()}`);
                                setIsCartOpen(false);
                            }}
                        >
                            Checkout
                        </button>
                    )}
                </div>
            </div>
            {isCartOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50"
                    style={{ zIndex: 90 }}
                    onClick={() => setIsCartOpen(false)}
                />
            )}
        </div>
    );
};

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
                                <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">Our Products</h1>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
                                        className="w-full inline-flex items-center justify-center bg-blue-500 text-blue-500 px-6 py-3 rounded-md hover:bg-blue-600 transition-colors"
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

export default ItemDetailPage;
