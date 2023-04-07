import React from 'react'
import {NavLink} from "react-router-dom"

const SignUp = () => {
  return (
    <div className='d-flex signUp' style={{justifyContent:"center",alignItems:"center",height:"71.5vh",}}>
     <div className="login">
    
    <h3 className="h3">BLOGZY</h3>
    <i className="fa-sharp fa-solid fa-xmark" id="close-btn"></i>
    <input type="text" name="" id="login" placeholder="Username" /> <br />
    <input type="email" name="" id="login" placeholder="Email" /> <br />
    <input type="password" name="" id="password" placeholder="Password" />
    <button className="btn btn-primary signBtn">Sing Up</button>
  </div> 
    <NavLink to="/Login"><button className='btn btn-danger' id='registerBTN'>Already Have an Accout Login Now</button></NavLink>
    </div>
  )
}

export default SignUp
