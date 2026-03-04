import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import GallerySection from "../components/GallerySection";
import ReservationSection from "../components/ReservationSection";
import ReviewsCarousel from "../components/Reviews";
import Footer from "../components/Footer";


const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />

            <section className="bg-luxury-black py-28">
                <div className="max-w-7xl mx-auto px-8">
                    <h2 className="text-luxury-gold text-4xl mb-12 tracking-wide">
                        Our Specials
                    </h2>
                    <AboutSection />
                    <GallerySection />
                    <ReservationSection />
                    <ReviewsCarousel />
                    <Footer />
                </div>
            </section>
        </>
    );
};

export default Home;