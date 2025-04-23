import React, { useEffect, useRef, useState } from 'react';
import ShopSection from './sections/ShopSection';
import { Header } from './components/Header';
import { MainSection } from './sections/MainSection';
import { AboutSection } from './sections/AboutSection';
import { Route, Routes } from 'react-router-dom';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import HorizontalScrollSection from './components/HorizontalScrollSection';
import HorizontalImageScroll from './components/HorizontalImageScroll';
import { NewShopPage } from './pages/NewShopPage';
import ItemDetailPage from './pages/ItemDetailPage';
import BlogSection from './sections/BlogSection';

export const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
};
export const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
};

const App = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <div className="bg-gray-900">
                        <Header />
                        <main>
                            <MainSection />
                            <BlogSection />
                            <AboutSection />
                            <ShopSection />
                            <HorizontalScrollSection />
                            <HorizontalImageScroll />
                            <ContactSection />
                        </main>
                        <Footer />
                    </div>
                }
            />
            <Route path="/ShopPage" element={<NewShopPage />} />
            <Route path="/ShopPage/item/:id" element={<ItemDetailPage />} />
        </Routes>
    );
};

export default App;
