"use client";

import { useState } from "react";
import Diabetic from "./Diabetic";
import CartSidebar from "./CartSidebar";

const MainComponent = ({ cardData5 }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  return (
    <>
      <Diabetic cardData5={cardData5} addToCart={addToCart} />
      <CartSidebar cartItems={cartItems} setCartItems={setCartItems} />
    </>
  );
};

export default MainComponent;
