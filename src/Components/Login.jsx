import React from 'react'
import {NavLink} from "react-router-dom"

const Login = () => {
  return (
    <div className='d-flex logDiv' style={{justifyContent:"center",alignItems:"center",height:"71.5vh",}}>
     <div className="login">
    
    <h3 className="h3">BLOGZY</h3>
    <i className="fa-sharp fa-solid fa-xmark" id="close-btn"></i>
    <input type="email" name="" id="login" placeholder="Email" /> <br />
    <input type="password" name="" id="password" placeholder="Password" />
    <button className="btn btn-primary">Login</button>
  </div> 
    <NavLink to="/SignUp"><button className='btn btn-danger' id='registerBTN'>Don't Have an Account Create Now</button></NavLink>
    </div>
  )
}

export default Login
