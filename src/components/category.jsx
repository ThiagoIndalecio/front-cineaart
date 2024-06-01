import React from "react";
import { Link } from "react-router-dom";
import '../styles/category.css'

const Category = () =>{
    return (
        <div class="category-conteiner">
            
           <div class="categories">
           <button id="button-category" >Lazer</button>
           <Link to="/movie">
            <button id="button-movie">Cinema</button>
           </Link>
           <button id="button-food">Lojas</button>
           <button id="button-food">Alimentação</button>
           <button id="button-events">Serviços</button>
           </div>

        </div>   
        
        
    )
}
export default Category
