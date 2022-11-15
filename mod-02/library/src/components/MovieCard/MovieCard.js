import { useState } from 'react';
import './MovieCard.css';

function MovieCard() {
    const [movies, setMovies] = useState([
        {
            nome: "Pantera Negra 2",
            img: "https://portalpopline.com.br/wp-content/uploads/2022/10/poster-pantera-negra-3.jpg",
            genero: "Aventura",
            hasAwards: true
        },
        {
            nome: "Marte Um",
            img: "https://br.web.img3.acsta.net/pictures/22/08/04/19/25/2946887.jpg",
            genero: "Drama",
            hasAwards: true
        },
        {
            nome: "Não! Não Olhe!",
            img: "https://portalestiloempauta.files.wordpress.com/2022/08/fm8tlj_xwaqmiej-e1661347968163.jpg?w=750",
            genero: "Suspense",
            hasAwards: false
        }
    ])

    // clicar Pantera 2 = index = 0
    // novaLista = ["Marte Um", "Não! Não Olhe!"]
    // essa lógica também serve para deletar itens
    const filmeAssistido = (movieKey) => {
        const novaLista = movies.filter((movie, index) => {
            return index !== movieKey
        })

        // movies = novaLista
        setMovies(novaLista)
    }
    
    // index = posição do item no array
    const cards = movies.map((movie, index) => {
        return (
            <section className="card" key={ index }>
                <h2>{ movie.nome }</h2>
                <img src={ movie.img } alt={ movie.nome } />
                <p>{ movie.genero }</p>
                <button onClick={() => filmeAssistido(index)}>Assistido</button>
                {/* se a primeira afirmação for vdd, ele imprime a segunda afirmação */}
                { movie.hasAwards && <p>Tem prêmios!</p> }
                { !movie.hasAwards && <p>Muito bom, mas não tem prêmios ainda</p> }
            </section>
        )
    })

    return (
        <div>
            { cards }
        </div>
    )
}

export default MovieCard