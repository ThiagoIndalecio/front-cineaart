import React, { useState } from 'react';

const ModalChooseSeat = () => {
    const [selectedMovie, setSelectedMovie] = useState(16);
    const [selectedSeats, setSelectedSeats] = useState([]);

    const movieOptions = [
        { value: 16, label: 'Avengers: End Game ($16)' },
        { value: 20, label: 'Dark Knight ($20)' },
        { value: 10, label: 'Harry Potter and the Goblet of Fire ($10)' },
        { value: 12, label: 'Transformers ($12)' },
    ];

    const seats = [
        // Array of rows, each containing an array of seats
        ['', '', '', '', '', '', '', ''],
        ['', '', '', 'occupied', 'occupied', '', '', ''],
        ['', '', '', '', '', '', 'occupied', 'occupied'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', 'occupied', 'occupied', '', '', ''],
        ['', 'occupied', '', '', '', 'occupied', 'occupied', ''],
    ];

    const handleMovieChange = (e) => {
        setSelectedMovie(parseInt(e.target.value));
    };

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

    const totalPrice = selectedSeats.length * selectedMovie;

    return (
        <div>
            <div className="move-container">
                <label>Pick a movie:</label>
                <select id="movie" value={selectedMovie} onChange={handleMovieChange}>
                    {movieOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>

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
                {seats.map((row, rowIndex) => (
                    <div className="row" key={rowIndex}>
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

            <p className="text">
                You have selected <span id="count">{selectedSeats.length}</span> seats for the price of $
                <span id="total">{totalPrice}</span>!
            </p>
        </div>
    );
};

export default ModalChooseSeat;
