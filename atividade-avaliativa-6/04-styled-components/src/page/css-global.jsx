import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "../componentes/Navbar.jsx"
import Produtos from "../componentes/ExibicaoProdutos.jsx";

const lightTheme = {
  mode: "light",
  colors: {
    primary: "#e5e7eb",
    text: "#111111",
  },
};

const darkTheme = {
  mode: "dark",
  colors: {
    primary: "#111111",
    text: "#f9f9f9",
  },
};

export default function App() {
  const [theme, setTheme] = React.useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme.mode === "light" ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar toggleTheme={toggleTheme} itensCarrinho={2} />
      <Produtos/>
    </ThemeProvider>
  );
}
