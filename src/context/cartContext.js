import React from "react";
import { useState } from "react";

export const cartContext = React.createContext([]);

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(0);
  return (
    <cartContext.Provider value={[cart, setCart]}>
      {children}
    </cartContext.Provider>
  );
};
