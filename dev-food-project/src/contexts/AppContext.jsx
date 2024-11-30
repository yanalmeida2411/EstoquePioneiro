import React, { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [cart, setCart] = useState([]);

  const [isAdd, setIsAdd] = useState(false);

  const [isRemoved, setIsRemoved] = useState(false);

  const totalCart = () => {
    return cart.reduce(
      (valor, item) => valor + item.valor * item.quantidade,
      0
    );
  };

  const total = totalCart();

  const totalItemsAdd = () => {
    return cart.reduce((acc, item) => acc + item.quantidade, 0);
  };

  const totalItems = totalItemsAdd();

  let quantidadeItems = totalItems;

  const addItem = (item) => {
    setCart((prevCart) => {
      const findItem = cart.find((newItem) => newItem.id === item.id);

      let quantidadeItems;

      if (findItem) {
        return prevCart.map((newItem) =>
          newItem.id === item.id
            ? { ...newItem, quantidade: newItem.quantidade + 1 }
            : newItem
        );
      } else {
        return [...prevCart, { ...item }];
      }
    });

    setIsAdd((state) => !state);

    setTimeout(setIsAdd, 1000);
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));

    setIsRemoved((state) => !state);

    setTimeout(setIsRemoved, 1000);
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        addItem,
        setCart,
        removeItem,
        isAdd,
        isRemoved,
        totalCart,
        total,
        quantidadeItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
