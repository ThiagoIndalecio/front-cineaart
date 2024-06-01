import React, {useState} from "react";
import '../styles/home.css'
import { Link } from "react-router-dom";
import ModalChooseSeat from "../components/modal-choose-seat.jsx";

const Home = () => {
    const [isSeatModalVisible, setIsSeatModalVisible] = useState(false);

    const handleOpenSeatModal = () => {
        setIsSeatModalVisible(true);
    };

    const handleCloseSeatModal = () => {
        setIsSeatModalVisible(false);
    };

    return (


        <div className="home-container">
            <div className="box">
                <div className="cards">
                    <div className="top-left">
                        <div className="footer-card">
                            <h4>Lazer</h4>
                        </div>
                    </div>
                    <div className="top-right">
                        <div className="footer-card">
                            <h4><Link to="/movie">Cinema</Link></h4>
                            <div className="app">
                                <button onClick={handleOpenSeatModal}>Choose Seats</button>
                                {isSeatModalVisible && (
                                    <div className="modal">
                                        <button className="close-modal" onClick={handleCloseSeatModal}>Close</button>
                                        <ModalChooseSeat/>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="bot-left">
                        <div className="footer-card">
                            <h4>Lojas</h4>
                        </div>
                    </div>
                    <div className="bot-middle">
                        <div className="footer-card">
                            <h4>Alimentação</h4>
                        </div></div>
                    <div className="bot-right">
                        <div className="footer-card">
                            <h4>Serviços</h4>
                        </div></div>
                </div>
            </div>
        </div>
  
        
    )
}

export default Home;