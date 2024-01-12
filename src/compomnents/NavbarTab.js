import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {NavLink} from 'react-router-dom'

const NavbarTab = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark bg-gradient
">
  <div className="container-fluid">
 
    <NavLink className="navbar-brand" to="/">
    <p className="fs-5 text-light ">GNK <span className="text-warning ">Solutions...</span></p>
    
    </NavLink>
 
    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
      <ul className="navbar-nav content-justify-end px-5 ">
        <li className="nav-item ">
          <NavLink className="nav-link text-light  px-3"  to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light px-3 "  to="/about">About</NavLink>
        </li>


<li className="nav-item dropdown">

   <NavLink className="nav-link text-light px-3 " 
    to="/service"
    style={{ display: 'inline-block' }}>
      Service
      </NavLink>
    <NavLink className="nav-link text-light px-1 btn dropdown-toggle" 
    to="/service" 
    id="navbarDropdown" 
    role="button"
     data-bs-toggle="dropdown"
      aria-haspopup="true"
       aria-expanded="false"
       style={{ display: 'inline' }}>

       </NavLink>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li className="dropdown-item">  <NavLink className="nav-link  px-3"  to="/web">Web Development</NavLink></li>
        <li className="dropdown-item">  <NavLink className="nav-link  px-3"  to="/design">Web Design</NavLink></li>
        <li className="dropdown-item">  <NavLink className="nav-link  px-3"  to="/tsting">Software testing</NavLink></li>
        <li className="dropdown-item">  <NavLink className="nav-link  px-3"  to="/developer">Software Development</NavLink></li>
        <li className="dropdown-item">  <NavLink className="nav-link  px-3"  to="/Android">Mobile App Development </NavLink></li>
        <li className="dropdown-item">  <NavLink className="nav-link  px-3"  to="/digit">Digital Marketing</NavLink></li>
        <li className="dropdown-item">  <NavLink className="nav-link  px-3"  to="/contact"></NavLink></li>
      </ul>
    </li>
      

        <li className="nav-item">
          <NavLink className="nav-link text-light px-3"  to="/contact">Contact</NavLink>
        </li>
        
      </ul>
      
    </div>
  {/* </div> */}
</nav>

    </div>
  )
}

export default NavbarTab
