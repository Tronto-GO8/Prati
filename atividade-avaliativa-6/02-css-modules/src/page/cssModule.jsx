import { useState, useEffect } from "react"
import { products } from "../utilitarios/produtos"
import Navbar from "../componentes/Navbar"
import ProductCard from "../componentes/ProductCard"
import "../css/page.css"


export default function CssModule() {
    const [itensCarrinho, setItensCarrinho] = useState(0);

    const adicionarItem = () => {
        setItensCarrinho(prev => prev + 1);
    };
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {

        const timer = setTimeout(() => setIsLoading(false), 2000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <Navbar itensCarrinho={itensCarrinho}/>
            <main style={{ marginTop: "60px" }} className="produtos">
                {products.map(produto => (
                    <ProductCard key={produto.id} product={produto} isloading={isLoading} adicionarItem={adicionarItem}/>
                ))}
            </main>
        </>
    );
}