// Themeprovider.jsx

import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const Themeprovider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Themeprovider;