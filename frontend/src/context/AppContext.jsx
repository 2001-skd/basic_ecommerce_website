import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);
  const token = localStorage.getItem("token");

  function addTocart(item) {
    return setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
  }

  function removeFromCart(item) {
    return setCart((prevCart) =>
      prevCart.filter((cart) => cart.id !== item.id)
    );
  }

  function addQuantity(id) {
    return setCart((cart) =>
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decreaseQuantity(id) {
    return setCart((cart) =>
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  }

  const netPrice = cart
    .reduce((acc, item) => {
      const itemTotalPrice = Number(item.quantity) * item.price;
      return acc + itemTotalPrice;
    }, 0)
    .toFixed(2);
  return (
    <AppContext.Provider
      value={{
        menu,
        setMenu,
        cart,
        setCart,
        addTocart,
        removeFromCart,
        addQuantity,
        decreaseQuantity,
        netPrice,
        token,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
