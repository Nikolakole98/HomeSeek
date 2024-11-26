import { NavLink } from "react-router-dom";
import FrontEnd from "../components/Frontend";
import Room from "../components/RoomContext";
import roomImg from '../images/room.jpg'; 
import MainBar from "../components/MainBar";

export default function Home(){
	

    return(
		<>
		
			<section id="home" className="home welcome-hero">
			<MainBar/>
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
                        <i className="bi bi-house-door-fill"></i>
                          <input type="text" placeholder="Tip nekretnine.." />
                        </form>
                        <div className="welcome-hero-form-icon">
                          <i className="flaticon-list-with-dots"></i>
                        </div>
                      </div>
                      <div className="single-welcome-hero-form">
                        
                        <form action="index.html">
                        <i className="bi bi-geo-alt-fill"></i>
                          <input type="text" placeholder="Lokacija" />
                        </form>
                        <div className="welcome-hero-form-icon">
                          <i claclassNamess="flaticon-gps-fixed-indicator"></i>
                        </div>
                      </div>
                    </div>
                    <div className="welcome-hero-serch">
                      <NavLink className="welcome-hero-btn" to='/searchRooms'>
                      <i className="bi bi-search"></i> Pretrazi 
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
								<h2><a href="# ">Pronadjite nekretninu koja vam odgovara!</a></h2>
								<p>
									Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua. 
								</p>
							</div>
						</div>
						<div className="col-md-2 col-sm-2 works">
							<div className="single-how-works">
								<h2><a href="# ">Postavite oglas za svoju nekretninu!</a></h2>
								<p>
									Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua. 
								</p>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		
		</section>
		<section id="explore" className="explore">
			<div className="container">
				<div className="section-header">
					<h2>Istaknuti oglasi</h2>
					<p></p>
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
								<button className="appsLand-btn subscribe-btn" onClick="window.location.href='#'">
									creat account
								</button>
							</form>
						</div>
					</div>	
				</div>
			</div>

		</section> 
            <FrontEnd/>
		</>
			
			

       
    );
}