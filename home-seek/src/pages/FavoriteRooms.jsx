
import { useContext } from "react";
import UserProgressContext from "../components/store/UserProgressContext";
import Modal from "../components/UI/Modal";

export default function FavoriteRooms(){
   
    const userProgressCtx=useContext(UserProgressContext);
    return(
        <>
              <Modal className="cart" open={userProgressCtx.progress==='checkout'}>
            <h2>Your Cart</h2>
            <ul>
                <h2>favorite Room</h2>
            </ul>
        </Modal>
        </>
        
    )
}