import { TicketContainer } from "../styles/my-tickets.jsx";
import { useLocation } from 'react-router-dom';
import axiosInstance from "../api/api.js";
import { useEffect, useState } from "react";
import 'moment/dist/locale/pt-br';
import moment from 'moment';

export default function MyTickets() {
    const [session, setSession] = useState(null);
    const location = useLocation();
    const ticketData = location.state.ticketData;
    const sessionId = location.state.sessionId;

    async function fetchSessionData() {
        const response = await axiosInstance.get(`/api/cinema/sessions/${sessionId}`);
        return response.data;
    }

    useEffect(() => {
        moment.locale('pt-br');

        fetchSessionData().then(data => setSession(data));
    }, [sessionId]);

    return (
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
                                <p>8:00 PM <span>ATÉ</span> 11:00 PM</p>
                            </div>
                            <div className="barcode">
                                <img
                                    src="https://external-preview.redd.it/cg8k976AV52mDvDb5jDVJABPrSZ3tpi1aXhPjgcDTbw.png?auto=webp&s=1c205ba303c1fa0370b813ea83b9e1bddb7215eb"
                                    alt="QR code"
                                />
                            </div>
                            <p className="ticket-number">#20030220</p>
                        </div>

                    </div>
                    <div>
                        <span id={'individual-price'}>R$ {ticket.paidPrice}</span>
                    </div>
                </div>
            ))}
        </TicketContainer>
    );
}
