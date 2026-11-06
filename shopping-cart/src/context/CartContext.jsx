
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Save Cart to LocalStorage
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // Add Product
    const addToCart = (product) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id);

            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            }

            return [...prev, { ...product, qty: 1 }];
        });
    };

    // Update Quantity
    const updateQty = (id, qty) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, qty } : item
            )
        );
    };

    // Remove Product
    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    // Total 
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            addToCart,
            updateQty,
            removeFromCart,
            total
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
