import { useState, useEffect } from "react"
import { products } from "../utilitarios/produtos"
import Navbar from "../componentes/Navbar"
import ProductCard from "../componentes/ProductCard"

export default function CssGlobal() {
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
        <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
            <Navbar itensCarrinho={itensCarrinho}/>
            <main style={{ marginTop: "60px" }} className="grid gap-4 mt-20 p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map(produto => (
                    <ProductCard key={produto.id} product={produto} isloading={isLoading} adicionarItem={adicionarItem}/>
                ))}
            </main>
            </div>
        </>
    );
}