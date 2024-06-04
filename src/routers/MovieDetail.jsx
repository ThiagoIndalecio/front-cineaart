import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import MovieFooter from "../components/movie-footer";
import axios from "axios";
import 'moment/dist/locale/pt-br';
import moment from 'moment';
import '../styles/movie-detail.css';
import Eror404 from "./Error404";
import ModalChooseSeat from "../components/modal-choose-seat.jsx";

export default function MovieDetail() {
    const params = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [session, setSession] = useState([]);
    const [movie, setMovie] = useState([]);
    const [elenco, setElenco] = useState([]);
    const [uniqueDay, setUniqueDay] = useState([]);
    const [selectedDate, setSelectedDate] = useState([]);
    const [sessionByDay, setSessionsByDay] = useState([]);
    const [selectedButtonId, setSelectedButtonId] = useState(null);
    const [selectedHourButtonId, setSelectedHourButtonId] = useState(null);
    const [selectedScheduleDate, setSelectedScheduleDate] = useState(null)

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleButtonClick = (dateValue, id) => {
        setSelectedDate(dateValue);
        setSelectedButtonId(id);
        const hoursSessions = session.filter((hour) => moment(hour.sessionStartTime).format("DD") === dateValue);
        setSessionsByDay(hoursSessions);
    };

    const handleHourButtonClick = (id, date) => {
        setSelectedHourButtonId(id);
        setSelectedScheduleDate(date)
    };

    useEffect(() => {
        async function dataSession() {
            const response = await axios.get(`http://localhost:8080/api/cinema/sessions/movies/${params.id}`);
            const data = response.data.content;

            moment.locale('pt-br');

            setSession(data);
            const uniqueSessions = data.reduce((acc, session) => {
                const sessionDate = moment(session.sessionStartTime).format('YYYY-MM-DD');
                if (!acc.find(item => moment(item.sessionStartTime).format('YYYY-MM-DD') === sessionDate)) {
                    acc.push(session);
                }
                return acc;
            }, []);

            uniqueSessions.sort((a, b) => {
                return new Date(a.sessionStartTime) - new Date(b.sessionStartTime);

            });

            setUniqueDay(uniqueSessions)


        }

        async function dataMovie() {
            const response = await axios.get(`http://localhost:8080/api/cinema/movies/${params.id}`);
            const dataMovie = response.data;
            setMovie(dataMovie);
            setElenco(response.data.movieCast.split(','));
        }

        dataMovie();
        dataSession();


    }, [params.id]);

    { if (params.id === 'undefined') return(<Eror404 />)}

    return (
       
        <>
            {isModalOpen && selectedHourButtonId && <ModalChooseSeat scheduleId={selectedHourButtonId} sessionHour={selectedScheduleDate} show={isModalOpen} onClose={handleCloseModal} />}

            <div className="container-movies">
                <div className="background-banner">
                    <img src="https://storage.googleapis.com/portal-da-promo/L01_banner_promocaodroetker-cinemacombolodecaneca-20221656088449614.jpg" alt="" />
                </div>
                <div className="session-row">
                    <div className="session-row-image">
                        <img src={`http://localhost:8080/api/cinema/movies/get-image/${params.id}`} />
                    </div>
                    <div className="session-row-days">
                        {
                            uniqueDay.map((sessionDay) => (
                                <button
                                    key={sessionDay.id}
                                    onClick={() => handleButtonClick(moment(sessionDay.sessionStartTime).format("DD"), sessionDay.id)}
                                    className={`button-days ${selectedButtonId === sessionDay.id ? 'selected' : ''}`}
                                >
                                    <span className="button-days-subtitle">{moment(sessionDay.sessionStartTime).format("ddd")}</span>
                                    <span className="button-days-tittle">{moment(sessionDay.sessionStartTime).format("DD")}</span>
                                    <span className="button-days-end">{moment(sessionDay.sessionStartTime).format("MMM")}</span>
                                </button>
                            ))
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
                                    {elenco.map((elenco) => (
                                        <p key={elenco}>{elenco}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sessions-button-hours">
                        {sessionByDay.map((schedules) => (
                            <button
                                key={schedules.id}  
                                onClick={() => handleHourButtonClick(schedules.id,moment(schedules.sessionStartTime).format("dddd DD MMMM, HH:mm"))}
                                className={`button-hours ${selectedHourButtonId === schedules.id ? 'selected' : ''}`}
                            >
                                {moment(schedules.sessionStartTime).format("dddd DD MMMM, HH:mm")}
                            </button>
                        ))}
                        <button className="button-price" 
                        onClick={handleOpenModal}
                        >Escolher Assento</button>
                    </div>
                </div>
                <MovieFooter />
            </div>
        </>
    );
}
