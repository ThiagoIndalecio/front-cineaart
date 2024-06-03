import React, {useEffect, useState} from 'react';
import {
    SessionInfoContainer,
    RowNumberContainer,
    SeatsContainer,
    ModalContainer,
    Image
} from "../styles/seatsModal.jsx";
import axiosInstance from "../api/api.js";
import {Modal} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const ModalChooseSeat = ({ show, onClose, sessionHour, scheduleId }) => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [selectedSeatsId, setSelectedSeatsId] = useState([]);
    const [movieName, setMovieName] = useState("");
    const [seatsAvailability, setSeatsAvailability] = useState([]);
    const [sessionBasePrice, setSessionBasePrice] = useState(0);
    const [ticketData, setTicketData] = useState([]);
    const navigate = useNavigate(); // Hook para navegação
    const sessionInfo = sessionHour.split(',')

    const buyTickets = () => {
        const tickets = [];
        selectedSeatsId.forEach(seat => {
            const ticketRequest = {
                seatId: seat.id,
                uuid: uuidv4(),
                paidPrice: sessionBasePrice,
                discountType: 'NONE'
            };
            axiosInstance.post(
                'api/cinema/tickets',
                ticketRequest
            );
            tickets.push(ticketRequest);
        });
        setTicketData(tickets);
    };

    useEffect(() => {
        if (ticketData.length > 0) {
            navigate('/my-tickets', { state: {ticketData: ticketData, sessionId: scheduleId}});
        }
    }, [ticketData, navigate]);

    const transformTo2DArray = (array, rows, columns) => {
        const result = [];
        for (let i = 0; i < rows; i++) {
            const start = i * columns;
            const end = start + columns;
            result.push(array.slice(start, end));
        }
        return result;
    };

    async function fetchData() {
        const response = await axiosInstance.get(`/api/cinema/sessions/${scheduleId}`);
        const data = response.data;
        return data;
    }

    useEffect(() => {
        fetchData().then(response => {
            setMovieName(response.movie.name);
            setSessionBasePrice(response.basePrice);
            setSeatsAvailability(transformTo2DArray(
                response.seats,
                5,
                8
            ));
        });
    }, []);

    const rowIndexRowLetterRelation = {
        1: 'E',
        2: 'D',
        3: 'C',
        4: 'B',
        5: 'A',
    };

    const handleSeatClick = (rowIndex, seatIndex) => {
        const seatKey = `${rowIndex}-${seatIndex}`;
        if (seatsAvailability[rowIndex][seatIndex].available === false) return;

        const newSelectedSeats = [...selectedSeats];
        const seatIndexInSelected = newSelectedSeats.indexOf(seatKey);

        if (seatIndexInSelected > -1) {
            newSelectedSeats.splice(seatIndexInSelected, 1);
        } else {
            newSelectedSeats.push(seatKey);
        }

        if (selectedSeatsId.some(seatId => seatId === seatsAvailability[rowIndex][seatIndex].id)) {
            setSelectedSeatsId(selectedSeatsId.filter(item => item.id !== seatsAvailability[rowIndex][seatIndex].id));
        } else {
            setSelectedSeatsId([...selectedSeatsId, seatsAvailability[rowIndex][seatIndex]]);
        }

        setSelectedSeats(newSelectedSeats);
    };

    const getSeatClass = (rowIndex, seatIndex) => {
        if (!seatsAvailability[rowIndex][seatIndex].available) return 'seat occupied';
        if (selectedSeats.includes(`${rowIndex}-${seatIndex}`)) return 'seat selected';
        return 'seat';
    };

    return (
        <Modal open={show}
               onClose={onClose}>
            <ModalContainer>
                <SessionInfoContainer>
                    <span id={"title"}>RESUMO DA COMPRA</span>
                    <table>
                        <tr>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <Image src={"http://localhost:8080/api/cinema/movies/get-image/1"}></Image>
                            <td>{movieName}</td>
                        </tr>
                        <tr>
                            <Image src={"/calendar.png"}></Image>
                            <td>{sessionInfo[0]}</td>
                        </tr>
                        <tr>
                            <Image src={"/location.png"}></Image>
                            <td>SHOPPING CENTER</td>
                        </tr>
                        <tr>
                            <Image src={"/clock.png"}></Image>
                            <td>{sessionInfo[1]}</td>
                        </tr>
                    </table>
                </SessionInfoContainer>
                <SeatsContainer>
                    <span>ESCOLHA O SEU ASSENTO</span>
                    <div className="container">
                        <div className="screen"></div>

                        <RowNumberContainer>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                            <div>5</div>
                            <div>6</div>
                            <div>7</div>
                            <div>8</div>
                        </RowNumberContainer>

                        {seatsAvailability.map((row, rowIndex) => (
                            <div className="row" key={rowIndex}>
                                <div style={{marginRight: "20px", width: '2%'}}>
                                    <div style={{
                                        fontSize: '20px',
                                        fontWeight: "bold"
                                    }}>{rowIndexRowLetterRelation[rowIndex + 1]}</div>
                                </div>
                                {row.map((seat, seatIndex) => (
                                    <div
                                        key={seatIndex}
                                        className={getSeatClass(rowIndex, seatIndex)}
                                        onClick={() => handleSeatClick(rowIndex, seatIndex)}
                                    ></div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <ul className="showcase">
                        <li>
                            <div className="seat"></div>
                            <small>DISPONÍVEL</small>
                        </li>
                        <li>
                            <div className="seat occupied"></div>
                            <small>INDISPONÍVEL</small>
                        </li>
                        <li>
                            <div className="seat selected"></div>
                            <small>SELECIONADO</small>
                        </li>
                    </ul>
                    <button onClick={buyTickets}>COMPRAR</button>
                </SeatsContainer>
            </ModalContainer>
        </Modal>
    );
};

export default ModalChooseSeat;
