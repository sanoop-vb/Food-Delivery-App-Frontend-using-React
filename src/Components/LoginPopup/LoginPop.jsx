import React, { useState } from 'react'
import './LoginPop.css'
import { assets } from '../../assets/assets'
const LoginPop = ({setshowlogin}) => {

    const [currstate,setcurrstate] = useState('Login')

  return (
    <div className='login-popup'>
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currstate}</h2>
            <img onClick={()=>setshowlogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currstate==='Login'?<></>:<input type="text" placeholder='Yor Name' required/>}
            
            <input type="text" placeholder='Your email' required />
            <input type="text" placeholder='Password' required />
        </div>
        <button>{currstate==='Sign Up'?"create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By continuing i agree to the terms of use & privacy policy</p>
        </div>
        {currstate==='Login'
        ?<p>Create a new account? <span onClick={()=>setcurrstate("Sign Up")}>click here</span> </p>
        :<p>Already have an account? <span onClick={()=>setcurrstate("Login")}>Login here</span></p>
        }
        
        
      </form>
    </div>
  )
}

export default LoginPop
