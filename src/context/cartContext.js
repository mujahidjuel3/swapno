"use client";

import React, { createContext, useContext, useState } from "react";

// Create Cart Context
const CartContext = createContext();

// Custom Hook to access Cart Context
export const useCart = () => {
  return useContext(CartContext);
};

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // Cart Items

  // Add Item to Cart
  const addToCart = (item) => {
    setCartItems((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        // Update quantity if item already exists
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // Validate and parse the price
        const price = parseFloat(
          typeof item.price === "string"
            ? item.price.replace(/[^\d.]/g, "")
            : item.price
        );

        // Add new item
        return [...prev, { ...item, price: price || 0, quantity: 1 }];
      }
    });
  };

  
  const removeFromCart = (item) => {
    setCartItems((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        // Update quantity if item already exists
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      } else {
        // Add new item
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  // Update Quantity of an Item
  const updateQuantity = (id, amount) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  // Remove Item from Cart
  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        updateQuantity,
        handleRemove,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
