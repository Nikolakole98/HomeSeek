import { Link } from "react-router-dom";
import logo from '../images/logo_1.png'

export default function MainBar(){

   



    return(
        <div className="mainBar">
            <img src={logo} alt='Logo'/>
            <div className="r1">
                <Link className="link" to={'/searchRooms'}>Pretraga</Link>
                <Link className="link" to={'/favoriteRooms'}>Sacuvani oglasi</Link>
                <Link className="link" to={'/login'}>Prijavi se</Link>

                
                </div>





        </div>
    )
}