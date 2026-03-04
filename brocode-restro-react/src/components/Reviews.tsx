import { useEffect, useState } from "react";

const reviews = [
    {
        id: 1,
        name: "Aarav Mehta",
        text: "An unforgettable dining experience. The ambiance and flavors were exceptional.",
    },
    {
        id: 2,
        name: "Riya Kapoor",
        text: "Every detail felt luxurious. Truly fine dining at its best.",
    },
    {
        id: 3,
        name: "Kabir Shah",
        text: "The perfect blend of tradition and innovation. Highly recommended.",
    },
];

const ReviewsCarousel = () => {
    const [index, setIndex] = useState(0);

    // Auto slide every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % reviews.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-black py-28 px-6 text-center">
            <div className="max-w-3xl mx-auto">

                <p className="text-luxury-gold uppercase tracking-[0.3em] text-sm mb-6">
                    Testimonials
                </p>

                <h2 className="font-heading text-4xl text-white mb-12">
                    What Our Guests Say
                </h2>

                <div className="bg-white/5 border border-white/10 rounded-xl p-12 transition-all duration-700">
                    <p className="text-gray-300 text-xl italic leading-relaxed">
                        “{reviews[index].text}”
                    </p>

                    <p className="mt-6 text-luxury-gold tracking-widest text-sm uppercase">
                        {reviews[index].name}
                    </p>
                </div>

            </div>
        </section>
    );
};

export default ReviewsCarousel;