import { NavLink } from "react-router-dom";
import photo from '../assets/images/explore/e1.jpg';
import person from "../assets/images/explore/person.png";

export default function Room({id}){
    return(
     <div className=" col-md-4 col-sm-6">   
		<div className="single-explore-item">
            <div className="single-explore-img">
				<img src={photo} alt=" "></img>					
			</div>						
			<div className="single-explore-txt bg-theme-1">
            <NavLink to={'/room'}><p>tommy helfinger bar</p></NavLink>				
				<p className="explore-rating-price">									
                    <a href="# "> 10 ratings</a> 						
                    <span className="explore-price-box">form<span className="explore-price">5$-300$</span></span>						
                    <a href="# ">resturent</a>						
				</p>							
			<div className="explore-person">								
				<div className="row">						
					<div className="col-sm-2">					
						<div className="explore-person-img">			
							<a href="# "><img src={person} alt="explore person"></img></a>		
						</div>				
					</div>						
					<div className="desc">							
                    <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua.... 
						</p>													
					</div>	
				</div>							
			</div>								
			<div className="explore-open-close-part">														
				<div className="row">									
					<div className="col-sm-5">							
						<button className="close-btn" onclick="window.location.href='#'">close now</button>					
					</div>						
					<div className="col-sm-7">						
						<div className="explore-map-icon">			
							<a href="# "><i data-feather="map-pin"></i></a>
							<a href="# "><i data-feather="upload"></i></a>						
							<a href="# "><i data-feather="heart"></i></a>									
						</div>					
					</div>							
				</div>							
			</div>								
		</div>										
	</div>												
	</div>												
											
										
									
								
							
															
       

    )
} 


<div className="roomIcon">
            <div className="roomImg"></div>
            <NavLink to={'/room'}><p>Room</p></NavLink>
            
        </div>