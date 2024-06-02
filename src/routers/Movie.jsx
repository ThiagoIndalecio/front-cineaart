import React, { useEffect, useState } from "react";
import '../styles/movie.css'
import MultiActionAreaCard from '../components/card'
import axios from 'axios';
import MovieFooter from '../components/movie-footer'
import '../styles/age.css'

export default function Movie() {

    const [movies, setMovies] = useState([])
    const [topMovies, setTopMovies] = useState([])

    useEffect(() => {
        async function data() {
            const response = await axios.get("http://localhost:8080/api/cinema/movies")
            const data = response.data.content
            console.log(data)
            setMovies(data)
            setTopMovies(data.slice(0,2))

        }
        data()

    }, [])


    return (

        <div id="movie" className="container">
            <div id="movie" className="nav">
                <h2>CINEAART</h2>
                <h2>Encontre um filme</h2>

            </div>
            <div id="movie" className="nav-cartaz">
                <h3>Em Cartaz</h3>
            </div>
            <div id="movie" className="cards-list">
                {
                    
                    movies.map((movie) => (
                        <MultiActionAreaCard
                            key={movie.id}
                            id={movie.id}
                            name={movie.name}
                            ageGroup={movie.ageGroup}
                        />

                        )
                    )
                    
                }

            </div>
            <div id="movie" className="nav-cartaz">
                <h3>Em Breve</h3>
            </div>
            <div id="movie" className="cards-list">
                <div className="card"><MultiActionAreaCard /></div>
                <div className="card"><MultiActionAreaCard /></div>
                <div className="card"><MultiActionAreaCard /></div>
                <div className="card"><MultiActionAreaCard /></div>
                <div className="card"><MultiActionAreaCard /></div>
                <div className="card"><MultiActionAreaCard /></div>
                <div className="card"><MultiActionAreaCard /></div>

            </div>
            <MovieFooter topMovies={topMovies} />
            
        </div>

    )
}

