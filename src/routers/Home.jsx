import React from "react";
import '../styles/home.css'
import { Link } from "react-router-dom";
const Home = () => {

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