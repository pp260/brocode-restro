import { memo } from "react";
import { useCart } from "../context/CartContext";

type Props = {
    id: string;
    name: string;
    price: number;
    image: string;
};

const ProductCard = ({ id, name, price, image }: Props) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({
            id,
            name,
            price,
            image,
            quantity: 1,
        });
    };

    return (
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:border-luxury-gold transition-all duration-500 group">

            <div className="overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-700"
                />
            </div>

            <div className="p-6">
                <h3 className="text-lg text-luxury-cream font-heading">
                    {name}
                </h3>

                <p className="text-luxury-gold mt-2">
                    ₹{price}
                </p>

                <button
                    onClick={handleAddToCart}
                    className="mt-6 w-full border border-luxury-gold text-luxury-gold py-3 uppercase tracking-widest text-sm hover:bg-luxury-gold hover:text-black transition duration-300"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default memo(ProductCard);