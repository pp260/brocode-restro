import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav

            className={`fixed top-0 w-full z-50 transition-all duration-500 px-8 py-5 ${scrolled
                ? "bg-luxury-black/80 backdrop-blur-md shadow-lg"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                {/* Logo */}

                <Link
                    to="/"
                    className="font-luxury text-3xl text-luxury-gold tracking-widest"
                >
                    BroCode
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-10 text-lg text-white">
                    <Link
                        to="/"
                        className="hover:text-luxury-gold transition"
                    >
                        Home
                    </Link>

                    <Link
                        to="/menu"
                        className="hover:text-luxury-gold transition"
                    >
                        Menu
                    </Link>

                    <Link
                        to="/contact"
                        className="hover:text-luxury-gold transition"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;