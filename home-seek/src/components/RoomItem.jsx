import { useContext } from "react";
import CartContext from "./store/CartContext.jsx";
import { Link } from "react-router-dom";

export default function RoomItem({room}){
    const cartCtx=useContext(CartContext);
    function handleAddMealToCart(){
       cartCtx.addItem(room); 
    }
    return<li className="meal-item">
        <article>
            <img src={`http://localhost:3000/${room.image}`} alt={room.name}></img>
            <div>
                <Link  to={'/room'}><h3>{room.name}</h3></Link>
                <p className="meal-item-description" >{room.description}</p>
                <p className="meal-item-price">{room.price}</p>
            </div>
           
        </article>
    </li>;
}