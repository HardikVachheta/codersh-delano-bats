import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const imageItems = [
    'https://cdn.buttercms.com/VxaKfkXHSJaTLKzIpcx3',
    'https://cdn.buttercms.com/2LYSGlAcS16rSoDQfGMy',
    'https://cdn.buttercms.com/3n0Anxu6S82Kpvv91iD0',
    'https://cdn.buttercms.com/gHY9s3QnQ8aLG2Zs1Wzy',
    'https://cdn.buttercms.com/66XUpOoTCSW0qAW8DDNC',
    'https://cdn.buttercms.com/72eTtNi9Rdma3ig5hUrl',
    'https://cdn.buttercms.com/6XELxXEXSzNh2os9JbCj'
];

const HorizontalImageScroll = () => {
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
        }, 10);

        return () => clearInterval(scrollInterval);
    }, []);

    const loopImages = [...imageItems, ...imageItems];

    return (
        <section id="blog" className="overflow-hidden py-10 bg-white">
            <div className="text-center mb-4">
                <p className="font-script text-gray-700">
                    <h2 className="text-4xl font-extrabold text-black px-5 mb-1 text-center tracking-tight">
                        FOLLOW US ON INSTAGRAM
                    </h2><br />
                    <span className="text-xl font-bold text-gray-900">@delanobatco</span>
                </p>
            </div>
            <div
                ref={containerRef}
                className="flex space-x-4 overflow-x-hidden w-full px-10"
                style={{ whiteSpace: 'nowrap' }}
            >
                {loopImages.map((image, index) => (
                    <div
                        key={index}
                        className="inline-block rounded-xl shrink-0"
                    >
                        <img
                            src={image}
                            alt={`Image ${index + 1}`}
                            className="w-64 h-80 object-cover rounded-xl"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HorizontalImageScroll;
