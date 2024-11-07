import FrontEnd from "../components/Frontend";
import MainBar from "../components/MainBar";

export default function SearchRooms(){
    return(
        <>
            <MainBar/>
            <div className="searchConteiner">
                <div className="searchElements">
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
                      <button className="welcome-hero-btn" to='/searchRooms'>
                      <i class="bi bi-search"></i> Pretrazi 
                      </button>
                    </div>
                  </div>



                </div>
                <div className="searchResults">

                </div>

                <b2>Stranice za pretragu</b2>


            </div>
            <FrontEnd/>
            






        </>
        
    )
}