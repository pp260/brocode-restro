const AboutSection = () => {
    return (
        <section className="bg-luxury-black py-28 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* Image */}
                <div className="overflow-hidden rounded-xl">
                    <img
                        src="/img/restaurant.jpg"
                        className="w-full h-[500px] object-cover hover:scale-105 transition duration-700"
                    />
                </div>

                {/* Text */}
                <div>
                    <p className="text-luxury-gold uppercase tracking-[0.3em] text-sm mb-6">
                        Our Story
                    </p>

                    <h2 className="font-heading text-4xl md:text-5xl text-white leading-tight mb-8">
                        Inspired by Tradition.
                        <span className="text-luxury-gold block mt-3">
                            Crafted with Passion.
                        </span>
                    </h2>

                    <p className="text-gray-300 leading-relaxed text-lg">
                        BroCode began as a vision to merge timeless culinary tradition
                        with modern elegance. Every dish tells a story — of heritage,
                        craftsmanship and artistic expression.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;