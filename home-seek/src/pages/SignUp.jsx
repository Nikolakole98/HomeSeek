import React from 'react'

export default function SignUp(props) {
  function handleClose(){
    props.setTrigger(false);
  }
  return (props.trigger)?(
    <div className='popupSignUp'>
      <div className='popupInnerSignUp'>
        <div className='closeRow'>
        
          <button onClick={handleClose}>X</button>
        </div>
        <div className='signUpContainer'>
          <div className='signUpForm'>
          <div className='loginTitle'>Kreirajte nalog</div>
              <br/>
              <div>
                <form>
                  <div className='signUpData'>
                    <div className={'inputLogin'}>
                      <p>Ime:</p>
                      <input className={'inputBox'}/>       
                    </div>
                    <br />
                    <div className={'inputLogin'}>
                    <p>Prezime:</p>
                      <input className={'inputBox'} />      
                    </div>
                    <br/>
                    <div className={'inputLogin'}>
                    <p>Email:</p>
                      <input className={'inputBox'} />      
                    </div>
                    <br/>
                    <div className={'inputLogin'}>
                    <p>Broj telefona:</p>
                      <input className={'inputBox'} />      
                    </div>
                    <br/>
                  </div>
                </form>
              </div>
             <button>Registruj se</button>
          </div>
        
      <div className='signUpBtn'>
        <button className='btn'>Nastavi preko Gmail</button>
        <button className='btn'>Nastavi preko Facebook</button>
      </div>
        </div>
        <p>By Registering, I accept the Homes.com Terms of Use.</p>
       
     






      </div>
    </div>
 
    
  ):' ';
}

