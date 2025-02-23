import { useState } from "react";

export default function AddRoom(props){

    const [buttonAddRoom,setButtonAddRoom]=useState(false);
    function handleClose(){
        props.setTrigger(false);
        setButtonAddRoom(false);
      }


     return(props.trigger)?(
        <div className='popupLogin'>
          <div className='popupInnerLogin'>
            <div className='closeRow'>
              <button onClick={handleClose}>X</button>
            </div>
           </div>
        </div>
      
        
      ):' ';

}