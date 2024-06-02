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

const ModalChooseSeat = ({ show, onClose }) => {
    const [sessionSeats, setSessionSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [sessionTime, setSessionTime] = useState(null);
    const [movieName, setMovieName] = useState("")
    const [seatsAvailability, setSeatsAvailability] = useState([]);
    const data = Date.now();
    const imageUrl = "teste"

    const transformTo2DArray = (array, rows, columns) => {
        const result = [];
        for (let i = 0; i < rows; i++) {
            const start = i * columns;
            const end = start + columns;
            result.push(array.slice(start, end));
        }
        return result;
    };


    async function fetchData (){
        const response = await axiosInstance.get("/api/cinema/sessions/1")
        const data = response.data
        return data
    }

    useEffect(()=>{
        fetchData().then(response => {
            setMovieName(response.movie.name)
            setSessionTime(response.sessionStartTime)
            setSessionSeats(response.seats)
            setSeatsAvailability(transformTo2DArray(
                response.seats,
                5,
                8))
        })
    },[])


    const rowIndexRowLetterRelation = {
        1: 'E',
        2: 'D',
        3: 'C',
        4: 'B',
        5: 'A',
    }

    const handleSeatClick = (rowIndex, seatIndex) => {
        console.log(seatsAvailability[rowIndex][seatIndex])
        const seatKey = `${rowIndex}-${seatIndex}`;
        if (seatsAvailability[rowIndex][seatIndex].available === false) return;

        const newSelectedSeats = [...selectedSeats];
        const seatIndexInSelected = newSelectedSeats.indexOf(seatKey);

        if (seatIndexInSelected > -1) {
            newSelectedSeats.splice(seatIndexInSelected, 1);
        } else {
            newSelectedSeats.push(seatKey);
        }

        setSelectedSeats(newSelectedSeats);
    };

    const getSeatClass = (rowIndex, seatIndex) => {
        if (seatsAvailability[rowIndex][seatIndex].available === false) return 'seat occupied';
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
                            <td>{sessionTime}</td>
                        </tr>

                        <tr>
                            <Image src={"/location.png"}></Image>
                            <td>SHOPPING CENTER</td>
                        </tr>

                        <tr>
                            <Image src={"/clock.png"}></Image>
                            <td>{sessionTime}</td>
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
                                <div style={{marginRight: "10px", fontSize: '20px', fontWeight: "bold"}}>{rowIndexRowLetterRelation[rowIndex + 1]}</div>
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
                </SeatsContainer>
            </ModalContainer>
        </Modal>
    );
};

export default ModalChooseSeat;
