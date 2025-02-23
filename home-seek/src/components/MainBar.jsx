import logo from '../images/logo_1.png';
import { MdOutlineDarkMode } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { MdHomeFilled } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { BsHouseAddFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";


<<<<<<< HEAD
export default function MainBar() {
 
  return (
    <div className="mainBar">
      <img src={logo} alt="Logo" />
      <div className="r1" type="home">
        <button className="link scroll"><MdHomeFilled/> Pocetna strana</button>
        <button className="link scroll"><FaSearch/> Pretraga oglasa</button>
        <button className="link scroll"><BsHouseAddFill /> Dodavanje oglasa</button>
        <button className="link scroll"><MdFavorite/> Sacuvani oglasi</button>
        <div className="r2">
            <button className="link scroll icon"> <MdOutlineDarkMode/></button>
            <button className="link scroll icon"> <GrLanguage/></button>
        </div>
      </div>
    </div>
  );
=======
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
>>>>>>> parent of 963ad23 (version_2)
}