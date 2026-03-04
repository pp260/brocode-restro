const Footer = () => {
    return (
        <footer className="bg-luxury-black border-t border-white/10 py-16 px-6">

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-gray-400">

                {/* Brand */}
                <div>
                    <h3 className="font-heading text-2xl text-luxury-gold mb-6">
                        BroCode
                    </h3>
                    <p>
                        Fine dining redefined through artistry,
                        heritage and culinary innovation.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h4 className="text-luxury-gold mb-6 uppercase tracking-widest text-sm">
                        Quick Links
                    </h4>
                    <ul className="space-y-3">
                        <li className="hover:text-white cursor-pointer">Home</li>
                        <li className="hover:text-white cursor-pointer">Menu</li>
                        <li className="hover:text-white cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-luxury-gold mb-6 uppercase tracking-widest text-sm">
                        Contact
                    </h4>
                    <p>123 Culinary Street</p>
                    <p>Mumbai, India</p>
                    <p className="mt-4">+91 98765 43210</p>
                </div>

            </div>

            <div className="text-center text-gray-500 mt-16 text-sm">
                © {new Date().getFullYear()} BroCode Restaurant. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;