import FrontEnd from "../components/Frontend";
import MainBar from "../components/MainBar";
import Room from "../components/RoomContext";
import logo1 from '../images/logo_2.png'


export default function Home(){
    return(
        <>
            <MainBar/>
            
            <div className="searchElements">
                <p>Pronadji svoj krov nad glavom</p>
                <div className="bar">
                    Deo za pretragu
                </div>
            </div>
            <div className="topRooms">
                <p>Istaknuti oglasi</p>
                <div className="homeRooms">
                
                    <Room id={1}/>
                    <Room id={2}/>
                    <Room id={3}/>
                    <Room id={4}/>
                    <Room id={5}/>
                </div>
                <div>



                </div>
            </div>

            <FrontEnd/>
        </>
    )
}