type Props = {
    children: React.ReactNode;
    onClick?: () => void;
};

const Button = ({ children, onClick }: Props) => {
    return (
        <button
            onClick={onClick}
            className="px-6 py-3 bg-luxury-gold hover:bg-luxury-darkGold text-black font-semibold tracking-wide transition-all duration-300 rounded-md"
        >
            {children}
        </button>
    );
};

export default Button;