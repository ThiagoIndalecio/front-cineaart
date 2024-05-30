import React from "react";
import '../styles/header.css'
import { Link } from "react-router-dom";

const Header = () => {
    return (
     
        <div class="page-header">
            <div class="logo">
                <Link to="/">
                    <h2>Shopping Center</h2>  
                </Link>

            </div>
       
            <div class="search-container">
                <input type="text" class="search-input" placeholder="Buscar" />
                <button class="search-button">Buscar</button>
             </div>

        <div class="header-right"><button>Sign in</button></div>
      </div>

    )
}

export default Header