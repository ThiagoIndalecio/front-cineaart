import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import '../styles/movie-detail.css';
import { React, useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import '../styles/movie-detail.css'
import MovieFooter from "../components/movie-footer";
import axios from "axios";
import 'moment/dist/locale/pt-br'
import moment from 'moment'
import ButtonDay from "../components/button-days";
import { selectedDate} from "../components/button-days"


import ModalChooseSeat from "../components/modal-choose-seat.jsx";

export default function MovieDetail() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const params = useParams();

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const [session, setSession] = useState([])
    const [movie, setMovie] = useState([])
    const [elenco, setElenco] = useState([])
    const [uniqueDay, setUniqueDay] = useState([])

    useEffect(() => {


        console.log(selectedDate)
        async function dataSession() {
            const response = await axios.get(`http://localhost:8080/api/cinema/sessions/movies/${params.id}`)
            const data = response.data.content

            console.log(data)
            moment.locale('pt-br')

            setSession(data)
            const uniqueSessions = data.reduce((acc, session) => {
                const sessionDate = moment(session.sessionStartTime).format('YYYY-MM-DD');
                if (!acc.find(item => moment(item.sessionStartTime).format('YYYY-MM-DD') === sessionDate)) {
                    acc.push(session);
                }
                return acc;
            }, [])

            uniqueSessions.sort((a, b) => {
                return new Date(a.sessionStartTime) - new Date(b.sessionStartTime);
            });

            setUniqueDay(uniqueSessions)
            console.log(uniqueSessions)
        }
        async function dataMovie() {
            const response = await axios.get(`http://localhost:8080/api/cinema/movies/${params.id}`)
            const dataMovie = response.data
            setMovie(dataMovie)
            console.log(movie)
            console.log(dataMovie)

            setElenco(response.data.movieCast.split(','))
        }

        dataMovie()
        dataSession()




    }, [])

    return (
        <>
            {isModalOpen && <ModalChooseSeat show={isModalOpen} onClose={handleCloseModal} />}

            <div className="container-movies">

                <div className="background-banner">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/005/720/479/small/banner-abstract-background-board-for-text-and-message-design-modern-free-vector.jpg" alt="" />
                </div>
                <div className="session-row">
                    <div className="session-row-image">

                    </div>
                    <div className="session-row-days">
                        {

                            uniqueDay.map((datas) =>
                                <ButtonDay
                                    key={datas.id}
                                    day={moment(datas.sessionStartTime).format("DD")}
                                    dayWeek={moment(datas.sessionStartTime).format("ddd")}
                                    month={moment(datas.sessionStartTime).format("MMM")}
                                />
                            )
                        }

                    </div>

                </div>
                <div className="session-decription">
                    <div className="session-sinopsys">
                        <div>
                            <h2>{movie.category} - {movie.duration}</h2>
                            <p>{movie.synopsis}</p>

                        </div>
                        <div className="session-sinopsys-staff">
                            <h2>Elenco e Equipe</h2>
                            <div className="session-sinopsys-director">
                                <h2>Diretor</h2>
                                <div>
                                    <p>{movie.director}</p>
                                </div>
                            </div>
                            <div className="session-sinopsys-director">
                            <h2>Elenco</h2>
                                <div>
                                    {
                                        elenco.map((elenco) => {
                                            return <p key={elenco}>{elenco}</p>
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="sessions-button-hours">

                        <button className="button-hours">Quinta, 30 Maio, 12:00</button>
                        <button className="button-hours">Quinta, 30 Maio, 12:00</button>
                        <button className="button-price">Comprar</button>

                    </div>




                </div>



                <MovieFooter topMovies={[]} />
            </div>

        </>
    )
}

