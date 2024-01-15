import React, { useState } from "react";

const ThemeProvider = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const html = document.querySelector("html");
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
    html.setAttribute('data-theme', (isDarkTheme ? "dark" : "light"))
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        {isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"}
      </button>
    </div>
  );
};

export default ThemeProvider;
