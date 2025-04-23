import React from 'react';

const features = [
    {
        icon: "https://cdn.buttercms.com/05J9w6tS62PQwn2kcefQ",
        title: "True wood look, feel and sound",
        description:
            "FZN is a true wood bat that gives hitters the unrivaled feel, classic sound and clean look of a traditional stick.",
    },
    {
        icon: "https://cdn.buttercms.com/l43dm56UTRaPIv2QMhFn",
        title: "Maximum BBCOR specs and performance",
        description:
            "FZN delivers MAX trampoline effect allowed by BBCOR across a HUGE sweet spot of a 2 5/8' barrel",
    },
    {
        icon: "https://cdn.buttercms.com/tZTA5CKVTaWjs51JnKbA",
        title: "Completely Custom",
        description:
            "species of wood, 17+ models, 24 color options, 22 trademark colors, and personalization, give you the opportunity to create the ultimate gamer that is uniquely yours.",
    },
];

const BlogSection = () => {
    return (
        <section id="blog" className="bg-black text-white py-16 px-4">
            <div className="max-w-5xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">On Deck - Our Blog</h2>
                <p className="text-gray-200">
                    Since then, Peter has become a bat-making craftsman. For almost 10 years, Peter turned the highest quality wood bats for thousands of competitive baseball players across the country, all from their Minnesota factory. More recently, Peter coupled his bat making expertise with his engineering know-how and partnered with a handful of other engineering experts & baseball lifers to change the direction of the company, and the future of baseball.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white text-black p-6 rounded-lg shadow-md flex flex-col items-center text-center"
                    >
                        <img src={feature.icon} alt="Icon" className="w-32 h-32 mb-4" />
                        <h3 className="font-bold text-red-600 text-lg mb-2">{feature.title}</h3>
                        <p className="font-bold text-gray-700">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogSection;
