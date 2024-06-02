import {TicketContainer} from "../styles/my-tickets.jsx";
import { useLocation } from 'react-router-dom';
import axiosInstance from "../api/api.js";
import {useEffect} from "react";

export default function MyTickets() {
    const location = useLocation();
    const ticketData = location.state.ticketData
    const sessionId = location.state.sessionId

    async function fetchSessionData() {
        const response = await axiosInstance.get("/api/cinema/sessions/" + sessionId);
        const data = response.data;
        return data;
    }

    useEffect(() => {
        fetchSessionData()
    }, []);

    return (
        <TicketContainer>
            <div className="ticket created-by-anniedotexe">
                <div className="left">
                    <div className="ticket-info">
                        <p className="date">
                            <span>TUESDAY</span>
                            <span className="june-29">JUNE 29TH</span>
                            <span>2021</span>
                        </p>
                        <div className="show-name">
                            <h1>SOUR Prom</h1>
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
