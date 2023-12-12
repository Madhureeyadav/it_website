import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';


const BackgroundImage = () => {
  return (
    <div className="bg-image" style={{ backgroundImage: "url('./img/it.jpg')",backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat' }}>
    <div className="container text-info d-flex align-items-center justify-content-left" style={{ height: '80vh' ,backgroundImage: "linear-gradient(right to,rgba(255, 255, 255, 0.9), rgba(0, 0, 0, 0.1))"}}>
      <div className="row">
        <div className="col">
        <p class="h1"> Welcome to GNk  Solutions India Pvt. Ltd</p>
        <p class="h2 pb-3">Improve the experience and explore your self </p>
        <button type="button " href="#" class="btn btn-outline-info  d-grid  col-6 mx-auto btn-lg">Explore </button>
        </div>
       
      </div>
    </div>
    </div>
 
  )
}

export default BackgroundImage;
