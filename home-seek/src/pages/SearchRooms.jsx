import FrontEnd from "../components/Frontend";
import MainBar from "../components/MainBar";

export default function SearchRooms(){
  return(
  <>
    <MainBar/>
    <div className="searchConteiner">
      <div className="searchElements">
            <div className="searchBox">
              <div>
                <select>
                  <option>Kupovina</option>
                  <option>Iznajmljivanje</option>
                </select>        
              </div>
              <div>
                  <input placeholder="Lokacija" />
                  <button><i className="bi bi-search"></i> </button>	
              </div>
            </div> 
            <div className="selectBtn">
                <select>
                  <option>Cena</option>
                  <option>do 150$</option>
                  <option>od 150 do 300$</option>
                  <option>od 300$ do 500$</option>
                  <option>vise od 500$</option>
                </select>        
              </div>
              <div className="selectBtn">
                <select>
                  <option>Broj soba</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>vise od 4</option>
                </select>        
              </div>                                    
      </div>  
      <div className="searchResults">

      </div>
      <b2>Stranice za pretragu</b2>              
  </div>
      <FrontEnd/>
  </>
)}   
      
     


               
            
            





