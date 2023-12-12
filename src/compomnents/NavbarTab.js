import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarTab = () => {
  return (
    <div>
     
 
     <nav class="navbar navbar-expand-lg navbar-light bg-success">
  <div class="container-fluid">
 
    <a class="navbar-brand" href="#">
      <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24"/>
    </a>
 
    {/* <div class="collapse navbar-collapse" id="navbarSupportedContent"> */}
      <ul class="navbar-nav content-justify-end">
        <li class="nav-item">
          <a class="nav-link "  href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#" >Disabled</a>
        </li>
      </ul>
      
    </div>
  {/* </div> */}
</nav>

    </div>
  )
}

export default NavbarTab
