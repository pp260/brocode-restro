const ReservationSection = () => {
    return (
        <section className="bg-luxury-black py-28 px-6 text-center">
            <div className="max-w-4xl mx-auto">

                <p className="text-luxury-gold uppercase tracking-[0.3em] text-sm mb-6">
                    Reserve a Table
                </p>

                <h2 className="font-heading text-4xl text-white mb-12">
                    Book Your Experience
                </h2>

                <form className="grid md:grid-cols-2 gap-6">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="bg-white/10 border border-white/20 p-4 text-white"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="bg-white/10 border border-white/20 p-4 text-white"
                    />
                    <input
                        type="date"
                        className="bg-white/10 border border-white/20 p-4 text-white"
                    />
                    <input
                        type="time"
                        className="bg-white/10 border border-white/20 p-4 text-white"
                    />
                </form>

                <button className="mt-10 px-10 py-4 border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black transition duration-300">
                    Confirm Reservation
                </button>

            </div>
        </section>
    );
};

export default ReservationSection;