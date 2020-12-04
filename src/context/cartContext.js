import React from "react";
import { useState } from "react";

export const cartContext = React.createContext([]);

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(1);
  return <cartContext.Provider value={cart}>{children}</cartContext.Provider>;
};
