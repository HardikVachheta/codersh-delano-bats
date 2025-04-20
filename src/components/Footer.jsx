import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-6">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
                <p className="text-gray-400 text-sm">
                    © 2025 Delano Bat Company, LLC | All Rights Reserved. Powered By CWS.
                </p>
                <div className="flex gap-4">                    
                    <a href="https://www.facebook.com/delanobats/" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
                        <Facebook className="w-6 h-6" />
                    </a>
                    <a href="https://www.instagram.com/delanobatco/" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                        <Instagram className="w-6 h-6" />
                    </a>
                    <a href="https://x.com/i/flow/login?redirect_after_login=%2FDelanoBats" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
                        <Twitter className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;