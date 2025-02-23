import FrontEnd from "../components/Frontend";
import MainBar from "../components/MainBar";


export default function Home(){
    return(
		<>
			{/*Hero Section*/}
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
                 {/*} <div className="welcome-hero-serch-box">
                    <div className="welcome-hero-form">
						<div className="search-box-type">	
						</div>
						<div className="search-box-location">
							<input placeholder="Lokacija" />	
						</div>
                    </div>
                    <div className="welcome-hero-serch">
                      <NavLink className="welcome-hero-btn" to='/searchRooms'>
                      <i className="bi bi-search"></i> Pretrazi 
                      </NavLink>
                    </div>
                  </div>*/}
                </div>
				</div>	
			</section>	
			{/*Mogucnosti sajta*/}
			<section>
				<div className="home-txt-1">
					<h2>Mogucnosti sajta.</h2>
				</div>
				<div className="description-section">
					<div className="description-box">
						<h1>Pronalazenje nekretnine po zelji.</h1>
					</div>
					<div className="description-box">
						<h1>Dodavanje nekretnine za prodaju ili izdavanje.</h1>
					</div>
					<div className="description-box">
						<h1>Sacuvanje oglasa koji vam odgovaraju.</h1>
					</div>

				</div>
				
			</section>
			{/*Popularni oglasi*/}
			<section>
				<div className="home-txt-1">
					<h2>Popularni oglasi.</h2>
				</div>
			</section>
			{/*Kontaktirajte nas*/}
			<section>
				<div className="home-txt-1">
					<h2>Kontaktirajte nas.</h2>
				</div>
			</section>
   
            <FrontEnd/>
		</>
			
			

       
    );
}