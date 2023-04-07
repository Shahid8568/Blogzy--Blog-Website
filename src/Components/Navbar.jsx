import React from 'react'
import {NavLink} from "react-router-dom";

const Navbar = () => {

  return (
    <header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <NavLink to="/" id='wName' className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
         BLOGZY
        </NavLink>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li id='responseLi'><NavLink to="/" className="nav-link px-2 text-white">Home</NavLink></li>
          <li><NavLink to="/About" className="nav-link px-2 text-white">About</NavLink></li>
          <li><NavLink to="/Write" className="nav-link px-2 text-white">Write</NavLink></li>
          <li><NavLink to="/Blogs" className="nav-link px-2 text-white">Blogs</NavLink></li>
        </ul>

        <div className="text-end">
          <NavLink to="/Login"><button type="button" className="btn btn-primary me-2">Login</button></NavLink>
          <NavLink to="/SignUp">
          <button type="button" className="btn btn-danger">Sign-up</button>
          </NavLink>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Navbar