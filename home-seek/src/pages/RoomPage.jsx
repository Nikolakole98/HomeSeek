import FrontEnd from "../components/Frontend";
import MainBar from "../components/MainBar";
/*import Room from "../components/RoomContext";*/
import roomImg from '../images/room.jpg'; 


export default function RoomPage(){
    return (
        <>           
        <MainBar/>
        <div className="roomConteiner">
                <div className="navigationBar">
                    <p> <i className="bi bi-house-door"></i> / Kuca / Prodaja / Nis</p>
                </div>
            <div className="room">
                
                <div className="nameAdvertisement">
                    <div className="name">
                        
                        <a href=" ">Troiposoban stan na prodaju</a>
                    </div>
                    
                   
                </div>
                <div className="roomLine2">
                <div className="basicData"> 
                   
                    <p><i class="bi bi-house-door-fill"></i>Kuca</p>
                    <p><i class="bi bi-signpost-fill"></i> Izdavanje</p>
                    <p><i class="bi bi-geo-alt-fill"></i> Narodnih heroja bb, Nis</p>
                    <p><i class="bi bi-bookmark-plus-fill"></i>70 m2</p>
                        
                </div>
                </div>
                <div className="roomLine1">
                    <div className="image">
                        <img src={roomImg} alt=' '></img>
                    <div className="r1">
                        <img src={roomImg} alt=' '></img>
                        <img src={roomImg} alt=' '></img>
                        <img src={roomImg} alt=' '></img>
                    </div>
                    </div>
                    <div className="information">
                        <p className="price">18 500 €</p>
                        <div className="seller">
                        <h2>Kontaktiraj vlasnika</h2>
                            <div className="contactMe"></div>
                        </div>  
                    
                    <div className="buttons">
                            <button><i className="bi bi-heart-fill"></i>Sacuvaj oglas</button>
                        </div>
                        <p>Posledne azuriranje:Pre 2 nedelje</p>
                    </div>
                </div>
                <div className="roomLine2">
                <div className="row">
                    <i className="bi bi-clipboard-data-fill"></i>
                    <p>Dodatne informacije</p>
                </div>
                    <div className="addInformation" >
                       
                    </div>
                </div>
                
                </div>
            </div>
            {/*<div className="adsNearby">
                <p>Oglasi u okolini</p>
				<div className=" homeRooms row">
						<Room id={1}/>
						<Room id={2}/>
						<Room id={3}/>
						<Room id={4}/>
						<Room id={5}/>
						
					</div>
					
            </div>*/}
        
        
        <FrontEnd/>
        
      
        </>
        
    )
}