import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="relative h-screen w-full overflow-hidden">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center scale-105"
                style={{ backgroundImage: "url('/img/menu1.jpg')" }}
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

                {/* Small Top Text */}
                <p className="text-luxury-gold uppercase tracking-[0.3em] text-sm mb-6">
                    BroCode Fine Dining
                </p>

                {/* Main Heading */}
                <h1 className="font-heading text-5xl md:text-7xl text-white leading-tight max-w-4xl">
                    A Symphony of
                    <span className="text-luxury-gold block mt-4">
                        Flavors & Elegance
                    </span>
                </h1>

                {/* Gold Divider Line */}
                <div className="w-24 h-[1px] bg-luxury-gold my-8"></div>

                {/* Description */}
                <p className="text-gray-300 max-w-xl text-lg md:text-xl leading-relaxed">
                    Experience curated dishes crafted with passion,
                    precision and timeless culinary artistry.
                </p>

                {/* Button */}
                <button
                    onClick={() => navigate("/menu")}
                    className="mt-12 px-10 py-4 border border-luxury-gold text-luxury-gold uppercase tracking-widest text-sm
          hover:bg-luxury-gold hover:text-black transition-all duration-500"
                >
                    Explore Menu
                </button>

            </div>
        </section>
    );
};

export default Hero;