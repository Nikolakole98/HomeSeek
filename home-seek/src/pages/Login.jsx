import { useState } from "react";
import SignUp from "./SignUp";

export default function Login(props){
  const[buttonSignUp,setButtonSignUp]=useState(false);
  const[buttonLogin,setButtonLogin]=useState(true);
  function handleClose(){
    props.setTrigger(false);
    setButtonLogin(false);
  }
  function handleSignUp(){
   
    if(buttonLogin===true)
    {
      setButtonLogin(false);

    }
    setButtonSignUp(true);
  }
  


  return(props.trigger)?(
    <div className='popupLogin'>
      <div className='popupInnerLogin'>
        <div className='closeRow'>
          <button onClick={handleClose}>X</button>
        </div>
        <div className='loginTitle'>Prijavite se</div>
      <div className='loginData'>
      <div className={'inputLogin'}>
        <input 
            placeholder="Enter your email here"
            className={'inputBox'}/>
        	    
      </div>
      <br />
      <div className={'inputLogin'}>
        <input 
            placeholder="Enter your password here"
            className={'inputBox'} />
        	    
      </div>
      <br/>
      <div className='row'>
        <p>Zaboravili ste sifru?</p>
      </div>
      <br/>
      </div>
      
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" value={'Prijavite se'} />
      </div>
      <div className='row2'>
        <p>Nemate nalog?
        <button onClick={()=>handleSignUp()}> Registrujte se.</button> 
        </p>
      </div>


      </div>
      <SignUp trigger={buttonSignUp} setTrigger={setButtonSignUp}/>
    </div>
  
    
  ):' ';
}
