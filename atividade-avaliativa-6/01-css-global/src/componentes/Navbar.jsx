import { useState, useEffect } from "react"
import "../page/estiloglobal.css";

export default function Navbar({itensCarrinho}) {
    const [tema, setTema] = useState(() => { //tema
        return localStorage.getItem("tema") || "light";
    });

    // Inicializa tema do localStorage antes do primeiro render
    useEffect(() => {
        const temaSalvo = localStorage.getItem("tema") || "light";
        setTema(temaSalvo);
        document.body.setAttribute("data-tema", temaSalvo);
    }, []);

    // Atualiza tema e salva no localStorage
    useEffect(() => {
        localStorage.setItem("tema", tema);
        document.body.setAttribute("data-tema", tema);
    }, [tema]);

    const mudarTema = () => {
        setTema(tema === "light" ? "dark" : "light");
    };

    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <h1>Minha Logo</h1>
                </div>

                {/* Toggle de Tema */}
                <div className="botoes">
                    <div >
                        <button onClick={mudarTema} aria-label={`Ativar ${tema === "light" ? "modo escuro" : "modo claro"}`} >
                            {tema === "light" ? "Claro" : "Escuro"}
                        </button>
                    </div>

                    {/* Carrinho */}
                    <div>
                        <button disabled={true} aria-label={`Carrinho com ${itensCarrinho} itens`}>
                            Carrinho {itensCarrinho}
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}