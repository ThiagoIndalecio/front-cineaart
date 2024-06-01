import React, {useEffect, useState} from 'react';
import {RowNumberContainer, SeatsModalContainer} from "../styles/seatsModal.jsx";
import axiosInstance from "../api/api.js";

const ModalChooseSeat = () => {
    const transformTo2DArray = (array, rows, columns) => {
        const result = [];
        for (let i = 0; i < rows; i++) {
            const start = i * columns;
            const end = start + columns;
            result.push(array.slice(start, end));
        }
        return result;
    };

    const [sessionSeats, setSessionSeats] = useState([])
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [seatsAvailability, setSeatsAvailability] = useState([])

    async function fetchData (){
        const response = await axiosInstance.get("/api/cinema/sessions/1")
        const data = response.data
        return data
    }

    const seats = [
        ['', '', '', '', '', '', '', ''],
        ['', '', '', 'occupied', 'occupied', '', '', ''],
        ['', '', '', '', '', '', 'occupied', 'occupied'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', 'occupied', 'occupied', '', '', ''],
    ];

    useEffect(()=>{
        fetchData().then(response => {
            setSessionSeats(response.seats)
            setSeatsAvailability(transformTo2DArray(
                response.seats.map(element => element.available),
                5,
                8))
        })
    },[seats])


    const rowIndexRowLetterRelation = {
        1: 'E',
        2: 'D',
        3: 'C',
        4: 'B',
        5: 'A',
    }


    const handleSeatClick = (rowIndex, seatIndex) => {
        const seatKey = `${rowIndex}-${seatIndex}`;
        if (seats[rowIndex][seatIndex] === 'occupied') return;

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
        if (seats[rowIndex][seatIndex] === 'occupied') return 'seat occupied';
        if (selectedSeats.includes(`${rowIndex}-${seatIndex}`)) return 'seat selected';
        return 'seat';
    };

    return (
        <SeatsModalContainer>
            <ul className="showcase">
                <li>
                    <div className="seat"></div>
                    <small>Available</small>
                </li>
                <li>
                    <div className="seat selected"></div>
                    <small>Selected</small>
                </li>
                <li>
                    <div className="seat occupied"></div>
                    <small>Occupied</small>
                </li>
            </ul>

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

                {seats.map((row, rowIndex) => (
                    <div className="row" key={rowIndex}>
                        <div style={{marginRight: "10px"}}>{rowIndexRowLetterRelation[rowIndex + 1]}</div>
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
        </SeatsModalContainer>
    );
};

export default ModalChooseSeat;
