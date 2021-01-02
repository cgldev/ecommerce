import React from "react";
import { useState, createContext, useContext } from "react";

export const cartContext = createContext();
export const useCartContext = () => useContext(cartContext);

export const AppProvider = ({ children }) => {
  const [cant, setCant] = useState([]);
  const [carrito, setCarrito] = useState([]);

  const addItem = (item, cant) => {
    setCarrito([...carrito, { item, cant }]);
  };
  return (
    <cartContext.Provider value={{ carrito, addItem, cant, setCant }}>
      {children}
    </cartContext.Provider>
  );
};

export default useCartContext;
