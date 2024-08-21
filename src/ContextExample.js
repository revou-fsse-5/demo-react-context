import React, { createContext, useState, useContext } from "react";
import "./ContextExample.css";

// Create the context
const ThemeContext = createContext();

// Context Provider component
const ThemeProvider = ({ children }) => {
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

// Custom hook to consume the context
const useTheme = () => useContext(ThemeContext);

// Example component that uses the context
const ContextExample = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`context-example ${theme}-theme`}>
      <h2>React Context Example</h2>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export { ThemeProvider, useTheme, ContextExample };
