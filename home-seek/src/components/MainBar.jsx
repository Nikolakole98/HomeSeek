import { Link } from "react-router-dom";
import logo from '../images/logo_1.png';


export default function MainBar(){
    
    return(
        <div className="mainBar">
            <img src={logo} alt='Logo'/>
                <div className="r1" type='home'>
                    <Link className="link scroll" to={'/'}><i className="bi bi-house-door"></i> Pocetna strana</Link>
                    <Link className="link scroll" to={'/searchRooms'}><i className="bi bi-search"></i> Pretrazi</Link>
                    <Link className="link scroll" to={'/favoriteRooms'}><i className="bi bi-heart-fill"></i> Sacuvani oglasi</Link>
                    <Link className="link scroll" to={'/login'}><i className="bi bi-box-arrow-in-left"></i> Prijavi se</Link>
                    
                    </div>
                

        </div>
    )
}