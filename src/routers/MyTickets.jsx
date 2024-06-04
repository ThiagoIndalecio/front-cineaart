import { TicketContainer,  } from "../styles/my-tickets.jsx";
import { Link, useLocation } from 'react-router-dom';
import axiosInstance from "../api/api.js";
import { useEffect, useState } from "react";
import 'moment/dist/locale/pt-br';
import moment from 'moment';
import { Button } from "@mui/material";

export default function MyTickets() {
    const [session, setSession] = useState(null);
    const location = useLocation();
    const ticketData = location.state.ticketData;
    const sessionId = location.state.sessionId;

    async function fetchSessionData() {
        const response = await axiosInstance.get(`/api/cinema/sessions/${sessionId}`);
        return response.data;
    }
    console.log(ticketData)
    useEffect(() => {
        moment.locale('pt-br');

        fetchSessionData().then(data => setSession(data));
    }, [sessionId]
);

    return (
        <div className="container-ticket">
        <TicketContainer>
            {ticketData.map(ticket => (
                <div key={ticket.id} className="ticket created-by-anniedotexe">
                    <div className="left">
                        <div className="ticket-info">
                            <p className="date">
                                <span>{session ? moment(session.sessionStartTime).format("dddd") : ''}</span>
                                <span
                                    className="june-29">{session ? moment(session.sessionStartTime).format("DD") : ''}</span>
                            </p>
                            <div className="show-name">
                                <h1>{session ? session.movie.name : ''}</h1>
                            </div>
                            <div className="time">
                                <p>{session ? moment(session.sessionStartTime).format("DD MM YYYY") : ''}</p>
                            </div>
                            <p className="location">
                                <span>Shopping Center</span>
                            </p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="right-info-container">
                            <div className="show-name">
                                <h1>{session ? session.movie.name : ''}</h1>
                            </div>
                            <div className="time">
                                <p>{session ? moment(session.sessionStartTime).format("HH:mm"): ''}<span> ATÉ </span>{session ? moment(session.sessionEndTime).format("HH:mm"): ''} </p>
                            </div>
                            <div className="barcode">
                                <img
                                    src="https://external-preview.redd.it/cg8k976AV52mDvDb5jDVJABPrSZ3tpi1aXhPjgcDTbw.png?auto=webp&s=1c205ba303c1fa0370b813ea83b9e1bddb7215eb"
                                    alt="QR code"
                                />
                            </div>
                            <div>
                                <p className="ticket-number">#20030220</p>
                                <p style={{fontWeight: 'bold'}}>Número da cadeira</p>
                                <span>{ticket.seatNumber}</span>
                            </div>
                        </div>

                    </div>
                    <div>
                        <span id={'individual-price'}>R$ {ticket.paidPrice}</span>
                    </div>
                </div>
            ))}
        </TicketContainer>
            <div className="button-home-container " style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', marginTop: '20px' }}>
                <div className="button-home">
                <Link to="/movie">
                    <Button variant="contained" size="medium">Voltar</Button>
                </Link>

            </div>
        </div>
       
        
        
        </div>
    );
}
