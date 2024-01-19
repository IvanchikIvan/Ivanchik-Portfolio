import React, { useState } from "react";

const ThemeProvider = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const html = document.querySelector("html");
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    console.log(isDarkTheme)
    html.setAttribute('data-theme', (isDarkTheme ? "dark" : "light"))
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        {isDarkTheme ? "Switch to Dark Theme" : "Switch to Light Theme"}
      </button>
    </div>
  );
};

export default ThemeProvider;
