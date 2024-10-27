import { NavLink } from "react-router-dom";

export default function Room({id}){
    return(
        <div className="roomContainer">
            <div className="roomImg"></div>
            <NavLink to={'/room'}><p>Room</p>
            <p>{id}</p></NavLink>
            
        </div>

    )
}