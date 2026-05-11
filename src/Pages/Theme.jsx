// Theme.jsx

import React, { useContext } from "react";
import { ThemeContext } from "./Themeprovider";
import { FaToggleOff } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa";

const Theme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#ffffff" : "#1e1e1e",
        color: theme === "light" ? "#000000" : "#ffffff",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        transition: "0.3s",
      }}
    >
      <h1>{theme.toUpperCase()} MODE</h1>

      <button
        onClick={toggleTheme}
        style={{
          border: "none",
          background: "transparent",
          fontSize: "60px",
          cursor: "pointer",
          color: theme === "light" ? "black" : "yellow",
        }}
      >
        {theme === "light" ? <FaToggleOff /> : <FaToggleOn />}
      </button>
    </div>
  );
};

export default Theme;