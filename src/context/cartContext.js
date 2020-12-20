import React from "react";
import { useState, createContext, useContext } from "react";

export const cartContext = createContext();
export const useCartContext = () => useContext(cartContext);

export const AppProvider = ({ children }) => {
  const [cant, setCant] = useState([]);
  const [games, setGames] = useState([]);

  const addGame = (game, cant) => {
    setGames([...games, { game, cant }]);
  };
  return (
    <cartContext.Provider value={{ games, addGame, cant, setCant }}>
      {children}
    </cartContext.Provider>
  );
};

export default useCartContext;
