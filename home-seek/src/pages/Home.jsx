import { NavLink } from "react-router-dom";
import FrontEnd from "../components/Frontend";
import Room from "../components/RoomContext";
import MainBar from "../components/MainBar";

export default function Home(){
	

    return(
		<>
			<section className="homeBackground">
				<MainBar/>
				<div className="welcome-hero">
				<div className="container welcome-txt">
                  <div className="welcome-hero-txt">
                    <h2>Pronadjite dom u mestu koje volite</h2>
					<p>Kada tražite nekretninu za iznajmljivanje ili kupovinu, 
						uradite to sa poverenjem. Izračunajte svoj budžet, 
						osvežite životne resurse za iznajmljivanje i organizujte
						 se za selidbu sve na jednom mestu!</p>
                  </div>
                  <div className="welcome-hero-serch-box">
                    <div className="welcome-hero-form">
						<div className="search-box-type">
							TIP
						</div>
						<div className="search-box-location">
							LOKACIJA	
						</div>
						<div>
						<i className="bi bi-search"></i>
						</div>
					  
					  
                    </div>
                    <div className="welcome-hero-serch">
                      <NavLink className="welcome-hero-btn" to='/searchRooms'>
                      <i className="bi bi-search"></i> Pretrazi 
                      </NavLink>
                    </div>
                  </div>
                </div>
					<div className="welcome-hero-img">

						</div>
				</div>
				
				
				
			</section>	
			{/*<section id="works" className="works">
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
		
		</section>*/ }
		<section id="explore" className="explore">
			<div className="container">
				<div className="section-header">
					<h2>Istrazite kuce u svojoj blizini</h2>
				
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
				
				
				
			
            
	
		
    
		{/* 
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
		 */}
   
            <FrontEnd/>
		</>
			
			

       
    );
}