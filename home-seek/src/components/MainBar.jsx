import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo_1.png";
import { MdClose, MdFavorite, MdHomeFilled, MdMenu, MdOutlineDarkMode } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import { BsHouseAddFill } from "react-icons/bs";
import { useAuth } from "../context/AuthContext";

export default function MainBar() {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="mainBar">
      <Link to="/">
        <img src={logo} alt="HomeSeek" />
      </Link>
      <button
        className="menuToggle"
        aria-label="Meni"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <MdClose /> : <MdMenu />}
      </button>
      <nav className={menuOpen ? "r1 open" : "r1"}>
        <NavLink className="link scroll" to="/" end><MdHomeFilled /> Početna strana</NavLink>
        <NavLink className="link scroll" to="/searchRooms"><FaSearch /> Pretraga oglasa</NavLink>
        <NavLink className="link scroll" to="/addRoom"><BsHouseAddFill /> Dodavanje oglasa</NavLink>
        <NavLink className="link scroll" to="/favoriteRooms"><MdFavorite /> Sačuvani oglasi</NavLink>
        {user ? (
          <>
            <span className="userName" title={user.name}>{user.name}</span>
            <button className="link scroll" onClick={logout}>Odjavi se</button>
          </>
        ) : (
          <NavLink className="link scroll" to="/login">Prijavi se</NavLink>
        )}
        <div className="r2">
          <button className="link scroll icon" aria-label="Tamna tema"><MdOutlineDarkMode /></button>
          <button className="link scroll icon" aria-label="Jezik"><GrLanguage /></button>
        </div>
      </nav>
    </header>
  );
}
