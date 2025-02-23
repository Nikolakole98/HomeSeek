import logo from '../images/logo_1.png';
import { MdOutlineDarkMode } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { MdHomeFilled } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { BsHouseAddFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";


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
}