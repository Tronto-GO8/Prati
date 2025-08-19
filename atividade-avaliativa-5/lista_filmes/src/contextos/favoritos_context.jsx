import { createContext, useContext, useState, useEffect } from "react";

const ContextoFavoritos = createContext();

export function ProverFavoritos({children}){
    const [favoritos, setFavoritos] = useState(() =>{
        const filmesSalvos = localStorage.getItem("favoritos")
        return filmesSalvos ? JSON.parse(filmesSalvos) : [];
    });

    useEffect(() =>{
        localStorage.setItem("favoritos", JSON.stringify(favoritos))
    },[favoritos])

    function adicionarFavorito(filme){
        setFavoritos((antes) => [...antes, filme])
    }

    function removerFavorito(imdbID){
        setFavoritos((antes) => antes.filter(film => film.imdbID !== imdbID ))
    }

    return(
        <ContextoFavoritos.Provider value={{favoritos, adicionarFavorito, removerFavorito}}>{children}</ContextoFavoritos.Provider>
    )

}

export function useFavoritos() {
  return useContext(ContextoFavoritos);
}