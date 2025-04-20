import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import items from './jsonData/items.json';

const ItemDetailPage = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const found = items.find(i => i.id === parseInt(id));
        setItem(found);
    }, [id]);

    if (!item) return <div className="text-white text-center py-20">Item not found.</div>;

    return (
        <div className="bg-gray-900 text-white min-h-screen py-16 px-4">
            <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    
                    <div>
                        <img src={item.image} alt={item.name} className="w-full rounded-lg mb-6" />
                    </div>

                    <div>
                        <h1 className="text-4xl font-bold mb-4">{item.name}</h1>
                        <p className="text-xl text-yellow-400 mb-4">Price: ${item.price.toFixed(2)}</p>
                        <p className="text-gray-300 mb-6">{item.description}</p>

                        {item.specifications && (
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-white mb-2">Specifications:</h3>
                                <ul className="list-disc list-inside text-gray-300">
                                    {Object.entries(item.specifications).map(([key, value]) => (
                                        <li key={key}>
                                            {key}: {Array.isArray(value) ? value.join(', ') : value}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <button
                            className="bg-blue-500 text-blue-500 px-6 py-3 rounded-md hover:bg-blue-600 transition-colors flex items-center"
                        >
                            <ShoppingCart className="mr-2 w-5 h-5" />
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetailPage;
