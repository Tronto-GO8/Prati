import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFavoritos } from "../contextos/favoritos_context";
import "../style.css/DetalheFilmes.css"
const kay =''

export default function DetalheFilmes() {
    const location = useLocation();          // pega a localização atual
    const { filme } = location.state || {};  // acessa o objeto filme enviado
    const { adicionarFavorito } = useFavoritos();

    const [maisDetalhes, setMaisDetalhes] = useState(null)
    const [error, setError] = useState('')



    useEffect(() => {
        async function buscarMaisDetalhes() {
            try {
                const resposta = await fetch(`https://www.omdbapi.com/?apikey=${kay}&i=${filme.imdbID}&plot=full`)

                if (!resposta.ok) {
                    throw new Error("Erro na requisição: " + resposta.status)
                }

                const data = await resposta.json();

                if (data.Response === "False") {
                    throw new Error(data.Error);
                }

                setMaisDetalhes(data);

            } catch (err) {
                setError(err.message)
            }
        }
        buscarMaisDetalhes();
    }, [filme])

    if (!filme) return <p>Nenhum filme selecionado!</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;
    if (!maisDetalhes) return <p>Carregando...</p>;

    return (
        <div className="detalhe-container">
            <h1>{maisDetalhes.Title} ({maisDetalhes.Year})</h1>
            {maisDetalhes.Poster !== "N/A" && (
                <img src={maisDetalhes.Poster} alt={maisDetalhes.Title} />
            )}
            <p><b>Diretor:</b> {maisDetalhes.Director}</p>
            <p><b>Elenco:</b> {maisDetalhes.Actors}</p>
            <p><b>Sinopse:</b> {maisDetalhes.Plot}</p>
            <p><b>Avaliação:</b> {maisDetalhes.imdbRating}</p>
            <button onClick={() => adicionarFavorito(filme)}>Adicionar aos Favoritos</button>
        </div>
    );
}