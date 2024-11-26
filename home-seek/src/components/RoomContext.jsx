import { NavLink } from "react-router-dom";
import photo from '../assets/images/explore/e1.jpg';

export default function Room({id}){
    return(
     
	 <NavLink to={'/room'}>
	 	<div className="single-explore-item">
            <div className="single-explore-img">
				<img src={photo} alt=" "></img>					
			</div>						
			<div className="single-explore-txt bg-theme-1">
				<p>Tommy helfinger bar</p>			
				<p className="explore-rating-price">															
                    <span className="explore-price-box">form<span className="explore-price">5$-300$</span></span>						
                    <a href="# ">resturent</a>						
				</p>																							
			</div>										
	</div></NavLink>													
													
											
										
									
								
							
															
       

    )
} 


<div className="roomIcon">
            <div className="roomImg"></div>
            <NavLink to={'/room'}><p>Room</p></NavLink>
            
        </div>