import {useState} from 'react';
import { NavLink } from "react-router-dom";
import FrontEnd from "../components/Frontend";
import Room from "../components/RoomContext";
import roomImg from '../images/room.jpg';
import Login from '../pages/Login';
import { Link } from "react-router-dom";
import logo from '../images/logo_1.png'; 



export default function Home(){
    const [openModal,setOpenModal]=useState(false);
	const [openHome,setOpenHome]=useState(true);

	function onButtonClick(){
		setOpenModal(true);
		setOpenHome(false);
	};

    return(
        <>

		{openModal && <Login open={openModal}/>}
             <div className="mainBar">
            <img src={logo} alt='Logo'/>
                <div className="r1 nav navbar-nav navbar-right" type='home'>
                    <Link className="link scroll" to={'/'}><i class="bi bi-house-door"></i> Pocetna strana</Link>
                    <Link className="link scroll" to={'/searchRooms'}><i class="bi bi-search"></i> Pretrazi</Link>
                    <Link className="link scroll" to={'/favoriteRooms'}><i class="bi bi-heart-fill"></i> Sacuvani oglasi</Link>
                    <button className="link scroll"
						onClick={()=>onButtonClick()}>
                        <i class="bi bi-box-arrow-in-left"></i> Prijavi se</button>
                    </div>
        </div>
			{openHome && (
			<div>
			<section id="home" className="welcome-hero">
                <div className="container">
                  <div className="welcome-hero-txt">
                    <h2>Najbolja mesta za vas i <br/> to je sve sto vam je potrebno </h2>
                    <p>
                      Nadjite Kuce, Stanove, Lokale i sve ostale nekretnine koje vam najbolje odgovaraju
                    </p>
                  </div>
                  <div className="welcome-hero-serch-box">
                    <div className="welcome-hero-form">
                      <div className="single-welcome-hero-form">
                        <form action="index.html">
                        <i class="bi bi-house-door-fill"></i>
                          <input type="text" placeholder="Tip nekretnine.." />
                        </form>
                        <div className="welcome-hero-form-icon">
                          <i className="flaticon-list-with-dots"></i>
                        </div>
                      </div>
                      <div className="single-welcome-hero-form">
                        
                        <form action="index.html">
                        <i class="bi bi-geo-alt-fill"></i>
                          <input type="text" placeholder="Lokacija" />
                        </form>
                        <div className="welcome-hero-form-icon">
                          <i claclassNamess="flaticon-gps-fixed-indicator"></i>
                        </div>
                      </div>
                    </div>
                    <div className="welcome-hero-serch">
                      <NavLink className="welcome-hero-btn" to='/searchRooms'>
                      <i class="bi bi-search"></i> Pretrazi 
                      </NavLink>
                    </div>
                  </div>
                </div>

		</section>
            
    
		<section id="list-topics" className="list-topics">
			<div className="container">
				<div className="list-topics-content">
					<ul>
						<li>
							<div className="single-list-topics-content">
								<div className="single-list-topics-icon">
                <img src={roomImg} alt=' '/>
								</div>
								<h2><a href="# ">Stanovi</a></h2>
                  <p>214 oglasa</p>
							</div>
						</li>
						<li>
							<div className="single-list-topics-content">
								<div className="single-list-topics-icon">
                <img src={roomImg} alt=' '/>
								</div>
								<h2><a href="# ">Kuce</a></h2>
								<p>214 oglasa</p>
							</div>
						</li>
						<li>
							<div className="single-list-topics-content">
								<div className="single-list-topics-icon">
                <img src={roomImg} alt=' '/>
								</div>
								<h2><a href="# ">Lokali</a></h2>
								<p>185 oglasa</p>
							</div>
						</li>
						<li>
							<div className="single-list-topics-content">
								<div className="single-list-topics-icon">
                <img src={roomImg} alt=' '/>
								</div>
								<h2><a href="# ">Placevi</a></h2>
								<p>200 oglasa</p>
							</div>
						</li>
						<li>
							<div className="single-list-topics-content">
								<div className="single-list-topics-icon">
                <img src={roomImg} alt=' '/>
								</div>
								<h2><a href="# ">Vikendice</a></h2>
								<p>120 oglasa</p>
							</div>
						</li>
					</ul>
				</div>
			</div>

		</section>
    <section id="works" className="works">
			<div className="container">
				<div className="section-header">
					<h2>Kako radi?</h2>
					<p>Saznaj kako radi nas sajt.</p>
				</div>
				<div className="works-content">
					<div className="row">
						<div className="col-md-2 col-sm-2 works">
							<div className="single-how-works">
								<div className="single-how-works-icon">
									<i className="flaticon-lightbulb-idea"></i>
								</div>
								<h2><a href="# ">Izaberite sta vam treba</a></h2>
								<p>
									Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua. 
								</p>
								<button className="welcome-hero-btn how-work-btn" onclick="window.location.href='#'">
									Saznaj vise
								</button>
							</div>
						</div>
						<div className="col-md-2 col-sm-2 works">
							<div className="single-how-works">
								<div className="single-how-works-icon">
									<i className="flaticon-networking"></i>
								</div>
								<h2><a href="# ">Pronadjite sta vam odgovara</a></h2>
								<p>
									Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua. 
								</p>
								<button className="welcome-hero-btn how-work-btn" onclick="window.location.href='#'">
									Saznaj vise
								</button>
							</div>
						</div>
						<div className="col-md-2 col-sm-2 works">
							<div className="single-how-works">
								<div className="single-how-works-icon">
									<i className="flaticon-location-on-road"></i>
								</div>
								<h2><a href="# ">Ostvarite kontakt sa prodavcem</a></h2>
								<p>
									Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua. 
								</p>
								<button className="welcome-hero-btn how-work-btn" onclick="window.location.href='#'">
									Saznaj vise
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		
		</section>
		<section id="explore" className="explore">
			<div className="container">
				<div className="section-header">
					<h2>explore</h2>
					<p>Explore New place, food, culture around the world and many more</p>
				</div>
				<div className="explore-content">
					<div className=" homeRooms row">
            <Room id={1}/>
            <Room id={2}/>
            <Room id={3}/>
            <Room id={4}/>
            <Room id={5}/>
						
					</div>
				</div>
			</div>

		</section>

    <section id="contact"  className="subscription">
			<div className="container">
				<div className="subscribe-title">
					<h2>
						do you want to add your business listing with us?
					</h2>
          <br/>
					<p>
						Listrace offer you to list your business with us and we very much able to promote your Business.
					</p>
				</div>
				<div className="row">
					<div className="col-sm-12">
						<div className="subscription-input-group">
							<form action="#">
								<input type="email" className="subscription-input-form" placeholder="Enter your email here"/>
								<button className="appsLand-btn subscribe-btn" onclick="window.location.href='#'">
									creat account
								</button>
							</form>
						</div>
					</div>	
				</div>
			</div>

		</section>
	



            
            <FrontEnd/>
			</div>)}
          
        </>
    )
}