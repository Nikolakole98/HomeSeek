import FrontEnd from "../components/Frontend";
import MainBar from "../components/MainBar";

export default function SearchRooms(){
  return(
  <>
  <MainBar/>
  <div className="searchConteiner">
    <div className="searchElements">
      <div className="titleName"><h2>Najveci izbor oglasa za stanove i kuce na jednom mestu</h2></div>
      <div className="searchForm">
        <div className="single-welcome-hero-form">
          <form>
            <i class="bi bi-house-door-fill"></i>
            <input type="text" placeholder="Tip nekretnine.." />
          </form>
        </div>
        <div className="single-welcome-hero-form">
          <form>
            <i class="bi bi-house-door-fill"></i>
            <input type="text" placeholder="Tip nekretnine.." />
          </form>
        </div>
        <div className="single-welcome-hero-form">
          <form>
            <i class="bi bi-house-door-fill"></i>
            <input type="text" placeholder="Tip nekretnine.." />
          </form>
        </div>
        <div className="single-welcome-hero-form c4">
          <form>
            <i class="bi bi-house-door-fill"></i>
            <input type="text" placeholder="Tip nekretnine.." />
          </form>
        </div>
        <div className="single-welcome-hero-form">
          <form>
            <i class="bi bi-house-door-fill"></i>
            <input type="text" placeholder="Tip nekretnine.." />
          </form>
        </div>  
      </div>
      <div className="welcome-hero-serch">
          <button className="welcome-hero-btn" to='/searchRooms'><i class="bi bi-search"></i> Pretrazi </button>            
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