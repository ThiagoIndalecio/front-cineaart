import {TicketContainer} from "../styles/my-tickets.jsx";
import { useLocation } from 'react-router-dom';
import axiosInstance from "../api/api.js";
import {useEffect, useState} from "react";

export default function MyTickets() {
    const [session, setSession] = useState(null);
    const location = useLocation();
    const ticketData = location.state.ticketData;
    const sessionId = location.state.sessionId;
    const sessionDateInfo = {
        diaDaSemana: 'Segunda',
        diaDoMes: 28,
        mes: 'Junho',
        inicioSessao: '12:00'
    };

    async function fetchSessionData() {
        return await axiosInstance.get(`/api/cinema/sessions/${sessionId}`);
    }

    useEffect(() => {
        fetchSessionData().then(response => setSession(response.data));
    }, [sessionId]);

    return (
        <TicketContainer>
            <div className="ticket created-by-anniedotexe">
                <div className="left">
                    <div className="ticket-info">
                        <p className="date">
                            <span> {sessionDateInfo.diaDaSemana}</span>
                            <span className="june-29"> {sessionDateInfo.diaDoMes} </span>
                        </p>
                        <div className="show-name">
                            <h1>{session ? session.movie.name : 'Carregando...'}</h1>
                            <h2>Olivia Rodrigo</h2>
                        </div>
                        <div className="time">
                            <p>8:00 PM <span>TO</span> 11:00 PM</p>
                            <p>DOORS <span>@</span> 7:00 PM</p>
                        </div>
                        <p className="location">
                            <span>East High School</span>
                            <span className="separator"><i className="far fa-smile"></i></span>
                            <span>Salt Lake City, Utah</span>
                        </p>
                    </div>
                </div>
                <div className="right">
                    <div className="right-info-container">
                        <div className="show-name">
                            <h1>SOUR Prom</h1>
                        </div>
                        <div className="time">
                            <p>8:00 PM <span>TO</span> 11:00 PM</p>
                            <p>DOORS <span>@</span> 7:00 PM</p>
                        </div>
                        <div className="barcode">
                            <img
                                src="https://external-preview.redd.it/cg8k976AV52mDvDb5jDVJABPrSZ3tpi1aXhPjgcDTbw.png?auto=webp&s=1c205ba303c1fa0370b813ea83b9e1bddb7215eb"
                                alt="QR code"/>
                        </div>
                        <p className="ticket-number">#20030220</p>
                    </div>
                </div>
            </div>
        </TicketContainer>
    );
}
