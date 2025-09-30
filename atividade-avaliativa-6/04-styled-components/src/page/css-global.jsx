import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "../componentes/Navbar.jsx"
import Produtos from "../componentes/ExibicaoProdutos.jsx";
import styled from "styled-components";

const lightTheme = {
  mode: "light",
  colors: {
    primary: "#e5e7eb",
    text: "#111111",
    fundo: "#ffffff",
  },
};

const darkTheme = {
  mode: "dark",
  colors: {
    primary: "#3b82f6",
    text: "#f9f9f9",
    fundo: "#111111",
  },
};


const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.fundo};
  min-height: 100vh;
  min-width: 100vw;
  padding-top: 60px; /* altura da navbar */
`;

export default function App() {
  const [theme, setTheme] = React.useState(lightTheme);
  const [isLoading, setIsLoading] = useState(true);
  const [itensCarrinho, setItensCarrinho] = useState(0);


  const toggleTheme = () => {
    setTheme(theme.mode === "light" ? darkTheme : lightTheme);
  };
  
    const adicionarItem = () => {
        setItensCarrinho(prev => prev + 1);
    };
    
    useEffect(() => {

        const timer = setTimeout(() => setIsLoading(false), 2000)
        return () => clearTimeout(timer)
    }, [])

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Navbar toggleTheme={toggleTheme} itensCarrinho={itensCarrinho} />
        <Produtos isLoading={isLoading} adicionarItem={adicionarItem}/>
      </AppWrapper>
    </ThemeProvider>
  );
}
