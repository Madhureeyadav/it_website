import React from 'react'
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <>
         <nav className=" sticky-top navbar-light bg-light">
  <div className="container-fluid bg-secondary">
   <NavLink className="navbar-brand " to="/">email:info@gmail</NavLink>
   <NavLink className="navbar-brand " to="/">number:8473387947</NavLink>
  </div>
</nav>
    </>
  )
}

export default Navbar
