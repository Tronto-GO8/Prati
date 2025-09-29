import { useState, useEffect } from "react";
import Button from "./Button";

export default function Navbar({ itensCarrinho, adicionarAoCarrinho }) {
  const [tema, setTema] = useState(() => {
    return localStorage.getItem("tema") || "light";
  });

  // Inicializa tema do localStorage antes do primeiro render
  useEffect(() => {
    const temaSalvo = localStorage.getItem("tema") || "light";
    setTema(temaSalvo);
    document.documentElement.classList.toggle("dark", temaSalvo === "dark");
  }, []);

  // Atualiza tema e salva no localStorage
  useEffect(() => {
    localStorage.setItem("tema", tema);
    document.documentElement.classList.toggle("dark", tema === "dark");
  }, [tema]);

  const mudarTema = () => {
    setTema((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-gray-200 dark:bg-principal-dark shadow-md flex items-center justify-between px-4 z-50">
      {/* Logo */}
      <h1 className="text-3xl text-texto-light dark:text-texto-dark">Minha Logo</h1>

      {/* Botões */}
      <div className="flex gap-3">
        {/* Toggle de tema */}
        <Button
          onClick={mudarTema}
          aria-label={`Ativar ${tema === "light" ? "modo escuro" : "modo claro"}`}
        >
          {tema === "light" ? "Claro" : "Escuro"}
        </Button>

        {/* Carrinho */}
        <Button
          onClick={adicionarAoCarrinho}
          aria-label={`Carrinho com ${itensCarrinho} itens`}
          disabled
        >
          Carrinho {itensCarrinho}
        </Button>
      </div>
    </nav>
  );
}
