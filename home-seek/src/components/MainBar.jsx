import { Link } from "react-router-dom";
import logo from '../images/logo_1.png';


export default function MainBar({type}){

    
    return(
        <div className="mainBar">
            <img src={logo} alt='Logo'/>
                <div className="r1 nav navbar-nav navbar-right" type='home'>
                    <Link className="link scroll" to={'/searchRooms'}>Pretrazi</Link>
                    <Link className="link scroll" to={'/favoriteRooms'}>Sacuvani oglasi</Link>
                    <Link className="link scroll" to={'/login'}>Prijavi se</Link>
                    
                    </div>
                

        </div>
    )
}