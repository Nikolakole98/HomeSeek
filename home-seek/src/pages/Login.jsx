import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../images/logo_1.png'


function onButtonClick(){

};
const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate()
  return (
    <div className='bodyLogin'>
        <div className={'loginContainer'}>
        
        
      <div className={'loginTitle'}>
            <NavLink to={'/'}><img src={logo} alt='Logo'/></NavLink>
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
        	    <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputLogin'}>
        <input 
            value={password} 
            placeholder="Enter your password here"
            onChange={(ev) => setPassword(ev.target.value)} 
            className={'inputBox'} />
        	    <label className="errorLabel">{passwordError}</label>
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
    
  )
}

export default Login