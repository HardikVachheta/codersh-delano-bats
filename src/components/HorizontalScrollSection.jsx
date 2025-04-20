import { useEffect, useRef } from "react";
import items from "./jsonData/items.json";

// const itemImages = [
//     'https://cdn.buttercms.com/VxaKfkXHSJaTLKzIpcx3',
//     'https://cdn.buttercms.com/2LYSGlAcS16rSoDQfGMy',
//     'https://cdn.buttercms.com/3n0Anxu6S82Kpvv91iD0',
//     'https://cdn.buttercms.com/4VGrB7XRAC2fsgoxxjox',
//     'https://cdn.buttercms.com/v4ZqN87uRq2AOGCjP8dg',
//     './bat5.jpg',
//     './bat6.jpg',
//     './bat.jpg', 
//     './bat2.jpg',
// ];

// const items = [
//     { id: 1, name: 'Pro Elite Maple Bat', price: 179.99, image: itemImages[0] },
//     { id: 2, name: 'Classic Ash Wood Bat', price: 129.99, image: itemImages[1] },
//     { id: 3, name: 'Power Drive Alloy Bat', price: 229.99, image: itemImages[2] },
//     { id: 4, name: 'Junior League Maple', price: 99.99, image: itemImages[3] },
//     { id: 5, name: 'Big Barrel Alloy Pro', price: 249.99, image: itemImages[4] },
//     { id: 6, name: 'Custom Pro Series Bat', price: 299.99, image: itemImages[5] },
//     { id: 7, name: 'Training Composite Bat', price: 149.99, image: itemImages[6] },
//     { id: 8, name: 'Handcrafted Maple Wood', price: 199.99, image: itemImages[7] },
//     { id: 9, name: 'Ultra Light Alloy Bat', price: 189.99, image: itemImages[8] },
// ];


const HorizontalScrollSection = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        let scrollAmount = 0;

        const scrollInterval = setInterval(() => {
            if (container) {
                scrollAmount += 1;  // Increased speed for better effect
                container.scrollLeft = scrollAmount;

                // Reset scroll position to create continuous loop
                if (scrollAmount >= container.scrollWidth - container.clientWidth) {
                    scrollAmount = 0;
                }
            }
        }, 15); // Increased smoothness

        return () => clearInterval(scrollInterval);
    }, []);

    // Duplicate items for the continuous scroll effect
    const loopItems = [...items, ...items];

    return (
        <section className="overflow-hidden py-16 bg-gradient-to-br from-gray-900 to-black">
            <h2 className="text-4xl font-extrabold text-white px-10 mb-8 text-center tracking-tight">
                Featured Bats
            </h2>
            <div
                ref={containerRef}
                className="flex space-x-8 overflow-x-hidden w-full px-10"
                style={{ whiteSpace: 'nowrap' }}
            >
                {loopItems.map((item, index) => (
                    <div
                        key={index}
                        className="inline-block bg-white/10 backdrop-blur-md rounded-3xl p-6 w-80 shrink-0
                                   border border-white/20 shadow-2xl 
                                   flex flex-col items-center justify-between"
                    >
                        <div className="mb-6">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-64 object-cover rounded-xl mb-4
                                           transition-transform duration-300
                                           hover:scale-110"
                            />
                            <h3 className="text-2xl font-semibold text-white text-center mt-2">{item.name}</h3>
                        </div>
                        {/* <p className="text-lg font-medium text-gray-300 text-center mb-6">
                            Price: <span className="text-yellow-400">${item.price.toFixed(2)}</span>
                        </p>
                        <Button
                            variant="default"
                            size="lg"
                            className="w-full"
                        >
                            <ShoppingCart className="w-6 h-6 mr-2" />
                            View Details
                        </Button> */}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HorizontalScrollSection;