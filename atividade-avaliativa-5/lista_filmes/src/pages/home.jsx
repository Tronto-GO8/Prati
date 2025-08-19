import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style.css/Home.css"

const kay = ''

export default function Home() {
    const [pesquisarFilme, setPesquisarFilme] = useState('')
    const [filmes, setFilmes] = useState([])
    const [error, setError] = useState('')
    const [pagina, setPagina] = useState(1)
    const [totalPaginas, setTotalPaginas] = useState(1);
    const navegar = useNavigate()

    const handlepesquisarFilmeChange = (event) => setPesquisarFilme(event.target.value)


    async function buscarfilmes() {
        if (pesquisarFilme === '') {
            setError("Digite o nome do filme que gostaria de pesquisar")
            return;
        }
        setError('')

        try {
            const resposta = await fetch(`https://www.omdbapi.com/?apikey=${kay}&s=${pesquisarFilme}&page=${pagina}`)

            if (!resposta.ok) {
                throw new Error("Erro na requisição: " + resposta.status)
            }

            const data = await resposta.json();

            if (data.Response === "False") {
                setFilmes([])
                setTotalPaginas(1);
                throw new Error(data.Error);
            } else {
                setFilmes(data.Search);
                setTotalPaginas(Math.ceil(data.totalResults / 10))
            }

        } catch (err) {
            setError(err.message)
        }
    }
    useEffect(() => {
        if (pesquisarFilme) {
            buscarfilmes();
        }
    }, [pagina])

    return (
        <>
            <div className="home-container">
                <h1>Home</h1>

                <div className="search-box">
                    <input type="text" value={pesquisarFilme} onChange={handlepesquisarFilmeChange} />
                    <button onClick={() => buscarfilmes(1)}>Pesquisar filmes</button>
                </div>

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <ul className="movies-list">
                    {filmes.map((f) => (
                        <li key={f.imdbID}>
                            <img src={f.Poster} alt={f.Title} />
                            <p>{f.Title} ({f.Year})</p>
                            <button onClick={() => navegar("detalhes", { state: { filme: f } })}>
                                Ver Detalhes
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="pagination">
                    <button disabled={pagina === 1} onClick={() => setPagina(pagina - 1)}>◀</button>
                    <button disabled={pagina === totalPaginas} onClick={() => setPagina(pagina + 1)}>▶</button>
                </div>
            </div>
        </>
    )
}

