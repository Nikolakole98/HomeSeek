import React, { useState } from 'react'
import { NavLink} from 'react-router-dom'
import logo from '../images/logo_1.png'



function onButtonClick(){
  console.log('prijevite se');
};
function Login(){
  
  
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  return(
   <div className='modalBackground'>
        <div className='loginContainer'>
        <div>
          <img src={logo} alt='Logo'/>
          </div>
      <div className='loginTitle'>
            
            
            <div>Prijavite se</div>
      </div>
      <br/>
      <div className='loginData'>
      <div className={'inputLogin'}>
        <input 
            value={email} 
            placeholder="Enter your email here"
            onChange={(ev) => setEmail(ev.target.value)}  
            className={'inputBox'}/>
        	    
      </div>
      <br />
      <div className={'inputLogin'}>
        <input 
            value={password} 
            placeholder="Enter your password here"
            onChange={(ev) => setPassword(ev.target.value)} 
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
        <input 
            className={'inputButton'} 
            type="button" 
            onClick={onButtonClick}    
            value={'Prijavite se'} />
      </div>
      <div className='row'>
        <p>Nemate nalog?
        <NavLink to={'/signUp'}> Registrujte se.</NavLink>
        
        </p>
      </div>
      
    </div>
    </div>
    
    
  );
}

export default Login
