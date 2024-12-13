import { Link } from "react-router-dom";
import logo from '../images/logo_1.png';


export default function MainBar(){
    
    return(
        <div className="mainBar">
           
                <div className="r1" type='home'>
                    <Link className="link scroll" to={'/searchRooms'}> Prodaja</Link>
                    <Link className="link scroll" to={'/searchRooms'}> Izdavanje</Link>
                    </div>    
            <img src={logo} alt='Logo'/>
            <div className="r1" type='home'>
                   <Link className="link scroll" to={'/favoriteRooms'}><i className="bi bi-heart-fill"></i> Sacuvani oglasi</Link>
                    <Link className="link scroll" to={'/login'}><i className="bi bi-box-arrow-in-left"></i> Prijavi se</Link>
                    
                    </div>   
        </div> 
    )
}