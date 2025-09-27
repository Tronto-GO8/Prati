import { useState, useEffect } from "react"
import { products } from "../utilitarios/produtos"
import Navbar from "../componentes/Navbar"
import ProductCard from "../componentes/ProductCard"
import "./estiloglobal.css"


export default function CssGlobal() {
    const [tema, setTema] = useState("light"); // estado do tema
    const [itensCarrinho, setItensCarrinho] = useState(0);

    // Carrega tema salvo
    useEffect(() => {
        const temaSalvo = localStorage.getItem("tema");
        if (temaSalvo) setTema(temaSalvo);
    }, []);

    // Salva tema e aplica no body
    useEffect(() => {
        localStorage.setItem("tema", tema);
        document.body.setAttribute("data-tema", tema);
    }, [tema]);

    const mudartema = () => setTema(prev => (prev === "light" ? "dark" : "light"));

    return (
        <>
            <Navbar
                tema={tema}
                mudartema={mudartema}
                itensCarrinho={itensCarrinho}>
            </Navbar>
            <main style={{ marginTop: "60px" }} className="produtos">
                {products.map(produto => (
                    <ProductCard key={produto.id} product={produto} />
                ))}
            </main>
        </>
    );
}