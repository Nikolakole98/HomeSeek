import React from 'react'

function SignUp(props) {
  return (props.trigger)?(
    <div className='popup'> 
    <div className='popup-inner'>
        <h2>SignUp</h2>
        <button className='close-btn' onClick={()=>props.setTrigger(false)}>Close</button>
        {props.children}
        </div>
    
    </div>
   
  ):" ";
}

export default SignUp