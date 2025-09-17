import { useState, useEffect } from "react"
export default function Navbar() {
    const [tema, setTema] = useState("light") //tema
    const [itensCarrinho, setItensCarrinho] = useState(0)

    useEffect(() => {
        const temaSalvo = localStorage.getItem("tema")
        if (temaSalvo) {
            setTema(temaSalvo)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("tema", tema)
        document.body.setAttribute("data-tema", tema);
    }, [tema])

    const mudartema = () => {
        setTema(tema === "light" ? "dark" : "light")
    }

    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <h1>Minha Logo</h1>
                </div>

                {/* Toggle de Tema */}
                <div className="botoes">
                    <div>
                        <button onClick={mudartema}>
                            {tema === "light" ? "Claro" : "Escuro"}
                        </button>
                    </div>

                    {/* Carrinho */}
                    <div>
                        <button>
                            Carrinho ({itensCarrinho})
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}