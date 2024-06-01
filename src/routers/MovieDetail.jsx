import React from "react";
import { useParams } from 'react-router-dom'
import '../styles/movie-detail.css'
import MovieFooter from "../components/movie-footer";

export default function MovieDetail() {

    const params = useParams()


    return (
        <>
            <div className="container-movies">

                <div className="background-banner">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/005/720/479/small/banner-abstract-background-board-for-text-and-message-design-modern-free-vector.jpg" alt="" />
                </div>
                <div className="session-row">
                    <div className="session-row-image">

                    </div>
                    <div className="session-row-days">
                        <div className="button-days">
                            <span className="button-days-subtitle">Qui</span>
                            <span className="button-days-tittle">30</span>
                            <span className="button-days-end">Mai</span>
                        </div>
                        <div className="button-days"></div>
                        <div className="button-days"></div>
                        <div className="button-days"></div>
                        <div className="button-days"></div>
                        <div className="button-days"></div>

                    </div>

                </div>
                <div className="session-decription">
                    <div className="session-sinopsys">
                        <div>
                            <h2>Animação - 100m</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eius porro aspernatur? Facilis nostrum a tempora, dolore debitis amet laborum illum mollitia dignissimos. Facilis delectus architecto optio ut laudantium ab.</p>

                        </div>
                        <div className="session-sinopsys-staff">
                            <h2>Elenco e Equipe</h2>
                            <div className="session-sinopsys-director">
                                <h2>Diretor</h2>
                                <div>
                                    <p>teste</p>
                                    <p>teste</p>
                                    <p>teste</p>
                                </div>
                            </div>
                            <div className="session-sinopsys-director">
                            <h2>Elenco</h2>
                                <div>
                                    <p>teste</p>
                                    <p>teste</p>
                                    <p>teste</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="sessions-button-hours">

                        <button className="button-hours">Quinta, 30 Maio, 12:00</button>
                        <button className="button-hours">Quinta, 30 Maio, 12:00</button>
                        <button className="button-price">Preço</button>

                    </div>




                </div>
                <MovieFooter topMovies={[]} />
            </div>
           
        </>
    )
}