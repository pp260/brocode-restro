const images = [
    "/img/dish.jpg",
    "/img/dish.jpg",
    "/img/dish.jpg",
    "/img/dish.jpg",
];

const GallerySection = () => {
    return (
        <section className="bg-black py-28 px-6">
            <div className="max-w-6xl mx-auto text-center">

                <p className="text-luxury-gold uppercase tracking-[0.3em] text-sm mb-6">
                    Gallery
                </p>

                <h2 className="font-heading text-4xl text-white mb-16">
                    Moments at BroCode
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((img, i) => (
                        <div key={i} className="overflow-hidden">
                            <img
                                src={img}
                                className="w-full h-60 object-cover hover:scale-110 transition duration-700"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default GallerySection;