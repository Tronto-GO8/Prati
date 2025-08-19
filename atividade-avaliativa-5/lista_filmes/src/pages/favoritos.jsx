import { useState, useEffect } from "react";
import { useFavoritos } from "../contextos/favoritos_context.jsx";
import "../style.css/Favoritos.css"

export default function Favoritos() {
    const { favoritos, removerFavorito } = useFavoritos();

    return (
        <div className="favoritos-container">
            <h1>Meus Favoritos</h1>
            <ul className="favoritos-list">
                {favoritos.map((f) => (
                    <div key={f.imdbID}>
                        <img src={f.Poster} alt={f.Title} />
                        <p>{f.Title} ({f.Year})</p>
                        <button onClick={() => removerFavorito(f.imdbID)}>Remover</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}