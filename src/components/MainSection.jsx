const heroImage = './company.png';
const mainLogo = './batlogo.jpg';

export const MainSection = () => {
    return (
        <section className="relative bg-gray-900 py-32 md:py-48">
            <img src={heroImage} alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-50" />
            <div className="container mx-auto text-center relative z-10 px-4">
                <img src={mainLogo} alt="Hero" className="w-150 h-50 justify-self-center" />
            </div>
        </section>
    );
};