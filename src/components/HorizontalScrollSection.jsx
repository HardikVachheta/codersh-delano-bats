import { useEffect, useRef } from "react";
import items from "./jsonData/items.json";

const HorizontalScrollSection = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        let scrollAmount = 0;

        const scrollInterval = setInterval(() => {
            if (container) {
                scrollAmount += 1;
                container.scrollLeft = scrollAmount;

                if (scrollAmount >= container.scrollWidth - container.clientWidth) {
                    scrollAmount = 0;
                }
            }
        }, 15);

        return () => clearInterval(scrollInterval);
    }, []);

    const loopItems = [...items, ...items];

    return (
        <section className="overflow-hidden py-16 bg-white">
            <h3 className="text-4xl font-extrabold text-gray-900 px-10 mb-8 text-center tracking-tight">
                TURNING ORDINARY MOMENTS INTO ADVENTURE
            </h3>
            <div className="flex items-center justify-center gap-2 mb-10">
                <div className="text-yellow-500 text-2xl">
                    {'★★★★★'}
                </div>
                <p className="text-xl text-gray-600">
                    Trusted by 1000's of players and coaches
                </p>
            </div>

            <div
                ref={containerRef}
                className="flex space-x-8 overflow-x-hidden w-full px-10"
                style={{ whiteSpace: 'nowrap' }}
            >
                {loopItems.map((item, index) => (
                    <div
                        key={index}
                        className="inline-block bg-gray-100 rounded-3xl p-6 w-80 shrink-0
                           border border-gray-300 shadow-lg 
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
                            <h3 className="text-2xl font-semibold text-gray-800 text-center mt-2">{item.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
};

export default HorizontalScrollSection;