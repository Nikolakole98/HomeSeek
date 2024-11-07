import { Link } from "react-router-dom";
import logo from '../images/logo_1.png';


export default function MainBar(){

    
    return(
        <div className="mainBar">
            <img src={logo} alt='Logo'/>
                <div className="r1 nav navbar-nav navbar-right" type='home'>
                    <Link className="link scroll" to={'/'}><i class="bi bi-house-door"></i> Pocetna strana</Link>
                    <Link className="link scroll" to={'/searchRooms'}><i class="bi bi-search"></i> Pretrazi</Link>
                    <Link className="link scroll" to={'/favoriteRooms'}><i class="bi bi-heart-fill"></i> Sacuvani oglasi</Link>
                    <button className="link scroll">
                        <i class="bi bi-box-arrow-in-left"></i> Prijavi se</button>
                    
                    </div>
                

        </div>
    )
}