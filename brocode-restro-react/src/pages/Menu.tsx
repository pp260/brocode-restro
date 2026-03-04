import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { menuItems } from "../data/menu";

const Menu = () => {
    return (
        <>
            <Navbar />

            <section className="bg-black min-h-screen py-20 px-8">
                <h2 className="text-luxury-gold text-4xl mb-12 tracking-wide">
                    Our Full Menu
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {menuItems.map((item) => (
                        <ProductCard
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Menu;